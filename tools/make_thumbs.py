# -*- coding: utf-8 -*-
"""
Готує мініатюри для галереї сайту.

Для кожного зображення з portfolio/images/ створює зменшену копію
в portfolio/images/thumbs/ (ширина до 1000 px) і записує assets/media.js —
карту «оригінал → мініатюра + розміри обох файлів».

Сторінка віддає браузеру обидва варіанти через srcset: на звичайному екрані
береться легка копія, на щільному (Retina, телефон) — оригінал без стиснення.
Розміри потрібні, щоб браузер резервував місце й сторінка не стрибала.

Запуск:  python tools/make_thumbs.py
"""

import io
import json
import os

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(ROOT, "portfolio", "images")
THUMB_DIR = os.path.join(SRC_DIR, "thumbs")
OUT_JS = os.path.join(ROOT, "assets", "media.js")

MAX_W = 1000         # для сітки на звичайному екрані; оригінал лишається в srcset
QUALITY = 88


def main():
    os.makedirs(THUMB_DIR, exist_ok=True)
    media = {}
    saved = 0
    total = 0

    for name in sorted(os.listdir(SRC_DIR)):
        path = os.path.join(SRC_DIR, name)
        if not os.path.isfile(path) or not name.lower().endswith((".jpg", ".jpeg", ".png")):
            continue

        with Image.open(path) as im:
            im = im.convert("RGB")
            w, h = im.size
            if w > MAX_W:
                nh = round(h * MAX_W / w)
                im = im.resize((MAX_W, nh), Image.LANCZOS)
            tw, th = im.size

            buf = io.BytesIO()
            im.save(buf, "JPEG", quality=QUALITY, optimize=True, progressive=True)

        data = buf.getvalue()
        orig_size = os.path.getsize(path)
        total += orig_size

        thumb_rel = "portfolio/images/thumbs/" + os.path.splitext(name)[0] + ".jpg"
        entry = {"w": w, "h": h}          # w/h — розміри оригіналу, для srcset і пропорцій
        # якщо мініатюра не легша за оригінал — обходимось самим оригіналом
        if len(data) < orig_size * 0.92:
            with open(os.path.join(ROOT, thumb_rel), "wb") as f:
                f.write(data)
            saved += orig_size - len(data)
            entry["t"] = thumb_rel
            entry["tw"] = tw
        media["portfolio/images/" + name] = entry

    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write("/* Створено автоматично: python tools/make_thumbs.py — не правити вручну. */\n")
        f.write("var MEDIA = ")
        f.write(json.dumps(media, ensure_ascii=False, indent=1, sort_keys=True))
        f.write(";\n")

    print("зображень: %d, оригінали %.1f МБ, легкі копії %.1f МБ"
          % (len(media), total / 1048576.0, (total - saved) / 1048576.0))


if __name__ == "__main__":
    main()

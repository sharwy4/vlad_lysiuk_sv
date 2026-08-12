# -*- coding: utf-8 -*-
"""
Готує мініатюри для галереї сайту.

Для кожного зображення з portfolio/images/ створює зменшену копію
в portfolio/images/thumbs/ (ширина до 900 px) і записує assets/media.js —
карту «оригінал → мініатюра + розміри». Розміри потрібні, щоб браузер
резервував місце під зображення й сторінка не стрибала під час завантаження.

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

MAX_W = 900          # ширини вистачає для сітки на екрані 2x
QUALITY = 82


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
        # якщо мініатюра не легша за оригінал — беремо оригінал
        if len(data) < orig_size * 0.92:
            with open(os.path.join(ROOT, thumb_rel), "wb") as f:
                f.write(data)
            saved += orig_size - len(data)
            media["portfolio/images/" + name] = {"t": thumb_rel, "w": tw, "h": th}
        else:
            media["portfolio/images/" + name] = {"t": "portfolio/images/" + name, "w": w, "h": h}

    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write("/* Створено автоматично: python tools/make_thumbs.py — не правити вручну. */\n")
        f.write("var MEDIA = ")
        f.write(json.dumps(media, ensure_ascii=False, indent=1, sort_keys=True))
        f.write(";\n")

    print("зображень: %d, було %.1f МБ, у галереї стане %.1f МБ"
          % (len(media), total / 1048576.0, (total - saved) / 1048576.0))


if __name__ == "__main__":
    main()

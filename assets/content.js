/* ===================================================================
   ВЕСЬ ТЕКСТ САЙТУ — ТІЛЬКИ ТУТ
   Кожен рядок має дві версії: uk (українська) та en (англійська).
   Щоб змінити текст — правте цей файл, більше нічого чіпати не треба.
   =================================================================== */

const CONTENT = {

/* ---------- Інтерфейс: кнопки, заголовки розділів ---------- */
ui: {
  siteTitle:   { uk: "Владислав Лисюк — інженер-розробник електроніки",
                 en: "Vladyslav Lysiuk — electronics design engineer" },
  navAbout:    { uk: "Про мене",     en: "About" },
  navExp:      { uk: "Досвід",       en: "Experience" },
  navEdu:      { uk: "Освіта",       en: "Education" },
  navSkills:   { uk: "Навички",      en: "Skills" },
  navBoards:   { uk: "Виконані проекти", en: "Completed projects" },
  navPubs:     { uk: "Публікації",   en: "Publications" },
  navMore:     { uk: "Гранти",       en: "Grants" },
  cvButton:    { uk: "CV у PDF",     en: "CV as PDF" },
  /* Кожна мова веде на свій файл резюме */
  cvFile:      { uk: "cv/Lysiuk_CV.pdf", en: "cv/Lysiuk_CV_EN.pdf" },
  boardsPdf:   { uk: "Портфоліо плат у PDF", en: "Board portfolio as PDF" },
  copy:        { uk: "Копіювати",    en: "Copy" },
  copied:      { uk: "Скопійовано",  en: "Copied" },
  role:        { uk: "Моя роль",     en: "My role" },
  close:       { uk: "Закрити",      en: "Close" },
  present:     { uk: "дотепер",      en: "present" },
  langLabel:   { uk: "Мова",         en: "Language" },
  eyebrow:     { uk: "Розробка апаратури та друкованих плат",
                 en: "Hardware / PCB design engineer" },
  themeToDark: { uk: "Темна тема",   en: "Dark theme" },
  themeToLight:{ uk: "Світла тема",  en: "Light theme" },
  skipLink:    { uk: "Перейти до вмісту", en: "Skip to content" },
  prevImage:   { uk: "Попереднє зображення", en: "Previous image" },
  nextImage:   { uk: "Наступне зображення",  en: "Next image" },
  menuLabel:   { uk: "Розділи",      en: "Sections" },
  sectionAbout:{ uk: "Про мене",       en: "About" },
  sectionExp:  { uk: "Досвід",         en: "Experience" },
  sectionEdu:  { uk: "Освіта",         en: "Education" },
  sectionSkills:{uk: "Технічні навички", en: "Technical skills" },
  sectionBoards:{uk: "Виконані проекти", en: "Completed projects" },
  sectionPubs: { uk: "Публікації",     en: "Publications" },
  sectionGrants:{uk: "Гранти та міжнародні програми", en: "Grants and international programmes" },
  sectionAwards:{uk: "Відзнаки",       en: "Awards" },
  sectionLangs:{ uk: "Мови",           en: "Languages" }
},

/* ---------- Шапка ---------- */
hero: {
  name:    { uk: "Владислав Лисюк", en: "Vladyslav Lysiuk" },
  role:    { uk: "Інженер-розробник електроніки", en: "Electronics design engineer" },
  role2:   { uk: "Hardware / PCB Design", en: "Hardware / PCB Design" },
  city:    { uk: "Чернігів, Україна", en: "Chernihiv, Ukraine" },
  born:    { uk: "01.04.2005", en: "1 Apr 2005" },
  bornLabel:{ uk: "Народження", en: "Born" },
  cityLabel:{ uk: "Місто", en: "Location" },
  mailLabel:{ uk: "Пошта", en: "E-mail" },
  phoneLabel:{ uk: "Телефон", en: "Phone" },
  email:   "vladik201611@gmail.com",
  phone:   "+380 68 520 27 41",
  phoneHref: "+380685202741",
  photoAlt:{ uk: "Владислав Лисюк", en: "Vladyslav Lysiuk" }
},

/* ---------- Про мене ---------- */
about: {
  uk: "Молодший інженер з розробки електроніки. Досвід повного циклу створення пристроїв: розробка електричних принципових схем, створення бібліотек компонентів в Altium Designer, компонування та трасування друкованих плат, монтаж і паяння прототипів, налагодження, тестові прошивки для мікроконтролерів STM32, Arduino Uno. Моделювання в Micro-Cap, Ansys (PyAEDT) та MATLAB. Учасник міжнародних проєктів Erasmus+ (DIGITRANS), DAAD Eastern Partnerships та Horizon Europe (NGI Search). Диплом бакалавра з відзнакою.",
  en: "Junior electronics design engineer. Experience across the full device development cycle: designing schematics, building component libraries in Altium Designer, placement and routing of printed circuit boards, assembly and soldering of prototypes, bring-up, test firmware for STM32 and Arduino Uno microcontrollers. Simulation in Micro-Cap, Ansys (PyAEDT) and MATLAB. Participant of the international projects Erasmus+ (DIGITRANS), DAAD Eastern Partnerships and Horizon Europe (NGI Search). Bachelor's degree with honours."
},

/* ---------- Ключові цифри в шапці ---------- */
facts: [
  { n: "7",  label: { uk: "розроблених плат", en: "boards designed" } },
  { n: "5",  label: { uk: "виготовлено й змонтовано", en: "fabricated and assembled" } },
  { n: "8",  label: { uk: "публікацій", en: "publications" } },
  { n: "3",  label: { uk: "міжнародні програми", en: "international programmes" } }
],

/* ---------- Досвід ---------- */
experience: [
  {
    date: { uk: "2023 – 2024", en: "2023 – 2024" },
    title: { uk: "Апаратна частина віддаленої лабораторії силової електроніки (LabDiscoveryEngine)",
             en: "Hardware part of the remote power electronics laboratory (LabDiscoveryEngine)" },
    org: { uk: "Національний університет «Чернігівська політехніка» — у складі проєкту NGI Search, Horizon Europe, проєкт № 101069364",
           en: "Chernihiv Polytechnic National University — within the NGI Search project, Horizon Europe, project No. 101069364" },
    tag: { uk: "Horizon Europe", en: "Horizon Europe" },
    bullets: [
      { uk: "Створення бібліотек компонентів та оформлення електричних принципових схем в Altium Designer.",
        en: "Building component libraries and drawing schematics in Altium Designer." },
      { uk: "Компонування та трасування друкованої плати силової електроніки під керівництвом викладача.",
        en: "Placement and routing of the power electronics board under a lecturer's supervision." },
      { uk: "Монтаж і паяння плат; зібрані стенди дотепер працюють у навчальному процесі університету.",
        en: "Assembly and soldering of the boards; the finished benches are still in use in the university's teaching process." }
    ],
    links: [ { label: { uk: "Тези «Юність науки – 2024», с. 1039", en: "Proceedings “Youth Science – 2024”, p. 1039" },
               href: "http://ir.stu.cn.ua/handle/123456789/30262" } ]
  },
  {
    date: { uk: "2024 – 2025", en: "2024 – 2025" },
    title: { uk: "Апаратна частина віддаленої лабораторії мікропроцесорної техніки",
             en: "Hardware part of the remote microprocessor technology laboratory" },
    org: { uk: "EACEA, Erasmus+ Capacity Building, проєкт № 101127683 — DIGITRANS",
           en: "EACEA, Erasmus+ Capacity Building, project No. 101127683 — DIGITRANS" },
    tag: { uk: "Erasmus+", en: "Erasmus+" },
    bullets: [
      { uk: "Розробка шилда (плати розширення) для стенда STM32 NUCLEO-H723: бібліотеки компонентів, робота зі схемами, самостійне компонування та трасування плати.",
        en: "Development of a shield (expansion board) for the STM32 NUCLEO-H723 bench: component libraries, schematic work, independent placement and routing of the board." },
      { uk: "Тестування та пайка плат.",
        en: "Testing and soldering of the boards." },
      { uk: "Складання і підключення стендів (Nucleo + Raspberry Pi + Analog Discovery); стенди працюють в університеті.",
        en: "Assembly and wiring of the benches (Nucleo + Raspberry Pi + Analog Discovery); the benches are in use at the university." },
      { uk: "Тестові прошивки для мікроконтролера: керування світлодіодами та виведення інформації на 7-сегментний індикатор із мультиплексуванням за зовнішніми сигналами.",
        en: "Test firmware for the microcontroller: LED control and output to a 7-segment display with multiplexing driven by external signals." }
    ],
    links: [
      { label: { uk: "Тези НТСС-2024, с. 102", en: "NTSS-2024 proceedings, p. 102" },
        href: "http://ir.stu.cn.ua/handle/123456789/32382" },
      { label: { uk: "Профіль виконавця", en: "Performer profile" },
        href: "https://hub.stu.cn.ua/project-performer/lysyuk-vladyslav-pavlovych/" }
    ]
  },
  {
    date: { uk: "24.10.2024 – 24.12.2024", en: "24 Oct 2024 – 24 Dec 2024" },
    title: { uk: "Багатоканальна система вимірювання температури термопарами",
             en: "Multichannel thermocouple temperature measurement system" },
    org: { uk: "DAAD Eastern Partnerships 2023–2025, стипендія «Student Exchange with Online Participation»",
           en: "DAAD Eastern Partnerships 2023–2025, “Student Exchange with Online Participation” scholarship" },
    tag: { uk: "DAAD", en: "DAAD" },
    bullets: [
      { uk: "Моделювання аналогового тракту (комутація, підсилення сигналу термопар J/K типу) в Micro-Cap.",
        en: "Simulation of the analogue path (switching, amplification of J/K type thermocouple signals) in Micro-Cap." },
      { uk: "Розрахунок схем комутації підсилення та фільтрації, вибір комплектуючих, перевірка фільтрації та часу перемикання в лабораторних умовах.",
        en: "Calculation of the switching, amplification and filtering circuits, component selection, verification of filtering and switching time under laboratory conditions." },
      { uk: "Макетування 2-канального прототипу на макетній платі, керування та тестування через Arduino.",
        en: "Breadboarding of a 2-channel prototype, control and testing via Arduino." },
      { uk: "Доопрацювання схеми та бібліотек існуючого проєкту плати 24-канальної системи вимірювання; наступного року — самостійна розводка плати в Altium Designer.",
        en: "Reworking the schematic and libraries of the existing 24-channel measurement board project; the following year — independent routing of the board in Altium Designer." }
    ],
    links: [
      { label: { uk: "Тези «Юність науки – 2025», с. 1012", en: "Proceedings “Youth Science – 2025”, p. 1012" },
        href: "http://ir.stu.cn.ua/handle/123456789/32545" },
      { label: { uk: "Профіль виконавця", en: "Performer profile" },
        href: "https://hub.stu.cn.ua/project-performer/lysyuk-vladyslav-pavlovych/" }
    ]
  },
  {
    date: { uk: "11.2025 – 12.2025", en: "Nov 2025 – Dec 2025" },
    title: { uk: "Міжнародне стажування — Hochschule Bonn-Rhein-Sieg",
             en: "International internship — Hochschule Bonn-Rhein-Sieg" },
    org: { uk: "University of Applied Sciences Bonn-Rhein-Sieg, м. Занкт-Августін, Німеччина — у рамках DAAD Eastern Partnerships, проєкт № 57634194",
           en: "University of Applied Sciences Bonn-Rhein-Sieg, Sankt Augustin, Germany — within DAAD Eastern Partnerships, project No. 57634194" },
    tag: { uk: "Німеччина", en: "Germany" },
    bullets: [
      { uk: "Міжнародна програма стажування (07.11.2025 – 07.12.2025), сертифікат про успішне проходження.",
        en: "International internship programme (7 Nov 2025 – 7 Dec 2025), certificate of successful completion." },
      { uk: "Розводка плати багатоканальної системи вимірювання температури в Altium Designer, розводка плати для кваліфікаційної роботи та супутні інженерні задачі.",
        en: "Routing of the multichannel temperature measurement board in Altium Designer, routing of the board for the qualification work and related engineering tasks." }
    ],
    links: [ { label: { uk: "Сертифікат", en: "Certificate" },
               href: "https://drive.google.com/file/d/1uHTCfVhgf4touyQB5vbU6JxceFJbixoN/view?usp=sharing" } ]
  },
  {
    date: { uk: "05.2026 – 06.2026", en: "May 2026 – Jun 2026" },
    title: { uk: "Переддипломна практика — Hochschule Bonn-Rhein-Sieg",
             en: "Pre-diploma internship — Hochschule Bonn-Rhein-Sieg" },
    org: { uk: "University of Applied Sciences Bonn-Rhein-Sieg, м. Занкт-Августін, Німеччина — DAAD «Eastern Partnership», проєкт № 57634194",
           en: "University of Applied Sciences Bonn-Rhein-Sieg, Sankt Augustin, Germany — DAAD “Eastern Partnership”, project No. 57634194" },
    tag: { uk: "Німеччина", en: "Germany" },
    bullets: [
      { uk: "Переддипломна практика в рамках короткострокової академічної мобільності (02.05 – 10.06.2026), грант DAAD.",
        en: "Pre-diploma internship within short-term academic mobility (2 May – 10 Jun 2026), DAAD grant." }
    ],
    links: []
  },
  {
    date: { uk: "2025 – 2026", en: "2025 – 2026" },
    title: { uk: "Дослідження та розробки в галузі силової електроніки",
             en: "Research and development in power electronics" },
    org: { uk: "Кафедра електроніки, автоматики, робототехніки та мехатроніки",
           en: "Department of Electronics, Automation, Robotics and Mechatronics" },
    tag: { uk: "Дослідження", en: "Research" },
    bullets: [
      { uk: "Дослідження алгоритму керування електромагнітними клапанами (трифазний профіль спрацювання) на базі STM32H743; результати опубліковано в тезах конференції «Юність науки – 2026», сторінка 1094.",
        en: "Research on a control algorithm for solenoid valves (three-phase actuation profile) based on STM32H743; results published in the proceedings of “Youth Science – 2026”, page 1094." },
      { uk: "Розводка плати модуля драйвера керування SiC-транзисторами та моделювання паразитної ємності доріжок друкованої плати в Ansys. Результати опубліковано на КЗЯТПС-25, том 3, сторінка 19.",
        en: "Routing of the SiC transistor gate driver module board and simulation of the parasitic capacitance of PCB traces in Ansys. Results published at KZYATPS-25, volume 3, page 19." },
      { uk: "Співавтор дослідження феромагнітного екранування в системах бездротової передачі енергії (моделювання через PyAEDT/Ansys), публікація на конференції «Комплексне забезпечення якості технологічних процесів та систем», 2025.",
        en: "Co-author of a study on ferromagnetic shielding in wireless power transfer systems (simulation via PyAEDT/Ansys), published at the conference “Comprehensive Quality Assurance of Technological Processes and Systems”, 2025." },
      { uk: "Виконавець проєкту «Моделювання та оптимізація активаційних конденсаторів для гібридних систем динамічної бездротової передачі енергії» (конкурс наукових робіт молодих учених).",
        en: "Performer of the project “Simulation and optimisation of activation capacitors for hybrid dynamic wireless power transfer systems” (young scientists' research competition)." },
      { uk: "Кваліфікаційна робота бакалавра: «Система керування електромагнітними клапанами з бездротовим обміном даними» — самостійна розробка плати, прошивки контролера та MATLAB-моделі.",
        en: "Bachelor's qualification work: “Solenoid valve control system with wireless data exchange” — independent development of the board, controller firmware and MATLAB model." }
    ],
    links: [
      { label: { uk: "Тези «Юність науки – 2026»", en: "Proceedings “Youth Science – 2026”" },
        href: "https://ir.stu.cn.ua/handle/123456789/35067" },
      { label: { uk: "КЗЯТПС-25, том 3", en: "KZYATPS-25, volume 3" },
        href: "https://drive.google.com/file/d/1juZTLLvSuyn-di0HTmq1ew8Ju6fRK2ki/view" },
      { label: { uk: "Феромагнітне екранування, ResearchGate", en: "Ferromagnetic shielding, ResearchGate" },
        href: "https://www.researchgate.net/publication/392126449_Analysis_of_ferromagnetic_shielding_patterns_in_wireless_power_transfer_applications_using_the_PyAEDT_library_in_Ansys" }
    ]
  }
],

/* ---------- Освіта ---------- */
education: [
  {
    date: { uk: "09.2022 – 06.2026", en: "Sep 2022 – Jun 2026" },
    title: { uk: "Бакалавр (диплом з відзнакою) — 172 Телекомунікації та радіотехніка",
             en: "Bachelor (degree with honours) — 172 Telecommunications and Radio Engineering" },
    org: { uk: "Національний університет «Чернігівська політехніка», м. Чернігів, Україна",
           en: "Chernihiv Polytechnic National University, Chernihiv, Ukraine" },
    tag: { uk: "Рівень 6 ЄРК / НРК", en: "EQF / NQF level 6" },
    bullets: [
      { uk: "Тема випускної кваліфікаційної роботи: «Система керування електромагнітними клапанами з бездротовим обміном даними».",
        en: "Topic of the final qualification work: “Solenoid valve control system with wireless data exchange”." },
      { uk: "У рамках диплому виконував розрахунки схем, розводку друкованої плати, прошивку мікроконтролера та моделювання у MATLAB (схемотехніка — від наукового керівника, робота під його керівництвом).",
        en: "Within the diploma I performed circuit calculations, PCB routing, microcontroller firmware and MATLAB simulation (the circuit design came from the supervisor, the work was done under his guidance)." }
    ],
    links: []
  }
],

/* ---------- Навички ---------- */
skills: [
  {
    group: { uk: "Схемотехніка та проєктування", en: "Circuit design and layout" },
    text: { uk: "Розробка електричних принципових схем; Altium Designer (бібліотеки компонентів, схеми, компонування, трасування плат, у т.ч. силова електроніка).",
            en: "Development of schematics; Altium Designer (component libraries, schematics, placement, board routing, including power electronics)." },
    items: ["Altium Designer", "Schematic capture", "PCB layout", "Component libraries", "Power electronics"]
  },
  {
    group: { uk: "Моделювання", en: "Simulation" },
    text: { uk: "Micro-Cap, Ansys / PyAEDT (електромагнітне моделювання, паразитні параметри), MATLAB/Simulink.",
            en: "Micro-Cap, Ansys / PyAEDT (electromagnetic simulation, parasitic parameters), MATLAB/Simulink." },
    items: ["Micro-Cap", "Ansys", "PyAEDT", "MATLAB", "Simulink"]
  },
  {
    group: { uk: "Вбудовані системи", en: "Embedded systems" },
    text: { uk: "STM32, Arduino; C для мікроконтролерів; робота з UART, PWM, ADC, I2C, SPI.",
            en: "STM32, Arduino; C for microcontrollers; work with UART, PWM, ADC, I2C, SPI." },
    items: ["STM32", "Arduino", "C", "UART", "PWM", "ADC", "I2C", "SPI"]
  },
  {
    group: { uk: "Практика", en: "Hands-on" },
    text: { uk: "Монтаж і паяння (THT/SMD), макетування, з використанням вимірювального обладнання.",
            en: "Assembly and soldering (THT/SMD), breadboarding, using measurement equipment." },
    items: ["THT", "SMD", "Soldering", "Breadboarding", "Oscilloscope"]
  }
],

/* ---------- Плати ---------- */
projects: [
  {
    id: "b01",
    title: { uk: "Термометр на ATtiny13", en: "Thermometer on ATtiny13" },
    meta: { uk: "Курсовий проєкт із дисципліни «Сучасні САПР РЕА» · 2 шари · 2023",
            en: "Course project in “Modern CAD for electronic equipment” · 2 layers · 2023" },
    chips: ["Altium Designer", { uk: "2 шари", en: "2 layers" }, "ATtiny13", { uk: "Перша робота", en: "First board" }],
    notes: [
      { uk: "Перша самостійна робота в Altium Designer.",
        en: "The first board I did on my own in Altium Designer." },
      { uk: "Призначення — кімнатний термометр: датчик LM35, зсувні регістри 74HC595, три 7-сегментні індикатори.",
        en: "Purpose — a room thermometer: LM35 sensor, 74HC595 shift registers, three 7-segment displays." }
    ],
    role: { uk: "Бібліотека компонентів, схема електрична принципова, трасування плати, комплект конструкторської документації.",
            en: "Component library, schematic, board routing, full set of design documentation." },
    images: [
      { src: "portfolio/images/temp_iso.jpg", wide: true,
        cap: { uk: "3D-вигляд в Altium Designer.", en: "3D view in Altium Designer." } },
      { src: "portfolio/images/temp_3d_top.jpg",
        cap: { uk: "Вигляд зверху.", en: "Top view." } },
      { src: "portfolio/images/temp_layout.jpg",
        cap: { uk: "Розводка, два шари.", en: "Routing, two layers." } }
    ]
  },
  {
    id: "b02",
    title: { uk: "Плата віддаленої лабораторії силової електроніки",
             en: "Remote power electronics laboratory board" },
    meta: { uk: "Horizon Europe · NGI Search, грант № 101069364 · 2 шари · партія 5 шт · 2023–2024",
            en: "Horizon Europe · NGI Search, grant No. 101069364 · 2 layers · batch of 5 · 2023–2024" },
    chips: ["Altium Designer", { uk: "Понижувальний перетворювач", en: "Buck converter" }, "Horizon Europe"],
    notes: [
      { uk: "Перший виробничий проєкт, у якому брав участь — плата пройшла повний шлях від схеми до виготовлення й монтажу.",
        en: "The first production project I took part in — the board went the whole way from schematic to fabrication and assembly." }
    ],
    role: { uk: "Бібліотека компонентів та оформлення схем в Altium Designer, компонування та трасування плати, повне складання й пайка всіх п'яти плат.",
            en: "Component library and schematics in Altium Designer, placement and routing of the board, full assembly and soldering of all five boards." },
    images: [
      { src: "portfolio/images/buck_3d.jpg", wide: true,
        cap: { uk: "3D-вигляд в Altium Designer.", en: "3D view in Altium Designer." } },
      { src: "portfolio/images/buck_layout.jpg", wide: true,
        cap: { uk: "Розводка.", en: "Routing." } },
      { src: "portfolio/images/ngi_assembled.jpg", wide: true,
        cap: { uk: "Зібрана плата.", en: "Assembled board." } },
      { src: "portfolio/images/ngi_batch.jpg",
        cap: { uk: "Виготовлена партія.", en: "Fabricated batch." } },
      { src: "portfolio/images/ngi_stand.jpg",
        cap: { uk: "У складі стенда разом із Raspberry Pi та Analog Discovery.",
               en: "Inside the bench together with Raspberry Pi and Analog Discovery." } }
    ],
    footnote: { uk: "Виконано в рамках проєкту NGI Search, грантова угода № 101069364.",
                en: "Carried out within the NGI Search project, grant agreement No. 101069364." }
  },
  {
    id: "b03",
    title: { uk: "Плата розширення для STM32 NUCLEO-H723",
             en: "Expansion board for STM32 NUCLEO-H723" },
    meta: { uk: "Віддалена лабораторія мікропроцесорної техніки · 2 шари, висока щільність · Erasmus+ DIGITRANS · 2024–2025",
            en: "Remote microprocessor technology laboratory · 2 layers, high density · Erasmus+ DIGITRANS · 2024–2025" },
    chips: ["Altium Designer", { uk: "2 шари, висока щільність", en: "2 layers, high density" }, "STM32H723", { uk: "C для МК", en: "C for MCU" }],
    notes: [
      { uk: "Розведено лише на двох шарах відповідно до виробничого бюджету проєкту.",
        en: "Routed on two layers only, in line with the project's manufacturing budget." },
      { uk: "Посадкові місця й контур узгоджені з налагоджувальним стендом NUCLEO-H723.",
        en: "Footprints and board outline matched to the NUCLEO-H723 development bench." },
      { uk: "П'ять комплектів зібрано вручну (THT + SMD) та інтегровано в навчальні стенди разом із Raspberry Pi і Analog Discovery.",
        en: "Five sets assembled by hand (THT + SMD) and integrated into teaching benches together with Raspberry Pi and Analog Discovery." }
    ],
    role: { uk: "Бібліотека компонентів, робота зі схемами та розводка плати виконана під керівництвом провідного інженера. Складання та пайка всіх п'яти комплектів, тестові прошивки.",
            en: "Component library, schematic work and board routing done under the guidance of a lead engineer. Assembly and soldering of all five sets, test firmware." },
    images: [
      { src: "portfolio/images/shield_iso.jpg",
        cap: { uk: "3D-вигляд в Altium Designer.", en: "3D view in Altium Designer." } },
      { src: "portfolio/images/shield_layout.jpg",
        cap: { uk: "Розводка, обидва шари.", en: "Routing, both layers." } },
      { src: "portfolio/images/shield_assembled.jpg",
        cap: { uk: "Плата після SMD-монтажу.", en: "Board after SMD assembly." } },
      { src: "portfolio/images/shield_nucleo.jpg",
        cap: { uk: "Встановлено на NUCLEO-H723.", en: "Mounted on NUCLEO-H723." } },
      { src: "portfolio/images/shield_stand.jpg", wide: true,
        cap: { uk: "Стенд у робочому стані: Analog Discovery 2, шилд із Nucleo та Raspberry Pi на спільній панелі.",
               en: "The bench in operation: Analog Discovery 2, the shield with Nucleo and a Raspberry Pi on a shared panel." } }
    ]
  },
  {
    id: "b04",
    title: { uk: "24-канальна система вимірювання температури термопарами",
             en: "24-channel thermocouple temperature measurement system" },
    meta: { uk: "Промислова вимірювальна плата · 4 шари · STM32F4 · виготовлено в Німеччині · 2025–2026",
            en: "Industrial measurement board · 4 layers · STM32F4 · fabricated in Germany · 2025–2026" },
    chips: ["Altium Designer", "STM32", { uk: "Гальванічна розв'язка", en: "Galvanic isolation" }, { uk: "Термопари J/K", en: "J/K thermocouples" }],
    notes: [
      { uk: "Не розробка з нуля — адаптація наявного промислового проєкту під нові вимоги замовника.",
        en: "Not a from-scratch development — adaptation of an existing industrial project to the customer's new requirements." }
    ],
    role: { uk: "Перероблення схеми вимірювального тракту термопар, схема комутації каналів, вилучення невикористаних блоків проєкту. Зміни в бібліотеці компонентів, внесення змін в друковану плату. Виконано під час стажування в Hochschule Bonn-Rhein-Sieg (DAAD Eastern Partnership).",
            en: "Rework of the thermocouple measurement path schematic, the channel switching circuit, removal of unused blocks of the project. Changes to the component library and to the printed circuit board. Done during the internship at Hochschule Bonn-Rhein-Sieg (DAAD Eastern Partnership)." },
    images: [
      { src: "portfolio/images/tc_iso.jpg", wide: true,
        cap: { uk: "3D-вигляд в Altium Designer.", en: "3D view in Altium Designer." } },
      { src: "portfolio/images/tc_top.jpg", wide: true,
        cap: { uk: "Вигляд зверху: функціональні зони.", en: "Top view: functional zones." } },
      { src: "portfolio/images/tc_bottom.jpg", wide: true,
        cap: { uk: "Вид знизу.", en: "Bottom view." } }
    ]
  },
  {
    id: "b05",
    title: { uk: "8-канальний драйвер електромагнітних клапанів",
             en: "8-channel solenoid valve driver" },
    meta: { uk: "Силова електроніка · 4 шари · STM32 · виготовлено, партія 5 шт · 2026",
            en: "Power electronics · 4 layers · STM32 · fabricated, batch of 5 · 2026" },
    chips: ["Altium Designer", "STM32", { uk: "Силова електроніка", en: "Power electronics" }],
    notes: [
      { uk: "Частковий розрахунок схеми та розробка конструкції та плати під керівництвом провідного інженера.",
        en: "Partial circuit calculation and development of the mechanical design and the board under the guidance of a lead engineer." },
      { uk: "Компонування підпорядковане вимозі розділення силової та керуючої частин: силові кола по периметру, мікроконтролер ізольовано в центрі.",
        en: "The placement follows the requirement to separate the power and control sections: power circuits around the perimeter, the microcontroller isolated in the centre." }
    ],
    role: { uk: "Частковий розрахунок номіналів схем, бібліотека компонентів, повна розводка друкованої плати. Робота під наглядом провідного інженера. Основа кваліфікаційної роботи бакалавра.",
            en: "Partial calculation of component values, component library, full routing of the printed circuit board. Work under a lead engineer's supervision. The basis of the bachelor's qualification work." },
    images: [
      { src: "portfolio/images/valve_3d_iso.jpg", wide: true,
        cap: { uk: "3D-вигляд в Altium Designer.", en: "3D view in Altium Designer." } },
      { src: "portfolio/images/valve_3d_top.jpg", wide: true,
        cap: { uk: "Вигляд зверху: дзеркальна симетрія восьми силових каналів, керуюча частина в центрі.",
               en: "Top view: mirror symmetry of the eight power channels, the control section in the centre." } },
      { src: "portfolio/images/valve_board.jpg", wide: true,
        cap: { uk: "Виготовлена плата (партія 5 шт) до монтажу компонентів.",
               en: "The fabricated board (batch of 5) before component assembly." } }
    ]
  },
  {
    id: "b06",
    title: { uk: "Плата, сумісна з Arduino Duemilanove", en: "Arduino Duemilanove compatible board" },
    meta: { uk: "Навчальний проєкт · 2 шари · ATmega328 · THT + SMD",
            en: "Study project · 2 layers · ATmega328 · THT + SMD" },
    chips: ["Altium Designer", { uk: "2 шари", en: "2 layers" }, "ATmega328", "USB", { uk: "Живлення 5 В", en: "5 V supply" }, { uk: "Змішаний монтаж", en: "Mixed assembly" }],
    notes: [
      { uk: "Навчальний проєкт: відтворення плати, сумісної з Arduino Duemilanove — ATmega328 у DIP-корпусі, USB-міст.",
        en: "Study project: recreating a board compatible with Arduino Duemilanove — ATmega328 in a DIP package, USB bridge." },
      { uk: "Змішаний монтаж підібрано під ручну пайку: SMD на верхньому шарі, мікроконтролер і роз'єми — THT.",
        en: "Mixed assembly chosen for hand soldering: SMD on the top layer, the microcontroller and connectors as THT." }
    ],
    role: { uk: "Створення бібліотеки компонентів та розводка плати, навчальний проєкт.",
            en: "Building the component library and routing the board, a study project." },
    images: [
      { src: "portfolio/images/ard_iso.jpg",
        cap: { uk: "3D-вигляд в Altium Designer.", en: "3D view in Altium Designer." } },
      { src: "portfolio/images/ard_top.jpg",
        cap: { uk: "Вигляд зверху.", en: "Top view." } },
      { src: "portfolio/images/ard_layout.jpg", wide: true,
        cap: { uk: "Розводка, обидва шари.", en: "Routing, both layers." } }
    ]
  },
  {
    id: "b07",
    title: { uk: "Драйвер затвора SiC MOSFET для системи динамічного бездротового живлення",
             en: "SiC MOSFET gate driver for a dynamic wireless power transfer system" },
    meta: { uk: "Модуль для інвертора DWPT · 2 шари · 2026",
            en: "Module for a DWPT inverter · 2 layers · 2026" },
    chips: ["Altium Designer", "SiC MOSFET", { uk: "Гальванічна розв'язка", en: "Galvanic isolation" }, "ANSYS"],
    notes: [
      { uk: "Схема не власна: за основу взято референсний драйвер Wolfspeed CGD15SG00D2 для SiC MOSFET 3-го покоління (C3M).",
        en: "The schematic is not my own: the Wolfspeed CGD15SG00D2 reference driver for 3rd generation SiC MOSFETs (C3M) was taken as a basis." },
      { uk: "Конструкцію плати перероблено під вимоги інвертора гібридної системи динамічного бездротового передавання енергії — форму й посадкові розміри адаптовано під модульну заміну.",
        en: "The board design was reworked for the requirements of the inverter of a hybrid dynamic wireless power transfer system — the shape and mounting dimensions were adapted for modular replacement." },
      { uk: "Драйвер виконано окремим модулем, що впаюється у плату інвертора: так вузол можна замінити, не чіпаючи основну плату.",
        en: "The driver is built as a separate module soldered into the inverter board: this way the unit can be replaced without touching the main board." },
      { uk: "Оптимізовано трасування вихідного каскаду для зменшення паразитних ємності та індуктивності при швидкому перемиканні.",
        en: "The output stage routing was optimised to reduce parasitic capacitance and inductance during fast switching." }
    ],
    role: { uk: "Адаптація й повне перекомпонування друкованої плати, бібліотека компонентів, трасування вихідного каскаду, моделювання паразитних параметрів в ANSYS.",
            en: "Adaptation and complete re-layout of the printed circuit board, component library, routing of the output stage, simulation of parasitic parameters in ANSYS." },
    images: [
      { src: "portfolio/images/sic_iso.jpg", wide: true,
        cap: { uk: "3D-вигляд в Altium Designer.", en: "3D view in Altium Designer." } },
      { src: "portfolio/images/sic_top.jpg",
        cap: { uk: "Вид спереду.", en: "Front view." } },
      { src: "portfolio/images/sic_bottom.jpg",
        cap: { uk: "Нижній бік: цифровий ізолятор і кола затвора.", en: "Bottom side: digital isolator and gate circuits." } },
      { src: "portfolio/images/sic_layout.jpg", wide: true,
        cap: { uk: "Розводка: контур плати підігнано під посадку в плату інвертора.",
               en: "Routing: the board outline is fitted to its seat in the inverter board." } }
    ]
  }
],

/* ---------- Публікації ---------- */
publications: [
  { year: "2026",
    text: { uk: "Лисюк В. П., Хоменко М. А. «Багатоканальний пристрій керування електромагнітними клапанами» — Юність науки – 2026, Чернігів, 2026.",
            en: "V. P. Lysiuk, M. A. Khomenko. “Multichannel solenoid valve control device” — Youth Science – 2026, Chernihiv, 2026." },
    href: "https://ir.stu.cn.ua/handle/123456789/35067" },
  { year: "2026",
    text: { uk: "V. Lysiuk, B. Pakhaliuk, A. Strohii, L. Yarmolenko. “Development of an optimized PCB topology for a SiC gate driver in a hybrid dynamic wireless power transfer system”, Chernihiv Polytechnic National University, Chernihiv, 2026, p. 19.",
            en: "V. Lysiuk, B. Pakhaliuk, A. Strohii, L. Yarmolenko. “Development of an optimized PCB topology for a SiC gate driver in a hybrid dynamic wireless power transfer system”, Chernihiv Polytechnic National University, Chernihiv, 2026, p. 19." },
    href: "https://drive.google.com/file/d/1juZTLLvSuyn-di0HTmq1ew8Ju6fRK2ki/view" },
  { year: "2025",
    text: { uk: "L. A. Yarmolenko, V. P. Lysiuk, B. P. Pakhaliuk. “Experimental determination of the growth rate of a copper electrolytic coating for a 3D printed air capacitor”, The latest technologies of modern society (NTSS-2025), Chernihiv, 2025.",
            en: "L. A. Yarmolenko, V. P. Lysiuk, B. P. Pakhaliuk. “Experimental determination of the growth rate of a copper electrolytic coating for a 3D printed air capacitor”, The latest technologies of modern society (NTSS-2025), Chernihiv, 2025." } },
  { year: "2025",
    text: { uk: "B. Pakhaliuk, V. Lysiuk, I. Burmaka, O. Matiushkin, R. Strzelecki. “Simulation analysis of wireless power transfer solutions with hybrid inductive and capacitive coupling”, XX International Conference MODS 2025.",
            en: "B. Pakhaliuk, V. Lysiuk, I. Burmaka, O. Matiushkin, R. Strzelecki. “Simulation analysis of wireless power transfer solutions with hybrid inductive and capacitive coupling”, XX International Conference MODS 2025." } },
  { year: "2025",
    text: { uk: "B. Pakhaliuk, V. Lysiuk, O. Husev. “Analysis of ferromagnetic shielding patterns in wireless power transfer applications using the PyAEDT library in Ansys”, Комплексне забезпечення якості технологічних процесів та систем, травень 2025.",
            en: "B. Pakhaliuk, V. Lysiuk, O. Husev. “Analysis of ferromagnetic shielding patterns in wireless power transfer applications using the PyAEDT library in Ansys”, Comprehensive Quality Assurance of Technological Processes and Systems, May 2025." },
    href: "https://www.researchgate.net/publication/392126449_Analysis_of_ferromagnetic_shielding_patterns_in_wireless_power_transfer_applications_using_the_PyAEDT_library_in_Ansys" },
  { year: "2025",
    text: { uk: "Лисюк В. П., Хоменко М. А. «Багатоканальний вимір температури з використанням термопар J та K типу», XV Міжнародна науково-практична конференція «ЮНІСТЬ НАУКИ – 2025», Чернігів, 2025, с. 1012.",
            en: "V. P. Lysiuk, M. A. Khomenko. “Multichannel temperature measurement using J and K type thermocouples”, XV International Scientific-Practical Conference “YOUTH SCIENCE – 2025”, Chernihiv, 2025, p. 1012." },
    href: "http://ir.stu.cn.ua/handle/123456789/32545" },
  { year: "2024",
    text: { uk: "V. P. Lysiuk, M. A. Khomenko. “Hardware part of the remote laboratory of microprocessor technology”, Новітні технології сучасного суспільства НТСС-2024, Чернігів, 2024, с. 102.",
            en: "V. P. Lysiuk, M. A. Khomenko. “Hardware part of the remote laboratory of microprocessor technology”, The latest technologies of modern society NTSS-2024, Chernihiv, 2024, p. 102." },
    href: "http://ir.stu.cn.ua/handle/123456789/32382" },
  { year: "2024",
    text: { uk: "Лисюк В. П., Хоменко М. А. «Апаратна частина віддаленої лабораторії силової електроніки на базі системи LabDiscoveryEngine» — Юність науки – 2024, Чернігів, 2024, с. 1039.",
            en: "V. P. Lysiuk, M. A. Khomenko. “Hardware part of the remote power electronics laboratory based on the LabDiscoveryEngine system” — Youth Science – 2024, Chernihiv, 2024, p. 1039." },
    href: "http://ir.stu.cn.ua/handle/123456789/30262" }
],

/* ---------- Гранти ---------- */
grants: [
  { uk: "Horizon Europe, NGI Search (HORIZON-CL4-2021-HUMAN-01), проєкт № 101069364 — учасник розробки апаратної частини.",
    en: "Horizon Europe, NGI Search (HORIZON-CL4-2021-HUMAN-01), project No. 101069364 — participant in the hardware development." },
  { uk: "Erasmus+ (EACEA), проєкт № 101127683 DIGITRANS — розробка обладнання віддаленої лабораторії.",
    en: "Erasmus+ (EACEA), project No. 101127683 DIGITRANS — development of remote laboratory equipment." },
  { uk: "DAAD Eastern Partnerships, 24.10.2024 – 24.12.2024 — стипендія «Student Exchange with Online Participation» (900 EUR).",
    en: "DAAD Eastern Partnerships, 24 Oct 2024 – 24 Dec 2024 — “Student Exchange with Online Participation” scholarship (EUR 900)." },
  { uk: "DAAD «Eastern Partnership», проєкт № 57634194 — академічна мобільність до Hochschule Bonn-Rhein-Sieg (07.11.2025 – 07.12.2025, грант 861 EUR).",
    en: "DAAD “Eastern Partnership”, project No. 57634194 — academic mobility to Hochschule Bonn-Rhein-Sieg (7 Nov 2025 – 7 Dec 2025, grant EUR 861)." },
  { uk: "DAAD «Eastern Partnership», проєкт № 57634194 — академічна мобільність до Hochschule Bonn-Rhein-Sieg (02.05 – 10.06.2026, грант 1342 EUR).",
    en: "DAAD “Eastern Partnership”, project No. 57634194 — academic mobility to Hochschule Bonn-Rhein-Sieg (2 May – 10 Jun 2026, grant EUR 1342)." }
],

/* ---------- Відзнаки ---------- */
awards: [
  { uk: "Диплом бакалавра з відзнакою (2026).",
    en: "Bachelor's degree with honours (2026)." },
  { uk: "Подяка Чернігівського міського голови (травень 2024) — за вагомий особистий внесок у зміцнення співпраці на європейському рівні та розвиток демократичних цінностей, з нагоди Дня Європи.",
    en: "Letter of appreciation from the Mayor of Chernihiv (May 2024) — for a significant personal contribution to strengthening cooperation at the European level and to the development of democratic values, on the occasion of Europe Day.",
    href: "https://rtes.stu.cn.ua/2024/05/16/europa-day-event/" }
],

/* ---------- Мови ---------- */
languages: [
  { name: { uk: "Українська", en: "Ukrainian" }, level: "C2", note: { uk: "рідна", en: "native" } },
  { name: { uk: "Англійська", en: "English" },   level: "B2", note: { uk: "читання й розуміння B2, мовлення B1", en: "reading and listening B2, speaking B1" } },
  { name: { uk: "Російська", en: "Russian" },    level: "C2", note: { uk: "", en: "" } }
]

};

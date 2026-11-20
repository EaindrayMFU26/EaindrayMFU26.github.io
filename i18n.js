/*
  Translations for eaindrayiscoding.com
  English lives in index.html itself. Each key below matches a data-i18n="…" attribute there.
  A missing key falls back to the English text, so the page never shows a blank.
*/
window.I18N = (function(){
  var LANGS = {
    'en':      { html:'en',          name:'English',  sub:'English',                code:'EN', intl:'en-US' },
    'th':      { html:'th',          name:'ไทย',      sub:'Thai',                   code:'TH', intl:'th-TH',      font:'Noto+Sans+Thai' },
    'zh-Hans': { html:'zh-Hans',     name:'简体中文', sub:'Mandarin Chinese',  code:'简', intl:'zh-Hans-CN', font:'Noto+Sans+SC' },
    'nan':     { html:'nan-Hant-TW', name:'台語',     sub:'Taiwanese Hokkien',      code:'台', intl:'zh-Hant-TW', font:'Noto+Sans+TC' },
    'de':      { html:'de',          name:'Deutsch',  sub:'German',                 code:'DE', intl:'de-DE' }
  };
  var ORDER = ['en','th','zh-Hans','nan','de'];
  var ALIAS = { 'zh-Hant':'zh-Hans' };   /* Traditional Chinese was retired: old links and saved choices get Simplified */

  var T = {};

  /* ───────────── ไทย ───────────── */
  T['th'] = {
    'meta.title':'Eaindray · นักศึกษาฝึกงานวิศวกร AI',
    'skip':'ข้ามไปยังเนื้อหา',
    'nav.experience':'ประสบการณ์',
    'nav.projects':'โปรเจกต์',
    'nav.awards':'รางวัล',
    'nav.certs':'ใบรับรอง',
    'nav.skills':'ทักษะ',
    'nav.contact':'ติดต่อ',
    'theme.label':'สลับธีมสว่างและมืด',
    'hero.status':'เปิดรับโอกาสฝึกงานด้านวิศวกรรม AI',
    'hero.roles':'นักศึกษาฝึกงานวิศวกร AI|วิศวกรซอฟต์แวร์หุ่นยนต์|วิศวกร Full-Stack|วิศวกรซอฟต์แวร์|วิศวกร MLOps|วิศวกรระบบสมองกลฝังตัว',
    'hero.focus':'แอปพลิเคชัน Generative AI · การทดสอบ · การดูแลระบบ AI',
    'hero.lead':'นักศึกษาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยแม่ฟ้าหลวง ผู้ติดตั้ง ทดสอบ และดูแลโมเดลภาษาขนาดใหญ่ (LLM) ของ <strong>CareMind</strong> แอปพลิเคชัน Generative AI ที่ช่วยร่างบันทึกทางการพยาบาลพร้อมระบุแหล่งที่มา ณ โรงพยาบาลศูนย์การแพทย์ มหาวิทยาลัยแม่ฟ้าหลวง',
    'hero.cv':'ดาวน์โหลด CV',
    'hero.email':'ส่งอีเมล',
    'hero.loc':'เชียงราย ประเทศไทย · คาดว่าจะสำเร็จการศึกษา วศ.บ. พ.ค. 2571',
    'did.1a':'ติดตั้ง LLM ด้วย Ollama ภายใต้ API ที่ปลอดภัยและยืนยันตัวตน บนเซิร์ฟเวอร์ GPU ภายในองค์กร',
    'did.2a':'สร้างชุดทดสอบอัตโนมัติที่รันใน CI ก่อน merge ทุกครั้ง และวัดความแม่นยำของการอ้างอิงได้ 97.7%',
    'did.3a':'ทดสอบโหลด 3,806 คำขอตลอด 3 ชั่วโมง ไม่มีข้อผิดพลาดหรือการทำงานช้าลง และไม่ค้างแม้มีคำขอเข้ามาพร้อมกันจำนวนมาก',
    'jr.eyebrow':'ประสบการณ์และการศึกษา',
    'jr.title':'เส้นทาง<em>ที่ผ่านมา</em>',
    'jr.sub':'การทำงานและการศึกษาในไทม์ไลน์เดียว เรียงจากล่าสุด',
    'jr.filter':'กรองไทม์ไลน์',
    'jr.all':'ทั้งหมด',
    'jr.work':'การทำงาน',
    'jr.study':'การศึกษา',
    'jr.exchange':'แลกเปลี่ยน',
    'jr.now':'ปัจจุบัน',
    'jr.ex.proj':'โปรเจกต์: <a href="#projects">การจำแนกภาวะหัวใจเต้นผิดจังหวะจาก ECG</a>',
    'jr.s.sel':'คนที่ได้รับคัดเลือกจาก มฟล.',
    'jr.s.cit':'ความแม่นยำของการอ้างอิง',
    'xp.1t':'นักศึกษาฝึกงานวิศวกรซอฟต์แวร์',
    'xp.1w':'โรงพยาบาลศูนย์การแพทย์ มหาวิทยาลัยแม่ฟ้าหลวง · เชียงราย ประเทศไทย',
    'xp.1a':'รับผิดชอบการให้บริการโมเดล การประเมินผล และการดูแลระบบ AI ของ CareMind แอปพลิเคชัน Generative AI ภายในองค์กรที่ช่วยร่างบันทึกทางการพยาบาลพร้อมระบุแหล่งที่มา (<a href="#caremind">ดูรายละเอียดด้านล่าง</a>)',
    'xp.2t':'วิศวกรซอฟต์แวร์ระดับจูเนียร์',
    'xp.2w':'ACE Data Systems Ltd · ย่างกุ้ง ประเทศเมียนมา',
    'xp.2a':'พัฒนา Backend API ด้วย C#/.NET และ SQL Stored Procedure สำหรับประมวลผลข้อมูลในแอปธนาคาร SMEDB',
    'xp.2b':'พัฒนาแอปพลิเคชันองค์กรด้วย Java จัดทำเอกสาร API สำหรับเชื่อมต่อกับ Frontend และทำงานร่วมกับทีม QA ในรูปแบบ Agile Sprint',
    'xp.3t':'ติวเตอร์คณิตศาสตร์',
    'xp.3w':'อาชีพอิสระ',
    'xp.3a':'สอนคณิตศาสตร์ให้นักเรียน ตั้งแต่พีชคณิตจนถึงแคลคูลัสระดับมหาวิทยาลัย',
    'proj.eyebrow':'โปรเจกต์',
    'proj.title':'LLM สัญญาณ และ<em>หุ่นยนต์</em>',
    'proj.ecg.t':'การจำแนกภาวะหัวใจเต้นผิดจังหวะจาก ECG',
    'proj.ecg.a':'สร้างไปป์ไลน์ประมวลผลข้อมูล ECG ได้แก่ การกรองสัญญาณ การตรวจจับ R-peak ด้วยวิธี Pan–Tompkins และการสกัดคุณลักษณะ RR และ QRS',
    'proj.ecg.b':'ฝึกโมเดล SVM เพื่อระบุจังหวะการเต้นที่ผิดปกติ ประเมินผลด้วยชุดข้อมูลขนาดเล็ก 117 จังหวะ แบ่งข้อมูลแบบ stratified 70/30',
    'proj.bot.play':'เล่นวิดีโอ: หุ่นยนต์เคลื่อนที่อัตโนมัติ',
    'proj.bot.watch':'ชมการทำงานของหุ่นยนต์',
    'proj.bot.yt':'ดูบน YouTube',
    'proj.bot.meta':'สร้างเองทั้งหมดตั้งแต่เริ่มต้น',
    'proj.bot.t':'หุ่นยนต์เคลื่อนที่อัตโนมัติ',
    'proj.bot.a':'ออกแบบและสร้างด้วยตัวเอง โดยใช้ชิ้นส่วนราคาประหยัดแต่ได้มาตรฐานอุตสาหกรรม ตั้งแต่กลไก อิเล็กทรอนิกส์ ไปจนถึงซอฟต์แวร์',
    'proj.bot.b':'รับรู้สภาพแวดล้อมด้วย LiDAR และเซนเซอร์วัดความเฉื่อย สร้างแผนที่และนำทางด้วย ROS 2 (SLAM, EKF)',
    'aw.eyebrow':'รางวัลและความสำเร็จ',
    'aw.title':'รางวัลการแข่งขัน รางวัลสตาร์ทอัพ และ<em>ปีที่ได้เกรดเต็ม</em>',
    'aw.view':'ดูรูปภาพ',
    'aw.p0':'รางวัล Fast Track',
    'aw.p1':'รางวัลชนะเลิศ',
    'aw.p3':'รองชนะเลิศอันดับ 2',
    'aw.p5':'ผลการเรียนดีเด่น',
    'aw.d.t':'พิธีไหว้ครู',
    'aw.1t':'รางวัล Fast Track · TED Venture Catalyst 2026 (ภาคเหนือ)',
    'aw.1d':'ได้รับรางวัลจากผลงาน CareMind จากทั้งหมด 23 ทีม และได้สิทธิ์เข้ารอบสุดท้ายของทุนสตาร์ทอัพ IDEA จาก TED Fund ประเทศไทย',
    'aw.2t':'รองชนะเลิศอันดับ 1 · Hackathon CE 2026 for Anti-Online Scams',
    'aw.2d':'แต่ละทีมพัฒนาโซลูชันเพื่อปกป้องผู้คนจากมิจฉาชีพออนไลน์',
    'aw.3t':'รองชนะเลิศอันดับ 2 · ADT MediHack 2026: Exploring AI for Healthcare Solution',
    'aw.3d':'จัดโดยสำนักวิชาเทคโนโลยีดิจิทัลประยุกต์ร่วมกับโรงพยาบาลศูนย์การแพทย์ มหาวิทยาลัยแม่ฟ้าหลวง คัดเลือกนักศึกษา 75 คนจากผู้สมัครกว่า 100 คน เพื่อแก้โจทย์จริงของโรงพยาบาลด้วย AI และการออกแบบ UX/UI',
    'aw.4t':'รางวัลชนะเลิศ · MFU Software Engineering Hackathon 2025',
    'aw.4d':'แฮกกาธอนสองวัน จัดโดยสำนักวิชาเทคโนโลยีดิจิทัลประยุกต์ร่วมกับ LINE Developer Thailand',
    'aw.5t':'ผลการเรียนดีเด่น · มหาวิทยาลัยแม่ฟ้าหลวง',
    'aw.5d':'เกรดเฉลี่ยสะสม 4.00 ในปีการศึกษา 2567',
    'aw.m1':'ที่ 1',
    'aw.m2':'ที่ 2',
    'aw.m3':'ที่ 3',
    'ed.degt':'วิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมซอฟต์แวร์',
    'ed.uni':'มหาวิทยาลัยแม่ฟ้าหลวง สำนักวิชาเทคโนโลยีดิจิทัลประยุกต์ · เชียงราย ประเทศไทย',
    'ed.degdates':'ส.ค. 2567 – พ.ค. 2571 (คาดว่าจะสำเร็จการศึกษา)',
    'ed.honoursv':'ผลการเรียนดีเด่น เกรดเฉลี่ย 4.00 ในปีการศึกษา 2567',
    'ed.ext':'FACE IT 2026: AI ในการดูแลสุขภาพ',
    'ed.exuni':'Universitas Brawijaya คณะวิทยาการคอมพิวเตอร์ · มาลัง ประเทศอินโดนีเซีย',
    'ed.trackv':'สาขาการประมวลผลสัญญาณชีวการแพทย์และอุปกรณ์สวมใส่อัจฉริยะ 10 หน่วยกิต ECTS',
    'cert.eyebrow':'ใบรับรอง',
    'cert.title':'เรียนรู้อยู่เสมอ <em>มีหลักฐานยืนยัน</em>',
    'cert.sub':'ใบรับรองด้าน AI ปี 2569 รวมถึงหลักสูตรก่อนหน้าด้านการออกแบบ UX และระบบสมองกลฝังตัว เลือกใบรับรองเพื่อดูรายละเอียด',
    'cert.prev':'ใบรับรองก่อนหน้า',
    'cert.next':'ใบรับรองถัดไป',
    'cert.issued':'วันที่ออก',
    'cert.verify':'ตรวจสอบใบรับรอง',
    'cert.close':'ปิด',
    'cert.hint':'← → เพื่อเลื่อนดู · Esc เพื่อปิด',
    'sk.eyebrow':'ทักษะ',
    'sk.title':'เครื่องมือที่ใช้<em>ในงานจริง</em>',
    'sk.sub':'จัดกลุ่มตามด้าน จากประสบการณ์ทำงาน โปรเจกต์ และใบรับรอง',
    'sk.1':'AI และการเรียนรู้ของเครื่อง',
    'sk.2':'MLOps และการดูแลระบบ AI',
    'sk.3':'เครื่องมือข้อมูลและ ML',
    'sk.4':'การเขียนโปรแกรม',
    'sk.5':'หุ่นยนต์และระบบสมองกลฝังตัว',
    'sk.6':'ภาษา',
    'sk.1d':'สร้างและประเมินแอปพลิเคชัน LLM',
    'sk.2d':'ให้บริการโมเดลและดูแลให้ทำงานได้ดีเสมอ',
    'sk.3d':'จัดการข้อมูลและฝึกโมเดล',
    'sk.4d':'ภาษาและเครื่องมือที่ใช้พัฒนาซอฟต์แวร์',
    'sk.5d':'ตั้งแต่ไมโครคอนโทรลเลอร์จนถึงการสร้างแผนที่',
    'sk.6d':'ภาษาที่ใช้ในการทำงาน',
    'sk.l.en':'ภาษาอังกฤษ',
    'sk.l.de':'ภาษาเยอรมัน',
    'sk.l.zh':'ภาษาจีน',
    'sk.l.zhlvl':'ใช้ทำงานได้บางส่วน',
    'cm.eyebrow':'นอกเหนือจากโค้ด',
    'cm.title':'การเป็นพี่เลี้ยง การจัดกิจกรรม และงานอาสา',
    'cm.1t':'โค้ชและพี่เลี้ยงแฮกกาธอน',
    'cm.1d':'เป็นโค้ชให้นักเรียนมัธยมในงาน ADT Open Space 2025 Hackathon ซึ่งนักเรียน 60 คนจากสามโรงเรียนในเชียงรายร่วมสร้างต้นแบบแอปที่ใช้ AI และเป็นพี่เลี้ยงในงาน MediHack Junior 2026 แฮกกาธอนสองวันด้าน AI และ UX/UI',
    'cm.cert':'ดูใบรับรอง',
    'cm.2t':'ผู้จัดกิจกรรม',
    'cm.2d':'ร่วมจัดงานปฐมนิเทศนักศึกษาต่างชาติใหม่กว่า 60 คนจากเจ็ดประเทศ ณ มหาวิทยาลัยแม่ฟ้าหลวง และจัดโครงการพัฒนาทักษะนักศึกษาครั้งที่ 2 ด้านภาวะผู้นำและกรอบความคิดแบบเติบโต',
    'cm.3t':'อาสาสมัครช่วยเหลือผู้ประสบภัย',
    'cm.3d':'แจกจ่ายอาหารและช่วยทำความสะอาดหลังน้ำท่วมที่เชียงรายในปี 2567 และคัดแยกสิ่งของบริจาคให้ชุมชนที่ได้รับผลกระทบจากน้ำท่วมที่หาดใหญ่ในปี 2568',
    'ct.eyebrow':'ติดต่อ',
    'ct.title':'มา<em>คุยกัน</em>',
    'ct.p':'กำลังมองหาโอกาสฝึกงานด้านวิศวกรรม AI ติดต่อทางอีเมลได้เร็วที่สุด',
    'ct.copy':'คัดลอก',
    'ct.copied':'คัดลอกแล้ว',
    'ct.email':'ส่งอีเมล',
    'ct.cv':'CV (PDF)',
    'hero.hello':'สวัสดีค่ะ ฉันชื่อ',
    'hero.me':'นี่ฉันเอง!',
    'hero.s1':'AI ในโรงพยาบาลจริง',
    'hero.s2':'สร้างหุ่นยนต์เองตั้งแต่ศูนย์',
    'hero.s3':'แชมป์แฮกกาธอน',
    'hero.avatar':'ภาพการ์ตูนของ Eaindray',
    'proj.cm.t':'CareMind: LLM ภายในองค์กรสำหรับบันทึกทางการพยาบาล',
    'proj.cm.meta':'นักศึกษาฝึกงานวิศวกรซอฟต์แวร์ · โรงพยาบาลศูนย์การแพทย์ มหาวิทยาลัยแม่ฟ้าหลวง',
    'proj.cm.watch':'ชมการนำเสนอ',
    'proj.cm.play':'เล่นวิดีโอ: การนำเสนอ CareMind',
    'nav.menu':'เมนู',
    'stat.gpa':'เกรดเฉลี่ย (เต็ม 4.00)',
    'ft.copy':'© 2026 Eaindray · เชียงราย ประเทศไทย',
    'proj.arm.view':'ดูรูปภาพ',
    'proj.arm.wip':'กำลังพัฒนา',
    'proj.arm.meta':'สร้างเอง · แอคชูเอเตอร์ OpenQDD',
    'proj.arm.t':'แขนกล 6 แกน (6-DOF)',
    'proj.arm.a':'แขนกลหกแกนจากการพิมพ์ 3 มิติ ขับเคลื่อนด้วยแอคชูเอเตอร์แบบ quasi-direct-drive ของ OpenQDD ขณะนี้สร้างข้อต่อฐานเสร็จแล้ว 3 ข้อ',
    'proj.arm.b':'แต่ละข้อต่อใช้มอเตอร์บัสเลส Eaglepower 8308 (KV90 สองตัว และ KV160 หนึ่งตัว) คู่กับตัวควบคุม MKS XDrive Mini (ODrive 3.6 พร้อมเอนโค้ดเดอร์ AS5047P) สื่อสารผ่าน CAN ด้วย MKS CANable Pro'
  };

  /* ───────────── 简体中文 ───────────── */
  T['zh-Hans'] = {
    'meta.title':'Eaindray · AI 工程实习生',
    'skip':'跳到主要内容',
    'nav.experience':'经历','nav.projects':'项目','nav.awards':'奖项','nav.certs':'证书','nav.skills':'技能','nav.contact':'联系',
    'theme.label':'切换浅色／深色主题',
    'hero.status':'正在寻找 AI 工程实习机会',
    'hero.roles':'AI 工程实习生|机器人软件工程师|全栈工程师|软件工程师|MLOps 工程师|嵌入式系统工程师',
    'hero.focus':'生成式 AI 应用 · 测试 · AI 运维',
    'hero.lead':'皇太后大学（Mae Fah Luang University）软件工程专业学生。我在 MFU Medical Center Hospital 负责部署、测试和维护 <strong>CareMind</strong> 背后的大语言模型（LLM）。CareMind 是一款生成式 AI 应用，可以起草附带来源引用的护理记录。',
    'hero.cv':'下载简历','hero.email':'给我发邮件',
    'hero.loc':'泰国清莱 · 预计 2028 年 5 月获得工学学士学位',
    'did.1a':'使用 Ollama 部署 LLM，置于本地 GPU 服务器上安全、带认证的 API 之后',
    'did.2a':'构建每次合并前在 CI 中运行的自动化测试，测得引用精确率 97.7%',
    'did.3a':'在 3 小时内完成 3,806 次请求的负载测试，零错误、无变慢，突发负载下也没有卡死',
    'xp.1t':'软件工程实习生','xp.1w':'MFU Medical Center Hospital · 泰国清莱',
    'xp.1a':'负责 CareMind 的模型服务、评估和 AI 运维；CareMind 是一款本地部署的生成式 AI 应用，可起草附带来源引用的护理记录（<a href="#caremind">详见下文</a>）',
    'xp.2t':'初级软件工程师','xp.2w':'ACE Data Systems Ltd · 缅甸仰光',
    'xp.2a':'为 SMEDB 银行应用开发 C#/.NET 后端 API 和 SQL 存储过程，用于数据处理',
    'xp.2b':'开发 Java 企业应用，编写供前端对接的 API 文档，并在敏捷冲刺中与测试团队协作',
    'xp.3t':'数学家教','xp.3w':'自由职业','xp.3a':'为中小学生教授数学，从代数到大学水平的微积分',
    'proj.eyebrow':'项目','proj.title':'大模型、信号和<em>机器人</em>',
    'proj.ecg.t':'心电图心律失常分类',
    'proj.ecg.a':'构建心电图数据处理流程：信号滤波、Pan–Tompkins R 波检测，以及 RR 和 QRS 特征',
    'proj.ecg.b':'训练 SVM 标记心律失常心搏，在包含 117 个心搏的小型数据集上按 70/30 分层划分进行评估',
    'proj.bot.meta':'从零开始独立打造',
    'proj.bot.t':'自主移动机器人',
    'proj.bot.a':'独自设计并制作，选用价格亲民但达到工业级的元件，从机械、电子到软件全部亲手完成',
    'proj.bot.b':'通过激光雷达（LiDAR）和惯性传感器感知环境，并用 ROS 2 进行建图与导航（SLAM、EKF）',
    'aw.eyebrow':'奖项与荣誉','aw.title':'竞赛名次、创业奖项，以及<em>满分的一年</em>',
    'aw.1t':'Fast Track 奖 · TED Venture Catalyst 2026（北部赛区）',
    'aw.1d':'凭借 CareMind 在 23 支队伍中获奖，进入泰国 TED Fund IDEA 创业资助的决赛轮。',
    'aw.2t':'第二名 · Hackathon CE 2026 for Anti-Online Scams','aw.2d':'各团队打造帮助人们防范网络诈骗的解决方案。',
    'aw.3t':'第三名 · ADT MediHack 2026: Exploring AI for Healthcare Solution',
    'aw.3d':'由应用数字技术学院与 MFU Medical Center Hospital 联合举办。从 100 多名申请者中选出 75 名学生，运用 AI 和 UX/UI 设计解决真实的医院难题。',
    'aw.4t':'第一名 · MFU Software Engineering Hackathon 2025','aw.4d':'由应用数字技术学院与 LINE Developer Thailand 联合举办的两天黑客马拉松。',
    'aw.5t':'学业优异奖 · 皇太后大学','aw.5d':'2024 学年累计 GPA 4.00。',
    'aw.m1':'第1','aw.m2':'第2','aw.m3':'第3',
    'ed.degt':'工学学士（软件工程）','ed.uni':'皇太后大学 应用数字技术学院 · 泰国清莱',
    'ed.degdates':'2024 年 8 月 – 2028 年 5 月（预计）','ed.honoursv':'学业优异奖，2024 学年 GPA 4.00',
    'ed.ext':'FACE IT 2026：医疗 AI','ed.exuni':'Universitas Brawijaya 计算机科学学院 · 印度尼西亚玛琅',
    'ed.trackv':'生物医学信号处理与可穿戴智能，10 ECTS 学分',
    'cert.eyebrow':'证书','cert.title':'持续学习，<em>有据可查</em>',
    'cert.sub':'2026 年获得的 AI 证书，以及更早的 UX 设计和嵌入式系统课程。点击证书即可查看。',
    'cert.prev':'上一张证书','cert.next':'下一张证书','cert.issued':'获得时间','cert.verify':'验证证书','cert.close':'关闭','cert.hint':'← → 浏览 · Esc 关闭',
    'sk.eyebrow':'技能','sk.title':'在实际工作中<em>用过的工具</em>','sk.sub':'按领域分类，来自我的工作、项目和证书。',
    'sk.1':'AI 与机器学习','sk.2':'MLOps 与 AI 运维','sk.3':'数据与 ML 工具','sk.4':'编程','sk.5':'机器人与嵌入式','sk.6':'语言',
    'sk.1d':'构建并评估 LLM 应用','sk.2d':'部署模型并保持稳定运行','sk.3d':'清洗数据、训练模型','sk.4d':'我用来写软件的语言和工具','sk.5d':'从微控制器到地图构建','sk.6d':'工作中使用的语言',
    'sk.l.en':'英语','sk.l.de':'德语','sk.l.zh':'中文','sk.l.zhlvl':'有限工作水平',
    'cm.eyebrow':'代码之外','cm.title':'指导、组织、志愿服务',
    'cm.1t':'黑客马拉松教练与导师',
    'cm.1d':'在 ADT Open Space 2025 黑客马拉松中指导高中生，来自清莱三所学校的 60 名学生打造了基于 AI 的应用原型；并在为期两天的 AI 与 UX/UI 黑客马拉松 MediHack Junior 2026 担任导师。',
    'cm.2t':'活动组织',
    'cm.2d':'参与组织皇太后大学的迎新活动，迎接来自七个国家的 60 多名国际新生，并组织了以领导力和成长型思维为主题的第二届学生技能发展项目。',
    'cm.3t':'救灾志愿者',
    'cm.3d':'2024 年在清莱分发食物并协助洪灾后清理，2025 年在合艾为受灾社区分拣捐赠的救援物资。',
    'ct.eyebrow':'联系','ct.title':'一起<em>聊聊</em>','ct.p':'我正在寻找 AI 工程实习机会。发邮件是联系我最快的方式。',
    'ct.copy':'复制','ct.copied':'已复制','ct.email':'给我发邮件','ct.cv':'简历（PDF）',
    'jr.eyebrow':'经历与教育','jr.title':'一路走来的<em>足迹</em>','jr.sub':'工作和学习放在同一条时间线上，从新到旧。','jr.filter':'筛选时间线',
    'jr.all':'全部','jr.work':'工作','jr.study':'学习','jr.exchange':'交换','jr.now':'进行中',
    'jr.ex.proj':'项目：<a href="#projects">心电图心律失常分类</a>','jr.s.sel':'名 MFU 学生入选','jr.s.cit':'引用精确率',
    'aw.p1':'第一名','aw.p3':'第三名','aw.view':'查看照片',
    'aw.p5':'学业优异奖','aw.d.t':'拜师礼（Wai Khru）',
    'aw.p0':'Fast Track 奖',
    'proj.bot.play':'播放视频：自主移动机器人','proj.bot.watch':'观看机器人实际运行','proj.bot.yt':'在 YouTube 上观看',
    'cm.cert':'查看证书',
    'hero.hello':'你好，我是',
    'hero.me':'这就是我！',
    'hero.s1':'真实医院里的 AI',
    'hero.s2':'从零造机器人',
    'hero.s3':'黑客松冠军',
    'hero.avatar':'Eaindray 的卡通肖像',
    'proj.cm.t':'CareMind：用于医院护理记录的本地部署 LLM',
    'proj.cm.meta':'软件工程实习生 · MFU Medical Center Hospital',
    'proj.cm.watch':'观看演示',
    'proj.cm.play':'播放视频：CareMind 演示',
    'nav.menu':'菜单',
    'stat.gpa':'GPA（满分 4.00）',
    'ft.copy':'© 2026 Eaindray · 泰国清莱',
    'proj.arm.view':'查看照片',
    'proj.arm.wip':'开发中',
    'proj.arm.meta':'独立制作 · OpenQDD 执行器',
    'proj.arm.t':'6 自由度机械臂',
    'proj.arm.a':'3D 打印的六轴机械臂，由 OpenQDD 准直驱执行器驱动；目前已完成底部三个关节',
    'proj.arm.b':'每个关节由 Eaglepower 8308 无刷电机（两个 KV90、一个 KV160）搭配 MKS XDrive Mini 控制器（基于 ODrive 3.6，板载 AS5047P 编码器），通过 MKS CANable Pro 以 CAN 总线通信'
  };

  /* ───────────── 台語（漢字，教育部推薦用字） ───────────── */
  T['nan'] = {
    'meta.title':'Eaindray · AI 工程實習生',
    'skip':'跳到主要內容',
    'nav.experience':'經歷','nav.projects':'專案','nav.awards':'獎項','nav.certs':'證書','nav.skills':'技能','nav.contact':'連絡',
    'theme.label':'切換光的抑是暗的主題',
    'hero.status':'咧揣 AI 工程實習的機會',
    'hero.roles':'AI 工程實習生|機器人軟體工程師|全端工程師|軟體工程師|MLOps 工程師|嵌入式系統工程師',
    'hero.focus':'生成式 AI 應用 · 測試 · AI 維運',
    'hero.lead':'我是皇太后大學（Mae Fah Luang University）軟體工程系的學生。我佇 MFU Medical Center Hospital 負責部署、測試佮維護 <strong>CareMind</strong> 後壁的大型語言模型（LLM）。CareMind 是一个生成式 AI 應用，會當寫護理紀錄的草稿，閣會共資料的來源標予清楚。',
    'hero.cv':'下載履歷','hero.email':'寄批予我',
    'hero.loc':'泰國清萊 · 預計 2028 年 5 月提著工學學士',
    'did.1a':'用 Ollama 部署 LLM，囥佇本地 GPU 伺服器頂懸安全、愛驗證的 API 後壁',
    'did.2a':'做逐擺合併進前攏會佇 CI 行的自動化測試，量著引用精確率 97.7%',
    'did.3a':'佇 3 點鐘內底做 3,806 擺請求的負載測試，無半个錯誤、嘛無變慢，請求一時傷濟嘛袂停去',
    'xp.1t':'軟體工程實習生','xp.1w':'MFU Medical Center Hospital · 泰國清萊',
    'xp.1a':'負責 CareMind 的模型服務、評估佮 AI 維運；CareMind 是本地部署的生成式 AI 應用，會寫有標來源的護理紀錄草稿（<a href="#caremind">詳細看下底</a>）',
    'xp.2t':'初級軟體工程師','xp.2w':'ACE Data Systems Ltd · 緬甸仰光',
    'xp.2a':'替 SMEDB 銀行應用程式開發 C#/.NET 後端 API 佮 SQL 預存程序，處理資料',
    'xp.2b':'開發 Java 企業應用程式、寫予前端串接的 API 文件，閣佇 Agile 衝刺內底佮 QA 做伙拍拚',
    'xp.3t':'數學家教','xp.3w':'家己做','xp.3a':'教學生數學，對代數教到大學程度的微積分',
    'proj.eyebrow':'專案','proj.title':'大模型、訊號佮<em>機器人</em>',
    'proj.ecg.t':'心電圖心律不整分類',
    'proj.ecg.a':'做心電圖資料處理的流程：訊號過濾、Pan–Tompkins R 波偵測，閣有 RR 佮 QRS 特徵',
    'proj.ecg.b':'訓練 SVM 共心律不整的心跳揣出來，用 117 个心跳的細資料集、70/30 分層切分來評估',
    'proj.bot.meta':'對零開始家己做',
    'proj.bot.t':'自主移動機器人',
    'proj.bot.a':'家己設計閣做出來，用俗閣有工業等級的零件，對機構、電子到軟體攏家己來',
    'proj.bot.b':'用光達（LiDAR）佮慣性感測器感知四箍圍，閣用 ROS 2 建地圖佮導航（SLAM、EKF）',
    'aw.eyebrow':'獎項佮肯定','aw.title':'比賽名次、創業獎，閣有<em>滿分的一年</em>',
    'aw.1t':'Fast Track 獎 · TED Venture Catalyst 2026（北部區域）',
    'aw.1d':'靠 CareMind 佇 23 隊內底得獎，提著泰國 TED Fund IDEA 創業補助決賽的資格。',
    'aw.2t':'第二名 · Hackathon CE 2026 for Anti-Online Scams','aw.2d':'逐隊做出保護人莫予網路詐騙騙去的方案。',
    'aw.3t':'第三名 · ADT MediHack 2026: Exploring AI for Healthcare Solution',
    'aw.3d':'應用數位科技學院佮 MFU Medical Center Hospital 做伙辦的。對 100 外个申請者內底揀 75 个學生，用 AI 佮 UX/UI 設計解決病院真正的問題。',
    'aw.4t':'第一名 · MFU Software Engineering Hackathon 2025','aw.4d':'應用數位科技學院佮 LINE Developer Thailand 做伙辦的兩工黑客松。',
    'aw.5t':'學業優秀獎 · 皇太后大學','aw.5d':'2024 學年度累計 GPA 4.00。',
    'aw.m1':'第1','aw.m2':'第2','aw.m3':'第3',
    'ed.degt':'工學學士（軟體工程）','ed.uni':'皇太后大學 應用數位科技學院 · 泰國清萊',
    'ed.degdates':'2024 年 8 月 – 2028 年 5 月（預計）','ed.honoursv':'學業優秀獎，2024 學年度 GPA 4.00',
    'ed.ext':'FACE IT 2026：醫療 AI','ed.exuni':'Universitas Brawijaya 資訊科學學院 · 印尼瑪琅',
    'ed.trackv':'生醫訊號處理佮穿戴式智慧，10 ECTS 學分',
    'cert.eyebrow':'證書','cert.title':'一直學，<em>有證明</em>',
    'cert.sub':'2026 年提著的 AI 證書，閣有較早的 UX 設計佮嵌入式系統課程。揤證書就會當看。',
    'cert.prev':'頂一張證書','cert.next':'後一張證書','cert.issued':'提著的時間','cert.verify':'驗證證書','cert.close':'關','cert.hint':'← → 看別張 · Esc 關',
    'sk.eyebrow':'技能','sk.title':'我佇實際工課內底<em>用過的工具</em>','sk.sub':'照領域分類，攏是對我的工課、專案佮證書來的。',
    'sk.1':'AI 佮機器學習','sk.2':'MLOps 佮 AI 維運','sk.3':'資料佮 ML 工具','sk.4':'寫程式','sk.5':'機器人佮嵌入式','sk.6':'語言',
    'sk.1d':'做 LLM 應用，閣共伊評估','sk.2d':'部署模型，顧予伊健健康康','sk.3d':'整理資料、訓練模型','sk.4d':'我寫軟體用的語言佮工具','sk.5d':'對微控制器到地圖建構','sk.6d':'工課上用的語言',
    'sk.l.en':'英語','sk.l.de':'德語','sk.l.zh':'華語','sk.l.zhlvl':'有限的工作能力',
    'cm.eyebrow':'程式以外','cm.title':'指導、辦活動、做志工',
    'cm.1t':'黑客松教練佮導師',
    'cm.1d':'佇 ADT Open Space 2025 黑客松指導高中生，清萊三間學校的 60 个學生做出 AI 應用的原型；嘛佇兩工的 AI 佮 UX/UI 黑客松 MediHack Junior 2026 做導師。',
    'cm.2t':'辦活動',
    'cm.2d':'鬥辦皇太后大學的新生歡迎活動，歡迎對七个國家來的 60 外个國際新生，閣辦第二屆學生技能發展計畫，主題是領導力佮成長型思維。',
    'cm.3t':'救災志工',
    'cm.3d':'2024 年佇清萊分食物、鬥清做大水了後的環境，2025 年佇合艾替受災的社區整理捐來的救援物資。',
    'ct.eyebrow':'連絡','ct.title':'來<em>開講</em>','ct.p':'我咧揣 AI 工程的實習機會。寄電子批是上緊揣著我的方法。',
    'ct.copy':'複製','ct.copied':'複製好矣','ct.email':'寄批予我','ct.cv':'履歷（PDF）',
    'jr.eyebrow':'經歷佮學歷','jr.title':'一路行來的<em>跤跡</em>','jr.sub':'工課佮讀冊囥佇仝一條時間線，對新排到舊。','jr.filter':'篩選時間線',
    'jr.all':'全部','jr.work':'工課','jr.study':'讀冊','jr.exchange':'交換','jr.now':'這馬',
    'jr.ex.proj':'專案：<a href="#projects">心電圖心律不整分類</a>','jr.s.sel':'个 MFU 學生入選','jr.s.cit':'引用精確率',
    'aw.p1':'第一名','aw.p3':'第三名','aw.view':'看相片',
    'aw.p5':'學業優秀獎','aw.d.t':'拜師禮（Wai Khru）',
    'aw.p0':'Fast Track 獎',
    'proj.bot.play':'播影片：自主移動機器人','proj.bot.watch':'看機器人實際咧行','proj.bot.yt':'去 YouTube 看',
    'cm.cert':'看證書',
    'hero.hello':'你好，我是',
    'hero.me':'這就是我！',
    'hero.s1':'真正病院內底的 AI',
    'hero.s2':'對零開始做機器人',
    'hero.s3':'黑客松冠軍',
    'hero.avatar':'Eaindray 的卡通畫像',
    'proj.cm.t':'CareMind：予病院護理紀錄用的本地 LLM',
    'proj.cm.meta':'軟體工程實習生 · MFU Medical Center Hospital',
    'proj.cm.watch':'看發表',
    'proj.cm.play':'放影片：CareMind 的發表',
    'nav.menu':'選單',
    'stat.gpa':'GPA（滿分 4.00）',
    'ft.copy':'© 2026 Eaindray · 泰國清萊',
    'proj.arm.view':'看相片',
    'proj.arm.wip':'猶咧做',
    'proj.arm.meta':'家己做 · OpenQDD 致動器',
    'proj.arm.t':'6 自由度機械手臂',
    'proj.arm.a':'3D 印出來的六軸機械手臂，用 OpenQDD 準直驅致動器來驅動；這馬已經做好下底三个關節',
    'proj.arm.b':'逐个關節用 Eaglepower 8308 無刷馬達（兩粒 KV90、一粒 KV160）配 MKS XDrive Mini 控制器（ODrive 3.6，有 AS5047P 編碼器），透過 MKS CANable Pro 用 CAN 匯流排通訊'
  };

  /* ───────────── Deutsch ───────────── */
  T['de'] = {
    'meta.title':'Eaindray · AI Engineer Intern',
    'skip':'Zum Inhalt springen',
    'nav.experience':'Erfahrung','nav.projects':'Projekte','nav.awards':'Preise','nav.certs':'Zertifikate','nav.skills':'Kenntnisse','nav.contact':'Kontakt',
    'theme.label':'Zwischen hellem und dunklem Design wechseln',
    'hero.status':'Offen für Praktika im Bereich KI-Engineering',
    'hero.roles':'AI Engineer Intern|Robotics Software Engineer|Full-Stack Engineer|Software Engineer|MLOps Engineer|Embedded Systems Engineer',
    'hero.focus':'Generative KI-Anwendungen · Testing · KI-Betrieb',
    'hero.lead':'Studium Software Engineering an der Mae Fah Luang University. Am MFU Medical Center Hospital habe ich das LLM hinter <strong>CareMind</strong> bereitgestellt, getestet und betreut – einer generativen KI-Anwendung, die Pflegeberichte mit Quellenangaben entwirft.',
    'hero.cv':'Lebenslauf herunterladen','hero.email':'E-Mail schreiben',
    'hero.loc':'Chiang Rai, Thailand · B.Eng. voraussichtlich Mai 2028',
    'did.1a':'LLM mit Ollama hinter einer sicheren, authentifizierten API auf einem On-Premise-GPU-Server bereitgestellt',
    'did.2a':'Automatisierte Tests aufgebaut, die vor jedem Merge in der CI laufen; Zitationspräzision von 97,7 % gemessen',
    'did.3a':'Lasttest mit 3.806 Anfragen über 3 Stunden – ohne Fehler oder Verlangsamung und ohne Hänger bei Lastspitzen',
    'xp.1t':'Software Engineer Intern','xp.1w':'MFU Medical Center Hospital · Chiang Rai, Thailand',
    'xp.1a':'Verantwortlich für Model Serving, Evaluation und KI-Betrieb von CareMind, einer On-Premise-KI-Anwendung, die Pflegeberichte mit Quellenangaben entwirft (<a href="#caremind">Details unten</a>)',
    'xp.2t':'Junior Software Engineer','xp.2w':'ACE Data Systems Ltd · Yangon, Myanmar',
    'xp.2a':'C#/.NET-Backend-APIs und SQL Stored Procedures für die Datenverarbeitung in der Banking-App SMEDB entwickelt',
    'xp.2b':'Java-Unternehmensanwendungen gebaut, API-Endpunkte für die Frontend-Integration dokumentiert und in Agile-Sprints mit der QA zusammengearbeitet',
    'xp.3t':'Mathe-Nachhilfe','xp.3w':'Selbstständig','xp.3a':'Mathematikunterricht für Schülerinnen und Schüler, von Algebra bis Analysis auf Hochschulniveau',
    'proj.eyebrow':'Projekte','proj.title':'LLMs, Signale und <em>Roboter</em>',
    'proj.ecg.t':'EKG-Arrhythmie-Klassifikation',
    'proj.ecg.a':'EKG-Datenpipeline gebaut: Signalfilterung, R-Zacken-Erkennung nach Pan–Tompkins sowie RR- und QRS-Merkmale',
    'proj.ecg.b':'SVM trainiert, die Arrhythmie-Schläge markiert; evaluiert auf einem kleinen Datensatz mit 117 Schlägen und stratifiziertem 70/30-Split',
    'proj.bot.meta':'Eigenbauten von Grund auf',
    'proj.bot.t':'Autonomer mobiler Roboter',
    'proj.bot.a':'Allein entworfen und gebaut, mit günstigen und dennoch industrietauglichen Komponenten – von Mechanik und Elektronik bis zur Software',
    'proj.bot.b':'Erfasst die Umgebung per LiDAR und Inertialsensor und kartiert und navigiert mit ROS 2 (SLAM, EKF)',
    'aw.eyebrow':'Auszeichnungen','aw.title':'Preise, ein Start-up-Award und ein <em>perfektes Jahr</em>',
    'aw.1t':'Fast Track Award · TED Venture Catalyst 2026 (Region Nord)',
    'aw.1d':'Mit CareMind unter 23 Teams ausgezeichnet und damit für die Finalrunde des IDEA-Start-up-Zuschusses des TED Fund, Thailand, qualifiziert.',
    'aw.2t':'2. Preis · Hackathon CE 2026 for Anti-Online Scams','aw.2d':'Teams entwickelten Lösungen, die Menschen vor Online-Betrug schützen.',
    'aw.3t':'3. Preis · ADT MediHack 2026: Exploring AI for Healthcare Solution',
    'aw.3d':'School of Applied Digital Technology gemeinsam mit dem MFU Medical Center Hospital. 75 Studierende wurden aus über 100 Bewerbungen ausgewählt, um reale Probleme im Krankenhaus mit KI und UX/UI-Design zu lösen.',
    'aw.4t':'1. Preis · MFU Software Engineering Hackathon 2025','aw.4d':'Zweitägiger Hackathon der School of Applied Digital Technology mit LINE Developer Thailand.',
    'aw.5t':'Akademische Auszeichnung · Mae Fah Luang University','aw.5d':'Kumulierter GPA von 4,00 im Studienjahr 2024.',
    'aw.m1':'1.','aw.m2':'2.','aw.m3':'3.',
    'ed.degt':'Bachelor of Engineering in Software Engineering','ed.uni':'Mae Fah Luang University, School of Applied Digital Technology · Chiang Rai, Thailand',
    'ed.degdates':'Aug. 2024 – Mai 2028 (voraussichtlich)','ed.honoursv':'Akademische Auszeichnung, GPA 4,00 im Studienjahr 2024',
    'ed.ext':'FACE IT 2026: KI im Gesundheitswesen','ed.exuni':'Universitas Brawijaya, Fakultät für Informatik · Malang, Indonesien',
    'ed.trackv':'Biomedizinische Signalverarbeitung und Wearable Intelligence, 10 ECTS',
    'cert.eyebrow':'Zertifikate','cert.title':'Weiterbildung, <em>belegt</em>',
    'cert.sub':'KI-Zertifikate aus 2026 sowie frühere Kurse zu UX-Design und Embedded Systems. Zum Ansehen ein Zertifikat auswählen.',
    'cert.prev':'Vorheriges Zertifikat','cert.next':'Nächstes Zertifikat','cert.issued':'Ausgestellt','cert.verify':'Nachweis prüfen','cert.close':'Schließen','cert.hint':'← → blättern · Esc schließen',
    'sk.eyebrow':'Kenntnisse','sk.title':'Werkzeuge aus der <em>echten Praxis</em>','sk.sub':'Nach Bereichen sortiert – aus Jobs, Projekten und Zertifikaten.',
    'sk.1':'KI und Machine Learning','sk.2':'MLOps und KI-Betrieb','sk.3':'Daten- und ML-Tools','sk.4':'Programmierung','sk.5':'Robotik und Embedded','sk.6':'Sprachen',
    'sk.1d':'LLM-Anwendungen bauen und bewerten','sk.2d':'Modelle bereitstellen und stabil halten','sk.3d':'Daten aufbereiten und Modelle trainieren','sk.4d':'Sprachen und Tools für meine Software','sk.5d':'Vom Mikrocontroller bis zur Kartierung','sk.6d':'Sprachen für die Zusammenarbeit',
    'sk.l.en':'Englisch','sk.l.de':'Deutsch','sk.l.zh':'Chinesisch','sk.l.zhlvl':'eingeschränkt',
    'cm.eyebrow':'Abseits des Codes','cm.title':'Mentoring, Organisation, Ehrenamt',
    'cm.1t':'Hackathon-Coaching und Mentoring',
    'cm.1d':'Schülerinnen und Schüler beim ADT Open Space 2025 Hackathon gecoacht, bei dem 60 Jugendliche aus drei Schulen in Chiang Rai KI-basierte App-Prototypen bauten, sowie Mentoring bei MediHack Junior 2026, einem zweitägigen Hackathon zu KI und UX/UI.',
    'cm.2t':'Eventorganisation',
    'cm.2d':'Die Orientierungsveranstaltung für über 60 neue internationale Studierende aus sieben Ländern an der Mae Fah Luang University mitorganisiert und das 2. Student Skills Development Program zu Führung und Growth Mindset organisiert.',
    'cm.3t':'Ehrenamtliche Katastrophenhilfe',
    'cm.3d':'2024 in Chiang Rai Lebensmittel verteilt und nach der Flut beim Aufräumen geholfen; 2025 gespendete Hilfsgüter für flutbetroffene Gemeinden in Hat Yai sortiert.',
    'ct.eyebrow':'Kontakt','ct.title':'Lassen Sie uns <em>sprechen</em>','ct.p':'Ich suche ein Praktikum im Bereich KI-Engineering. Am schnellsten erreichen Sie mich per E-Mail.',
    'ct.copy':'Kopieren','ct.copied':'Kopiert','ct.email':'E-Mail schreiben','ct.cv':'Lebenslauf (PDF)',
    'jr.eyebrow':'Erfahrung und Ausbildung','jr.title':'Der Weg <em>bisher</em>','jr.sub':'Arbeit und Studium auf einer Zeitleiste, das Neueste zuerst.','jr.filter':'Zeitleiste filtern',
    'jr.all':'Alle','jr.work':'Arbeit','jr.study':'Studium','jr.exchange':'Austausch','jr.now':'Aktuell',
    'jr.ex.proj':'Projekt: <a href="#projects">EKG-Arrhythmie-Klassifikation</a>','jr.s.sel':'Studierende der MFU ausgewählt','jr.s.cit':'Zitationspräzision',
    'aw.p1':'1. Preis','aw.p3':'3. Preis','aw.view':'Foto ansehen',
    'aw.p5':'Akademische Auszeichnung','aw.d.t':'Lehrerehrung (Wai Khru)',
    'aw.p0':'Fast Track Award',
    'proj.bot.play':'Video abspielen: Autonomer mobiler Roboter','proj.bot.watch':'Den Roboter in Aktion sehen','proj.bot.yt':'Auf YouTube ansehen',
    'cm.cert':'Zertifikat ansehen',
    'hero.hello':'Hallo, ich bin',
    'hero.me':'Das bin ich!',
    'hero.s1':'KI im echten Krankenhaus',
    'hero.s2':'Baut Roboter von Grund auf',
    'hero.s3':'Hackathon gewonnen',
    'hero.avatar':'Cartoon-Porträt von Eaindray',
    'proj.cm.t':'CareMind: ein On-Premise-LLM für Pflegeberichte im Krankenhaus',
    'proj.cm.meta':'Software Engineer Intern · MFU Medical Center Hospital',
    'proj.cm.watch':'Präsentation ansehen',
    'proj.cm.play':'Video abspielen: CareMind-Präsentation',
    'nav.menu':'Menü',
    'stat.gpa':'GPA (max. 4.00)',
    'ft.copy':'© 2026 Eaindray · Chiang Rai, Thailand',
    'proj.arm.view':'Fotos ansehen',
    'proj.arm.wip':'In Arbeit',
    'proj.arm.meta':'Eigenbau · OpenQDD-Aktuatoren',
    'proj.arm.t':'6-DOF-Roboterarm',
    'proj.arm.a':'3D-gedruckter Sechsachs-Arm mit Quasi-Direct-Drive-Aktuatoren nach OpenQDD; die drei Basisgelenke sind bereits gebaut',
    'proj.arm.b':'Jedes Gelenk kombiniert einen bürstenlosen Eaglepower-8308-Motor (zweimal KV90, einmal KV160) mit einem MKS-XDrive-Mini-Controller (ODrive 3.6, AS5047P-Encoder); kommuniziert wird per CAN über ein MKS CANable Pro'
  };

  /* ───────────── engine ───────────── */
  var current = 'en';
  var origHTML = new WeakMap(), origAria = new WeakMap(), origYM = new WeakMap();
  var origTitle = document.title;
  var fontsLoaded = {};

  function t(key, lang){
    lang = lang || current;
    if(lang !== 'en' && T[lang] && T[lang][key] != null) return T[lang][key];
    var el = document.querySelector('[data-i18n="'+key+'"]');
    if(el) return origHTML.has(el) ? origHTML.get(el) : el.innerHTML;
    return null;
  }

  function ymDate(s){ var a = s.split('-'); return new Date(+a[0], +a[1]-1, 1); }
  /* "2026-06" or "2026-06|2026-09" → localised month/year (range) */
  function fmt(ym, force){
    var lang = current;
    var f = new Intl.DateTimeFormat(LANGS[lang].intl, { month:'short', year:'numeric' });
    var parts = String(ym).split('|').map(ymDate);
    if(parts.length === 1) return f.format(parts[0]);
    /* Chinese range patterns switch to "2026/6至2026/9", so join two single dates there instead */
    if(f.formatRange && (lang === 'en' || lang === 'de' || lang === 'th')){ try{ return f.formatRange(parts[0], parts[1]); }catch(e){} }
    return f.format(parts[0]) + ' – ' + f.format(parts[1]);
  }

  /* "2026-06|2026-09" → "4 months" / "4 個月" / "4 Monate" (inclusive; 12+ months shown in whole years) */
  function dur(r){
    var p = String(r).split('|').map(function(x){ var a = x.split('-'); return { y:+a[0], m:+a[1] }; });
    var months = (p[1].y - p[0].y) * 12 + (p[1].m - p[0].m) + 1;
    var unit = months >= 12 ? 'year' : 'month', n = months >= 12 ? Math.floor(months / 12) : months;
    try{ return new Intl.NumberFormat(LANGS[current].intl, { style:'unit', unit:unit, unitDisplay:'long' }).format(n); }
    catch(e){ return n + ' ' + unit + (n === 1 ? '' : 's'); }
  }

  function loadFont(lang){
    var fam = LANGS[lang].font; if(!fam || fontsLoaded[fam]) return;
    var l = document.createElement('link'); l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=' + fam + ':wght@400;500;600;700&display=swap';
    document.head.appendChild(l); fontsLoaded[fam] = true;
  }

  function apply(lang){
    lang = ALIAS[lang] || lang;
    if(!LANGS[lang]) lang = 'en';
    current = lang;
    var d = document.documentElement;
    d.setAttribute('lang', LANGS[lang].html);
    loadFont(lang);

    [].forEach.call(document.querySelectorAll('[data-i18n]'), function(el){
      if(!origHTML.has(el)) origHTML.set(el, el.innerHTML);
      var v = lang === 'en' ? null : (T[lang] || {})[el.getAttribute('data-i18n')];
      el.innerHTML = v != null ? v : origHTML.get(el);
    });
    [].forEach.call(document.querySelectorAll('[data-i18n-aria]'), function(el){
      if(!origAria.has(el)) origAria.set(el, el.getAttribute('aria-label') || '');
      var v = lang === 'en' ? null : (T[lang] || {})[el.getAttribute('data-i18n-aria')];
      el.setAttribute('aria-label', v != null ? v : origAria.get(el));
    });
    [].forEach.call(document.querySelectorAll('[data-ym]'), function(el){
      if(el.tagName === 'LI') return;
      if(!origYM.has(el)) origYM.set(el, el.textContent);
      el.textContent = lang === 'en' ? origYM.get(el) : fmt(el.getAttribute('data-ym'));
    });
    [].forEach.call(document.querySelectorAll('[data-dur]'), function(el){
      if(!origYM.has(el)) origYM.set(el, el.textContent);
      el.textContent = lang === 'en' ? origYM.get(el) : dur(el.getAttribute('data-dur'));
    });
    document.title = lang === 'en' ? origTitle : (T[lang]['meta.title'] || origTitle);

    try{ if(lang === 'en') localStorage.removeItem('lang'); else localStorage.setItem('lang', lang); }catch(e){}
    try{
      var u = new URL(location.href);
      if(lang === 'en') u.searchParams.delete('lang'); else u.searchParams.set('lang', lang);
      history.replaceState(history.state, '', u.pathname + u.search + u.hash);
    }catch(e){}

    renderMenuState();
    d.classList.remove('i18n-pending');
    var ev; try{ ev = new CustomEvent('langchange', { detail:{ lang:lang } }); }catch(e){ ev = document.createEvent('CustomEvent'); ev.initCustomEvent('langchange', false, false, { lang:lang }); }
    document.dispatchEvent(ev);
  }

  /* ───────────── language menu ───────────── */
  var menu = document.getElementById('lang-menu'), btn = document.getElementById('lang-btn'), label = document.getElementById('lang-current');
  var opts = [];
  var checkSvg = '<svg class="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>';
  if(menu && btn){
    ORDER.forEach(function(code){
      var L = LANGS[code];
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'lang-opt'; b.setAttribute('role','menuitemradio'); b.setAttribute('data-lang', code);
      b.setAttribute('lang', L.html); b.tabIndex = -1;
      b.innerHTML = '<span class="code" aria-hidden="true"></span><span><b></b><small lang="en"></small></span>' + checkSvg;
      b.querySelector('.code').textContent = L.code;
      b.querySelector('b').textContent = L.name;
      b.querySelector('small').textContent = L.sub;
      b.addEventListener('click', function(){ apply(code); closeMenu(true); });
      menu.appendChild(b); opts.push(b);
    });
    btn.addEventListener('click', function(){ menu.hidden ? openMenu() : closeMenu(); });
    btn.addEventListener('keydown', function(e){ if(e.key === 'ArrowUp' || e.key === 'ArrowDown'){ e.preventDefault(); openMenu(); } });
    menu.addEventListener('keydown', function(e){
      var i = opts.indexOf(document.activeElement);
      if(e.key === 'ArrowDown'){ e.preventDefault(); opts[(i+1) % opts.length].focus(); }
      else if(e.key === 'ArrowUp'){ e.preventDefault(); opts[(i-1+opts.length) % opts.length].focus(); }
      else if(e.key === 'Home'){ e.preventDefault(); opts[0].focus(); }
      else if(e.key === 'End'){ e.preventDefault(); opts[opts.length-1].focus(); }
      else if(e.key === 'Escape' || e.key === 'Tab'){ closeMenu(e.key === 'Escape'); }
    });
    document.addEventListener('click', function(e){ if(!menu.hidden && !document.getElementById('lang').contains(e.target)) closeMenu(); });
  }
  function openMenu(){
    menu.hidden = false; btn.setAttribute('aria-expanded','true');
    var sel = opts.filter(function(o){ return o.getAttribute('aria-checked') === 'true'; })[0] || opts[0];
    sel.focus();
  }
  function closeMenu(refocus){ if(!menu || menu.hidden) return; menu.hidden = true; btn.setAttribute('aria-expanded','false'); if(refocus) btn.focus(); }
  function renderMenuState(){
    if(!label) return;
    label.textContent = LANGS[current].name;
    label.setAttribute('lang', LANGS[current].html);
    btn.setAttribute('aria-label', 'Language: ' + LANGS[current].sub);
    opts.forEach(function(o){ o.setAttribute('aria-checked', o.getAttribute('data-lang') === current ? 'true' : 'false'); });
  }

  /* initial language: ?lang= link, then the visitor's last choice, else English */
  var start = 'en';
  try{ start = new URLSearchParams(location.search).get('lang') || localStorage.getItem('lang') || 'en'; }catch(e){}
  start = ALIAS[start] || start;
  if(!LANGS[start]) start = 'en';
  if(start !== 'en') apply(start); else renderMenuState();

  return { t:t, fmt:fmt, set:apply, get lang(){ return current; }, langs:LANGS };
})();

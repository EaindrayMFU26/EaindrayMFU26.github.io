/*
  Translations for eaindrayiscoding.com
  English lives in index.html itself. Each key below matches a data-i18n="…" attribute there.
  A missing key falls back to the English text, so the page never shows a blank.
*/
window.I18N = (function(){
  var LANGS = {
    'en':      { html:'en',          name:'English',  sub:'English',                code:'EN', intl:'en-US' },
    'zh-Hant': { html:'zh-Hant-TW',  name:'繁體中文', sub:'Mandarin · Traditional', code:'繁', intl:'zh-Hant-TW', font:'Noto+Sans+TC' },
    'zh-Hans': { html:'zh-Hans',     name:'简体中文', sub:'Mandarin · Simplified',  code:'简', intl:'zh-Hans-CN', font:'Noto+Sans+SC' },
    'nan':     { html:'nan-Hant-TW', name:'台語',     sub:'Taiwanese Hokkien',      code:'台', intl:'zh-Hant-TW', font:'Noto+Sans+TC' },
    'de':      { html:'de',          name:'Deutsch',  sub:'German',                 code:'DE', intl:'de-DE' }
  };
  var ORDER = ['en','zh-Hant','zh-Hans','nan','de'];

  var T = {};

  /* ───────────── 繁體中文（台灣） ───────────── */
  T['zh-Hant'] = {
    'meta.title':'Eaindray · AI 工程實習生',
    'skip':'跳到主要內容',
    'nav.work':'作品','nav.experience':'經歷','nav.projects':'專案','nav.awards':'獎項','nav.certs':'證書','nav.skills':'技能','nav.contact':'聯絡',
    'theme.label':'切換淺色／深色主題',
    'hero.status':'正在尋找 AI 工程實習機會',
    'hero.roles':'AI 工程實習生|機器人軟體工程師|全端工程師|軟體工程師|MLOps 工程師|嵌入式系統工程師',
    'hero.focus':'生成式 AI 應用 · 測試 · AI 維運',
    'hero.lead':'皇太后大學（Mae Fah Luang University）軟體工程系學生。我在 MFU Medical Center Hospital 負責部署、測試並維護 <strong>CareMind</strong> 背後的大型語言模型（LLM）。CareMind 是一套生成式 AI 應用，能撰寫附有資料來源引用的護理紀錄草稿。',
    'hero.cv':'下載履歷','hero.email':'寄信給我',
    'hero.loc':'泰國清萊 · 預計 2027 年 5 月取得工學學士',
    'rep.results':'成果','rep.citation':'引用精確率','rep.load':'負載測試','rep.requests':'次請求','rep.loadd':'連續 3 小時，零錯誤、無變慢',
    'rep.quant':'量化研究','rep.quantd':'發現 Q4 藥名退化，各執行 42 次','rep.serving':'模型服務','rep.model':'8B 泰語醫療 LLM',
    'rep.servingd':'Ollama · 地端 GPU 伺服器 · 需驗證的 API','rep.ci':'CI，每次合併：','rep.acc':'準確度','rep.cit':'引用','rep.drug':'藥物類別','rep.priv':'隱私',
    'stat.gpa':'GPA（滿分 4.00）','stat.awards':'獎項與名次','stat.certs':'AI 證書','stat.toeic':'多益成績',
    'work.eyebrow':'代表作品',
    'work.title':'CareMind：用於<em>醫院護理紀錄</em>的地端 LLM',
    'work.role':'軟體工程實習生',
    'work.award':'TED Venture Catalyst 2026 Fast Track 獎',
    'work.intro':'CareMind 使用在本地部署的 8B 泰語醫療 LLM，撰寫附有資料來源引用的泰文與英文護理紀錄草稿。<strong>我負責模型服務、評估與 AI 維運（MLOps）</strong>：讓模型在地端 GPU 伺服器上穩定運作、檢驗輸出是否正確，並維持服務健康。',
    'work.flow':'一份紀錄如何產生',
    'flow.1t':'病患紀錄','flow.1d':'紀錄的資料來源',
    'flow.2t':'LLM 撰寫草稿','flow.2d':'透過 Ollama 執行 8B 泰語醫療 LLM',
    'flow.mine':'我建置的',
    'flow.3t':'藥名修正','flow.3d':'還原正確的藥品名稱',
    'flow.4t':'來源引用','flow.4d':'引用精確率 97.7%',
    'flow.5t':'護理師審核','flow.5d':'護理師檢查並核准草稿',
    'gate.label':'CI 關卡：每次合併前','gate.1':'準確度','gate.2':'引用','gate.3':'藥物類別一致性','gate.4':'測試資料隱私篩檢',
    'did.1h':'服務與部署',
    'did.1a':'以 Ollama 部署 LLM，置於地端 GPU 伺服器上安全且需驗證的 API 之後',
    'did.1b':'將後端容器化，建立自動化的 GitHub Actions 映像檔流程，以及一步完成的 Docker Compose 設定',
    'did.2h':'評估與測試',
    'did.2a':'建立每次合併前都會在 CI 中執行的自動化測試，測得引用精確率 97.7%',
    'did.2b':'比較 Q3 與 Q4 量化各 42 次執行，發現 Q4 有顯著的藥名退化（p = 0.029），並建置在附上引用前修正藥名的步驟',
    'did.3h':'可靠性與維運',
    'did.3a':'在 3 小時內進行 3,806 次請求的負載測試，零錯誤、無變慢，突發流量下也不會卡住',
    'did.3b':'建立 GPU 監控：自我修復的監看程式、警報、以實際生成檢查運作狀態、每日準確度抽查與備份',
    'did.3c':'找出 GPU 記憶體鎖死的問題，並將偵測與釋放自動化',
    'xp.1t':'軟體工程實習生','xp.1w':'MFU Medical Center Hospital · 泰國清萊',
    'xp.1a':'負責 CareMind 的模型服務、評估與 AI 維運；CareMind 是地端部署的生成式 AI 應用，能撰寫附來源引用的護理紀錄草稿（<a href="#work">詳見上方</a>）',
    'xp.2t':'初階軟體工程師','xp.2w':'ACE Data Systems Ltd · 緬甸仰光',
    'xp.2a':'為 SMEDB 銀行應用程式開發 C#/.NET 後端 API 與 SQL 預存程序，用於資料處理',
    'xp.2b':'開發 Java 企業應用程式、撰寫供前端串接的 API 文件，並在敏捷衝刺中與 QA 合作',
    'xp.3t':'數學家教','xp.3w':'自僱','xp.3a':'教導中小學生數學，從代數到大學程度的微積分',
    'proj.eyebrow':'專案','proj.title':'訊號、感測器與<em>機器人</em>',
    'proj.ecg.t':'心電圖心律不整分類',
    'proj.ecg.a':'建立心電圖資料處理流程：訊號濾波、Pan–Tompkins R 波偵測，以及 RR 與 QRS 特徵',
    'proj.ecg.b':'訓練 SVM 標記心律不整的心跳，並以 117 個心跳的小型資料集、70/30 分層切分進行評估',
    'proj.bot.meta':'從零開始獨立打造',
    'proj.bot.t':'自主移動機器人與機械手臂',
    'proj.bot.a':'獨自設計並打造兩台機器人，使用平價但達工業等級的零件，從機構、電子到軟體一手包辦',
    'proj.bot.b':'一台以光達（LiDAR）與慣性感測器感知環境的移動機器人，以及一支擁有自己的關節、夾爪與控制軟體的機械手臂',
    'aw.eyebrow':'獎項與肯定','aw.title':'競賽名次、創業獎項，以及<em>滿分的一年</em>',
    'aw.1t':'Fast Track 獎 · TED Venture Catalyst 2026（北部區域）',
    'aw.1d':'以 CareMind 在 23 支隊伍中獲獎，取得泰國 TED Fund IDEA 創業補助決賽資格。',
    'aw.2t':'第二名 · Hackathon CE 2026 for Anti-Online Scams','aw.2d':'各隊打造保護民眾免於網路詐騙的解決方案。',
    'aw.3t':'第三名 · ADT MediHack 2026: Exploring AI for Healthcare Solution',
    'aw.3d':'由應用數位科技學院與 MFU Medical Center Hospital 合辦。從 100 多名申請者中選出 75 名學生，運用 AI 與 UX/UI 設計解決真實的醫院問題。',
    'aw.4t':'第一名 · MFU Software Engineering Hackathon 2025','aw.4d':'由應用數位科技學院與 LINE Developer Thailand 合辦的兩天黑客松。',
    'aw.5t':'學業優異獎 · 皇太后大學','aw.5d':'2024 學年度累計 GPA 4.00。',
    'aw.m1':'第1','aw.m2':'第2','aw.m3':'第3',
    'ed.degt':'工學學士（軟體工程）','ed.uni':'皇太后大學 應用數位科技學院 · 泰國清萊',
    'ed.degdates':'2024 年 8 月 – 2027 年 5 月（預計）','ed.honoursv':'學業優異獎，2024 學年度 GPA 4.00',
    'ed.ext':'FACE IT 2026：醫療 AI','ed.exuni':'Universitas Brawijaya 資訊科學學院 · 印尼瑪琅',
    'ed.trackv':'生醫訊號處理與穿戴式智慧，10 ECTS 學分',
    'cert.eyebrow':'證書','cert.title':'持續學習，<em>有據可查</em>',
    'cert.sub':'2026 年取得的 AI 證書，以及較早的 UX 設計與嵌入式系統課程。點選證書即可查看。',
    'cert.prev':'上一張證書','cert.next':'下一張證書','cert.issued':'取得日期','cert.verify':'驗證證書','cert.close':'關閉','cert.hint':'← → 瀏覽 · Esc 關閉',
    'sk.eyebrow':'技能','sk.title':'實際工作中<em>用過的工具</em>','sk.sub':'依領域分類，來自我的工作、專案與證書。',
    'sk.1':'AI 與機器學習','sk.2':'MLOps 與 AI 維運','sk.3':'資料與 ML 工具','sk.4':'程式設計','sk.5':'機器人與嵌入式','sk.6':'語言',
    'sk.1d':'打造並評估 LLM 應用','sk.2d':'部署模型並維持健康運作','sk.3d':'整理資料、訓練模型','sk.4d':'我用來寫軟體的語言與工具','sk.5d':'從微控制器到地圖建構','sk.6d':'工作上使用的語言',
    'sk.l.en':'英語','sk.l.de':'德語','sk.l.zh':'中文','sk.l.zhlvl':'有限工作能力',
    'cm.eyebrow':'程式之外','cm.title':'指導、籌辦、志工',
    'cm.1t':'黑客松教練與導師',
    'cm.1d':'在 ADT Open Space 2025 黑客松指導高中生，來自清萊三所學校的 60 名學生打造出 AI 應用原型；也在為期兩天的 AI 與 UX/UI 黑客松 MediHack Junior 2026 擔任導師。',
    'cm.2t':'活動籌辦',
    'cm.2d':'協助籌辦皇太后大學的迎新活動，迎接來自七個國家、60 多名國際新生，並籌辦以領導力與成長型思維為主題的第二屆學生技能發展計畫。',
    'cm.3t':'救災志工',
    'cm.3d':'2024 年在清萊發送食物並協助水災後清理，2025 年在合艾為受災社區整理捐贈的救援物資。',
    'ct.eyebrow':'聯絡','ct.title':'一起<em>聊聊</em>','ct.p':'我正在尋找 AI 工程實習機會。寄電子郵件是最快聯絡到我的方式。',
    'ct.copy':'複製','ct.copied':'已複製','ct.email':'寄信給我','ct.cv':'履歷（PDF）',
    'jr.eyebrow':'經歷與學歷','jr.title':'一路走來的<em>軌跡</em>','jr.sub':'工作與學習放在同一條時間軸上，由新到舊。','jr.filter':'篩選時間軸',
    'jr.all':'全部','jr.work':'工作','jr.study':'學習','jr.exchange':'交換','jr.now':'進行中',
    'jr.ex.proj':'專案：<a href="#projects">心電圖心律不整分類</a>','jr.s.sel':'名 MFU 學生入選','jr.s.cit':'引用精確率',
    'aw.p1':'第一名','aw.p3':'第三名','aw.view':'查看照片',
    'aw.p5':'學業優異獎','aw.d.t':'拜師禮（Wai Khru）',
    'aw.p0':'Fast Track 獎',
    'proj.bot.play':'播放影片：自主移動機器人','proj.bot.watch':'觀看機器人實際運作','proj.bot.yt':'在 YouTube 上觀看',
    'cm.cert':'查看證書',
    'ft.copy':'© 2026 Eaindray · 泰國清萊'
  };

  /* ───────────── 简体中文 ───────────── */
  T['zh-Hans'] = {
    'meta.title':'Eaindray · AI 工程实习生',
    'skip':'跳到主要内容',
    'nav.work':'作品','nav.experience':'经历','nav.projects':'项目','nav.awards':'奖项','nav.certs':'证书','nav.skills':'技能','nav.contact':'联系',
    'theme.label':'切换浅色／深色主题',
    'hero.status':'正在寻找 AI 工程实习机会',
    'hero.roles':'AI 工程实习生|机器人软件工程师|全栈工程师|软件工程师|MLOps 工程师|嵌入式系统工程师',
    'hero.focus':'生成式 AI 应用 · 测试 · AI 运维',
    'hero.lead':'皇太后大学（Mae Fah Luang University）软件工程专业学生。我在 MFU Medical Center Hospital 负责部署、测试和维护 <strong>CareMind</strong> 背后的大语言模型（LLM）。CareMind 是一款生成式 AI 应用，可以起草附带来源引用的护理记录。',
    'hero.cv':'下载简历','hero.email':'给我发邮件',
    'hero.loc':'泰国清莱 · 预计 2027 年 5 月获得工学学士学位',
    'rep.results':'成果','rep.citation':'引用精确率','rep.load':'负载测试','rep.requests':'次请求','rep.loadd':'持续 3 小时，零错误、无变慢',
    'rep.quant':'量化研究','rep.quantd':'发现 Q4 药名退化，各运行 42 次','rep.serving':'模型服务','rep.model':'8B 泰语医疗 LLM',
    'rep.servingd':'Ollama · 本地 GPU 服务器 · 带认证的 API','rep.ci':'CI，每次合并：','rep.acc':'准确性','rep.cit':'引用','rep.drug':'药物类别','rep.priv':'隐私',
    'stat.gpa':'GPA（满分 4.00）','stat.awards':'奖项与名次','stat.certs':'AI 证书','stat.toeic':'托业成绩',
    'work.eyebrow':'代表作品',
    'work.title':'CareMind：用于<em>医院护理记录</em>的本地部署 LLM',
    'work.role':'软件工程实习生',
    'work.award':'TED Venture Catalyst 2026 Fast Track 奖',
    'work.intro':'CareMind 使用本地部署的 8B 泰语医疗 LLM，起草附带来源引用的泰文和英文护理记录。<strong>我负责模型服务、评估和 AI 运维（MLOps）</strong>：让模型在本地 GPU 服务器上稳定运行，检验输出是否准确，并保持服务健康。',
    'work.flow':'一份记录是怎样生成的',
    'flow.1t':'患者记录','flow.1d':'记录的数据来源',
    'flow.2t':'LLM 起草记录','flow.2d':'通过 Ollama 运行 8B 泰语医疗 LLM',
    'flow.mine':'由我构建',
    'flow.3t':'药名修复','flow.3d':'恢复正确的药品名称',
    'flow.4t':'来源引用','flow.4d':'引用精确率 97.7%',
    'flow.5t':'护士审核','flow.5d':'护士检查并批准草稿',
    'gate.label':'CI 关卡：每次合并前','gate.1':'准确性','gate.2':'引用','gate.3':'药物类别一致性','gate.4':'测试数据隐私筛查',
    'did.1h':'服务与部署',
    'did.1a':'使用 Ollama 部署 LLM，置于本地 GPU 服务器上安全、带认证的 API 之后',
    'did.1b':'将后端容器化，搭建自动化的 GitHub Actions 镜像工作流和一步式 Docker Compose 部署',
    'did.2h':'评估与测试',
    'did.2a':'构建每次合并前在 CI 中运行的自动化测试，测得引用精确率 97.7%',
    'did.2b':'对比 Q3 与 Q4 量化各 42 次运行，发现 Q4 存在显著的药名退化（p = 0.029），并构建了在附加引用前修复药名的步骤',
    'did.3h':'可靠性与运维',
    'did.3a':'在 3 小时内完成 3,806 次请求的负载测试，零错误、无变慢，突发负载下也没有卡死',
    'did.3b':'搭建 GPU 监控：自愈看门狗、告警、基于真实生成的可用性检查、每日准确性抽检和备份',
    'did.3c':'排查出 GPU 显存锁死问题，并实现自动检测与释放',
    'xp.1t':'软件工程实习生','xp.1w':'MFU Medical Center Hospital · 泰国清莱',
    'xp.1a':'负责 CareMind 的模型服务、评估和 AI 运维；CareMind 是一款本地部署的生成式 AI 应用，可起草附带来源引用的护理记录（<a href="#work">详见上文</a>）',
    'xp.2t':'初级软件工程师','xp.2w':'ACE Data Systems Ltd · 缅甸仰光',
    'xp.2a':'为 SMEDB 银行应用开发 C#/.NET 后端 API 和 SQL 存储过程，用于数据处理',
    'xp.2b':'开发 Java 企业应用，编写供前端对接的 API 文档，并在敏捷冲刺中与测试团队协作',
    'xp.3t':'数学家教','xp.3w':'自由职业','xp.3a':'为中小学生教授数学，从代数到大学水平的微积分',
    'proj.eyebrow':'项目','proj.title':'信号、传感器和<em>机器人</em>',
    'proj.ecg.t':'心电图心律失常分类',
    'proj.ecg.a':'构建心电图数据处理流程：信号滤波、Pan–Tompkins R 波检测，以及 RR 和 QRS 特征',
    'proj.ecg.b':'训练 SVM 标记心律失常心搏，在包含 117 个心搏的小型数据集上按 70/30 分层划分进行评估',
    'proj.bot.meta':'从零开始独立打造',
    'proj.bot.t':'自主移动机器人与机械臂',
    'proj.bot.a':'独自设计并制作了两台机器人，选用价格亲民但达到工业级的元件，从机械、电子到软件全部亲手完成',
    'proj.bot.b':'一台通过激光雷达（LiDAR）和惯性传感器感知环境的移动机器人，以及一只拥有自己的关节、夹爪和控制软件的机械臂',
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
    'ed.degdates':'2024 年 8 月 – 2027 年 5 月（预计）','ed.honoursv':'学业优异奖，2024 学年 GPA 4.00',
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
    'ft.copy':'© 2026 Eaindray · 泰国清莱'
  };

  /* ───────────── 台語（漢字，教育部推薦用字） ───────────── */
  T['nan'] = {
    'meta.title':'Eaindray · AI 工程實習生',
    'skip':'跳到主要內容',
    'nav.work':'作品','nav.experience':'經歷','nav.projects':'專案','nav.awards':'獎項','nav.certs':'證書','nav.skills':'技能','nav.contact':'連絡',
    'theme.label':'切換光的抑是暗的主題',
    'hero.status':'咧揣 AI 工程實習的機會',
    'hero.roles':'AI 工程實習生|機器人軟體工程師|全端工程師|軟體工程師|MLOps 工程師|嵌入式系統工程師',
    'hero.focus':'生成式 AI 應用 · 測試 · AI 維運',
    'hero.lead':'我是皇太后大學（Mae Fah Luang University）軟體工程系的學生。我佇 MFU Medical Center Hospital 負責部署、測試佮維護 <strong>CareMind</strong> 後壁的大型語言模型（LLM）。CareMind 是一个生成式 AI 應用，會當寫護理紀錄的草稿，閣會共資料的來源標予清楚。',
    'hero.cv':'下載履歷','hero.email':'寄批予我',
    'hero.loc':'泰國清萊 · 預計 2027 年 5 月提著工學學士',
    'rep.results':'成果','rep.citation':'引用的精確率','rep.load':'負載測試','rep.requests':'擺請求','rep.loadd':'連紲 3 點鐘，無半个錯誤，嘛無變慢',
    'rep.quant':'量化研究','rep.quantd':'Q4 的藥名有退步，兩種各跑 42 擺','rep.serving':'模型服務','rep.model':'8B 泰語醫療 LLM',
    'rep.servingd':'Ollama · 本地 GPU 伺服器 · 愛驗證的 API','rep.ci':'CI，逐擺合併：','rep.acc':'準確度','rep.cit':'引用','rep.drug':'藥物類別','rep.priv':'隱私',
    'stat.gpa':'GPA（滿分 4.00）','stat.awards':'獎項佮名次','stat.certs':'AI 證書','stat.toeic':'多益成績',
    'work.eyebrow':'代表作品',
    'work.title':'CareMind：予<em>病院護理紀錄</em>用的本地 LLM',
    'work.role':'軟體工程實習生',
    'work.award':'TED Venture Catalyst 2026 Fast Track 獎',
    'work.intro':'CareMind 用佇本地部署的 8B 泰語醫療 LLM，寫有標資料來源的泰文佮英文護理紀錄草稿。<strong>我負責模型服務、評估佮 AI 維運（MLOps）</strong>：予模型佇本地的 GPU 伺服器頂懸穩穩仔行、檢查伊寫出來的內容敢有正確，閣顧予服務健健康康。',
    'work.flow':'一份紀錄是按怎產生的',
    'flow.1t':'病人紀錄','flow.1d':'紀錄的資料來源',
    'flow.2t':'LLM 寫草稿','flow.2d':'用 Ollama 行 8B 泰語醫療 LLM',
    'flow.mine':'我做的',
    'flow.3t':'藥名修正','flow.3d':'共藥名改轉來正確的',
    'flow.4t':'標來源','flow.4d':'引用精確率 97.7%',
    'flow.5t':'護理師審查','flow.5d':'護理師檢查閣核准草稿',
    'gate.label':'CI 關卡：逐擺合併進前','gate.1':'準確度','gate.2':'引用','gate.3':'藥物類別一致','gate.4':'測試資料的隱私篩檢',
    'did.1h':'服務佮部署',
    'did.1a':'用 Ollama 部署 LLM，囥佇本地 GPU 伺服器頂懸安全、愛驗證的 API 後壁',
    'did.1b':'共後端容器化，做自動化的 GitHub Actions 映像檔流程，閣有一步就設定好的 Docker Compose',
    'did.2h':'評估佮測試',
    'did.2a':'做逐擺合併進前攏會佇 CI 行的自動化測試，量著引用精確率 97.7%',
    'did.2b':'比較 Q3 佮 Q4 量化，兩種各跑 42 擺，發現 Q4 的藥名有明顯的退步（p = 0.029），閣做一个佇標來源進前共藥名修正的步驟',
    'did.3h':'可靠性佮維運',
    'did.3a':'佇 3 點鐘內底做 3,806 擺請求的負載測試，無半个錯誤、嘛無變慢，請求一時傷濟嘛袂停去',
    'did.3b':'設 GPU 監控：會家己修復的監看程式、警報、用實際生成檢查運作、逐工的準確度抽查佮備份',
    'did.3c':'揣出 GPU 記憶體鎖死的問題，閣予偵測佮釋放攏自動化',
    'xp.1t':'軟體工程實習生','xp.1w':'MFU Medical Center Hospital · 泰國清萊',
    'xp.1a':'負責 CareMind 的模型服務、評估佮 AI 維運；CareMind 是本地部署的生成式 AI 應用，會寫有標來源的護理紀錄草稿（<a href="#work">詳細看頂懸</a>）',
    'xp.2t':'初級軟體工程師','xp.2w':'ACE Data Systems Ltd · 緬甸仰光',
    'xp.2a':'替 SMEDB 銀行應用程式開發 C#/.NET 後端 API 佮 SQL 預存程序，處理資料',
    'xp.2b':'開發 Java 企業應用程式、寫予前端串接的 API 文件，閣佇 Agile 衝刺內底佮 QA 做伙拍拚',
    'xp.3t':'數學家教','xp.3w':'家己做','xp.3a':'教學生數學，對代數教到大學程度的微積分',
    'proj.eyebrow':'專案','proj.title':'訊號、感測器佮<em>機器人</em>',
    'proj.ecg.t':'心電圖心律不整分類',
    'proj.ecg.a':'做心電圖資料處理的流程：訊號過濾、Pan–Tompkins R 波偵測，閣有 RR 佮 QRS 特徵',
    'proj.ecg.b':'訓練 SVM 共心律不整的心跳揣出來，用 117 个心跳的細資料集、70/30 分層切分來評估',
    'proj.bot.meta':'對零開始家己做',
    'proj.bot.t':'自主移動機器人佮機械手臂',
    'proj.bot.a':'家己一个人設計閣做出兩台機器人，用俗閣有工業等級的零件，對機構、電子到軟體攏家己來',
    'proj.bot.b':'一台用光達（LiDAR）佮慣性感測器感知四箍圍的移動機器人，閣有一支有家己的關節、夾爪佮控制軟體的機械手臂',
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
    'ed.degdates':'2024 年 8 月 – 2027 年 5 月（預計）','ed.honoursv':'學業優秀獎，2024 學年度 GPA 4.00',
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
    'ft.copy':'© 2026 Eaindray · 泰國清萊'
  };

  /* ───────────── Deutsch ───────────── */
  T['de'] = {
    'meta.title':'Eaindray · AI Engineer Intern',
    'skip':'Zum Inhalt springen',
    'nav.work':'Highlight','nav.experience':'Erfahrung','nav.projects':'Projekte','nav.awards':'Preise','nav.certs':'Zertifikate','nav.skills':'Kenntnisse','nav.contact':'Kontakt',
    'theme.label':'Zwischen hellem und dunklem Design wechseln',
    'hero.status':'Offen für Praktika im Bereich KI-Engineering',
    'hero.roles':'AI Engineer Intern|Robotics Software Engineer|Full-Stack Engineer|Software Engineer|MLOps Engineer|Embedded Systems Engineer',
    'hero.focus':'Generative KI-Anwendungen · Testing · KI-Betrieb',
    'hero.lead':'Studium Software Engineering an der Mae Fah Luang University. Am MFU Medical Center Hospital habe ich das LLM hinter <strong>CareMind</strong> bereitgestellt, getestet und betreut – einer generativen KI-Anwendung, die Pflegeberichte mit Quellenangaben entwirft.',
    'hero.cv':'Lebenslauf herunterladen','hero.email':'E-Mail schreiben',
    'hero.loc':'Chiang Rai, Thailand · B.Eng. voraussichtlich Mai 2027',
    'rep.results':'Ergebnisse','rep.citation':'Zitationspräzision','rep.load':'Lasttest','rep.requests':'Anfragen','rep.loadd':'3 Stunden, null Fehler, keine Verlangsamung',
    'rep.quant':'Quantisierungsstudie','rep.quantd':'Q4-Regression bei Medikamentennamen, je 42 Läufe','rep.serving':'Model Serving','rep.model':'Thailändisches Medizin-LLM (8B)',
    'rep.servingd':'Ollama · On-Premise-GPU-Server · authentifizierte API','rep.ci':'CI, bei jedem Merge:','rep.acc':'Genauigkeit','rep.cit':'Zitate','rep.drug':'Wirkstoffklasse','rep.priv':'Datenschutz',
    'stat.gpa':'GPA (max. 4.00)','stat.awards':'Preise und Auszeichnungen','stat.certs':'KI-Zertifikate','stat.toeic':'TOEIC-Ergebnis',
    'work.eyebrow':'Projekt-Highlight',
    'work.title':'CareMind: ein On-Premise-LLM für <em>Pflegeberichte im Krankenhaus</em>',
    'work.role':'Software Engineer Intern',
    'work.award':'Fast Track Award, TED Venture Catalyst 2026',
    'work.intro':'CareMind entwirft Pflegeberichte auf Thai und Englisch mit Quellenangaben – mit einem lokal betriebenen thailändischen Medizin-LLM (8B). <strong>Meine Verantwortung: Model Serving, Evaluation und KI-Betrieb (MLOps)</strong> – das Modell zuverlässig auf einem On-Premise-GPU-Server betreiben, messen, ob die Ausgaben stimmen, und den Dienst stabil halten.',
    'work.flow':'So entsteht ein Bericht',
    'flow.1t':'Patientenakten','flow.1d':'Datenquelle für den Bericht',
    'flow.2t':'LLM entwirft den Bericht','flow.2d':'Medizin-LLM (8B) über Ollama',
    'flow.mine':'von mir gebaut',
    'flow.3t':'Korrektur der Medikamentennamen','flow.3d':'Stellt korrekte Medikamentennamen wieder her',
    'flow.4t':'Quellenangaben','flow.4d':'97,7 % Zitationspräzision',
    'flow.5t':'Prüfung durch die Pflege','flow.5d':'Die Pflegekraft prüft den Entwurf und gibt ihn frei',
    'gate.label':'CI-Gate vor jedem Merge','gate.1':'Genauigkeit','gate.2':'Zitate','gate.3':'Konsistenz der Wirkstoffklassen','gate.4':'Datenschutzprüfung der Testdaten',
    'did.1h':'Serving und Deployment',
    'did.1a':'LLM mit Ollama hinter einer sicheren, authentifizierten API auf einem On-Premise-GPU-Server bereitgestellt',
    'did.1b':'Backend containerisiert – mit automatisiertem GitHub-Actions-Image-Workflow und Docker-Compose-Setup in einem Schritt',
    'did.2h':'Evaluation und Tests',
    'did.2a':'Automatisierte Tests aufgebaut, die vor jedem Merge in der CI laufen; Zitationspräzision von 97,7 % gemessen',
    'did.2b':'Q3- und Q4-Quantisierung in je 42 Läufen verglichen, eine signifikante Regression bei Medikamentennamen in Q4 gefunden (p = 0,029) und einen Korrekturschritt gebaut, der die Namen vor dem Anhängen der Quellen repariert',
    'did.3h':'Zuverlässigkeit und Betrieb',
    'did.3a':'Lasttest mit 3.806 Anfragen über 3 Stunden – ohne Fehler oder Verlangsamung und ohne Hänger bei Lastspitzen',
    'did.3b':'GPU-Monitoring eingerichtet: selbstheilender Watchdog, Alerts, Uptime-Checks mit echter Generierung, tägliche Stichproben zur Genauigkeit und Backups',
    'did.3c':'Eine Blockade des GPU-Speichers diagnostiziert und deren Erkennung und Freigabe automatisiert',
    'xp.1t':'Software Engineer Intern','xp.1w':'MFU Medical Center Hospital · Chiang Rai, Thailand',
    'xp.1a':'Verantwortlich für Model Serving, Evaluation und KI-Betrieb von CareMind, einer On-Premise-KI-Anwendung, die Pflegeberichte mit Quellenangaben entwirft (<a href="#work">Details oben</a>)',
    'xp.2t':'Junior Software Engineer','xp.2w':'ACE Data Systems Ltd · Yangon, Myanmar',
    'xp.2a':'C#/.NET-Backend-APIs und SQL Stored Procedures für die Datenverarbeitung in der Banking-App SMEDB entwickelt',
    'xp.2b':'Java-Unternehmensanwendungen gebaut, API-Endpunkte für die Frontend-Integration dokumentiert und in Agile-Sprints mit der QA zusammengearbeitet',
    'xp.3t':'Mathe-Nachhilfe','xp.3w':'Selbstständig','xp.3a':'Mathematikunterricht für Schülerinnen und Schüler, von Algebra bis Analysis auf Hochschulniveau',
    'proj.eyebrow':'Projekte','proj.title':'Signale, Sensoren und <em>Roboter</em>',
    'proj.ecg.t':'EKG-Arrhythmie-Klassifikation',
    'proj.ecg.a':'EKG-Datenpipeline gebaut: Signalfilterung, R-Zacken-Erkennung nach Pan–Tompkins sowie RR- und QRS-Merkmale',
    'proj.ecg.b':'SVM trainiert, die Arrhythmie-Schläge markiert; evaluiert auf einem kleinen Datensatz mit 117 Schlägen und stratifiziertem 70/30-Split',
    'proj.bot.meta':'Eigenbauten von Grund auf',
    'proj.bot.t':'Autonomer mobiler Roboter und Roboterarm',
    'proj.bot.a':'Zwei Roboter allein entworfen und gebaut, mit günstigen und dennoch industrietauglichen Komponenten – von Mechanik und Elektronik bis zur Software',
    'proj.bot.b':'Ein mobiler Roboter, der seine Umgebung per LiDAR und Inertialsensor erfasst, und ein Roboterarm mit eigenen Gelenken, Greifer und Steuerungssoftware',
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
    'ed.degdates':'Aug. 2024 – Mai 2027 (voraussichtlich)','ed.honoursv':'Akademische Auszeichnung, GPA 4,00 im Studienjahr 2024',
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
    'ft.copy':'© 2026 Eaindray · Chiang Rai, Thailand'
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
    if(f.formatRange && (lang === 'en' || lang === 'de')){ try{ return f.formatRange(parts[0], parts[1]); }catch(e){} }
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
  if(!LANGS[start]) start = 'en';
  if(start !== 'en') apply(start); else renderMenuState();

  return { t:t, fmt:fmt, set:apply, get lang(){ return current; }, langs:LANGS };
})();

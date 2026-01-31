const body = document.getElementById("body1");
const titleV = document.getElementById("titleV1");
const data = document.getElementById("data1");
const left = document.getElementById("left1");
const right = document.getElementById("right1");
const start = document.getElementById("start1");
const numerator = document.getElementById("numerator1");
const denominator = document.getElementById("denominator1");

const toggle = document.getElementById("toggle1");
const checkbox = document.getElementById("checkbox1");


let URLlist = [
    "https://www.fe-siken.com/s/kakomon/30_aki/q51.html",
    "https://www.fe-siken.com/s/kakomon/28_haru/q52.html",
    "https://www.fe-siken.com/s/kakomon/17_aki/q45.html",
    "https://www.fe-siken.com/s/kakomon/27_haru/q53.html",
    "https://www.fe-siken.com/s/kakomon/27_haru/q52.html",
    "https://www.fe-siken.com/s/kakomon/19_haru/q71.html",
    "https://www.fe-siken.com/s/kakomon/26_aki/q51.html",
    "https://www.fe-siken.com/s/kakomon/26_haru/q52.html",
    "https://www.fe-siken.com/s/kakomon/25_aki/q51.html",
    "https://www.fe-siken.com/s/kakomon/31_haru/q52.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q53.html",
    "https://www.ap-siken.com/s/kakomon/02_aki/q53.html",
    "https://www.pm-siken.com/s/kakomon/06_aki/q06.html",
    "https://www.fe-siken.com/s/kakomon/04_menjo/q51.html",
    "https://www.fe-siken.com/s/kakomon/02_menjo/q53.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q52.html",
    "https://www.fe-siken.com/s/kakomon/31_haru/q53.html",
    "https://www.fe-siken.com/s/kakomon/30_aki/q52.html",
    "https://www.fe-siken.com/s/kakomon/29_aki/q53.html",
    "https://www.fe-siken.com/s/kakomon/29_haru/q51.html",
    "https://www.fe-siken.com/s/kakomon/27_haru/q54.html",
    "https://www.fe-siken.com/s/kakomon/26_aki/q52.html",
    "https://www.fe-siken.com/s/kakomon/25_haru/q52.html",
    "https://www.fe-siken.com/s/kakomon/23_aki/q51.html",
    "https://www.ap-siken.com/s/kakomon/22_haru/q52.html",
    "https://www.fe-siken.com/s/kakomon/21_haru/q51.html",
    "https://www.fe-siken.com/s/kakomon/20_aki/q45.html",
    "https://www.fe-siken.com/s/kakomon/20_haru/q75.html",
    "https://www.fe-siken.com/s/kakomon/02_menjo/q54.html",
    "https://www.fe-siken.com/s/kakomon/28_haru/q76.html",
    "https://www.fe-siken.com/s/kakomon/25_haru/q52.html",
    "https://www.fe-siken.com/s/kakomon/23_haru/q51.html",
    "https://www.fe-siken.com/s/kakomon/28_aki/q52.html",
    "https://www.fe-siken.com/s/kakomon/28_haru/q53.html",
    "https://www.fe-siken.com/s/kakomon/30_haru/q51.html",
    "https://www.fe-siken.com/s/kakomon/25_aki/q53.html",
    "https://www.fe-siken.com/s/kakomon/22_haru/q51.html",
    "https://www.fe-siken.com/s/kakomon/19_aki/q48.html",
    "https://www.fe-siken.com/s/kakomon/16_aki/q56.html",
    "https://www.fe-siken.com/s/kakomon/30_haru/q52.html",
    "https://www.fe-siken.com/s/kakomon/17_haru/q46.html",
    "https://www.fe-siken.com/s/kakomon/29_haru/q54.html",
    "https://www.fe-siken.com/s/kakomon/03_menjo/q53.html",
    "https://www.fe-siken.com/s/kakomon/03_menjo/q51.html",
    "https://www.fe-siken.com/s/kakomon/02_menjo/q51.html",
    "https://www.ap-siken.com/s/kakomon/06_haru/q51.html",
    "https://www.ap-siken.com/s/kakomon/29_haru/q51.html",
    "https://www.fe-siken.com/s/kakomon/25_aki/q53.html",
    "https://www.pm-siken.com/s/kakomon/04_aki/q07.html",
    "https://www.pm-siken.com/s/kakomon/02_aki/q05.html",
    "https://www.pm-siken.com/s/kakomon/28_haru/q08.html",
    "https://www.pm-siken.com/s/kakomon/06_aki/q08.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q53.html",
    "https://www.fe-siken.com/s/kakomon/30_haru/q54.html",
    "https://www.fe-siken.com/s/kakomon/30_aki/q54.html",
    "https://www.fe-siken.com/s/kakomon/29_aki/q51.html",
    "https://www.fe-siken.com/s/kakomon/28_aki/q53.html",
    "https://www.fe-siken.com/s/kakomon/15_haru/q56.html",
    "https://www.fe-siken.com/s/kakomon/14_haru/q56.html",
    "https://www.fe-siken.com/s/kakomon/03_menjo/q54.html",
    "https://www.fe-siken.com/s/kakomon/02_menjo/q54.html",
    "https://www.fe-siken.com/s/kakomon/28_aki/q54.html",
    "https://www.fe-siken.com/s/kakomon/24_haru/q53.html",
    "https://www.fe-siken.com/s/kakomon/29_aki/q52.html",
    "https://www.fe-siken.com/s/kakomon/21_aki/q52.html",
    "https://www.fe-siken.com/s/kakomon/21_aki/q53.html",
    "https://www.fe-siken.com/s/kakomon/21_haru/q52.html",
    "https://www.fe-siken.com/s/kakomon/31_haru/q54.html",
    "https://www.fe-siken.com/s/kakomon/16_haru/q55.html",
    "https://www.fe-siken.com/s/kakomon/25_aki/q39.html",
    "https://www.fe-siken.com/s/kakomon/21_aki/q60.html",
    "https://www.fe-siken.com/s/kakomon/26_aki/q55.html",
    "https://www.fe-siken.com/s/kakomon/27_aki/q54.html",
    "https://www.fe-siken.com/s/kakomon/02_menjo/q75.html",
    "https://www.fe-siken.com/s/kakomon/24_haru/q74.html",
    "https://www.fe-siken.com/s/kakomon/21_aki/q28.html",
    "https://www.fe-siken.com/s/kakomon/19_haru/q75.html",
    "https://www.fe-siken.com/s/kakomon/02_menjo/q74.html",
    "https://www.fe-siken.com/s/kakomon/30_haru/q74.html",
    "https://www.fe-siken.com/s/kakomon/28_haru/q74.html",
    "https://www.fe-siken.com/s/kakomon/31_haru/q77.html",
    "https://www.fe-siken.com/s/kakomon/17_haru/q75.html",
    "https://www.fe-siken.com/s/kakomon/16_aki/q76.html",
    "https://www.fe-siken.com/s/kakomon/15_aki/q78.html",
    "https://www.fe-siken.com/s/kakomon/18_aki/q76.html",
    "https://www.fe-siken.com/s/kakomon/17_aki/q76.html",
    "https://www.fe-siken.com/s/kakomon/24_aki/q77.html",
    "https://www.fe-siken.com/s/kakomon/20_aki/q75.html",
    "https://www.fe-siken.com/s/kakomon/22_aki/q76.html",
    "https://www.fe-siken.com/s/kakomon/30_haru/q75.html",
    "https://www.fe-siken.com/s/kakomon/23_haru/q74.html",
    "https://www.fe-siken.com/s/kakomon/22_aki/q75.html",
    "https://www.fe-siken.com/s/kakomon/21_haru/q76.html",
    "https://www.fe-siken.com/s/kakomon/18_haru/q74.html",
    "https://www.fe-siken.com/s/kakomon/17_aki/q69.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q55.html",
    "https://www.fe-siken.com/s/kakomon/24_haru/q55.html",
    "https://www.fe-siken.com/s/kakomon/28_aki/q56.html",
    "https://www.fe-siken.com/s/kakomon/26_aki/q56.html",
    "https://www.fe-siken.com/s/kakomon/29_aki/q55.html",
    "https://www.fe-siken.com/s/kakomon/02_menjo/q56.html",
    "https://www.fe-siken.com/s/kakomon/29_haru/q55.html",
    "https://www.fe-siken.com/s/kakomon/24_haru/q55.html",
    "https://www.fe-siken.com/s/kakomon/21_aki/q56.html",
    "https://www.fe-siken.com/s/kakomon/30_haru/q56.html",
    "https://www.fe-siken.com/s/kakomon/28_aki/q55.html",
    "https://www.fe-siken.com/s/kakomon/26_haru/q55.html",
    "https://www.fe-siken.com/s/kakomon/16_aki/q59.html",
    "https://www.fe-siken.com/s/kakomon/03_menjo/q56.html",
    "https://www.fe-siken.com/s/kakomon/30_aki/q57.html",
    "https://www.fe-siken.com/s/kakomon/25_aki/q56.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q74.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q57.html",
    "https://www.fe-siken.com/s/kakomon/23_aki/q61.html",
    "https://www.fe-siken.com/s/kakomon/24_haru/q42.html",
    "https://www.fe-siken.com/s/kakomon/02_menjo/q57.html",
    "https://www.fe-siken.com/s/kakomon/30_aki/q40.html",
    "https://www.fe-siken.com/s/kakomon/29_haru/q57.html",
    "https://www.fe-siken.com/s/kakomon/28_haru/q56.html",
    "https://www.fe-siken.com/s/kakomon/27_haru/q57.html",
    "https://www.fe-siken.com/s/kakomon/26_haru/q56.html",
    "https://www.fe-siken.com/s/kakomon/22_haru/q54.html",
    "https://www.fe-siken.com/s/kakomon/02_menjo/q55.html",
    "https://www.fe-siken.com/s/kakomon/24_haru/q51.html",
    "https://www.fe-siken.com/s/kakomon/28_haru/q50.html",
    "https://www.fe-siken.com/s/kakomon/05_menjo/q12.html",
    "https://www.fe-siken.com/s/kakomon/28_haru/q57.html",
    "https://www.fe-siken.com/s/kakomon/25_aki/q15.html",
    "https://www.fe-siken.com/s/kakomon/24_aki/q56.html",
    "https://www.fe-siken.com/s/kakomon/24_aki/q65.html",
    "https://www.fe-siken.com/s/kakomon/25_aki/q58.html",
    "https://www.fe-siken.com/s/kakomon/05_menjo/q44.html",
    "https://www.fe-siken.com/s/kakomon/29_aki/q57.html",
    "https://www.fe-siken.com/s/kakomon/02_menjo/q59.html",
    "https://www.fe-siken.com/s/kakomon/02_menjo/q60.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q59.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q60.html",
    "https://www.fe-siken.com/s/kakomon/31_haru/q59.html",
    "https://www.fe-siken.com/s/kakomon/30_aki/q60.html",
    "https://www.fe-siken.com/s/kakomon/30_haru/q58.html",
    "https://www.fe-siken.com/s/kakomon/30_haru/q59.html",
    "https://www.fe-siken.com/s/kakomon/31_haru/q58.html",
    "https://www.fe-siken.com/s/kakomon/29_haru/q60.html",
    "https://www.fe-siken.com/s/kakomon/28_haru/q60.html",
    "https://www.fe-siken.com/s/kakomon/27_haru/q59.html",
    "https://www.fe-siken.com/s/kakomon/27_haru/q61.html",
    "https://www.fe-siken.com/s/kakomon/26_aki/q59.html",
    "https://www.fe-siken.com/s/kakomon/24_haru/q58.html",
    "https://www.fe-siken.com/s/kakomon/24_haru/q59.html",
    "https://www.fe-siken.com/s/kakomon/24_haru/q60.html",
    "https://www.fe-siken.com/s/kakomon/22_aki/q58.html",
    "https://www.fe-siken.com/s/kakomon/22_haru/q57.html",
    "https://www.fe-siken.com/s/kakomon/22_haru/q60.html",
    "https://www.fe-siken.com/s/kakomon/21_aki/q58.html",
    "https://www.fe-siken.com/s/kakomon/21_haru/q59.html"
];

let titleList = [
    "WBS を使用する目的",
    "プロジェクトの目的や範囲の明確化",
    "WBS を使う目的",
    "WBS 作成のプロセスで行うこと",
    "ステークホルダとは",
    "ステークホルダを重視する目的",
    "WBS で定義するもの",
    "プロジェクトチームが実行すべき作業",
    "プロジェクトの特性",
    "PDM の開始終了関係",
    "アクティビティの依存関係",
    "応用情報 プレシデンスダイヤグラム法",
    "pm 令和 6 年秋午前 II 問 6 プレシデンスダイヤグラム法",
    "プレシデンスダイアグラム 2(PDM→PERT)",
    "アローダイアグラム(見方)",
    "クリティカルパス",
    "アローダイヤグラムの日程計画(最小所要日数)",
    "プロジェクトの日程計画(所要日数)",
    "プロジェクト活動のクリティカルパス",
    "アローダイアグラムで表されるプロジェクト(最短日数)",
    "プロジェクトの最短日数",
    "クリティカルパス",
    "プロジェクトの日程計画 (説明)",
    "アローダイアグラムで表されるプロジェクト(最早結合点時刻)",
    "アローダイアグラムでの作業の最遅開始日",
    "クリティカルパスと最早開始日",
    "クリティカルパス とは",
    "クリティカルパスでの総所要日数",
    "スケジュール管理(生産性＋開発工数)",
    "プロジェクト組織の説明",
    "プロジェクトの日程計画 (説明)",
    "ファストトラッキング技法",
    "アクティビティの所要期間を短縮する技法",
    "優先的に資源を投入すべき工程",
    "アローダイアグラムの問題(短縮)",
    "プロジェクトのアローダイアグラム(応援・短縮)",
    "プロジェクトの最短作業日数(短縮)",
    "アローダイアグラム(短縮)",
    "プロジェクトの開発工数(追加工数)",
    "プロジェクトの工数配分(進捗度)",
    "ガントチャートの特徴",
    "トレンドチャートの説明",
    "ガントチャートの特徴",
    "EVM の管理対象の組みはどれか",
    "EVM を活用したパフォーマンス管理",
    "EVM",
    "アーンドバリュー分析",
    "完了時のコスト予測",
    "pm 令和 4 年秋午前 II 問題 7",
    "pm 令和 2 年午前 II 問題 5",
    "pm 平成 28 春午前 II 問題 8",
    "pm 令和 6 年秋午前 II 問題 8",
    "ファンクションポイント法の説明",
    "ファンクションポイント値",
    "プロジェクトに要する全工数 3",
    "ファンクションポイント法の説明",
    "ファンクションポイント法",
    "ファンクションポイント法",
    "ファンクションポイント法",
    "作業要員数の把握",
    "スケジュール管理(生産性＋開発工数)",
    "作業要員数の比較",
    "設計書の作成するための工数",
    "作業工数の計算",
    "開発を完了させるための工数",
    "システム規模を見積もる方法",
    "開発工数の見積",
    "コーディング所要工数",
    "工数の見積り",
    "リスク移転に該当するもの",
    "損害の負担を受容するリスク対応",
    "脅威に対して適用できる対応戦略",
    "PMBOK の該当する戦略はどれか",
    "ABC 分析の適用事例",
    "パレート図の説明",
    "パレート図を用いた分析",
    "パレート図の説明",
    "ロングテール",
    "ロングテールの説明",
    "ロングテールの説明",
    "特性要因図",
    "特性要因図の説明",
    "特性要因図に関する記述",
    "管理図の説明",
    "管理図を説明したもの",
    "QC における管理図",
    "散布図",
    "散布図について",
    "ヒストグラムの説明 2",
    "ABC 分析手法の説明",
    "ABC 分析を適用する事例",
    "ABC 分析したグラフ",
    "取扱商品の ABC 分析",
    "ABC 分析の説明",
    "品質マネジメントシステムの運用",
    "Act に該当するものはどれか",
    "IT サービスマネジメントの管理プロセス",
    "SMS の計画に含まれる活動",
    "IT サービスを廃止",
    "サービスレベル管理の要求事項",
    "月の可用性は何%か",
    "サービスの可用性",
    "IT サービスマネジメントの管理プロセス",
    "IT サービス運営手法を示すサービスサポート",
    "ローカルサービスデスクの特徴",
    "バーチャル・サービスデスク",
    "一斉移行方式の特徴",
    "システムの一斉移行方式の特徴",
    "SLA を説明したものはどれか",
    "SLA を満たすサービスの停止時間",
    "SLA の策定",
    "BCP の策定・運用に関する記述",
    "事業承継計画で用いられる用語",
    "BCP の説明",
    "ビジネスインパクト分析",
    "インシデントに該当するもの",
    "インシデント対応体制の構築(JIS)",
    "インシデント管理として行うもの",
    "インシデントの記録",
    "インシデントに対して最初に実施する活動",
    "“既知の誤り”の説明はどれか",
    "インシデント管理の対象となるもの",
    "問題管理プロセスで実施すること",
    "構成管理の対象項目",
    "構成管理に起因しない問題",
    "キャパシティプランニングの作業項目",
    "キャパシティ管理プロセス",
    "キャパシティプランニング",
    "ITILv3 における問題管理プロセスの目標",
    "ランニングコストに該当するもの",
    "逓減課金方式のグラフ",
    "停電時の電力供給",
    "過電圧の被害から防ぐための手段",
    "監査報告書に記載する指摘事項",
    "伝票入力作業の監査手続",
    "システム監査人についての記述 3",
    "システム監査人の行動",
    "システム監査人の外観上の独立性",
    "内部統制の整備及び運用",
    "システム監査人の行為",
    "システム監査人の独立性",
    "システム監査のヒアリング",
    "システム監査の実施体制に関する記述",
    "組織体がシステム監査を実施する目的",
    "システム監査の対象",
    "システム監査人の業務範囲",
    "システム監査人に関する記述",
    "システム監査人の独立性",
    "システム監査時に提出すべき資料",
    "監査証拠となるもの",
    "システム監査におけるヒアリング",
    "システム監査規程の最終的な承認者",
    "データのインテグリティが確保できる体制(内部統制)",
    "システム監査人の責任",
    "システム管理基準の説明"
];

let dataList = [
    "H30 秋 51",
    "H28 春 52",
    "H17 秋 45",
    "H27 春 53",
    "H27 春 52",
    "H19 春 71",
    "H26 秋 51",
    "H26 春 52",
    "H25 秋 51",
    "H31 春 52",
    "R01 秋 53",
    "R02 秋 53 応用情報",
    "pm R06 秋 06",
    "R04 免 51",
    "R02 免 53",
    "R01 秋 52",
    "H31 春 53",
    "H30 秋 52",
    "H29 秋 53",
    "H29 春 51",
    "H27 春 54",
    "H26 秋 52",
    "H25 春 52",
    "H23 秋 51",
    "応H22 春 52",
    "H21 春 51",
    "H20 秋 45",
    "H20 春 75",
    "R02 免 54",
    "H28 春 76",
    "H25 春 52",
    "H23 春 51",
    "H28 秋 52",
    "H28 春 53",
    "H30 春 51",
    "H25 秋 53",
    "H22 春 51",
    "H19 秋 48",
    "H16 秋 56",
    "H30 春 52",
    "H17 春 46",
    "H29 春 54",
    "R03 免 53",
    "R03 免 51",
    "R02 免 51",
    "R06 春応用 51",
    "H29 春応用 51",
    "H25 秋 53",
    "pm R04 秋 07",
    "pm R02 秋 05",
    "pm H28 春 08",
    "pm R06 秋 08",
    "R 元秋 53",
    "H30 春 54",
    "H30 秋 54",
    "H29 秋 51",
    "H28 秋 53",
    "H15 春 56",
    "H14 春 56",
    "R03 免 54",
    "R02 免 54",
    "H28 秋 54",
    "H24 春 53",
    "H29 秋 52",
    "H21 秋 52",
    "H21 秋 53",
    "H21 春 52",
    "H31 春 54",
    "H16 春 55",
    "H25 秋 39",
    "H21 秋 60",
    "H26 秋 55",
    "H27 秋 54",
    "R02 免 75",
    "H24 春 74",
    "H21 秋 28",
    "H19 春 75",
    "R02 免 74",
    "H30 春 74",
    "H28 春 74",
    "H31 春 77",
    "H17 春 75",
    "H16 秋 76",
    "H15 秋 78",
    "H18 秋 76",
    "H17 秋 76",
    "H24 秋 77",
    "H20 秋 75",
    "H22 秋 76",
    "H30 春 75",
    "H23 春 74",
    "H22 秋 75",
    "H21 春 76",
    "H18 春 74",
    "H17 秋 69",
    "R01 秋 55",
    "H24 春 55",
    "H28 秋 56",
    "H26 秋 56",
    "H29 秋 55",
    "R02 免 56",
    "H29 春 55",
    "H24 春 55",
    "H21 秋 56",
    "H30 春 56",
    "H28 秋 55",
    "H26 春 55",
    "H16 秋 59",
    "R03 免 56",
    "H30 秋 57",
    "H25 秋 56",
    "R 元秋 74",
    "R 元秋 57",
    "H23 秋 61",
    "H24 春 42",
    "R02 免 57",
    "H30 秋 40",
    "H29 春 57",
    "H28 春 56",
    "H27 春 57",
    "H26 春 56",
    "H22 春 54",
    "R02 免 55",
    "H24 春 51",
    "H28 春 50",
    "R05 免 12",
    "H28 春 57",
    "H25 秋 15",
    "H24 秋 56",
    "H24 秋 65",
    "H25 秋 58",
    "R05 免 44",
    "H29 秋 57",
    "R02 免 59",
    "R02 免 60",
    "R 元秋 59",
    "R 元秋 60",
    "H31 春 59",
    "H30 秋 60",
    "H30 春 58",
    "H30 春 59",
    "H31 春 58",
    "H29 春 60",
    "H28 春 60",
    "H27 春 59",
    "H27 春 61",
    "H26 秋 59",
    "H24 春 58",
    "H24 春 59",
    "H24 春 60",
    "H22 秋 58",
    "H22 春 57",
    "H22 春 60",
    "H21 秋 58",
    "H21 春 59"
];

   

// チェック
let checkList = [];
for (let index = 0; index < titleList.length; index++) {
    checkList.push(false);
}

checkbox.onclick = () => {
    if (checkbox.checked) {
        checkList[number-1] = true;
    } else {
        checkList[number-1] = false;
    }
}

// トグルボタン
let toggleBtn = false;
let checkNumberList = [];

toggle.onclick = () => {
    if (toggle.checked) {
        checkList.forEach((e, i) => {
            if (e) {
                checkNumberList.push(i);
            }
        });
        body.style.backgroundColor = "rgb(255, 195, 146)";
        toggleBtn = true;
        set(checkNumberList[0], checkNumberList);
    } else {
        body.style.backgroundColor = "rgb(197, 255, 241)";
        checkNumberList = [];
        toggleBtn = false;
        set(0, titleList);
    }
}

// セット
function set(i, list) {
    number = 1;
    numerator.textContent = number;
    denominator.textContent = list.length
    console.log(titleList[i], i);
    titleV.textContent = titleList[i];
    data.textContent = dataList[i];
    start.setAttribute('href', URLlist[i]);
}

let number = 1;
set(number-1, titleList);

// 選択

if (toggleBtn) {
    left.onclick = () => {
        if (number > 1) {
            number--;
            select(checkNumberList[number-1]);
        }
    }
    right.onclick = () => {
        if (number < denominator.textContent) {
            number++;
            select(checkNumberList[number-1]);
        }
    }
} else {
    left.onclick = () => {
        if (number > 1) {
            number--;
            select(number-1);
        }
    }
    right.onclick = () => {
        if (number < denominator.textContent) {
            number++;
            select(number-1);
        }
    }
}


function select(i) {
    numerator.textContent = number;
    titleV.textContent = titleList[i];
    data.textContent = dataList[i];
    start.setAttribute('href', URLlist[i]);
    if (checkList[i]) {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
}

console.log(titleList.length + "" + dataList.length + "" + URLlist.length);
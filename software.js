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
    "https://www.fe-siken.com/s/kakomon/21_haru/q66.html",
    "https://www.fe-siken.com/s/kakomon/27_haru/q66.html",
    "https://www.fe-siken.com/s/kakomon/25_haru/q64.html",
    "https://www.fe-siken.com/s/kakomon/23_toku/q63.html",
    "https://www.fe-siken.com/s/kakomon/21_aki/q65.html",
    "https://www.fe-siken.com/s/kakomon/04_menjo/q64.html",
    "https://www.fe-siken.com/s/kakomon/30_aki/q65.html",
    "https://www.fe-siken.com/s/kakomon/23_aki/q65.html",
    "https://www.fe-siken.com/s/kakomon/22_haru/q66.html",
    "https://www.fe-siken.com/s/kakomon/03_menjo/q64.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q65.html",
    "https://www.fe-siken.com/s/kakomon/31_haru/q66.html",
    "https://www.fe-siken.com/s/kakomon/25_aki/q65.html",
    "https://www.fe-siken.com/s/kakomon/21_aki/q67.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q45.html",
    "https://www.fe-siken.com/s/kakomon/20_haru/q42.html",
    "https://www.fe-siken.com/s/kakomon/22_aki/q45.html",
    "https://www.fe-siken.com/s/kakomon/19_aki/q43.html",
    "https://www.fe-siken.com/s/kakomon/07_menjo/q11.html",
    "https://www.fe-siken.com/s/kakomon/28_aki/q50.html",
    "https://www.fe-siken.com/s/kakomon/22_haru/q46.html",
    "https://www.fe-siken.com/s/kakomon/28_aki/q26.html",
    "https://www.fe-siken.com/s/kakomon/27_haru/q47.html",
    "https://www.fe-siken.com/s/kakomon/24_aki/q26.html",
    "https://www.fe-siken.com/s/kakomon/23_toku/q46.html",
    "https://www.fe-siken.com/s/kakomon/20_aki/q56.html",
    "https://www.fe-siken.com/s/kakomon/16_aki/q49.html",
    "https://www.fe-siken.com/s/kakomon/30_haru/q4.html",
    "https://www.fe-siken.com/s/kakomon/28_aki/q3.html",
    "https://www.fe-siken.com/s/kakomon/28_haru/q2.html",
    "https://www.fe-siken.com/s/kakomon/26_haru/q48.html",
    "https://www.fe-siken.com/s/kakomon/25_haru/q46.html",
    "https://www.fe-siken.com/s/kakomon/17_haru/q11.html",
    "https://www.fe-siken.com/s/kakomon/15_haru/q10.html",
    "https://www.fe-siken.com/s/kakomon/30_haru/q47.html",
    "https://www.fe-siken.com/s/kakomon/21_aki/q48.html",
    "https://www.fe-siken.com/s/kakomon/21_haru/q44.html",
    "https://www.fe-siken.com/s/kakomon/29_aki/q24.html",
    "https://www.fe-siken.com/s/kakomon/24_haru/q57.html",
    "https://www.fe-siken.com/s/kakomon/20_aki/q11.html",
    "https://www.fe-siken.com/s/kakomon/18_haru/q48.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q23.html",
    "https://www.fe-siken.com/s/kakomon/29_haru/q23.html",
    "https://www.fe-siken.com/s/kakomon/24_aki/q4.html",
    "https://www.fe-siken.com/s/kakomon/16_haru/q51.html",
    "https://www.fe-siken.com/s/kakomon/29_haru/q46.html",
    "https://www.fe-siken.com/s/kakomon/25_aki/q47.html",
    "https://www.fe-siken.com/s/kakomon/20_haru/q41.html",
    "https://www.fe-siken.com/s/kakomon/19_haru/q40.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q25.html",
    "https://www.fe-siken.com/s/kakomon/28_haru/q8.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q9.html",
    "https://www.fe-siken.com/s/kakomon/25_aki/q8.html",
    "https://www.fe-siken.com/s/kakomon/23_aki/q7.html",
    "https://www.fe-siken.com/s/kakomon/20_aki/q1.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q46.html",
    "https://www.fe-siken.com/s/kakomon/28_haru/q47.html",
    "https://www.fe-siken.com/s/kakomon/30_aki/q48.html",
    "https://www.fe-siken.com/s/kakomon/19_haru/q43.html",
    "https://www.fe-siken.com/s/kakomon/23_aki/q45.html",
    "https://www.fe-siken.com/s/kakomon/04_menjo/q46.html",
    "https://www.fe-siken.com/s/kakomon/03_menjo/q46.html",
    "https://www.fe-siken.com/s/kakomon/30_haru/q46.html",
    "https://www.fe-siken.com/s/kakomon/30_aki/q47.html",
    "https://www.fe-siken.com/s/kakomon/30_aki/q49.html",
    "https://www.fe-siken.com/s/kakomon/29_haru/q48.html",
    "https://www.fe-siken.com/s/kakomon/29_aki/q47.html",
    "https://www.fe-siken.com/s/kakomon/29_aki/q46.html",
    "https://www.fe-siken.com/s/kakomon/29_aki/q7.html",
    "https://www.fe-siken.com/s/kakomon/28_aki/q47.html",
    "https://www.fe-siken.com/s/kakomon/27_haru/q48.html",
    "https://www.fe-siken.com/s/kakomon/26_haru/q47.html",
    "https://www.fe-siken.com/s/kakomon/26_aki/q47.html",
    "https://www.fe-siken.com/s/kakomon/25_aki/q48.html",
    "https://www.fe-siken.com/s/kakomon/25_aki/q46.html",
    "https://www.fe-siken.com/s/kakomon/24_haru/q46.html",
    "https://www.fe-siken.com/s/kakomon/24_aki/q46.html",
    "https://www.fe-siken.com/s/kakomon/05_menjo/q36.html",
    "https://www.fe-siken.com/s/kakomon/22_haru/q47.html",
    "https://www.fe-siken.com/s/kakomon/22_aki/q46.html",
    "https://www.fe-siken.com/s/kakomon/21_aki/q46.html",
    "https://www.fe-siken.com/s/kakomon/21_aki/q7.html",
    "https://www.fe-siken.com/s/kakomon/02_menjo/q45.html",
    "https://www.fe-siken.com/s/kakomon/29_haru/q26.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q25.html",
    "https://www.fe-siken.com/s/kakomon/30_aki/q26.html",
    "https://www.fe-siken.com/s/kakomon/29_aki/q28.html",
    "https://www.fe-siken.com/s/kakomon/26_aki/q50.html",
    "https://www.fe-siken.com/s/kakomon/26_haru/q46.html",
    "https://www.fe-siken.com/s/kakomon/25_haru/q26.html",
    "https://www.fe-siken.com/s/kakomon/23_aki/q33.html",
    "https://www.fe-siken.com/s/kakomon/23_toku/q29.html",
    "https://www.fe-siken.com/s/kakomon/02_menjo/q65.html",
    "https://www.fe-siken.com/s/kakomon/23_aki/q63.html",
    "https://www.fe-siken.com/s/kakomon/31_haru/q46.html",
    "https://www.fe-siken.com/s/kakomon/28_haru/q64.html",
    "https://www.fe-siken.com/s/kakomon/30_aki/q46.html",
    "https://www.fe-siken.com/s/kakomon/23_toku/q49.html",
    "https://www.fe-siken.com/s/kakomon/20_haru/q45.html",
    "https://www.fe-siken.com/s/kakomon/27_haru/q50.html",
    "https://www.fe-siken.com/s/kakomon/25_haru/q22.html",
    "https://www.fe-siken.com/s/kakomon/31_haru/q47.html",
    "https://www.fe-siken.com/s/kakomon/26_haru/q49.html",
    "https://www.fe-siken.com/s/kakomon/24_haru/q48.html",
    "https://www.fe-siken.com/s/kakomon/30_haru/q48.html",
    "https://www.fe-siken.com/s/kakomon/28_aki/q48.html",
    "https://www.fe-siken.com/s/kakomon/20_aki/q15.html",
    "https://www.fe-siken.com/s/kakomon/02_menjo/q46.html",
    "https://www.fe-siken.com/s/kakomon/16_aki/q15.html",
    "https://www.fe-siken.com/s/kakomon/14_aki/q14.html",
    "https://www.fe-siken.com/s/kakomon/29_haru/q49.html",
    "https://www.fe-siken.com/s/kakomon/28_haru/q49.html",
    "https://www.fe-siken.com/s/kakomon/27_aki/q47.html",
    "https://www.fe-siken.com/s/kakomon/19_aki/q47.html",
    "https://www.fe-siken.com/s/kakomon/27_haru/q49.html",
    "https://www.fe-siken.com/s/kakomon/20_aki/q43.html",
    "https://www.fe-siken.com/s/kakomon/19_aki/q47.html",
    "https://www.fe-siken.com/s/kakomon/23_toku/q47.html",
    "https://www.fe-siken.com/s/kakomon/20_haru/q46.html",
    "https://www.fe-siken.com/s/kakomon/29_haru/q47.html",
    "https://www.fe-siken.com/s/kakomon/14_haru/q60.html",
    "https://www.fe-siken.com/s/kakomon/28_aki/q57.html",
    "https://www.fe-siken.com/s/kakomon/18_aki/q48.html",
    "https://www.fe-siken.com/s/kakomon/29_haru/q62.html",
    "https://www.fe-siken.com/s/kakomon/23_aki/q55.html",
    "https://www.fe-siken.com/s/kakomon/21_aki/q49.html",
    "https://www.fe-siken.com/s/kakomon/21_haru/q45.html",
    "https://www.fe-siken.com/s/kakomon/22_haru/q50.html",
    "https://www.fe-siken.com/s/kakomon/06_menjo/q12.html",
    "https://www.fe-siken.com/s/kakomon/05_menjo/q39.html",
    "https://www.fe-siken.com/s/kakomon/01_aki/q50.html",
    "https://www.fe-siken.com/s/kakomon/30_aki/q50.html",
    "https://www.fe-siken.com/s/kakomon/30_haru/q50.html",
    "https://www.fe-siken.com/s/kakomon/29_haru/q50.html",
    "https://www.fe-siken.com/s/kakomon/19_aki/q42.html",
    "https://www.fe-siken.com/s/kakomon/05_menjo/q38.html",
    "https://www.fe-siken.com/s/kakomon/24_haru/q50.html",
    "https://www.fe-siken.com/s/kakomon/15_aki/q46.html",
    "https://www.fe-siken.com/s/kakomon/24_haru/q51.html",
    "https://www.fe-siken.com/s/kakomon/28_haru/q50.html",
    "https://www.fe-siken.com/s/kakomon/19_aki/q42.html",
    "https://www.fe-siken.com/s/kakomon/24_haru/q51.html",
    "https://www.fe-siken.com/s/kakomon/28_haru/q50.html"
  ];
  let titleList = [
    "企画プロセスの目的",
    "企画プロセスにおける定義",
    "企画プロセスの目的",
    "企画プロセスで実施すること",
    "企画プロセスで実施すべきもの",
    "要件定義の合意形成の対象者",
    "要件定義プロセスで実施すべきもの",
    "要件定義プロセスで実施すべきもの",
    "要件定義の段階で行う作業",
    "非機能要件に該当するもの",
    "非機能要件の定義に該当する説明",
    "非機能要件項目",
    "非機能要件定義の説明",
    "非機能要件に該当するもの",
    "DFD の図の名称",
    "売上管理システムの DFD",
    "DFD の表記方法",
    "DFD の説明",
    "E-R モデルにおけるエンティティ（ソフトア要件定義）",
    "E-R 図で表現した設計書を生成する手法",
    "E-R 図の解釈に関する記述",
    "E-R 図に関する記述",
    "E-R 図の説明",
    "E-R 図の説明",
    "E-R 図で表せるもの",
    "E-R モデル",
    "E-R 図の読み方",
    "状態遷移図で示されるオートマトン",
    "自動販売機の状態遷移図",
    "状態遷移図（オートマトン）",
    "状態遷移図の説明",
    "状態遷移図を用いることが適切なシステム",
    "オートマトンの状態遷移図",
    "自動販売機の状態遷移図",
    "ソフトウェア方式設計で行うべき作業",
    "システム適格性確認テスト",
    "システム開発の最初の工程",
    "チェックディジットを付加した結果",
    "チェックディジットを利用する目的",
    "チェックディジット",
    "チェックディジット",
    "コード体系の選択",
    "顧客コードの最も少ない桁数",
    "コード化に必要なビット数",
    "業務システムのコード設計",
    "外部設計を完了時に承認を受けるもの",
    "データ中心アプローチ",
    "システム開発の外部設計工程で行う作業",
    "外部設計及び内部設計の説明",
    "UML を用いた概念データモデル",
    "流れ図で表される手続",
    "配列に関する流れ図",
    "流れ図",
    "単語表を再構成する流れ図",
    "10 進整数を２進数に変換する流れ図",
    "モジュール結合度",
    "モジュール結合度が最も弱いもの",
    "結合度が最も弱いモジュール結合",
    "モジュール結合度",
    "モジュール強度の評価",
    "基底クラスと派生クラスの関係",
    "クラスに関する記述",
    "オブジェクト指向(教 12-8)",
    "クラスとインスタンスとの関係",
    "オブジェクト指向における\"委譲\"に関する説明",
    "オブジェクト指向の基本概念",
    "クラスとオブジェクトの関係",
    "UML 相互作用を時系列に表す図",
    "オーバーライドの説明",
    "カプセル化の説明",
    "自動車のサブクラス",
    "オブジェクト指向の概念",
    "多相性（ポリモーフィズム）",
    "オブジェクト指向開発",
    "汎化の関係を示したもの",
    "オブジェクト指向プログラミングの特徴",
    "オブジェクト図",
    "オブジェクト指向の特徴",
    "オブジェクト指向におけるクラス間の関係",
    "オブジェクト指向",
    "カプセル化の効果 オブジェクト",
    "オブジェクト指向プログラムの特徴",
    "クラス図のうち，汎化の関係",
    "UML を用いた現金勘定(データベース設計)",
    "UML を用いた概念データモデル",
    "UML を用いたデータモデル",
    "UML を用いた図のデータモデル",
    "UML のクラス図を生成する名称",
    "UML の図 (教 12-10)",
    "UML を用いた図のデータモデルの多重度",
    "UML を用いた図のデータモデル",
    "UML を用いた図のデータモデルの多重度(説明済）",
    "並列処理や分岐を記述できる UML 業務フローは",
    "複数のモデル図法を体系化したもの",
    "UML における振る舞い図（アクティビティ図）",
    "UML を採用した場合の活用シーン",
    "シーケンス図とコミュニケーション図",
    "ホワイトボックステストの説明",
    "ホワイトボックステストの注目点",
    "ホワイトボックステスト技法",
    "ホワイトボックステスト",
    "ブラックボックステストに関する記述",
    "ブラックボックステスト",
    "ブラックボックステスト",
    "ブラックボックステストのテストデータ",
    "同値分割法と境界値分析によるテスト",
    "業務改善提案に対する決定表",
    "決定表の説明",
    "合否を判定する決定表",
    "決定表に関する問題",
    "判定条件網羅の最少のテストケース",
    "命令網羅によってテスト",
    "判定条件網羅のテストケース",
    "バグ管理図",
    "バグ累積件数のグラフ",
    "バグ埋込み法によるテスト",
    "バグ管理図",
    "設計書をレビューする方法",
    "デザインレビュー",
    "インスペクションの説明",
    "修正保守に関する説明",
    "保守性を表す指標値の短縮",
    "システムの保守に関する記述",
    "システム保守・運用品質の低下リスク",
    "アプリケーションの保守",
    "ウォータフォールモデル",
    "ウォータフォールモデルの説明",
    "プロトタイプを作成する回数",
    "スクラム開発",
    "プロジェクトの状況を共有するイベント",
    "XP で実践が提唱されているもの",
    "XP のプラクティスの説明",
    "エクストリームプログラミングのプラクティス",
    "リファクタリングについて",
    "CMMI の説明",
    "リバースエンジニアリング",
    "リバースエンジニアリング",
    "リバースエンジニアリング",
    "構成管理の対象項目",
    "構成管理に起因しない問題",
    "CMMI の説明",
    "構成管理の対象項目",
    "構成管理に起因しない問題"
  ];
let dataList = [
    "H21 春 66",
    "H27 春 66",
    "H25 春 64",
    "H23 春 63",
    "H21 秋 65",
    "R04 免 64",
    "H30 秋 65",
    "H23 秋 65",
    "H22 春 66",
    "R03 免 64",
    "R01 秋 65", // R 元秋 -> R01 秋
    "H31 春 66",
    "H25 秋 65",
    "H21 秋 67",
    "R01 秋 45", // R 元秋 -> R01 秋
    "H20 春 42",
    "H22 秋 45",
    "H19 秋 43",
    "R07 免 11", // 令和 7 免 -> R07 免
    "H28 秋 50",
    "H22 春 46",
    "H28 秋 26",
    "H27 春 47",
    "H24 秋 26",
    "H23 春 46",
    "H20 秋 56",
    "H16 秋 49",
    "H30 春 04",
    "H28 秋 03",
    "H28 春 02",
    "H26 春 48",
    "H25 春 46",
    "H17 春 11",
    "H15 春 10",
    "H30 春 47",
    "H21 秋 48",
    "H21 春 44",
    "H29 秋 24",
    "H24 春 57",
    "H20 秋 11",
    "H18 春 48",
    "R01 秋 23", // R 元秋 -> R01 秋
    "H29 春 23",
    "H24 秋 04",
    "H16 春 51",
    "H29 春 46",
    "H25 秋 47",
    "H20 春 41",
    "H19 春 40",
    "R01 秋 25", // R 元秋 -> R01 秋
    "H28 春 08",
    "R01 秋 09", // R 元秋 -> R01 秋
    "H25 秋 08",
    "H23 秋 07",
    "H20 秋 01",
    "R01 秋 46", // R 元秋 -> R01 秋
    "H28 春 47",
    "H30 秋 48",
    "H19 春 43",
    "H23 秋 45",
    "R04 免 46", // Ｒ０４免 -> R04 免
    "R03 免 46",
    "H30 春 46",
    "H30 秋 47",
    "H30 秋 49",
    "H29 春 48",
    "H29 秋 47",
    "H29 秋 46",
    "H29 秋 07",
    "H28 秋 47",
    "H27 春 48",
    "H26 春 47",
    "H26 秋 47",
    "H25 秋 48",
    "H25 秋 46", // H２５秋 -> H25 秋
    "H24 春 46",
    "H24 秋 46",
    "R05 免 36", // 令和 5 免 -> R05 免
    "H22 春 47",
    "H22 秋 46",
    "H21 秋 46",
    "H21 秋 07",
    "R02 免 45",
    "H29 春 26",
    "R01 秋 25", // R 元秋 -> R01 秋 (重複)
    "H30 秋 26",
    "H29 秋 28",
    "H26 秋 50",
    "H26 春 46",
    "H25 春 26",
    "H23 秋 33",
    "H23 春 29",
    "R02 免 65", // R02 免６５ -> R02 免 65
    "H23 秋 63",
    "H31 春 46",
    "H28 春 64",
    "H30 秋 46",
    "H23 春 49",
    "H20 春 45",
    "H27 春 50",
    "H25 春 22",
    "H31 春 47",
    "H26 春 49",
    "H24 春 48",
    "H30 春 48",
    "H28 秋 48",
    "H20 秋 15",
    "R02 免 46",
    "H16 秋 15",
    "H14 秋 14",
    "H29 春 49",
    "H28 春 49",
    "H27 秋 47",
    "H19 秋 47", // H1９秋 -> H19 秋
    "H27 春 49",
    "H20 秋 43",
    "H19 秋 47", // H1９秋 -> H19 秋 (重複)
    "H23 春 47",
    "H20 春 46",
    "H29 春 47",
    "H14 春 60",
    "H28 秋 57",
    "H18 秋 48",
    "H29 春 62",
    "H23 秋 55",
    "H21 秋 49",
    "H21 春 45",
    "H22 春 50",
    "R06 免 12", // 令和 6 免 -> R06 免
    "R05 免 39", // 令和 5 免３９ -> R05 免 39
    "R01 秋 50", // 令和元年 50 -> R01 秋 50
    "H30 秋 50",
    "H30 春 50", // Ｈ30 春 -> H30 春
    "H29 春 50",
    "H19 秋 42",
    "R05 免 38", // 令和5 免 -> R05 免
    "H24 春 50",
    "H15 秋 46",
    "H24 春 51",
    "H28 春 50",
    "H19 秋 42", // (重複)
    "H24 春 51", // (重複)
    "H28 春 50"  // (重複)
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
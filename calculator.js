const body = document.getElementById("body2");
const titleV = document.getElementById("titleV2");
const data = document.getElementById("data2");
const left = document.getElementById("left2");
const right = document.getElementById("right2");
const start = document.getElementById("start2");
const numerator = document.getElementById("numerator2");
const denominator = document.getElementById("denominator2");

const toggle = document.getElementById("toggle1");
const checkbox = document.getElementById("checkbox1");

let URLlist = [
  "https://www.fe-siken.com/s/kakomon/28_aki/q13.html",
  "https://www.fe-siken.com/s/kakomon/29_aki/q26.html",
  "https://www.fe-siken.com/s/kakomon/21_aki/q14.html",
  "https://www.fe-siken.com/s/kakomon/21_haru/q31.html",
  "https://www.fe-siken.com/s/kakomon/19_haru/q31.html",
  "https://www.fe-siken.com/s/kakomon/27_aki/q13.html",
  "https://www.fe-siken.com/s/kakomon/22_haru/q14.html",
  "https://www.fe-siken.com/s/kakomon/02_menjo/q25.html",
  "https://www.fe-siken.com/s/kakomon/27_haru/q27.html",
  "https://www.fe-siken.com/s/kakomon/30_haru/q35.html",
  "https://www.fe-siken.com/s/kakomon/24_haru/q9.html",
  "https://www.fe-siken.com/s/kakomon/18_aki/q38.html",
  "https://www.fe-siken.com/s/kakomon/19_haru/q38.html",
  "https://www.fe-siken.com/s/kakomon/30_haru/q13.html",
  "https://www.fe-siken.com/s/kakomon/28_aki/q46.html",
  "https://www.fe-siken.com/s/kakomon/25_aki/q13.html",
  "https://www.fe-siken.com/s/kakomon/25_haru/q14.html",
  "https://www.fe-siken.com/s/kakomon/03_menjo/q15.html",
  "https://www.fe-siken.com/s/kakomon/27_aki/q56.html",
  "https://www.fe-siken.com/s/kakomon/26_haru/q15.html",
  "https://www.fe-siken.com/s/kakomon/23_aki/q17.html",
  "https://www.fe-siken.com/s/kakomon/18_haru/q33.html",
  "https://www.fe-siken.com/s/kakomon/23_toku/q15.html",
  "https://www.fe-siken.com/s/kakomon/16_aki/q33.html",
  "https://www.fe-siken.com/s/kakomon/31_haru/q13.html",
  "https://www.fe-siken.com/s/kakomon/29_aki/q13.html",
  "https://www.fe-siken.com/s/kakomon/20_haru/q31.html",
  "https://www.fe-siken.com/s/kakomon/30_haru/q14.html",
  "https://www.fe-siken.com/s/kakomon/28_aki/q14.html",
  "https://www.fe-siken.com/s/kakomon/21_aki/q15.html",
  "https://www.fe-siken.com/s/kakomon/26_aki/q13.html",
  "https://www.fe-siken.com/s/kakomon/19_aki/q35.html",
  "https://www.fe-siken.com/s/kakomon/29_aki/q14.html",
  "https://www.fe-siken.com/s/kakomon/24_haru/q15.html",
  "https://www.fe-siken.com/s/kakomon/01_aki/q72.html",
  "https://www.fe-siken.com/s/kakomon/28_haru/q41.html",
  "https://www.fe-siken.com/s/kakomon/24_aki/q63.html",
  "https://www.fe-siken.com/s/kakomon/29_haru/q63.html",
  "https://www.fe-siken.com/s/kakomon/23_aki/q16.html",
  "https://www.fe-siken.com/s/kakomon/28_aki/q14.html",
  "https://www.fe-siken.com/s/kakomon/15_haru/q37.html",
  "https://www.fe-siken.com/s/kakomon/20_aki/q31.html",
  "https://www.fe-siken.com/s/kakomon/05_menjo/q4.html",
  "https://www.fe-siken.com/s/kakomon/01_aki/q15.html",
  "https://www.fe-siken.com/s/kakomon/29_aki/q12.html",
  "https://www.fe-siken.com/s/kakomon/29_haru/q11.html",
  "https://www.fe-siken.com/s/kakomon/28_aki/q12.html",
  "https://www.fe-siken.com/s/kakomon/21_haru/q13.html",
  "https://www.fe-siken.com/s/kakomon/16_haru/q23.html",
  "https://www.fe-siken.com/s/kakomon/15_haru/q26.html",
  "https://www.fe-siken.com/s/kakomon/22_aki/q15.html",
  "https://www.fe-siken.com/s/kakomon/19_haru/q32.html",
  "https://www.fe-siken.com/s/kakomon/17_haru/q24.html",
  "https://www.fe-siken.com/s/kakomon/22_haru/q34.html",
  "https://www.fe-siken.com/s/kakomon/21_aki/q17.html",
  "https://www.fe-siken.com/s/kakomon/26_haru/q14.html",
  "https://www.fe-siken.com/s/kakomon/25_haru/q16.html",
  "https://www.fe-siken.com/s/kakomon/20_aki/q33.html",
  "https://www.fe-siken.com/s/kakomon/25_aki/q9.html",
  "https://www.fe-siken.com/s/kakomon/23_toku/q19.html",
  "https://www.fe-siken.com/s/kakomon/30_haru/q15.html",
  "https://www.fe-siken.com/s/kakomon/29_haru/q12.html",
  "https://www.fe-siken.com/s/kakomon/29_haru/q13.html",
  "https://www.fe-siken.com/s/kakomon/25_aki/q16.html",
  "https://www.fe-siken.com/s/kakomon/19_aki/q32.html",
  "https://www.fe-siken.com/s/kakomon/27_haru/q16.html",
  "https://www.fe-siken.com/s/kakomon/20_haru/q34.html",
  "https://www.fe-siken.com/s/kakomon/27_aki/q14.html",
  "https://www.fe-siken.com/s/kakomon/25_aki/q14.html",
  "https://www.fe-siken.com/s/kakomon/20_aki/q34.html",
  "https://www.fe-siken.com/s/kakomon/16_aki/q38.html",
  "https://www.fe-siken.com/s/kakomon/07_menjo/q4.html",
  "https://www.fe-siken.com/s/kakomon/29_aki/q15.html",
  "https://www.fe-siken.com/s/kakomon/01_aki/q16.html",
  "https://www.fe-siken.com/s/kakomon/31_haru/q14.html",
  "https://www.fe-siken.com/s/kakomon/30_aki/q15.html",
  "https://www.fe-siken.com/s/kakomon/29_haru/q14.html",
  "https://www.fe-siken.com/s/kakomon/28_haru/q15.html",
  "https://www.fe-siken.com/s/kakomon/27_haru/q15.html",
  "https://www.fe-siken.com/s/kakomon/26_aki/q14.html",
  "https://www.fe-siken.com/s/kakomon/24_aki/q15.html",
  "https://www.fe-siken.com/s/kakomon/24_haru/q17.html",
  "https://www.fe-siken.com/s/kakomon/23_toku/q16.html",
  "https://www.fe-siken.com/s/kakomon/22_aki/q19.html",
  "https://www.fe-siken.com/s/kakomon/22_haru/q16.html",
  "https://www.fe-siken.com/s/kakomon/21_aki/q16.html",
  "https://www.fe-siken.com/s/kakomon/21_haru/q56.html",
  "https://www.fe-siken.com/s/kakomon/18_aki/q33.html",
  "https://www.fe-siken.com/s/kakomon/26_aki/q15.html",
  "https://www.fe-siken.com/s/kakomon/20_haru/q33.html",
  "https://www.fe-siken.com/s/kakomon/27_haru/q13.html"
];
let titleList = [
  "3層クライアントサーバシステム構成",
  "クライアントサーバシステム",
  "クライアントサーバシステムの特徴",
  "クライアントとサーバ間の通信負荷",
  "クライアントサーバシステムの特徴",
  "3層クライアントサーバシステムの特徴",
  "3層クライアントサーバシステム",
  "ストアドプロシジャーの利点",
  "ストアドプロシージャの利用",
  "Web サーバと外部プログラムの連携",
  "Web サーバで動作するプログラム",
  "Web アプリケーションサーバの機能",
  "アプリケーションサーバ",
  "フォールトトレラントシステム",
  "フールプルーフに該当するもの",
  "フォールトトレラントシステム",
  "フォールトトレラントシステムの説明",
  "フェールセーフの考え方",
  "フェールセーフについて",
  "フェールセーフ設計の考え方",
  "フェールソフトの例",
  "フェールセーフ",
  "密結合マルチプロセッサシステム",
  "マルチプロセッサ環境の OS",
  "デュアルシステムの説明",
  "デュアルシステムに関する記述",
  "並列処理システムの説明",
  "並列処理システム",
  "ホットスタンバイ形式によるクラスタ構成",
  "ホットスタンバイ方式に関する記述",
  "ホットサイトに関する記述",
  "バックアップサイト",
  "クラウドサービスへ移行",
  "クラウドコンピューティングの説明",
  "クラウドファンディングの説明",
  "SaaS を利用するときのセキュリティ管理",
  "SaaS の説明",
  "ホスティングサービスの特徴はどれか",
  "シンクライアントシステムの特徴",
  "ホットスタンバイ形式によるクラスタ構成",
  "クラスタリング",
  "グリッドコンピューティングの説明",
  "エッジコンピューティングの説明",
  "RAID の分類",
  "RAID5 の記録方式",
  "RAID1 の外部記憶装置",
  "データ入出力の高速化",
  "RAID1~5の各構成",
  "RAID",
  "RAID に関する記述",
  "NAS の構成図",
  "NAS の特徴",
  "NAS のデータ共有を実現する単位",
  "通信の応答時間",
  "トランザクションの平均処理時間",
  "スループットに関する記述",
  "仕事量を表す用語",
  "スループットの説明",
  "トランザクションの処理能力",
  "処理できる TPS の件数",
  "スケールアウトに関する記述",
  "スケールアウトが適しているシステム",
  "ベンチマークテストの説明",
  "ベンチマークテストの説明",
  "ベンチマークに関する説明",
  "システムの信頼性に関する記述",
  "RASIS を構成する五つの要素",
  "MTBF と MTTR に関する記述",
  "MTBF",
  "MTBF と MTTR",
  "MTBF の計算",
  "稼働率の改善",
  "装置を二つ直列に接続した稼働率",
  "稼働率の差",
  "稼働率を表す計算式",
  "回線の稼働率 説明文の例題",
  "システム全体の稼働率",
  "稼働率に関する記述",
  "稼働率が最も高いシステム構成",
  "通信回線の稼働率",
  "稼働率の計算",
  "稼働率",
  "稼働率の計算",
  "稼働率の計算",
  "稼働率",
  "稼働率の計算",
  "稼働率を測定するのに適切な時期",
  "稼働率が大きくなるもの",
  "故障面からのライフサイクル",
  "故障が発生する割合",
  "縮退運転になる場合"
];
let dataList = [
  "H28 秋 13",
  "H29 秋 26",
  "H21 秋 14",
  "H21 春 31",
  "H19 春 31",
  "H27 秋 13",
  "H22 春 14",
  "R02 免 25",
  "H27 春 27",
  "H30 春 35",
  "H24 春 09",
  "H18 秋 38",
  "H19 春 38",
  "H30 春 13",
  "H28 秋 46",
  "H25 秋 13",
  "H25 春 14",
  "R03 免 15",
  "H27 秋 56",
  "H26 春 15",
  "H23 秋 17",
  "H18 春 33",
  "H23 特 15",
  "H16 秋 33",
  "H31 春 13",
  "H29 秋 13",
  "H20 春 31",
  "H30 春 14",
  "H28 秋 14",
  "H21 秋 15",
  "H26 秋 13",
  "H19 秋 35",
  "H29 秋 14",
  "H24 春 15",
  "R01 秋 72",
  "H28 春 41",
  "H24 秋 63",
  "H29 春 63",
  "H23 秋 16",
  "H28 秋 14",
  "H15 春 37",
  "H20 秋 31",
  "R05 免 04",
  "R01 秋 15",
  "H29 秋 12",
  "H29 春 11",
  "H28 秋 12",
  "H21 春 13",
  "H16 春 23",
  "H15 春 26",
  "H22 秋 15",
  "H19 春 32",
  "H17 春 24",
  "H22 春 34",
  "H21 秋 17",
  "H26 春 14",
  "H25 春 16",
  "H20 秋 33",
  "H25 秋 09",
  "H23 特 19",
  "H30 春 15",
  "H29 春 12",
  "H29 春 13",
  "H25 秋 16",
  "H19 秋 32",
  "H27 春 16",
  "H20 春 34",
  "H27 秋 14",
  "H25 秋 14",
  "H20 秋 34",
  "H16 秋 38",
  "R07 免 04",
  "H29 秋 15",
  "R01 秋 16",
  "H31 春 14",
  "H30 秋 15",
  "H29 春 14",
  "H28 春 15",
  "H27 春 15",
  "H26 秋 14",
  "H24 秋 15",
  "H24 春 17",
  "H23 特 16",
  "H22 秋 19",
  "H22 春 16",
  "H21 秋 16",
  "H21 春 56",
  "H18 秋 33",
  "H26 秋 15",
  "H20 春 33",
  "H27 春 13"
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




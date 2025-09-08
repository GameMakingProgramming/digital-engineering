const titleV = document.getElementById("titleV3");
const data = document.getElementById("data3");
const left = document.getElementById("left3");
const right = document.getElementById("right3");
const start = document.getElementById("start3");
const numerator = document.getElementById("numerator3");
const denominator = document.getElementById("denominator3");

let URLlist = [
  "https://www.fe-siken.com/s/kakomon/27_aki/q1.html",
  "https://www.fe-siken.com/s/kakomon/30_haru/q1.html",
  "https://www.fe-siken.com/s/kakomon/29_aki/q1.html",
  "https://www.fe-siken.com/s/kakomon/24_aki/q1.html",
  "https://www.fe-siken.com/s/kakomon/01_aki/q30.html",
  "https://www.fe-siken.com/s/kakomon/24_haru/q34.html",
  "https://www.fe-siken.com/s/kakomon/21_haru/q36.html",
  "https://www.fe-siken.com/s/kakomon/25_aki/q33.html",
  "https://www.fe-siken.com/s/kakomon/29_aki/q35.html",
  "https://www.fe-siken.com/s/kakomon/31_haru/q32.html",
  "https://www.fe-siken.com/s/kakomon/26_aki/q34.html",
  "https://www.fe-siken.com/s/kakomon/28_haru/q34.html",
  "https://www.fe-siken.com/s/kakomon/25_haru/q9.html",
  "https://www.fe-siken.com/s/kakomon/22_aki/q9.html",
  "https://www.fe-siken.com/s/kakomon/19_aki/q19.html",
  "https://www.fe-siken.com/s/kakomon/25_aki/q9.html",
  "https://www.fe-siken.com/s/kakomon/19_aki/q21.html",
  "https://www.fe-siken.com/s/kakomon/26_haru/q10.html",
  "https://www.fe-siken.com/s/kakomon/23_aki/q11.html",
  "https://www.fe-siken.com/s/kakomon/14_haru/q24.html"
];
let titleList = [
  "10進数から2進数への変換",
  "2の補数と剰余",
  "2進数での10倍の操作",
  "算術シフトと減算",
  "回線利用率の計算",
  "データ転送時間の計算",
  "伝送時間の計算（伝送効率考慮）",
  "伝送にかかる時間の計算",
  "ネットワークアドレスの特定",
  "ホストアドレスの個数上限",
  "割り振ってはいけないIPアドレス",
  "ブロードキャストアドレスの特定",
  "平均命令実行時間",
  "コンピュータの性能（MIPS）",
  "CPUの平均命令実行数",
  "トランザクションの処理能力",
  "キャッシュメモリのヒット率",
  "実効アクセス時間とヒット率",
  "実効アクセス時間が短い順",
  "主記憶の実行アクセス時間"
];

let dataList = [
  "H27 秋 1",
  "H30 春 1",
  "H29 秋 1",
  "H24 秋 1",
  "H01 秋 30",
  "H24 春 34",
  "H21 春 36",
  "H25 秋 33",
  "H29 秋 35",
  "H31 春 32",
  "H26 秋 34",
  "H28 春 34",
  "H25 春 9",
  "H22 秋 9",
  "H19 秋 19",
  "H25 秋 9",
  "H19 秋 21",
  "H26 春 10",
  "H23 秋 11",
  "H14 春 24"
];


let number = 1;
denominator.textContent = titleList.length
titleV.textContent = titleList[number-1];
data.textContent = dataList[number-1];
start.setAttribute('href', URLlist[number-1]);

left.onclick = () =>{
    if (number > 1) {
        number--;
        numerator.textContent = number;
        titleV.textContent = titleList[number-1];
        data.textContent = dataList[number-1];
        start.setAttribute('href', URLlist[number-1]);
    }
}
right.onclick = () =>{
    if (number < denominator.textContent) {
        number++;
        numerator.textContent = number;
        titleV.textContent = titleList[number-1];
        data.textContent = dataList[number-1];
        start.setAttribute('href', URLlist[number-1]);
    }
}


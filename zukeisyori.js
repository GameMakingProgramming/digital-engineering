const titleV = document.getElementById("titleV3");
const data = document.getElementById("data3");
const left = document.getElementById("left3");
const right = document.getElementById("right3");
const start = document.getElementById("start3");
const numerator = document.getElementById("numerator3");
const denominator = document.getElementById("denominator3");

let URLlist = [
  "https://www.fe-siken.com/kakomon/21_aki/am1.html",
  "https://www.fe-siken.com/kakomon/21_aki/am2.html",
  "https://www.fe-siken.com/kakomon/21_aki/am3.html",
  "https://www.fe-siken.com/kakomon/21_aki/am4.html",
  "https://www.fe-siken.com/kakomon/23_haru/am5.html",
  "https://www.fe-siken.com/kakomon/23_haru/am6.html",
  "https://www.fe-siken.com/kakomon/23_haru/am7.html",
  "https://www.fe-siken.com/kakomon/23_haru/am8.html",
  "https://www.fe-siken.com/kakomon/24_haru/am9.html",
  "https://www.fe-siken.com/kakomon/24_haru/am10.html",
  "https://www.fe-siken.com/kakomon/24_haru/am11.html",
  "https://www.fe-siken.com/kakomon/24_haru/am12.html",
  "https://www.fe-siken.com/kakomon/20_haru/am13.html",
  "https://www.fe-siken.com/kakomon/20_haru/am14.html",
  "https://www.fe-siken.com/kakomon/20_haru/am15.html",
  "https://www.fe-siken.com/kakomon/20_haru/am16.html",
  "https://www.fe-siken.com/kakomon/26_haru/am17.html",
  "https://www.fe-siken.com/kakomon/26_haru/am18.html",
  "https://www.fe-siken.com/kakomon/26_haru/am19.html",
  "https://www.fe-siken.com/kakomon/26_haru/am20.html"
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



let number = 1;
denominator.textContent = titleList.length
titleV.textContent = titleList[number-1];
start.setAttribute('href', URLlist[number-1]);

left.onclick = () =>{
    if (number > 1) {
        number--;
        numerator.textContent = number;
        titleV.textContent = titleList[number-1];
        start.setAttribute('href', URLlist[number-1]);
    }
}
right.onclick = () =>{
    if (number < denominator.textContent) {
        number++;
        numerator.textContent = number;
        titleV.textContent = titleList[number-1];
        start.setAttribute('href', URLlist[number-1]);
    }
}


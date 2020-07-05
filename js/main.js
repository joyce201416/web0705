console.log("我是js")
// DOM文件物件模式
document.getElementById("box1").innerHTML = "哈囉";

// 變數 variable
// 用於儲存資料
// 資料類型
var a = 10;         //整數
var b = 1.5;        //浮貼數
var c = "文字";     // 字串
var d = true;      //布林值true 是,false 否

console.log(a);

//運算子 :  + - * / %(餘) ++(遞增1) --(遞減1)
// 程式內的 = 指定符號 (先演算右邊)
a = a+1;

console.log(a);

var e = 7;
e++;
console.log(e);

// ES6指數符號 **
var f = 5;
f = f**3;
console.log(f);

// 指定運算子
var numl = 10;
numl **=5;
console.log("指定運算子:"+numl);

// 自訂函式(方法)function,method
// 語法 : 函式 函式名稱(參數1,參數2,......){標示內容}
function functionA() {
    console.log("我是函式A");
}

// 呼叫執行
functionA();

function addTen(nuber) {
    nuber += 10;
    console.log("加十:" + nuber);
}

addTen(7);
addTen(100);

function mul(a,b){
    console.log("數字相乘的結果:" + (a * b));
}

mul(100,7)

// 物件 {物件資料名稱:物件資料值}
var car = {
    brand : "BMV",
    cc: 2000,
    color : "gold",
    drive: function() {
        console.log("開車中...");
    }
}

console.log("汽車的牌子" + car.brand);
car.drive();

// 練習事件
var box2 = document.getElementById("box2");

box2.onclick = () => {
    console.log("點擊!");
}

box2.onmouseenter = () => {
    console.log("滑入!");
}

box2.onmouseleave = () => {
    console.log("滑出!");
}

// 陣列 Array

var numberA = 10;
var numberB = 100;
var numberC = 40;

var numberObject = {
    A: 10,
    B: 100,
    C: 40
}

// 陣列資料
var numbers = [10,100,40,9]

numbers[0] = 999;

console.log("陣列第一筆資料:"+numbers[0])

console.log("陣列的數量:"+numbers.length)

// JS Comparison
// 比較運算子 > < >= <= == !==
var testA = 100;
var testB = 50;

console.log(testA != testB);

// == 與 === 之差異
var testC = 7;
var testD = "7";

console.log("== 的結果"+(testC == testD)); //比較值
console.log("=== 的結果"+(testC === testD)); //比較值與類型


// 邏輯運算子
var testE = true;

console.log("顛倒:" + !testE);

// 並且 &&
// 精準選擇器 1個false則false
console.log(true && true);    //t
console.log(true && false);   //f
console.log(false && true);   //f
console.log(false && false);  //f

// 或者||
//1個true則true
console.log(true || true);     //t
console.log(true || false);    //t
console.log(false || true);    //t
console.log(false || false);   //f

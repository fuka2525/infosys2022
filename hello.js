// alert("Hello,world");

// var username;
// username=prompt("あなたのおなまえは");
// alert("Hello, " + username);

// var num, sum;
// sum = 0;
// num = prompt("数値をいれてください。０にすると終了します");
// while (num != 0) {
//     sum = sum + parseInt(num);
//     num = sum + prompt("数値をいれてください。０にすると終了します");
// }
// alert("総和は" + sum);

var max, num;
max = 0
num = prompt("新しい数値をいれてください。０にすると終了します")
while(num != 0){
    it (parseInt(num) > max){
        max = num;
    }  
    num = prompt("新しい数値をいれてください。０にすると終了します")
}
alert("最大値は　" + max)
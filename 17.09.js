Array []
let tahaTeada = prompt ("Mis kuu")
let et = [10,12,15,13,15,11,22,31,17,21,10,19];
console.log(et)
console.log(et[tahaTeada-1])



let tahaTeada = prompt ("Mis kuu")
let et = [10,12,15,13,18,11,22,31,17,21,10,19];
let kuu = ["Jan", "Veb", "Mar", "Apr", "Mai", "Jun"];
console.log(kuu[0]+" tarbimine on "+et[tahaTeada-1]);








let tahaTeada = prompt ("Mis kuu")
let et = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(et)
console.log(et[tahaTeada]) 






// for
// while
for (let number = 1; number <=100; number ++) {
    console.log(number)
}

for (let x=1; x <=100; x++) {
    console.log(x)
}

let x=1;
while(x <= 100) {
    console.log(x);
    x++
}


let tööta=true;
while(tööta) {
    console.log(1);
    console.log(new Date().getMinutes())
    if(new Date().getMinutes() >= 27) {
        tööta = false;

    } 
    Sleep(10)
    }


const data = ["FWmcfgAWxe","KnFJXGcACq","cCYApSPiX0","iHwbq2giBx","X5Ebl6sjLf","Rxc2oFCgI4","jFtFONF7NK","b8iIhVOJl6","aGlxlytbic","30e8YSgLzd","0oj65bHiHZ","NtykZPC0DH","qgj6THRgT0","rFM7G7SJbB","lcu5UKrj7w","xurxryxn5u","7XDXFJ8Axh","RuQU6EeJyi","go3SD5CYYT","c8sOoXTa59","Vh0QfTkdKk","rrYBTg4sWc","CmeWiA73ig","iM8MD2IXle","SQk4WlTLiE","wn3JhYo93i","Hlh1Amt1jo","Rd6hiOekcE","LMKIBsBBmQ","nb72pL5LKQ","8GufbXPMRb","OO5OnLzsdP","hLddf4izXl","6x8suntNs6","8VATvVOQZR","jxL8zSOcZN","87YqnuB6Mc","sqr1WbVsWv","fLC17MbW59","tJ6Z5r6mDd","iiEffxACk7","C6w4k9AS2N","9rQTNM8xmG","x4JQLDr6hd","3bYXSm7Zgo","phTYCmMxOW","isl31Fd0SN","CZItvlfdqW"];
    for (let x = 1; x <=100; x++) {
        console.log(x)
    console.log(data);
    }

    const data = ["FWmcfgAWxe","KnFJXGcACq","cCYApSPiX0","iHwbq2giBx","X5Ebl6sjLf","Rxc2oFCgI4","jFtFONF7NK","b8iIhVOJl6","aGlxlytbic","30e8YSgLzd","0oj65bHiHZ","NtykZPC0DH","qgj6THRgT0","rFM7G7SJbB","lcu5UKrj7w","xurxryxn5u","7XDXFJ8Axh","RuQU6EeJyi","go3SD5CYYT","c8sOoXTa59","Vh0QfTkdKk","rrYBTg4sWc","CmeWiA73ig","iM8MD2IXle","SQk4WlTLiE","wn3JhYo93i","Hlh1Amt1jo","Rd6hiOekcE","LMKIBsBBmQ","nb72pL5LKQ","8GufbXPMRb","OO5OnLzsdP","hLddf4izXl","6x8suntNs6","8VATvVOQZR","jxL8zSOcZN","87YqnuB6Mc","sqr1WbVsWv","fLC17MbW59","tJ6Z5r6mDd","iiEffxACk7","C6w4k9AS2N","9rQTNM8xmG","x4JQLDr6hd","3bYXSm7Zgo","phTYCmMxOW","isl31Fd0SN","CZItvlfdqW"];
    for (x = 1; x < data.length; x++) {
        console.log(data[x])
    }

    countCode ()

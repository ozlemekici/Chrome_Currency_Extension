const currOne = document.getElementById("currency-one");
const amountOne = document.getElementById("amount-one");
const currTwo = document.getElementById("currency-two");
const amountTwo = document.getElementById("amount-two");
const convert = document.getElementById("conversion");
const swap = document.getElementById("swap");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
var url;

currencyConverter();


function currencyConverter() {

    url = "https://free.currconv.com/api/v7/convert?q=" + currOne.value + "_" + currTwo.value + "&compact=ultra&apiKey=ebd62323b86cd4739953"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let t = currOne.value + "_" + currTwo.value;
            let rateE = data[t];
            let ans = amountOne.value * rateE;
            var div = document.getElementById('amount-two');
            div.innerHTML = ans;

            // render-time
            let ans1 = amountOne.value * 300;
            var h = Math.floor(ans1 / 3600).toString().padStart(2, '0'),
                m = Math.floor(ans1 % 3600 / 60).toString().padStart(2, '0'),
                s = Math.floor(ans1 % 60).toString().padStart(2, '0');
            var div = document.getElementById('num1');
            div.innerHTML = h + ':' + m + ':' + s;
            let ans2 = amountOne.value * 600;
            var h = Math.floor(ans2 / 3600).toString().padStart(2, '0'),
                m = Math.floor(ans2 % 3600 / 60).toString().padStart(2, '0'),
                s = Math.floor(ans2 % 60).toString().padStart(2, '0');
            var div = document.getElementById('num2');
            div.innerHTML = h + ':' + m + ':' + s;
            let ans3 = amountOne.value * 900;
            var h = Math.floor(ans3 / 3600).toString().padStart(2, '0'),
                m = Math.floor(ans3 % 3600 / 60).toString().padStart(2, '0'),
                s = Math.floor(ans3 % 60).toString().padStart(2, '0');
            var div = document.getElementById('num3');
            div.innerHTML = h + ':' + m + ':' + s;

        }).catch(error => {
            console.log(error);
        })

}

swap.addEventListener("click", () => {
    const temp = currOne.value;
    currOne.value = currTwo.value;
    currTwo.value = temp;
})

convert.addEventListener("click", currencyConverter);


































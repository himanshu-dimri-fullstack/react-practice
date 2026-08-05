let num = 10;
let timer = setInterval(() => {
    num--;
    console.log(num)
    if (num <= 0) {
        clearInterval(timer);
    }
}, 1000)
// timer();
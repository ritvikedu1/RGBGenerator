// events
let btn = document.querySelector("#btn")
// btn.addEventListener("click", function () {
//     document.querySelector(".box").innerHTML = "I am Changed now";
// })

function RandColorGen() {
    let num1 = Math.ceil(Math.random() * 255)
    let num2 = Math.ceil(Math.random() * 255)
    let num3 = Math.ceil(Math.random() * 255)
    return `rgb(${num1}, ${num2}, ${num3})`
}

btn.addEventListener('click', function (param) {
    let bgColor = RandColorGen()
    let fontColor = RandColorGen()
    document.querySelector("#bgColor").innerHTML = bgColor
    document.querySelector("#fontColor").innerHTML = fontColor
    document.querySelector(".box").style.background = bgColor
    document.querySelector(".box").style.color = fontColor
    document.querySelector("#bgSpan").style.background = bgColor
    document.querySelector("#fontSpan").style.background = fontColor
})
// RandColorGen()
// setInterval(() => {
//     document.querySelector(".box").style.background = RandColorGen()
//     document.querySelector(".box").style.color = RandColorGen()
// }, 1000)
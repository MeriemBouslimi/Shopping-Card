let btns = document.querySelectorAll(".add")
let sum = document.getElementById("sum")
for (let btn of btns) {
    btn.addEventListener("click", function () {
        btn.nextElementSibling.innerHTML = Number(btn.nextElementSibling.innerHTML) + 1
        sum.innerHTML = Number(sum.innerHTML) + Number(btn.parentElement.parentElement.lastElementChild.innerHTML.slice(5))
    })
}
let bttns = Array.from(document.querySelectorAll(".sub"))

bttns.map(el => el.addEventListener("click", function () {
    if (el.previousElementSibling.innerHTML > 0 && Number(sum.innerHTML) > 0) {
        el.previousElementSibling.innerHTML = Number(el.previousElementSibling.innerHTML) - 1
        sum.innerHTML = Number(sum.innerHTML) - Number(el.parentElement.parentElement.lastElementChild.innerHTML.slice(5))
    }
}))

let trushs = document.querySelectorAll(".fa-times")

for (let trush of trushs) {
    trush.addEventListener("click", function () {
        trush.parentNode.remove();
        sum.innerHTML = Number(sum.innerHTML) - Number(el.parentElement.parentElement.lastElementChild.innerHTML.slice(5))
    })
}


// sum.addEventListener("click", function () {
//     // sum.innerHTML = p.innerHTML * Q.innerHTML
// })

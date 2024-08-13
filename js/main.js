let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")
function changeColor(){
    setTimeout(() => {
        card1.style = "background-color:red"
        card2.removeAttribute("style")
        card3.removeAttribute("style")
    },0)
    setTimeout(() => {
        card2.style = "background-color:yellow"
        card1.removeAttribute("style")
        card3.removeAttribute("style")
    },3000)
    setTimeout(() => {
        card3.style = "background-color:green"
        card2.removeAttribute("style")
        card1.removeAttribute("style")
    },6000)
}
changeColor()

setInterval(() => {
    console.log("Start interval");
    changeColor()
},9000)
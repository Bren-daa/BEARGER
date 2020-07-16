var counter = 0;
const decrement1 = document.querySelector(".remove1")
const increment1 = document.querySelector(".add1")
const decrement = document.querySelector(".remove")
const increment = document.querySelector(".add")
const decrement0 = document.querySelector(".remove0")
const increment0 = document.querySelector(".add0")


var result = document.querySelector(".result")
var result1 = document.querySelector(".result1")
var result0 = document.querySelector(".result0")


var price2 = document.querySelector(".price2")
var price1 = document.querySelector(".price1")
var price3 = document.querySelector(".price3")
var total = document.querySelector(".total")

increment.addEventListener("click", add)
decrement.addEventListener("click", remove)
increment1.addEventListener("click", add1)
decrement1.addEventListener("click", remove1)
increment0.addEventListener("click", add0)
decrement0.addEventListener("click", remove0)
var price = 5.5
var priceCh = 7.5
var priceCh1 = 3


function add() {   
    result.innerHTML++
    price1.innerHTML = price * result.innerHTML
    total.innerHTML = parseFloat(total.innerHTML) + parseFloat(price) 
}

function remove() {
    price1.innerHTML = price1.innerHTML - price
    result.innerHTML--
    total.innerHTML = parseFloat(total.innerHTML) - parseFloat(price) 
    
}

function add1() {   
    result1.innerHTML++
    price3.innerHTML = priceCh1 * result1.innerHTML
    total.innerHTML = parseFloat(total.innerHTML) + parseFloat(priceCh1)
}

function remove1() {
    price3.innerHTML = price3.innerHTML - priceCh1
    result1.innerHTML--
    total.innerHTML = parseFloat(total.innerHTML) - parseFloat(priceCh1)
}

function add0() {
    result0.innerHTML++
    price2.innerHTML = priceCh * result0.innerHTML
    total.innerHTML = parseFloat(total.innerHTML) + parseFloat(priceCh)
}

function remove0() {
    price2.innerHTML = price2.innerHTML - priceCh
    result0.innerHTML--
    total.innerHTML = total.innerHTML - priceCh
}


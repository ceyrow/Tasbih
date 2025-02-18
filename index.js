let tasbih = document.querySelector("#tasbih")
let buttonIncrement = document.querySelector("#btnIncrement")
let buttonReset = document.querySelector("#btnReset")

let value = 0
buttonIncrement.addEventListener("click", () =>{
    value++
    tasbih.innerHTML = value
})

// button 2aad ee reset
buttonReset.addEventListener("click", () =>{
 
    value=0
    tasbih.innerHTML = value
})

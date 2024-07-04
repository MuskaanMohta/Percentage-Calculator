let Z = document.getElementById("Z")
let result = document.getElementById("result")
let button = document.getElementById("button")
button.addEventListener("click",()=>{
    let x = parseFloat(document.getElementById("X").value)
    let y = parseFloat(document.getElementById("Y").value)
    if(!isNaN(x) && !isNaN(y)){
        Z.value = ((x*y)/100).toFixed(2)
        result.innerHTML = `${x} % of ${y} is ${Z.value}`
    }
    else{
        result.innerHTML = "Inputs cannot be empty!!"
    }
})
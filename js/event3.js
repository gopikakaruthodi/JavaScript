function sum(){
    let num1=parseInt(document.getElementById("fnum").value)
    let num2=parseInt(document.getElementById("lnum").value)

    document.getElementById("result").textContent=`Sum is = ${num1+num2}`
}
function difference(){
    let num1=parseInt(document.getElementById("fnum").value)
    let num2=parseInt(document.getElementById("lnum").value)

    document.getElementById("result").textContent=`Difference is = ${num1-num2}`
}
function product(){
    let num1=parseInt(document.getElementById("fnum").value)
    let num2=parseInt(document.getElementById("lnum").value)

    document.getElementById("result").textContent=`Product is = ${num1*num2}`
}
function quotient(){
    let num1=parseInt(document.getElementById("fnum").value)
    let num2=parseInt(document.getElementById("lnum").value)

    document.getElementById("result").textContent=`Quotient is = ${num1/num2}`
}
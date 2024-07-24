function sum(){
    let num1=parseInt(document.getElementById("fnum").value)
    let num2=parseInt(document.getElementById("lnum").value)

    document.getElementById("result").textContent=`Sum is = ${num1+num2}`

}
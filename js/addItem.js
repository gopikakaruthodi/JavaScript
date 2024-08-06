let str=""
function addItems(){
    let item=document.getElementById("txt").value
    str+=item+"<br>"
    document.getElementById("result").innerHTML=str
    document.getElementById('txt').value=""

}
function mulTable(){
    let str=""
    let num=parseInt(document.getElementById("num").value)
    for(i=1;i<=10;i++){
        str+=`<h4>${i}x${num}=${i*num}</h4>`
    }
    document.getElementById("new").innerHTML=str
}
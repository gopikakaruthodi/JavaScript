let i=1

function asd(){
    document.write("-*-")
    setTimeout(()=>{
        if(i<=10){
            asd()
            i++
        }

    },1000)

}

asd()
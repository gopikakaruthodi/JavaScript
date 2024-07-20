function route(time){
    if(time=="5-8"||time=="11-3"||time=="9-5"){
        alert ("best route is highway")
    }
    else if(time=="8-11" || time=="3-9"){
        alert ("best route is pipeline")
        
    }
    else{
        alert("invalid")
    }
    
}

time=prompt("root time")
route(time)
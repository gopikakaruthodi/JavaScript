// synchronous
// console.log("start");

// for(i=0;i<=10;i++){
//     console.log(i);
// }

// console.log("end");


// asynchronous

// console.log("start");

// setTimeout(()=>{
//     for(i=0;i<=10;i++){
//         console.log(i);
//     }
// },3000)

// console.log("end");

// repeat in an interval
// setInterval(()=>{
//     document.write("* ")
// },2000)

// stop in specific time

i=10

x=setInterval(()=>{
document.getElementById('new').textContent=i;    
if(i==0){
        document.write("end")
        clearInterval(x)
    }
    i--;
},1000)




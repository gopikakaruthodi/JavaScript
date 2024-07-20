mark=prompt("Enter your score");



if(mark<0 || mark>100)
    alert("Your Mark Is Invalid")



else if(mark>=90 ){
    alert("Your Grade Is - A+")
}
else if(mark>=80){
    alert("Your Grade Is - A")
}
else if(mark>=70){
    alert("Your Grade Is - B+")
}
else if(mark>=60){
    alert("Your Grade Is - B")
}
else if(mark>=50){
    alert("Your Grade Is - C+")
}
else if(mark>=40){
    alert("Your Grade Is - C")
}
else if(mark>=30){
    alert("Your Grade Is - D+")
}
else{
    alert("Failed")
}


function isLearYear(year){
    if(year % 4 == 0){
        if(year % 100 == 0 && year % 400 != 0){
            console.log(year +" is not Leap Year");
        }
        else{
            console.log(year +" is Leap Year");
        }
    }
    else{
        console.log(year +" is not Leap Year");
    }
}

isLearYear(2001);
var time = "10:15pm";
var bookPrice = 150;
var isWhiteColor = false;


// array

var partners = ["sajid",'mojid','nojid',"lajit"];
var elementCount = partners.length;
var nojidIndex = partners.indexOf("nojid");
partners.push("kajit");
partners.pop();

//condition

if(bookPrice < 100){
    console.log("i will buy this book");
}
else{
    console.log("Mama kichu discount den");
}

//loop

var i =0;
while(i<=17){
    console.log(i);
    i++;
}
for(
    var i=0; i<5;i++
){
    console.log(i);
}

//function

function isMonnUp(time)
{
    if(time>=19 && time <=5){
        return true;
    }
    return false;
    
}

var moonStatus = isMonnUp(10);



//let const

var price = 27;
price = 29;
price =32;
const myName = "Afridi";
// myName = " esjdj";
console.log(myName);


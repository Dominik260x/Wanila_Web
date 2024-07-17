//  Strict equality
//#18
//  = operator przypisania
//  == operator porównania
//  === ścisły operator równości
//  != operator nierówności
//  !== operator ścisłej nierówności
const PI = 3.14;

if(PI == "3.14"){
    console.log("To jest PI");
}
else{
    console.log("To nie jest PI");
}

if(PI === 3.14){
    console.log("To jest PI");
}
else{
    console.log("To nie jest PI");
}

if(PI != "3.14"){
    console.log("To nie jest PI");
}
else{
    console.log("To jest PI");
}

if(PI !== "3.14"){
    console.log("To nie jest PI");
}
else{
    console.log("To jest PI");
}
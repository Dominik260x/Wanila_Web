// while loop
//#19

let loggenIn = false;
let userName;
let password;

while(!loggenIn){
   userName = window.prompt(`Wprowadz imie użydkownika; `);
   password = window.prompt(`Wprowdza hasło użydkowniaka; `);

    if(userName === "D26" && password === "2602x"){
        loggenIn = true;
        console.log("Zalogowano");
    }
    else{
        console.log("Nie zalogowano");
    }
}
























//let userName = "";
//
//while(userName === "" || userName === null){
//    userName = window.prompt("Wprowadz imię: ");
//}
//
//console.log(`Witaj ${userName}`);
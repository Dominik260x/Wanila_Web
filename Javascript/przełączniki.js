// Switch
// #13

let wynik = window.prompt("Podaj wynik w procentach.")
let ocena;

switch(true){
    case wynik >= 100:
        ocena = "6";
        break;
    case wynik >= 85:
        ocena = "5";
        break;
    case wynik >= 74:
        ocena = "4";
        break;
    case wynik >= 60:
        ocena = "3";
        break;
    case wynik >= 50:
        ocena = "2";
        break;
    default:
        ocena = "1";
}
console.log(ocena)































//let day = 3;
//
//switch(day){
//    case 1:
//        console.log("Jest dzisiaj Poniedziałek");
//    case 2:
//        console.log("Jest dzisiaj Wtorek");
//    case 3:
//        console.log("Jest dzisiaj Środa");
//    case 4:
//        console.log("Jest dzisiaj Czwartek");
//    case 5:
//        console.log("Jest dzisiaj Piątek");
//    case 6:
//        console.log("Jest dzisiaj Sobota");
//    case 7:
//        console.log("Jest dzisiaj Niedziela");
//    default:
//        console.log(`${day} nie jest dzisiaj`);
//}

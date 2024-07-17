// map()
// #32

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDate);

console.log(formattedDates);

function formatDate(element) {
    const parts = element.split("-");  // split("-") usuwa - z dates
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}



















//const students = ["John", "Peter", "Mary", "George"];
//const studentsUpper = students.map(upperCase);
//const studentsLower = students.map(lowerCase);
//
//console.log(studentsLower);
//
//function upperCase(element){
//    return element.toUpperCase();
//}
//
//function lowerCase(element){
//    return element.toLowerCase();
//}
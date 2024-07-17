// closures
//#51

function createGame(){

    let score = 0;

    function incrementScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {
        incrementScore,
        decreaseScore,
        getScore
    }
}

const game = createGame();

game.incrementScore(20);
game.incrementScore(10);
game.decreaseScore(10);

console.log(game.getScore());


//function createCounter(){
//    let count = 0;
//
//    function increment(){
//        count++;
//        console.log(count);
//    }
//
//    function getCounter(){
//        return count;
//    }
//
//    return {
//        increment,
//        getCounter
//    }
//}
//
//const counter = createCounter();
//
//counter.increment();
//counter.increment();
//counter.increment();
//counter.increment();
//counter.increment();

//console.log(counter.getCounter());


//let count = 0;
//
//function increment() {
//    count++;
//    console.log(count);
//}
//
//increment();
//increment();
//increment();
//increment();
//increment();
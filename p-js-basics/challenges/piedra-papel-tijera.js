var computer = {
    1: "tijera",
    2: "papel",
    3: "piedra"
}

var user;

function ppt(user){
    var random = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    var computer = this.computer[random];
    
    return `User: ${user}    Computer: ${computer}    Result: ${comparer(user, computer)}`;
}

//Use only this function to enter values manually.
function comparer(user, computer){
    return (user == "tijera" && computer == "papel" || 
            user == "papel" && computer == "piedra" || 
            user == "piedra" && computer == "tijera") ? "Win!" : 
            (user == computer) ? "Tie!" : "Lose :(";
}
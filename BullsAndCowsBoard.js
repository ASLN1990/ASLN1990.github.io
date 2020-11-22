function keyPress(AvaiableSymbol) {
    SearchChar=String.fromCharCode(window.event.keyCode);
    if(AvaiableSymbol.indexOf(SearchChar.toUpperCase())<0)return false;
    };

var getNum = function (){
number = [];
while (number.length<4){
    let newNum = Math.floor (Math.random ()*10);
    if (number.indexOf(newNum)<0){
    number.push (newNum);
    }
}
    return number;
};

var goal = getNum ();
console.log (goal);


var guess = function (){
    let playersNumber = document.querySelector('#player').value;
    let arr = [];

    for (let i = 0; i<4; i++){
        let newUserArrElement = parseInt (playersNumber.substr(i,1));
        arr.push(newUserArrElement)
    }
    
    check (arr);
};

var check = function  (par){
let bulls = 0;
let cows = 0;
let turns = parseInt(document.querySelector('.turns').innerHTML);

for (let i = 0; i <4; i++){
    if (par[i]==goal[i]){
        bulls++;
    } else if (goal.indexOf(par[i])>=0){
        cows++;
    }
}

console.log (par);
console.log ('b' + bulls);
console.log ('c' + cows);


 turns --;
 document.querySelector('.turns').innerHTML = turns;

if (turns ==0 || bulls == 4){
    let status = ' проиграли!';
    if (bulls == 4) {
        status = ' выиграли!';
    }
    endGame (par, turns, status);
}

writeTurn(par, bulls, cows);

};

var writeTurn = function (par, bulls, cows){
    let table = document.querySelector('.turnsLog');
    let newLine = document.createElement('p');
    newLine.innerHTML = 'Попытка №'+(10-document.querySelector('.turns').innerHTML) + ':&nbsp;' + par +' быки: '+ bulls +'; коровы: '+ cows;
    table.appendChild(newLine);
};

var endGame = function (par, turns, status){
    document.querySelector('.number').innerHTML=goal;
    alert('Вы' + status + '\r\nЦелевое число: ' + goal);
};
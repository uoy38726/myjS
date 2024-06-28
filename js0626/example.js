let bingoNum = 99 

let guessNum = prompt("please input a number!")
let attempt = 1

while(guessNum != bingoNum&&attempt<3){
    attempt++
    guessNum = prompt("Wrong number! Try again!")
}
if(attempt<=3&&guessNum == bingoNum){
    alert(`congratuation! you try ${attempt} times to get right number!`)

}else{
    alert(`aww you don't guess right in three times, you lose`) 
}


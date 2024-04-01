let maximum=parseInt(prompt("enter the maximum no"));
while (!maximum)
{
    maximum=parseInt(prompt("try again"));
}
let hola=Math.random();
console.log(hola);
const targetNum=Math.floor((hola*maximum)+1);
console.log(targetNum);
 let guess= (prompt("enter your first guess"));
 let attempts=1;
 while(parseInt(guess)!==targetNum)
 {
    if(guess==='q')break;
    guess=parseInt(guess);
   

   if(guess>targetNum)
    {
    guess=prompt("The guess is too high. Please try again!!!"),
    attempts++; 
 }
 else if(guess<targetNum)
 {
    guess=prompt("The guess is too low. PLease try again!!!")
    attempts++; 
 }
 else{
    console.log("Invalid Value");
 }
}
if (guess==='q'){
    console.log("OK you quit!!!");
}
else{
    console.log(" you win!!!");
console.log(`Congrats it took you ${attempts} guesses`);
}

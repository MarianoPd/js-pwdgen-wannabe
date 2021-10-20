const firstname = prompt("Qual è il tuo nome ?");
const surname = prompt("E il tuo cognome ?");
const favouriteColor = prompt("Il tuo colore preferito ?");

const superRandomNumber = 21;

console.log(firstname);
console.log(surname);
console.log(favouriteColor);

let secretPassword = firstname + surname + favouriteColor + superRandomNumber;

let passwordLeight = secretPassword.length;

let outputS =
`
    <span>Your new password is:</span><br>
    <h1>${secretPassword}</h1>
    <span> Please use it carefully </span>
    <p>The leignt of your password is: ${passwordLeight}  WOOOW!!!</p>  

`
document.getElementById('output').innerHTML = outputS;

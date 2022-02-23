//Variables are separated for future use in case criteria needs to be changes.
let lowerCaseLetters = `abcdefghijklmnopqrstuvwxyz`;
let upperCaseLetters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
let num = `1234567890`;
let symbols = `!@#$%^&*_-+=`;
//For our purposes currently, this simplifies the need to feed in all variables above.
let characters = lowerCaseLetters + upperCaseLetters + num + symbols;

//Lines 10-20 are just prompts that appear in the window before the generate password button is pressed. This portion did not really need to return anything and I did not feel the need to call these lines back on another function so I did not house it within a function. I could have, and if I wanted to I could just change the wording in line 20 to be a full if statement that returns one thing or another depending on if the criteria is met and remember to invoke the function later on. 
  window.alert(`If you would like to generate a secure password, please note that we recommend that you opt to create one that is at least 8 characters long, and that it includes a symbol, both upper and lowercase letters, and at least one number.`)
  let length = Number(window.prompt(`Type how many characters you would like your password to be.`, ""));
  let includesLowerCase = confirm(`Would you like your password to include lowercase letters?`);
  let includesUpperCase = confirm(`Would you like your password to include uppercase letters?`);
  let includesSymbols = confirm(`Would you like your password to include symbols?`); 
  let includesNumbers = confirm(`Would you like your password to include numbers?`);
  //I chose to make this a while loop so that while this is the criteria this will loop. I considered using recursion here, but I think it would be unnecessary because it would not have made it faster in terms of bigO notation.
  while(length === isNaN || length < 8 || length > 128){
    alert(`Please make sure the length of your password is a number that has at least 8 characters and less than 128.`);
    //I used this way of making sure that the input was an actual number and not a string. 
    length = Number(window.prompt(`Type how many characters you would like your password to be.`, ""));
  }
  includesLowerCase && includesUpperCase && includesSymbols && includesNumbers ? alert(`All criteria have been met, please press the Generate Password button to continue.`) : alert(`Please make sure that you have met all the criteria before we continue.`)
//This function will actual perform the bulk of the work of generating a password that meets the criteria. The parameters length and characters have been declared in the previous lines of code above. The parameter length matches up to whatever the user inputs when prompted in line 19 witihin the while loop. The parameter Characters matches up to the variable declared above with the concated strings. I used the Math methods to generate a random password.  
function generatePassword (length, characters) {
  let password = '';
  for(let i = 0; i < length; i++){
    password+= characters.charAt(Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}
//This function adds the eventListener and will wait for the user to click the generate password button. Placeholder will now equal the value of the function generatePassword function with said arguments passed in. 
document.getElementById('generate').addEventListener('click', () => {
  document.getElementById("password").placeholder = generatePassword(length, characters);
})










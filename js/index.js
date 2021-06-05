//Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.
// let hacker1 = 'Juana';

//1.2 Print `"The driver's name is XXXX"`.
//  console.log(`The driver's name is ${hacker1}`)

//1.3 Create a variable `hacker2` with the navigator's name.
// let hacker2 = 'Pedro'
//1.4 Print `"The navigator's name is YYYY"`.
// console.log(`The navigator's name is ${hacker2}`)

//Iteration 2: Conditionals

// if (hacker1.length > hacker2.length) {
// 	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
// }else if (hacker2.length > hacker1.length) {
// 	console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
// }else{
// 	console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
// }

//Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

// let driverUpperCase = ''

// for (let i = 0; i < hacker1.length; i++ ){
// 	driverUpperCase +=  hacker1[i].toUpperCase() + ' ';
// }

// console.log(driverUpperCase.trim());

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
// let navigatorReverse = ''

// for (let i = hacker2.length -1; i >= 0; i-- ){
// 	navigatorReverse +=  hacker2[i];
// }

// console.log(navigatorReverse);

//3.3 Depending on the lexicographic order of the strings, print:

// hacker1 = hacker1.toUpperCase(0);
// hacker2 = hacker2.toUpperCase(0);

// let orderName = '';

// let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 
//  for (let i = 0; i < alphabet.length; i++ ){
// 	if( hacker2.[0] === alphabet.[i] && hacker1[0] === alphabet.[i] ){
// 			orderName= `What?! You both have the same name?`
// 	}else if( hacker2.[0] === alphabet.[i] && hacker1[0] !== alphabet.[i]){
// 		 orderName= `The driver's name goes first.`
// 	}else if( hacker1[0] === alphabet.[i] && hacker2[0] !== alphabet.[i]) {
// 		orderName = `Yo, the navigator goes first definitely.`
// 	}
// };

// console.log(orderName);

//---------------------------other solution 3.3-Class solution-------------------------------------
// let hacker1 = 'puana';
// let hacker2 = 'puana';

// let longestWord = ""
// if (hacker1.length >= hacker2.length) {
//   longestWord = hacker1
// } else {
//   longestWord = hacker2
// }

// // the loop runs for every character and compares them.
// for (let i = 0; i < longestWord.length; i++) {
//   if (hacker1 === hacker2) {
//     // first condition, in case they actually have the same name
//     console.log("What?! You both have the same name?")
//     break;
//   } else if (hacker1[i] < hacker2[i] || hacker1[i] === undefined) {
//     // second condition will check if the letter of the driver is lower (goes first) or doesn't exist.
//     console.log(`The driver ${hacker1} goes first.`);
//     break;
//   } else if (hacker2[i] < hacker1[i] || hacker2[i] === undefined) {
//     // third condition will check if the letter of the navigator is lower (goes first) or doesn't exist.
//     console.log(`Yo, the navigator ${hacker2} goes first definitely.`)
//     break;
//   }
//   // loop will continue running for each character until it found one match, then it breaks the loop.
// }

//-------------------------------Bonus 1---------------------------------------------------

//let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet est at justo tempor mollis. Aliquam consequat lacinia interdum. Fusce sodales dui a elit pulvinar ornare. Integer ullamcorper nunc vel finibus venenatis. Sed lectus velit, lacinia non posuere a, porta fringilla turpis. Cras sagittis erat malesuada risus posuere fringilla. Etiam vulputate dolor metus, in pharetra velit dictum non. Vivamus eu augue nec est tempus viverra. Phasellus eu augue volutpat, fermentum risus et, dapibus purus. Quisque vel augue mauris. Maecenas mattis ipsum sit amet metus dictum, quis pharetra enim cursus. Sed ac ullamcorper turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In consectetur diam ac turpis malesuada rutrum. Sed porta nulla id enim vulputate, eu tristique tortor cursus."

//------  121 words is the answer  --------

// let counter = 1; // starts at one because in the last word there is no space to count at the end.
// let counterEt = 0;

// for (let i = 0; i < text.length; i++) {
//  if(text[i + 1] === ' '){
// 	 counter += 1
//  }
// }
// console.log(counter)

// for (let i = 0; i < text.length; i++) {
//  if( text[i] === ' ' && text[i + 1] === 'e' && text[i + 2] === 't' && text[i + 3] === ','){
// 	 counterEt += 1
//  }else if(text[i] === ' ' && text[i + 1] === 'e' && text[i + 2] === 't' && text[i + 3] === '.'){
// 	 counterEt += 1
//  }else if(text[i] === ' ' && text[i + 1] === 'e' && text[i + 2] === 't' && text[i + 3] === ' '){
// 	 counterEt += 1
//  }
// }

// console.log(counterEt)

//-------------------------------Bonus 1----class solution-----------------------------------------------


// let ipsumStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet est at justo tempor mollis. Aliquam consequat lacinia interdum. Fusce sodales dui a elit pulvinar ornare. Integer ullamcorper nunc vel finibus venenatis. Sed lectus velit, lacinia non posuere a, porta fringilla turpis. Cras sagittis erat malesuada risus posuere fringilla. Etiam vulputate dolor metus, in pharetra velit dictum non. Vivamus eu augue nec est tempus viverra. Phasellus eu augue volutpat, fermentum risus et, dapibus purus. Quisque vel augue mauris. Maecenas mattis ipsum sit amet metus dictum, quis pharetra enim cursus. Sed ac ullamcorper turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In consectetur diam ac turpis malesuada rutrum. Sed porta nulla id enim vulputate, eu tristique tortor cursus."

// // to count all words

// let wordCount = 1;

// for (let i = 0; i < ipsumStr.length; i++) {
//   // counting the spaces means counting the words!
//   if (ipsumStr[i] === " ") {
//     wordCount++
//   }
// }

// console.log("Amount of words: " + wordCount)

// // to count only "et" words

// let etCount = 0;

// for (let i = 0; i < ipsumStr.length; i++) {
//   // counts if current letter is "e" and the next letter is "t"
//   if (ipsumStr[i] === "e" && ipsumStr[i + 1] === "t") {
//     etCount++
//   }
// }

// console.log("Amount of et: " + etCount)

//------------------------------------Bonus 2------------------

// let phraseToCheck = `Amor, Roma`;
// let clean = '';
// let rigthLeft = '';

// for (let i = 0; i < phraseToCheck.length; i++){
// 	if(phraseToCheck[i] > 'A' && phraseToCheck[i] < 'Z'){
// 		clean += phraseToCheck[i]
// 	}
// }

// clean = clean.toUpperCase(); // I shloud comvert all the words to UpperCase to avoid errors.

// for(let i = clean.length - 1; i >= 0; i--){
// 	rigthLeft += clean[i]
	
// 	for(let x = 0; x < clean.length; x++) {
// 			if(clean[x] === rigthLeft[x]){
// 				console.log(`this is a Palindrome.`)
// 				break;
// 		}else{
// 				console.log(`this is not a Palindrome.`)
// 				break;
// 		}
		
// 	}
// 	break;

// }

// console.log(phraseToCheck)

//----------------------class solution BONUS 2 --------------------

// let phraseToCheck = `Amor, Roma`

// // first we create a clean variable with all special characters removed.
// let cleanPhrase = ""
// for (let i = 0; i < phraseToCheck.length; i++) {
//   // only add characters between "A" and "z"
//   if ((phraseToCheck[i] >= 'A' && phraseToCheck[i] <= 'z')) {
//     cleanPhrase = cleanPhrase + phraseToCheck[i]
//   }
// }
// console.log("cleanPhrase", cleanPhrase)

// // then we reverse the phrases
// let reversedPhrase = ""

// // to do that, we do a reverse loop and add the characters to a new string
// for (let i = cleanPhrase.length - 1; i >= 0; i--) {
//   reversedPhrase = reversedPhrase + cleanPhrase[i]
// }

// console.log("reversedPhrase", reversedPhrase)

// // then simply compare the two variables to check for a palindrome!
// if (cleanPhrase === reversedPhrase) {
//   console.log("The phrase is a palindrome!")
// } else {
//   console.log("The phrase is not a palindrome")
// }
//homework 8
console.log("1.Գեներացնել պատահական 5 թիվ 0-10 տիրույթում այնպես, որ 0-5 տիրույթի թվերը կլորանան դեպի վերև, իսկ մյուսները դեպի ներքև և արտածելպատահական թիվն ու կլորացված թիվը:");
alert("1.");
let randomNumber;
let roundedNumber;
for(let i = 0; i < 5; i++){
    randomNumber = Math.random() * 10;
    if(randomNumber < 5){
        roundedNumber = Math.ceil(randomNumber);
        console.log(`random number ${randomNumber}, rounded number ${roundedNumber}`);
    }else{
        roundedNumber = Math.floor(randomNumber);
        console.log(`random number ${randomNumber}, rounded number ${roundedNumber}`);
    }
}



console.log("2.Գրել ֆունկցիա որը տրված բառի վերջին տառը կդարդձնի մեծատառ:");
alert("2.")
let word = prompt("enter the word");
function capitalizeLastLetter(word) {
    const index = word.length - 1;
    const lastIndex = word.charAt(index);
    const newWord = word.slice(0, index) + lastIndex.toUpperCase();
    return newWord;
}
console.log(capitalizeLastLetter(word));



console.log(`3.Գրել ֆ-ա որը մուտքագրված բառից կարտածի միայն զույգ ինդեքսով տառերը: Օրինակ՝ ինդեքս -ից կմնա իդք:`);
let word2 = prompt("enter the word");
function zuygIndex(word2) {
    let arrIndexOfWord2 = [];
    for(let i = 0; i < word2.length; i++){
        if(i % 2 == 0){
            arrIndexOfWord2.push(word2.charAt(i));
        }
    }
    return arrIndexOfWord2;
}
console.log(zuygIndex(word2));



console.log(`4.Գրել ծրագիր, որը կգեներացնի 5 նիշանոց կոդ տառերից և թվերից կազմված, և եթե այցելուն prompt պատուհանում ճիշտ հավաքի այդ կոդը և հաստատի, ապա alert անի ճիշտ է, այլապես alert անի "սխալ է":`);
let code = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i < 5; i++) {
  code += characters.charAt(Math.floor(Math.random() * characters.length));
}
const input = prompt(`Enter the code: ${code}`);
if (input === code) {
  alert('Correct');
} else {
  alert('Incorrect');
}



// console.log(`5.Ունենք 2 զանգված, գրել ծրագիր, որը կվերադարձնի 'Yes' եթե քիչ էլէմենտներով զանգվածը պարունակվում է մեծ զանգվածի մեջ և 'NO' հակառակ դեպքում: Օր. [9,9,8] և [8,9] վերադարձնում է 'YES'.`);
// function checkArrayContains(smallArray, largeArray) {
//     for (let i = 0; i <= largeArray.length - smallArray.length; i++) {
//       let isMatch = true;
//       for (let j = 0; j < smallArray.length; j++) {
//         if (smallArray[j] !== largeArray[i+j]) {
//           isMatch = false;
//           break;
//         }
//       }
//       if (isMatch) {
//         return "Yes";
//       }
//     }
//     return "No";
//   }
//   const arr1 = [9, 9, 8];
//   const arr2 = [8, 9];
//   console.log(checkArrayContains(arr2, arr1)); 
  
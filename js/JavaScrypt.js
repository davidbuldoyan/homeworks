//homewor 7
// console.log("1. Ունենք զանգված կազմված բացասական, դրական թվերից և 0-ից: Գրել ծրագիր, որը կվերադասավորի մեծից փոքր նվազող թվեր ունեցող զանգված:");
// alert("1.");
// function arrSort(){
// let arr = [];
// let length = +prompt("enter arr length");
// for(let i = 0; i < length; i++){
//     arr[i] = +prompt(`enter ${i + 1} member of array`);
// }
// for(let j = 0; j < arr.length - 1; j++){
//     if(arr[j] < arr[j + 1]){
//         arr[j] = arr.splice(j + 1, 1, arr[j])[0];
//         j = -1;
//         }
//     }
//     return arr;
// }
// console.log(arrSort());



// console.log(" 2. Գրել ծրագիր, որը զանգվածից կընտրի որևէ անդամ, պատահական սկզբունքով:");
// alert("2.");
// let arr = [];
// let lengthOfArr = +prompt("enter arr length");
// for(let i = 0; i < lengthOfArr; i++){
//     arr[i] = +prompt(`enter ${i + 1} member of array`);
// }
// function arrRandomElement (array) {
// let random = Math.floor(Math.random() * arr.lengthOfArr);
// return random;
// }
// console.log(arrRandomElement(arr));



// console.log(" 3. Գրել ծրագիր, որը թույլ կտա մուտքագրել 10 տարբեր արժեքներ, արժեքներից ստանալ 2 զանգված, որոնցից առաջինում կլինեն այն արժեքները, որոնք միաժամանակ և դրական են և զույգ, երկրորդում կլինեն այն արժեքները, որոնք առանք 7-ի բազմապատիկ են:");
// alert("3.");
// let arr10 = [];
// let arrZuygDrakan = [];
// let arrArnc7 = [];
// for(let i = 0; i < 10; i++){
//     arr10[i] = +prompt(`enter ${i + 1} member of arr`);
//     if(arr10[i] > 0 && arr10[i] % 2 == 0){
//         arrZuygDrakan.push(arr10[i]);
//     }else if(arr10[i] % 7 != 0){
//         arrArnc7.push(arr10[i]);
//     }
// }
// console.log("zuyg ev drakan" ,arrZuygDrakan);
// console.log("aranc 7-i bazmapatik" ,arrArnc7);
 



// console.log("4. Գրել ծրագիր, որը ավելացնում է 2-րդ զանգվածը առաջինի մեջ ուղիղ մեջտեղից:");
// alert("4.");
// let arrUser = [];
// const arrMutq = [10, 20, 30, 40, 50];
// let arrTemp = [];
// let length = +prompt("enter array length");
// for(let i = 0; i < length; i++ ){
//     arrUser[i] = +prompt(`enter ${i + 1} member of array`);
// }
// let arrLength = Math.floor(arrUser.length / 2);
// for(let j = 0; j < arrLength; j++){
//     arrTemp[j] = arrUser.shift(j);
// } 
// for(let k = 0; k < arrMutq.length; k++){
//     arrTemp.push(arrMutq[k]);
// }
// for(let x = 0; x < arrUser.length; x++){
//     arrTemp.push(arrUser[x]);
// }
// console.log("new array" ,arrTemp);



// console.log("5.Գրել ծրագիր, որը տրված զանգվածի ամեն մի էլեմենտից կստանա նոր զանգված, որի էլեմենտների գումարը հավասար է տրված թվին: Օր. [4,10,9] զանգվածից կստանա [[4,4],[5,5],[4,5]] զանգվածը:");
// alert("5.");
// let arrExp = [4, 10, 9];
// let arrNewTemp = [];
// for(let i = 0; i < 3; i++){
//     arrNewTemp[i] = [];
//     if(arrExp[i] % 2 == 0){
//         for(let j = 0; j < 2; j++){
//         arrNewTemp[i][j] = arrExp[i] / 2; 
//         }
//     }else {
//         for(let j = 0; j < 2; j++){
//             arrNewTemp[i][j] = Math.floor(arrExp[i] / 2) + j; 
//             }
//     }
// }
// console.log(arrNewTemp);



console.log("6. Օգտագործելով ռեկուրսիա, տպել (a,b) միջակայքի բոլոր զույգ թվերը հետադարձ կարգով:");
function getFibonachi(n)
{
    
 if (n == 0){
 return 0;
 }
 if (n == 1) {
 return 1;
 }else {
 return getFibonachi(n - 1) + getFibonachi(n - 2);
 }
}
var result = getFibonachi(8); //21
console.log(result);
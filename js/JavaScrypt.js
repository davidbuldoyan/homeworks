//homework 9
console.log(`1.Ստեղծել Car կոնստրուկտոր ֆ-ա, որը ունի name, year, color, maxSpeed, ստեղծել bmw, mersedes օբյեկտները Car -ից:`);

function Car(name, year, color, maxSpeed) {
    this.name = name;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
}

 const bmw = new Car("i8", 2014, "black", 250);
 const mersedes = new Car("w223", 2013, "black", 250);

 console.log(bmw);
 console.log(mersedes);



 console.log(`2.Ստեղծել մեթոդ String-ի համար: Այն ցանկացած բառի առաջին 2 տառը դարձնում է մեծատառ:`);

 function StringMethof(word) {
    this.word = word;
    this.letterUpperCase = () => {
        let word2 = word.split("");
        let letter = word2[0].toUpperCase();
        let letter2 = word2[1].toUpperCase();
        return (letter + letter2 + word.slice(2));
    };
 }
const word = new StringMethof("hello");
console.log(word.letterUpperCase());



console.log(`3.Գրել ծրագիր, որը կարտածի մինչև հունվարի 1 քանի օր է մնացել:`);
const today = new Date();
const nextYear = new Date(today.getFullYear() + 1, 0, 1);
const timeDiff = nextYear.getTime() - today.getTime();
const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

console.log(`hunvari 1-in mnacel e ${daysLeft} or`);



console.log(`4.Գրել ծրագիր, որը մուտքում կստանա տարի և ամիսների քանակ, ու կվերադարձնի քանի ամիս է մնացել կամ անցել տարեմուտից:`);
function monthsPassedOrRemaining(year, month) {
    const nowDays = new Date();
    const target = new Date(year, month - 1, 1);
    const months = (target.getFullYear() - nowDays.getFullYear()) * 12 + target.getMonth() - nowDays.getMonth();
    if(months < 0){
        return `ancel e ${Math.abs(months)} amis ${year} taruc`;
    }else if(months > 0){   
        return `mnacel e ${months} amis ${year} tarun`;
    }else{
        return `hima ays ${year} tarin ev ${month} amisn e`;
    }
}
  
  console.log(monthsPassedOrRemaining(2000, 6));
  
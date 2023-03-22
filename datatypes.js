/*Create datatypes.js file and use the JavaScript typeof operator to check different data types.
 Check the data type of each variable*/

 let a = "fly";
 console.log(typeof(a));

 let b = 26;
 console.log(typeof(b));

 let c = true;
 console.log(typeof(c));

 let d = "True";
 console.log(typeof(d));

 let e = []
 console.log(typeof(e))

 //Declare four variables without assigning values

 let p;
 console.log(p);
 let o;
 console.log(o);
 let s;
 console.log(s);
 let f;
 console.log(f);

 //Declare four variables with assigned values
 let word = "Singing";
 console.log(word);
 let num = 45;
 console.log(num);
 let h = "true";
 console.log(h);
 let state = "Atlanta";
 console.log(state);

 /*Declare variables to store your first name, last name, marital status, 
 country and age in multiple lines*/
 let firstName = "Luckiesha";
 console.log(firstName)
 let lastName = "Gitonga";
 console.log(lastName)
 let maritalStatus = "Single";
 console.log(maritalStatus)
 let country = "Kenya";
 console.log(country)
 let age = 25;
 console.log(age);

 /*Declare variables to store your first name, last name, marital status, 
 country and age in a single line */
 let statement = ("Luckiesha", "Gitonga", "Single", "Kenya", 25);
 console.log(statement);

 /*Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

I am 25 years old.
You are 30 years old. */

let myAge = 25;
let yourAge = 30;
console.log(`I am "${myAge}" years old.`);
console.log(`You are "${yourAge}" years old.`);

//READ ON
//read on datatypes
//Do not compare arrays, functions, or objects
//Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

//DAY TWO
//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
//Print the length of the string on the browser console using console.log()
//Change all the string characters to capital letters using toUpperCase() method
//Change all the string characters to lowercase letters using toLowerCase() method
//Cut (slice) out the first word of the string using substr() or substring() method
//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
//Check if the string contains a word Script using includes() method
let challenge = "30 Days Of JavaScript"
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(2));
console.log(challenge.substr(0,3));
console.log(challenge.includes("Script"));
//Split the string into an array using split() method
console.log(challenge.split(' '));
//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(', '));
//QUESTION, DIFFERENCE BETWEEN SPLIT WITH A COMA AND ONE WITHOUT
//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let words = ("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon");
console.log(words.split());
//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'));
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));
//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'))
//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));
//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phrase = ("You cannot end a sentence with because because because is a conjunction");
console.log(phrase.indexOf('because'));
//You cannot end a sentence with because because because is a conjunction'
//use lastIndexOf
let sentence = ("You cannot end a sentence with because because because is a conjunction");
console.log(sentence.lastIndexOf('because'));
//Use search to find the position of the first occurrence of the word because in the following sentence
console.log(sentence.search('because'));
//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim());
//trim removes whitwspace from the string, here it removed spaces at the begining and end.
//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("30"));
//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'));
//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'));
console.log(challenge.match(/a/g));
console.log(challenge.match(/a/g).length);
//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let v = ("30 Days of");
let k = ("JavaScript");
console.log(v.concat(k));
//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

let sentences = "There is no better exercise for the heart than reaching down and lifting people up."
console.log(sentences);
let charity = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(charity)

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let l = '10'
let q = 10
let n = l == q
console.log(n)

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
// any number in a quote is a string

let one = ('9.8');
let none = parseInt(one);
console.log(none);
let two = 10
let three = (one == two);
console.log(three);
let four = (two == none)
console.log(four);
//SHOW ME HOW

//Check if 'on' is found in both python and jargon

let y = "Python"
let  g = "Jargon"
console.log(y.includes("on"));
console.log(g.includes("on"));

//Generate a random number between 0 and 100 inclusively.

//Generate a random number between 50 and 100 inclusively.

//Generate a random number between 0 and 255 inclusively.

//Access the 'JavaScript' string characters using a random number.

//Use console.log() and escape characters to print the following pattern.

//1 1 1 1 1
//2 1 2 4 8
//3 1 3 9 27
//4 1 4 16 64
//5 1 5 25 125

//Use substr to slice out the phrase because because because from the following sentence
//'You cannot end a sentence with because because because is a conjunction.'
let story3 = ('You cannot end a sentence with because because because is a conjunction.');
let story4 = (story3.match(/because/g)|| []).length;
console.log(story4);

//'Love is the best thing in this world. Some found their love and some are still looking for their love.
//Count the number of word love in this sentence.
let story = ('Love is the best thing in this world. Some found their love and some are still looking for their love.');
let story2 = (story.match(/love/g)|| []).length;
console.log(story2)

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence1 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let sentence2 = (sentence1.trim())
//FINISH THIS


//DAY THREE
//EXERCISE 1
let firstNames = "Lucky"
console.log(typeof(firstNames));
let lastNames = "Joseph"
console.log(typeof(lastNames));
let countries = "New Zealand"
console.log(typeof(countries));
let city = "Auckland"
console.log(typeof(city));
let ages = 25
console.log(typeof(ages));
let isMarried = "Single"
console.log(typeof(isMarried));

//check if "10" is equal to 10
let zz = "10";
let zzz = 10;
let cc = (zz == zzz);
console.log(cc);

//Boolean value is either true or false.
//Write three JavaScript statement which provide truthy value.
let cat = "animal";
let dog = "animal";
console.log(cat == dog);

//Write three JavaScript statement which provide falsy value.
let math = 24
let add = 34
let addition = (math >= add);
console.log(addition);

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
 let ff  = 4 > 3
 console.log(ff)
 let oo = 4 >= 3
 console.log(oo)
 let gg = 4 < 3
 console.log(gg)
 let hh = 4 <= 3
 console.log(hh)
 let jj = 4 == 4
 console.log(jj)
 let bb = 4 === 4
 console.log(bb)
 let ll = 4 != 4
 console.log(ll)
 let xx = 4 !== 4
 console.log(xx)
 let zj = 4 != '4'
 console.log(zj)
 let rr = 4 == '4'
 console.log(rr)
 let nn = 4 === '4'
 console.log(nn)

 //Find the length of python and jargon and make a falsy comparison statement.
 //There is no 'on' in both dragon and python
 let sing = "Python"
 let dance = "jargon"
 let wording = "on"
  if(sing.includes(wording)){
    console.log(wording +"there is on in both python and dragon")
    
  }else if(dance.includes(wording)){
    console.log(wording +"There is on in both python and dragon")

  }else{
    console.log(wording +"There is no 'on' in both dragon and python")
  }
 console.log(sing.length);
 console.log(dance.length);
 let act = sing > dance;
 console.log(act);

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
 let va = 4 > 3 && 10 < 12
 console.log(va)
 let ve = 4 > 3 && 10 > 12
 console.log(ve)
 let vi = 4 > 3 || 10 < 12
 console.log(vi)
 let vo = 4 > 3 || 10 > 12
 console.log(vo)
 let vu = !(4 > 3)
 console.log(vu)
 let ba = !(4 < 3)
 console.log(ba)
 let be = !(false)
 console.log(be)
 let bi = !(4 > 3 && 10 < 12)
 console.log(bi)
 let bo = !(4 > 3 && 10 > 12)
 console.log(bo)
 let bu = !(4 === '4')
 console.log(bu)

 //Use the Date object to do the following activities
 //What is the year today?
 //What is the month today as a number?
 //What is the date today?
 //What is the day today as a number?
 //What is the hours now?
 //What is the minutes now?
 let newYear = new Date();
 console.log(newYear.getFullYear());
 console.log(newYear.getMonth());
 console.log(newYear.getDate());
 console.log(newYear.getHours());
 console.log(newYear.getMinutes());

 //If the length of your name is greater than 7 say, your name is long else say your name is short.
 //Compare your first name length and your family name length and you should get this output.
  //Your first name, Asabeneh is longer than your family name, Yetayeh
let myName = "Lakesha Wangari"
let famName = "Gitonga"
  if(myName > 7){
    console.log("Your name is long")

  }else{
    console.log("Your name is short")
  }

   let compare = (myName != famName)
   console.log("Your first name, Lakesha Wanagri is longer than your family name Gitonga")

   //Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
   //let myAge = 250
   //let yourAge = 25
   //I am 225 years older than you.

   let myAges = 250
   let yourAges = 25
   let comparison = (myAges >= yourAges)
   console.log("I am 225 years older than you")








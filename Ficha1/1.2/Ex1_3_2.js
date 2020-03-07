function multiplica(a, b) {
    return a * b
}
console.log(multiplica(1, 2))

/*2 */
function stringA(arr) {

    var lgth = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            var lgth = arr[i].length;
            longest = arr[i];
        }
    }
    return longest
}

let fruits = ['Apple', 'Banana', 'ananassssss']
console.log(stringA(fruits))
/* 3 */

function isUpperCase(str) {

    return str.charAt(0).toUpperCase() + str.slice(1);
}

let str = 'bbb'
console.log(isUpperCase(str))

/*4 */
function findMustPopulated(arr1) {
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = i; j < arr1.length; j++) {
            if (arr1[i] == arr1[j])
                m++;
            if (mf < m) {
                mf = m;
                item = arr1[i];
            }
        }
        m = 0;
    }
    return item
}
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(findMustPopulated(arr1));
/* 5 validate email */

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
var mail = 'marcelo@estg.pt'
var mail2 = 'marceloestg.pt'
console.log("test if " + mail + " is valid ..." + validateEmail(mail))
console.log("test if " + mail + " is valid ..." + validateEmail(mail2))
/*6 */
function pad_with_zeroes(number) {

    var my_string = '' + number;
    try {
        if (my_string.length < 9) {
            while (my_string.length < 9) {
                my_string = '0' + my_string;
            }
            return my_string;
        }
    } catch (e) {
        console.log(e.message);
        //alert('Catch is ignored, because there are no errors'); 
    }

}
console.log(pad_with_zeroes(222211))


/*7  prime numbers*/
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}
var testPrime = 2
console.log("test if number: " + testPrime + " is primer..." + isPrime(testPrime))
/*8 Euros to cents function 
duvida*/
function euroTocents(value) {
    var coins = [];
    while (value > 0) {
        if (value >= 200) {
            coins.push(2);
            value -= 200;
        } else if (value >= 100) {
            coins.push(1);
            value -= 100;
        } else if (value >= 50) {
            coins.push(5);
            value -= 100;
        } else if (value >= 20) {
            coins.push(2);
            value -= 20;
        } else if (value >= 10) {
            coins.push(.1);
            value -= 10;
        } else if (value >= 5) {
            coins.push(.05);
            value -= 5;
        } else if (value >= 2) {
            coins.push(.02);
            value -= 2;
        } else if (value >= 1) {
            coins.push(.01);
            value -= 1;
        }
    }

    return coins;
}
var euro = 923
console.log(euro + "centimos sao : " + euroTocents(euro) + " moedas")
/*9 check palindrome */
function palindrome(str) {
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

    var lowRegStr = str.toLowerCase().replace(re, '');
    // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
    // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
    // var lowRegStr = "amanaplanacanalpanama";

    // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
    var reverseStr = lowRegStr.split('').reverse().join('');
    // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
    // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
    // And, var reverseStr = "amanaplanacanalpanama";

    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
}

var palidromeStr = "A man, a plan, a canal. Panama"
console.log("verificar se a string:> " + palidromeStr + " < é palindrome..." + palindrome(palidromeStr))

/*10 get days between two dates */
//test how to get current date... output ->> 2020-03-07T16:49:18.239Z
let corrent = new Date()
console.log(corrent)
/*function getDayFromDate(date2) {
    // JavaScript program to illustrate  
    // calculation of no. of days between two date  
    // To set two dates to two variables 
    var date1 = new Date() 
    // To calculate the time difference of two dates 
    var Difference_In_Time = date1.getTime() - date2.getTime();
    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    //To display the final no. of days (result) 
    console.log("Total number of days between dates "
        + date1 + " and "
        + date2 + " is:  "
        + Difference_In_Days);
}*/
function numberMonthDays(d) {

    var day = new Date(d.getFullYear(), d.getMonth(), 0);
    return day.getDate();

}

var d = new Date(2020, 2, 24)
console.log("numero de dias do mes " + d.getMonth() + " tem: " + numberMonthDays(d));



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
function findMustPopulated(arr1){
    var mf = 1;
    var m = 0;
    var item;
    for (var i=0; i<arr1.length; i++)
    {
            for (var j=i; j<arr1.length; j++)
            {
                    if (arr1[i] == arr1[j])
                     m++;
                    if (mf<m)
                    {
                      mf=m; 
                      item = arr1[i];
                    }
            }
            m=0;
    }
return item
}
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(findMustPopulated(arr1)) ;
/* 5 validate email */

function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
var mail = 'marcelo@estgpt'
var mail2 = 'marceloestg.pt'
console.log(validateEmail(mail))
console.log(validateEmail(mail2))
/*6 */
function pad_with_zeroes(number ) {

    var my_string = '' + number;
   try {
    if(my_string.length<9){
        while (my_string.length < 9) {
            my_string = '0' + my_string;
        }   
        return my_string;
    }
   } catch (error) {
    alert('Catch is ignored, because there are no errors'); 
   }
   
}
    

console.log(pad_with_zeroes(2222222211))


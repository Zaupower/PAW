//1.4.1
// for each com objeto
/** 
    const myObject = {a: 1, b: 2, c: 3};
    for (const property in myObject) {
        console.log("myObject: "+property);
    }
// for each com array const
    myArray = [1,2,3];
    for (const property in myArray) {
            console.log("myArray: "+property); }
        
           
//1.4.2
//for each com objetos
    //ideias -> resultado array com [Circular] dentro}
        var b = []
        var c = []
        b.push('banana')
        b.push('apple')
        c.push('caju')
        c.push('almond')
        console.log(b)
        c.push(b)
        b.push(c)

        console.log(b)
    const object = {a: 1, b: 2, c: 3};
    for (const property in object) {
        console.log("Propriedade: "+property+" Objeto:"+
        object[property]);
    }
//for each com array
        const array = [1,2,3];
    for (const property in array) {
         console.log(""+property+" "+array[property+""]);
    }
*/
//1.4.3
// for of com arrays 
//nao funciona pois nao é ..of object1... mas sim in
//mais explicaçao
//--(for in) loops over enumerable property names of an object.
//--(for of) (new in ES6) does use an object-specific iterator 
//--and loops over the values generated by that.
//for of ignora indexação inixistente

//const object1 = {a: 1, b: 2, c: 3};
//for (const element of object1) { 
// console.log("object elemnt: "+element);
//}

//for of com arrays
const array1 = ['a', 'b', 'c']
for (const elemnt of array1){
    console.log("array elemnt: "+elemnt)
}

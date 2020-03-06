function soma(a,b){
    return a+b
   }
   console.log(soma(1,2))
   console.log(soma(1,1))
   console.log(soma(2,2))

   function concat(a,b){
       if(a == undefined && b == undefined ){
            return 0
       }else if(a == undefined && b != undefined){
            return b
       }else if(a != undefined && b == undefined){
            return a
       }else if(a != undefined && b != undefined){
        console.log(a+b) 
       }else{
        console.log("two variable undifined")  
       }
   }

   console.log(concat("Hello ","World"))
   console.log(concat(""))
   console.log(concat())

   function odd_demo2(a,b){
    if ( a == undefined && b == undefined){
        console.log("two variable undifined") 
        }else if(a == undefined && b != undefined ){
                console.log(b)   
        }else if(a != undefined && b == undefined ){
            console.log(a )
        }else{
            console.log(a+" "+b)
        }
   }

   odd_demo2(1)
   odd_demo2("hello", 3)
   odd_demo2()
   function element(index){
    var arr =[1,2,3]
    
       if(index <= arr.length && index>= 0){
        return arr[index]
       }else{
           console.log("array out of bounderies")
       }  
   }
   console.log(element(-1));


   function sample(c){
    console.log("sample")
}
sample()

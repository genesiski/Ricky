

function lineal (input,num){
 
    
   
    for(let i = 0 ; i <= input.length; i++ ){

        
        if(num === input[i] ){
      
            return true

        }
    
    }

    return false


}
const num = 10
const input = [0, -1,0, 7 ,2 ,-6 ,9]
console.log(lineal(input,num));
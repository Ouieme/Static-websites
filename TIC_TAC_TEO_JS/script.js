let turn = "X";
let titel = document.querySelector(".titel");
let titel1 = document.querySelector(".titel1");
let cases = [];
var scoreX=0;
var scoreO=0;




function end(num1,num2,num3){


  
    titel.innerHTML= `${cases[num1]} Won !  `


    cases[num1] = document.getElementById('item'+num1)

    if(cases[num1].innerHTML==="X"){
        scoreX+=1
        // sessionStorage.setItem('cléX', 'scoreX');
        
    }
    else if(cases[num1].innerHTML==="O"){
        scoreO+=1
        // sessionStorage.setItem('cléO', 'scoreO');
        
    }
    else{
      scoreO=0
      scoreX=0
    }
   
    

    // let data =sessionStorage.getItem('cléX')
    titel1.innerHTML=`X = ${scoreX}      Vs      O = ${scoreO}`

    document.getElementById('item'+num1 ).style.backgroundColor="green"
    document.getElementById('item'+num2 ).style.backgroundColor="green"
    document.getElementById('item'+num3 ).style.backgroundColor="green"

   

    setInterval(function(){titel.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000);

    

  

}



// function disponible(){
//     cases.forEach(element => {
//        if (element.innerHTML === ""){
//           return  cases.indexOf(element) ;
        
// }});
// }




function winner(){

    for(let i=1 ; i<10 ; i++){

        cases[i] = document.getElementById('item'+ i).innerHTML;
    }

    if( cases[1] == cases[2] && cases[2] == cases[3] && cases[1] != "" ){
            end(1,2,3)
           
           return true          
    }
    else if( cases[4] == cases[5] && cases[5] == cases[6] && cases[4] != ""){
            end(4,5,6)
           
            return true
    }
    else if( cases[7] == cases[8] && cases[8] == cases[9] && cases[7] != ""){
            end(7,8,9)
            
            return true
    }
   
    else if(cases[1] == cases[4] && cases[4] == cases[7] && cases[1] != ""){
            end(1,4,7)
         
            return true
    }

    else if(cases[2] == cases[5] && cases[5] == cases[8] && cases[8] != ""){
            end(2,5,8)
          
            return true
           
    }
    else if(cases[3] == cases[6] && cases[6] == cases[9] && cases[9] != ""){
            end(3,6,9)
            
            return true
    }
    else if(cases[3] == cases[5] && cases[5] == cases[7] && cases[7] != ""){
        end(3,5,7)
      
        return true
    }
    else if(cases[1] == cases[5] && cases[5] == cases[9] && cases[9] != ""){
    end(1,5,9)
  
     return true
    }

    else{
      return false;
    }
}



function game(id){

    var element = document.getElementById(id);
    if(turn === "X" && element.innerHTML === ""){
        element.innerHTML="X";
        turn = "O"
        titel.innerHTML = "O turn"

        
        
    }

    

    var element = document.getElementById(id).removeAttribute("onclick");
     if(turn === "O"   ){
      
       if(item1.innerHTML=="" && turn=="O" ){
           item1.innerHTML="O";
            
            turn="X"
       }

       
      else if(item9.innerHTML=="" && turn=="O") {
        item9.innerHTML="O";
        turn="X"
      }

      
      else if(item5.innerHTML=="" && turn=="O") {
        item5.innerHTML="O";
        turn="X"
      }
 

      else if(item3.innerHTML=="" && turn=="O") {
       item3.innerHTML="O";
       turn="X"
     }

     
     else if(item8.innerHTML=="" && turn=="O") {
        item8.innerHTML="O";
        turn="X"
      }

      
      else if(item6.innerHTML=="" && turn=="O") {
        item6.innerHTML="O";
        turn="X"
      }

      
      else if(item2.innerHTML=="" && turn=="O") {
        item2.innerHTML="O";
        turn="X"
      }

      
      else if(item4.innerHTML=="" && turn=="O") {
        item4.innerHTML="O";
        turn="X"
      }
      
      else if(item7.innerHTML=="" && turn=="O") {
        item7.innerHTML="O";
        turn="X"
      }
        // turn = "X"
        titel.innerHTML = "X turn"

        
        
    }
  
    winner()
    
    }






  











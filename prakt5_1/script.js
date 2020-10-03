function plus(){   
    rezultat.value = znah_1.value-(-1)*znah_2.value;
}

function minus(){   
    rezultat.value = znah_1.value-znah_2.value;
}
function umn(){   
    rezultat.value = znah_1.value*znah_2.value;
}
function del(){   
    rezultat.value = znah_1.value/znah_2.value;
}

function sqrt(){
    
    if((znah_1.value != 0) && (znah_2.value != 0)){  
               
      rezultat.value = "Введіть лише одне число";
        
    }  

    else if (znah_1.value != 0){
        
     let x = Math.sqrt(znah_1.value);
     rezultat.value = x;        
        
    }
    
    else if (znah_2.value != 0){
        
     let x = Math.sqrt(znah_2.value);
     rezultat.value = x;        
        
    }  
    
}
    
function ClearText(){
    
     znah_1.value = "";
     znah_2.value = "";
     rezultat.value = "";
    
    
}    
            
        
    




    

      


function plosha(){
    
    
    r1.value = a1.value*a1.value;
    f1.value="S=a2";
    
    
}

function perimetr(){
    
    
    r1.value = 4*a1.value;
    f1.value="S=4a";
    
    
}

function diagonal(){
    
    r1.value= a1.value*Math.sqrt(2);
    f1.value="d=a√2";
    
}

function radius1(){
    
    r1.value= a1.value/2;
    f1.value="r=a/2";
    
}

function radius2(){
    
    r1.value= a1.value*(Math.sqrt(2)/2);
    f1.value="R=a(√2/2)";
    
}

function clearText(){
    
    
    a1.value="";
    r1.value="";
    f1.value="";
    
}

function clearText2(){
    
    
    a2.value="";
    b2.value="";
    c2.value="";
    r2.value="";
    f2.value="";
    
}

function trperimetr(){
    
    
    if(a2.value != 0 && b2.value != 0 && c2.value != 0){
       
        var p = Number(a2.value) + Number(b2.value) + Number(c2.value);  
        r2.value= p/2;         
        
       
       }
    
    else{
        
        r2.value = "Введіть усі три сторони";
        
    }
    
    f2.value="p=(a+b+c)/2"; 
    

    
    
}

function trplosha(){
    
    
    if(a2.value != 0 && b2.value != 0 && c2.value != 0){
       
        var p1 = Number(a2.value) + Number(b2.value) + Number(c2.value);
        var p2 = p1/2;
        
        r2.value= Math.sqrt(p2*(p2-a2.value)*(p2-b2.value)*(p2-c2.value));
                
        
       
       }
    
    else{
        
        r2.value = "Введіть усі три сторони";
        
    }
    f2.value="p=(a+b+c)/2 , S=√(p(p − a)(p − b)(p − c)";
    

    
    
}



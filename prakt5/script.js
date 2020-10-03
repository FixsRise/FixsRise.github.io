function perevirka(tests){
    
    
    let i = 0;
    
    if(tests.one[1].checked){i++;}
    if(tests.two[0].checked){i++;}
    if(tests.three[2].checked){i++;}
    if(tests.four[3].checked){i++;}
    if(tests.five[4].checked){i++;}
    
    
    if((tests.six[0].checked) && (tests.six[1].checked) && (tests.six[2].checked)) {i++;}
    if((tests.six[0].checked) && (tests.six[1].checked) && (tests.six[2].checked ) && (tests.six[3].checked )) {i--;}    
    
    
    if((tests.seven[1].checked) && (tests.seven[2].checked )){i++;}
    if((tests.seven[1].checked) && (tests.seven[2].checked ) && (tests.seven[0].checked )) {i--;}
    
    document.tests.druk.value=i;
    
    
}

function showMessage() {
  
 let t1 = document.tests.data1.value;   

 document.tests.data.value=t1;
}
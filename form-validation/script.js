// to display error message
function printError(elemId,hintMsg){
    document.getElementById(elemId).innerHTML=hintMsg;
}

// form validation
function validateForm(){
    var name=document.contactForm.name.value;
    var email=document.contactForm.email.value;
    var mobile=document.contactForm.email.value;
    var country=document.contactForm.email.value;
    var gender=document.contactForm.email.value;
    var hobbies[];
    var checkboxes=document.getElementsByName("hobbies[]");


    for(var i=0 ; i<checkboxes.length ; i++){
        if(checkboxes[i].checked){
            hobbies.push(checkboxes[i].value);
        }
    }

    var nameErr=emailErr=mobileErr=countryErr=genderErr=true;



    //name validation
    if(name==""){
        printError("nameErr","Please Enter your name");
    }else{
        var regex=/^[a-zA-Z\s]+$/;
        if(regex.test(name)==false){
            printError("nameErr","please enter a valid name");
        }else{
            printError("nameErr","");
            nameErr=false;
        }


    }

    // email validation
    if(email==""){
        printError("emailErr","Please Enter email, It is mandatory");
    }else{
        var regex=/^\S+@\S+\.\S+$/;
        if(regex.test(email)===false){
            printError("emailErr","please enter a valid email id");
        }else{
            printError("emailErr","");
            emailErr=false;
        }

    }

    //mobile number validation
    if(mobile==""){
        printError("mobileErr","Please Enter mobile number, It is mandatory");
    }else{
        var regex=/^[0-9]\d{10}$/;
        if(regex.test(mobile)===false){
            printError("mobileErr","please enter a valid mobile number id");
        }else{
            printError("mobileErr","");
            mobileErr=false;
        }

    }

    // country select validation
    if(country=="select"){
        printError("countryErr","Please select your country");
    }else{
         printError("countryErr","");
            countryErr=false;
        }
    

    // gender select validation
    if(gender==""){
        printError("genderErr","Please select your gender");
       }else{
         printError("genderErr","");
            genderErr=false;
        
     }
      if((nameErr || emailErr|| mobileErr || countryErr || genderErr)==true){
        return false;
       }else{
        var preview="you have entered the following details : \n";
        "Full Name : "+name +"\n"+
        "Email Id : " +email+"\n"+
        "Mobile Number : "+mobile+
        "Country : " +country+
        "Gender :"+gender;
        if(hobbies.length){
            preview+="Hobbies : "+hobbies.join(",");
        }
        alert(preview);
    }
}







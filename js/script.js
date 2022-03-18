
var date_regex =  /^(0?[1-9]|[12][0-9]|3[01])[\/\.](0?[1-9]|1[012])[\/\.]\d{4}$/;

function validateDate(){
    let dateInput = document.getElementById('date').value;
    if(dateInput == null || dateInput ==''){
        alert("Please Fill the Required Field");
        return false; 

    }
    
        if (date_regex.test(dateInput)) {
            document.getElementById("message").innerHTML = "Date follows dd/mm/yyyy format";
            //js function that gets the time from your device
        var date1 = new Date(dateInput); 
        var currentAge = ~~((Date.now() - date1) / (31557600000));

        if(currentAge > 18){
            alert("You are an adult");
            return true;
        }else{
            alert("Sorry kiddo! You are underage");
            return false;
        }

        }
        else{
                document.getElementById("message").innerHTML = "Invalid date format";
            } 
    }  
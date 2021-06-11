function validateForm(event) {
    //Gather the HTML form-control elements into a collection so that we don't have to create a variable for each one.

    let controls = document.getElementsByClassName("form-control"); //get all elements with form-control class
    console.log(controls);

    let validationMessages = document.getElementsByClassName("invalid");

    //Regular expression (regex) for email:
    let rxpEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);  //email format--@ symbol, upper and lower cases, a few symbols, and a .co/.com/.net/etc at the end

    //Regex for name
    let rxpName = new RegExp(/^[a-zA-Z]+$/); //looking for letters

    //Check the length of the text in all of the controls to ensure that there is at least one character in each field. If there isn't, stop the submission and fire a validation error to the page.
    if (controls['name'].value.length == 0 || controls['email'].value.length == 0 || controls['subject'].value.length == 0 || controls['message'].value.length == 0 || !rxpEmail.test(controls['email'].value) || !rxpName.test(controls['name'].value)) {
        //on the rxpEmail, the exclamation is making it a bool so if it's not true then that's what we're catching
        event.preventDefault(); //this is saying whatever was normally going to happen on submit button, don't do that (like submit info to server, etc.)

        //Check individual controls and display a specific error message for each validation error.
        //Name validation:
        if (controls['name'].value.length == 0) {
            validationMessages['rfvName'].textContent = "Name is required";
        }//end if
        else {
            validationMessages['rfvName'].textContent = "";
        }//end else
        if (!rxpName.test(controls['name'].value) && controls['name'].value.length > 0) {
            validationMessages['rfvName'].textContent = "Please enter only letters";
        }//end if
        if (rxpName.test(controls['name'].value) && controls['name'].value.length > 0) {
            validationMessages['rfvName'].textContent = "";
        }//end if

        //Email validation:
        if (controls['email'].value.length == 0) {
            validationMessages['rfvEmail'].textContent = "Email address is required";
        }//end if
        else {
            validationMessages['rfvEmail'].textContent = "";
        }//end else
        if (!rxpName.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "Please make sure your email is entered as youremail@youremail.com";
        }//end if
        if (rxpName.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "";
        }//end if

        //Message Validation
        if (controls['message'].value.length == 0) {
            validationMessages['rfvMessage'].textContent = "This field is required. Talk to us! :)";
        }//end if
        else {
            validationMessages['rfvMessage'].textContent = "";
        }//end else

    }//end outer if
}//end function validateForm(event)
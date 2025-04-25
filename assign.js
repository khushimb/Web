function onClick(a, b){
    alert("Hello World " + a + b);
}

function submitForm(){
    let name = document.formName.nameName.value;
    let email = document.formName.emailName.value;
    let age = document.formName.ageName.value;
    let gender = document.formName.genderName.value;
    let country = document.formName.countryName.value;

    alert("Name: " + name);
    alert("Email: " + email);
    alert("Age: " + age);
    alert("Gender: " + gender);
    alert("Country: " + country);
    alert("Form submitted");
    
    return false; 
}
function form()
{
let name=document.forms["myForm"] ["Name"].value;
validate=/^[A-Z a-z]+$/;
let age=document.forms["myForm"]["age"].value;
ageValidate=/^[0-9]+$/;
let gender=document.forms["myForm"]["gender"].value;

if (name=="")
{
    alert("Name field should not be empty");
}

if(name.length<=5)
{
    alert("Name should be greater than 5 characters");
}

if(!validate.test(name))
{
    alert("Only alphabets were accepted");
}

if(age=="")
{
    alert("Age must be filled");
}

if(age<=15 || age>=120)
{
    alert("Age between 15 and 120 accepted");
}

if(!ageValidate.test(age))
{
    alert("Age should not be in characters")
}

if(gender=="")
{
    alert("Select either Male or Female")
}
}
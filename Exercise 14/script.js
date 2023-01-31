function onMouse()
{
    let text=document.getElementById("inputText");
    
    let textEntered=document.getElementById("mouseOver")
    .innerHTML="Entered text is:"+text.value;

    let removeText=document.getElementById("mouseOver");
    removeText.remove();

    alert(textEntered);
}

function formDetails()
{
    let UName=document.getElementById("user").value;
    let pwd=document.getElementById("pass").value;

    if(UName=="" || pwd=="")
    {
        alert("Enter all the details to continue");
    }
}
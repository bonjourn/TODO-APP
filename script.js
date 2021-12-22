function validate(redirect)
{
    let user=document.getElementById("floatingInput").value;
    let pswd=document.getElementById("floatingPassword").value;
    let login=false;
    
    if(user=="admin" && pswd==12345){
            
        login=true;
        redirect();    
    }
    
    else
    {
        alert("incorrect");
    }        
}       
function redirect()
{
    window.location="home.html";
}
  
validate(redirect);        



function getcookiebyname(Cookie)
{
    var newCookie=document.cookie;
var cookieParts = newCookie.split(";");

for(var cookiePar of cookieParts)
{
   
    if(Cookie==cookiePar.split("=")[0])
    {
        return cookiePar.split("=")[1];
    }
}

}
function getcookieslist()
{
    
    var cookieParts = document.cookie.split(";");
    
    var cookiess=[];
    for(var cookiePar of cookieParts)
    {
       
        cookiess[cookiePar.split("=")[0]]=cookiePar.split("=")[1];
        
    }
    return cookiess;
}
function deletecookie(cookiename)
{

    var newDate = new Date();
    newDate.setTime(newDate.getTime() - 86400000);
    document.cookie = cookiename+"=;expires="+ newDate.toUTCString();
    
}

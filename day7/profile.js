
var genderr=getcookiebyname(" gender");
var user=getcookiebyname(" usrnm");
var count=getcookiebyname(" counter");
var color=getcookiebyname(" color");
if(color==undefined)
{
    color=getcookiebyname("color");;
}
if(genderr==undefined)
{
    genderr=getcookiebyname("gender");
}
if(user==undefined)
{
    user=getcookiebyname("usrnm");
}
if(genderr)
{
    
    if(genderr=='female')
    {
        document.images[0].src="Cookie/2.jpg";
    }
    else
    {
        document.images[0].src="Cookie/1.jpg";
    }
}
if(count==undefined)
{
    count=1;
    setCookie("counter", count,3);
}
else
{
count++;
setCookie("counter", count,3);
}
document.getElementById("demo").style.color=color;
document.getElementById("demo").innerHTML="Welcome "+user+" you visited this page "+getcookiebyname(" counter")+" times ;)";
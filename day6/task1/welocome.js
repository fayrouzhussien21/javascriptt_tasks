
var win;
var url;
var str
function openn()
{
var x="";
//str=window.location.href
if(navigator.userAgent.includes("Chrome"))
{
     x+="using chrome !";
}
else{
    x+="not using chrome ";
}
  str=getQueryParams(window.location.href);
  document.getElementById("nname").innerHTML="Hello " +str["usrnm"];
  document.getElementById("title").innerHTML="your title is " +str["title"];
  document.getElementById("gender").innerHTML="you are  " +str["gender"];
  document.getElementById("address").innerHTML="your address is " +str["address"];
  document.getElementById("email").innerHTML="your email is " +str["email"];
  document.getElementById("mobile").innerHTML="your mobile number is " +str["mobilenumber"];
  document.getElementById("test").innerHTML ="navigator product:" + x ;
 
 
}
function getQueryParams(url) {

const paramArr = url.slice(url.indexOf('?') + 1).split('&');
const param=[];
for(var i of paramArr)
{
    param[i.split('=')[0]]=i.split('=')[1];
}

console.log(param);
return param;
}

openn();


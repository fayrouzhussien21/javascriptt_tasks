var tid;
var flag=0;
var flag2=0;
//image1
var im=document.images[0];
const cssObj = window.getComputedStyle(im, null);
var leftcount=cssObj.left;
leftcount=parseInt(leftcount);
//image2
var im2=document.images[1];
const cssObj2 = window.getComputedStyle(im2, null);
var rightcount=cssObj2.left;
rightcount=parseInt(rightcount);
//imge3
var im3=document.images[2];
const cssObj3 = window.getComputedStyle(im3, null);
var topcount=cssObj3.top;
topcount=parseInt(topcount);
///
var x=document.getElementById("container").innerHTML;
document.getElementById("demo").textContent=x;



function changeplay()
{
tid= setInterval(function()
{

if(flag==0)
{
    leftcount++;
    rightcount--;
    topcount--;
    if(leftcount>=310)
    {
        flag=1;
    }
}
else
{
    leftcount--;
    rightcount++;
    topcount++;
    if(leftcount<=0)
    {
        flag=0;
    }
    
}
im.style.left=leftcount+"px";
im2.style.left=rightcount+"px";
im3.style.top=topcount+"px";
var x=document.getElementById("container").innerHTML;
document.getElementById("demo").textContent=x;
},0);

}
function play()
{


if(document.getElementById("start").innerHTML=="Start")
{
    document.getElementById("start").innerHTML="Stop";
    changeplay();
}
else{
    document.getElementById("start").innerHTML="Start";
    clearTimeout(tid);
}

}
function restart()
{
    im.style.left="0px";
    im2.style.left="0px";
    im3.style.top="315px";
    clearTimeout(tid);
    if(document.getElementById("start").innerHTML=="Start")
{
    document.getElementById("start").innerHTML="Stop";
    
}
else{
    document.getElementById("start").innerHTML="Start";
}
}
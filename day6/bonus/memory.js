var o=0;
var x = [];
var flag=true;
var f=0;
var arr=["memoryGame/1.gif","memoryGame/2.gif","memoryGame/3.gif","memoryGame/4.gif","memoryGame/5.gif","memoryGame/6.gif","memoryGame/1.gif","memoryGame/2.gif","memoryGame/3.gif","memoryGame/4.gif","memoryGame/5.gif","memoryGame/6.gif"]
function shuffle(array) {
let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}


function changecurrent(img)
{


if (!flag) return;
img.style.opacity = "1";
if (x.length == 0) {
    x[0] = img;
} else if (x.length == 1) {
    x[1] = img;

}

if (x.length == 2) {
    flag = false;
     setTimeout(function () {
        if (x[0].src != x[1].src) {
            x[0].style.opacity = "0";
            x[1].style.opacity = "0";
        
        } 
        else{
            o++;
            if(o>=6)
            {
                document.getElementById("warning").style.color="green";
                document.getElementById("warning").innerHTML="Congratulations!";
                setTimeout(function(){
    
                document.getElementById("warning").innerHTML="";
                document.getElementById("warning").style.color="red";
                 for(u=0;u<12;u++)
                    {
                        
                        
                        document.images[u].style.opacity=0;

                    }
                
                 },2000);
o=0;
f=0;
            }
        }
        x = [];
        flag = true;
    }, 700);

 }


}



function display()
{
var u=0;
if(f==0)
{
arr=shuffle(arr);
for(u=0;u<12;u++)
{

document.images[u].src=arr[u];
document.images[u].style.opacity=1;

}
setTimeout(
function()
{   
for(u=0;u<12;u++)
{

document.images[u].style.opacity=0;

}

},1000)


}
else
{
document.getElementById("warning").innerHTML="Sorry you only have 1 trial :("
setTimeout(function(){
    
    document.getElementById("warning").innerHTML="";
},2000);


}
f++;

}

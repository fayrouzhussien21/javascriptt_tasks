var i=0;
var tid;
var arr=["slideshow/1.jpg","slideshow/2.jpg","slideshow/3.jpg","slideshow/4.jpg","slideshow/5.jpg","slideshow/6.jpg"]
function next()
{

document.images[0].src=arr[++i%6];
}
function stop()
{
  clearInterval(tid);
}
function show()
{
tid=setInterval(function(){ 
    document.images[0].src=arr[++i%6];
},300)
}
function previous()
{
 i=(--i+6)%6;
document.images[0].src=arr[i];
}
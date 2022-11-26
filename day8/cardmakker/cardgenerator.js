function loadcard()
{
  var test=document.querySelector('input[name=cards]:checked').value;
  var m=document.getElementById("Message").value;
  console.log("kkk");
  var win=window.document.open("card.html","","width=450,height=490");
  
  setTimeout(function (){
    const butt = document.createElement("button");
    const node = document.createTextNode("close this page");
    butt.appendChild(node);
    win.document.images[0].src=test;
    win.document.getElementById("messagee").innerHTML=m;
    win.document.getElementsByTagName("span")[0].appendChild(butt);
    butt.addEventListener("click", function(){
win.close();
});
  },500);
    
  

  
}

    



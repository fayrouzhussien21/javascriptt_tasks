function setCookie(cname, cvalue,exp) {
      const d = new Date();
      d.setTime(d.getTime() + (exp*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires ;
    }
function set()
{
    
    var val=document.getElementsByName("usrnm")[0].value;
    setCookie("usrnm", val,3);
    
    val=document.getElementsByName("age")[0].value;
    setCookie("age", val,3);
    
     val=document.querySelector('input[name=gender]:checked').value;
    setCookie("gender", val,3);

    
     var e=document.getElementById("color");
     val=e.options[e.selectedIndex].text;
    
    setCookie("color", val,3);
    window.open("profile.html","","width=400 , hight=400");

}

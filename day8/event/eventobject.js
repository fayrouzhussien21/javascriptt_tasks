            const noContext = document.getElementById('noContextMenu');

            noContext.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            alert("the context menue is diabled ")
            });

            const nosubmit = document.getElementById('subm');
    
        nosubmit.addEventListener('submit', (e) => {
    
            const c=confirm("do you want to submit ?");
            
            if(!c)
            {
                e.preventDefault();
                alert("failed ");
            }
            else
            {
                alert("the form is submited succesfuly");
            }

            });
            
    
    

            
        function warningBefore(e)
        {
                var conf=confirm("are you sure you want to submit ?");
                if(conf)
                {
                    alert("submited successfully !");
                }
                else
                {
                e.preventDefault();
                alert("failed");
                }
        }
        function showChar(e)
        {
            if(e.altKey )
            {
                alert("you entered alt key and the asci code is : " +e.keyCode);
            }
            else if(e.ctrlKey)
            {
                alert("you entered ctrl key and the asci code is : "+e.keyCode);
            }
            else if(e.shiftKey)
            {
                alert("you entered shift key and the asci code is : "+ e.keyCode);
            }
            else
            {
                alert("asci code is : "+ e.keyCode);
            }
            
        }
        var myEvent= new Event('timeout');
        nosubmit.addEventListener("timeout",function(){
            
            window.document.body.innerHTML="";
            alert("timeout");
            
        });
        setTimeout(function()
        {
            nosubmit.dispatchEvent(myEvent)
            
        },3000);
        
var tid1;
var tid2;
var flag=true;
var i=1;
function startAnimation()
{                    

        tid1= setInterval(function(){
              
            console.log(i);

            if (i<4)
            {
                document.getElementsByClassName("img")[i].src="marbels/marble3.jpg";
                document.getElementsByClassName("img")[Math.abs(i-1)%5].src="marbels/marble1.jpg";
                i++;
            }   
            else 
                {
                    i=0;
                    
                }

            if(i==0){
            document.getElementsByClassName("img")[3].src="marbels/marble1.jpg";


            }
                    
            
     },300);
        


}

function returnImg(img){
    
    clearInterval(tid1);
    

    
}
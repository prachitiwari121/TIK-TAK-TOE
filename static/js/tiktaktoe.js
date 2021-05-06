var count1=1;
var count2=1;
var m = "O";

 

 
//  Tik Tak Toe function , For assigning values either "O" or "X" as the user clicks each TD in TR of table.
 
function tiktok(myobj){
  if(myobj.innerText== ""){

    myobj.innerText = m;

    m=="O"?m="X":m="O";
      if(m=="O") {
        count1=count1+1;
      }
      if(m=="X") {                                      
        count2=count2+1;
      }
      if(count1>3){
        check();
      }
      if(count2>3){
        check();
      }

  }
}



































// Check function , check after 3 "0" or 3 "X", wheather they lie in continuation of each row, each column and the diagonals.


function check (){
  let winner = null
  if ($("#1")[0].innerText =="O" && $("#2")[0].innerText == "O" && $("#3")[0].innerText == "O"||$("#1")[0].innerText == "X" && $("#2")[0].innerText == "X" && $("#3")[0].innerText == "X" )
  {
    winner = $("#1")[0].innerText
  }
  if ($("#4")[0].innerText =="O" && $("#5")[0].innerText == "O" && $("#6")[0].innerText == "O"||$("#4")[0].innerText == "X" && $("#5")[0].innerText == "X" && $("#6")[0].innerText == "X" )
  {
    winner = $("#4")[0].innerText
  }
  if ($("#7")[0].innerText =="O" && $("#8")[0].innerText == "O" && $("#9")[0].innerText == "O"||$("#7")[0].innerText == "X" && $("#8")[0].innerText == "X" && $("#9")[0].innerText == "X" )
  {
    winner = $("#7")[0].innerText
  }
  if ($("#1")[0].innerText =="O" && $("#4")[0].innerText == "O" && $("#7")[0].innerText == "O"||$("#1")[0].innerText == "X" && $("#4")[0].innerText == "X" && $("#7")[0].innerText == "X" )
  {
    winner = $("#1")[0].innerText
  }
  if ($("#2")[0].innerText =="O" && $("#5")[0].innerText == "O" && $("#8")[0].innerText == "O"||$("#2")[0].innerText == "X" && $("#5")[0].innerText == "X" && $("#8")[0].innerText == "X" )
  {
    winner = $("#2")[0].innerText
  }
  if ($("#3")[0].innerText =="O" && $("#6")[0].innerText == "O" && $("#9")[0].innerText == "O"||$("#3")[0].innerText == "X" && $("#6")[0].innerText == "X" && $("#9")[0].innerText == "X" )
  {
    winner = $("#3")[0].innerText
  }
  if ($("#1")[0].innerText =="O" && $("#5")[0].innerText == "O" && $("#9")[0].innerText == "O"||$("#1")[0].innerText == "X" && $("#5")[0].innerText == "X" && $("#9")[0].innerText == "X" )
  {
    winner = $("#1")[0].innerText
  }
  if ($("#3")[0].innerText =="O" && $("#5")[0].innerText == "O" && $("#7")[0].innerText == "O"||$("#3")[0].innerText == "X" && $("#5")[0].innerText == "7" && $("#7")[0].innerText == "X" )
  {
    winner = $("#3")[0].innerText
  }
  if(winner != null){
    reset(winner);
  }
  

}




// Reset function, to clear the data within the table cell.


function reset(theWinner)
{
  $(".winner")[0].innertext = theWinner;
  $(".banner").show()
  count1=1;
  count2=1;
  $("#1")[0].innerText=null;
  $("#2")[0].innerText=null;
  $("#3")[0].innerText=null;
  $("#4")[0].innerText=null;
  $("#5")[0].innerText=null;
  $("#6")[0].innerText=null;
  $("#7")[0].innerText=null;
  $("#8")[0].innerText=null;
  $("#9")[0].innerText=null;
}
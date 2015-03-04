// Generated by yi version 0.0.2
  var defaultTimer = setInterval(function(){
     alert("It's been like an hour! Get up and do some walk!");
  },3600000);
  var msg = document.getElementById("alert");

  function testAlert (){
    var frequence = document.getElementById("frequency").value.trim(); 
    var message = document.getElementById('message').value.trim();
    console.log("F: " + frequence + " M: " +message);
    if(!frequence){
      frequence = 3600;
      console.log("Frequence is empty. Using Default.");
    }
      
    if (frequence !== parseInt(frequence).toString()) {
      msg.setAttribute("style", "display: inline-block");
      console.log("frequence is not a number");
    }else{
      frequence = parseInt(frequence);
      console.log("frequence is a number");
      msg.setAttribute("style", "display: none");
      frequence = frequence * 1000;
      clearInterval(defaultTimer);
      console.log("Clear timer.");
      defaultTimer = setInterval(function(){
        alert(message);
      },frequence);
      console.log("New timer.")
    }  
    
  }
  document.getElementById("clickOK").addEventListener("click", testAlert);
  console.log("Initialized.");
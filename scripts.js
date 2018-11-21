
$(document).ready(function(){
  $("#getInput").click(function(){
    var getCellPhone = $("#cellphone").val();
    var getWorkPhone = $("#workphone").val();
	    var getFirst = $("#first").val();
    var getLast = $("#last").val();
	    var getEmail = $("#email").val();
    var getTitle = $("#title").val();
    var getCalendarLink = $("#calendarlink").val();
	
localStorage.setItem("workphone", getWorkPhone);
localStorage.setItem("cellphone",getCellPhone);
localStorage.setItem("first", getFirst);
localStorage.setItem("last", getLast);
localStorage.setItem("title", getTitle);
localStorage.setItem("email", getEmail);
localStorage.setItem("calendarlink", getCalendarLink);

//$("p4").html(getCellPhone);
//$("p3").html(getWorkPhone);
//$("p").html(getFirst);
//$("p1").html(getLast);
//$("p5").html(getEmail);
//$("p2").html(getTitle);
//$("p6").html(getCalendarLink);
$("p7").html("<div>"+getFirst+", your cell phone number is: "+getCellPhone+" <div> You clicked on --'Build My Signature'-- Button.  Thank you! --> The next step is to double-click on 'code.html' file! :)");
  });
})

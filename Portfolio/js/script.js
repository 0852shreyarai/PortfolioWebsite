(function(){

	// function to display date
	function displayDate(){
  		var c = document.getElementById('clock');		//initializing values to the variables
  		 var d = new Date();

  		 c.innerHTML =  d.toDateString();
  	
  	}
  	displayDate();
  	// -------------------
		
	// when the page is scrolled function stickyNavigation is called	
  	window.onscroll = function() {stickyNavigation()};

	var navbar = document.getElementById("nav");					//initializing values to the variables
	var leftCard = document.getElementById("leftcolumn");
	var sticky = navbar.offsetTop;

	// function for navigation bar to stick to the top of the page 
	function stickyNavigation(){
	  	if (window.pageYOffset >= sticky) {					// if Y-axis is greater or equal to sticky a sticky navigation will be added
	    navbar.classList.add("stickyNav");
	    if(leftCard !=null){
	    	leftCard.classList.add("stickyCard");		//if left card is not null leftcolumn is replaced with stickycard
	    	leftCard.classList.remove("leftcolumn");
		}
	  } else {
	    navbar.classList.remove("stickyNav");			// else the stickyCard will be removed and leftcolumn will be added
	    if(leftCard != null){
		    leftCard.classList.remove("stickyCard");
		    leftCard.classList.add("leftcolumn");
		}
	  }
	}

})();
// ---------------------------------


//function for validation of form after filling the form
function validation() 
		{
			// accessing the values of the form with 'name'
			var firstname = document.forms["messageform"]["fname"].value;
			var lastname = document.forms["messageform"]["lname"].value;
			var email = document.forms['messageform']['email'].value;
			var gender = document.forms['messageform']['gender'].value;
			var message = document.forms['messageform']['message'].value;
			var subject = document.forms['messageform']['subject'].value;


			if (firstname == "" || lastname =="" || email =="" || gender =="" || message =='' || subject =='')
			 { 
			 	// message to be shown if any values are left empty
			 	alert("Error: Please check your entries");

			 }
			 else
			 {
			 	console.log(email.includes("@"));
			 	if(email.includes("@")){
			 		
			 		// anchor tag created 
			 		let link = document.createElement('a')

					link.href = "mailto:shreyarai2020@gmail.com?subject="+encodeURIComponent(subject)+"&body=" + encodeURIComponent(message);
					link.click();
					// message to be shown if provided email has "@" 
					alert("Thankyou");
			 
			 	}else{
			 		// message to be shown if provided email does not have "@" 
			 		alert("Please include valid email");
			 	}
			 	
			 }
		}





















		
		

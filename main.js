	//SIDE MENU FOR SMALL SCREEN

	var sidemenu = document.getElementById("sidemenu");
	function openmenu(){

		sidemenu.style.right = "0";
	}
	function closemenu(){

		sidemenu.style.right = "-200px";
	}


	//CONTACT FIELD FORM

	
	var emailfield = document.getElementById("Email-field");
	function validateEmail(){

		if(!emailfield.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
			error.innerHTML ="valid email please";
			return false
		}
		error.innerHTML = "";
		return true;
	}  const scriptURL = 'https://script.google.com/macros/s/AKfycbx6FXtgae2JG5m4pZE-j44cOCzSLSIoFNdbhASn0cNx4WcTyVvHdECK15vQ9Z9DBhwM/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
  	if(validateEmail()==false){
  	error.textContent = 'Please valid email.';
    e.preventDefault()}
    else{
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
      	msg.innerHTML = "Sent successfully"
      	setTimeout(function(){
      		msg.innerHTML=""
      	},5000)
      	form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  }})

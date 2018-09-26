var goodColor = "#82FF84";
var badColor = "#FF7476";

var users = [
	{
	user:"Sian",
	mail:"acsian@gmail.com",
	pwd:"sian1234"
  },
	{
    user:"sangar",
    mail:"cjsangar@gmail.com",
    pwd:"12345678"
  },

  {
    user:"Athushan",
    mail:"athu@gmail.com",
    pwd:"aaaa5678"
  },
  {
    user:"gouththam",
    mail:"stark@gmail.com",
    pwd:"12345678"
  },
{
	user:"vithuran",
	mail:"vithu@gmail.com",
	pwd:"ssss5678"
}
];

function val(adder)
{
	//Store the Confimation Message Object ...
	var message2 = document.getElementById('msg');

	var letters=/^[A-Za-z ]+[\w ]+[\w ]+[\w ]$/;

	if(adder.value.match(letters))
	{
	message2.innerHTML = ""
	}
	else
	{
	//The Text do not match.
    //notify the user.
    message2.style.color = badColor;
    message2.innerHTML = "Invalid TV Show name"
	}
}

function add(adder){
  var message2 = document.getElementById('msg');
  var required = "";
  if(adder.value == required)
  {
    message2.style.color = badColor;
    message2.innerHTML = "Please Enter a TV Series Title"
  }
  else{
    var letters=/^[A-Za-z]+[\w ]+[\w ]+[\w ]$/;

  	if(adder.value.match(letters))
  	{
      message2.style.color = "#006400";
      message2.innerHTML = "TV Show Name has been added";
  	}
  	else
  	{
  	//The Text do not match.
      //notify the user.
      message2.style.color = badColor;
      message2.innerHTML = "Invalid TV Show name"
  	}
  }
}



select("all")
function select(c) {
  var x, i;
  x = document.getElementsByClassName("ingallery");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "shows");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "shows");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementsByClassName("pagination");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


filter("all")
function filter(c) {
  var x, i;
  x = document.getElementsByClassName("ingallery");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "shows");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "shows");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementsByClassName("pager");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* Signup Form */
function namevalidate(username){
var message = document.getElementById('namemessage'); // for password
let matchfix = /^[A-Za-z]+$/; // --- no password

if(username.value == ""){ // for password
message.innerHTML = "Your Name is Required"; // for password
username.style.backgroundColor = "#FF7476"; // for password
}
else{// for password
if(username.value.match(matchfix) && username.value.length >= 5){
message.innerHTML = "";
username.style.backgroundColor = "#82FF84"; // for password
}
else{
message.innerHTML = "Your Name is invalid";
username.style.backgroundColor = "#FF7476";
}

}
}                                                      /* Signup Form */


                                                      /* Signup Form */
function mailvalidate(mail){
  var message = document.getElementById('mailmessage'); // for password
  let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // --- no password

  if(mail.value == ""){ // for password
    message.innerHTML = "Your Email Address is Required"; // for password
    mail.style.backgroundColor = "#FF7476"; // for password
  }
  else{// for password
    if(mail.value.match(email)){
      message.innerHTML = "";
      mail.style.backgroundColor = "#82FF84"; // for password
    }
    else{
      message.innerHTML = "Your Email Id is invalid";
      mail.style.backgroundColor = "#FF7476";
    }
}
}

function passwordvalidate(password){
var message = document.getElementById('passwordmessage'); // for password
let matchfix = [/[a-z]/g, /[A-Z]/g, /[0-9]/g]; // --- no password
let res = 1;
	for(var i=0; i < matchfix.length; i++){
		if(password.value.match(matchfix[i])){
			res *= 1;
			console.log(res);
		}
		else{
			res *= 0;
		}
	}
	if(res === 1 && password.value.length > 7){
		document.getElementById("buton").disabled = false;
		message.innerHTML = " ";
	}
	else{
		message.innerHTML = "You password Should atleast 1 capital letter, 1 small letter, one number and should be more than 8 characters";
		message.style.color = "red";
		document.getElementById("buton").disabled = true;
	}
}


console.log(users);                                              /* Signup */

function Registration(username, mail, password){
  msg = document.getElementById("passwordmessage");
  if(username.value !== "" && mail.value !== "" && password.value !== "" && document.getElementById("buton").disabled == false){

      users.unshift({user:username.value, mail:mail.value, pwd:password.value});
      console.log(users);
  }
}


var users = [
	{
	user:"Sian",
	mail:"acsian@gmail.com",
	pwd:"sian1234"
	},
	{
		user:"sangar",
		mail:"cjsangar@gmail.com",
		pwd:"12345678"
	},

	{
		user:"Athushan",
		mail:"athu@gmail.com",
		pwd:"aaaa5678"
	},
	{
		user:"gouththam",
		mail:"stark@gmail.com",
		pwd:"12345678"
	},
{
	user:"vithuran",
	mail:"vithu@gmail.com",
	pwd:"ssss5678"
}
];
                                                    /*Login*/
function checklog(usermail, userpassword){
  var message = document.getElementById("msg1");
	var message2 = document.getElementById("msg2");
  for(i=0; i < users.length; i++){
    if(usermail.value !== ""){
      if(usermail.value.match(users[i].mail) && userpassword.value.match(users[i].pwd)){
          message2.style.color = "#006400";
          message2.innerHTML = "Login is success";
					message.innerHTML = "";
					break;
      }
      if(usermail.value !== users[i].mail){
				message.innerHTML = "Email is Wrong";
				message.style.color = "red";
			}
			if(userpassword.value !== users[i].pwd) {
        message2.innerHTML = "Password is wrong";
				message2.style.color = "red";
      }
      // else{
      //   message.style.color = badColor;
      //   message.innerHTML = "Both Password and Email is Wrong";
      // }
    }
    else{
      message.style.color = "#FF7476";
      message.innerHTML = "Please Enter Values";
    }
  }
}

var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];




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

function filtA(){
    var x = "A";
    search(x);

  }
  function filtB(){
    var x = "B";
    search(x);

  }
  function filtC(){
    var x = "C";
    search(x);

  }
  function filtD(){
    var x = "D";
    search(x);

  }
  function filtE(){
    var x = "E";
    search(x);

  }
  function filtF(){
    var x = "F";
    search(x);

  }
  function filtG(){
    var x = "G";
    search(x);

  }
  function filtH(){
    var x = "H";
    search(x);

  }
  function filtI(){
    var x = "I";
    search(x);

  }
  function filtJ(){
    var x = "J" ;
    search(x);

  }
  function filtK(){
    var x = "K";
    search(x);

  }
  function filtL(){
    var x = "L";
    search(x);

  }
  function filtM(){
    var x = "M";
    search(x);

  }
  function filtN(){
    var x = "N";
    search(x);

  }
  function filtO(){
    var x = "O";
    search(x);

  }
  function filtP(){
    var x = "P";
    search(x);

  }
  function filtQ(){
    var x = "Q";
    search(x);

  }
  function filtR(){
    var x = "R";
    search(x);

  }
  function filtS(){
    var x = "S";
    search(x);

  }
  function filtT(){
    var x = "T";
    search(x);

  }
  function filtU(){
    var x = "U";
    search(x);

  }
  function filtV(){
    var x = "V";
    search(x);

  }
  function filtW(){
    var x = "W";
    search(x);

  }
  function filtX(){
    var x = "X";
    search(x);

  }
  function filtY(){
    var x = "Y";
    search(x);

  }
  function filtZ(){
    var x = "Z";
    search(x);

  }

  function xearch(y){
    var x = y.value;
    search(x);
  }

  function search(x){
    document.getElementById('rootus').innerHTML = "";
    var dat = x;
    console.log(dat);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
      if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);

        console.log(data);
        for (var i = 0; i < 20; i++) {
          if (data[i].banner !== "") {
            document.getElementById('rootus').innerHTML += '<div class="blacksat"> <div class="trendsetter"><img style="width:100%" src="https://www.thetvdb.com/banners/'+data[i].banner+'" alt=""></div><div class="ititle"><p style="text-align:center;"><a style="text-align:center; margin-left:auto;  width:100%; margin-right:auto; display:block;" class="title" href="'+baseUrl+'desc/'+data[i].id+'">'+data[i].seriesName+'</p></a><p style="font-size:2vw; text-align:center;"><b>Network :</b> '+data[i].network+'</p></div></div>'
          }
        }
      }
    }

    xhttp.open("GET", baseUrl+"search/"+dat, true);
    xhttp.send();
  }

  function subscribelog(){
    var mail = document.getElementById('subloguname').value;
    var password = document.getElementById('sublogpassword').value;
    var seriesid = document.getElementById('cryid').innerHTML;

    var params = "mail="+mail+"&password="+password+"&sid="+seriesid;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
      if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        console.log(data);

        if(data.status == true || data == true){
          document.getElementById('id01').style.display='none'
          document.getElementById('subbedbut').classList.remove("hidden");
          document.getElementById('zub').classList.add("hidden");

        }else{
          document.getElementById('zub').classList.remove("hidden");
        }
        // console.log("Mocked");
      }
    }


    xhttp.open("PUT", baseUrl + '/sublog', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(params);
  }




  function subscribe(){
    var name = document.getElementById('cryname').innerHTML;
    var firstAired = document.getElementById('cryfa').innerHTML;
    var network = document.getElementById('crynet').innerHTML;
    var overview = document.getElementById('cryview').innerHTML;
    var status = document.getElementById('crystatus').innerHTML;
    var id = document.getElementById('cryid').innerHTML;
    var subid = document.getElementById('suber').innerHTML;

    var params = "name="+name+"&firstAired="+firstAired+"&network="+network+"&overview="+overview+"&status="+status+"&subid="+subid;

    console.log(params);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
      if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        console.log(data);
        document.getElementById('subbedbut').classList.remove("hidden");
        document.getElementById('subsbut').classList.add("hidden");
      }
    }


    xhttp.open("PUT", baseUrl+"/subscribe/"+id, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(params);
  }

  if(getUrl.pathname == "/desc/"+document.getElementById('cryid').innerHTML && document.getElementById('suber').innerHTML !== null || undefined){
    console.log("hello world");
    checksubscribe();
  }


  function checksubscribe(){
    var showit = document.getElementById('suber').innerHTML;
    var id = document.getElementById('cryid').innerHTML;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
      if(this.readyState == 4 && this.status == 200){
        // console.log(this.responseText);
        var data = JSON.parse(this.responseText);
          if(data.subscriber.includes(showit)){
            console.log("found");
            document.getElementById('subbedbut').classList.remove("hidden");
          }
          else{
            document.getElementById('subsbut').classList.remove("hidden");
            console.log("Not found");
          }
        // console.log(data.subscriber);
      }
    }


    xhttp.open("GET", baseUrl+"/checksubscribe/"+id, true);
    xhttp.send();
  }

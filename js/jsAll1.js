function theClock(){
	var clock=new Date();
	if(clock.getHours()>12){
	document.getElementById('clk').innerHTML=clock.getHours()-12 + ":" + clock.getMinutes();
	setTimeout(theClock,1000);
	}
	else if(clock.getHours()==12){
		document.getElementById('clk').innerHTML="12:" + clock.getMinutes(); 
		setTimeout(theClock,1000);
	}
	if(clock.getMinutes()<10){
		if(clock.getHours()>12){
		document.getElementById('clk').innerHTML=clock.getHours()-12 + ":0" + clock.getMinutes();
		setTimeout(theClock,1000);
		}
		else if(clock.getHours()==12){
			document.getElementById('clk').innerHTML="12:0" + clock.getMinutes(); 
			setTimeout(theClock,1000);
		}
	}
}	

var idList = Array("uname","pwd1","pwd2","email","phone","photo","age"); 

function validateLog(){
	var bool=true;
	var count=0;
	var uname=document.getElementById('uname').value;
	var key=document.getElementById('pwd1').value;

	if (uname.localeCompare("stu")==0 || uname.localeCompare("Stu")==0){
		if (key.localeCompare("pass")==0) {
			document.getElementById('formLogin').setAttribute('action','student.html');
		}
		else {
			document.getElementById('lblWarning').innerHTML="Password is incorrect!";
			document.getElementById('lblWarning'a).style="color:red;";
			bool=false;
		}
	}

	else if(uname.localeCompare("admin")==0 || uname.localeCompare("Admin")==0){
		if (key.localeCompare("pass")==0) {
			document.getElementById('formLogin').setAttribute('action','admin.html');
		}
		else {
			document.getElementById('lblWarning').innerHTML="Password is incorrect!";
			document.getElementById('lblWarning').style="color:red;";
			bool=false;
		}
	}

	else if(uname.localeCompare("teacher")==0 || uname.localeCompare("Teacher")==0){
		if (key.localeCompare("pass")==0) {
			document.getElementById('formLogin').setAttribute('action','teacher.html');
		}
		else {
			document.getElementById('lblWarning').innerHTML="Password is incorrect!";
			document.getElementById('lblWarning').style="color:red;";
			bool=false;
		}
	}

	else if(!uname.localeCompare("stu")==0 || !uname.localeCompare("admin")==0 || !uname.localeCompare("teacher")==0){
		document.getElementById('lblWarning').style="color:red;";
		document.getElementById('lblWarning').innerHTML="No user found with this login information!";
		bool=false;
	}

	return bool;
}

function reseting(ID){
	document.getElementById(ID).style="border-color:none;";
}

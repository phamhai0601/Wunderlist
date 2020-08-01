	//------------
function close_model_create_list(){
	document.getElementById("create-list").style.animation = "fade_out 0.8s";
	myVar = setTimeout(function(){
		document.getElementById("model-create-list").style.display="none"; 
		document.getElementById("create-list").style.animation = "fade_in 0.8s";  
	}, 750);
}

function close_model_account_setting(){
	document.getElementById("accountSetting").style.animation = "fade_out 0.8s";
	var myVar = setTimeout(function(){
		document.getElementById("modal-setting").style.display="none"; 
		document.getElementById("accountSetting").style.animation = "fade_in 0.8s";  
	}, 750);	
}

function show_contextmeunu(x,y){
	 
	document.getElementById("context-item").style.display="block";
	console.log("11234");
	document.getElementById("context-item").style.top = y;
	document.getElementById("context-item").style.left = x;

}

function show_menu_side_bar(x,y){
	document.getElementById("modal-side-bar").style.display = "block";
	document.getElementById("modal-side-bar").style.top = y;
	document.getElementById("modal-side-bar").style.left = x;
}

function getDisplay(id){
	var result;
	var styleProp = 'display';
	var el = document.getElementById(id);
	style = el.currentStyle || window.getComputedStyle(el, null);
	result = style[styleProp] || "unknown";
	return result;
}

//addEventListent

document.addEventListener("keydown", function(event){
	if(event.keyCode == 27){
		if(document.getElementById("model-create-list").style.display == "block"){
			close_model_create_list();
		}else if(document.getElementById("modal-setting").style.display == "block"){
			close_model_account_setting();
		}
	}
});

document.getElementById("side-bar-action").addEventListener('click', function(event){
	alert(event.target.tagName);
	document.getElementById("model-create-list").style.display="block";
});

document.querySelector("#model-create-list button[class=btn-cancel]").addEventListener("click", function(){
	close_model_create_list();
});

document.getElementById("account-Setting").addEventListener("click", function(){
	document.getElementById("modal-setting").style.display="block";
});


var centerTask = document.getElementById("center-task").children;
for(var i = 0 ; i < centerTask.length; i++){

	centerTask[i].addEventListener('contextmenu',function(event){
		var x = event.clientX;
		var y = event.clientY; 
		show_contextmeunu(x,y);
		event.preventDefault();
	});
}

document.addEventListener("click",function(event){


	if(getDisplay("context-item") == "block"){
		if(!document.getElementById("context-item").contains(event.target)){
			document.getElementById("context-item").style.display = "none";
		}
	}

	if(getDisplay("modal-side-bar") == "block"){
		if(!document.getElementById("modal-side-bar").contains(event.target)){
			document.getElementById("modal-side-bar").style.display = "none";
		}		
	}
});

var menu_side_bar =document.querySelector(".menu-side-bar ul").children;
for(var i = 0 ; i < menu_side_bar.length; i++){
	menu_side_bar[i].addEventListener('contextmenu',function(event){
		var x = event.clientX;
		var y = event.clientY; 
		show_menu_side_bar(x,y);
		event.preventDefault();
	});
}







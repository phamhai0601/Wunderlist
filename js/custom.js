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
	document.getElementById("context-item").style.top = y;
	document.getElementById("context-item").style.left = x;
	var height = document.getElementsByTagName("body")[0].offsetHeight - y;
	document.getElementById("context-item").style.height = height;


}

function show_menu_side_bar(x,y){
	var element = document.getElementById("modal-side-bar");
	element.style.display = "block";
	element.style.top = y;
	element.style.left = x;
	console.log(element.offsetHeight);
	var height = document.getElementsByTagName("body")[0].offsetHeight - y;
	if(height < element.offsetHeight){
		element.style.height = height;
	}

}

function close_menu_side_bar(){
	var element = document.getElementById("modal-side-bar");
	element.style.display = "none";
	element.style.height = "305px";
}

function getDisplay(id){
	var result;
	var styleProp = 'display';
	var el = document.getElementById(id);
	style = el.currentStyle || window.getComputedStyle(el, null);
	result = style[styleProp] || "unknown";
	return result;
}

function removeClassActive(element){
	var ele = element;
	for(let i = 0; i< ele.length; i++){
		if(ele[i].getAttribute('class') == "active"){
			ele[i].classList.remove("active");
		}
	}
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
			close_menu_side_bar();

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

	menu_side_bar[i].addEventListener('click',function(event){
		console.log(this.getAttribute('class'));
		removeClassActive(menu_side_bar);
		this.classList.add("active");
		var x = this.textContent;
		document.querySelector(".head-mid-content span").innerHTML =x;

	});
}








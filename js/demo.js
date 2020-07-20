var create_list = document.getElementById("side-bar-action");
function show_create_list(){
	var alert = document.getElementById("model-create-list");
	alert.style.display="block";
	window.location.href = '#model-create-list';
}
create_list.addEventListener('click', show_create_list);
	//------------
function close_model_create_list(){
	document.getElementById("create-list").style.animation = "fade_out 0.8s";
	myVar = setTimeout(function(){
		document.getElementById("model-create-list").style.display="none"; 
		document.getElementById("create-list").style.animation = "fade_in 0.8s";  
	}, 750);
}

document.getElementById("model-create-list").addEventListener("keydown", function(event){
	if(event.keyCode == 27){
		close_model_create_list();
	}
});

document.querySelector("#model-create-list button[class=btn-cancel]").addEventListener("click", function(){
	close_model_create_list();
});



document.getElementById("accountSetting").addEventListener("click", function(){
	var alert = document.getElementById("modal-setting");
	alert.style.display="block";
});

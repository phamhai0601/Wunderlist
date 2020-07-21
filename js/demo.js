


function show_create_list(){
	var alert = document.getElementById("model-create-list");
	alert.style.display="block";
	window.location.href = '#model-create-list';
}

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
	myVar = setTimeout(function(){
		document.getElementById("model-create-list").style.display="none"; 
		document.getElementById("accountSetting").style.animation = "fade_in 0.8s";  
	}, 750);	
}

//addEventListent

document.addEventListener("keydown", function(){
	if(keyCode == 27){
		if(document.getElementById("model-create-list").style.display == "block"){
			close_model_create_list();
		}else if(document.getElementById("modal-setting").style.display == "block"){
			close_model_account_setting();
		}
	}
});

document.getElementById("side-bar-action").addEventListener('click', show_create_list);

document.querySelector("#model-create-list button[class=btn-cancel]").addEventListener("click", function(){
	close_model_create_list();
});





document.getElementById("accountSetting").addEventListener("click", function(){
	var alert = document.getElementById("modal-setting");
	alert.style.display="block";
});

var elemenContextMenu;


function closeModelCreateList(){
	document.getElementById("create-list").style.animation = "fade_out 0.8s";
	myVar = setTimeout(function(){
		document.getElementById("model-create-list").style.display="none"; 
		document.getElementById("create-list").style.animation = "fade_in 0.8s";  
	}, 750);
}

function closeModelAccountSetting(){
	document.getElementById("accountSetting").style.animation = "fade_out 0.8s";
	var myVar = setTimeout(function(){
		document.getElementById("modal-setting").style.display="none"; 
		document.getElementById("accountSetting").style.animation = "fade_in 0.8s";  
	}, 750);	
}

function showContextMenu(x,y){
	 
	var element = document.getElementById("context-item");
	element.style.display="block";
	element.style.top = y;
	element.style.left = x;
	var height = document.getElementsByTagName("body")[0].offsetHeight - y;
	if(height < element.offsetHeight){
	 	element.style.height = height;
	}


}

function showMenuSideBar(x,y){
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

function closeMenuSideBar(){
	var element = document.getElementById("modal-side-bar");
	element.style.display = "none";
	element.style.height = "305px";
}

function getAttributeDisplay(element_id){
	var result;
	var styleProp = 'display';
	var el = document.getElementById(element_id);
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

function createList(listName){
	var item = document.querySelector(".menu-side-bar ul");
	var node = document.createElement("LI");
	var html = item.children[item.children.length-1].innerHTML;
	node.innerHTML = html;
	node.querySelector("span").innerHTML = listName;
	item.appendChild(node);
	addEventActiveMenuSideBar(node);


}

function successTaskItem(element){
	var parentDiv = element;
	while(parentDiv.nodeName != "DIV"){
		parentDiv = parentDiv.parentElement;
	}
	var textSpan = parentDiv.querySelector("p span").textContent;
	
	var node = document.createElement("div");
	node.innerHTML = itemTaskSuccess;
	node.setAttribute('class','item-task');
	node.querySelector("p > span").textContent = textSpan;
	if(parentDiv.querySelector("p+span").getAttribute("data-id") == "1"){
		node.querySelector("p + span").innerHTML = iconRedStart; //iconRedStart in valiable.js
		node.querySelector("p +span").setAttribute("data-id","1");
	}
	if(parentDiv.getAttribute('class').indexOf('active') > 0){
		node.classList.add("active");
	}
	document.getElementsByClassName("task-complete")[0].appendChild(node);
	node.querySelector("span svg[name='task-check']").addEventListener('click',function(){
		unSuccessTaskItem(this);
	});

	parentDiv.remove();
	//addEventCenterTaskItem(node);
	
}

function unSuccessTaskItem(element){
	var parentDiv = element;
	while(parentDiv.nodeName != "DIV"){
		parentDiv = parentDiv.parentElement;
	}
	var textSpan = parentDiv.querySelector("p span").textContent;
	var node = document.createElement("div");
	node.innerHTML = itemTaskUnSuccess;
	node.setAttribute('class','item-task');
	node.querySelector("p span").textContent = textSpan;
	if(parentDiv.querySelector("p+span").getAttribute("data-id") == "1"){
		node.querySelector("p + span").innerHTML = iconRedStart; //iconRedStart in valiable.js
		node.querySelector("p +span").setAttribute("data-id","1");
	}
	if(parentDiv.getAttribute('class').indexOf('active') > 0){
		node.classList.add("active");
	}
	document.getElementsByClassName("center-task")[0].appendChild(node);
	addEventCenterTaskItem(node);
	parentDiv.remove();

}

function getIdMenuSideBarActive(){
	var menu_side_bar = document.getElementsByClassName('menu-side-bar')[0];
	var item_menu_side_bar = menu_side_bar.getElementsByClassName('active')[0];
	return item_menu_side_bar.getAttribute("data-id");
}


function addTaskItem(text,event){
	var fillStart =  document.getElementById("fill-starred");
	var node = document.createElement("div");
	node.innerHTML = itemTaskUnSuccess;
	node.setAttribute('class','item-task');
	node.querySelector("p span").textContent = text;
	node.querySelector("p + span").setAttribute("data-id","0");
	if(fillStart.style.opacity != "0"){
		node.querySelector("p + span").innerHTML = iconRedStart; // iconRedStart in valiable
		node.querySelector("p + span").setAttribute("data-id","1");
		fillStart.style.opacity = 0;
	}
	document.getElementsByClassName("center-task")[0].appendChild(node);
	addEventCenterTaskItem(node);
	node.setAttribute("data-id",getIdMenuSideBarActive());

}

function addEventSuccessTaskItem(element){
	var checkboxSucces = element.querySelector("svg[name='task-uncheck']");
	checkboxSucces.addEventListener("click", function(){
			successTaskItem(this);
	});
}

function addEventUnSuccessTaskItem(element){
	var checkboxSucces = element.querySelector("svg[name='task-check']");
	checkboxSucces.addEventListener("click", function(){
			unSuccessTaskItem(this);
	});
}

function má(){
	var fillStart = document.getElementById("fill-starred");
	if(fillStart.style.opacity == "0"){
		
		fillStart.style.opacity = "unset";
	}else{
		fillStart.style.opacity = "0";
	}
}

function focusInputAddTask(){
	document.getElementById("addtask-starred").style.display ="block";
	document.getElementById("addtask-today").style.display = "block";
	document.getElementById("icon-voice").style.display = "block";
	document.getElementById("icon-plus").style.display ="none";
}

function unForcusInputAddTask()
{
	document.getElementById("addtask-starred").style.display ="none";
	document.getElementById("addtask-today").style.display = "none";
	document.getElementById("icon-voice").style.display = "none";
	document.getElementById("icon-plus").style.display ="block";	
}

function enterInputAddTask(element,event){
	if(event.keyCode == 13){
		addTaskItem(element.value,event);
		element.value = "";

	}
}

function addEventContextMenu(element,event){
	element.addEventListener('contextmenu',function(event){
		var x = event.clientX;
		var y = event.clientY; 
		showContextMenu(x,y);
		console.log(element);
		event.preventDefault();		
	});
}

function addEventDbClickTaskItem(element){
	element.addEventListener('dblclick', function(){
		var mainRight = document.getElementsByClassName("right-content")[0];
		mainRight.style.width='370px';
		var textItem = element.querySelector("p > span").textContent;
		mainRight.querySelector(".head-right-content input").value = textItem;
		if(element.querySelector("span:first-child svg").getAttribute('name') == "task-uncheck"){
			mainRight.querySelector(".head-right-content span:first-child").innerHTML = checkboxUnSucces;
		}else{
			mainRight.querySelector(".head-right-content span:first-child").innerHTML = checkboxSucces;
		}
		if(element.querySelector("p+span").getAttribute("data-id") == "1"){
			mainRight.querySelector(".head-right-content input + span").innerHTML = iconRedStart;
			mainRight.querySelector(".head-right-content input + span").setAttribute("data-id","1");
		}else{
			mainRight.querySelector(".head-right-content input + span").innerHTML = iconStart;
			mainRight.querySelector(".head-right-content input + span").setAttribute("data-id","0");
		}
		var centerTask = document.getElementsByClassName('item-task');
		for(let i = 0; i < centerTask.length; i++){
			centerTask[i].classList.remove("active");
		}
		this.classList.add("active");
	});
}

function addEventActiveMenuSideBar(element){
	element.addEventListener('click',function(event){
		removeClassActive(menu_side_bar);
		this.classList.add("active");
		document.querySelector(".head-mid-content span").innerHTML =this.textContent;
		console.log(element.getAttribute("data-id"));
		checkActiveMenuSideBarTaskItem(element.getAttribute("data-id"));
	});
	
	
}

function maskStartTaskItem(element){   //set status of start.
	var dataID = 0;
	if(element.getAttribute("data-id") == "0"){
		element.innerHTML = iconRedStart;
		element.setAttribute("data-id","1");
		dataID = 1;
	}else{
		element.innerHTML = iconStart;
		element.setAttribute("data-id","0");
		dataID = 0;
	}
	return dataID;
}

function maskStartMainRight(element,dataID){
	if(element.nodeName == "DIV"){
		var textTaskItem = element.querySelector("p > span").textContent;
		var textMainRight = document.querySelector(".head-right-content input").value;
		if(textTaskItem == textMainRight){
			if(dataID == 0){
				document.querySelector(".head-right-content input + span").innerHTML = iconStart;
				document.querySelector(".head-right-content input + span").setAttribute("data-id","0");
			}else{
				document.querySelector(".head-right-content input + span").innerHTML = iconRedStart;
				document.querySelector(".head-right-content input + span").setAttribute("data-id","1");
			}
		}
	}else{
		var parentDiv = element.parentElement;
		 
		var textMainRight = parentDiv.querySelector("input").value;
		var centerTask = document.getElementById("center-task").children;
		for(let i = 0; i < centerTask.length; i++){
			var textTaskItem = centerTask[i].querySelector("p > span").textContent;
			if(textTaskItem == textMainRight && centerTask[i].getAttribute("class").indexOf('active') != -1){
				if(dataID == 0){
					centerTask[i].querySelector("p + span").innerHTML = iconStart;
					centerTask[i].querySelector("p + span").setAttribute("data-id","0");
				}else{
					centerTask[i].querySelector("p + span").innerHTML = iconRedStart;
					centerTask[i].querySelector("p + span").setAttribute("data-id","1");
				}
			}
		}
	}
}


function addEventMaskStartTaskItem(element){
	var elementSpan = element.getElementsByTagName("span")[2];
	elementSpan.addEventListener('click', function(){
		maskStartMainRight(element,maskStartTaskItem(this));
	});
}

function addEventHoverComment(element){
	element.addEventListener("mousemove",function(){
		this.classList.add("active");
	});
	element.addEventListener("mouseleave", function(){
		this.classList.remove("active");
	});
}

function deleteComment(element){
	var dataConfirm = confirm("Bạn muốn xóa comment?");
	var parentDiv = element.parentElement;
	if(dataConfirm == true){
		parentDiv.remove();
	}
}

function addEventDeleteComment(element){
	element.addEventListener("click", function(){
		deleteComment(this);
	});
}

function addComment(textValue){
	var node = document.createElement("DIV");
	node.innerHTML = nodeComment; //nodeComent in valiable.js
	node.querySelector("p span + span").textContent = ": "+textValue;

	var divComment = document.getElementsByClassName("center-right-content-comment")[0];
	divComment.appendChild(node);
	addEventHoverComment(node);
	addEventDeleteComment(node.querySelector("p + span"));
}
function addEventDrag(element){
	element.setAttribute("draggable",true);
	element.addEventListener("dragstart", function(){
		dragStart(this);
	});

	element.addEventListener("drop", function(event){
		drop(event);
	});

	element.addEventListener("dragover", function(event){
		allowDrop(event);
	});

	element.addEventListener("dragenter", function(event){
		dragEnter(event);
	});

	element.querySelector("p").addEventListener("dragleave", function(event){
		var nodeTarget = event.target;
		while(nodeTarget.nodeName != "DIV"){
			nodeTarget = nodeTarget.parentElement;
		}
		dragLeave(nodeTarget,element);
	});
}

function dragStart(element) {
  leaveItem = element;
}

function drop(event) {
  event.preventDefault();
  var node = leaveItem.cloneNode(true);
  hideTaskItem(leaveItem);
  var timeOut = setTimeout(function(){
  	  	leaveItem.remove();
  		leaveItem = null;
  },400);
  var centerTask = document.getElementById("center-task");
  var nodeTarget = event.target;
  while(nodeTarget.nodeName != "DIV"){
  	nodeTarget = nodeTarget.parentElement;
  }
  centerTask.insertBefore(node,nodeTarget.nextSibling);
  addEventCenterTaskItem(node);
  removeMarginBottomCenterTaskItem(centerTask);
}

function dragEnter(event){
  var nodeTarget = event.target;
  while(nodeTarget.nodeName != "DIV"){
  	nodeTarget = nodeTarget.parentElement;
  }
  nodeTarget.style.marginBottom = "20px";
  nodeTarget.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
}

function allowDrop(event) {
  event.preventDefault();
}

function dragLeave(nodeTarget,element){
	var nodeParent = element;
	while(nodeParent.className != "center-task"){
		nodeParent = nodeParent.parentElement;
	}
	removeMarginBottomCenterTaskItem(nodeParent);

	nodeTarget.style.marginBottom = "1px";
	nodeTarget.style.boxShadow = "none";
}

function hideTaskItem(element){
	element.querySelector("span:first-child").style.display = "none";
	element.querySelector("p").style.display = "none";
	element.querySelector("p + span").style.display = "none";
	element.style.transition = "height 0.3s";
	element.style.padding = "0px";
	element.style.height = "0px";
}

function addEventCenterTaskItem(element){
	element.addEventListener('contextmenu',function(event){
		var x = event.clientX;
		var y = event.clientY; 
		showContextMenu(x,y);
		elemenContextMenu = element;
		console.log(elemenContextMenu);
		event.preventDefault();
	});
	addEventDbClickTaskItem(element);
	addEventMaskStartTaskItem(element);
	addEventDrag(element);	
	addEventSuccessTaskItem(element);
}

function addEventCenterTaskItemComplete(element){
	addEventUnSuccessTaskItem(element);
}

function removeMarginBottomCenterTaskItem(element){
	for(let i = 0; i < element.children.length; i++){
		element.children[i].style.marginBottom = "1px";
		element.children[i].style.boxShadow = "none";
	}
}


/////
function getArrayMenuSildeBar(){
	var arr = [];
	var menu_side_bar = document.querySelector(".menu-side-bar ul").children;
	for(let i = 0; i < menu_side_bar.length; i++){
		var id = i;
		var name = menu_side_bar[i].querySelector("p > span").textContent;
		var item = {
			'id' : id,
			'name': name,
		}
		arr.push(item);
	}
	return arr;
}

function setIdMeunuSildeBar(arr){
	var menu_side_bar = document.querySelector(".menu-side-bar ul").children;
	for(let i = 0; i < menu_side_bar.length; i++){
		menu_side_bar[i].setAttribute("data-id",arr[i].id);
	}	
}
setIdMeunuSildeBar(getArrayMenuSildeBar());

function checkActiveMenuSideBarTaskItem(data_id){
	var arr = document.getElementById('center-task').children;
	for(let i = 0; i < arr.length; i++){
		arr[i].style.display = "none";
	}

	for(let i = 0; i < arr.length; i++){
		if(arr[i].getAttribute("data-id") == data_id){
			arr[i].style.display = "";
		}
	}
}


//addEventListent

document.addEventListener("keydown", function(event){
	if(event.keyCode == 27){
		if(document.getElementById("model-create-list").style.display == "block"){
			closeModelCreateList();
		}else if(document.getElementById("modal-setting").style.display == "block"){
			closeModelAccountSetting();
		}
	}
});

document.getElementById("side-bar-action").addEventListener('click', function(event){
	document.getElementById("model-create-list").style.display="block";
});

document.querySelector("#model-create-list button[class=btn-cancel]").addEventListener("click", function(){
	closeModelCreateList();
});

document.getElementById("account-Setting").addEventListener("click", function(){
	document.getElementById("modal-setting").style.display="block";
});

var leaveItem = null;
var centerTask = document.getElementById("center-task").children;
for(var i = 0 ; i < centerTask.length; i++){
	addEventCenterTaskItem(centerTask[i]);
}

var centerTaskComplete = document.getElementById("task-complete").children;
for(var i = 0 ; i < centerTaskComplete.length; i++){
	addEventCenterTaskItemComplete(centerTaskComplete[i]);
}

document.addEventListener("click",function(event){
	if(getAttributeDisplay("context-item") == "block"){
		if(!document.getElementById("context-item").contains(event.target)){
			document.getElementById("context-item").style.display = "none";
		}
	}

	if(getAttributeDisplay("modal-side-bar") == "block"){
		if(!document.getElementById("modal-side-bar").contains(event.target)){
			closeMenuSideBar();
		}		
	}
	if(getAttributeDisplay("addtask-starred") == "block"){
		if(!document.getElementsByClassName("add-task")[0].contains(event.target)){
			unForcusInputAddTask();
		}
	}
});

var menu_side_bar =document.querySelector(".menu-side-bar ul").children;
for(var i = 0 ; i < menu_side_bar.length; i++){
	menu_side_bar[i].addEventListener('contextmenu',function(event){
			var x = event.clientX;
			var y = event.clientY; 
		showMenuSideBar(x,y);
		event.preventDefault();
	});
	addEventActiveMenuSideBar(menu_side_bar[i]);

}



document.querySelector("#model-create-list #create-list ul li span button[class=btn-submit]").addEventListener('click',function(){
	var name = document.querySelector("#create-list ul li input[name=create]");
	if(name.value.length < 1){
		alert("You have to enter list name.");
		name.focus();
	}else{
		closeModelCreateList();	
		createList(name.value);
		setIdMeunuSildeBar(getArrayMenuSildeBar());

	}

});
/*addEventSuccessTaskItem();
addEventUnSuccessTaskItem();*/

document.getElementById("input-add-task").addEventListener('click', function(){
	focusInputAddTask();

});
document.getElementById("addtask-starred").addEventListener("click", function(){
	maskStart();
});

document.getElementById("input-add-task").addEventListener("keydown", function(event){
	enterInputAddTask(this,event);
});

document.getElementById("close-right").addEventListener("click", function(){
	document.getElementsByClassName("right-content")[0].style.width = "0px";
});

document.querySelector(".head-right-content input + span").addEventListener('click',function(){
	maskStartMainRight(this,maskStartTaskItem(this));
});

var hoverComment = document.getElementsByClassName("center-right-content-comment")[0].children;
for(let i = 0; i< hoverComment.length; i++){
	addEventHoverComment(hoverComment[i]);
}

var removeComment = document.getElementsByName("delete-comment");
for(let i =0; i < removeComment.length; i++){
	addEventDeleteComment(removeComment[i]);
}

document.getElementById("add-comment").addEventListener("keydown",function(event){
	if(event.keyCode == 13){
		addComment(this.value);
		this.value = '';
		event.preventDefault();
	}
});


//Sort
function getArrayCenterItem(){
	var list = [];
	centerTask = document.getElementById('center-task').children;
	for(let i = 0; i < centerTask.length; i++){
		var status = null;
		var textContent = null;
		var statusStart = null;
		status = centerTask[i].querySelector('span svg').getAttribute('name');
		textContent = centerTask[i].querySelector('p span').textContent;
		statusStart = centerTask[i].querySelector('p + span > svg').getAttribute('name');
		var itemTask = {
			'status' 			: status,
			'textContent'		: textContent,
			'statusStart'		: statusStart, 
		}
		list.push(itemTask);
	}
	return list;
}
function setIdCenterItem(){
	for(let i = 0; i < centerTask.length; i++){
		centerTask[i].setAttribute("data-id","0");
	}	
}
setIdCenterItem();
function removeCenterTaskItem(list){
	while(list.length > 0){
		list[0].remove();
	}
}
function showCenTerTaskItemSort(list){
	centerTask = document.getElementById('center-task');
	for(let i = 0; i < list.length; i++){
		var node = document.createElement("div");
		node.innerHTML = itemTaskUnSuccess;
		node.setAttribute('class','item-task');
		node.querySelector("p span").textContent = list[i].textContent;
		if(list[i].statusStart != null){
			node.querySelector("p + span").innerHTML = iconRedStart; // iconRedStart in valiable
			node.querySelector("p + span").setAttribute("data-id","1");
			//fillStart.style.opacity = 0;			
		}
		node.querySelector("span svg[name='task-uncheck']").addEventListener('click',function(){
			successTaskItem(this);
		});
		centerTask.appendChild(node);
		addEventCenterTaskItem(node);
	}
}

function compare(a, b) {
  const bandA = a.textContent.toUpperCase();
  const bandB = b.textContent.toUpperCase();

  let comparison = 0;
  if(statusSort == "ASC"){
  	bandA > bandB?comparison = 1:comparison = -1;
  }else{
  	bandA > bandB?comparison = -1:comparison = 1;
  }
  return comparison;
}

var statusSort = "ASC";
document.getElementById('sort').addEventListener('click', function(){
	var listItem = getArrayCenterItem();
	console.log(listItem);
	removeCenterTaskItem(centerTask);
	showCenTerTaskItemSort(listItem.sort(compare));
	statusSort == "ASC"?statusSort = "DESC":statusSort = "ASC";
});

//checkStart
document.querySelector('.head-right-content span').addEventListener('click', function(){
	var taskName = this.querySelector('svg').getAttribute('name');
	var taskItem = document.getElementsByClassName('item-task');
	var node;
	for(let i = 0; i < taskItem.length; i++){
		if(taskItem[i].getAttribute('class').indexOf('active') > 0){
			node = taskItem[i];
		}
	}
	if(taskName == 'task-uncheck'){
		this.innerHTML = checkBoxSuccess;
		successTaskItem(node);
		
	}else{
		this.innerHTML = checkboxUnSucces;
		unSuccessTaskItem(node);
	}

});

//serach....

document.getElementById("search-task-input").addEventListener("keyup", function(){
	var arr = getArrayCenterItem();
	for(let i = 0; i < centerTask.length; i++){
		centerTask[i].style.display = "none";
	}
	for(let i = 0; i < arr.length; i++){
		if(arr[i].textContent.toLowerCase().indexOf(this.value.toLowerCase()) > -1 && getIdMenuSideBarActive() == centerTask[i].getAttribute("data-id")){
				centerTask[i].style.display = "";
		}
	}
});


document.getElementById('mark-as-completed').addEventListener('click', function(){
	document.getElementById("context-item").style.display = "none";
	successTaskItem(elemenContextMenu);

});

document.getElementById('mark-as-start').addEventListener('click',function(){
	var elementSpan = elemenContextMenu.getElementsByTagName("span")[2];
	maskStartTaskItem(elementSpan);
	document.getElementById("context-item").style.display = "none";
});

document.getElementById("left-search").addEventListener('click',function(){
	var element = document.getElementById("left-content");
	if(screen.width > 1000){
		if(element.getAttribute('class').indexOf('reponsive-50') > -1){
			element.classList.remove('reponsive-50');
		}else{
			element.classList.add('reponsive-50');
		}
	}else{
		if(element.getAttribute('class').indexOf('reponsive-280') > -1){
			element.classList.remove('reponsive-280');
		}else{
			element.classList.add('reponsive-280');
		}		
	}
});

function addSubTask(boxSubTask,value){
	var elementLi = document.createElement("LI");
	elementLi.innerHTML = subtask;
	elementLi.querySelector('span:first-child').textContent = value;
	elementLi.querySelector('span:last-child').addEventListener('click',function(){
		removeSubTask(this);
	});	
	boxSubTask.appendChild(elementLi);
	elementLi.focus();
}

function removeSubTask(element){
	var dataConfirm = confirm("Bạn muốn xóa subtask?");
	if(dataConfirm == true){
		element.parentElement.remove();
	}
	
}

document.getElementById('input-subtask').addEventListener('keyup', function(event){
	var boxSubTask = document.getElementById('box-subtask');
	if(event.keyCode==13){
		if(this.value.length < 1){
			alert("Nhập subtask.");
		}else{
			addSubTask(boxSubTask,this.value);
			this.value = "";
		}
	}
})

window.addEventListener('resize', function(){
	var element = document.getElementById('left-content');
	element.classList.remove('reponsive-50');
	element.classList.remove('reponsive-280');
});
var itemId = 0;
function setIdCenterTaskItem(){
	var centerTaskItem = document.getElementById('center-task').children;
	for(let i = 0; i < centerTaskItem.length; i++){
		centerTaskItem[i].setAttribute("item-id",i);
		itemId++;
	}
}






















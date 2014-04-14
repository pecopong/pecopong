var globalparent;

var init = function(){
	var name = document.getElementById('name');

	var button = document.createElement('div');
	mother.appendChild(button);
	button.id='add';
	button.textContent='Add';
	
	var button3 = document.createElement('div');
	mother.appendChild(button3);
	button3.id='remove';
	button3.textContent='Remove All';
	
	var parent = document.createElement('div');
	document.body.appendChild(parent);
	globalparent=parent;
	
	button.onclick=function(){
		var value = name.value;
		if(value==''){
			alert('put some texts in!')
		} else{
		addDiv(value);
		name.value='';
		}
	};
	
	button3.onclick=function(){
		while (globalparent.hasChildNodes()) {
  		 	 globalparent.removeChild(globalparent.lastChild);
		};	
	};
	
};

var addDiv = function(text){
	var div = document.createElement('div');
	globalparent.appendChild(div);
	div.id='list';
	div.textContent='* '+text.toString();
	
	var cancel = document.createElement('div');
	div.appendChild(cancel);
	cancel.id='cancel';
	cancel.textContent='x';
	
	cancel.onclick=function(){
		 globalparent.removeChild(cancel.parentNode);
	};
};


window.onload=init;
<<<<<<< HEAD
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
=======
var test = ['나는','에코를','원한다'];
var i = 0;
var a =''; 
var xc = '';
var yc = '';
var xco = '';
var yco = '';
var tts = new GoogleTTS('ko-KR');

myVolume = 1;

var touch = function(){
    var el = document.createElement('div');
    el.innerHTML = test[i];
    el.className = i;
    
    if(i<test.length){
       
        document.body.appendChild(el);
    }
    else{
        console.log('The End');
    }
    xco = xc+'px';
    yco = yc+'px';
    
    
    a ='.'+i.toString();
    
    $(a).css({'position':'absolute',
              'font-size':'30px',
              'left':xco,
              'top':yco,
              'height':'30px',
              'width':'30px'
             })
        .fadeOut(8000);
    
    
         tts.play(test[i]);
     
      
       i++
}


$(document).click(function(e){
     xc = e.pageX;
     yc = e.pageY;
     
     touch();

})
>>>>>>> 2dbdbd5318198bf204a06ef401256610233b9705

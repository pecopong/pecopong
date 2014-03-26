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

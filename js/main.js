var originaltext =['Cinzel', 'Coda Caption', 'Share Tech Mono', 'Roboto', 'Ruluko', 'Balthazar', 'Tauri', 'Aclonica', 'Playfair Display SC', 'Gilda Display', 'Exo', 'Port Lligat Slab', 'Orbitron', 'Economica', 'Marko One', 'Prata', 'Alike', 'Nunito', 'Aldrich', 'Allerta', 'Old Standard TT', 'Arapey', 'Source Code Pro', 'Englebert', 'Inder', 'Quantico', 'Share Tech', 'Tienne', 'Roboto Slab', 'Signika', 'Merriweather', 'Lustria', 'Neuton', 'Acme', 'Radley', 'Days One', 'Russo One', 'Dosis', 'Adamina', 'Holtwood One SC', 'Spinnaker', 'Archivo Narrow', 'Glegoo', 'Beunard', 'Maven Pro', 'Raleway', 'Gabriela', 'Roboto Condensed', 'Voltaire', 'Mate', 'Candal', 'Oranienbaum', 'Montaga', 'Sorts Mill Goudy', 'Cabin Condensed', 'Noto Sans', 'Josefin Slab', 'Andada', 'Kameron', 'Rokkitt', 'Caudex', 'Mako', 'Pathway Gothic One', 'Noto Serif', 'Fauna One', 'Capriola', 'Habibi', 'Stoke', 'Federo', 'Dorsa', 'Quattrocento', 'Varela Round', 'Trykker', 'PT Serif', 'Lato', 'Advent Pro', 'Quando', 'Linden Hill', 'Nova Mono', 'IM Fell Great Primer', 'Cambo', 'Source Sans Pro', 'Quicksand', 'EB Garamond', 'IM Fell English SC'];
var text;
var ns = "http://www.w3.org/2000/svg";
var svg;
var y=1;
var listarr = [];
var listarrCap = [];
var count=0;
var input;
var life=3;
var lose = false;
var score=0;

var init = function(){
    
   svg=document.querySelector('svg');
   input = document.querySelector('input');
   for(var i=0; i<originaltext.length; i++){
       listarr[i] = originaltext[Math.floor(Math.random()*originaltext.length)];
       listarrCap[i]=listarr[i].toUpperCase();
   };
      
   anim();
   
   input.onkeydown = function(e){
       if(e.keyCode===13){
         var x = input.value.toUpperCase();
         var y = listarrCap.indexOf(x);
         var z = document.getElementById('arr'+y.toString());
         if(typeof listarrCap[y]!=="undefined") {
             listarr[y]='GOOD';
             z.style['fill']='black';
             score++;
             document.getElementById('score').textContent='Score: '+score;
         }
         input.value='';
       };
    };
};

window.onload = init;

var createText = function(x, y, c, d){
    text = document.createElementNS(ns, 'text');
    text.setAttribute('x',x);
    text.setAttribute('y',y);
    text.setAttribute('fill','white');
    text.textContent = c;
    text.id = d;
    svg.appendChild(text);
};

var anim = function(){
    var x = 100;
    y++;
    if(y%x===0){
        document.body.style['background-color']='black';
        createText(450*Math.random(), 10000-y, listarr[count], 'arr'+count);
        document.getElementById('arr'+count).style['font-family']=listarr[count];
        count++;
    };
    if(y>=500 && y%x===90){
        if(listarr[count-5]=='GOOD'){
            document.getElementById('arr'+(count-5).toString()).remove();
        } else {
            document.getElementById('arr'+(count-5).toString()).remove();
            life--;
            document.getElementById('life'+life).style['background-color']='white';
            document.body.style['background-color']='red';
            if(life===0) {
                lose=true;
                ending();
            };
        };
    };
    svg.style['margin-top']=-10000+y;
    if(lose===false) requestAnimationFrame(anim);
};

var ending = function(){
    var box = document.createElement('div');
    document.body.appendChild(box);
    box.id='box';
    if(score<10) {
        var grade = 'a poor';
    }else if(score<20) {
        var grade = 'an average';
    }else if(score<30) {
        var grade = 'a good';
    }else if(score<40) {
        var grade = 'a great';
    }else{
        var grade = 'the best';
    }
    box.innerHTML = "Your Score is "+score+"<br>You're "+grade+" typographer!";
}
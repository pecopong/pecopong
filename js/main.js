var s;
var v;
var ns = 'http://www.w3.org/2000/svg';

var rand = function(min, max) {
    return min + Math.random() * (max - min);    
};

var makeHSLA = function(h, s, l, a) {
    return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';  
};

var randHSLA = function() {
    return makeHSLA(Math.floor(rand(0, 80)), Math.floor(rand(100, 100)), Math.floor(rand(50, 50)), 0.5);    
};

var createRect = function(cx, cy, r) {
    var c = document.createElementNS(ns, 'circle');
    c.setAttribute('cx', cx);
    c.setAttribute('cy', cy);
    c.setAttribute('r', r);
    c.setAttribute('fill', randHSLA());
    s.appendChild(c);
};

var letterCor = function(x, a1, a2, a3, b1, b2, b3, c1, c2, c3, d1, d2, d3, e1, e2, e3){
  if (a1) createRect(x+0,0+100,rand(7,9));
  if (a2) createRect(x+10,0+100,rand(7,9));
  if (a3) createRect(x+20,0+100,rand(7,9));
  if (b1) createRect(x+0,10+100,rand(7,9));
  if (b2) createRect(x+10,10+100,rand(7,9));
  if (b3) createRect(x+20,10+100,rand(7,9));
  if (c1) createRect(x+0,20+100,rand(7,9));
  if (c2) createRect(x+10,20+100,rand(7,9));
  if (c3) createRect(x+20,20+100,rand(7,9));
  if (d1) createRect(x+0,30+100,rand(7,9));
  if (d2) createRect(x+10,30+100,rand(7,9));
  if (d3) createRect(x+20,30+100,rand(7,9));
  if (e1) createRect(x+0,40+100,rand(7,9));
  if (e2) createRect(x+10,40+100,rand(7,9));
  if (e3) createRect(x+20,40+100,rand(7,9));

}

var letterDefine = function(input,x){
  if (input=='a') letterCor(x,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1);
  if (input=='b') letterCor(x,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1);
  if (input=='c') letterCor(x,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1);
  if (input=='d') letterCor(x,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0);
  if (input=='e') letterCor(x,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1);
  if (input=='f') letterCor(x,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0);
  if (input=='g') letterCor(x,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1);
  if (input=='h') letterCor(x,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1);
  if (input=='i') letterCor(x,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1);
  if (input=='j') letterCor(x,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1);
  if (input=='k') letterCor(x,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1);
  if (input=='l') letterCor(x,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1);
  if (input=='m') letterCor(x,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1);
  if (input=='n') letterCor(x,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1);
  if (input=='o') letterCor(x,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0);
  if (input=='p') letterCor(x,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0);
  if (input=='q') letterCor(x,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1);
  if (input=='r') letterCor(x,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1);
  if (input=='s') letterCor(x,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1);
  if (input=='t') letterCor(x,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0);
  if (input=='u') letterCor(x,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1);
  if (input=='v') letterCor(x,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0);
  if (input=='w') letterCor(x,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1);
  if (input=='x') letterCor(x,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1);
  if (input=='y') letterCor(x,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0);
  if (input=='z') letterCor(x,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1);
  if (input=='?') letterCor(x,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0);
  if (input==' ') letterCor(x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

}

function displayResult(){
     s = document.querySelector('#letter');
     document.body.appendChild(s);
     if(s.hasChildNodes()) s.removeChild(s.lastChild);
var x=document.getElementById("text").value;
for(var i=0; i<x.length; i++ ){

    var xx = x.substring(i,i+1);
var checkenglish = /^[a-z][a-z\d]*$/i.test(xx); 
if (checkenglish){
      var xxx = xx.toLowerCase();
          letterDefine(xxx,i*40+100);
} else if(xx==' '){
  letterDefine(xx,i*40+100);
}else{
           letterDefine('?',i*40+100);
}
}
}

var init = function() {
};

window.onload = function() {
    init();    
};
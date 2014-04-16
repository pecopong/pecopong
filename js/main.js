var list = ['green', 'yellow', 'pink', 'orange', 'green', 'blue'];
var ns = "http://www.w3.org/2000/svg";
var svg;

var init = function(){
    svg = document.createElementNS(ns,'svg');
    document.body.appendChild(svg);
    
    for(i=0; i<list.length; i++){
         ranText(Math.random()*300,Math.random()*300);
    }
    
};

window.onload = init;

var ranWord = function(){
    var num = Math.floor(Math.random()*list.length);
    return list[num];
}

var ranText = function(x,y){
    var t = document.createElementNS(ns, 'text');
    var ran = ranWord();
    t.textContent=ran;
    t.setAttribute('x', x);
    t.setAttribute('y', y);
    t.setAttribute('fill',ran);
    svg.appendChild(t);
}
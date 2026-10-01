(function(){var h=document.querySelector('header'),b=document.querySelector('.menu'),n=document.getElementById('nav');if(!h)return;
function sc(){h.classList.toggle('sc',scrollY>8)}addEventListener('scroll',sc,{passive:true});sc();
if(!b||!n)return;function set(o){n.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.textContent=o?'Close':'Menu';document.body.style.overflow=o?'hidden':''}
b.addEventListener('click',function(){set(!n.classList.contains('open'))});n.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
addEventListener('keydown',function(e){if(e.key==='Escape'&&n.classList.contains('open')){set(false);b.focus()}});
matchMedia('(min-width:821px)').addEventListener('change',function(){set(false)})})();

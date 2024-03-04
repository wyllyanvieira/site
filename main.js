// Header shadow scroll
const header = document.querySelector('header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
   if(window.scrollY >= navHeight){
      header.classList.add('scroll')
   }else{
      header.classList.remove('scroll')
   }
})
// Menu hambuguer
const menuBtn = document.querySelector('#menu')
const navLinks = document.querySelector('#nav-links')
menuBtn.addEventListener('click', menuToggle)

//TEXTO MUDANDO 

var TxtType = function(el, toRotate, period) {
   this.toRotate = toRotate;
   this.el = el;
   this.loopNum = 0;
   this.period = parseInt(period, 10) || 500;
   this.txt = '';
   this.tick();
   this.isDeleting = false;
};

TxtType.prototype.tick = function() {
   var i = this.loopNum % this.toRotate.length;
   var fullTxt = this.toRotate[i];

   if (this.isDeleting) {
   this.txt = fullTxt.substring(0, this.txt.length - 1);
   } else {
   this.txt = fullTxt.substring(0, this.txt.length + 1);
   }

   this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

   var that = this;
   var delta = 200 - Math.random() * 100;

   if (this.isDeleting) { delta /= 2; }

   if (!this.isDeleting && this.txt === fullTxt) {
   delta = this.period;
   this.isDeleting = true;
   } else if (this.isDeleting && this.txt === '') {
   this.isDeleting = false;
   this.loopNum++;
   delta = 500;
   }

   setTimeout(function() {
   that.tick();
   }, delta);
};

window.onload = function() {
   var elements = document.getElementsByClassName('typewrite');
   for (var i=0; i<elements.length; i++) {
       var toRotate = elements[i].getAttribute('data-type');
       var period = elements[i].getAttribute('data-period');
       if (toRotate) {
         new TxtType(elements[i], JSON.parse(toRotate), period);
       }
   }
   // INJECT CSS
   var css = document.createElement("style");
   css.type = "text/css";
   css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
   document.body.appendChild(css);
};


function menuToggle(){
   menuBtn.classList.toggle('active')
   menuBtn.classList.toggle('bx-x')
   navLinks.classList.toggle('active')
   header.classList.toggle('active')
}

// CV
const cvbtn = document.querySelector('.cv')
const cvLink = './assets/Wyllyam_Vieira_Curriculo.pdf'
cvbtn.setAttribute("href", cvLink)

// scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
      });
   });
});


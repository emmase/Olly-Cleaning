var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?70939';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
"enabled":true,
"chatButtonSetting":{
  "backgroundColor":"#4dc247",
  "ctaText":"Message Us",
  "borderRadius":"25",
  "marginLeft":"0",
  "marginBottom":"50",
  "marginRight":"50",
  "position":"right"
},
"brandSetting":{
  "brandName":"Olly Cleaning Services",
  "brandSubTitle":"Typically replies within 10 minutes",
  "brandImg":"Images/logo.png",
  "welcomeText":"Hi there!\nWelcome, how can we serve you today?",
  "messageText":"Hello, ",
  "backgroundColor":"#0a5f54",
  "ctaText":"Start Chat",
  "borderRadius":"25",
  "autoShow":false,
  "phoneNumber":"256771834909"
}
};
s.onload = function() {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);

const bar =document.getElementById('bar');
const nav =document.getElementById('navbar');
const close =document.getElementById('close');

if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

const header = document.querySelector('#header');
const sectionOne = document.querySelector('#hero');


const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function(
  entries, 
  sectionOneObserver
  ){
    entries.forEach(entry =>{
      if (!entry.isIntersecting){
        document.querySelector('#header').classList.add('.nav-scrolled');
      }
    })
}, sectionOneOptions);
sectionOneObserver.observe(sectionOne);

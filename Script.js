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
  "welcomeText":"Hi there!\nWelcome, what can we clean for you today?",
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

const faders = document.querySelectorAll('.fade-in');

const appearOptions ={
  threshold: 1,
  rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
){
  entries.forEach(entry =>{
    if (!entry.isIntersecting){
      return;
    }else{
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
 appearOptions);

 faders.forEach(fader =>{
  appearOnScroll.observe(fader);
 });
 
 {"@context";"https://schema.org","@graph";[{"@type":"WebSite","@id":"https://ollycleaningservices.com/#website","url":"https://ollycleaningservices.com/","name":"Olly Cleaning Services","description":"Professional Cleaning Services in Greater Kampala Metropolitan Area","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://ollycleaningservices.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-GB"},{"@type":"WebPage","@id":"https://ollycleaningservices.com/#webpage","url":"https://ollycleaningservices.com/","name":"Professional Cleaning Kampala | Commercial Cleaning Services | Swift","isPartOf":{"@id":"https://ollycleaningservices.com/#website"},"datePublished":"2018-05-04T10:54:00+00:00","dateModified":"2021-09-14T22:58:20+00:00","description":"Olly Cleaning Services is an oasis of professional cleaning and fumigation services in the Greater Kampala Metropolitan Area. Reach out for best the cleaning experience.","breadcrumb":{"@id":"https://ollycleaningservices.com/#breadcrumb"},"inLanguage":"en-GB","potentialAction":[{"@type":"ReadAction","target":["https://ollycleaningservices.com/"]}]},{"@type":"BreadcrumbList","@id":"https://ollycleaningservices.com/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]}]}

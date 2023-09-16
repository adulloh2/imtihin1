const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})


let telegram_bot_id = "6243270315:AAHIWu64G4jafCLI-St_drgPicxJ70pbLDo"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
let chat_id = 6034632659; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
let email, text, message;
function sendtelegram() {
    email = document.getElementById("email").value;
    text = document.getElementById("text").value;
    message = document.getElementById("message").value;
    message = "email: " + email + "\ntext: " + text + "\nmessage: " + message ;
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        
    });
    document.getElementById("email").value = "";
    document.getElementById("text").value = "";
    document.getElementById("message").value = "";
    return false;
};
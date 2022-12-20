const captcha = document.getElementById('captcha'),
    captchaResetBtn = document.querySelector('.captcha-reset-btn'),
    captchaInput = document.getElementById('captcha-input'),
    captchaSubmitBtn = document.querySelector('.captcha-submit-btn');

var captchaValue;

function init() {
    generateCaptcha();
}

init();

function generateCaptcha() {
    captchaValue = (Math.random() + 1).toString(36).substring(2, 8);
    captcha.innerHTML = captchaValue;

    captchaInput.value = '';
    captchaInput.placeholder = '';

    console.log(captchaValue);
}

captchaResetBtn.addEventListener('click', () => {
    generateCaptcha();
});

function checkCaptcha() {
    return (captchaInput.value === captchaValue) ? true : false;
}

captchaSubmitBtn.addEventListener('click', () => {    
    if (checkCaptcha()) {
        captchaInput.placeholder = 'Nice, you are not a robot!';
        captchaInput.classList.remove('captcha-input-denied');
        captchaInput.classList.add('captcha-input-accesed');

        setTimeout(() => {generateCaptcha()}, 3000); // 'this' problem solution
    } else {
        captchaInput.placeholder = 'Wrong captcha. Try again!';
        captchaInput.classList.remove('captcha-input-accesed');
        captchaInput.classList.add('captcha-input-denied');
    }

    captchaInput.value = '';
});
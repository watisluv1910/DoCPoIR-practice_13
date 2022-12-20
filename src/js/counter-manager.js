const counter = document.querySelector('.counter');

const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    if (c < target){
        counter.innerText = `${Math.ceil(c + 2)}`;
        setTimeout(updateCounter, 1);
    }
    else{
        counter.innerText = target;
    }
}

updateCounter();
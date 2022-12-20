const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');

const steps = document.querySelectorAll('.step');
const form_steps = document.querySelectorAll('.form-step');

let activeStep = 1;

nextBtn.addEventListener('click', () => {
    activeStep++;
    if (activeStep > steps.length) {
        activeStep = steps.length;
    }
    update();
});

prevBtn.addEventListener('click', () => {
    activeStep--;
    if (activeStep < 1) {
        activeStep = 1;
    }
    update();
});

function update() {

    // Toggle .active class for each list item
    steps.forEach((step, idx) => {
        if (idx == activeStep - 1) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }

        // Toggle .completed class for each list item
        if (idx < activeStep - 1) {
            step.classList.add('completed');
        } else {
            step.classList.remove('completed');
        }
    });

    form_steps.forEach((form_step, idx) => {
        if (idx === activeStep - 1) {
            form_step.classList.add('active');
        } else {
            form_step.classList.remove('active');
        }
    });

    // Enable or disable next and prev buttons
    if (activeStep === 1) {
        prevBtn.disabled = true;
    } else if (activeStep === steps.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

update();

// Send form data to  by ckicking on btn-submit button
const btn_submit = document.querySelector('.btn-submit');
const form = document.querySelector('form');

btn_submit.addEventListener('click', (e) => {
    e.preventDefault();
    form.submit();
});

// Replace placeholder text with notification if field is empty when user clicks in btn-submit button
const inputs = document.querySelectorAll('input');
const textareas = document.querySelectorAll('textarea');

btn_submit.addEventListener('click', () => {
    inputs.forEach((input) => {
        if (input.value === '') {
            input.placeholder = 'This field is required';
            input.classList.add('access-error');
        }
    });

    textareas.forEach((textarea) => {
        if (textarea.value === '') {
            textarea.placeholder = 'This field is required';
            textarea.classList.add('access-error');
        }
    });
});
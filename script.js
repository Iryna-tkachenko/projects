const prices = {
    'landing-page': {
        pm: 700,
        design: 600,
        developer: 1200,
        qa: 500
    },
    'online-store': {
        pm: 1200,
        design: 900,
        developer: 2500,
        qa: 800,
    },
    'web-application': {
        pm: 2000,
        design:1100,
        developer:3000,
        qa: 1000,
    },
    'mobile-application': {
        pm: 3000,
        design: 1500,
        developer: 4000,
        qa: 1300,
    }
};


function getFormValues() {
    const websiteTypeElement = document.querySelector("#project-type");

    const pmEl = document.querySelector('#project-managment'),
        designEl = document.querySelector('#design'),
        developmentEl = document.querySelector('#development'),
        qaEl = document.querySelector('#qa');

    return {
        websiteType: websiteTypeElement.value,
        pm: pmEl.checked,
        design: designEl.checked,
        developer: developmentEl.checked,
        qa: qaEl.checked
    };

}

function calculatePrice() {
    const values = getFormValues();
    const workType = prices[values.websiteType];

    let totalPrice = 0;

    if (values.pm) {
        totalPrice = workType.pm;
    }

    if (values.design) {
        totalPrice =totalPrice + workType.design;
    }
    
    if (values.developer) {
        totalPrice = totalPrice + workType.developer;
    }

    if (values.qa) {
        totalPrice +=workType.qa;
    }

    const totalPriceEl = document.querySelector('#total-price');
    totalPriceEl.textContent = totalPrice;
}


const formEl = document.querySelector("#project-price-form");
const emailModal = document.querySelector('#email-modal');
const successModal = document.querySelector('#success-modal');
const closeModalBtn = document.querySelectorAll(".modal-close-btn");
const modalFormEl= document.querySelector('#modal-container-form');

calculatePrice();

formEl.addEventListener("change", calculatePrice);

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    emailModal.classList.add("modal-active");
});

closeModalBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const inputContainer = document.querySelector("#email-input-container");
        inputContainer.classList.remove('email-input-container-error');
    
        emailModal.classList.remove("modal-active");
        successModal.classList.remove("modal-active");
    });
});

modalFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const userEmailInput = document.querySelector('#user-email');

    if (userEmailInput.value) {
        emailModal.classList.remove("modal-active");
        successModal.classList.add("modal-active");
    } 

    const inputContainer = document.querySelector("#email-input-container");

    inputContainer.classList.add('email-input-container-error');

});



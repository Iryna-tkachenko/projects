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


const calcFormEl = document.querySelector("#project-price-form");

function getFormValues() {
    const websiteTypeEl = document.querySelector("#project-type");
    const pmEl = document.querySelector("#project-managment");
    const designEl = document.querySelector("#design");
    const developmentEl = document.querySelector("#development");
    const qaEl = document.querySelector("#qa");

    // console.log(websiteTypeEl.value);

    return {
        websiteType: websiteTypeEl.value,
        pm: pmEl.checked,
        design: designEl.checked,
        developer: developmentEl.checked,
        qa: qaEl.checked
    };


}

function calculatePrice() {
    const values = getFormValues();
    const totalPriceEl = document.querySelector("#total-price");
    const workType = prices[values.websiteType];
    let totalPrice = 0;

    if (values.pm) {
        totalPrice = workType.pm;
    }

    if (values.design) {
        totalPrice += workType.design;
    }

    if (values.developer) {
        totalPrice += workType.developer;
    }

    if (values.qa) {
        totalPrice += workType.qa;
    }

    totalPriceEl.textContent = totalPrice;

}

calcFormEl.addEventListener("change", calculatePrice);





////

function myFirstApp(name, age) {
    console.log(`Меня зовут ${name}`);

    function showSkills() {
        let skills = ['html', 'css', 'js'];

        for (let i; i<skills.length; i++) {
            console.log(`Я знаю ${i}`);
        }
    }
    showSkills();

    function checkAge() {
        if (age > 18) {
            console.log("все хорошо!");
        } else {
            console.log("fail");
        }
    }
    checkAge();

    function calcPow(num) {
        let result = num;

        result *= num;
        
        console.log(result);
    }

    calcPow(age);
}

myFirstApp("Iryna", 36);
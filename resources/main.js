let appendError = (id, errMsg) => {
    let element = document.getElementById(id)
    element.innerHTML = "   *" + errMsg
    element.classList.remove('correct')
}

let appendCorrect = (id) => {
    let element = document.getElementById(id)
    element.innerHTML = "   *"
    element.classList.add('correct')
}


let validateForm = () => {
    console.log("validating!");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let occupation = document.getElementById("occupation").value;
    let gender = document.contactForm.gender.value;
    let country = document.contactForm.country.value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let message = document.getElementById("message").value;

    let nameErr = emailErr = ageErr = occupationErr = genderErr = countryErr = subjectErr = phoneErr = addressErr = messageErr = false;
    console.log(name)
    
    // Validate name
    if (name.length < 2) {
        appendError("nameErr", "Name should not be empty or too short (At least 2 alphabets)")
        nameErr = true;
    }
    else {
        let regex = /^[a-zA-Z\s]+$/;                
        if(!regex.test(name)) {
            appendError("nameErr", "Name should only consist of alphabet");
            nameErr = true;
        } 
        else {
            appendCorrect("nameErr", "");
        }
    }


    // Validate email
    if (email == "") {
        appendError("emailErr", "Email should not be empty");
        emailErr = true;
    }
    else {
        let regex = /^\S+@\S+\.\S+$/;
        if (!regex.test(email)) {
            appendError("emailErr", "Invalid email, please enter again");
            emailErr = true;
        }
        else {
            appendCorrect("emailErr", "");
        }
    }


    // Validate age
    if (age == "") {
        appendError("ageErr", "Age should not be empty");
        ageErr = true;
    }
    else {
        let regex = /^(100|[1-9]?[0-9])$/;
        if (!regex.test(age)) {
            appendError("ageErr", "Invalid age, please enter age between 0-100");
            ageErr = true;
        }
        else {
            appendCorrect("ageErr", "");
        }
    }

    // Validate occupation
    if (occupation.length < 2) {
        appendError("occupationErr", "Occupation should not be empty or too short (At least 2 alphabets)")
        occupationErr = true;
    }
    else {
        let regex = /^[a-zA-Z\s]+$/;
        if(!regex.test(occupation)) {
            appendError("occupationErr", "Occupation should only consist of alphabet");
            occupationErr = true;
        } 
        else {
            appendCorrect("occupationErr", "");
        }
    }                 
    
    // Validate gender
    if(gender == "") {
        appendError("genderErr", "Please select your gender");
        genderErr = true;
    } 
    else {
        let genderList = ["male", "female"];
        if(!genderList.includes(gender)){
            appendError("genderErr", "Invalid gender, please select a gender in the given selection");
            genderErr = true;
        }
        else{
            appendCorrect("genderErr", "");
        }
    }

    // Validate country
    if(country == "Select") {
        appendError("countryErr", "Please select your country");
        countryErr = true;
    } 
    else {
        let countryList = ["Malaysia", "Singapore", "Thailand", "Indonesia"];
        if(!countryList.includes(country)){
            appendError("countryErr", "Invalid country, please select a country in the given selection");
            countryErr = true;
        }
        else{
            appendCorrect("countryErr", "");
        }
    }

    // Validate subject
    if (subject.length < 3) {
        appendError("subjectErr", "Subject should not be empty or too short (At least 3 alphanumerics)")
        subjectErr = true;
    }
    else {
        appendCorrect("subjectErr", "");
    }


    if(phone == "") {
        appendError("phoneErr", "Phone number should not be empty");
        phoneErr = true;
    } 
    else {
        let regex = /^(?=.*\d).{9,12}$/;
        if(!regex.test(phone)) {
            appendError("phoneErr", "Invalid phone number, please enter phone number range between 9 to 12 digits");
            phoneErr = true;
        } 
        else{
            appendCorrect("phoneErr", "");
        }
    }

    if (address.length < 12) {
        appendError("addressErr", "Address should not be empty or too short (At least 12 alphanumerics)")
        addressErr = true;
    }
    else {
        appendCorrect("addressErr", "");
    }


    if (message.length < 5) {
        appendError("messageErr", "message should not be empty or too short (At least 5 alphanumerics)")
        messageErr = true;
    }
    else {
        appendCorrect("messageErr", "");
    }
    

    if (nameErr || emailErr || ageErr || occupationErr || genderErr || countryErr || subjectErr || phoneErr || addressErr || messageErr) return false;

}

let ready = callback => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

let toggleActive = false;

ready(() => {

    let resetScaling = () => {
        r.style.setProperty('--scale-about', "10%");
        r.style.setProperty('--scale-skills', "10%");
        r.style.setProperty('--scale-hobbies', "10%");
        r.style.setProperty('--scale-recent-works', "10%");
        r.style.setProperty('--scale-contact-me', "10%");
    }

    let resetActive = (element) => {
        document.getElementById("home-tag").parentElement.classList.remove('active');
        document.getElementById("about-tag").parentElement.classList.remove('active');
        document.getElementById("skills-tag").parentElement.classList.remove('active');
        document.getElementById("hobbies-tag").parentElement.classList.remove('active');
        document.getElementById("recent-works-tag").parentElement.classList.remove('active');
        document.getElementById("contact-me-tag").parentElement.classList.remove('active');
        if(element.id == "about-tag2")  {document.getElementById("about-tag").parentElement.classList.add('active'); return;}
        element.parentElement.classList.add('active');
    }

    let r = document.querySelector(':root');

    setTimeout(() => {
        resetScaling()
    }, 100)


    // Set mouseover events
    document.getElementById("about").onmouseover = () => r.style.setProperty('--scale-about', "30%")
    document.getElementById("skills").onmouseover = () => r.style.setProperty('--scale-skills', "30%")
    document.getElementById("hobbies").onmouseover = () => r.style.setProperty('--scale-hobbies', "30%")
    document.getElementById("recent-works").onmouseover = () => r.style.setProperty('--scale-recent-works', "30%")
    document.getElementById("contact-me").onmouseover = () => r.style.setProperty('--scale-contact-me', "30%")

    // Set mouseleave events
    document.getElementById("about").onmouseleave = () => r.style.setProperty('--scale-about', "10%")
    document.getElementById("skills").onmouseleave = () => r.style.setProperty('--scale-skills', "10%")
    document.getElementById("hobbies").onmouseleave = () => r.style.setProperty('--scale-hobbies', "10%")
    document.getElementById("recent-works").onmouseleave = () => r.style.setProperty('--scale-recent-works', "10%")
    document.getElementById("contact-me").onmouseleave = () => r.style.setProperty('--scale-contact-me', "10%")

    // Set tags onclick events
    document.getElementById("home-tag").onclick = (e) => { resetActive(e.target); resetScaling();}
    document.getElementById("about-tag").onclick = (e) => { resetActive(e.target); resetScaling(); document.getElementById("about").onmouseover() }
    document.getElementById("about-tag2").onclick = (e) => { resetActive(e.target); resetScaling(); document.getElementById("about").onmouseover() }
    document.getElementById("skills-tag").onclick = (e) => { resetActive(e.target); resetScaling(); document.getElementById("skills").onmouseover() }
    document.getElementById("hobbies-tag").onclick = (e) => { resetActive(e.target); resetScaling(); document.getElementById("hobbies").onmouseover() }
    document.getElementById("recent-works-tag").onclick = (e) => { resetActive(e.target); resetScaling(); document.getElementById("recent-works").onmouseover() }
    document.getElementById("contact-me-tag").onclick = (e) => { resetActive(e.target); resetScaling(); document.getElementById("contact-me").onmouseover() }


    let typeWriter = (msg, msg2, speed, index, index2, element, element2) => {
        if (index < msg.length) {
            element.textContent += msg[index];
            setTimeout(() => typeWriter(msg, msg2, speed, ++index, index2, element, element2), speed);
        }
        else {
            if (index2 < msg2.length) {
                element2.textContent += msg2[index2];
                setTimeout(() => typeWriter(msg, msg2, speed, index, ++index2, element, element2), speed);
            }
        }
    }

    let welcomeMsg = "Welcome to my page, my name is "
    let myName = "Yap Chee Haw"
    typeWriter(welcomeMsg, myName, 70, 0, 0, document.querySelector('#welcomeMsg'), document.querySelector('#myName'));

    let toggleSidebar = () => {
        let navElement = document.querySelector('.sidebar')
        let toggleBtn = document.querySelector('.mobile-nav-toggle')

        if (window.innerWidth < 1200) {
            if (!toggleActive) {
                navElement.classList.remove('mobile-nav-toggle-active');
                toggleBtn.classList.add('fa-bars')
                toggleBtn.classList.remove('fa-times')
            } else {
                navElement.classList.add('mobile-nav-toggle-active');
                toggleBtn.classList.remove('fa-bars')
                toggleBtn.classList.add('fa-times')
            }
        }
    }

    document.querySelector('.mobile-nav-toggle').onclick = () => {
        toggleActive = !toggleActive;
        toggleSidebar();
    }

    window.addEventListener('resize', toggleSidebar);
})


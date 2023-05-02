/*------------- MENU START -------------*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*------------- MENU SHOW -------------*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('showMenu')
    })
}

/*------------- MENU HIDDEN -------------*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('showMenu')
    })
}
/*------------- MENU END -------------*/


/*------------- REMOVE MENU MOBILE START -------------*/
const navLink = document.querySelectorAll('.navLink')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each navLink, we remove the showMenu class
    navMenu.classList.remove('showMenu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*------------- REMOVE MENU MOBILE END -------------*/


/*------------- ADD BLUR TO HEADER START -------------*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blurHeader class to the header tag
    this.scrollY >= 50 ? header.classList.add('blurHeader')
        : header.classList.remove('blurHeader')
}
window.addEventListener('scroll', blurHeader)
/*------------- ADD BLUR TO HEADER END -------------*/


/*------------- EMAIL JS START -------------*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (event) => {
    event.preventDefault();

    // serviceID - templateID - #form - publicKey

    emailjs.sendForm('service_856k0pc', 'template_xkqxc8l', '#contact-form', 'e2cRDwnATvWP3gUYu')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            contactForm.reset()

        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ⛔'
        })

}

contactForm.addEventListener('submit', sendEmail);
/*------------- EMAIL JS END -------------*/


/*------------- SHOW SCROLL UP START -------------*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*------------- SHOW SCROLL UP END -------------*/


/*------------- SCROLL SECTIONS ACTIVE LINK START -------------*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.navMenu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('activeLink')
        } else {
            sectionsClass.classList.remove('activeLink')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*------------- SCROLL SECTIONS ACTIVE END -------------*/


/*------------- SCROLL REVEAL ANIMATION START -------------*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true // Animations repeat
})

sr.reveal(`.homeData, .homeSocial, .contactContainer, .footerContainer`)
sr.reveal(`.homeImage`, { origin: 'bottom' })

sr.reveal(`.aboutData, .skillsData`, { origin: 'left' })
sr.reveal(`.aboutImage, .skillsContent`, { origin: 'right' })

sr.reveal(`.servicesCard, .projectsCard`, { interval: 100 })
/*------------- SCROLL REVEAL ANIMATION END-------------*/
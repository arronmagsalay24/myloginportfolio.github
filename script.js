// --- Typing effect ---
const typingText = document.querySelector('.typing');
const texts = ["Inspire Web Developer", "Inspire Frontend Developer", "Inspire Backend Developer"]; // mga words na ipapakita
let textIndex = 0; // index sa array
let charIndex = 0; // index sa bawat character

function type() {
    const currentText = texts[textIndex];
    typingText.textContent = currentText.slice(0, charIndex);
    charIndex++;

    if (charIndex > currentText.length) {
        // hintayin ng kaunti bago mag-erase
        setTimeout(() => {
            erase();
        }, 1000); // 1 second pause
        clearInterval(typingInterval);
    }
}

function erase() {
    const currentText = texts[textIndex];
    charIndex--;
    typingText.textContent = currentText.slice(0, charIndex);

    if (charIndex === 0) {
        // punta sa next word
        textIndex = (textIndex + 1) % texts.length;
        typingInterval = setInterval(type, 200);
    } else {
        setTimeout(erase, 100); // erase speed
    }
}

let typingInterval = setInterval(type, 200);



// --- Ipakita ang service cards kapag nag-scroll ---
const serviceCards = document.querySelectorAll('.service-card');

function revealServices() {
    const windowHeight = window.innerHeight;
    serviceCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < windowHeight - 100){
            card.classList.add('visible'); // mag-a-appear
        }
    });
}

window.addEventListener('scroll', revealServices);



// --- Animate Skills ---
const progressBars = document.querySelectorAll('.progress');

function animateSkills() {
    const skillsSection = document.getElementById('skills');
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.85;

    if (sectionTop < triggerPoint) {
        progressBars.forEach(bar => {
            const percent = bar.dataset.percent;
            bar.style.width = percent + '%';
        });
        window.removeEventListener('scroll', animateSkills);
    }
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);



// --- Certificates Modal ---
const certImages = document.querySelectorAll('.certificate-card img');

certImages.forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<img src="${img.src}" alt="${img.alt}">
                       <span class="close">&times;</span>`;
    document.body.appendChild(modal);

    modal.querySelector('.close').onclick = () => modal.remove();
  });
});



// --- Hamburger Menu Toggle (idagdag ito) ---
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('header nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

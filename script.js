
window.addEventListener('scroll', function () {
    const skillsSection = document.querySelector('#skills');
    const skills = document.querySelectorAll('.skill');
    const sectionTop = skillsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight) {
        skills.forEach((skill, index) => {
            skill.style.animation = `slideIn 1s forwards ${index * 0.3}s`; 
        });
    }
});

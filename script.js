// Scroll trigger to animate skills when they are in view
window.addEventListener('scroll', function () {
    const skillsSection = document.querySelector('#skills');
    const skills = document.querySelectorAll('.skill');
    const sectionTop = skillsSection.getBoundingClientRect().top;

    // If the skills section is visible in the viewport, trigger the animation
    if (sectionTop < window.innerHeight) {
        skills.forEach((skill, index) => {
            skill.style.animation = `slideIn 1s forwards ${index * 0.3}s`; // Adjusting delay dynamically
        });
    }
});

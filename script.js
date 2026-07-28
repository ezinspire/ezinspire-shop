```javascript
document.addEventListener("DOMContentLoaded", () => {

    const trigger = document.getElementById("scrollTrigger");
    if(trigger) {
        trigger.addEventListener("click", () => {
            document.getElementById("exhibition").scrollIntoView({ behavior: "smooth" });
        });
    }

    const slides = document.querySelectorAll(".carousel-slide");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    let activeIndex = 0;

    function updateCarousel(targetIndex) {
        slides[activeIndex].classList.remove("active");
        
        if(targetIndex >= slides.length) {
            activeIndex = 0;
        } else if (targetIndex < 0) {
            activeIndex = slides.length - 1;
        } else {
            activeIndex = targetIndex;
        }
        
        slides[activeIndex].classList.add("active");
    }

    if(nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => updateCarousel(activeIndex + 1));
        prevBtn.addEventListener("click", () => updateCarousel(activeIndex - 1));
    }

    setInterval(() => {
        updateCarousel(activeIndex + 1);
    }, 7000);

    let itemCounter = 0;
    const countDisplay = document.getElementById("bagCount");
    const bagTriggers = document.querySelectorAll(".bag-action-trigger");

    bagTriggers.forEach(btn => {
        btn.addEventListener("click", () => {
            itemCounter++;
            if(countDisplay) {
                countDisplay.innerText = itemCounter;
                countDisplay.style.color = "#bfae96";
                setTimeout(() => { countDisplay.style.color = "#f4f3f0"; }, 400);
            }
        });
    });

    let soundState = true;
    const audioBtn = document.getElementById("audioBtn");
    const audioTxt = document.querySelector(".audio-label-text");

    if(audioBtn) {
        audioBtn.addEventListener("click", () => {
            soundState = !soundState;
            audioTxt.innerText = soundState ? "Mute Ambient Vibe" : "Play Ambient Vibe";
            audioTxt.style.color = soundState ? "#f4f3f0" : "#8c8b88";
        });
    }
});

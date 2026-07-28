```javascript
document.addEventListener("DOMContentLoaded", () => {
    
    const exploreBtn = document.getElementById("exploreBtn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", () => {
            const vaultSection = document.getElementById("apothecary-vault");
            if (vaultSection) {
                vaultSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    let bagCount = 0;
    const cartDisplay = document.getElementById("cartCount");
    const purchaseButtons = document.querySelectorAll(".add-to-cart-trigger");

    purchaseButtons.forEach(button => {
        button.addEventListener("click", () => {
            bagCount++;
            if (cartDisplay) {
                cartDisplay.innerText = bagCount;
                // Elegant visual flash confirmation cue
                cartDisplay.style.color = "#d4af37";
                setTimeout(() => {
                    cartDisplay.style.color = "#f9f9fb";
                }, 400);
            }
        });
    });

    let soundscapeActive = false;
    const audioWidget = document.getElementById("audioWidget");
    const labelText = document.querySelector(".audio-status-txt");
    const waveLines = document.querySelectorAll(".wave-line");

    if (audioWidget) {
        audioWidget.addEventListener("click", () => {
            soundscapeActive = !soundscapeActive;
            
            if (soundscapeActive) {
                labelText.innerText = "Sensory Mode / Active";
                labelText.style.color = "#d4af37";
                
                waveLines[0].style.transform = "scaleY(1.8)";
                waveLines[1].style.transform = "scaleY(0.4)";
                waveLines[2].style.transform = "scaleY(1.3)";
            } else {
                labelText.innerText = "Sensory Mode / Off";
                labelText.style.color = "#86868b";
                
                waveLines.forEach(line => {
                    line.style.transform = "scaleY(1)";
                });
            }
        });
    }
});

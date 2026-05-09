document.addEventListener('DOMContentLoaded', () => {

    const brandTitle = document.querySelector('.brand-title');
    if (brandTitle) {
        const text = brandTitle.textContent;
        brandTitle.textContent = ""; 

        const letters = text.split("").map(char => {
            const span = document.createElement("span");
            span.innerText = char === " " ? "\u00A0" : char; 
            span.classList.add("letter");
            brandTitle.appendChild(span);
            return span;
        });

        letters.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add("active");
            }, 30 * index); 
        });
    }

    const elementsToAnimate = [
        document.querySelector('.photo-area'), 
        document.querySelector('.home-title'),
        document.querySelector('.toggle-wrapper'),
        ...document.querySelectorAll('.home-text')
    ];

    elementsToAnimate.forEach((el, index) => {
        if (el) {
            el.classList.add('reveal');
            setTimeout(() => {
                el.classList.add('active');
            }, 150 * (index + 1) + 300);
        }
    });

    const toggleBtn = document.getElementById('toggleAbout');
    const mainIntro = document.getElementById('mainIntro');
    const extraIntro = document.getElementById('extraIntro');

    if (toggleBtn && mainIntro && extraIntro) {
        extraIntro.style.display = 'none';

        toggleBtn.onclick = function() {
            if (mainIntro.style.display !== 'none') {
                mainIntro.style.display = 'none';
                extraIntro.style.display = 'block';
                extraIntro.style.opacity = "0";
                
                setTimeout(() => {
                    extraIntro.style.opacity = "1";
                    extraIntro.style.transition = "opacity 0.5s ease";
                }, 10);

                this.innerHTML = 'Kembali ke awal <span class="arrow-icon" style="display:inline-block; transform:rotate(180deg); transition: 0.3s;">→</span>';
            } else {
                extraIntro.style.display = 'none';
                mainIntro.style.display = 'block';
                mainIntro.style.opacity = "0";

                setTimeout(() => {
                    mainIntro.style.opacity = "1";
                    mainIntro.style.transition = "opacity 0.5s ease";
                }, 10);

                this.innerHTML = 'Tentang saya lebih lanjut <span class="arrow-icon" style="display:inline-block; transform:rotate(0deg); transition: 0.3s;">→</span>';
            }
        };
    }

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (window.location.href.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgFull");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close-modal");

const images = document.querySelectorAll(".img-gallery-item");

images.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; 
        captionText.innerHTML = this.alt; 
    }
});

if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});
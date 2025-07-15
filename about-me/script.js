const openPopupButtons = document.querySelectorAll('[data-popup-target]');
const closePopupButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById("popup-overlay");

overlay.addEventListener('click', () => {
    const popups = document.querySelectorAll('.popup.active');
    popups.forEach(popup => {
        closePopup(popup);
    });
});

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget);
        openPopup(popup);
    });
});

closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest(".popup");
        closePopup(popup);
    });
});

function openPopup(popup) {
    if (popup == null) return;
    popup.classList.add("active");
    overlay.classList.add("active");
}

function closePopup(popup) {
    if (popup == null) return;
    popup.classList.remove("active");
    overlay.classList.remove("active");
}

const myBioLink = document.getElementById("bio-nav-link");
const kwkJourneyLink = document.getElementById("kwk-nav-link");
const closingLink = document.getElementById("closing-nav-link");

myBioLink.addEventListener('click', () => {
    myBioLink.style.fontWeight = "700";
    setTimeout(function(){
    if (myBioLink.style.fontWeight = "700") {
        myBioLink.style.fontWeight = "400";
        }
    }, 1400);
});

kwkJourneyLink.addEventListener('click', () => {
    kwkJourneyLink.style.fontWeight = "700";
    setTimeout(function(){
    if (kwkJourneyLink.style.fontWeight = "700") {
        kwkJourneyLink.style.fontWeight = "400";
        }
    }, 1400);
});

closingLink.addEventListener('click', () => {
    closingLink.style.fontWeight = "700";
    setTimeout(function(){
    if (closingLink.style.fontWeight = "700") {
        closingLink.style.fontWeight = "400";
        }
    }, 1400);
});
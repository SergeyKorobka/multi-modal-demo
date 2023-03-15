const modalBtns = document.querySelectorAll("[data-open-modal]");
const body = document.querySelector("body");

if (modalBtns.length > 0) {
    for (let i = 0; i < modalBtns.length; i += 1) {
        const modalBtn = modalBtns[i];
        modalBtn.addEventListener("click", function (e) {
            const modalName = modalBtn.getAttribute("data-open-modal");
            const currentModal = document.querySelector(`[data-modal="${modalName}"]`);

            modalOpen(currentModal);
        });
    }
}

const modalCloseBtn = document.querySelectorAll("[data-close-modal]");
if (modalCloseBtn.length > 0) {
    for (let i = 0; i < modalCloseBtn.length; i += 1) {
        const closeBtn = modalCloseBtn[i];
        closeBtn.addEventListener("click", function (e) {
            modalClose(closeBtn.closest("[data-modal]"));
        });
    }
}

function modalOpen(currentModal) {
    if (currentModal) {
        currentModal.classList.remove("is-hidden");
    }
}

function modalClose(modalActive) {
    modalActive.classList.add("is-hidden");
}

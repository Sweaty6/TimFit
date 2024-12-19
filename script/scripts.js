// первое применение
document.querySelector('#tel_num').addEventListener(
'click',
async (event) => {
    const code = event.target.innerText;
    await navigator.clipboard.writeText(code);
    alert(`Телефон: ${code} скопирован.`);
}
);


// второе применение
const modalBtn = document.querySelector('[data-modal-btn]');
const hiddenText = document.querySelector('[data-modal-text]')
const closeBtn = document.querySelector('[data-close]');
const modalTrigger = document.querySelectorAll('[data-modal-trigger]');
const modal = document.querySelector('.modal')
const modalDialog = document.querySelector('.modal__dialog');
const modalInput = document.querySelectorAll('[data-inp]')

modalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hiddenText.classList.add('active');
    modalInput.forEach(item => {
        item.value = ''
    })
});

modalTrigger.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('show')
        document.body.style.overflow = 'hidden'
    })
})
function hideModal () {
    modal.classList.remove('show');
    document.body.style.overflow = '';

}

// третье применение
closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideModal();
    hiddenText.classList.remove('active')
    
})

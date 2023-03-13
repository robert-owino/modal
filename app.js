

const openModal = document.querySelector('.btn')
const closeModal = document.querySelector('.close-btn')
const overlay = document.querySelector('.modal-overlay')

openModal.addEventListener('click',function(){
overlay.classList.add('open-modal')
})

closeModal.addEventListener('click', function(){
    overlay.classList.remove('open-modal')
})

document.querySelector('.burger-icon').addEventListener('click', () => {
    const modal = document.querySelector('.modal')
    const modalWrapper = document.querySelector('.modal-wrapper')
    modal.classList.toggle('active')
    modalWrapper.classList.toggle('activeWrapper')
})

document.querySelector('.modal-wrapper').addEventListener('click', () => {
    const modal = document.querySelector('.modal')
    const modalWrapper = document.querySelector('.modal-wrapper')
    modal.classList.toggle('active')
    modalWrapper.classList.toggle('activeWrapper')
})
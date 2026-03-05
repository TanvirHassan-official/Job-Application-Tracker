function deleteCard(button) {
    const card = button.closest('.job-card');
    const parent = card.parentNode;
    parent.removeChild(card);
    
    countUpdate();
    

    if(dashInterview.innerText === '0'){
        const j = document.querySelector('#interview-section .no-card');
        j.classList.remove('hidden');
    }
    
    if(dashRejected.innerText === '0'){
            const j = document.querySelector('#rejected-section .no-card');
            j.classList.remove('hidden');
        } 

    if(dashTotal.innerText === '0'){
            const j = document.querySelector('.no-card');
            j.classList.remove('hidden');
        }
}
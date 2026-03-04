function deleteCard(button) {
    const card = button.closest('.card');
    const parent = card.parentNode;

    const jobContainer = document.getElementById('job-container');

    const status = card.querySelector('.card-status');
    
    if(status.innerText === 'NOT APPLIED'){

        parent.removeChild(card);
        
        countUpdate();
    }
    else if(status.innerText === 'INTERVIEW'){

        parent.removeChild(card);

        const c = card.id;
        const t = document.getElementById(c);

        jobContainer.removeChild(t);

        countUpdate();
    }
    else if(status.innerText === 'REJECTED'){
        parent.removeChild(card);

        const c = card.id;
        const t = document.getElementById(c);

        jobContainer.removeChild(t);

        countUpdate();
    }
}
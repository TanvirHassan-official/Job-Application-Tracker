
//dashboard count
const dashTotal = document.querySelector('#dashboard .card:nth-child(1) p');
const dashInterview = document.querySelector('#dashboard .card:nth-child(2) p');
const dashRejected = document.querySelector('#dashboard .card:nth-child(3) p');

function countUpdate(){
    const totalJobs = document.querySelectorAll('#job-container .job-card').length;
    const interviewJobs = document.querySelectorAll('#interview-section .job-card').length;
    const rejectedJobs = document.querySelectorAll('#rejected-section .job-card').length;

    // Update Counts...
    dashTotal.innerText = totalJobs;
    dashInterview.innerText = interviewJobs;
    dashRejected.innerText = rejectedJobs;

    document.querySelector('#job-section #total-count').innerText = `${totalJobs} jobs`;
    document.querySelector('#interview-section p').innerText = `${interviewJobs} jobs`;
    document.querySelector('#rejected-section p').innerText = `${rejectedJobs} jobs`;

}
    const interviewSection = document.getElementById('interview-section');
    const rejectedSection = document.getElementById('rejected-section');

function interview(button) {
    const card = button.closest('.job-card');

    const status = card.querySelector('.card-status');
    if(status.innerText === 'NOT APPLIED'){
        status.innerText = 'INTERVIEW';

        const i = document.querySelector('#interview-section .no-card');
        i.classList.add('hidden');
        
        interviewSection.appendChild(card);


    }
    else if(status.innerText === 'REJECTED'){
        status.innerText = 'INTERVIEW';

        const i = document.querySelector('#interview-section .no-card');
        i.classList.add('hidden');
        
        interviewSection.appendChild(card);



      
        
    }
    countUpdate();

    if(dashRejected.innerText === '0'){
            const j = document.querySelector('#rejected-section .no-card');
            j.classList.remove('hidden');
        }  

    if(dashTotal.innerText === '0'){
            const j = document.querySelector('.no-card');
            j.classList.remove('hidden');
        } 
}


function rejected(button) {
    const card = button.closest('.job-card');
    const status = card.querySelector('.card-status');
    if(status.innerText === 'NOT APPLIED'){
        status.innerText = 'REJECTED';

        const i = document.querySelector('#rejected-section .no-card');
        i.classList.add('hidden');

        rejectedSection.appendChild(card);

        
    }
    else if(status.innerText === "INTERVIEW"){
        status.innerText = 'REJECTED';

        const i = document.querySelector('#rejected-section .no-card');
        i.classList.add('hidden');
        
        rejectedSection.appendChild(card);

    }
    countUpdate();

    if(dashInterview.innerText === '0'){
        const j = document.querySelector('#interview-section .no-card');
        j.classList.remove('hidden');
    }

    if(dashTotal.innerText === '0'){
            const j = document.querySelector('.no-card');
            j.classList.remove('hidden');
        }
}



    // if(dashRejected.innerText === '0'){
    //         const j = document.querySelector('#rejected-section .no-card');
    //         j.classList.remove('hidden');
    //     }



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
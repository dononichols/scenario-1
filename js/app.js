

window.onload = function() {
    // Keep track of state
    let emailState = false;


    let emailModal = document.getElementsByClassName('email-modal') [0]


     // Close modal when X-button is triggered
   let closeButton = document.getElementsByClassName('email-modal__close-btn')[0];

   let emailInput = document.getElementsByClassName('email-modal__input')[0];

   let emailButton = document.getElementsByClassName('email-modal__button')[0];

    // REJECTS - checks and verifies whatever entered is actually an email. if not, it's rejected.
    function emailIsValid (email) {
        return /\S+@\S+\.\S+/.test (email)
    }

    let thankContainer = document.getElementsByClassName('email-thank')[0];

    let declineOffer = document.getElementsByClassName('email-modal__decline-offer')[0];
   
    let showModal = () => {
        if(emailState == false) {
            emailModal.classList.add('email-modal--visible');
            emailState = true
        }
    };

    let closeModal = () => {
        emailModal.classList.remove('email-modal--visible');
    };

    let addErrors = () => {
        document.getElementsByClassName('email-modal__form-group')[0].classList.add('email-modal__form-group--error');

           document.getElementsByClassName('email-modal__error-message')[0].classList.add('email-modal__error-message--active');
    };

    let removeErrors = () => {
        document.getElementsByClassName('email-modal__form-group')[0].classList.remove('email-modal__form-group--error');

           document.getElementsByClassName('email-modal__error-message')[0].classList.remove('email-modal__error-message--active');
    };

    let showThankMessage = () => {
        thankContainer.classList.add('email-thank--success');
        setTimeout(() => {
            closeModal ();
        },3000)
    };

    // Listen for 'click' to Close Modal
    closeButton.addEventListener('click', () => {
        closeModal();
     });

    emailInput.addEventListener('click', () => {
        removeErrors();
    });


   emailButton.addEventListener('click', () => {
       // once this is clicked,get the value of the email input
       if(emailIsValid(emailInput.value)) {
        // if it's true
        showThankMessage();
       } else {
           // ERROR ENTERING EMAIL
           //if it's false
          addErrors();
       } 
   });

   declineOffer.addEventListener('click', () => {
        closeModal();
   });
   

    



        // Trigger model when mouse leaves
    document.body.addEventListener('mouseleave', () => {
        showModal();
    });

    
    
    
    console.log(document)
}
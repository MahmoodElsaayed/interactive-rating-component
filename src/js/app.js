// user clicks a rating button > select class removed from all buttons and added to selected button
// user clicks submit button > extract the value of .selected button >  inject it into <output> > toggle hidden classes of divs

function screenController() {
    const ratingBtns = document.querySelectorAll('.rating-btns > button');
    const submitBtn = document.querySelector('#submitBtn');

    function selectRating(event) {
        ratingBtns.forEach(btn => btn.classList.remove('selected'));
        event.target.classList.add('selected');
    }
    
    function submitRating() {
        const formContainer = document.querySelector('.form-container');
        const msgContainer = document.querySelector('.end-message-container');
        const selectedRatingBtn = document.querySelector('.rating-btns button.selected');

        if (!selectedRatingBtn) return; /* Temporary error handling. Improve later. */

        formContainer.classList.add('hidden');
        msgContainer.classList.remove('hidden');

        displayUserRating(selectedRatingBtn.textContent);
    }

    function displayUserRating(rating) {
        const ratingOutput = document.querySelector('.user-selection output');
        ratingOutput.textContent = rating;
    }

    ratingBtns.forEach(btn => btn.addEventListener('click', selectRating))
    submitBtn.addEventListener('click', submitRating);
}

screenController();

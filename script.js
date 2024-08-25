document.querySelectorAll('.offer').forEach(offer => {
    offer.addEventListener('click', function() {
        // Remove the 'selected' class from all offers
        document.querySelectorAll('.offer').forEach(item => {
            item.classList.remove('selected');
            item.querySelector('.offer-radio').checked = false; // Uncheck radio buttons
        });

        // Add the 'selected' class to the clicked offer
        this.classList.add('selected');

        // Set the corresponding radio button to checked
        this.querySelector('.offer-radio').checked = true;
    });
});

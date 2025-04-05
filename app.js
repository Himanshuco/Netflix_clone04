document.addEventListener('DOMContentLoaded', () => {
    const faqBoxes = document.querySelectorAll('.faqbox');

    faqBoxes.forEach(faqBox => {
        faqBox.addEventListener('click', () => {
            const answer = faqBox.querySelector('.answer');
            const icon = faqBox.querySelector('svg');

            // Check if the answer is already visible
            if (answer.style.display === 'none' || answer.style.display === '') {
                // Show the answer
                answer.style.display = 'block';

                // Change the icon to minus
                icon.style.transform = 'rotate(45deg)';
                
                // Add active class to FAQ box for styling
                faqBox.classList.add('active');
            } else {
                // Hide the answer
                answer.style.display = 'none';

                // Change the icon back to plus
                icon.style.transform = 'rotate(0deg)';
                
                // Remove active class from FAQ box
                faqBox.classList.remove('active');
            }
        });
    });
});




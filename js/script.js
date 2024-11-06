$(document).ready(function() {
    // Change the color of the heading when hovered over
    $('h1').hover(function() {
        $(this).css('color', 'blue');
    }, function() {
        $(this).css('color', '#0073e6');
    });

    // Example of client-side validation
    $('#submitForm').click(function() {
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
        } else {
            alert('Passwords match!');
        }
    });
});


$(document).ready(function() {
    $('.nav-link').click(function() {
        // Remove the 'active' class from all links
        $('.nav-link').removeClass('active');
        // Add the 'active' class to the clicked link
        $(this).addClass('active');
    });
});
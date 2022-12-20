// Add link to all the divs that have a data-href attribute
$(document).ready(function() {
    // For each item that has data-href attribute
    $('[data-href]').each(function() {
        // If .clickable div has a data-href attribute
        if ($(this).data("href")) {
            // Add onclick to .clickable div (current location + data-href)
            $(this).click(function() {
                window.location = $(this).data("href");
            });
        }
    });
});
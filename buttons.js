//loop through each button
$('.next-section').each(function() {
    $(this).on('click', function () {
        //find the button's parent
        var nextSection = $(this).parent().next();
        $(nextSection).scrollIntoView({ behavior: smooth });
    });
});

const slideDown = (target) => {
    
}

const slideUp = () => {
    
}
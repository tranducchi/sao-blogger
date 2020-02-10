$(document).ready(function(){
    $('.show-search').click(function(){
        $(this).parent().addClass('d-none')
        $('.search-mobile').addClass('d-flex')
    })
    $('.search-mobile .close').click(function(){
        $('.main-menu').removeClass('d-none')
        $(this).parent().removeClass('d-flex')
        $(this).parent().addClass('d-none')
    });
})

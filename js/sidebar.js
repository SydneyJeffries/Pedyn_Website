$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.offset().top <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
          $('#menu-center a').removeClass("active"); //added to remove active class from all a elements
            currLink.addClass("active");
            console.log(scrollPos);
            console.log(refElement.offset().top);

            console.log(refElement.height());
            console.log(refElement.offset().top + refElement.height() );
        }
        else{
            currLink.removeClass("active");
        }
        if (scrollPos >= 7100) {
          currLink.removeClass("active");
          $('a[href="#management"]').addClass("active")
        }

        if (scrollPos >= 300) {
        $('.sidebar').addClass("sidebar-adjusted")          
        }
        
      if (scrollPos <= 280) {
        $('.sidebar').removeClass('sidebar-adjusted')   
      }

       
    });
}

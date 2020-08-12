/* _____________________ 所有works的html檔案 _____________________ */
/* continuum.html */
/* display.html */
/* edm.html */
/* winelabel-w.html */


/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 800) {
        $('#works--back').fadeIn(500);
    } else {
        $('#works--back').fadeOut(500);
    }
});
/*Scroll to top when arrow up clicked END*/


/* _____________________ index _____________________ */

/*Scroll to top when arrow up clicked BEGIN*/

// $(document).ready(function () {
//     $("#index--back").click(function (event) {
//         event.preventDefault();
//         $("html, body").animate({ scrollTop: 0 }, "slow");
//         return false;
//     });

// });

/*Scroll to top when arrow up clicked END*/

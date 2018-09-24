jQuery(document).ready(function() {
    $(".switcher-icon").click(function() {
        switcher_mode = $('.switcher-icon').attr('switcher-data');
        if (switcher_mode == 'Close') {
            $(".style-switcher").animate({
                left: '0'
            }, 250);
            $('.switcher-icon').attr('switcher-data', 'Open');
        } else {
            $(".style-switcher").animate({
                left: '-150px'
            }, 250);
            $('.switcher-icon').attr('switcher-data', 'Close');
        }
    });

    $(".style-switcher ul a").click(function(e) {
        e.preventDefault();

        color = $(this).css('background-color');
        if ($(this).hasClass('primary')) {
            hoverColor = color.replace(')', ', 0.75)').replace('rgb', 'rgba');

            // Color
            elements = 'a:hover,a:active,a:focus,';
            elements += '.btn.btn-primary,';
            elements += '.navbar-default .navbar-nav li.active a:focus,';
            elements += '.navbar-default .navbar-nav li.active a:hover,';
            elements += '.navbar-default .navbar-nav li.active>a';
            elements += '{color: '+color+' !important}';

            // border-color
            elements += '.btn.btn-primary,';
            elements += '.btn.btn-default,';
            elements += '.form-control:focus,';
            elements += '.owl-theme .owl-dots .owl-dot.active span';
            elements += '{border-color: '+color+' !important}';

            // background-color
            elements += '.btn-default, input[type="submit"], input[type="button"], input[type="reset"],';
            elements += '.section-title h3:after, .section-title h3:before,';
            elements += '.navbar-default .navbar-toggle .icon-bar,';
            elements += '.owl-theme .owl-dots .owl-dot.active span';
            elements += '{background-color: '+color+' !important}';

            // hoverColor
            elements += '.btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default:active:hover, .btn-default:active:visited, input[type="submit"]:hover, input[type="submit"]:focus, input[type="submit"]:active, input[type="submit"]:active:hover, input[type="submit"]:active:visited, input[type="button"]:hover, input[type="button"]:focus, input[type="button"]:active, input[type="button"]:active:hover, input[type="button"]:active:visited, input[type="reset"]:hover, input[type="reset"]:focus, input[type="reset"]:active, input[type="reset"]:active:hover, input[type="reset"]:active:visited';
            elements += '{background-color: '+ hoverColor +';border-color: '+ hoverColor +' !important;  !important}';

            $('#sw').append(elements);
        } else if ($(this).hasClass('sw-section')) {
            // background-color
            elements = '.navbar-default.sticky,';
            elements += '.section-color,.hero';
            elements += '{background-color: '+color+' !important}';

            $('#sw').append(elements);
        }
    });
});
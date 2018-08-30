// CONFIGURATION
  $.navigation = $('nav > ul.nav');
  $.panelIconOpened = 'icon-arrow-up';
  $.panelIconClosed = 'icon-arrow-down';
  $.brandPrimary =  '#07b6c6';
  $.brandSuccess =  '#4dbd74';
  $.brandInfo =     '#63c2de';
  $.brandWarning =  '#f8cb00';
  $.brandDanger =   '#f86c6b';
  $.grayDark =      '#2a2c36';
  $.gray =          '#55595c';
  $.grayLight =     '#818a91';
  $.grayLighter =   '#d1d4d7';
  $.grayLightest =  '#f8f9fa';

'use strict';

// MAIN NAVIGATION

$(document).ready(function($){
  // Add class .active to current link
  $.navigation.find('a').each(function(){
    var cUrl = String(window.location).split('?')[0];
    if (cUrl.substr(cUrl.length - 1) == '#') {
      cUrl = cUrl.slice(0,-1);
    }
    if ($($(this))[0].href==cUrl) {
      $(this).addClass('active');

      $(this).parents('ul').add(this).each(function(){
        $(this).parent().addClass('open');
      });
    }
  });

  // Dropdown Menu
  $.navigation.on('click', 'a', function(e){
    if ($.ajaxLoad) {
      e.preventDefault();
    }
    if ($(this).hasClass('nav-dropdown-toggle')) {
      $(this).parent().toggleClass('open');
      resizeBroadcast();
    }
  });
  function resizeBroadcast() {
    var timesRun = 0;
    var interval = setInterval(function(){
      timesRun += 1;
      if(timesRun === 5){
        clearInterval(interval);
      }
      window.dispatchEvent(new Event('resize'));
    }, 62.5);
  }

  // Sidebar & Aside
  $('.sidebar-toggler').click(function(){
    $('body').toggleClass('sidebar-hidden');
    resizeBroadcast();
  });
  $('.sidebar-minimizer').click(function(){
    $('body').toggleClass('sidebar-minimized');
    resizeBroadcast();
  });
  $('.brand-minimizer').click(function(){
    $('body').toggleClass('brand-minimized');
  });
  $('.aside-menu-toggler').click(function(){
    $('body').toggleClass('aside-menu-hidden');
    $('body').addClass('help-menu-hidden');
    resizeBroadcast();
  });
  $('.help-toggler').click(function(){
    $('body').toggleClass('help-menu-hidden');
    $('body').addClass('aside-menu-hidden');
    resizeBroadcast();
  });
  $('.mobile-sidebar-toggler').click(function(){
    $('body').toggleClass('sidebar-mobile-show');
    resizeBroadcast();
  });
  $('.sidebar-close').click(function(){
    $('body').toggleClass('sidebar-opened').parent().toggleClass('sidebar-opened');
  });
  // Disable moving to top
  $('a[href="#"][data-top!=true]').click(function(e){
    e.preventDefault();
  });
});

// CARDS ACTIONS

$(document).on('click', '.card-actions a', function(e){
  e.preventDefault();
  if ($(this).hasClass('btn-close')) {
    $(this).parent().parent().parent().fadeOut();
  } else if ($(this).hasClass('btn-minimize')) {
    var $target = $(this).parent().parent().next('.card-block');
    if (!$(this).hasClass('collapsed')) {
      $('i',$(this)).removeClass($.panelIconOpened).addClass($.panelIconClosed);
    } else {
      $('i',$(this)).removeClass($.panelIconClosed).addClass($.panelIconOpened);
    }
  } else if ($(this).hasClass('btn-setting')) {
    $('#myModal').modal('show');
  }
});
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Tooltip & Popover
$('[rel="tooltip"],[data-rel="tooltip"]').tooltip({"placement":"bottom",delay: { show: 400, hide: 200 }});
$('[rel="popover"],[data-rel="popover"],[data-toggle="popover"]').popover();

// Search Input

$('#searchDropdown').on('shown.bs.dropdown', function () {
  $("#search-box").focus();
})

$(".usd-search").keyup(function () {
  if ($(this).val()) {
     $(".usd-search-results").show();
  }
  else {
     $(".usd-search-results").hide();
  }
});

// Vaildate Forms

var formStandard = document.getElementById('needs-validation');
var formRegister = document.getElementById('needs-validation-register');
var formLogin = document.getElementById('needs-validation-login');
if(formStandard){
  (function() {
  'use strict';
    window.addEventListener('load', function() {
      formStandard.addEventListener('submit', function(event) {
        if (formStandard.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        formStandard.classList.add('was-validated');
      }, false);
    }, false);
  })();
};
if(formRegister){
  (function() {
  'use strict';
    window.addEventListener('load', function() {
      formRegister.addEventListener('submit', function(event) {
        if (formRegister.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        formRegister.classList.add('was-validated');
      }, false);
    }, false);
  })();
}
if(formLogin){
  (function() {
  'use strict';
    window.addEventListener('load', function() {
      formLogin.addEventListener('submit', function(event) {
        if (formLogin.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        formLogin.classList.add('was-validated');
      }, false);
    }, false);
  })();
}

// Show-Hide Password

$(".show-hide-password").click(function() {
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text"); 
  } else {
    input.attr("type", "password");
  }
  $(".toggle-icon").toggleClass("fa-eye fa-eye-slash");
  $(".toggle-text").text(function(i, text){
    return text === "Show" ? "Hide" : "Show";
  })
});

// CAPS

$(".password-field").keypress(function(e) { 
  var s = String.fromCharCode( e.which );
  if ((s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey)|| //caps is on
    (s.toUpperCase() !== s && s.toLowerCase() === s && e.shiftKey)) {
      $("#CapsWarn").show();
  } else if ((s.toLowerCase() === s && s.toUpperCase() !== s && !e.shiftKey)||
    (s.toLowerCase() !== s && s.toUpperCase() === s && e.shiftKey)) { //caps is off
      $("#CapsWarn").hide();
  } //else upper and lower are both same (i.e. not alpha key - so do not hide message if already on but do not turn on if alpha keys not hit yet)
});

// SCROLL PROFILE

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 350 && ($(window).width() >= 1024)) {
    $( ".profile-menu" ).addClass( "profile-menu profile-fixed" );
    $( ".profile-header" ).addClass( "profile-header profile-spacing" );
    $('.profile-menu-img').show();
    $('.profile-img').hide();
  } else {
    $( ".profile-menu" ).removeClass( "profile-fixed" );
    $( ".profile-header" ).removeClass( "profile-spacing" );
    $('.profile-menu-img').hide();
    $('.profile-img').show();
  }
});

// PW Minimum Requirements

$(document).ready(function(){
	$('input[type=password]').keyup(function() {
		var pswd = $(this).val();
		//validate the length
		if ( pswd.length < 8 ) {
			$('#length').removeClass('pw-valid').addClass('pw-invalid');
		} else {
			$('#length').removeClass('pw-invalid').addClass('pw-valid');
		}
		//validate letter
		if ( pswd.match(/[a-z]/) ) {
			$('#letter').removeClass('pw-invalid').addClass('pw-valid');
		} else {
			$('#letter').removeClass('pw-valid').addClass('pw-invalid');
		}
		//validate capital letter
		if ( pswd.match(/[A-Z]/) ) {
			$('#capital').removeClass('pw-invalid').addClass('pw-valid');
		} else {
			$('#capital').removeClass('pw-valid').addClass('pw-invalid');
    }
		//validate number
		if ( pswd.match(/\d/) ) {
			$('#number').removeClass('pw-invalid').addClass('pw-valid');
		} else {
			$('#number').removeClass('pw-valid').addClass('pw-invalid');
		}
		//validate space
		if ( pswd.match(/[^a-zA-Z0-9\-\/]/) ) {
			$('#space').removeClass('pw-invalid').addClass('pw-valid');
		} else {
			$('#space').removeClass('pw-valid').addClass('pw-invalid');
		}
	})
});

// Already Exists

$(document).ready(function(){
	$('input.dynamic-help-input').keyup(function() {
		var dynamicHelp = $(this).val();
		if ( dynamicHelp === "kaboom" ) {
			$('.dynamic-help-text').addClass('show');
		} else {
			$('.dynamic-help-text').removeClass('show');
    }
  })
});

// Refresh Page

$(function () {
  $('.refresh-page').click(function(){
    location.reload();
  })
})

// Spinner Demo

$('#toggle-spinner-lg').on('click', function () {
  $('.spinner-lg').toggleClass('d-none');
});
$('#toggle-spinner-md').on('click', function () {
  $('.spinner-md').toggleClass('d-none');
});
$('#toggle-spinner-sm').on('click', function () {
  $('.spinner-sm').toggleClass('d-none');
});
$('#toggle-spinner-btn').on('click', function () {
  $('.spinner-btn').toggleClass('d-none');
});

// Progress Demo

var progressControl = document.getElementById('progress-control');
if(progressControl){
  function progress1(value) {
    $(".progress-bar").css({width: value + '%'});
    if (value < 5) {
      $(".progress-bar").text("");
    }
    if (value === 100) {
      $(".progress-bar").addClass('bg-success completed');
      $(".progress-bar").text('Completed');
    } else if (value < 100 && value > 4) {
      $(".progress-bar").removeClass('bg-success').text(value + '%');
    } else if (value < 5) {
      $(".progress-bar").text("");
    }
  }
  progressControl.addEventListener('input', function(event) {
      progress1(event.target.valueAsNumber);
  });
  progress1(75);
}

// Skeleton

var delayTime = 3000;

$(".skeleton-breadcrumb").append(
  '<div class="breadcrumb usd-breadcrumb"><h1 class="h3 breadcrumb-page-title font-bold pulse-gray-lighter"></h1><ol class="breadcrumb-list"><li class="breadcrumb-item pulse-gray-lighter"></li><li class="breadcrumb-item pulse-gray-lighter"></li><li class="breadcrumb-item pulse-gray-lighter"></li></ol></div>'
);
$(".skeleton-card").append(
  '<div class="card"><div class="card-header pulse-gray-light"></div><div class="card-block"><p class="pulse-gray-lighter"></p><p class="pulse-gray-lighter"></p><p class="pulse-gray-lighter"></p><button class="pulse-gray-light"></button></div></div>'
);
$(".skeleton-list").append(
  '<div class="list"><div class="item"><div class="avatar pulse-gray-lighter"></div><div class="item-inner"><div class="input-wrapper"><div class="item-label"><h4 class="pulse-gray-lighter"></h4><p class="pulse-gray-lighter"></p></div></div></div></div><div class="item"><div class="avatar pulse-gray-lighter"></div><div class="item-inner"><div class="input-wrapper"><div class="item-label"><h4 class="pulse-gray-lighter"></h4><p class="pulse-gray-lighter"></p></div></div></div></div><div class="item"><div class="avatar pulse-gray-lighter"></div><div class="item-inner"><div class="input-wrapper"><div class="item-label"><h4 class="pulse-gray-lighter"></h4><p class="pulse-gray-lighter"></p></div></div></div></div></div>'
);
$(".skeleton-table").append(
  '<table class="table"><tr class="pulse-gray-light"><th></th><th></th><th></th><th></th><th></th></tr><tr class="pulse-gray-lighter"><td></td><td></td><td></td><td></td><td></td></tr><tr class="pulse-gray-lighter"><td></td><td></td><td></td><td></td><td></td></tr><tr class="pulse-gray-lighter"><td></td><td></td><td></td><td></td><td></td></tr></table>'
);

$('.skeleton')
.delay(5000)
.queue(function() {
    $(this).addClass("d-none");
    $(this).dequeue();
});

$('.fake-load')
.delay(5000)
.queue(function() {
    $(this).removeClass("d-none");
    $(this).dequeue();
});

// Trade Flow

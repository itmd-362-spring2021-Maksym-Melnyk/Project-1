/*JavaScript added on this page */

jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });
  function clean() {

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("name").focus();
  }
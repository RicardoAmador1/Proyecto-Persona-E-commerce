'use sctrict';

/*
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


/**
 * add event on element
 *

 const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }


  /**
   * #FORMS
   *
   const slideValue= document.querySelector("span");
   const inputSlider=document.querySelector("input");
   inputSlider.oninput = (() => {
     let value = inputSlider.value;
     slideValue.textContent = value;
     slideValue.style.left = (value/2) + "%"
     slideValue.classList.add("show");
   });

    inputSlider.onblur = (() => {
      slideValue.classList.remove("show")
    });

    
  
 




  /**
   * navbar toggle
   *

   const navbar = document.querySelector("[data-navbar]");
   const navTogglers = document.querySelectorAll("[data-nav-toggler]");
   const navLinks = document.querySelectorAll("[data-nav-link]");
   
   const toggleNavbar = function () { navbar.classList.toggle("active"); }
   
   addEventOnElem(navTogglers, "click", toggleNavbar);
   
   const closeNavbar = function () { navbar.classList.remove("active"); }
   
   addEventOnElem(navLinks, "click", closeNavbar);
*/

const range = document.getElementById("barra-edad");
const edad = document.getElementById("edad");

  range.addEventListener("change", function (event) {
    const selectedValue = event.target.value;

    edad.innerText = selectedValue;
  })

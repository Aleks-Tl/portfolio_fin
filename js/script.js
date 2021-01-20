const hamburger = document.querySelector('.hamburger'), 
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// JS-функция определения поддержки WebP

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

// SLICK-CAROUSEL

$(document).ready(function(){
    
      // VALIDATION FORMS

      function valideForms(form) {
        $(form).validate({
          rules: {
            name: {
              required: true,
              minlength: 2
            },
            email: {
              required: true,
              email: true
            },
            policy: {
                required: true
            }
          },
        messages: {
          name: {
            required: "Введите пожалуйста имя",
            minlength: jQuery.validator.format("Введите {0} символа!")
          },
            email: {
                   required: "Пожалуйста, введите свою почту",
                   email: "Неправильно ввели свою почту"
          },
          }
        });
      };

      valideForms('#contacts');
      
      $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val(" ");
          $('form').trigger('reset');
        });
        return false;
      });

  });


  

  
  
var validations = {
    required: function(value){
      return value !== '';
    
    },
    email: function(value){
      return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
  }
  function validate() {
    var form = document.getElementById('form'),
        inputsArr = form.querySelectorAll('input'),
        errorMessage = document.querySelector(".ui.error.message"),
        successMessage = document.querySelector(".ui.success.message");
    
    form.addEventListener('submit', function(e){
      var i = 0;
      while (i < inputsArr.length) {
        var attr = inputsArr[i].getAttribute('data-validation'),
            rules = attr ? attr.split(' ') : '',
            parent = inputsArr[i].closest(".field"),
            j = 0;
        while (j < rules.length) {
          if(!validations[rules[j]](inputsArr[i].value)) {
            e.preventDefault();
            
            errorMessage.className = "ui error message";
            errorMessage.innerHTML = "Invalid rule '" + rules[j] + "' for input '" + inputsArr[i].name + "'";
            parent.className = "field error";
            return false;
          }
          errorMessage.className = "ui error message hidden";
          parent.className = "field";
          j++;
        }
        i++;
      }
      e.preventDefault();
      successMessage.className = "ui success message";
      form.outerHTML = "";
      delete form;
    }, false)
  }
  validate();
  
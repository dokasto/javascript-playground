/**
 * Extensible form validation techniques for multiple forms
 * USAGE onsubmit="validateForm(event, this);"
 */

function validateForm(e, form) {
  let isValid = true;
  let $inputs = document.querySelectorAll('#' + form.id + ' .input');
  let $errorDiv = document.querySelector('#' + form.id + ' .error');
  let errors = [];

  /**
   * Check if input is empty
   */
  const isEmpty = function(input) {
    if (input.value.length > 0) {
      return false;
    }
    return true;
  };


  /**
   * Validate email
   */
  const isValidEmail = function(input) {
    return /\S+@\S+\.\S+/.test(input.value);
  };

  /**
   * Generate html message
   */
  const errorHTMl = function(errors) {
    var div = document.createElement('div');
    errors.forEach(function(msg) {
      var strong = document.createElement('strong');
      strong.textContent = msg;
      div.appendChild(strong);
    });
    return div;
  };


  for (let i = 0; i < $inputs.length; i++) {
    let input = $inputs[i];
    let type = input.getAttribute('type');
    let isRequired = input.getAttribute('data-required') === 'true' ? true : false;
    let shouldValidate = input.getAttribute('data-validate') === 'true' ? true : false;
    let errorMsg = input.getAttribute('data-error');

    if (isRequired) {
      if (isEmpty(input)) {
        isValid = false;
        errors.push(errorMsg);
      }
      if (shouldValidate) {
        if (type === 'email' && !isValidEmail(input)) {
          isValid = false;
          errors.push('Invalid email');
        }
      }
    }
  }

  if (isValid) {
    return true;
  } else {
    e.preventDefault();
    $errorDiv.innerHTML = '';
    $errorDiv.appendChild(errorHTMl(errors));
    return false;
  }
}

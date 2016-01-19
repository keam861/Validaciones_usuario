$(document).ready(function() {
  $( "#target" ).submit(function( event ) {
    errorsArr = [];
    event.preventDefault();
    validations();
    removeErrors();
    printErrors();
    console.log(errorsArr);
    
  });
});


function validations() {
  email();
  password();
  
}

function email() {
  var email = document.getElementById('email');
  var emailRegExp = new RegExp(/\w+[@]\w+[.]\w+/);
  var foundEmail = email.value.match(emailRegExp);
  if (foundEmail == null) {
    errorsArr.push("You must write a valid email");
  };
}

function password() {
  var password = document.getElementById('password');
  length(password);
  number(password);
  uppCase(password);
}

function length(password) {
  if (password.value.length < 8) {
    errorsArr.push("Your password must have at least 8 chars");
  };
}


function number(password) {
  var numberRegExp = new RegExp("[0-9]");
  var foundNumber = password.value.match(numberRegExp);
  if (foundNumber == null) {
    errorsArr.push("You must include in your password at least one number");
  };

}

function uppCase(password) {
  var upperCaseRegExp = new RegExp("[A-Z]");
  var foundUpperCase = password.value.match(upperCaseRegExp);
  if (foundUpperCase == null) {
    errorsArr.push("You must include in your password at least an upcase letter");
  };
}

function printErrors() {
  for (var index in errorsArr) {
    $( "#errors" ).append( "<p class='error'>"+errorsArr[index]+"</p>" );
  };
}

function removeErrors() {
  $( ".error" ).empty();
}
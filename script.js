function totalDisplay() {
  // Create variables from user input forms.
  var amount = document.querySelector("form.sinnig-calculator-form input[name='amount']").value;
  var length = document.querySelector("form.sinnig-calculator-form input[name='length']").value;
  var downpayment = document.querySelector("form.sinnig-calculator-form input[name='down-payment']").value;
  var interest = document.querySelector("form.sinnig-calculator-form input[name='interest']").value;

  // Create variables to hold data containing equations used for getting payment amount.
  var repayment = amount - downpayment;
  var i = (parseFloat(interest) / 100) / 12;
  var total = repayment * i / (1 - (Math.pow(1/(1 + i), length))) + 1;
  var monthly = total.toFixed(2);

  // Display payment amount.
  document.getElementById('total').innerHTML = '$' + monthly;
}

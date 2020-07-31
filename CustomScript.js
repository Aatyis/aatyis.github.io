document.addEventListener("DOMContentLoaded", function (event) {
  
  window.init_form_rpu(
    '2245c2992eb55bea444fb05e15c27925cbb6',
    'serviceNumberRpuForm',
    'serviceNumberRpuFormErrors'
  );
  window.init_form_payment(
    '2245c2992eb55bea444fb05e15c27925cbb6',
    'paymentToConsumptionForm',
    'paymentToConsumptionFormErrors',
  );
  window.init_form_consumption(
    '2245c2992eb55bea444fb05e15c27925cbb6',
    'serviceNumberConsumptionForm',
    'serviceNumberConsumptionFormErrors',
  );

});

function dropDownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
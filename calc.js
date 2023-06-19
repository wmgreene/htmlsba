document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');
    var dropdown = document.querySelector('.dropdown');
  
    dropdownToggle.addEventListener('click', function() {
      dropdown.classList.toggle('active');
    });
  
    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  });
function clearScreen() {
    document.getElementById("result").value = "";
}
 

function display(value) {
    document.getElementById("result").value += value;
}
 

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
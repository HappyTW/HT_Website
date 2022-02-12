(function() {
  var darkSwitch = document.getElementById("darkSwitch");

  
  if (darkSwitch) {
    function initTheme() {
      var darkThemeSelected =
        localStorage.getItem("darkSwitch") !== null &&
        localStorage.getItem("darkSwitch") === "dark";
      darkSwitch.checked = darkThemeSelected;
      darkThemeSelected
        ? document.body.setAttribute("data-theme", "dark")
        : document.body.removeAttribute("data-theme");
    }
    initTheme()
  }
    darkSwitch.addEventListener("change", function(event) {
      if (darkSwitch.checked) {
        document.body.setAttribute("data-theme", "dark");
        console.log('Success');
        localStorage.setItem("darkSwitch", "dark");
      } else {
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("darkSwitch");
      }
  });

})();

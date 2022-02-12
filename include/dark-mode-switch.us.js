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
      var table_dark = document.getElementById("dark_table");
        if (darkSwitch.checked) {
          document.body.setAttribute("data-theme", "dark");
          table_dark.classList.add('table-dark');
          console.log('Success');
          localStorage.setItem("darkSwitch", "dark");
        } else {
          document.body.removeAttribute("data-theme");
          table_dark.classList.remove('table-dark');
          localStorage.removeItem("darkSwitch");
        }
    });

  
  })();
  
function addingEventListener() {
    const mainElement = document.getElementById("main");
    const inputElement = document.getElementById("input");
    const divElements = document.querySelectorAll("div");
    
    mainElement.addEventListener("click", function() {
        console.log("Main element clicked!");
    });

    inputElement.addEventListener("input", function() {
        console.log("Input value changed!");
      });
    
      divElements.forEach(function(div) {
        div.addEventListener("mouseover", function() {
          console.log("Mouse over a div!");
        });
      });
    }
const cal = new CalHeatmap();
cal.paint({});
const container = document.getElementById("cal-heatmap")
//render(container);



//pop up
const popupOverlay = document.getElementById("popupOverlay");
const addButton = document.getElementById("add");


addButton.addEventListener("click", function(){
  popupOverlay.style.display = "block";

});

popupOverlay.addEventListener("click", function(e){
  if (e.target === popupOverlay) {
        popupOverlay.style.display = 'none';
        console.log("out")
      }
  else {
    console.log("in");
  }


});




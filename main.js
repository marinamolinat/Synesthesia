
//render(container);


//pop up
const popupOverlay = document.getElementById("popupOverlay");
const addButton = document.getElementById("add");
const submitColor = document.getElementById("submitColor");
const logsGrid = document.getElementById("logsGrid");
loadMoods();



addButton.addEventListener("click", function(){
  popupOverlay.style.display = "block";

});

popupOverlay.addEventListener("click", function(e){
  if (e.target === popupOverlay) {
        popupOverlay.style.display = 'none';

      }
 

});
submitColor.addEventListener("click", function(){

  const mood = colorPicker.value;
  if (!mood) return alert("color");

  const moods = JSON.parse(localStorage.getItem("moods") || "[]");
  moods.push({ mood, date: new Date().toLocaleString() });
  localStorage.setItem("moods", JSON.stringify(moods));
  
  loadMoods();
  popupOverlay.styles.display = "none";




});



function loadMoods() {
  const moods = JSON.parse(localStorage.getItem("moods") || "[]");
  console.log(moods);
  logsGrid.innerHTML = moods
  .map(entry => `<div class="item" style="background-color: ${entry.mood}">${entry.date}</div>`)
  .join("");
 
}



loadMoods();

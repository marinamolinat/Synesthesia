
//render(container);



//pop up
const popupOverlay = document.getElementById("popupOverlay");
const addButton = document.getElementById("add");
const submitColor = document.getElementById("submitColor");
const logsGrid = document.getElementById("logsGrid");



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




});



function loadMoods() {
  const moods = JSON.parse(localStorage.getItem("moods") || "[]");
  console.log(moods);
  logsGrid.innerHTML = moods
  .map(entry => `<div class="item" style="background-color: ${entry.mood}">${entry.date}</div>`)
  .join("");
 
}
const cal = new CalHeatMap();

  cal.init({
    itemSelector: "#cal-heatmap",
    domain: "month",
    subDomain: "day",
    data: calData,
    start: new Date("2025-08-01"),
    range: 1,
    cellSize: 20,
    legend: [1],  // We just use 1 intensity level
    afterLoadData: (data) => {
      // data is what cal-heatmap got, but we will override colors later
      return data;
    },
    onComplete: () => {
      // After rendering, color the cells based on your stored colors
      document.querySelectorAll("#cal-heatmap .graph-subdomain").forEach(cell => {
        const dateStr = cell.getAttribute('data-date'); // e.g. '2025-08-01'
        if (dateStr && storedData[dateStr]) {
          cell.style.fill = storedData[dateStr];  // set the color from your data
        }
      });
    }
  });


loadMoods();

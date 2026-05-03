let mood = 50;

const robot = document.getElementById("robot");
const mouth = document.getElementById("mouth");
const status = document.getElementById("status");

function updateFace() {
  if (mood > 70) {
    mouth.style.borderRadius = "0 0 20px 20px";
    status.innerText = "😊 Happy";
  } 
  else if (mood < 30) {
    mouth.style.borderRadius = "20px 20px 0 0";
    status.innerText = "😢 Sad";
  } 
  else {
    mouth.style.borderRadius = "10px";
    status.innerText = "😐 Neutral";
  }
}

robot.addEventListener("click", () => {
  mood += 10;
  robot.style.transform = "translate(-50%, -50%) scale(1.1)";
  
  setTimeout(() => {
    robot.style.transform = "translate(-50%, -50%) scale(1)";
  }, 150);

  updateFace();
});

setInterval(() => {
  mood -= 5;
  updateFace();
}, 4000);

updateFace();

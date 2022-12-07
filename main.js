dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString) {
    const targetDate =  dayjs(dateString);

    element.querySelector(".until__event").textContent = `Until ${ targetDate.format("D MMMM YYYY")}`

    setInterval(() => {
        const now = dayjs();
        const duration = dayjs.duration(targetDate.diff(now)) ;

        element.querySelector(".until__numeric--seconds").textContent = duration.seconds().toString().padStart(2, "0");
        element.querySelector(".until__numeric--minutes").textContent = duration.minutes().toString().padStart(2, "0");
        element.querySelector(".until__numeric--hours").textContent = duration.hours().toString().padStart(2, "0");
        element.querySelector(".until__numeric--days").textContent = duration.days().toString().padStart(2, "0");
    },250);
} 

activateCountdown(document.getElementById("myCountdown"), "2022-12-08")

function displayFireworks() {
  // create a canvas element to draw the fireworks on
  var canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  // create a fireworks display using the canvas
  var fireworks = new Fireworks(canvas);

  // start the fireworks display
  fireworks.start();
}

// get the current date
var currentDate = new Date();

// check if the current date is December 8th
if (currentDate.getMonth() === 11 && currentDate.getDate() === 8) {
  // if it is, call the displayFireworks function
  displayFireworks();
}

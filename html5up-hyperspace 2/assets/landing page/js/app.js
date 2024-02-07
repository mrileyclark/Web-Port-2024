const countdown = document.querySelector(".countdown");

//set launch Date
const launchDate = new Date("Oct 31, 2024 16:00:000").getTime();

//update every second
const interval = setInterval(() => {
  //get todays date/time
  const now = new Date().getTime();

  //distance from now to launch date
  const distance = launchDate - now;
  //   console.log(distance);

  //calculate time
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //display result
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Mins</span></div>
    <div>${seconds}<span>Secs</span></div>
  `;

  //checks if launch date is passed
  if (distance < 0) {
    //stop countdown
    clearInterval(interval);
    //style
    countdown.style.color = "black";
    countdown.innerHTML = "Cheers🍻";
  }
}, 1000);

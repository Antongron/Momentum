// DPM Elements
const time = document.getElementById('time'),
  timeWeek = document.getElementById('time-week'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');


  const montsArr = ["Jannuary", "Frbruary", "March", "April", "May", "June", "July", "August", "September", "October", "Nowember", "December"],
        nameDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Options
  const showAmPm = true;

 
  //Show Time
  function showTime() {
      let today = new Date(),
        month = today.getMonth(),
        date = today.getMonth(),
        day = today.getDay(),
        year = today.getFullYear(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

        

        // Output Time
        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
            sec
            )}`;
        timeWeek.innerHTML = `${nameDays[day]}<span> </span>${date}<span> </span>${montsArr[month]} <span> </span>${year}`;
        setTimeout(showTime, 1000);
  }

  //Add Zeros
  function addZero(n) {
      return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }

  //Set Background and Greeting
  function setBgGreet() {
    let today = new Date(),
      hour = today.getHours();

    if (hour > 6 && hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('https://github.com/Antongron/Momentum/blob/gh-pages/img/afternoon.jpg?raw=true')";
        greeting.textContent = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        //Afternoon
        document.body.style.backgroundImage = "url('https://github.com/Antongron/Momentum/blob/gh-pages/img/afternoon.jpg?raw=true')";
        greeting.textContent = 'Good Afternoon';
    } else if (hour>= 18 && hour < 24) {
        //Evening
        document.body.style.backgroundImage = "url('https://github.com/Antongron/Momentum/blob/gh-pages/img/evening.jpg?raw=true')";
        greeting.textContent = 'Good Evening';
    } else {
        //Night
        document.body.style.backgroundImage = "url('https://github.com/Antongron/Momentum/blob/gh-pages/img/afternoon.jpg?raw=true')";
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
  };

  //Set Name
  function setName(e) {
      if(e.type === 'keypress') {
          //Make sure enter is pressed
          if(e.which == 13 || e.keyCode == 13) {
              localStorage.setItem('name', e.target.innerText);
              name.blur();
          }
      } else {
          localStorage.setItem('name', e.target.innerText);
      }
  };

  //Get Name
  function getName() {
      if(localStorage.getItem('name') === null) {
          name.textContent = ' [Enter Name]';
      } else {
          name.textContent = localStorage.getItem('name');
      }
  };

    //Get Focus
    function getFocus() {
        if(localStorage.getItem('focus') === null) {
            focus.textContent = ' [Enter Focus]';
        } else {
            focus.textContent = localStorage.getItem('focus');
        }
    };


    //Set Focus
    function setFocus(e) {
        if(e.type === 'keypress') {
            //Make sure enter is pressed
            if(e.which == 13 || e.keyCode == 13) {
                localStorage.setItem('focus', e.target.innerText);
                focus.blur();
            }
        } else {
            localStorage.setItem('focus', e.target.innerText);
        }
    };
    

    name.addEventListener('keypress', setName);
    name.addEventListener('blur', setName);
    focus.addEventListener('keypress', setFocus);
    focus.addEventListener('blur', setFocus);

  //Run
  showTime();
  setBgGreet();
  getName();
  getFocus();

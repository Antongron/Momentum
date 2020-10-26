// DPM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');


  // Options
  const showAmPm = true;

  //Show Time
  function showTime() {
      let tody = new Date(),
        hour = tody.getHours(),
        min = tody.getMinutes(),
        sec = tody.getSeconds();

        //Set AM or PM
        //const amPm = hour >= 12 ? 'PM' : 'AM';

        // 12hr Format
        //hour = hour % 12 || 12;

        // Output Time
        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
            sec
            )}`;
   //${showAmPm ? amPm : ''}
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

    if (hour >= 6 && hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('https://pixabay.com/get/54e0d7444850ac14f6d1867dda2933771238dbed534c704f752c7dd1904cc45a_1920.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hour >=12 && hour < 18) {
        //Afternoon
        document.body.style.backgroundImage = "url('https://pixabay.com/get/57e0d4474d53ae14f6d1867dda2933771238dbed534c704f752c7dd1904dc45e_1920.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else if (hour>= 18 && hour < 24) {
        //Evening
        document.body.style.backgroundImage = "url('https://pixabay.com/get/51e3d34b4257b114f6dc8d7ac02d3f7e083ed8e55057794c712a7b.jpg')";
        greeting.textContent = 'Good Evening';
    } else {
        //Evening
        document.body.style.backgroundImage = "url('https://pixabay.com/get/51e3d34b4d5bb114f6dc8d7ac02d3f7e083ed8e55057744f722a7f.jpg')";
        greeting.textContent = 'Good Evening';
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
    function setName(e) {
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
    focus.addEventListener('keypress', setName);
    focus.addEventListener('blur', setName);

  //Run
  showTime();
  setBgGreet();
  getName();
  getFocus();

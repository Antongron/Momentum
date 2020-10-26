
const time = document.getElementById('time'),
  date = document.getElementById('date'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

  const showAmPm = true;

  function showTime() {
      let tody = new Date(),
        hour = tody.getHours(),
        min = tody.getMinutes(),
        sec = tody.getSeconds();

        

        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
            sec
            )}`;
        date.innerHTML = new Date(tody.getFullYear(), tody.getMonth(), tody.getDate()).toString().split(' ').splice(0, 4).join(' ');
        setTimeout(showTime, 1000);
  }

  function addZero(n) {
      return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }

  //Set Background and Greeting
  function setBgGreet() {
    let today = new Date(),
      hour = today.getHours();

    if (hour > 6 && hour < 12) {
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else if (hour>= 18 && hour < 24) {
        document.body.style.backgroundImage = "url('https://pixabay.com/get/51e3d34b4257b114f6dc8d7ac02d3f7e083ed8e55057794c712a7b.jpg')";
        greeting.textContent = 'Good Evening';
    } else {
        document.body.style.backgroundImage = "url('./img/night.jpg')";
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


  showTime();
  setBgGreet();
  getName();
  getFocus();

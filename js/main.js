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

    if (hour > 5 && hour < 12) {
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

    const baseMorning = 'https://raw.githubusercontent.com/Antongron/Momentum/main/img/morning/',
        imagesMorning = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'],
        baseDay = 'https://raw.githubusercontent.com/Antongron/Momentum/main/img/day/',
        imagesDay = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg'],
        baseEvening = 'https://raw.githubusercontent.com/Antongron/Momentum/main/img/evening/',
        imagesEvening = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'],
        baseNight = 'https://raw.githubusercontent.com/Antongron/Momentum/main/img/night/',
        imagesNight = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'];
  let i = 0;
  
  function viewBgImage(data) {
    const body = document.querySelector('body');
    const src = data;
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => {      
      body.style.backgroundImage = `url(${src})`;
    }; 
  }
  function getImage() {
    let today = new Date(),
    hour = today.getHours();
    if (hour > 5 && hour < 12) {
        //Morning
        const index = i % imagesMorning.length;
        const imageSrc = baseMorning + imagesMorning[index];
        viewBgImage(imageSrc);
    } else if (hour >= 12 && hour < 18) {
        //Afternoon
        const index = i % imagesDay.length;
        const imageSrc = baseDay + imagesDay[index];
        viewBgImage(imageSrc);
    } else if (hour>= 18 && hour < 24) {
        //Evening
        const index = i % imagesEvening.length;
        const imageSrc = baseEvening + imagesEvening[index];
        viewBgImage(imageSrc);
    } else {
        //Night
        const index = i % imagesNight.length;
        const imageSrc = baseNight + imagesNight[index];
        viewBgImage(imageSrc);
    }
    
        i++;
        btn.disabled = true;
        setTimeout(function() { btn.disabled = false }, 1000);
  } 
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', getImage);
  setTimeout(getImage, 1000);
  setInterval(getImage, 3600000);

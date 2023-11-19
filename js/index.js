let userName=['Руслан', 'Людмила']
let nameGest = ['Алексей', 'Марина'];
let dataMain = '01.01.25 '
let mainInfo =[
    {
navigation: ['Главная страница', 'Приглашение', 'Программа дня', 'Анкета гостя'],
classNavigation:['header', 'invitation', 'program', 'form'] 
    }
    ,
    {
        dateMain: ['January 1, 2025', dataMain, 'jun 1, 2025 15:37:25']
    }
    ,
    {
 h1: `Уважаемые </br> ${nameGest[0]} и ${nameGest[1]}!`
    },
    {
    inavationContent: `Мы рады сообщить Вам, что ${dataMain}года состоится самое главное торжество в нашей жизни -  день нашей свадьбы!  Приглашаем Вас разделить вместе с нами  радость этого незабываемого дня.`,
        photo:' url("./img/image-content.jpg")',
        wishes: 'Ждем вас!',
        pS:`Ваши ${userName[0]} и ${userName[1]}`
    },
    {
h3: 'Программа дня',
time: ['14:00', '15:00', '17:00','21:00', '22:00', '23:00'],
eventTime:['Торжественная регистрация', 'Свадебная фотосессия', 'Начало банкета', 'Свадебный торт', 'Праздничный фейерверк', 'Окончание вечера'],
eventTimeDop:['(Кутузовский просп., 23, к. 1)', '(Кремлевская набережная)', '(ул.1905 года, 10, с.1)']
    },
    {
        h3:'Будем благодарны, если Вы подтвердите свое присутствие на нашей свадьбе'
    },
    {
        backgroundImageHeader: 'url("./img/background-top.jpg")',
        backgroundImageMain: 'url("./img/background-main-footer.png")', 

    }
]

function detectBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
 

     if (userAgent.indexOf('safari') > -1) {
    //   Array.from(document.querySelector('head').children).push(` <link href="https://fonts.googleapis.com/css2?family=Cormorant+Upright&family=EB+Garamond:ital,wght@1,500&family=Fasthand&family=Flamenco&display=swap" rel="stylesheet">`)
      document.querySelector('body').style.fontFamily='sans-serif, Arial, Helvetica, '
     }
    }
detectBrowser()

///////////////////////title//////////////////////
document.querySelector('title').textContent = `${userName[0]} и ${userName[1]} `
/////////////////////////////////////loading_window

let windowLoading = document.querySelector('.loading_window')

function startShowLoadingWindow(){
    document.querySelector('html').style.background='rgb(241, 203, 203)'
    document.querySelector('html').style.overflowY='hidden'
    document.querySelector('body').style.boxShadow='none'
    if(windowLoading.classList[1]!=='loading_window_active'){
        windowLoading.classList.add('loading_window_active')
       
    }
    setTimeout(()=>{
        windowLoading.classList.remove('loading_window_active')
        document.querySelector('html').style.background='rgb(128, 128, 128)'
        document.querySelector('html').style.overflowY='visible'
        document.querySelector('body').style.boxShadow='1px 3px 6px rgba(0, 0, 0, 0.3)'
       clearInterval(interval)
    }, 5000)
}
let array = []
 const interval = setInterval(()=>{
    array.push('.')
    if(array.length>3){
        array = []
            document.querySelector('.animation_span').textContent = ''
    }
    else{
    document.querySelector('.animation_span').textContent =   array.join(' ')
    }
}, 500) 


startShowLoadingWindow()

  


//////////////////////////////////////////////////////////////////////////HEADER///////////////////////////////////////////
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


//background//
document.querySelector('header').style.backgroundImage = mainInfo[6].backgroundImageHeader
document.querySelector('.button_menu').addEventListener('click', showeMenu)
document.querySelector('.close_menu').addEventListener('click', closeMenu)
let nav = document.querySelector('.nav')
let navigatoinList = document.querySelector('.navigation_list')

function showeMenu(){
  
if(nav.classList[0]!='nav_active'){
    if(nav.classList[1]!='nav_not_active'){
        nav.classList.add('nav_active')
        document.querySelector('.button_menu').classList.add('input_active')
        document.querySelector('.modal_background').style.display='block'
        document.querySelector('.border_radius_safari').style.opacity='0'
    }else{
        nav.classList.remove('nav_not_active')
        nav.classList.add('nav_active')
        document.querySelector('.button_menu').classList.add('input_active')
        document.querySelector('.modal_background').style.display='block'
        document.querySelector('.border_radius_safari').style.opacity='0'
    }
for (let index = 0; index < mainInfo[0].navigation.length; index++) {
let li = document.createElement('li')
navigatoinList.appendChild(li).setAttribute('class', 'list_menu')
document.querySelectorAll('.list_menu').forEach((element, index)=> {
    element.innerHTML = `<a class = 'list_menu__link' href="#${mainInfo[0].classNavigation[index]}"></a>`
    element.addEventListener('click', ()=>{
        setTimeout(closeMenu(), 2000)
    } )
})
}


document.querySelectorAll('.list_menu__link').forEach((element, index) =>{
    element.textContent = mainInfo[0].navigation[index]
} )
    
document.querySelectorAll('.list_menu').forEach(element =>{
   if(element.textContent === 'undifined'||element.textContent ==='null'||element.textContent ==='NaN'||element.textContent ==='') {
element.remove();
   }
})
}
}

function closeMenu(){
    nav.classList.remove('nav_active')
    nav.classList.add('nav_not_active')
    document.querySelector('.button_menu').classList.remove('input_active')
    document.querySelector('.modal_background').style.display='none'
    document.querySelector('.border_radius_safari').style.opacity='0.8'
}

document.querySelector('.top-data').textContent = mainInfo[1].dateMain[0]
/////////////////////////////////////timer//////////////////
let timerDays = document.querySelector('.timer-days')
let timerHour = document.querySelector('.timer-hour')
let timerMinutes = document.querySelector('.timer-minuts')
let TimerSeconds = document.querySelector('.timer-seconds')
let countDownDate = new Date(mainInfo[1].dateMain[2]).getTime();
timer()
let Interval = setInterval(timer, 1000);
function timer() {

    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  

    Array.from(timerDays.children)[0].textContent = `${days}  : `
    Array.from(timerHour.children)[0].textContent = `${hours}  : `
    Array.from(timerMinutes.children)[0].textContent = `${minutes}  : `
    Array.from(TimerSeconds.children)[0].textContent = `${seconds}`
    if (distance < 0) {
      clearInterval(Interval);
      Array.from(timerDays.children)[0].textContent = "0";

      Array.from(timerHour.children)[0].textContent = "0";
      Array.from(timerMinutes.children)[0].textContent = "0";
      Array.from(TimerSeconds.children)[0].textContent = "0";
    }
  }
///////////////////////////////////////////////////////////MAIN/////////////////





///////////////////////////////////////////////////inavation///////////////////////

document.querySelector('main').style.backgroundImage= mainInfo[6].backgroundImageMain
document.querySelector('.inavation_title').innerHTML = mainInfo[2].h1
document.querySelector('.inovation_content').textContent= mainInfo[3].inavationContent
document.querySelector('.photo-content').style.backgroundImage= mainInfo[3].photo
document.querySelector('.inovation_wishes').textContent=mainInfo[3].wishes
document.querySelector('.inavation_ps').textContent=mainInfo[3].pS


///////////////////////////////////////programs/////////////////////////////////////////////

document.querySelector('.programs_title').textContent = mainInfo[4].h3

for (let index = 0; index < mainInfo[4].eventTime.length; index++) {
    let li = document.createElement('li')
   document.querySelector('.programs_list').appendChild(li).setAttribute('class', 'list_program')
   }

   document.querySelectorAll('.list_program').forEach((element, index)=>{
    element.innerHTML = `<p class='time_program'>${mainInfo[4].time[index]}</p><p class='event_program'>${mainInfo[4].eventTime[index]}<span class='adress'>${mainInfo[4].eventTimeDop[index]}</span></p>`
   })
   document.querySelectorAll('.adress').forEach(element=>{
    if(element.textContent === 'undefined'||element.textContent ==='null'||element.textContent ==='NaN'||element.textContent ==='') {
 element.remove();
    
}
})

   ///////////////////////////////////form/////////////////
   document.querySelector('.form_text').textContent=mainInfo[5].h3
  
   document.querySelector('.input_name').addEventListener('input',(event)=>{
    let value =  Array.from(nameArray = document.querySelector('.input_name').value)
  if(value.length<5){
        document.querySelector('.input_name').style.outline= '1px solid red'
       document.querySelector('.name_error').textContent = 'Имя и Фамилия не могут содержать менее 5 букв'
    }

 if(value.join('')!=value.join('').replace(/[^а-яё\d\-\s]/gi,'')|| "1234567890".indexOf(event.data) != -1){
        document.querySelector('.input_name').style.outline= '1px solid red'
        document.querySelector('.name_error').textContent = 'Имя и Фамилия должны быть написанны Кириллицей'
    }
    else{
        document.querySelector('.input_name').style.outline= '1px solid green'
       document.querySelector('.name_error').textContent = ''
    }
   } )



   document.querySelector('.input_phone').addEventListener('input',(event)=>{
    let value = Array.from( document.querySelector('.input_phone').value)
    if(value.length>11){
value.pop()
document.querySelector('.input_phone').value = value.join('')
        }
        
        if(value.length<11){
            document.querySelector('.input_phone').style.outline= '1px solid red'
            document.querySelector('.phone_error').textContent='Номер не должен быть короче 11 символов'
            return
        }
        if(value[0]!=8){
            document.querySelector('.input_phone').style.outline= '1px solid red'
            document.querySelector('.phone_error').textContent='Номер должен начинаться с 8'
       
        }

        else{
            document.querySelector('.input_phone').style.outline= '1px solid green';
            document.querySelector('.phone_error').textContent=''
        
        }
   } )


   
  document.querySelector('.submit_button').addEventListener('click', ()=>{
 if(document.querySelector('.phone_error').textContent==''&&document.querySelector('.input_phone').value!=''&&document.querySelector('.input_name').value!=''){
    document.querySelector('.input_phone').value=''
    document.querySelector('.input_name').value=''
    document.querySelector('.form').style.transform = ' translate(100%, -100%) scale(0.5, 0.5)'
    document.querySelector('.form').style.transition= 'transform 0.8s '
setTimeout(()=>{
    document.querySelector('.form').style.transform = ' translate(-100%, -100%)'
}, 400)
 }
 else{
    document.querySelector('.form').style.animation='shake 0.5s'
    document.querySelector('.form').style.animationIterationСount='infinite'
 }
setTimeout(()=>{
    document.querySelector('.form').style.animation=''
    document.querySelector('.form').style.transition= 'transform 0.8s'
    document.querySelector('.form').style.transform = 'translate(0%, 0%)'

}, 800)
    




  })

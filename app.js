const notificationBtn = document.querySelector('[data-push]')
const vibrateBtn = document.querySelector('[data-vibrate]')
const help = document.querySelector('[data-help]')

notificationBtn.addEventListener('click', pushNotification)
vibrateBtn.addEventListener('click', vibrate)

async function pushNotification(){
    let permission = await Notification.requestPermission()
    if(permission!='granted') showHowAppWorks()
    new Notification("Hello, From PWA",{
        body: 'This app allows to push notification and vibrate your mobile device, You are welcome',
    })
}

function vibrate(){
    navigator.vibrate(2000)
}

function showHowAppWorks(){
    help.style.opacity = 1
    setTimeout(()=>help.style.opacity = 0, 3000)
}
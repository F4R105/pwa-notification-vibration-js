const push = document.querySelector('[data-push]')
const vibrate = document.querySelector('[data-vibrate]')
const help = document.querySelector('[data-help]')

push.addEventListener('click', askForNotificationPermission)
vibrate.addEventListener('click', askForVibrationPermission)

async function askForNotificationPermission(){
    let permission = await Notification.requestPermission()
    if(permission!='granted') showHowAppWorks()
    new Notification("Hello, From PWA",{
        body: 'This app allows to push notification and vibrate your mobile device, You are welcome',
        tag: 'PWA-Not-Vib'
    })
}

function askForVibrationPermission(){

}

function showHowAppWorks(){
    help.style.opacity = 1
    setTimeout(()=>help.style.opacity = 0, 3000)
}
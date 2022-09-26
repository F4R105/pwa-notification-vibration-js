const notificationBtn = document.querySelector('[data-push]')
const vibrateBtn = document.querySelector('[data-vibrate]')
const help = document.querySelector('[data-help]')

if("serviceWorker" in navigator){
    navigator.serviceWorker.register('service_worker.js')
    .then(reg=>console.log('Service worker registered successfully'))
    .catch(e=>console.log('Service worker registration failed'))
}else{
    informUser('This app is not supported on your browser')
}

notificationBtn.addEventListener('click', pushNotification)
vibrateBtn.addEventListener('click', vibrate)

async function pushNotification(){
    let permission = await Notification.requestPermission()
    if(permission!='granted') informUser('Allow push notification on your browser')
    new Notification("Hello, From PWA",{
        body: 'This app allows to push notification and vibrate your mobile device, You are welcome',
    })
}

function vibrate(){
    navigator.vibrate(2000)
}

function informUser(message){
    help.innerText = message
    help.style.opacity = 1
    setTimeout(()=>help.style.opacity = 0, 3000)
}
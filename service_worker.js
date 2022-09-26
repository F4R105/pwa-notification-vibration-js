self.addEventListener('install',e=>{
    e.waitUntil(
        caches.open('static')
        .then(cache=>{
            return cache.addAll(['./','./style.css','./app.js','./icons/myLogo.png'])
        })
    )
})

self.addEventListener('fetch',e=>{
    e.respondWith(
        caches.match(e.request).then(
            res => res || fetch(e.request)
        )
    )
})
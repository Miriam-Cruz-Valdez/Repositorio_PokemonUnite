const cachePWA="cache-site-v1";

const assets=[
    "/",
    "/index.html",
    "/manifiest.json",
    "/sw.js",
    "/js/app.js",
    
    "/assets/css/images/overlay.png",
    "/assets/css/main.css",
    "/assets/css/fontawesome-all.min.css",

    "/assets/js/breakpoints.min.js",
    "/assets/js/browser.min.js",
    "/assets/js/jquery.min.js",
    "/assets/js/jquery.poptrox.min.js",
    "/assets/js/main.js",
    "/assets/js/util.js",

    "/assets/sass/main.scss",
    "/assets/sass/libs/_breakpoints.scss",
    "/assets/sass/libs/_functions.scss",
    "/assets/sass/libs/_html-grid.scss",
    "/assets/sass/libs/_mixins.scss",
    "/assets/sass/libs/_vars.scss",
    "/assets/sass/libs/_vendor.scss",

    "/assets/webfonts/fa-brands-400.eot",
    "/assets/webfonts/fa-brands-400.svg",
    "/assets/webfonts/fa-brands-400.ttf",
    "/assets/webfonts/fa-brands-400.woff",
    "/assets/webfonts/fa-brands-400.woff2",
    "/assets/webfonts/fa-regular-400.eot",
    "/assets/webfonts/fa-regular-400.svg",
    "/assets/webfonts/fa-regular-400.ttf",
    "/assets/webfonts/fa-regular-400.woff",
    "/assets/webfonts/fa-regular-400.woff2",
    "/assets/webfonts/fa-solid-900.oet",
    "/assets/webfonts/fa-solid-900.svg",
    "/assets/webfonts/fa-solid-900.ttf",
    "/assets/webfonts/fa-solid-900.woff",
    "/assets/webfonts/fa-solid-900.woff2",

    "/assets/images/avatar.jpg",
    "/assets/images/bg.jpg",
    "/assets/images/fulls/",
    "/assets/images/fulls/stat-garchomp.png",
    "/assets/images/fulls/stat-cinderace.png",
    "/assets/images/fulls/stat-mr-mime.png",
    "/assets/images/fulls/stat-greninja.png",
    "/assets/images/fulls/stat-snorlax.png",
    "/assets/images/fulls/stat-pikachu.png",

    "/assets/images/icons/pokemon_32x32.png",
    "/assets/images/icons/pokemon_64x64.png",
    "/assets/images/icons/pokemon_256x256.png",

    "/assets/images/thumbs/stat-garchomp.png",
    "/assets/images/thumbs/stat-cinderace.png",
    "/assets/images/thumbs/stat-mr-mime.png",
    "/assets/images/thumbs/stat-greninja.png",
    "/assets/images/thumbs/stat-snorlax.png",
    "/assets/images/thumbs/stat-pikachu.png",

    


    
];

self.addEventListener("install",installEvent=>{
    installEvent.waitUntil(
        caches.open(cachePWA).then(cache =>{
            cache.addAll(assets);
        })
    )

});
self.addEventListener("fetch",fetchEvent=>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res =>{
            return res || fetch(fetchEvent.request);
        })
    )
});
!function (e, s, t, a, d, n, r) {
    e.smrtvds || (
        d = e.smrtvds = function () {
            d.callMethod ? d.callMethod.apply(d, arguments) : d.queue.push(arguments)
        },
        e._smrtvds || (e._smrtvds = d), d.push = d, d.loaded = !0, d.version = "1.1", d.queue = [],
        (n = s.createElement("script")).async = !0,
        n.src = "https://cdn.converteai.net/lib/js/smartplayer/1.7.8-preloading/smartplayer.min.js",
        s.getElementsByTagName("head")[0].appendChild(n)
    )
}
(window, document);

// document.getElementById('vid_61d8648b09496b0008d8ad9f') || (function (w, d, s, c) {
//     // s = d.getElementById('scr_61d8648b09496b0008d8ad9f');
//     // c = d.createElement('DIV');
//     // c.id = 'vid_61d8648b09496b0008d8ad9f';
//     s.parentElement.insertBefore(c, s);
// })
// (window, document);

window.smrtvds('vid_61d8648b09496b0008d8ad9f', '731b1a17-a0f6-4521-b6f8-c62453dc0b90', '61d8634b09496b0008d8ad9e', {
    "autoplay": "smartplay",
    "theme": "rgb(241, 88, 45, 0.7)",
    "foreground_color": "#FFFFFF",
    "video": {},
    "cdn": "cdn.converteai.net",
    "domains": [],
    "displays": {
        "big_play": true,
        "play_pause": false,
        "backward": false,
        "forward": false,
        "volume": false,
        "volume_bar": false,
        "time": false,
        "fullscreen": false,
        "seekbar": false,
        "seekbar_time": false,
        "speed": true
    },
    "callAction": [],
    "resume": false,
    "fake_bar": true,
    "smartplay_options": {
        "top_text": "Seu vídeo já começou",
        "bottom_text": "Clique para ouvir",
        "foreground_color": "#FFFFFF",
        "background_color": "rgb(241, 88, 45, 0.7)"
    },
    "fake_bar_options": { "height": 10 }
});
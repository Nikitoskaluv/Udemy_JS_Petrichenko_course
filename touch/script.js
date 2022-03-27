
// window.addEventListener('DOMContentLoaded', () => {

//     const box = document.querySelector(".box");
//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();
//         console.log("Start");
//         console.log(e.touches);
//     })
// box.addEventListener('touchmove', (e) => {
//     e.preventDefault();
//     console.log("Move");
// })
// box.addEventListener('touchend', (e) => {
//     e.preventDefault();
//     console.log("End");
// })

// })

function LoadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.append(script);
}
LoadScript("some.js");
LoadScript("test.js");
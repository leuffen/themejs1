import {Debouncer} from "@kasimirjs/embed";

let d = new Debouncer(10);
window.addEventListener("mousemove", async (e) => {
    await d.debounce()
    document.body.style.setProperty("--mouse-x", e.clientX / window.screenX * 100 + "");
    document.body.style.setProperty("--mouse-y", e.clientY / window.screenY * 100 + "");
});
document.body.style.setProperty("--mouse-x", 1 + "");
document.body.style.setProperty("--mouse-y", 1 + "");

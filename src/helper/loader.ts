

export function initLoader() {
    let interval = setInterval(() => {
        // Detect if body is loaded
        if (document.querySelector("body")) {
            // Cancel interval
            clearInterval(interval);

            let img = document.querySelector("img");
            let loader = document.createElement("div");
            loader.classList.add("loader");
            loader.appendChild(img.cloneNode(true));

            let loaderBar = document.createElement("div");
            loaderBar.classList.add("loader-bar");
            loader.appendChild(loaderBar);

            document.querySelector("body").appendChild(loader);
        }
    }, 50);
}



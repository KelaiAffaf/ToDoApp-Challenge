// dark && Light Mode
const mode = document.querySelector("#mode");
console.log(mode.href);
const sun = document.querySelector("#sun");
sun.addEventListener("click", () => {
    mode.href = "http://127.0.0.1:5500/style.light.css";
    }
);

const moon = document.querySelector("#moon");
moon.addEventListener("click", () => {
    mode.href = "http://127.0.0.1:5500/style-dark.css";
    }
);




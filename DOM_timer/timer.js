// const timer = document.getElementById("time");
// let now = new Date().toLocaleTimeString();
// timer.innerHTML = now;

function timerFun() {
    const timer = document.getElementById("time");
    let now = new Date().toLocaleTimeString();
    timer.innerHTML = now;
    timer.style.display = "flex";
    timer.style.justifyContent = "center";
    timer.style.alignItems = "center";
    timer.style.height = "100vh";
    timer.style.fontSize = "100px"
}

timerFun();
setInterval(timerFun,1000);

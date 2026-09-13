function timefun(){
    
    let now = new Date();
    let target = new Date("2028-07-14T00:00:00");

    let diff = target - now;
    
    let totalSeconds = Math.floor(diff / 1000);
    let days = Math.floor(totalSeconds/(24*60*60));
    let remainingsec = totalSeconds % (24*60*60);
    let hours = Math.floor(remainingsec/(60*60));
    remainingsec = remainingsec % (60*60);

    let minutes = Math.floor(remainingsec / 60);
    let seconds = remainingsec % 60;

    
    document.getElementById("days").innerHTML = days + " days";
    document.getElementById("hours").innerHTML = hours + " hours";
    document.getElementById("mins").innerHTML = minutes + " mins";
    document.getElementById("sec").innerHTML = seconds + " secs";

    let innerTime = document.getElementById("innerTime");
    innerTime.style.display = "flex";
    innerTime.style.gap = "20px";


    let root = document.getElementById("root");
    root.style.flexDirection = "column";
    root.style.height = "100vh";
    root.style.display = "flex";
    root.style.justifyContent = "center";
    root.style.alignItems = "center";
    root.style.fontSize = "50px";

}

timefun();
setInterval(timefun,1000);


setInterval(() => {
    const d = new Date();
    const htime = d.getHours();
    const mtime = d.getMinutes();
    const stime = d.getSeconds();

    const hrotation = 30 * htime + mtime / 2;  // 360/12 = 30
    const mrotation = 6 * mtime;               // 360/60 = 6
    const srotation = 6 * stime;               // 360/60 = 6

    document.getElementById('hour').style.transform = `rotate(${hrotation}deg)`;
    document.getElementById('min').style.transform = `rotate(${mrotation}deg)`;
    document.getElementById('sec').style.transform = `rotate(${srotation}deg)`;
}, 1000);

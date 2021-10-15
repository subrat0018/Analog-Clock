setInterval(()=>{
    let dt=new Date();
    let h=dt.getHours();
    let m=dt.getMinutes();
    let s=dt.getSeconds();
    let hrot=30*h+0.5*m+s/(2*60);
    let mrot=6*m+s/10;
    let srot=6*s;
    let hour=document.getElementById("hour");
    let minute=document.getElementById("minute");
    let sec=document.getElementById("second");
    hour.style.transform=`rotate(${hrot}deg)`;
    minute.style.transform=`rotate(${mrot}deg)`;
    sec.style.transform=`rotate(${srot}deg)`;

},1000);
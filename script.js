const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

function updateProgress() {

    let checked = 0;

    checkboxes.forEach(box => {
        if(box.checked){
            checked++;
        }
    });

    let total = checkboxes.length;
    let progress = (checked / total) * 100;

    bar.style.width = progress + "%";
    percent.innerHTML = Math.round(progress) + "% Selesai";

    if(progress === 100){
        setTimeout(() => {
            alert("🎉 MISSION COMPLETE!\n\n+50 XP\n\nSelamat! Kamu berhasil menyelesaikan semua misi hari ini.");
        },300);
    }
}

checkboxes.forEach(box=>{
    box.addEventListener("change",updateProgress);
});

updateProgress();

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click",()=>{
    document.querySelector(".mission-box").scrollIntoView({
        behavior:"smooth"
    });
});

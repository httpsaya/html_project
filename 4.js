document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById('btn2');
    const Main = document.querySelector(".main");
    const Window = document.querySelector(".window");
    
    noButton.addEventListener('mouseover', () => {

        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

        noButton.style.position = 'fixed';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
    function openFunc(){
        Window.style.display = "flex";
    }
    function closeFunc(){
        Window.style.display = "none";
    }

    document.getElementById('btn1').addEventListener("click", openFunc);
    document.getElementById("close").addEventListener("click", closeFunc);
});

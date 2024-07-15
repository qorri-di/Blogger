document.querySelectorAll(".btn-center img").forEach(img => {
    img.addEventListener("click", e => {
        e.currentTarget.classList.add("loading");
    });

    img.addEventListener("mousemove", e => {
        let item = e.target;
        let itemRect = item.getBoundingClientRect();
        let offset = Math.abs(e.clientx - itemRect.left) / itemRect.width;

        let prev = item.previousElementSibling || null;
        let next = item.nextElementSibling || null;

        let scale = 0.6;

        resetScale();

        if (prev){
            prev.style.setProperty("--scale",1 + scale * Math.abs(offset - 1));
        }
        item.style.setProperty("--scale",1 + scale);
        if (next){
            next.style.setProperty("--scale",1 + scale + offset);
        }
    });
});

document.querySelector(".btn-center").addEventListener("mouseLeave",e => {
    resetScale();
});

function resetScale(){
    document.querySelectorAll(".btn-center img").forEach(img => {
        img.style.setProperty("--scale",1);
    })
}
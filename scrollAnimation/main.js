window.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("scroll", (e) => {
        const doc=document.documentElement
        console.log(doc.scrollHeight, doc.scrollTop+doc.clientHeight);
        let rotateDeg = (doc.scrollTop + doc.clientHeight) / doc.scrollHeight * 360;
        const circle = document.querySelector(".circle");
        console.log(circle)
        circle.style.transform = `translateX(-50%) rotate(${rotateDeg}deg)`;
		});
})


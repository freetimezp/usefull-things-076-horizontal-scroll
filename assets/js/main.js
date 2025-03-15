const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    direction: "horizontal"
});

let blocks = document.querySelectorAll(".block[data-block-section]");

scroll.on("scroll", () => {
    blocks.forEach((block) => {
        let attr = block.getAttribute("data-block-section");
        let section = document.querySelector(`section[data-block-section='${attr}']`);

        let sectionRect = section.getBoundingClientRect();
        let blockWidth = block.offsetWidth;
        let screenWidth = window.innerWidth;

        if (sectionRect.left <= blockWidth * attr) {
            block.classList.add("fixed");
            block.classList.remove("init");
            block.style.left = `${blockWidth * attr - 64}px`;
        } else if (sectionRect.left >= screenWidth - blockWidth * (blocks.length - attr)) {
            block.classList.add("init");
            block.classList.remove("fixed");
            block.style.left = "";
        } else {
            block.classList.remove("init");
            block.classList.remove("fixed");
        }

        if (block.classList.contains("active")) {
            block.style.left = `${sectionRect.left}px`;
        }
    });
});

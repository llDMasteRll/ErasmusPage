document.querySelector(".move-right").addEventListener("click", () => {
    const slide = [];

    for(let i = 0; i < 5; ++i) 
        slide.push(document.querySelector(`[data-card="${i}"]`).className.split(' ')[1]);

    for(let i = 4; i > 0; i--) 
        document.querySelector(`[data-card="${i}"]`).className = `slide ${slide[i - 1]}`;

    document.querySelector(`[data-card="0"]`).className = `slide ${slide[4]}`;
});


document.querySelector(".move-left").addEventListener("click", () => {
    const slide = [];

    for(let i = 0; i < 5; ++i) 
        slide.push(document.querySelector(`[data-card="${i}"]`).className.split(' ')[1]);

    for(let i = 0; i < 4; ++i)
        document.querySelector(`[data-card="${i}"]`).className = `slide ${slide[i + 1]}`;

    document.querySelector(`[data-card="4"]`).className = `slide ${slide[0]}`;
});


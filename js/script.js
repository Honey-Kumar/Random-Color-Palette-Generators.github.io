const refreshbtn = document.querySelector('.refresh-btn');
const maxPaletteboxes = 32;
refreshbtn.addEventListener('click', generateHex = () => {
    for (let i = 0; i < maxPaletteboxes; i++) {
        let randomhex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomhex = `#${randomhex.padStart(6, '0')}`;

        let colorbox = document.createElement("li");
        colorbox.classList.add('colorbox');
        colorbox.innerHTML = `<div class="box" style="background-color:${randomhex}"></div>
        <span class="colorcode">${randomhex}</span>`;
        let container = document.querySelector('.container');
        colorbox.addEventListener("click", () => copy(colorbox, randomhex));
        container.append(colorbox);
    }

    function copy(element, hexvalue) {
        let hexcode = document.querySelector('.colorcode');
        navigator.clipboard.writeText(hexvalue).then(() => {
            let val = document.createElement('span');
            val.classList.add('colorcode');
            val.innerText = 'copied';
            hexcode.append(val);
            setTimeout(() => hexcode.innerText = hexvalue, 1000);
        }).catch(()=>{
            alert("failed to copy color code");
        })
    }

});
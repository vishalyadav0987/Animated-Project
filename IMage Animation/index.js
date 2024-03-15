const blocksContainer = document.getElementsByClassName("blocks-container")[0];
const blocks = document.getElementsByClassName("block");
for(var i = 0; i < 400; i++){
    blocksContainer.innerHTML += "<div class='block'></div>";
    blocks[i].style.animationDelay = `${i * 0.05}s`
}
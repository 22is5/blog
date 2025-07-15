function mineDeepslate(block) {
    block.dataset.clicks++
    if (block.dataset.clicks == '1') {
        block.src = "textures/destroy/destroy_stage_0.png"
        block.style.opacity = "1"
    } else if (block.dataset.clicks == '2') {
        block.src = "textures/destroy/destroy_stage_1.png"
    } else if (block.dataset.clicks == '3') {
        block.src = "textures/destroy/destroy_stage_2.png"
    } else if (block.dataset.clicks == '4') {
        block.src = "textures/destroy/destroy_stage_3.png"
    } else if (block.dataset.clicks == '5') {
        block.src = "textures/destroy/destroy_stage_4.png"
    } else if (block.dataset.clicks == '6') {
        block.src = "textures/destroy/destroy_stage_5.png"
    } else if (block.dataset.clicks == '7') {
        block.src = "textures/destroy/destroy_stage_6.png"
    } else if (block.dataset.clicks == '8') {
        block.src = "textures/destroy/destroy_stage_7.png"
    } else if (block.dataset.clicks == '9') {
        block.src = "textures/destroy/destroy_stage_8.png"
    } else if (block.dataset.clicks == '10') {
        block.src = "textures/destroy/destroy_stage_9.png"
    } else if (block.dataset.clicks == '11') {
        block.src = "textures/deepslate.png"
        block.style.filter = "brightness(50%)"
        let sound = new Audio("audio/deepslate-break-1.mp3");
                sound.play();

}}
function mineDebug(block) {
    block.dataset.clicks++
    if (block.dataset.clicks == '1') {
        block.src = "textures/lamp-off.png"
        block.style.opacity = "1"
    } else if (block.dataset.clicks == '2') {
        block.src = "textures/lamp-on.png"
    } else if (block.dataset.clicks == '3') {
        block.src = "textures/lamp-off.png"
    } else if (block.dataset.clicks == '4') {
        block.src = "textures/lamp-on.png"
    } else if (block.dataset.clicks == '5') {
        block.src = "textures/lamp-off.png"
    } else if (block.dataset.clicks == '6') {
        block.src = "textures/lamp-on.png"
    } else if (block.dataset.clicks == '7') {
        block.src = "textures/lamp-off.png"
    } else if (block.dataset.clicks == '8') {
        block.src = "textures/lamp-on.png"
    } else if (block.dataset.clicks == '9') {
        block.src = "textures/lamp-off.png"
    } else if (block.dataset.clicks == '10') {
        block.src = "textures/lamp-on.png"
    } else if (block.dataset.clicks == '11') {
        block.src = "textures/missingno.png"
        block.style.filter = "brightness(100%)"
        let sound = new Audio("audio/glassbreak.ogg");
                sound.play();

}}
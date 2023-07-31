
document.addEventListener("DOMContentLoaded", function () {
    let loadMoreBoton1 = document.querySelector('#load-more-1');
    let currentItem1 = 4;

    loadMoreBoton1.onclick = () => {
        let boxes = Array.from(document.querySelectorAll('.box-container-1 .box-1'));
        for (let i = currentItem1; i < currentItem1 + 4; i++) {
            boxes[i].style.display = 'inline-block';
        }
        currentItem1 += 4;
        if (currentItem1 >= boxes.length) {
            loadMoreBoton1.style.display = 'none';
        }
    }

    let loadMoreBoton2 = document.querySelector('#load-more-2');
    let currentItem2 = 4;

    loadMoreBoton2.onclick = () => {
        let boxes = Array.from(document.querySelectorAll('.box-container-2 .box-2'));
        for (let i = currentItem2; i < currentItem2 + 4; i++) {
            boxes[i].style.display = 'inline-block';
        }
        currentItem2 += 4;
        if (currentItem2 >= boxes.length) {
            loadMoreBoton2.style.display = 'none';
        }
    }

    let loadMoreBoton3 = document.querySelector('#load-more-3');
    let currentItem3 = 4;

    loadMoreBoton3.onclick = () => {
        let boxes = Array.from(document.querySelectorAll('.box-container-3 .box-3'));
        for (let i = currentItem3; i < currentItem3 + 4; i++) {
            boxes[i].style.display = 'inline-block';
        }
        currentItem3 += 4;
        if (currentItem3 >= boxes.length) {
            loadMoreBoton3.style.display = 'none';
        }
    }
});



const emptyBox = document.querySelector('.empty');
const emptyBoxBtn = document.querySelector('.empty .btn');
const addMaterialBox = document.querySelector('.add-material');

emptyBoxBtn.addEventListener('click', () => {
    addMaterialBox.classList.remove('hide');
    emptyBox.classList.add('hide');
});

const closeBox = (box) => {
    const closeBtn = document.querySelector('.close');
    const cancelBtn = document.querySelector('.cancel');

    [closeBtn, cancelBtn].forEach((btn) => {
        btn.addEventListener('click', () => {
            box.classList.add('hide');
        });
    });
};

closeBox(addMaterialBox);

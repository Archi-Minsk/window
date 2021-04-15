const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('popupImg');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignContent = 'center';
    imgPopup.style.display = 'none';
    bigImage.style.width = '40%';
    bigImage.style.height = '70%';

    imgPopup.append(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');

            bigImage.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        }

        if (target && target.matches('div.popupImg')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });


};

export default images;
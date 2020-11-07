window.onload = () => {
    let titles = document.querySelectorAll('[title]');

    titles.forEach(element => {
        element.setAttribute('data-title', element.getAttribute('title'));
        element.removeAttribute('title');
        let check = false;

        element.addEventListener('mouseover', (e) => {
            if (!check) {
                check = true;
                let titleText = document.createElement('span');
                titleText.classList.add('title-text');

                console.dir(e.target)

                titleText.style.left = e.clientX + 20 + "px";
                titleText.style.top = e.target.offsetTop - 25 + "px";
                titleText.innerHTML = e.target.getAttribute('data-title');

                document.body.append(titleText);

                e.target.addEventListener('mouseout', () => {
                    titleText.remove();
                    check = false;
                })
            }

        })
    });
};
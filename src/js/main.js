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
                document.body.append(titleText);

                setTimeout(() => {
                    titleText.innerHTML = e.target.getAttribute('data-title');
                }, 0)

                let left = 15;
                setTimeout(() => {
                    if ((window.innerWidth - e.clientX) > 200) {
                        titleText.style.left = e.clientX + "px";
                    } else {
                        left = window.innerWidth - 2 * titleText.offsetWidth;
                        if (left < 0) left = 15;
                        titleText.style.left = left + "px";
                        if (e.clientX - (left + titleText.offsetWidth) > 0) {
                            titleText.style.left = left + (e.clientX - (left + titleText.offsetWidth)) + "px";
                        }
                    }
                    let top = e.target.offsetTop - titleText.offsetHeight - 2;
                    if (top < window.pageYOffset) top = window.pageYOffset;
                    titleText.style.top = top + "px";
                }, 0);

                e.target.addEventListener('mouseout', () => {
                    titleText.remove();
                    check = false;
                })
                document.addEventListener('scroll', () => {
                    titleText.remove();
                    check = false;
                })

            }

        })
    });
};
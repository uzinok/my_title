window.onload = () => {
    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if (!isMobile.any()) {
        const titles = document.querySelectorAll('[title]');

        for (let i = 0; i < titles.length; i++) {
            const title = titles[i];

            title.setAttribute('data-title', title.getAttribute('title'));
            title.removeAttribute('title');

            title.addEventListener('mouseover', (e) => {
                const span = document.createElement('span');
                span.innerHTML = title.getAttribute('data-title');
                span.classList.add('title-text');
                document.body.appendChild(span);
                setTimeout(() => {
                    span.classList.add('title-text-v');
                }, 0)

                const top = e.target.offsetTop - span.offsetHeight - 2;
                if (top < document.body.scrollY) top = document.body.scrollY;
                span.style.top = top + "px";

                if ((window.innerWidth - e.clientX) > 200) {
                    span.style.left = e.clientX + "px";
                } else {
                    let left = window.innerWidth - 2 * span.offsetWidth;

                    if (left < 0) left = 15;

                    span.style.left = left + 2 + "px";

                    if (e.clientX - (left + span.offsetWidth) > 0) {
                        span.style.left = left + (e.clientX - (left + span.offsetWidth)) + "px";
                    }
                }

                e.target.addEventListener('mouseout', (e) => {
                    span.remove();
                })
            })
        }
    }
};

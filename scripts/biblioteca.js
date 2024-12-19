document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('[class*="topbar-"]');

    elements.forEach((element) => {
        const listItems = element.querySelectorAll('li');

        listItems.forEach((li) => {
            li.addEventListener('click', function (e) {
                e.stopPropagation();

                const parentTopbar = this.closest('[class*="topbar-"]');
                if (!parentTopbar) return;

                const allListItems = parentTopbar.querySelectorAll('li');
                allListItems.forEach((item) => {
                    const badge = item.querySelector('.badge');
                    if (badge) {
                        if (parentTopbar.classList.contains('topbar-difficulties')) {
                            badge.classList.remove('badge-difficulties-active');
                        } else if (parentTopbar.classList.contains('topbar-categories')) {
                            badge.classList.remove('badge-categories-active');
                        }
                    }
                });

                const badge = this.querySelector('.badge');
                if (badge) {
                    if (parentTopbar.classList.contains('topbar-difficulties')) {
                        badge.classList.add('badge-difficulties-active');
                    } else if (parentTopbar.classList.contains('topbar-categories')) {
                        badge.classList.add('badge-categories-active');
                    }
                }
            });
        });
    });
});

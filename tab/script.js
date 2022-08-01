const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function (item) {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        console.log(tabId)


        tabsBtn.forEach(function (item) {
            item.classList.remove('active');
        });

        // ! Забираємо клас актів у решти 
        tabsItems.forEach(function (item) {
            item.classList.remove('active');
        });


        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
});
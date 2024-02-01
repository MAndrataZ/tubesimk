/*SIDEBAR*/
const menu = document.getElementById('menuLabel');
const sidebar = document.getElementsByClassName('sidebar')[0];

menu.addEventListener('click', function() {
    sidebar.classList.toggle('hide');

}) 

/*Menu dynamic*/
document.addEventListener('DOMContentLoaded', function () {
    //home.html seagai default
    loadPage('home.html');

    // ambil nilai listItem
    var listItems = document.querySelectorAll('.listItem a');

    listItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            // ambil href
            var pageUrl = this.getAttribute('href');

            // tampil
            loadPage(pageUrl);
        });
    });
});

function loadPage(url) {
    // ngambil konten halaman menggunakan AJAX atau ambil API
    fetch(url)
        .then(response => response.text())
        .then(html => {
            // masukin file html ke bagian mainContent
            document.getElementById('pageContent').innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
}
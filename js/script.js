/*SIDEBAR*/
const menu = document.getElementById('menuLabel');
const sidebar = document.getElementsByClassName('sidebar')[0];



menu.addEventListener('click', function() {
    sidebar.classList.toggle('hide');

}) 

/*Menu dynamic*/
document.addEventListener('DOMContentLoaded', function () {
    //home.html sebagai default
    loadPage('home.html');

    // ambil nilai listItem
    var listItems = document.querySelectorAll('.listItem a');

    listItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            // ambil href
            var pageUrl = this.getAttribute('href');

            // tampilkan
            loadPage(pageUrl);
        });
    });
});

function loadPage(url) {
    // mengambil konten halaman menggunakan fetch
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            // menampilkan konten di dalam mainContent
            document.getElementById('pageContent').innerHTML = html;

            // Menambahkan logika untuk menampilkan atau menyembunyikan inputButtons
            if (url === 'barang.html') {
                // Sembunyikan main2 saat dokumen dimuat
                document.querySelector('.main2').style.display = 'none';

                // Tambahkan event listener untuk tombol inputBarang
                document.getElementById('inputBarang').addEventListener('click', function () {
                    // Tampilkan main2 dan sembunyikan main1
                    document.querySelector('.main1').style.display = 'none';
                    document.querySelector('.main2').style.display = 'block';
                    // Sembunyikan inputButtons
                    document.querySelector('.inputButtons').style.display = 'none';
                });

                // Tambahkan event listener untuk tombol kembaliMenu1
                document.getElementById('kembaliMenu1').addEventListener('click', function () {
                    // Tampilkan main1 dan sembunyikan main2
                    document.querySelector('.main1').style.display = 'block';
                    document.querySelector('.main2').style.display = 'none';
                    // Tampilkan inputButtons
                    document.querySelector('.inputButtons').style.display = 'block';
                });

                // Tambahkan event listener untuk tombol inputBarang
                document.getElementById('inputHargaBarang').addEventListener('click', function () {
                    // Tampilkan main2 dan sembunyikan main1
                    document.querySelector('.main1').style.display = 'none';
                    document.querySelector('.main3').style.display = 'block';
                    // Sembunyikan inputButtons
                    document.querySelector('.inputButtons').style.display = 'none';
                });

                // Tambahkan event listener untuk tombol kembaliMenu1
                document.getElementById('kembaliMenuBarang').addEventListener('click', function () {
                    // Tampilkan main1 dan sembunyikan main2
                    document.querySelector('.main1').style.display = 'block';
                    document.querySelector('.main3').style.display = 'none';
                    // Tampilkan inputButtons
                    document.querySelector('.inputButtons').style.display = 'block';
                });
            }
            else
            if (url === 'produksi.html'){
                    // Sembunyikan main2 saat dokumen dimuat
                    document.querySelector('.menu2').style.display = 'none';
                
                    // Tambahkan event listener untuk tombol inputBarang
                    document.getElementById('inputProduk').addEventListener('click', function () {
                        // Tampilkan main2 dan sembunyikan main1
                        document.querySelector('.menu1').style.display = 'none';
                        document.querySelector('.menu2').style.display = 'block';
                        // Sembunyikan inputButtons
                        document.querySelector('.inputButtons').style.display = 'none';
                    });
                
                    // Tambahkan event listener untuk tombol kembaliMenu1
                    document.getElementById('kembaliMenu1').addEventListener('click', function () {
                        // Tampilkan main1 dan sembunyikan main2
                        document.querySelector('.menu1').style.display = 'block';
                        document.querySelector('.menu2').style.display = 'none';
                        // Tampilkan inputButtons
                        document.querySelector('.inputButtons').style.display = 'block';
                    });
                
                    // Tambahkan event listener untuk tombol inputBarang
                    document.getElementById('inputHargaProduk').addEventListener('click', function () {
                        // Tampilkan main2 dan sembunyikan main1
                        document.querySelector('.menu1').style.display = 'none';
                        document.querySelector('.menu3').style.display = 'block';
                        // Sembunyikan inputButtons
                        document.querySelector('.inputButtons').style.display = 'none';
                    });
                
                    // Tambahkan event listener untuk tombol kembaliMenu1
                    document.getElementById('kembaliMenuProduk').addEventListener('click', function () {
                        // Tampilkan main1 dan sembunyikan main2
                        document.querySelector('.menu1').style.display = 'block';
                        document.querySelector('.menu3').style.display = 'none';
                        // Tampilkan inputButtons
                        document.querySelector('.inputButtons').style.display = 'block';
                    });
                
                
                };
                
                
            
        })
        .catch(error => console.error('Error loading page:', error));
}


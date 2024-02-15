document.addEventListener('DOMContentLoaded', function () {
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


});



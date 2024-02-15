
document.addEventListener('DOMContentLoaded', function () {
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
        console.log("Tombol 'Input Harga Barang' diklik"); 
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


});


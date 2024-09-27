// manipulasi link
$('.page-scroll').on('click', function(e) {
	// ambil isi href
	const tujuan = $(this).attr('href');
	// tangkap elemen yang bersangkutan
	const elemenTujuan = $(tujuan);

	// buat animasi
	$('html').animate({
		scrollTop: elemenTujuan.offset().top - 60
	}, 1000, 'swing');

	// nonaktifkan fungsi attr href
	e.preventDefault();
});


// Manipulasi class active
// carikan elemen dengan class(.nav-item).ketika('di-klik', jalankan fungsi() { 
$('.nav-item').on('click', function() {
	// pindahkan setiap class active sebelumnya
	$('.nav-item').removeClass('active');
	// tambahkan class active ke-item yang sedang di klik
	$(this).addClass('active');
});



// efek paralax
// jQuery buatkan kondisi ketika (window).discroll(lakukan fungsi berikut() {
$(window).scroll(function() {
	// dapatkan / tangkap jarak scroll
	let wScroll = $(this).scrollTop();
	// jQuery carikan class().kemudian ubah css-nya sebagai berikut({
	$('.jumbotron img').css({
		// gerakkan gambar keatas sesuai dengan jarak dari wScroll-nya kemudian / 4
		// wScroll / 4 bermakna kecepatan pargeseran elemen || justmyopinion
		'transform' : 'translate(0, '+ wScroll / 6 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0, '+ wScroll / 3 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0, '+ wScroll / 1.3 +'%)'
	});


	// galeri
	if ( wScroll > $('.portfolio').offset().top - 250 ) {
		$('.portfolio .card').each(function(i) {
			setTimeout(function() {
				$('.portfolio .card').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}
});


// about
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});




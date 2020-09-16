//event pada saat link di klik
$('.page-scroll').on('click', function(e){


	//abil isi href
	var tujuan = $(this).attr('href');

	//tangkap element
	var elemenTujuan = $(tujuan);

	console.log($('body').animate({scrollTop: elemenTujuan.offset().top - 50}
		, 1250, 'easeInOutExpo');


	e.preventDefault(); 





		





})
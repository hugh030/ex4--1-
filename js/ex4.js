// JavaScript Document

$(document).ready(function(){

//menu
	$(".menu").click(function(){ 
		$("nav").slideToggle();
	});//點擊menu時nav會滑下來 再點擊會滑上去
	//toggle顯示

//menu rwd
	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
	});//抓瀏覽器大小 如果大於768顯示nav 否則隱藏nav

	
//first but + content
	$(".list").eq(0).addClass("ch_bg");
	$(".content").hide().eq(0).show();

//click event
	$(".list").click(function(){
        $(this).addClass("ch_bg").siblings().removeClass("ch_bg");
		
		var _index = $(this).index();//找到點擊的索引值
		$(".content").stop(true, true).hide().eq(_index).fadeIn(600);

	});

//swiper
var swiper = new Swiper('.mySwiper', {
		speed:3000,//slide切換速度
        spaceBetween: 0,//slide之間的距離
        centeredSlides: true,
        autoplay: {
          delay: 2500,//停留時間
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

});
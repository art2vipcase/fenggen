// JavaScript Document
//手機主選單
$(document).ready(function(){
	$('#menu').slicknav();
});


//faq
$(function(){
		// 幫 div.qa_title 加上 hover 及 click 事件
		// 同時把兄弟元素 div.qa_content 隱藏起來
		$('#qaContent ul.accordionPart li div.qa_title').hover(function(){
			$(this).addClass('qa_title_on');
		}, function(){
			$(this).removeClass('qa_title_on');
		}).click(function(){
			// 當點到標題時，若答案是隱藏時則顯示它；反之則隱藏
			$(this).next('div.qa_content').slideToggle();
		}).siblings('div.qa_content').hide();
		// 全部展開
		$('#qaContent .qa_showall').click(function(){
			$('#qaContent ul.accordionPart li div.qa_content').slideDown();
			return false;
		});
		// 全部隱藏
		$('#qaContent .qa_hideall').click(function(){
			$('#qaContent ul.accordionPart li div.qa_content').slideUp();
			return false;
		});
		// 關閉
		$('#qaContent .close_qa').click(function(){
			$(this).parents('.qa_content').prev().click();
			return false;
		});
	});



// 首頁中間文字效果
$('h2 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop:2})
  .add({
    targets: 'h2 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 1000,
    delay: function(el, i) {
      return 50 * i;
    }
  }).add({
    targets: 'h2',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });


// logo文字
$('.slogan .slogan-letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='slogan-letter'>$&</span>"));
});

anime.timeline({loop:2})
  .add({
    targets: '.slogan .slogan-letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 1000,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 50 * i;
    }
  }).add({
    targets: '.slogan',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


//loading
$('.loading-main .loading-letters, .loading-main .loading-letters02').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.loading-main .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: function(el, i) {
      return 70 * (i+1)
    }
  }).add({
    targets: '.loading-main .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 400,
    offset: '-=875',
    delay: function(el, i, l) {
      return 80 * (l - i);
    }
  }).add({
    targets: '.loading-main',
    opacity: 1,
    duration: 500,
    easing: "easeOutExpo",
    delay: 500
  });


//滾動出現效果
		window.sr = ScrollReveal()
           sr.reveal('.banner-title,.contact-map', {
			   origin: "top",  // 起始位置
			   distance: "50%",  // 距離
			   duration: 800,  // 動畫時間
			   delay: 0,  // 動畫延遲時間
			   rotate: { x: 0, y: 0, z: 0 },  // 旋轉角度
			   opacity: 0,  // 透明度
			   scale: .9, // 縮放比例
			   easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", // 動畫速度曲線
			   container: window.document.documentElement, // 外層
			   mobile: true, // 支援行動裝置
			   reset: true, // 每次都啟動動畫
			   useDelay: "always", // 延遲動畫次數
			   viewFactor: 0.4, // 當該物件在可視範圍內，則顯示此物件(0.2表示可視範圍20%)
			   viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, // 當外層有設定間隔造成偏移，則請設定在此維持精準度
			   beforeReveal: function (domEl) { console.log(1) }, // 當啟動前，則執行此函式
			   beforeReset: function (domEl) {console.log(2) }, // 當重啟前，則執行此函式
			   afterReveal: function (domEl) {console.log(3) }, // 當啟動後，則執行此函式
			   afterReset: function (domEl) {console.log(4) } // 當重啟後，則執行此函式
		   });
           sr.reveal('.in-left-menu,.news>ul>li:nth-child(6n-3),.news>ul>li:nth-child(6n-4),.news>ul>li:nth-child(6n-5),.news-detail-date,.pro-list>ul>li:nth-child(8n),.pro-list>ul>li:nth-child(8n-1),.pro-list>ul>li:nth-child(8n-2),.pro-list>ul>li:nth-child(8n-3),.elem:nth-child(8n-4),.elem:nth-child(8n-5),.elem:nth-child(8n-6),.elem:nth-child(8n-7),.team-list>ul>li:nth-child(6n),.team-list>ul>li:nth-child(6n-1),.team-list>ul>li:nth-child(6n-2),.vendor>ul>li:nth-child(8n),.vendor>ul>li:nth-child(8n-1),.vendor>ul>li:nth-child(8n-2),.vendor>ul>li:nth-child(8n-3),.opinion:nth-child(even)', {
			   origin: "left",  // 起始位置
			   distance: "50%",  // 距離
			   duration: 800,  // 動畫時間
			   delay: 0,  // 動畫延遲時間
			   rotate: { x: 0, y: 0, z: 0 },  // 旋轉角度
			   opacity: 0,  // 透明度
			   scale: .9, // 縮放比例
			   easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", // 動畫速度曲線
			   container: window.document.documentElement, // 外層
			   mobile: true, // 支援行動裝置
			   reset: true, // 每次都啟動動畫
			   useDelay: "always", // 延遲動畫次數
			   viewFactor: 0.2, // 當該物件在可視範圍內，則顯示此物件(0.2表示可視範圍20%)
			   viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, // 當外層有設定間隔造成偏移，則請設定在此維持精準度
			   beforeReveal: function (domEl) { console.log(1) }, // 當啟動前，則執行此函式
			   beforeReset: function (domEl) {console.log(2) }, // 當重啟前，則執行此函式
			   afterReveal: function (domEl) {console.log(3) }, // 當啟動後，則執行此函式
			   afterReset: function (domEl) {console.log(4) } // 當重啟後，則執行此函式
		   });
           sr.reveal('.news>ul>li:nth-child(6n),.news>ul>li:nth-child(6n-1),.news>ul>li:nth-child(6n-2),.pro-list>ul>li:nth-child(8n-4),.pro-list>ul>li:nth-child(8n-5),.pro-list>ul>li:nth-child(8n-6),.pro-list>ul>li:nth-child(8n-7),.elem:nth-child(8n),.elem:nth-child(8n-1),.elem:nth-child(8n-2),.elem:nth-child(8n-3),.team-list>ul>li:nth-child(6n-3),.team-list>ul>li:nth-child(6n-4),.team-list>ul>li:nth-child(6n-5),.vendor>ul>li:nth-child(8n-4),.vendor>ul>li:nth-child(8n-5),.vendor>ul>li:nth-child(8n-6),.vendor>ul>li:nth-child(8n-7),.opinion:nth-child(odd)', {
			   origin: "right",  // 起始位置
			   distance: "50%",  // 距離
			   duration: 800,  // 動畫時間
			   delay: 0,  // 動畫延遲時間
			   rotate: { x: 0, y: 0, z: 0 },  // 旋轉角度
			   opacity: 0,  // 透明度
			   scale: .9, // 縮放比例
			   easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", // 動畫速度曲線
			   container: window.document.documentElement, // 外層
			   mobile: true, // 支援行動裝置
			   reset: true, // 每次都啟動動畫
			   useDelay: "always", // 延遲動畫次數
			   viewFactor: 0.2, // 當該物件在可視範圍內，則顯示此物件(0.2表示可視範圍20%)
			   viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, // 當外層有設定間隔造成偏移，則請設定在此維持精準度
			   beforeReveal: function (domEl) { console.log(1) }, // 當啟動前，則執行此函式
			   beforeReset: function (domEl) {console.log(2) }, // 當重啟前，則執行此函式
			   afterReveal: function (domEl) {console.log(3) }, // 當啟動後，則執行此函式
			   afterReset: function (domEl) {console.log(4) } // 當重啟後，則執行此函式
		   });

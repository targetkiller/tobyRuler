/*
 * @name:tobyRuler;
 * @author:tqtan;
 * @date:2014-04-14;
 * @content:基础控制;
*/
var nowPageIndex = 1;
var nowBgIndex = 1;
var bgChangeVelocity = 500;//背景切换速度
var bgChangeOffset = 200;//背景切换位移
var pgChangeVelocity = 500;//页面切换速度
var pgChangeOffset = 200;//页面切换位移

// 第一帧：开始按钮
$('.begin-btn').click(function(){
	// 变换背景
	var $bgbefore = $('.bg1');
	var $bgafter = $('.bg2');
	$bgbefore.animate({
		left:'-='+bgChangeOffset,
		opacity: 0.2},
		bgChangeVelocity, function() {
		$(this).addClass('hide');
	});

	$bgafter.removeClass('hide');
	$bgafter.animate({
			left:'-='+bgChangeOffset,
			opacity: 1},
			bgChangeVelocity, function() {
	});

	// 变换页面
	var $pgbefore = $('.page1');
	var $pgafter = $('.page2');
	$pgbefore.animate({
		left:'-='+pgChangeOffset,
		opacity: 0.2},
		pgChangeVelocity, function() {
		$(this).addClass('hide');
	});

	$pgafter.removeClass('hide');
	$pgafter.animate({
			left:'-='+pgChangeOffset,
			opacity: 1},
			pgChangeVelocity, function() {
	});	
});
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
var pgChangeOffset = 280;//页面切换位移
var finIndex = 35;//最后帧
var $opt = $('#opt');
var $hand = $('#hand');
var $clickdot = $('#clickdot');

// 开始按钮
$('.begin-btn').click(function(){
	// var autoFrame = setInterval(function(){nextFrame();},1000);
	$(this).addClass('hide');
	start();
});

// 展示开始
function start(){
	// 开始->移动到帧 用时800
	// 初始位置 l888 t320
	// 结束位置 l526 t320
	handMove('526px','+=0',800,0,function(){

		// 帧1->帧2 用时500 上次800
		// 初始位置 l526 t320
		// 结束为止 l406 t320
		nextFrame();
		handMove('406px','+=0',500,0,function(){
			handReset('526px','+=0');

			// 帧2->帧3 用时500 上次1300
			// 初始位置 l526 t320
			// 结束为止 l406 t320
			nextFrame();
			handMove('406px','+=0',500,0,function(){
				handReset('526px','+=0');

				// 帧3->帧4 用时500 上次1800
				// 初始位置 l526 t320
				// 结束为止 l406 t320
				nextFrame();
				handMove('406px','+=0',500,0,function(){
					handReset('526px','+=0');

					// 帧4->帧5 用时500 上次2300
					// 初始位置 l526 t320
					// 结束为止 l406 t320
					nextFrame();
					handMove('406px','+=0',500,0,function(){handReset('526px','+=0');});
				});
			});
		});
	});
}

// 移动操作手
// l:left,t:top,d:duration,dl:delay
function handMove(l,t,d,dl,callback){
	$opt.removeClass('hide');
	var _l = l||'+=0';
	var _t = t||'+=0';
	var _d = d||0;
	var _dl = dl||0;
	$opt.delay(_dl).animate({
		left: _l,
		top: _t,
		opacity: 1},
		_d, function() {
		// 显示操作点
		$clickdot.removeClass('hide');
		if(callback && (callback  instanceof Function)){
            callback();//回调
        }
	});
}

// 重置操作手
// l:left,t:top
function handReset(l,t,callback){
	var _l = l||'+=0';
	var _t = t||'+=0';
	$opt.css({left:_l,top:_t,opacity:0.5}).addClass('hide');
}

// 切换下一帧
// dl:delay
function nextFrame(dl){
	var _dl = dl||0;

	// 判断是否最后帧
	if(nowPageIndex === finIndex){
		nowPageIndex =1;
		nowBgIndex =1;
		window.location.reload();
	}

	// 变换背景
	var $bgbefore = $('.bg'+nowBgIndex);
	var $bgafter = $('.bg'+(nowBgIndex+1));
	$bgbefore.delay(_dl).animate({
		left:'-='+bgChangeOffset,
		opacity: 0.2},
		bgChangeVelocity, function() {
		$(this).addClass('hide');
	});

	$bgafter.removeClass('hide');
	$bgafter.delay(_dl).animate({
		left:'-='+bgChangeOffset,
		opacity: 1},
		bgChangeVelocity, function() {
		nowBgIndex++;
	});

	// 变换页面
	var $pgbefore = $('.page'+nowPageIndex);
	var $pgafter = $('.page'+(nowPageIndex+1));
	$pgbefore.delay(_dl).animate({
		left:'-='+pgChangeOffset,
		opacity: 0.2},
		pgChangeVelocity, function() {
		$(this).addClass('hide');
	});

	$pgafter.removeClass('hide');
	$pgafter.delay(_dl).animate({
		left:'-='+pgChangeOffset,
		opacity: 1},
		pgChangeVelocity, function() {
		nowPageIndex++;
	});	
}
/*
 * @name:tobyRuler;
 * @author:tqtan;
 * @date:2014-04-14;
 * @content:基础控制;
*/
var bgChangeVelocity = 800;//背景切换速度
var pgChangeVelocity = 800;//页面切换速度
var showPageWait = 200;//页面停顿时间
var inputTextVelocity = 200;//登录框打字速度
var infoShowVelocity = 400;//提示框显示速度
var infoShowDuration = 5000;//提示框持续时间

//调试用速度
// var bgChangeVelocity = 0;
// var pgChangeVelocity = 0;
// var showPageWait = 0;
// var inputTextVelocity = 0;
// var infoShowVelocity = 0;
// var infoShowDuration = 0;

var nowPageIndex = 1;
var nowBgIndex = 1;
var bgChangeOffset = 200;//背景切换位移
var pgChangeOffset = 280;//页面切换位移
var finIndex = 33;//最后帧
var $opt = $('#opt');
var $hand = $('#hand');
var $clickdot = $('#clickdot');

// 开始按钮
$('.begin-btn').click(function(){
	$(this).addClass('hide');
	start();
});

// 展示开始
function start(){
	// 开始->移动到帧
	handMove('375px','580px',800,0,1,function(){
		handReset('+=0','+=0');
		// 帧1->帧2
		nextFrame(0);
		handMove('526px','320px',800,pgChangeVelocity,1,function(){
			handReset('+=0','+=0');
			// 帧2->帧3
			nextFrame(showPageWait);
			handMove('406px','+=0',pgChangeVelocity,showPageWait,1,function(){
				handReset('526px','+=0');
				// 帧3->帧4
				nextFrame(showPageWait);
				handMove('406px','+=0',pgChangeVelocity,showPageWait,1,function(){
					handReset('526px','+=0');
					// 帧4->帧5
					nextFrame(showPageWait);
					handMove('406px','+=0',pgChangeVelocity,showPageWait,1,function(){
						handReset('526px','+=0');
						// 帧5->帧6
						nextFrame(showPageWait);
						handMove('406px','+=0',pgChangeVelocity,showPageWait,1,function(){
							handReset('526px','+=0');
							handMove('566px','+=10',pgChangeVelocity,0,1,function(){
								handReset('+=0','+=0');
								pg6input1TextIn();
								handMove('566px','+=40',200,inputTextVelocity*9,1,function(){
									handReset('+=0','+=0');
									pg6input2TextIn();
									handMove('566px','430px',200,inputTextVelocity*6,1,function(){
										handReset('+=0','+=0');
										// 帧6->帧7
										nextFrame();
										handMove('416px','400px',800,pgChangeVelocity,1,function(){
											handReset('+=0','+=0');
											// 帧7->帧8
											nextFrame(0);
											handMove('601px','165px',800,pgChangeVelocity,1,function(){
												handReset('+=0','+=0');
												// 帧8->帧8info->帧8
												pginfoShow(infoShowDuration);
												handMove('480px','405px',800,infoShowDuration+infoShowVelocity*2,1,function(){
													handReset('+=0','+=0');
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
}

// 显示提示页 pg8,pg15
// d:duration
function pginfoShow(d){
	var _d = d||0;
	// 显示提示页
	var $pginfo = $('.page'+nowPageIndex+'info');
	$pginfo.slideDown(infoShowVelocity,function(){handReset('+=0','+=0');});
	$pginfo.delay(d).slideUp(infoShowVelocity);
}

// 登录框输入账号
function pg6input1TextIn(){
	var $pg6input1 = $('.pg6-input');
	$pg6input1.focus();
	var accountNum = 9;
	var accountIndex = 0;
	var account = ['3','6','9','1','6','0','0','2','0'];
	var accountInter = setInterval(function(){
		if(accountIndex == (accountNum-1)){
			clearInterval(accountInter);
		}
		var text = $pg6input1.val()+account[accountIndex];
		$pg6input1.val(text);
		accountIndex++;
	},inputTextVelocity);
}

// 等路况输入密码
function pg6input2TextIn(){
	var $pg6input2 = $('.pg6-input2');
	$pg6input2.focus();
	var passwdNum = 6;
	var passwdIndex = 0;
	var password = '*';
	var passwdInter = setInterval(function(){
		if(passwdIndex == (passwdNum-1)){
			clearInterval(passwdInter);
		}
		var text = $pg6input2.val()+password;
		$pg6input2.val(text);
		passwdIndex++;
	},inputTextVelocity);
}

// 移动操作手
// l:left,t:top,d:duration,dl:delay,dot:1/0 是否显示点
function handMove(l,t,d,dl,dot,callback){
	$opt.removeClass('hide');
	if(dot==1){
		// $clickdot.removeClass('hide');
		$clickdot.css('opacity',1);
	}
	var _l = l||'+=0';
	var _t = t||'+=0';
	var _d = d||0;
	var _dl = dl||0;
	$opt.delay(_dl).animate({
		left: _l,
		top: _t,
		opacity: 1},
		_d, function() {
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
	// $opt.addClass('hide');
	$opt.css({left:_l,top:_t,opacity:0.5})
	$clickdot.css('opacity',0);
	$clickdot.addClass('hide');
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

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
var infoShowDuration = 4000;//提示框持续时间
var numTextVelocity = 5;//数字变动速度
var numValue = 160;//测身高时候的值

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
												// 帧8->帧8info
												pginfoShow(0);
												handMove('360px','165px',500,infoShowDuration+infoShowVelocity,1,function(){
													handReset('+=0','+=0');
													// 帧8info->帧8
													pginfoHide(0);
													handMove('480px','405px',800,infoShowVelocity,1,function(){
														// handReset('+=0','+=0');
														pg8act(function(){
															handReset('+=0','+=0');
															// 帧8->帧9
															nextFrame(0);
															handMove('550px','505px',800,pgChangeVelocity+infoShowDuration,1,function(){
																handReset('+=0','+=0');
																// 帧9->帧10
																nextFrame(0);
																handMove('372px','175px',800,pgChangeVelocity+infoShowDuration,1,function(){
																	handReset('+=0','+=0');
																	// 帧10->帧9
																	backFrame(0);
																	handMove('550px','448px',800,pgChangeVelocity,1,function(){
																		handReset('+=0','+=0');
																		// 帧9->帧11
																		nextFrame(0,2);
																		handMove('570px','338px',800,pgChangeVelocity,1,function(){
																			handReset('+=0','+=0');
																			// 帧11->帧11info
																			pginfoShow();
																			handMove('594px','172px',500,infoShowDuration+infoShowVelocity,1,function(){
																				handReset('+=0','+=0');
																				// 帧11info->帧11
																				pginfoHide();
																				handMove('604px','172px',800,infoShowVelocity,1,function(){
																					handReset('+=0','+=0');
																					// 帧11->帧14
																					nextFrame(0,3);
																					handMove('374px','172px',800,infoShowDuration+pgChangeVelocity,1,function(){
																						handReset('+=0','+=0');
																						// 帧14->帧11
																						backFrame(0,-3);
																						handMove('374px','172px',200,pgChangeVelocity,1,function(){
																							handReset('+=0','+=0');
																							// 帧11->帧9
																							backFrame(0,-2);
																							handMove('374px','172px',200,pgChangeVelocity,1,function(){
																								handReset('+=0','+=0');
																								// 帧9->帧8
																								backFrame(0,-1);
																								handMove('364px','172px',200,pgChangeVelocity,1,function(){
																									handReset('+=0','+=0');
																									// 帧8->帧7
																									backFrame(0,-1);
																									handMove('444px','522px',800,pgChangeVelocity,1,function(){
																										handReset('+=0','+=0');
																										// 帧7->帧15
																										nextFrame(0,8);
																										handMove('610px','165px',800,pgChangeVelocity,1,function(){
																											handReset('+=0','+=0');
																											// 帧15->帧15info
																											pginfoShow();
																											handMove('360px','165px',800,infoShowDuration+infoShowVelocity,1,function(){
																												handReset('+=0','+=0');
																												// 帧15info->帧15
																												pginfoHide();
																												handMove('480px','405px',800,infoShowVelocity,1,function(){
																													// handReset('+=0','+=0');
																													// 帧15->帧16
																													pg15act();
																													nextFrame(numTextVelocity*numValue+infoShowVelocity+1500);
																													handMove('550px','475px',800,numTextVelocity*numValue+infoShowVelocity+1500+pgChangeVelocity+500,1,function(){
																														handReset('+=0','+=0');
																														// 帧16->帧17
																														nextFrame(0);
																														handMove('372px','175px',800,pgChangeVelocity+infoShowDuration,1,function(){
																															handReset('+=0','+=0');
																															// 帧17->帧16
																															backFrame(0);
																															handMove('550px','418px',800,pgChangeVelocity,1,function(){
																																handReset('+=0','+=0');
																																// 帧16->帧18
																																nextFrame(0,2);
																																handMove('570px','338px',800,pgChangeVelocity,1,function(){
																																	handReset('+=0','+=0');
																																	// 帧18->帧18info
																																	pginfoShow();
																																	handMove('594px','172px',500,infoShowDuration+infoShowVelocity,1,function(){
																																		handReset('+=0','+=0');
																																		// 帧18info->帧18
																																		pginfoHide();
																																		handMove('604px','172px',800,infoShowVelocity,1,function(){
																																			handReset('+=0','+=0');
																																			// 帧18->帧21
																																			nextFrame(0,3);
																																			handMove('374px','172px',800,infoShowDuration+pgChangeVelocity,1,function(){
																																				handReset('+=0','+=0');
																																				// 帧21->帧18
																																				backFrame(0,-3);
																																				handMove('374px','172px',200,pgChangeVelocity,1,function(){
																																					handReset('+=0','+=0');
																																					// 帧18->帧16
																																					backFrame(0,-2);
																																					handMove('374px','172px',200,pgChangeVelocity,1,function(){
																																						handReset('+=0','+=0');
																																						// 帧16->帧15
																																						backFrame(0,-1);
																																						handMove('364px','172px',200,pgChangeVelocity,1,function(){
																																							handReset('+=0','+=0');
																																							// 帧15->帧7
																																							backFrame(0,-8);
																																							handMove('584px','392px',800,pgChangeVelocity,1,function(){
																																								handReset('+=0','+=0');
																																								// 帧7->帧22
																																								nextFrame(0,15);
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
			});
		});
	});
}

// 身高测量动画
function pg15act(){
	var $dot = $('.page15dot');//定点
	var $input1 = $('.page15input1');//数字1
	var $input2 = $('.page15input2');//数字2
	var $input3 = $('.page15input3');//数字3
	var $cover = $('.page15cover');//拍照闪屏

	var num = ['0','1','2','3','4','5','6','7','8','9'];
	var input1Index = 0;
	var input2Index = 0;
	var input3Index = 0;
	var input1Len = ~~(numValue/100);
	var input2Len = ~~(numValue/10);
	var input3Len = numValue;

	// 移动水准点
	$dot.animate({
		top: '-=2px',
		left: '+=2px'},
		300, function() {
	});

	$dot.delay(300).animate({
		top: '+=1px',
		left: '-=3px'},
		300, function() {
	});

	$dot.delay(600).animate({
		top: '-=2px',
		left: '+=2px'},
		300, function() {
	});

	$dot.delay(900).animate({
		top: '+=3px',
		left: '-=1px'},
		300, function() {
	});

	handReset('+=0','+=0');

	// 拍照闪屏
	$cover.delay(1200).animate({
		opacity: 0.9},
		300, function() {
		$(this).addClass('hide');
		// 数字变数 input1是百位，input2是十位，input3是个位
		var input3Inter = setInterval(function(){
			if(input3Index == input3Len){
				clearInterval(input3Inter);
			}
			var text = num[input3Index%10];
			$input3.text(text);
			input3Index++;
		},numTextVelocity);

		var input2Inter = setInterval(function(){
			if(input2Index == input2Len){
				clearInterval(input2Inter);
			}
			var text = num[input2Index%10];
			$input2.text(text);
			input2Index++;
		},numTextVelocity*10);

		var input1Inter = setInterval(function(){
			if(input1Index == input1Len){
				clearInterval(input1Inter);
			}
			var text = num[input1Index%10];
			$input1.text(text);
			input1Index++;
		},numTextVelocity*100);
	});
}

// 三围测量动画
function pg8act(callback){
	var $dot = $('.page8dot');//定点
	var $rule = $('.page8rule');//标尺
	var $cover = $('.page8cover');//拍照的白屏

	// 移动水准点
	$dot.animate({
		top: '-2px',
		left: '+=2px'},
		300, function() {
	});

	$dot.delay(300).animate({
		top: '-1px',
		left: '-=3px'},
		300, function() {
	});

	$dot.delay(600).animate({
		top: '-2px',
		left: '+=2px'},
		300, function() {
	});

	$dot.delay(900).animate({
		top: '0px',
		left: '-=1px'},
		300, function() {
	});

	handReset('+=0','+=0');

	// 拍照闪屏
	$cover.delay(1500).animate({
		opacity: 0.9},
		300, function() {
			$(this).addClass('hide');
	});

	// 标尺移动位置
	$rule.delay(1800).animate({
		left: '140px'},
		1300, function() {
		if(callback && (callback  instanceof Function)){
	        callback();//回调
	    }
	});
}

// 显示提示页 pg8,pg11,pg15,pg18,pg26
// d:duration
function pginfoShow(d){
	var _d = d||0;
	// 显示提示页
	var $pginfo = $('.page'+nowPageIndex+'info');
	$pginfo.slideDown(infoShowVelocity);
}

// 收起提示页 pg8,pg11,pg15,pg18,pg26
// d:duration
function pginfoHide(d){
	var _d = d||0;
	// 显示提示页
	var $pginfo = $('.page'+nowPageIndex+'info');
	$pginfo.slideUp(infoShowVelocity);
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

// 切换上一帧
// dl:delay,dis:distance
function backFrame(dl,dis){
	var _dl = dl||0;
	var _dis = parseInt(dis)||-1;

	// 变换背景
	var $bgbefore = $('.bg'+nowBgIndex);
	var $bgafter = $('.bg'+(nowBgIndex+_dis));
	$bgbefore.delay(_dl).animate({
		left:'+='+bgChangeOffset,
		opacity: 0.2},
		bgChangeVelocity, function() {
		$(this).addClass('hide');
	});

	$bgafter.removeClass('hide');
	$bgafter.delay(_dl).animate({
		left:'+='+bgChangeOffset,
		opacity: 1},
		bgChangeVelocity, function() {
		nowBgIndex+=_dis;
	});

	// 变换页面
	var $pgbefore = $('.page'+nowPageIndex);
	var $pgafter = $('.page'+(nowPageIndex+_dis));
	$pgbefore.delay(_dl).animate({
		left:'+='+pgChangeOffset,
		opacity: 0.2},
		pgChangeVelocity, function() {
		$(this).addClass('hide');
	});

	$pgafter.removeClass('hide');
	$pgafter.delay(_dl).animate({
		left:'+='+pgChangeOffset,
		opacity: 1},
		pgChangeVelocity, function() {
		nowPageIndex+=_dis;
	});	
}


// 切换下一帧
// dl:delay,dis:distance
function nextFrame(dl,dis){
	var _dl = dl||0;
	var _dis = parseInt(dis)||1;

	// 判断是否最后帧
	if(nowPageIndex === finIndex){
		nowPageIndex =1;
		nowBgIndex =1;
		window.location.reload();
	}

	// 变换背景
	var $bgbefore = $('.bg'+nowBgIndex);
	var $bgafter = $('.bg'+(nowBgIndex+_dis));
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
		nowBgIndex+=_dis;
	});

	// 变换页面
	var $pgbefore = $('.page'+nowPageIndex);
	var $pgafter = $('.page'+(nowPageIndex+_dis));
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
		nowPageIndex+=_dis;
	});	

	// 14,21,29发表页
	if(nowPageIndex === 14 || nowPageIndex === 21 || nowPageIndex ===29){
		$('.focus-input').focus().val(' ');
	}
}

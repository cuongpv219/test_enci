var curPos=0,curSpeed=40,index=0,count=activityContent.card.length,score=0,level=1,numbertrue=0,surviveLeft=5,jumpSpeed=2,isPause=!1,combo=0,ranArr=generateRandomArr(count),minutes=0;function checkexitImg(){for(var a=0;a<count;a++)if(-122<parseInt($("#picture_"+a).css("left").replace("px",""))&&1E3>parseInt($("#picture_"+a).css("left").replace("px","")))return!0;return!1}
function levelUp(){$("#levelup").fadeOut(500,function(){isPause=!1});$(".picture").css({left:"-122px",display:"block"});$(".picture").attr("value",0);level%2||20>=curSpeed?jumpSpeed+=1:curSpeed-=5;curPos=index=numbertrue=0;ranArr=generateRandomArr(count)}
function movePictures(){isPause?setTimeout("movePictures()",curSpeed):0!=surviveLeft&&($("#survive").attr("value",curPos),curPos+=jumpSpeed,$(".picture").each(function(){checkexitImg();for(var a=0;a<index;a++)if(curPos>300*a&&(1E3>parseInt($("#picture_"+ranArr[a]).css("left").replace("px",""))&&0==$("#picture_"+ranArr[a]).attr("value"))&&($("#picture_"+ranArr[a]).css("left",curPos-300*a+"px"),1E3<=parseInt($("#picture_"+ranArr[a]).css("left").replace("px","")))){$(".trueanswer").css({right:"0px",
top:parseInt($("#picture_"+ranArr[a]).css("top").replace("px",""))+"px"}).show();$(".true-answer").html(activityContent.card[ranArr[a]].term);setTimeout("$('.trueanswer').fadeOut(500)",1E3);for(var c=0;5>c;c++)if(0==$("#survive_"+c).attr("value")){$("#survive_"+c).attr("value",1);$("#survive_"+c).attr("src",baseUrl+"/themes/blueocean/img/dead.png");surviveLeft--;0==surviveLeft&&$("#game-over").fadeIn(500,function(){$("#playagain").show();$(".picture").fadeOut(500);$("#game-board").css({"background-color":"#f5f5f5"})});
break}}}),index<count&&index++,setTimeout("movePictures()",curSpeed))}
$(document).ready(function(){function a(d,a){for(var f=a.split("/"),b=0;b<f.length;b++)if(isEqualString(d,f[b]))return!0;return!1}function c(){var d=[];$(".inputtext").click(function(){$(this).val("")});for(var a=e=0;a<count;a++){d[a]=activityContent.card[a].image;var b="",b=b+('<img class="picture" value="0" id="picture_'+a+'" src="'+d[a]+'"/>'),c=Math.floor(200*Math.random());$("#game-board").append(b);$("#picture_"+a).css({top:60+c+"px"})}$(".inputtext").val("").focus();setTimeout("movePictures()",
300)}$(document).keyup(function(d){if(13==d.which){for(var b=!1,d=$("input:text[name=textbox]").val(),c=0;c<count;c++)if(1E3>parseInt($("#picture_"+c).css("left").replace("px",""))&&-110<parseInt($("#picture_"+c).css("left").replace("px","")))if(a(d.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"").toLowerCase(),activityContent.card[c].term.toLowerCase())){b=parseInt($("#picture_"+c).css("left").replace("px",""));$("#picture_"+c).fadeOut(500,function(){$(this).attr("value",1)}).css({left:"1000px"});$(".reward").css({left:b+
"px",top:$("#picture_"+c).css("top")});$(".reward").html("+1").stop(!0,!0).fadeIn(500).fadeOut(1E3);score+=1;playSound(Ucan.Resource.Audio.getHitSound());numbertrue++;combo++;$("#score-number").html(score);switch(numbertrue){case 6:$("#levelup").html("LEVEL UP!").fadeIn(10),isPause=!0,setTimeout("levelUp();",1E3),level++,$("#level-number").html(level),playSound(baseUrl+"/audio/game/blacksheep/levelup.mp3"),numbertrue=0}switch(combo){case 5:$("#reward-combo").html("5 in row! +5").css({left:"391px"}).fadeIn(10);
setTimeout("$('#reward-combo').fadeOut(500)",1E3);score+=5;$("#score-number").html(score);playSound(baseUrl+"/audio/game/blacksheep/plusmark.mp3");break;case 10:$("#reward-combo").html("10 in row! +10").css({left:"383px"}).fadeIn(10);setTimeout("$('#reward-combo').fadeOut(500)",15);score+=10;$("#score-number").html(score);playSound(baseUrl+"/audio/game/blacksheep/plusmark.mp3");break;case 15:$("#reward-combo").html("15 in row! +15").css({left:"383px"}).fadeIn(10),setTimeout("$('#reward-combo').fadeOut(500)",
1500),score+=15,$("#score-number").html(score),playSound(baseUrl+"/audio/game/blacksheep/plusmark.mp3"),combo=0}$(".inputtext").val("").focus();b=!0}else $(".inputtext").val("").focus();b||($(".punish").html("-2").stop(!0,!0).fadeIn(500).fadeOut(500),score-=2,playSound(Ucan.Resource.Audio.getMissSound()),combo=0,$("#score-number").html(score));if(!checkexitImg())for(d=0;d<count;d++)if(curPos<300*d){curPos=300*d;break}}});var b=0,e=0;c();setInterval(function(){10>b&&10>e?$("#timeleft").text("0"+e+
":0"+b):10>b&&10<=e?$("#timeleft").text(e+":"+b):10<=b&&10>e?$("#timeleft").text("0"+e+":"+b):"#timeleft".text(e+":"+b);b++;60==b&&(e++,b=0)},1E3);$("#playagain").click(function(){$("#game-board").show().css("background-color","#fff");$(".picture").css({left:"-122px"});surviveLeft=5;curPos=b=level=0;curSpeed=40;jumpSpeed=2;isPause=!1;e=index=score=0;$("#game-over").hide();$("#true-answer").show();$(this).hide();for(var a=combo=numbertrue=0;5>a;a++)$("#survive_"+a).attr("value",0),$("#survive_"+a).attr("src",
baseUrl+"/themes/blueocean/img/alive.png");$("#level-number").html("1");$("#score-number").html("0");c();$(".picture").show()});$("#loadResult").click(function(){surviveLeft=0;100<score&&(score=100);10>score&&0<=score||(score=0);$("#score-text").html("0"+score);$("#activity-result-correct-box").hide();$("#show-result").show("slide",{direction:"left"},Ucan.Constants.getShowResultSpeed())});$("#redo").click(function(){$("#show-result").hide("slide",{direction:"left"},Ucan.Constants.getHideResultSpeed(),
function(){$("#game-board").show().css("background-color","#fff");$(".picture").css({left:"-122px"});surviveLeft=5;curPos=b=level=0;curSpeed=40;jumpSpeed=2;isPause=!1;e=index=score=0;$("#game-over").hide();$("#true-answer").show();$("#playagain").hide();for(var a=combo=numbertrue=0;5>a;a++)$("#survive_"+a).attr("value",0),$("#survive_"+a).attr("src",baseUrl+"/themes/blueocean/img/alive.png");$("#level-number").html("1");$("#score-number").html("0");c();$(".picture").show()})})});
var count,number=0,canPlay=!0,curTabIndex=0,askSentences=[],numberOfTrueAnswers=0,canClickRedo=!1,unShowClickResult=0;
$(document).ready(function(){function f(b){c++;$(".global-tab-container").ucanMoveToTab(b);$(".dialog-audio-container").hide();$(".cp-jplayer").jPlayer("stop");$("#questions").children().hide();$("#dialog-audio-container-"+b).show();$("#dialog-audio-"+b).jPlayer("play");for(a=0;a<count;a++)activityContent.question[a].page==j[b]&&$("#question-container_"+a).show();for(var e=!0,a=count-1;0<=a;a--)"block"==$("#question-container_"+a).css("display")&&(e?e=!1:$("#question-container_"+a).css("border-bottom",
"1px solid #ddd"));curTabIndex=parseInt(b);$("#activity-board").css("height","");$("#activity-board").height()<$("#reading-board").height()+20&&$("#activity-board").height($("#reading-board").height()+20)}function g(){for(var b=0,e=0;e<activityContent.listening_audio.length;e++)for(var a=0;a<count;a++)void 0==activityContent.question[a].page?0==e&&$("#question-container_"+a+" .order-question").append(++b+"."):activityContent.question[a].page==e+1&&$("#question-container_"+a+" .order-question").append(++b+
".")}function h(){canPlay=!0;$(".cp-jplayer").jPlayer("stop");for(var b="",e="",a=0;a<number;a++)b+='<div id="sentence-button_'+a+'" data-order="'+a+'" class="inactive-button unselected">'+(a+1)+'<img class="false" src="'+baseUrl+'/themes/blueocean/img/tab-false-icon.png"></img><img class="true" src="'+baseUrl+'/themes/blueocean/img/tab-true-icon.png"></img></div>';for(a=0;a<count;a++){for(var d=activityContent.question[a].choice.split("||"),e=e+("<div id=question-container_"+a+' class="question-container">'),
e=e+('<p class="ask-container"><span class="order-question"></span>'+activityContent.question[a].ask.replace(/\[(.*?)\]/,"")+'<span id="true-false-icon_'+a+'"></span></p>'),c=0;c<d.length;c++)e+='<div value="0" id="choice-container_'+a+"_"+c+'" class="choice-container" style="color: black;"><div value="0" class="choice global-choice-square" id="check_'+a+"_"+c+'"></div><label for="radio_'+a+"_"+c+'" class="senten-text">'+(!1==isAnswer(d[c])?d[c]:d[c].substring(1,d[c].lenght))+"</label></div>";e+=
"</div>"}$("#question-link").append(b);$("#questions").append(e);f(0);1==number?($(".dialog-audio-container").addClass("shortpadding"),$("#question-link").hide(),$("#next-link").hide(),$("#prev-link").hide(),$("#loadResult").css({margin:"0 auto","float":"none"})):$(".dialog-audio-container").addClass("longpadding");$(".inactive-button").click(function(){var a=$(this).attr("data-order");f(a)});$(".choice-container").click(function(){if(canPlay){playSound(Ucan.Resource.Audio.getClickedSound());if($(this).attr("value")==
"0"){$(this).attr("value","1");$(this).children().addClass("checked");$(this).css({color:"#000"})}else{$(this).attr("value","0");$(this).children().removeClass("checked")}}});$(".choice-container").hover(function(){$(this).attr("value")=="0"&&$(this).css({color:"#fca710"})},function(){$(this).attr("value")=="0"&&$(this).css({color:"#000"})})}var c=0;$("#next-link").click(function(){curTabIndex<number-1&&f(curTabIndex+1)});$("#prev-link").click(function(){0<curTabIndex&&f(curTabIndex-1)});count=activityContent.question.length;
for(d=0;d<count;d++)askSentences[d]=activityContent.question[d].ask;for(d=0;d<activityContent.listening_audio.length;d++)"a"!=activityContent.listening_audio.audio&&++number;for(var j=[],d=0;d<count;d++)-1==jQuery.inArray(parseInt(activityContent.question[d].page),j)&&j.push(parseInt(activityContent.question[d].page));h();g();$("#loadResult").click(function(){$(document).keyup(function(b){13==b.keyCode&&$("#multipage-confirm-dialog-button-no").click()});1==c&1<count?(unShowClickResult++,1==unShowClickResult&&
($(".overlay-black").show(),$("#multipage-confirm-dialog").fadeIn(500))):loadResult()});$("#redo").click(function(){c=unShowClickResult=0;canClickRedo&&(canClickRedo=!1,canPlay=!0,$("#show-result").hide("slide",{direction:"left"},Ucan.Constants.getHideResultSpeed(),function(){canPlay=!0;$("#show-result").slideUp(1200);$("#question-link").html("");$("#questions").html("");h();g()}))});$("#show-answer").click(function(){for(var b=0;b<count;b++)for(var c=activityContent.question[b].choice.split("||"),
a=0;a<c.length;a++)isAnswer(c[a])?($("#choice-container_"+b+"_"+a).children().addClass("checked").fadeOut(500).fadeIn(500),$("#choice-container_"+b+"_"+a).attr("value",1),$("#choice-container_"+b+"_"+a).children().children("img").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500),$("#choice-container_"+b+"_"+a).children().css({color:"#fca710"})):$("#choice-container_"+b+"_"+a).children().removeClass("checked")})});function isAnswer(f){return 0<=f.indexOf("#")?!0:!1}
function loadResult(){$(".cp-jplayer").jPlayer("stop");if(canPlay){canPlay=!1;numberOfTrueAnswers=0;playSound(Ucan.Resource.Audio.getShowResultSound());for(i=0;i<count;i++){for(var f=0,g=0,h=activityContent.question[i].choice.split("||"),c=0;c<h.length;c++)f+="1"==$("#choice-container_"+i+"_"+c).attr("value")?Math.pow(2,c):0,g+=isAnswer(h[c])?Math.pow(2,c):0;f==g?(numberOfTrueAnswers++,insertTrueFalseIconAfter(!0,$("#question-container_"+i+" .ask-container"))):insertTrueFalseIconAfter(!1,$("#question-container_"+
i+" .ask-container"))}$(".true-icon").css({visibility:"visible"});$(".true-icon, .false-icon").ucanAnimateTrueFalseIcon();$("#num-of-correct-answers-result").text(numberOfTrueAnswers+"/"+count);score=Math.floor(100*(numberOfTrueAnswers/count));$("#score-text").text(score);$("#show-result").show("slide",{direction:"left"},Ucan.Constants.getShowResultSpeed());canClickRedo=!0}};
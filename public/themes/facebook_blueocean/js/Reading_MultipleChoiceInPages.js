var canClickRedo=!1,canPlay=!0,count,unShowClickResult=0,score;function isAnswer(d){return 0==d.indexOf("#")?!0:!1} $(document).ready(function(){function d(c){$(".global-tab-container").ucanMoveToTab(c);$("#questions").children().hide();$("#reading-board").html(e[c]);for(var b=0;b<count;b++)void 0==activityContent.question[b].page?0==c&&$("#question-container_"+b).show():parseInt(c)+1==activityContent.question[b].page&&$("#question-container_"+b).show();j=parseInt(c);h++}function g(){canPlay=!0;for(var c="",b="",a=0;a<activityContent.reading.length;a++)c+='<div id="sentence-button_'+(activityContent.reading.length- a-1)+'" data-order="'+(activityContent.reading.length-a-1)+'" class="inactive-button unselected">'+(activityContent.reading.length-a)+"</div>";for(a=0;a<count;a++){for(var e=activityContent.question[a].choice.split("||"),b=b+("<div id=question-container_"+a+">"),f=activityContent.question[a].ask.split("[]"),b=void 0!=f[1]?b+('<p id="ask-container_'+a+'" class="ask-container"><span class="order-question"></span>'+f[0]+'<span class="blank"> _____ </span>'+f[1]+'<span id="true-false-icon_'+a+'"></span> </p>'): b+('<p class="ask-container"><span class="order-question"></span>'+activityContent.question[a].ask+'<span id="true-false-icon_'+a+'"></span> </p>'),f=0;f<e.length;f++)b+='<div value="0" id="choice-container_'+a+"_"+f+'" class="choice-container" ><div value="0" class="choice global-choice-square-2 id="check_'+a+"_"+f+'"></div><label for="radio_'+a+"_"+f+'">'+(!1==isAnswer(e[f])?e[f]:e[f].substring(1,e[f].lenght))+"</label></div>";b+="</div>"}$(".true").hide();$(".false").hide();$("#question-link").append(c); $("#questions").append(b);$(".inactive-button").click(function(){var a=$(this).attr("data-order");d(a)});$(".choice-container").click(function(){canPlay&&(playSound(Ucan.Resource.Audio.getClickedSound()),"0"==$(this).attr("value")&&($(this).attr("value","1"),$(this).siblings(".ask-container").find(".blank").html(" "+$(this).text()+" ").addClass("checked-blank"),$(this).siblings().attr("value",0),$(this).children(".choice").addClass("checked"),$(this).siblings().children(".choice").removeClass("checked")))}); $("#next-link").click(function(){j<count-1&&d(j+1)});$("#prev-link").click(function(){0<j&&d(j-1)});d(0);2>activityContent.reading.length&&($("#prev-link").hide(),$("#next-link").hide(),$("#loadResult").css({margin:"0 auto","float":"none"}),$("#question-link").hide())}var h=0;count=activityContent.question.length;var e=[];for(i=0;i<activityContent.reading.length;i++)e[i]=activityContent.reading[i].page;var j=0;g();(function(){for(var c=0,b=0;b<activityContent.reading.length;b++)for(var a=0;a<count;a++)void 0== activityContent.question[a].page?0==b&&$("#question-container_"+a+" .order-question").append(++c+"."):activityContent.question[a].page==b+1&&$("#question-container_"+a+" .order-question").append(++c+".")})();$("#questions").css("min-height",$("#main-board").height()-$(".global-submit-div").height());$("#loadResult").click(function(){$(document).keyup(function(c){13==c.keyCode&&$("#multipage-confirm-dialog-button-no").click()});1==h&&1<count?(unShowClickResult++,1==unShowClickResult&&($(".overlay-black").show(), $("#multipage-confirm-dialog").fadeIn(500))):loadResult()});$("#redo").click(function(){h=unShowClickResult=0;canClickRedo&&(canClickRedo=!1,$("#show-result").hide("slide",{direction:"left"},Ucan.Constants.getHideResultSpeed(),function(){$("#show-result").slideUp(1200);$("#question-link").html("");$("#questions").html("");g();canPlay=!0}))});$("#show-answer").click(function(){for(var c=0;c<count;c++)for(var b=activityContent.question[c].choice.split("||"),a=0;a<b.length;a++)isAnswer(b[a])&&($("#choice-container_"+ c+"_"+a).children(".choice").addClass("checked").fadeOut(500).fadeIn(500),$("#choice-container_"+c+"_"+a).siblings(".choice-container").children(".choice").removeClass("checked"),$("#choice-container_"+c+"_"+a).siblings(".ask-container").find(".blank").html(" "+$("#choice-container_"+c+"_"+a).text()+" ").addClass("checked-blank"),$("#choice-container_"+c+"_"+a).attr("value",1))})});function isAnswer(d){return 0==d.indexOf("#")?!0:!1} function loadResult(){if(canPlay){canPlay=!1;numberOfTrueAnswers=0;playSound(Ucan.Resource.Audio.getShowResultSound());for(var d=0;d<count;d++){for(var g=-1,h=activityContent.question[d].choice.split("||"),e=0;e<h.length;e++)g="1"==$("#choice-container_"+d+"_"+e).attr("value")?e:g;-1!=g?isAnswer(h[g])?(numberOfTrueAnswers++,insertTrueFalseIcon(!0,"#true-false-icon_"+d)):insertTrueFalseIcon(!1,"#true-false-icon_"+d):insertTrueFalseIcon(!1,"#true-false-icon_"+d)}$(".true-icon").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500); $(".false-icon").fadeOut(500).fadeIn(500);$("#num-of-correct-answers-result").text(numberOfTrueAnswers+"/"+count);score=Math.floor(100*(numberOfTrueAnswers/count));$("#score-text").text(score);$("#show-result").show("slide",{direction:"left"},Ucan.Constants.getShowResultSpeed());canClickRedo=!0}};
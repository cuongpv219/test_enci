var canPlay=!0,count,unShowClickResult=0,ranArr,numPage,score;
$(document).ready(function(){function h(a){i++;$(".global-tab-container").ucanMoveToTab(a);$(".map-word-container").hide();$("#activity-guide-practical, #activity-guide-theorical").hide();$("#map-word-container-"+a).show();"0"==activityContent.page[a].practical?$("#activity-guide-theorical").show():$("#activity-guide-practical").show();c=parseInt(a)}function f(){ranArr=shuffle(activityContent.group);for(var a=0;a<count;a++){var c=ranArr[a].position.split(":")[0],i=ranArr[a].position.split(":")[1],
e=ranArr[a].page-1,j=activityContent.page[e].markSize,f=Math.round(4*j/5),d=ranArr[a].definition.split("--"),g=d[0],k=1<d.length?d[1]:"",d=2<d.length?d[2]:"";$("#map-container-"+e).append('<div id="mark-'+a+'" class="mark '+("0"==activityContent.page[e].practical?"mark-click":"mark-drag")+'" style="width: '+j+"px; height: "+j+"px; font-size: "+f+"px; left: "+c+"px; top: "+i+"px; line-height: "+f+'px; " data-index="'+a+'">'+ranArr[a].order+"</div>");"0"==activityContent.page[e].practical?$("#word-group-list-"+
e).append('<div class="word-wrap word-wrap-click" data-index="'+a+'"><div class="order"><div class="unmatch-word order-click"></div></div><div class="word-term">'+g+'</div><div class="word-ipa">'+k+'</div><div class="word-meaning">'+d+"</div></div>"):$("#word-group-list-"+e).append('<div class="word-wrap word-wrap-drag" data-index="'+a+'"><div class="order"><div class="unmatch-word order-drag"></div></div><div class="word-term">'+g+"</div></div>")}h(0);$(".mark-click").click(function(){$("#word-definition-quick").remove();
var a=ranArr[$(this).attr("data-index")].definition.split("--"),b=a[0],c=1<a.length?a[1]:"",a=2<a.length?a[2]:"";$(this).append('<div id="word-definition-quick"><img id="triangle-pointer" src="'+baseUrl+'/themes/blueocean/img/half-triangle-left-pointer.png" /><span class="quick-word-term">'+b+'</span><span class="quick-word-ipa">'+c+'</span><span class="quick-word-meaning">'+a+"</span></div>");playSound(resourceUrl+ranArr[$(this).attr("data-index")].audio);$('.word-wrap[data-index="'+$(this).attr("data-index")+
'"]').switchClass("","highlight-word-wrap",500,function(){$(this).children(".order").children().text(ranArr[$(this).attr("data-index")].order).switchClass("unmatch-word","match-word");$(this).switchClass("highlight-word-wrap","",500)});$(this).addClass("mark-click-selected")});$(".mark-click").hover(null,function(){$("#word-definition-quick").remove()});$(".word-wrap-click").click(function(){$('.mark[data-index="'+$(this).attr("data-index")+'"]').switchClass("mark-click-selected","highlight-mark",
500,function(){$(this).switchClass("highlight-mark","mark-click-selected")});$(this).children(".order").children().text(ranArr[$(this).attr("data-index")].order).switchClass("unmatch-word","match-word");playSound(resourceUrl+ranArr[$(this).attr("data-index")].audio)});$(".mark-drag").draggable({revert:"invalid",helper:"clone"});$(".order-drag").draggable({revert:"invalid",helper:"clone"}).draggable("disable");$(".word-wrap").droppable({accept:".mark-drag, .order-drag",over:function(a,b){$(this).children(".order").children().text()!=
b.draggable.text()&&(playSound(Ucan.Resource.Audio.getClickedSound()),$(this).children(".order").children().addClass("word-hover"))},out:function(){$(this).children(".order").children().removeClass("word-hover")},drop:function(a,b){if($(this).children(".order").children().text()!=b.draggable.text()&&canPlay)if($(this).children(".order").children().removeClass("word-hover"),playSound(Ucan.Resource.Audio.getClickedSound()),b.draggable.parent().hasClass("map-container"))""!=$(this).children(".order").children().text()&&
$("#mark-"+$(this).children(".order").children().attr("data-index")).draggable("enable").switchClass("selected-mark","highlight-mark",500,function(){$(this).removeClass("highlight-mark")}),$(this).switchClass("","highlight-word-wrap",500,function(){$(this).children(".order").children().text(b.draggable.text()).attr("data-index",b.draggable.attr("data-index")).switchClass("unmatch-word","match-word-drag").draggable("enable");$(this).switchClass("highlight-word-wrap","",500)}),b.draggable.draggable("disable").switchClass("",
"highlight-mark",500,function(){$(this).removeClass("highlight-mark");$(this).addClass("selected-mark")});else{var c=b.draggable.parent(),d=$(this).children(".order").children();$(this).children(".order").append(b.draggable);c.append(d);$(this).switchClass("","highlight-word-wrap",500,function(){$(this).switchClass("highlight-word-wrap","",500)});c.parent().switchClass("","highlight-word-wrap",500,function(){$(this).switchClass("highlight-word-wrap","",500)})}}});$(".map-container").droppable({accept:".order-drag",
drop:function(a,b){canPlay&&(playSound(Ucan.Resource.Audio.getClickedSound()),$("#mark-"+b.draggable.attr("data-index")).draggable("enable").switchClass("selected-mark","highlight-mark",500,function(){$(this).removeClass("highlight-mark")}),b.draggable.text("").attr("data-index","").draggable("disable").switchClass("match-word-drag","unmatch-word"),b.draggable.parent().parent().switchClass("","highlight-word-wrap",500,function(){$(this).switchClass("highlight-word-wrap","",500)}))}})}var i=0;count=
activityContent.group.length;numPage=activityContent.page.length;var c=0,g=!1;f();$("#next-link").click(function(){c<numPage-1&&h(c+1)});$("#prev-link").click(function(){0<c&&h(c-1)});$(".inactive-button").click(function(){var a=$(this).attr("data-order");h(a)});$("#show-answer").click(function(){$(".order-drag").each(function(){$(this).text(ranArr[$(this).parent().parent().attr("data-index")].order).switchClass("unmatch-word","match-word-drag").fadeOut(500).fadeIn(500)})});$("#loadResult").click(function(){$(document).keyup(function(a){13==
a.keyCode&&$("#multipage-confirm-dialog-button-no").click()});1==i&&1<numPage?(unShowClickResult++,1==unShowClickResult&&($(".overlay-black").show(),$("#multipage-confirm-dialog").fadeIn(500))):loadResult()});$("#redo").click(function(){g&&(g=!1,$("#show-result").hide("slide",{direction:"left"},Ucan.Constants.getHideResultSpeed(),function(){canPlay=!0;$(".map-container").children(".mark").remove();$(".word-group-list").html("");f()}))})});
function loadResult(){canPlay&&(canPlay=!1,$(".ui-draggable").draggable("disable"),playSound(Ucan.Resource.Audio.getShowResultSound()),$(".word-wrap-click").each(function(){$(this).children(".order").children().text(ranArr[$(this).attr("data-index")].order).switchClass("unmatch-word","match-word")}),total=numberOfTrueAnswers=0,$(".order-drag").each(function(){total++;$(this).parent().parent().attr("data-index")==$(this).attr("data-index")?(numberOfTrueAnswers++,insertTrueFalseIconBefore(!0,$(this))):
insertTrueFalseIconBefore(!1,$(this))}),$(".true-icon, .false-icon").ucanAnimateTrueFalseIcon(),$("#num-of-correct-answers-result").text(numberOfTrueAnswers+"/"+total),score=Math.floor(100*(numberOfTrueAnswers/total)),$("#score-text").text(score),0==total?window.location.replace(nextActivityUrl):($("#show-result").show("slide",{direction:"left"},Ucan.Constants.getShowResultSpeed()),canClickRedo=!0))};
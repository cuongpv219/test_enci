$(document).ready(function(){function g(){d=!0;c=[];var a=ucanMarkupToHtml(activityContent.paragraph),a=a.replace(/\[/g,'<span class="choices-container">'),a=a.replace(/\]/g,"</span>");$("#paragraph-container").append($(a));$(".choices-container").each(function(){var a=$(this).text().split("||"),b="";$(this).html("");for(i=0;i<a.length;i++)-1!=a[i].indexOf("#")?(b+='<span class="choice" order="'+i+'">'+$.trim(a[i]).substr(1)+"</span>",c[c.length]=i):b+='<span class="choice" order="'+i+'">'+$.trim(a[i])+
"</span>",b=i==a.length-1?b:b+" / ";$(this).append(b)});$(".choice").click(function(){!1!=d&&(playSound(Ucan.Resource.Audio.getClickedSound2()),$(this).siblings().stop(!0,!0).animate({opacity:"0.3"},500,function(){$(this).css("text-decoration","")}).animate({color:"#4375b1",opacity:"1"},500).removeClass("chosen"),$(this).animate({opacity:"0.3"},500,function(){$(this).css("text-decoration","line-through")}).stop(!0,!0).animate({color:"#C12942",opacity:"1"},500).addClass("chosen"))})}var d=!0,c=[],
f=!1;g();var e=0;$("#loadResult").click(function(){if(!1!=d){d=!1;$(".cp-jplayer").jPlayer("stop");playSound(Ucan.Resource.Audio.getShowResultSound());var a=e=0;$(".choices-container").each(function(){$(this).children(".chosen").attr("order")==c[a]?(e++,insertTrueFalseIconAfter(!0,$(this).last())):insertTrueFalseIconAfter(!1,$(this).last());a++});$(".true-icon, .false-icon").ucanAnimateTrueFalseIcon();$("#num-of-correct-answers-result").text(e+"/"+c.length);score=Math.floor(100*(e/c.length));$("#score-text").text(score);
$("#show-result").show("slide",{direction:"left"},Ucan.Constants.getShowResultSpeed());f=!0}});$("#redo").click(function(){f&&(f=!1,$("#show-result").hide("slide",{direction:"left"},Ucan.Constants.getHideResultSpeed(),function(){d=!0;$("#paragraph-container").html("");g()}))});$("#show-answer").click(function(){$(".choice").css({"text-decoration":"",color:"#4f81bd"}).removeClass(".chosen");var a=0;$(".choices-container").each(function(){$(this).children(".choice").eq(c[a]).addClass("answer");a++});
$(".answer").animate({opacity:"0.3"},500,function(){$(this).css("text-decoration","line-through")}).animate({color:"#C12942",opacity:"1"},500)})});
function editGUI(){$("#activity-board, #sentence-list, #reading-board, #reading-container").css("height","");var a=Math.max(450,$("#activity-board").height());$("#activity-board").height(a);$("#reading-board").height(a-19);$("#left-board").height(a-19);$("#reading-container").height(a-40);1<activityContent.reading.length?$("#sentence-list").height()<a-150&&$("#sentence-list").height(a-150):$("#sentence-list").height()<a-100&&$("#sentence-list").height(a-100);$("#reading-container").ucanJScrollPane("#reading-board")}
$(document).ready(function(){function a(c){d=parseInt(c);$(".global-tab-container").ucanMoveToTab(c);$(".sentence").hide();for(var a=0;a<f;a++)void 0==activityContent.group[a].page?0==c&&$("#sentence_"+a).show():parseInt(c)+1==activityContent.group[a].page&&$("#sentence_"+a).show();$("#reading-container").remove();$("#reading-board").append('<div id="reading-container"></div>');$("#reading-container").html(activityContent.reading[c].page);editGUI()}function g(a){""!=$(a).text()&&($(a).children(".result").css({color:"white",
display:"inline"}),$(a).children(".result").animate({color:"#a6a6a6"},1500,function(){g($(this).parent().next())}),editGUI())}multiLangSystem.title_answer="en"==defaultLanguage?"Difference":"\u0110\u00e1p \u00e1n";var d=0,f=activityContent.group.length;(function(){for(var c='<ul id="sentences">',e="",b=activityContent.reading.length-1;0<=b;b--)e+='<div id="sentence-button_'+(activityContent.reading.length-1-b)+'" data-order="'+(activityContent.reading.length-1-b)+'" class="inactive-button unselected">'+
(activityContent.reading.length-b)+"</div>";for(b=0;b<f;b++)c+='<li id="sentence_'+b+'" class="sentence"><span class="order-char">'+(b+1)+". </span>"+activityContent.group[b].sentence+'<br><span class="textbox"><textarea class="text" type="text" tabindex='+(b+1)+' rows="2" cols="30"></textarea></span><br><span class ="showdiff">'+multiLangSystem.title_answer+'</span><span class="result">&nbsp&nbsp'+activityContent.group[b].result+"</span></li>";c+="</ul>";$("#question-link").append(e);$("#sentence-list").append($(c));
$(".inactive-button").click(function(){d=parseInt($(this).attr("data-order"));console.log(d);a(d)});2>activityContent.reading.length&&($("#question-link").hide(),$("#next-link").hide(),$("#prev-link").hide(),$("#loadResult").css({margin:"0 auto","float":"none"}));$("#next-link").click(function(){d<activityContent.reading.length-1&&a(++d)});$("#prev-link").click(function(){d>0&&a(--d)});$(".showdiff").click(function(){if($(this).parent().children(".result").css("display")=="none"){$(this).parent().children(".result").css({color:"white",
display:"inline"});$(this).parent().children(".result").animate({color:"#a6a6a6"},0)}else $(this).parent().children(".result").animate({color:"white"},0,function(){editGUI();$(this).css({display:"none"})});editGUI()});$(".text:first").focus()})();a(0);$("#loadResult").click(function(){playSound(Ucan.Resource.Audio.getShowResultSound());var a=$(".sentence:first");g(a)})});
$(document).ready(function(){function j(c){$("#activity-container .global-tab-container").ucanMoveToTab(c);$(".dialog-audio-container").hide();$(".picture-container").hide();$(".cp-jplayer").jPlayer("stop");$(".question-container").hide();$("#dialog-audio-container-"+c).show();$("#dialog-audio-"+c).jPlayer("play");$("#picture-container_"+c).show();$('.question-container[data-page="'+c+'"]').show();e=parseInt(c);$("#questions").height()>l&&(l=$("#questions").height(),$("#questions").css("min-height",
l))}multiLangSystem.title_answer="en"==defaultLanguage?"Answer":"\u0110\u00e1p \u00e1n";$("#next-link").click(function(){e<f-1&&j(e+1)});$("#prev-link").click(function(){0<e&&j(e-1)});var m=activityContent.question.length,f=activityContent.page.length,l=0,k=[],e=0;for(i=0;i<m;i++);(function(){canPlay=!0;$(".cp-jplayer").jPlayer("stop");for(var c="",d="",e="",g=[],a=0;a<f;a++)k[a]=0,g[a]=[],c+='<div id="sentence-button_'+(f-a-1)+'" data-order="'+(f-a-1)+'" class="inactive-button unselected">'+(f-a)+
"</div>",void 0!=activityContent.page[a].picture&&(e+='<div class="picture-container" id="picture-container_'+a+'"><img class="picture" src="'+resourceUrl+activityContent.page[a].picture+'" "/></div>');for(a=0;a<m;a++){var b=void 0!=activityContent.question[a].page?activityContent.question[a].page-1:0;if(!(b>=f)){k[b]+=1;var h='<div id="question-container_'+a+'" class="question-container '+(void 0!=activityContent.page[b].picture?"long-question-container":"short-question-container")+'" data-page="'+
b+'">',h=h+('<p class="ask-container"><span class="order-char">'+k[b]+".</span>"+activityContent.question[a].ask.replace(/\[(.*?)\]/,"")+"</p>"),h=h+('<br><span class="textbox"><textarea class="text '+(void 0!=activityContent.page[b].picture?"long-text":"short-text")+'" type="text" tabindex='+(a+1)+' rows="2" cols="30"></textarea></span><br><div class ="showdiff">'+multiLangSystem.title_answer+'</div><div class="result">'+activityContent.question[a].result+"</div>"),h=h+"</div>";g[b][g[b].length]=
h}}for(a=0;a<f;a++)if(void 0!=activityContent.page[a].picture)for(b=0;b<g[a].length;b++)d+=g[a][b];else for(b=0;b<g[a].length;b++)d+=0==b%2?'<div class="question-container-row">':"",d+=g[a][b],d+=1==b%2||b==g[a].length-1?"</div>":"";d+='<div class="clear-both"></div>';$("#question-link").append(c);$("#questions").append(d);$("#picture-board").append(e);j(0)})();1==f&&($("#prev-link, #next-link, #question-link").hide(),$(".cp-container").css("top","20px"));$(".inactive-button").click(function(){var c=
$(this).attr("data-order");j(c)});$(".showdiff").click(function(){if($(this).parent().children(".result").css("visibility")=="hidden"){$(this).parent().children(".result").css({visibility:"visible",color:"white"});$(this).parent().children(".result").animate({color:"#A6A6A6"},1500)}else $(this).parent().children(".result").animate({color:"white"},500,function(){$(this).css({visibility:"hidden"})})});$(".text:first").focus()});
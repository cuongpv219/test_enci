var curTabIndex=0;
$(document).ready(function(){function b(a){$(".global-tab-container").ucanMoveToTab(a);$(".audio-container div").hide();$("#picture-board").children().hide();$("#lession-content").hide();$("#intro-container").hide();$(".home-img").attr("src",baseUrl+"/themes/blueocean/img/home-tab-inactive-icon.png");curTabIndex=parseInt(a);$("#next-link").hide();$("#prev-link").hide();$("#startNow").show();-1!=a?($("#startNow").hide(),$("#next-link").show(),$("#prev-link").show(),$("#pixelout-player-"+a).show(),
$("#paragraph-container_"+a).show(),$("#picture-"+a).show(),$("#video-"+a).show(),$("#slideshow-"+a).show(),$("#lession-content").html(activityContent.group[a].reading).show()):($("#intro-container").show(),$(".home-img").attr("src",baseUrl+"/themes/blueocean/img/home-tab-active-icon.png"))}var c=activityContent.group.length;(function(){for(var a="",d=0;d<c;d++)a+='<div id="sentence-button_'+(c-d-1)+'" data-order="'+(c-d-1)+'" class="inactive-button unselected"><span>'+(c-d)+"</span></div>";a+='<div id="sentence-button_-1" data-order="-1"class="inactive-button unselected"><img class="home-img" src="'+
baseUrl+'/themes/blueocean/img/home-tab-inactive-icon.png"/></div>';a+='<div id="lession-title">'+activityContent.lession_title+"</div>";$("#paragraph-number").append(a);$("#intro-title").append(activityContent.lession_title_detail);$("#intro-example").append(activityContent.lession_example.replace(/\[\[/g,'<span class="exactly">').replace(/\]\]/g,"</span>"));$(".inactive-button").click(function(){var a=$(this).attr("data-order");b(a)});$("#next-link").click(function(){curTabIndex<c-1&&b(curTabIndex+
1)});$("#prev-link").click(function(){-1<curTabIndex&&b(curTabIndex-1)});$("#startNow").click(function(){b(0)})})();b(-1)});
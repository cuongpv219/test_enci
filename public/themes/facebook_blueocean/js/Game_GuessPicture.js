$(document).ready(function(){function l(a){function c(){var b=new Image;b.onload=function(){Pixastic.process(b,"blurfast",{amount:d},function(b){$("#blur-image_"+a).children().remove();$("#blur-image_"+a).append(b);$("#blur-image_"+a).children().addClass("image")});d-=0.5};b.src=resourceUrl+activityContent.card[a].image}clearInterval(e);clearInterval(q);$("#guess-image").children().hide();$("#blur-image_"+a).show();b=parseInt(a);$("#true-image_"+a).hide();f=20;e=setInterval(t,1E3);var d=5;q=setInterval(c,
2E3);c()}function t(){$("#time-tab").text(f);f--;if(-1==f){playSound(baseUrl+"/audio/Vocabulary_WordGame/correct.mp3");$(".words").parent(".word").attr("data-wrong3",!0);$("#true-image_"+b).show();$("#blur-image_"+b).hide();for(var a=0;a<d;a++)$("#word_"+a).text()==k[b]&&$("#word_"+a).addClass("words-clicked-true").removeClass("hover-words");clearInterval(e);m()}}function r(){for(var a=g=0;3>a;a++)$("#image_"+a).attr("src",baseUrl+"/themes/blueocean/img/game-false-icon-orange.png");$(".words").addClass("hover-words").removeAttr("words-clicked").removeAttr("data-clicked");
$(".words").removeClass("words-clicked-true");$(".words").removeClass("words-clicked").removeAttr("words-clicked-true");$(".words").removeClass("data-clicked");$(".words").parent(".word").removeAttr("data-done").removeAttr("data-wrong3")}function m(){timeOutID=setInterval(function(){a--;0==a&&(clearInterval(e),b==d-1?(clearInterval(e),$("#group-score").hide(),$("#fist-page").hide(),$("#finish").show()):(r(),l(b+1)))},1E3);var a=3}for(var d=activityContent.card.length,n=[],s=[],k=[],b,g=0,f=20,e,q,
h=0,p="",j="",n=shuffle(activityContent.card),c=0;c<d;c++)n=activityContent.card[c].term,k[c]=activityContent.card[c].term,s[c]=activityContent.card[c].image,p+='<div id="word_'+c+'" class="words hover-words"  data-value="0">'+n+"</div>",j+='<div  id="blur-image_'+c+'" class="picture"></div>',j+='<img  id="true-image_'+c+'" src="'+resourceUrl+s[c]+'" class="image" alt="guess-image" />';$("#word").append(p);$("#guess-image").append(j);$("#fist-page").show();$("#group-score").hide();$("#finish").hide();
$("#play-game").click(function(){$("#group-score").fadeOut(1E3,function(){$("#group-score").fadeIn(2E3);$("#fist-page").hide();$(".picture").children().remove();l(0)})});$("#loadResult").click(function(){playSound(baseUrl+"/audio/Vocabulary_WordGame/report.mp3");$("#finish").fadeIn(500);$("#group-score").hide();$("#fist-page").hide()});$("#play-again").click(function(){$("#fist-page").fadeIn(500);$("#finish").hide();$("#score-tab").text(0);h=0});$(".words").click(function(){var a=!1;if(!$(this).parent(".word").attr("data-done")&&
!$(this).parent(".word").attr("data-wrong3")&&!$(this).attr("data-clicked"))if($(this).text()==k[b]&&(a=!0),$(this).attr("data-clicked",!0),a)m(),playSound(Ucan.Resource.Audio.getCorrectSound()),$(this).parent(".word").attr("data-done",!0),$(this).addClass("words-clicked-true").removeClass("hover-words"),clearInterval(e),$("#time-tab").text(f),h+=f,$("#score-tab").text(h),$("#finish-score-content").text(h),$("#time-tab").removeClass(),$("#blur-image_"+b).hide(),$("#true-image_"+b).show();else{playSound(Ucan.Resource.Audio.getHitSound());
g++;$(this).addClass("words-clicked").removeClass("hover-words");for(a=0;a<g;a++)$("#image_"+a).attr("src",baseUrl+"/themes/blueocean/img/Game-CrossWord-Hint-Circle-Inactive.png");if(2<g){m();clearInterval(e);playSound(Ucan.Resource.Audio.getMissSound());$(this).parent(".word").attr("data-wrong3",!0);$("#blur-image_"+b).hide();$("#true-image_"+b).show();for(i=0;i<d;i++)$("#word_"+i).text()==k[b]&&$("#word_"+i).addClass("words-clicked-true").removeClass("hover-words")}}});$(".circle-next").click(function(){r();
b<d-1?$("#guess-image").fadeIn(1E3,function(){l(b+1);g=0}):($("#finish").fadeIn(1E3),$("#group-score").fadeOut(1E3),f=20);clearInterval(timeOutID)})});
var flashDisplayed=!1,canRecord=!1,flashAvailable=!1,overlayBackground=null;function onMicStatus(u){"Unmuted"==u?(canRecord=!0,hidePromptFlash()):"Muted"==u&&(flashDisplayed?hidePromptFlash():flashDisplayed=!0)}function hidePromptFlash(){$("#audio-recorder-holder").css({left:"-999999px",width:"1px",height:"1px"});overlayBackground&&overlayBackground.click()}
function playComplete(){btnPlay.css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") -74px 5px no-repeat');btnStop.css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") 6px 5px no-repeat');recordStatus="normal"}
$(document).ready(function(){function u(a,b){for(var d=0;d<c.length;d++)if(-1!=$.trim(a).toLowerCase().indexOf($.trim(c[d].image).toLowerCase())&&$.trim(c[d].term).toLowerCase()==$.trim(b).toLowerCase())return!0;return!1}function D(a){var b=$(a).attr("data-link");$("#learning-dashboard-content").children("div").hide();$("#"+b).stop(!0,!0).fadeIn(500,function(){if("tab3-content"==b){var a=$("#tab3-content .img-main:first").width()-58;$("#tab3-content .textbox").width(a);$("input.textbox").focus();
L||(playSound(resourceUrl+M),L=!0)}});$("#learning-dashboard-content").children(".dashboard-navigator").show()}"en"==defaultLanguage?(multiLangSystem.title_click_to_flip_card="Click to flip this card",multiLangSystem.message_microphone_is_not_available="Microphone is not available",multiLangSystem.title_try_again="Try again",multiLangSystem.title_type_again="Type again"):(multiLangSystem.title_click_to_flip_card="B\u1ea5m \u0111\u1ec3 l\u1eadt th\u1ebb",multiLangSystem.message_microphone_is_not_available=
"Kh\u00f4ng th\u1ec3 thu \u00e2m",multiLangSystem.title_try_again="Th\u1eed l\u1ea1i",multiLangSystem.title_type_again="G\u00f5 l\u1ea1i");overlayBackground=Ucan.Function.HTML.createOverlayBackground($("#audio-recorder-holder"));hasFlashPlugin()||(hidePromptFlash(),$("#audio-recorder-holder").remove(),canRecord=!1);recordStatus="normal";btnRecord=$("#tab1-content .button-list .record");btnPlay=$("#tab1-content .button-list .play");btnStop=$("#tab1-content .button-list .stop");var c=shuffle(activityContent.card),
g=c.length,k=[],x=[];$("#tab-step-container .stage-tab").click(function(){$(this).hasClass("tab-selected")||($(this).siblings().removeClass("tab-selected global-green-bar"),$(this).addClass("tab-selected").addClass("global-green-bar"),D(this))});$("#tab-step-container .stage-tab").hover(function(){$(this).is(".tab-selected")||$(this).addClass("global-green-bar")},function(){$(this).is(".tab-selected")||$(this).removeClass("global-green-bar")});var k=$("#learning-dashboard-content .dashboard-navigator #next-tab"),
r=$("#learning-dashboard-content .dashboard-navigator #prev-tab");k.click(function(){var a=$("#tab-step-container").children(".tab-selected");2>a.attr("data-tab-order")&&(a.removeClass("tab-selected global-green-bar"),a=a.next().addClass("tab-selected global-green-bar"),D(a))});r.click(function(){var a=$("#tab-step-container").children(".tab-selected");0<a.attr("data-tab-order")&&(a.removeClass("tab-selected global-green-bar"),a=a.prev().addClass("tab-selected global-green-bar"),D(a))});var N=function(){"playing"==
recordStatus&&(document.getElementById("audio-recorder").stopPlaying(),btnPlay.css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") -72px 5px no-repeat'));"recording"==recordStatus&&(document.getElementById("audio-recorder").stopRecording(),btnRecord.css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") -121px 5px no-repeat'));btnStop.css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") 6px 5px no-repeat');
recordStatus="normal"},P=function(){v||(btnPlay.css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") -72px 5px no-repeat'),v=!0);"playing"==recordStatus&&(document.getElementById("audio-recorder").stopPlaying(),btnPlay.css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") -72px 5px no-repeat'));document.getElementById("audio-recorder").startRecording();btnRecord.css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") -142px 5px no-repeat');
btnStop.css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") -22px 5px no-repeat');recordStatus="recording";btnPlay.hover(function(){"playing"!=recordStatus&&v&&btnPlay.css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") -98px 5px no-repeat')},function(){"playing"!=recordStatus&&v&&btnPlay.css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") -72px 5px no-repeat')});btnPlay.click(O)},
O=function(){v&&("recording"==recordStatus&&(document.getElementById("audio-recorder").stopRecording(),btnRecord.css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") -121px 5px no-repeat')),document.getElementById("audio-recorder").playSound(),btnPlay.css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") -98px 5px no-repeat'),btnStop.css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") -22px 5px no-repeat'),
recordStatus="playing")},Q=function(){if(y)y=!1,$("#tab1-content .word-meaning").stop(!0,!0).hide(),$("#tab1-content .img-caption").stop(!0,!0).fadeIn(500),$("#tab1-content .img-main-active").stop(!0,!0).fadeIn(1E3);else{y=!0;$("#tab1-content .word-meaning").css({width:$(s).width(),"min-height":$(s).height()+$(".img-caption").height()}).fadeIn(500);$("#tab1-content .img-caption, #tab1-content .img-main-active").hide();$("#tab1-content .title-flip").text(htmlEncode(j.term));$("#tab1-content .word-phonetic").text(htmlEncode(j.ipa));
$("#tab1-content .vietnamese-meaning").text(htmlEncode(j.meaning));var a=j.native_meaning;!a||""==$.trim(a)?$("#tab1-content .english-meaning").hide():($("#tab1-content .english-content").text(htmlEncode(a)).show(),$("#tab1-content .english-meaning").show());a=j.sample;!a||""==$.trim(a)?$(".example").hide():($(".example").show(),$(".example-content").text('"'+htmlEncode(a)+'"'))}},E=function(a){0==thumbBlockActive.index()?(a.css("cursor","default").animate({opacity:0.2}),a.siblings().css("cursor",
"pointer").animate({opacity:1})):thumbBlockActive.index()==$("#tab1-content .thumb-outer").children().size()-2?(a.css("cursor","default").animate({opacity:0.2}),a.siblings().css("cursor","pointer").animate({opacity:1})):$("#tab1-content .next-group, #tab1-content .prev-group").css({opacity:"1",cursor:"pointer"})},R=function(){var a=thumbBlockActive.children(".selected-thumb"),b=thumbBlockActive.children(".thumb:first"),d=thumbBlockActive.children(".thumb:last"),z=$("#tab1-content .btn-prev"),c=$("#tab1-content .btn-next");
a.attr("title")==d.attr("title")?(c.css("cursor","default"),c.animate({opacity:0.2},500),z.css({opacity:"1",cursor:"pointer"})):a.attr("title")==b.attr("title")?(z.css("cursor","default"),z.animate({opacity:0.2},500),c.css({opacity:"1",cursor:"pointer"})):(c.css({opacity:"1",cursor:"pointer"}),z.css({opacity:"1",cursor:"pointer"}))},S=function(){var a=!1;thumbBlockActive.children(".thumb").each(function(){$(this).hasClass("selected-thumb")&&(a=!0)});a||thumbBlockActive.children(".thumb:first").addClass("selected-thumb")},
T=function(){var a=$(thumbBlockActive).children(".selected-thumb");0<a.index()&&(a.removeClass("selected-thumb"),a=a.prev(".thumb").addClass("selected-thumb"),w(a))},U=function(){var a=$(thumbBlockActive).children(".selected-thumb");a.index()<$(thumbBlockActive).children(".thumb").size()-1&&($(a).removeClass("selected-thumb"),a=a.next(".thumb").addClass("selected-thumb"),w(a))},w=function(a){a:{for(var b=a.attr("title"),d=0;d<c.length;d++)if(c[d].term==b){j=c[d];break a}j=void 0}$(".word-meaning").hide();
y=!1;s.stop(!0,!0).animate({opacity:0},0,function(){$(this).removeClass("img-main-active").hide();$("#tab1-content img.img-main").each(function(){a.attr("src")==$(this).attr("src")&&(s=$(this).addClass("img-main-active"),s.show())})});s.animate({opacity:1},500,function(){playSound(resourceUrl+j.audio)});$("#tab1-content .img-caption").text(a.attr("title")).show();R()};btnStop.click(function(){N()});btnRecord.hover(function(){"recording"!=recordStatus&&$(this).css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") -142px 5px no-repeat')},
function(){"recording"!=recordStatus&&$(this).css("background",'url("'+baseUrl+'/themes/blueocean/img/flashcard-recording-buttonlist.png") -121px 5px no-repeat')});var v=!1;btnRecord.click(function(){canRecord?P():alert(multiLangSystem.message_microphone_is_not_available)});var j,k=Math.floor(0==g%20?g/20:g/20+1);2>k&&$("#tab1-content .navigator").hide();for(var q=$("#tab1-content .thumb-outer"),r=$("#tab1-content .flashcard-outer:first"),h=0;h<k;h++){q.append('<div class="thumb-block-'+h+'"></div>');
for(var n=0;20>n;n++){var e=n+20*h;if(e>=g)break;q.children(".thumb-block-"+h).append('<img class="thumb" title="'+c[e].term+'" src="'+resourceUrl+c[e].image+'" />');$("#tab1-content .flashcard-outer .img-caption").before('<img class="img-main" src="'+resourceUrl+c[e].image+'" title="'+multiLangSystem.title_click_to_flip_card+'"/>')}q.append(q.children(".navigator"));0<h&&q.children(".thumb-block-"+h).hide()}r.children(".img-main:first").addClass("img-main-active").show();thumbBlockActive=q.children(".thumb-block-0");
E($("#tab1-content .prev-group"));$("#tab1-content .next-group").click(function(){$(thumbBlockActive).index()<q.children().size()-2&&(thumbBlockActive=thumbBlockActive.hide().next().fadeIn(500),S(),w(thumbBlockActive.children(".selected-thumb")),E($(this)))});$("#tab1-content .prev-group").click(function(){0<$(thumbBlockActive).index()&&(thumbBlockActive=thumbBlockActive.hide().prev().fadeIn(500),S(),w(thumbBlockActive.children(".selected-thumb")),E($(this)))});var s=$("#tab1-content .img-main-active");
j=c[0];$("#tab1-content .thumb:first").addClass("selected-thumb");$("#tab1-content .img-caption").text($(".selected-thumb").attr("title"));R();k=$("#tab1-content div.thumb-outer .thumb");$(k).click(function(){$(this).addClass("selected-thumb");$(this).siblings(".thumb").removeClass("selected-thumb");w($(this))});$("#tab1-content .btn-prev").click(function(){T()});$("#tab1-content div.btn-next").click(function(){U()});$("#tab1-content .speaker").click(function(){playSound(resourceUrl+j.audio)});$("#tab1-content .flip-card, .flashcard-outer .img-main, .flashcard-outer .word-meaning").click(function(){Q()});
$(document).keyup(function(a){if("0"==$("#tab-step-container .tab-selected").attr("data-tab-order")){var b=a.which;13==b?playSound(resourceUrl+j.audio):73==b&&a.altKey?Q():37==b?T():39==b?U():82==b&&a.altKey?P():80==b&&a.altKey?O():83==b&&a.altKey&&N()}});var y=!1,V=function(a,b){playSound(Ucan.Resource.Audio.getClickedSound());$(a).children(".caption-background").show();var d=$(a).children(".caption-background").children(".caption-text:first"),c=$(d).text();"word-container"==b.draggable.parent().parent().attr("id")&&
""==c?($(a).children(".caption-background").children(".caption-text").text(b.draggable.text()),$(b.draggable).remove()):"word-container"==b.draggable.parent().parent().attr("id")&&""!=c?($(d).text(b.draggable.text()),b.draggable.text(c)):-1!=b.draggable.parent().attr("class").indexOf("caption-background")&&""==c?($(d).text(b.draggable.text()),b.draggable.text("").parent().hide()):-1!=b.draggable.parent().attr("class").indexOf("caption-background")&&""!=c&&b.draggable.text()!=c&&($(d).text(b.draggable.text()),
b.draggable.text(c))},F=function(a){$(a).draggable({revert:"invalid",helper:"clone",start:function(a,d){d.helper.css({color:"#008FD6","font-size":"24px"});$(this).data("draggable").offset.click.top=25;$(this).data("draggable").offset.click.left=$(d.helper).width()/2}});$(a).hover(function(){"word-container"==$(this).parent().parent().attr("id")&&$(this).stop(!0,!0).css("line-height","23px").animate({fontSize:"20px"},200)},function(){$(this).css("line-height","22px").animate({fontSize:"16px"},100)})},
W=function(a,b,d){for(var c=0;c<d.length;c++)$("#tab2-word-block-"+a).append('<div class="word">'+b[c]+"</div>"),$("#tab2-picture-block-"+a).append('<div class="picture-outer global-float-left">\n<img class="picture" src="'+resourceUrl+d[c]+'" />\n<div class="caption-background"><div class="caption-text"></div></div>')},X=function(){var a=new Image;a.src=resourceUrl+x[0];a.onload=function(){newHeight=180*a.height/a.width;$("#tab2-content img.picture").css({height:newHeight})}},A=function(){var a=
tab2PictureBlockActive.index(),b=tab2PictureBlockActive.find(".next-group"),c=tab2PictureBlockActive.find(".prev-group");0==a?(c.css({opacity:"0.2",cursor:"default"}),tab2PictureBlockActive.find(".next-group").css("cursor","pointer")):a==$("#picture-container .tab2-picture-block").size()-1?(b.css({opacity:"0.2",cursor:"default"}),tab2PictureBlockActive.find(".prev-group").css("cursor","pointer")):tab2PictureBlockActive.find(".next-group, .prev-group").css({opacity:"1",cursor:"pointer"})},k=[],x=[];
for(i=0;i<g;i++)k[i]=c[i].term,x[i]=c[i].image;r=Math.floor(0==g%8?g/8:g/8+1);2>r&&$("#tab2-content").find(".next-group, .prev-group").css("display","none");var G=[];for(i=0;i<r;i++){$("#word-container").append('<div id="tab2-word-block-'+i+'"></div>');$("#picture-container").append('<div id="tab2-picture-block-'+i+'" class="tab2-picture-block"></div>');h=[];n=[];for(e=0;8>e;e++){var H=e+8*i;if(H>=g)break;h[e]=k[H];n[e]=x[H]}e={};e.word=h;e.image=n;G[i]=e;shuffle(h);shuffle(n);W(i,h,n)}tab2WordBlockActive=
$("#tab2-word-block-0");tab2PictureBlockActive=$("#tab2-picture-block-0");$("#tab2-word-block-0").siblings().hide();$("#tab2-picture-block-0").siblings().hide();var I=$("#tab2-content > .navigator");$("#picture-container > .tab2-picture-block").each(function(){$(this).append($(I).clone())});$(I).hide();A();$(".word").each(function(){F(this)});X();$("#picture-container .picture-outer").droppable({accept:"#tab2-content .word, #tab2-content .caption-text",drop:function(a,b){V(this,b)},over:function(){$(this).stop(!0,
!0);animatePicture(this)}});$("#tab2-content .caption-text").draggable({revert:"invalid",helper:"clone",start:function(a,b){b.helper.css({color:"#008FD6"})}});$("#word-container").droppable({accept:"#tab2-content .caption-text",drop:function(a,b){playSound(Ucan.Resource.Audio.getClickedSound());$(tab2WordBlockActive).append('<div class="word">'+b.draggable.text()+"</div>");$(b.draggable).text("").parent().hide();$(this).animate({backgroundColor:"transparent"},300);F($(tab2WordBlockActive).children("div.word:last"))},
over:function(){$(this).animate({backgroundColor:"#f9f9ff"},300)},out:function(){$(this).animate({backgroundColor:"transparent"},300)}});$("#tab2-content .next-group").click(function(){$(tab2PictureBlockActive).index()<$("#picture-container").children(".tab2-picture-block").size()-1&&(tab2WordBlockActive=tab2WordBlockActive.hide().next().fadeIn(500),tab2PictureBlockActive=tab2PictureBlockActive.hide().next().fadeIn(500),A())});$("#tab2-content .prev-group").click(function(){0<$(tab2PictureBlockActive).index()&&
(tab2WordBlockActive=tab2WordBlockActive.hide().prev().fadeIn(500),tab2PictureBlockActive=tab2PictureBlockActive.hide().prev().fadeIn(500),A())});$("#tab2-content .btn-check").click(function(){var a=0;!$(tab2PictureBlockActive).attr("click-check")&&!$(tab2PictureBlockActive).attr("click-answer")&&(playSound(Ucan.Resource.Audio.getShowResultSound()),$(tab2PictureBlockActive).children(".picture-outer").each(function(){for(var b=$(this).children("img.picture").attr("src").toLowerCase(),d=$(this).find(".caption-text").text().toLowerCase(),
e=!1,f=0;f<c.length;f++)if(u(b,d)){e=!0;break}e?(a++,$(this).children("img.picture").before('<div class="correct-background"></div><img class="correct-icon" src="'+baseUrl+'/themes/blueocean/img/flashcard-correct-shadow.png"/>')):$(this).children("img.picture").before('<div class="incorrect-background"></div><img class="incorrect-icon" src="'+baseUrl+'/themes/blueocean/img/flashcard-incorrect-shadow.png"/>')}),$("#picture-container div.correct-background, #picture-container div.incorrect-background").css({height:newHeight-
20}),$(tab2PictureBlockActive).find("img.correct-icon").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500),tab2PictureBlockActive.attr("click-check",!0),$(tab2PictureBlockActive).find(".caption-text").css("cursor","default").draggable("disable"),$(tab2WordBlockActive).find(".word").css("cursor","default").unbind("mouseenter mouseleave").draggable("disable"),$("#tab2-content .total-items-each-block").text($(tab2PictureBlockActive).children(".picture-outer").size()),
$(this).siblings(".result").children(".number-correct").text(a),$(this).siblings(".result").fadeIn(1500),$(this).css({background:'url("'+baseUrl+'/themes/blueocean/img/flashcard-checkanswer-disable.png") 10px 5px no-repeat'}))});$("#tab2-content .btn-answer").click(function(){tab2PictureBlockActive.attr("click-answer")||(playSound(Ucan.Resource.Audio.getShowAnswerSound()),$(tab2PictureBlockActive).children(".picture-outer").each(function(a){for(var b=$(this).children("img.picture").attr("src"),d=
"",a=0;a<c.length;a++)if(-1!=b.indexOf(c[a].image)){d=c[a].term;break}$(this).children(".caption-background").show().children(".caption-text").text(d)}),tab2PictureBlockActive.attr("click-answer",!0),$(tab2PictureBlockActive).find(".caption-text").css("cursor","default").draggable("disable"),$(tab2WordBlockActive).find(".word").css("cursor","default").unbind("mouseenter mouseleave").draggable("disable"),$(this).css({background:'url("'+baseUrl+'/themes/blueocean/img/flashcard-checkanswer-disable.png") -74px 5px no-repeat'}).siblings(".btn-check").css({background:'url("'+
baseUrl+'/themes/blueocean/img/flashcard-checkanswer-disable.png") 10px 5px no-repeat'}))});$("#tab2-content .btn-redo").click(function(){$(tab2WordBlockActive).fadeOut(1E3);$(tab2PictureBlockActive).fadeOut(1E3,function(){var a=$(tab2PictureBlockActive).attr("id"),a=a[a.length-1];$("#tab2-picture-block-"+a).attr("click-check","").attr("click-answer","").html("");$("#tab2-word-block-"+a).html("");W(a,shuffle(G[a].word),shuffle(G[a].image));X();$(tab2WordBlockActive).children(".word").each(function(){F(this)});
$(tab2PictureBlockActive).find(".caption-text").draggable({revert:"invalid",helper:"clone",start:function(a,c){c.helper.css({color:"#008FD6"})}});$("#picture-container .picture-outer").droppable({accept:"#tab2-content .word, #tab2-content .caption-text",drop:function(a,c){V(this,c)},over:function(){$(this).stop(!0,!0);animatePicture(this)}});$(tab2PictureBlockActive).fadeIn(1E3);$(tab2WordBlockActive).fadeIn(1E3);$(tab2PictureBlockActive).append(I.clone(!0).show());A()})});var Y=function(){$("#tab3-main-board .answer-board .answer-text").text(htmlEncode(p.term));
var a=$(f).width();$("#tab3-main-board .answer-board").css({width:a}).fadeIn(300);$("#tab3-main-board .textbox").focus().select()},K=function(){$("#tab3-result-container .remain .number").text(l.length-m);$("#tab3-result-container .correct .number").text(m);$("#tab3-result-container .incorrect .number").text(J)},Z=function(){var a=f.width()-58;$("#tab3-content .textbox").width(a)},l=shuffle(Object.create(c)),p=l[0],M=p.audio,m=0,J=0,f,t=$("#tab3-main-board .user-input input.textbox");K();for(g=0;g<
l.length;g++)$("#tab3-content .img-wrapper").append('<img class="img-main" src="'+resourceUrl+l[g].image+'"/>');$("#tab3-content .img-wrapper").append('<div class="answer-board"><div class="answer-text"></div><div>'+multiLangSystem.title_type_again+'</di><div class="orange-arrow"></div></div>');f=$("#tab3-content .img-main:first").show();$("#tab3-content .listen-again").click(function(){playSound(resourceUrl+p.audio)});var B=0,C=!0;$(t).keypress(function(a){if(13==a.which){if(!C)return!1;C=!1;var a=
$(f).attr("src"),b=$(t).val(),c=$(f).position().top+($(f).height()-110)/2,e=$(f).position().left+($(f).width()-80)/2;u(a,b)?(m++,playSound(Ucan.Resource.Audio.getHitSound()),p=l[m],K(),1>l.length-m&&($("#tab3-main-board").fadeOut(100,function(){$(this).find(".textbox").blur()}),$("#tab3-result-container").stop(!0,!0).animate({width:263,marginLeft:344},1E3,function(){$(this).append('<div class="try-again">&nbsp;&nbsp;&nbsp;'+multiLangSystem.title_try_again+"</div>");$(this).children(".try-again").css({"margin-top":"0px"}).animate({marginTop:20,
opacity:1},1E3)}),$("#tab3-result-container .try-again").live("click",function(){$("#tab3-result-container .try-again").fadeOut(300).die().remove();$("#tab3-result-container").animate({width:220,marginLeft:20},1E3,function(){J=m=0;p=l[m];$("#tab3-result-container .remain .number").text(l.length);$("#tab3-result-container .correct .number").text(0);$("#tab3-result-container .incorrect .number").text(0);playSound(resourceUrl+p.audio);f=$("#tab3-content .img-main").hide();f=$("#tab3-content .img-main:first").show();
Z();$("#tab3-main-board").fadeIn(1E3);$("#tab3-main-board").find(".textbox").focus()})})),$(f).after('<div class="true-false-icon"></div>').siblings(".true-false-icon").css({top:c,left:e,background:'url("'+baseUrl+'/themes/blueocean/img/flashcard-correct.png") center no-repeat'}).animate({opacity:1},700,function(){$(this).animate({opacity:0},700,function(){$(this).remove();f.hide();f=$("#tab3-main-board .img-main").eq(m).show();Z();C=!0;$(t).val("").focus();0<l.length-m&&playSound(resourceUrl+p.audio)})}),
$("#tab3-main-board .answer-board").hide(),B=0):(J++,B++,playSound(Ucan.Resource.Audio.getMissSound()),K(),$(t).css("color","red"),3==B?(B=0,Y()):$(f).after('<div class="true-false-icon"></div>').siblings(".true-false-icon").css({top:c,left:e,background:'url("'+baseUrl+'/themes/blueocean/img/flashcard-incorrect.png") center no-repeat'}).stop(!0,!0).animate({opacity:1},400,function(){$(this).animate({opacity:0},400,function(){$(this).remove()})}),C=!0);return!1}$(t).css("color","black");return!0});
$(t).keyup(function(a){13==a.which&&a.ctrlKey&&playSound(resourceUrl+p.audio)});$("#tab3-main-board .show-answer").click(function(){Y()});var M,L=!1});

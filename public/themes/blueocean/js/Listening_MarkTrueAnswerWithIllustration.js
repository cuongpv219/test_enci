$(document).ready(function(){function n(){for(var a=[],b=activityContent.group,d=[],e='<div id="true-false-icon-holder-title"></div>',g="",f="",c=0;c<h;c++)if(-1==$.inArray(b[c].character,a)){var j={};j.id=a.length;j.name=b[c].character;j.imgUrl=b[c].character_picture;d[d.length]=j;k[c]=a.length;a[a.length]=b[c].character}else k[c]=$.inArray(b[c].character,a);i=generateRandomArr(d.length);o=i.length;m=getInvertRandomArr(i);for(a=0;a<h;a++)if("undefined"!=typeof b[a].sentence){f+='<div class="sentence-row" id="sentence-row-id-'+
a+'"><div class="true-false-icon-holder" id="true-false-icon_'+a+'"></div><div class="sentence-text">'+b[a].sentence+"</div>";for(q=0;q<d.length;q++)f+='<div id="choice_'+a+"_"+q+'" class="choice global-choice-circle" value="0" alt="green-ball" ></div>';f+="</div>"}for(b=0;b<d.length;b++)e+='<span class="character-name">'+d[i[b]].name+"</span>",g+='<img class="character-picture" alt="'+d[i[b]].name+'" src="'+resourceUrl+d[i[b]].imgUrl+'">';$("#character-names").append(e);$("#character-pictures").append(g);
$("#sentences-choices-container").append(f);$(".choice").click(function(){l&&1!=$(this).attr("value")&&($(this).addClass("checked"),$(this).siblings(".choice").attr("value","0").removeClass("checked"),$(this).siblings(".choice").attr("value","0"),$(this).attr("value","1"))})}var o,h=activityContent.group.length,l=!0,k=[],i=[],m=[],g=!1;n();$(".sentence-text").width(980-120*o);var e=0;$("#loadResult").click(function(){if(l){l=!1;playSound(Ucan.Resource.Audio.getShowResultSound());for(var a=e=0;a<h;a++)"1"==
$("#choice_"+a+"_"+m[k[a]]).attr("value")?(e++,insertTrueFalseIcon(!0,"#true-false-icon_"+a)):insertTrueFalseIcon(!1,"#true-false-icon_"+a);$(".true-icon, .false-icon").ucanAnimateTrueFalseIcon();$("#num-of-correct-answers-result").text(e+"/"+h);score=Math.floor(100*(e/h));$("#score-text").text(score);$("#show-result").show("slide",{direction:"left"},Ucan.Constants.getShowResultSpeed());g=!0}});$("#redo").click(function(){g&&(g=!1,$("#show-result").hide("slide",{direction:"left"},Ucan.Constants.getHideResultSpeed(),
function(){l=!0;$("#character-names").html("");$("#character-pictures").html("");$("#sentences-choices-container").html("");n()}))});$("#show-answer").click(function(){$(".choice").removeClass("checked");for(var a=0;a<h;a++)$("#choice_"+a+"_"+m[k[a]]).addClass("checked").fadeOut(500).fadeIn(500)})});
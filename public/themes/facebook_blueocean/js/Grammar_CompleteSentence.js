$(document).ready(function(){function m(){f=activityContent.group.length;var b='<ul id="sentences">';j=[];e=[];var d=0;for(i=0;i<f;i++){j[i]=activityContent.group[i].sentence;var a;a=j[i];var c=a.indexOf("["),g=a.indexOf("]"),h=[];-1!=c&&-1!=g&&c<g?(h[0]=a.substring(c+1,g),h[1]=a.substring(0,c-1),h[2]=a.substring(g+1,a.length),a=h):a=!1;!1!=a?(d++,b+='<li class="sentence">'+d+". "+a[1]+' <span class="textbox"><input class="text" tabindex='+(i+1)+"/></span> "+a[2]+"</li>",e[i]=a[0]):e[i]=""}b+="</ul>";
$("#sentence-list").append($(b));$(".text:first").focus();$(".text").autoGrowInput({comfortZone:5,minWidth:90,maxWidth:140})}var k=!0,l=!1,f=activityContent.group.length,j=[],e=[];m();$("#show-answer").click(function(){var b=0;$(".text").each(function(){$(this).val(e[b]);b++});$(".text").fadeOut(400).fadeIn(400)});var c=0;$("#loadResult").click(function(){if(k){k=!1;playSound(Ucan.Resource.Audio.getShowResultSound());var b=c=0;$(".text").each(function(){var d;a:{d=$(this).val();var a=e[b].split("/");
for(i=0;i<a.length;i++)if(isEqualString(d,a[i])){d=!0;break a}d=!1}d?(c++,insertTrueFalseIconAfter(!0,this)):insertTrueFalseIconAfter(!1,this);b++});$(".true-icon").css({margin:"-2px 2px 0px 1px","box-shadow":"none",border:"none",width:"20px",height:"20px"});$(".false-icon").css({margin:"-2px 2px 0px 1px","box-shadow":"none",border:"none",width:"20px",height:"20px"});$(".true-icon, .false-icon").ucanAnimateTrueFalseIcon();$("#num-of-correct-answers-result").text(c+"/"+f);score=Math.floor(100*(c/f));
$("#score-text").text(score);$("#show-result").show("slide",{direction:"left"},Ucan.Constants.getShowResultSpeed());l=!0}});$("#redo").click(function(){l&&(l=!1,$("#show-result").hide("slide",{direction:"left"},Ucan.Constants.getHideResultSpeed(),function(){k=!0;$("#sentence-list").html("");m()}))})});
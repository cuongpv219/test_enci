google.load("visualization","1",{packages:["corechart"]});var count,unShowClickResult=0; $(document).ready(function(){function i(e){if(e.results){var d=getPrecision(activityContent.card[a].term,e.results[0].utterance,e.results[0].confidence);$("#raw-result").text(e.results[0].utterance+" - "+e.results[0].confidence);$("#microphone-input").val("").blur();$("#result-pointer").animate({"margin-left":Math.round($("#score-bar").width()*d-$("#result-pointer").width()/2)+"px"},2E3);g[a][g[a].length]=d;b[a][0]+=1;0.8<d?b[a][1]+=1:0.5>d?b[a][3]+=1:b[a][2]+=1;j()}}function j(){$("#number-try-label").text(10> b[a][0]?"0"+b[a][0]:b[a][0]);$("#number-great-label").text(10>b[a][1]?"0"+b[a][1]:b[a][1]);$("#number-acceptable-label").text(10>b[a][2]?"0"+b[a][2]:b[a][2]);$("#number-bad-label").text(10>b[a][3]?"0"+b[a][3]:b[a][3]);var e=g[a],d=new google.visualization.DataTable;d.addColumn("string","Times");d.addColumn("number","%");for(var c=0;c<e.length;c++)d.addRows([[c.toString(10),e[c]]]);(new google.visualization.LineChart(document.getElementById("chart_div"))).draw(d,{width:557,height:309,title:"Pronunciation progress"})} function h(b){k++;$(".global-tab-container").ucanMoveToTab(b);$("#result-pointer").css("margin-left",Math.round(-$("#result-pointer").width()/2)+"px");$(".navigator-button").attr("data-active","0");a=parseInt(b);$("#speak-word").text(activityContent.card[a].term);$("#speak-word-ipa").text(htmlEncode(activityContent.card[a].ipa));$("#sentence-button_"+b).attr("data-active","1");j()}var k=0;if(-1<navigator.userAgent.toLowerCase().indexOf("chrome")){count=activityContent.card.length;for(var g=[],b=[], a=0,c="",f=0;f<count;f++)g[f]=[],b[f]=[0,0,0,0],c+='<div id="sentence-button_'+f+'" data-order="'+f+'" class="inactive-button navigator-button unselected" data-active="0">'+(f+1)+"</div>";$("#navigator-bar").append(c);h("0");c=document.querySelector("[x-webkit-speech]");c.addEventListener("change",i,!1);c.addEventListener("webkitspeechchange",i,!1);$("#microphone-input").focus(function(){$("#result-pointer").css("margin-left",Math.round(-$("#result-pointer").width()/2)+"px")});$(".navigator-button").click(function(){h($(this).attr("data-order"))}); $("#next-button").click(function(){a<count+1&&h((a+1).toString())});$("#previous-button").click(function(){0<a&&h((a-1).toString())});$("#speaker-wrapper").click(function(){playSound(resourceUrl+activityContent.card[a].audio)});$("#finish").click(function(){$(document).keyup(function(a){13==a.keyCode&&$("#multipage-confirm-dialog-button-no").click()});1==k&&1<count?(unShowClickResult++,1==unShowClickResult&&($(".overlay-black").show(),$("#multipage-confirm-dialog").fadeIn(500))):window.location.replace(nextActivityUrl)})}else c= '<div id="error-message">This activity only works on Chrome</div>\n<div class="global-submit-div"><div id="loadResult" class="global-button-green-1">'+multiLangSystem.button_finish+"</div></div>",$("#activity-container").html(c)});function loadResult(){window.location.replace(nextActivityUrl)};
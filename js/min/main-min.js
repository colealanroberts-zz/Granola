function scrollDoc(){$(window).mousewheel(function(e,t){e.preventDefault();var n=$(window).scrollLeft();$(window).scrollLeft(n-2*t)})}function showMenu(){$(".btn-hamburger").click(function(){$(this).delay(MENU_ANIMATION_DELAY).queue(function(){$(".sign-up").css({display:"block"}).toggleClass("animate-menu-out animate-menu-in"),$(".menu-icon").toggleClass("animate-menu-icon-out animate-menu-icon-in"),$(this).dequeue(),$(".sign-up").hasClass("animate-menu-out")&&($(".sign-up-feedback").text(""),$(".sign-up-form form input").val(""))})})}function playCardAnimation(){$(".card").css({opacity:0}),function e(t){$card=$(".card"),$card.eq(t).addClass("animate-card-in").css({opacity:1}),setTimeout(function(){e((t+1)%$card.length)},CARD_ANIMATE_DURATION)}(0)}function signUp(){$(".btn-sign-up").click(function(e){var t=$(".sign-up-feedback");e.preventDefault();var n=$(".sign-up-form form").serializeArray();console.log(n),0===$(".sign-up-form input").val().length&&t.html("Not so fast cowboy!<br>You cannot have blank fields!"),$.ajax({type:"POST",url:"",cache:!1,traditional:!0,data:JSON.stringify(n),dataType:"json",contentType:"application/json; charset=utf-8",success:function(e,n,a){t.html("Successfully Posted")},error:function(e,n){t.html("Well skippy...<br>we don't have a db yet!")}})})}function getHomeArticleScience(){var e=$(".results--science");$.ajax({url:"http://www.reddit.com/r/science/hot.json?limit="+ARTICLE_REQUEST_AMOUNT+"&jsonp=?",type:"GET",dataType:"jsonp",cache:!1,error:function(){console.log("Some kind of error")},success:function(t){playCardAnimation();for(var n=t.data.children.length,a=0;HOMEPAGE_ARTICLE_LIMIT>a;a++)e.append('<li><a href="'+t.data.children[a].data.url+'">'+t.data.children[a].data.title.substr(0,HOMEPAGE_ARTICLE_CHAR_LIMIT)+"</a></li>"),curlIndex=a;$(".science .btn-read-more").click(function(){if(e.addClass("animate-results-out").empty(),setTimeout(function(){e.removeClass("animate-results-out")},500),n>curlIndex){for(var a=curlIndex;curlIndex+HOMEPAGE_ARTICLE_LIMIT>a;a++)e.append('<li><a href="'+t.data.children[a].data.url+'">'+t.data.children[a].data.title.substr(0,HOMEPAGE_ARTICLE_CHAR_LIMIT)+"</a></li>");curlIndex=a+HOMEPAGE_ARTICLE_LIMIT,console.log(curlIndex)}else console.log("You need to retrieve the next 25 results ya scrub")})}})}function getHomeArticleAtheism(){var e=$(".results--atheism");$.ajax({url:"http://www.reddit.com/r/atheism/hot.json?limit="+ARTICLE_REQUEST_AMOUNT+"&jsonp=?",type:"GET",dataType:"jsonp",cache:!1,error:function(){console.log("Some kind of error")},success:function(t){for(var n=t.data.children.length,a=0;HOMEPAGE_ARTICLE_LIMIT>a;a++)e.append('<li><a href="'+t.data.children[a].data.url+'">'+t.data.children[a].data.title.substr(0,HOMEPAGE_ARTICLE_CHAR_LIMIT)+"</a></li>"),curlIndex=a;$(".atheism .btn-read-more").click(function(){if(e.addClass("animate-results-out").empty(),setTimeout(function(){e.removeClass("animate-results-out")},500),n>curlIndex){for(var a=curlIndex;curlIndex+HOMEPAGE_ARTICLE_LIMIT>a;a++)e.append('<li><a href="'+t.data.children[a].data.url+'">'+t.data.children[a].data.title.substr(0,HOMEPAGE_ARTICLE_CHAR_LIMIT)+"</a></li>");curlIndex=a+HOMEPAGE_ARTICLE_LIMIT,console.log(curlIndex)}else console.log("You need to retrieve the next 25 results ya scrub")})}})}function getHomeArticlePhilosophy(){var e=$(".results--philosophy");$.ajax({url:"http://www.reddit.com/r/philosophy/hot.json?limit="+ARTICLE_REQUEST_AMOUNT+"&jsonp=?",type:"GET",dataType:"jsonp",cache:!1,error:function(){console.log("Some kind of error")},success:function(t){for(var n=t.data.children.length,a=0;HOMEPAGE_ARTICLE_LIMIT>a;a++)e.append('<li><a href="'+t.data.children[a].data.url+'">'+t.data.children[a].data.title.substr(0,HOMEPAGE_ARTICLE_CHAR_LIMIT)+"</a></li>"),curlIndex=a;$(".philosophy .btn-read-more").click(function(){if(e.addClass("animate-results-out").empty(),setTimeout(function(){e.removeClass("animate-results-out")},500),n>curlIndex){for(var a=curlIndex;curlIndex+HOMEPAGE_ARTICLE_LIMIT>a;a++)e.append('<li><a href="'+t.data.children[a].data.url+'">'+t.data.children[a].data.title.substr(0,HOMEPAGE_ARTICLE_CHAR_LIMIT)+"</a></li>");curlIndex=a+HOMEPAGE_ARTICLE_LIMIT,console.log(curlIndex)}else console.log("You need to retrieve the next 25 results ya scrub")})}})}function getHomeArticleTechnology(){var e=$(".results--technology");$.ajax({url:"http://www.reddit.com/r/technology/hot.json?limit="+ARTICLE_REQUEST_AMOUNT+"&jsonp=?",type:"GET",dataType:"jsonp",cache:!1,error:function(){console.log("Some kind of error")},success:function(t){for(var n=t.data.children.length,a=0;HOMEPAGE_ARTICLE_LIMIT>a;a++)e.append('<li><a href="'+t.data.children[a].data.url+'">'+t.data.children[a].data.title.substr(0,HOMEPAGE_ARTICLE_CHAR_LIMIT)+"</a></li>"),curlIndex=a;$(".technology .btn-read-more").click(function(){if(e.addClass("animate-results-out").empty(),setTimeout(function(){e.removeClass("animate-results-out")},500),n>curlIndex){for(var a=curlIndex;curlIndex+HOMEPAGE_ARTICLE_LIMIT>a;a++)e.append('<li><a href="'+t.data.children[a].data.url+'">'+t.data.children[a].data.title.substr(0,HOMEPAGE_ARTICLE_CHAR_LIMIT)+"</a></li>");curlIndex=a+HOMEPAGE_ARTICLE_LIMIT,console.log(curlIndex)}else console.log("You need to retrieve the next 25 results ya scrub")})}})}function getHomeArticleWorldNews(){var e=$(".results--world-news");$.ajax({url:"http://www.reddit.com/r/worldnews/hot.json?limit="+ARTICLE_REQUEST_AMOUNT+"&jsonp=?",type:"GET",dataType:"jsonp",cache:!1,error:function(){console.log("Some kind of error")},success:function(t){for(var n=t.data.children.length,a=0;HOMEPAGE_ARTICLE_LIMIT>a;a++)e.append('<li><a href="'+t.data.children[a].data.url+'">'+t.data.children[a].data.title.substr(0,HOMEPAGE_ARTICLE_CHAR_LIMIT)+"</a></li>"),curlIndex=a;$(".world-news .btn-read-more").click(function(){if(e.addClass("animate-results-out").empty(),setTimeout(function(){e.removeClass("animate-results-out")},500),n>curlIndex){for(var a=curlIndex;curlIndex+HOMEPAGE_ARTICLE_LIMIT>a;a++)e.append('<li><a href="'+t.data.children[a].data.url+'">'+t.data.children[a].data.title.substr(0,HOMEPAGE_ARTICLE_CHAR_LIMIT)+"</a></li>");curlIndex=a+HOMEPAGE_ARTICLE_LIMIT,console.log(curlIndex)}else console.log("You need to retrieve the next 25 results ya scrub")})}})}var HOMEPAGE_ARTICLE_LIMIT=3,ARTICLE_REQUEST_AMOUNT=50,HOMEPAGE_ARTICLE_CHAR_LIMIT=140,MENU_ANIMATION_DELAY=100,CARD_ANIMATE_DURATION=300;$(document).ready(function(){scrollDoc(),showMenu(),signUp(),getHomeArticleScience(),getHomeArticleAtheism(),getHomeArticlePhilosophy(),getHomeArticleTechnology(),getHomeArticleWorldNews()});
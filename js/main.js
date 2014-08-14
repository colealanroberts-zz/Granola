// Consts
var HOMEPAGE_ARTICLE_LIMIT = 3;
var HOMEPAGE_ARTICLE_CHAR_LIMIT = 140;
var MENU_ANIMATION_DELAY = 100;
var CARD_ANIMATE_DURATION = 300;

function scrollDoc() {
    $(window).mousewheel(function(event, delta) {
        event.preventDefault();
        var scroll = $(window).scrollLeft();
        $(window).scrollLeft(scroll - (delta * 2));
    });
}

function showMenu() {
    $('.btn-hamburger').click(function() {
        $(this).delay(MENU_ANIMATION_DELAY).queue(function() {
            $('.sign-up').css({display: 'block'}).toggleClass('animate-menu-out animate-menu-in');
            $('.menu-icon').toggleClass('animate-menu-icon-out animate-menu-icon-in');
            $(this).dequeue();

            // Clear the text inputs when .sign-up is closed
            if ($('.sign-up').hasClass('animate-menu-out')) {
                $('.sign-up-feedback').text('');
                $('.sign-up-form form input').val('');
            }
        });
    });
}

function playCardAnimation() {
    $('.card').css({opacity: 0});
    (function _loop(i) {
        $card = $('.card');
        $card.eq(i).addClass('animate-card-in').css({opacity: 1});
        setTimeout(function() {
            _loop((i + 1) % $card.length);
        }, CARD_ANIMATE_DURATION);
    }(0));
}

function signUp() {
    $('.btn-sign-up').click(function(e) {
        var $feedback = $('.sign-up-feedback');
        e.preventDefault();
        var signUpFormData = $('.sign-up-form form').serializeArray();

        // Log the JSON Array
        console.log(signUpFormData); // This should be deleted once we have a url

        if ($('.sign-up-form input').val().length === 0) {
            $feedback.html('Not so fast cowboy!' + '<br>' + 'You cannot have blank fields!');
        }

        $.ajax({
            type: 'POST',
            url: '',
            cache: false,
            traditional: true,
            data: JSON.stringify(signUpFormData),
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function(data, textStatus, jqXHR) {
                $feedback.html('Successfully Posted');
            },
            error: function(status, error) {
                $feedback.html("Well skippy..." + '<br>' + "we don't have a db yet!");
            }
        });
    });
}

function getHomeArticleScience(curlIndex) {
    $.ajax({
        url: 'http://www.reddit.com/r/science/hot.json?jsonp=?',
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        error: function() {
            console.log('Some kind of error');
        },
        success: function(data, curlIndex) {
            playCardAnimation();
            var collectionLength = data.data.children.length;
            console.log(collectionLength);
            for (var i = 0; i < HOMEPAGE_ARTICLE_LIMIT; i++) {
                $('.results--science').append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
                curlIndex = i + HOMEPAGE_ARTICLE_LIMIT;
            }
            $('.science .btn-read-more').click(function() {
                $('.science--results').empty();
                for (var i = curlIndex; i < curlIndex + HOMEPAGE_ARTICLE_LIMIT && curlIndex <= collectionLength; i++) {
                    $('.results--science').append('<li><a href="' + data.data.children[i].data.url + '">' + curlIndex + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
                }
                curlIndex = i + HOMEPAGE_ARTICLE_LIMIT;
            });
        }
    });
}

function getHomeArticleAtheism() {
    $.ajax({
        url: 'http://www.reddit.com/r/atheism/hot.json?jsonp=?',
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        error: function() {
            console.log('Some kind of error');
        },
        success: function(data) {
            for (var i = 0; i < HOMEPAGE_ARTICLE_LIMIT; i++) {
                $('.results--atheism').append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
            }
        }
    });
}

function getHomeArticlePhilosophy() {
    $.ajax({
        url: 'http://www.reddit.com/r/philosophy/hot.json?jsonp=?',
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        error: function() {
            console.log('Some kind of error');
        },
        success: function(data) {
            for (var i = 0; i < HOMEPAGE_ARTICLE_LIMIT; i++) {
                $('.results--philosophy').append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
            }
        }
    });
}

function getHomeArticleTechnology() {
    $.ajax({
        url: 'http://www.reddit.com/r/technology/hot.json?jsonp=?',
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        error: function() {
            console.log('Some kind of error');
        },
        success: function(data) {
            for (var i = 0; i < HOMEPAGE_ARTICLE_LIMIT; i++) {
                $('.results--technology').append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
            }
        }
    });
}

function getHomeArticleWorldNews() {
    $.ajax({
        url: 'http://www.reddit.com/r/worldnews/hot.json?jsonp=?',
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        error: function() {
            console.log('Error mate!');
        },
        success: function(data) {
            for (var i = 0; i < HOMEPAGE_ARTICLE_LIMIT; i++) {
                $('.results--world-news').append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
            }
        }
    });
}

$(document).ready(function() {
    scrollDoc();
    showMenu();
    signUp();
    getHomeArticleScience();
    getHomeArticleAtheism();
    getHomeArticlePhilosophy();
    getHomeArticleTechnology();
    getHomeArticleWorldNews();
});
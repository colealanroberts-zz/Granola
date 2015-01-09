// Consts
var HOMEPAGE_ARTICLE_LIMIT = 3;
var ARTICLE_REQUEST_AMOUNT = 50;
var HOMEPAGE_ARTICLE_CHAR_LIMIT = 140;
var MENU_ANIMATION_DELAY = 100;
var CARD_ANIMATE_DURATION = 300;
var REMOVE_RESULTS_DURATION = 325;

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
        var $card = $('.card');
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

function getHomeArticleScience() {
    var $resultsScience = $('.results--science');

    $.ajax({
        url: 'http://www.reddit.com/r/science/hot.json?' + 'limit=' + ARTICLE_REQUEST_AMOUNT + '&jsonp=?',
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        error: function() {
            console.log('Some kind of error');
        },
        success: function(data, curlIndex) {
            console.log(data);
            playCardAnimation();
            var resultsLength = data.data.children.length;
            for (var i = 0; i < HOMEPAGE_ARTICLE_LIMIT; i++) {
                $resultsScience.append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
                curlIndex = i;
            }
            $('.science .btn-read-more').click(function() {
                $resultsScience.addClass('animate-results-out').empty();
                setTimeout(function() {
                    $resultsScience.removeClass('animate-results-out');
                }, REMOVE_RESULTS_DURATION);
                if (curlIndex < resultsLength) {
                    for (var i = curlIndex; i < curlIndex + HOMEPAGE_ARTICLE_LIMIT; i++) {
                        $resultsScience.append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
                    }
                    curlIndex = i + HOMEPAGE_ARTICLE_LIMIT;
                    console.log(curlIndex);
                } else {
                    console.log('You need to retrieve the next 25 results ya scrub');
                }
            });
        }
    });
}

function getHomeArticleAtheism() {
    var $resultsAtheism = $('.results--atheism');

    $.ajax({
        url: 'http://www.reddit.com/r/atheism/hot.json?' + 'limit=' + ARTICLE_REQUEST_AMOUNT + '&jsonp=?',
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        error: function() {
            console.log('Some kind of error');
        },
        success: function(data, curlIndex) {
            var resultsLength = data.data.children.length;
            for (var i = 0; i < HOMEPAGE_ARTICLE_LIMIT; i++) {
                $resultsAtheism.append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
                curlIndex = i;
            }
            $('.atheism .btn-read-more').click(function() {
                $resultsAtheism.addClass('animate-results-out').empty();
                setTimeout(function() {
                    $resultsAtheism.removeClass('animate-results-out');
                }, REMOVE_RESULTS_DURATION);
                if (curlIndex < resultsLength) {
                        for (var i = curlIndex; i < curlIndex + HOMEPAGE_ARTICLE_LIMIT; i++) {
                    $resultsAtheism.append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
                    }
                    curlIndex = i + HOMEPAGE_ARTICLE_LIMIT;
                    console.log(curlIndex);
                } else {
                    console.log('You need to retrieve the next 25 results ya scrub');
                }
            });
        }
    });
}

function getHomeArticlePhilosophy() {
    var $resultsPhilosophy = $('.results--philosophy');

    $.ajax({
        url: 'http://www.reddit.com/r/philosophy/hot.json?' + 'limit=' + ARTICLE_REQUEST_AMOUNT + '&jsonp=?',
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        error: function() {
            console.log('Some kind of error');
        },
        success: function(data, curlIndex) {
            var resultsLength = data.data.children.length;
            for (var i = 0; i < HOMEPAGE_ARTICLE_LIMIT; i++) {
                $resultsPhilosophy.append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
                curlIndex = i;
            }
            $('.philosophy .btn-read-more').click(function() {
                $resultsPhilosophy.addClass('animate-results-out').empty();
                setTimeout(function() {
                    $resultsPhilosophy.removeClass('animate-results-out');
                }, REMOVE_RESULTS_DURATION);
                if (curlIndex < resultsLength) {
                    for (var i = curlIndex; i < curlIndex + HOMEPAGE_ARTICLE_LIMIT; i++) {
                    $resultsPhilosophy.append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
                    }
                    curlIndex = i + HOMEPAGE_ARTICLE_LIMIT;
                    console.log(curlIndex);
                } else {
                    console.log('You need to retrieve the next 25 results ya scrub');
                }
            });
        }
    });
}

function getHomeArticleTechnology() {
    var $resultsTechnology = $('.results--technology');

    $.ajax({
        url: 'http://www.reddit.com/r/technology/hot.json?' + 'limit=' + ARTICLE_REQUEST_AMOUNT + '&jsonp=?',
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        error: function() {
            console.log('Some kind of error');
        },
        success: function(data, curlIndex) {
            var resultsLength = data.data.children.length;
            for (var i = 0; i < HOMEPAGE_ARTICLE_LIMIT; i++) {
                $resultsTechnology.append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
                curlIndex = i;
            }
            $('.technology .btn-read-more').click(function() {
                $resultsTechnology.addClass('animate-results-out').empty();
                setTimeout(function() {
                    $resultsTechnology.removeClass('animate-results-out');
                }, REMOVE_RESULTS_DURATION);
                if (curlIndex < resultsLength) {
                    for (var i = curlIndex; i < curlIndex + HOMEPAGE_ARTICLE_LIMIT; i++) {
                    $resultsTechnology.append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
                    }
                    curlIndex = i + HOMEPAGE_ARTICLE_LIMIT;
                    console.log(curlIndex);
                } else {
                    console.log('You need to retrieve the next 25 results ya scrub');
                }
            });
        }
    });
}

function getHomeArticleWorldNews() {
    var $resultsWorldNews = $('.results--world-news');

    $.ajax({
        url: 'http://www.reddit.com/r/worldnews/hot.json?' + 'limit=' + ARTICLE_REQUEST_AMOUNT + '&jsonp=?',
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        error: function() {
            console.log('Some kind of error');
        },
        success: function(data, curlIndex) {
            var resultsLength = data.data.children.length;
            for (var i = 0; i < HOMEPAGE_ARTICLE_LIMIT; i++) {
                $resultsWorldNews.append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
                curlIndex = i;
            }
            $('.world-news .btn-read-more').click(function() {
                $resultsWorldNews.addClass('animate-results-out').empty();
                setTimeout(function() {
                    $resultsWorldNews.removeClass('animate-results-out');
                }, REMOVE_RESULTS_DURATION);
                if (curlIndex < resultsLength) {
                    for (var i = curlIndex; i < curlIndex + HOMEPAGE_ARTICLE_LIMIT; i++) {
                    $resultsWorldNews.append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
                    }
                    curlIndex = i + HOMEPAGE_ARTICLE_LIMIT;
                    console.log(curlIndex);
                } else {
                    console.log('You need to retrieve the next 25 results ya scrub');
                }
            });
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
// Consts
var HOMEPAGE_ARTICLE_LIMIT = 3;
var HOMEPAGE_ARTICLE_CHAR_LIMIT = 140;
var MENU_ANIMATION_DELAY = 100;

function showMenu() {
    $('.btn-hamburger').click(function() {
        $(this).delay(MENU_ANIMATION_DELAY).queue(function() {
            $('.sign-up').toggleClass('animate-menu-out animate-menu-in');
            $('.menu-icon').toggleClass('animate-menu-icon-out animate-menu-icon-in');
            $(this).dequeue();
        });
    });
}

function scrollDoc() {
    $(window).mousewheel(function(event, delta) {
        event.preventDefault();
        var scroll = $(window).scrollLeft();
        $(window).scrollLeft(scroll - (delta * 2));
    });
}

function collectSignUpInfo() {
    'use strict';

    var userEmail = $('#input-user-email').val();
    var userPassword = $('#input-user-password').val();
    var userPasswordAgain = $('#input-user-password-again').val();

    var user = {
        userEmail: userEmail,
        userPassword: userPassword,
        userPasswordAgain: userPasswordAgain,
        signUpDate: new Date()
    };
    console.log(user);
}

function getHomeArticleScience() {
    $('.loading').show();

    $.ajax({
        url: 'http://www.reddit.com/r/science/hot.json?jsonp=?',
        type: 'GET',
        dataType: 'jsonp',
        cache: false,
        error: function() {
            console.log('Some kind of error');
            $('.loading').hide();
        },
        success: function(data) {
            $('.content').addClass('animate-results-in');
            for (var i = 0; i < HOMEPAGE_ARTICLE_LIMIT; i++) {
                $('.results--science').append('<li><a href="' + data.data.children[i].data.url + '">' + data.data.children[i].data.title.substr(0, HOMEPAGE_ARTICLE_CHAR_LIMIT) + '</a></li>');
            }
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

$(function() {
    scrollDoc();
    showMenu();
    getHomeArticleScience();
    getHomeArticleAtheism();
    getHomeArticlePhilosophy();
    getHomeArticleTechnology();
    getHomeArticleWorldNews();
});
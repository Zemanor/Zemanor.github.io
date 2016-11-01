var quote = "If you want to achieve greatness stop asking for permission. ,, To live a creative life, we must lose our fear of being wrong. ,, Opportunities don’t happen, you create them. ,, I have not failed. I’ve just found 10,000 ways that won’t work. ,, No one can make you feel inferior without your consent. ,, If you’re going through hell keep going. ,, Don’t raise your voice, improve your argument. ,, Don’t be afraid to give up the good to go for the great. ,, No masterpiece was ever created by a lazy artist.,, Do one thing every day that scares you. ,, Your problem isn’t the problem. Your reaction is the problem. ,, You can do anything, but not everything. ,, Innovation distinguishes between a leader and a follower. ,, I find that the harder I work, the more luck I seem to have. ,, The starting point of all achievement is desire. ,, All progress takes place outside the comfort zone. ,, It’s not what you look at that matters, it’s what you see. ,, Fortune sides with him who dares. ,, Failure is the condiment that gives success its flavor. ,, Don’t let what you cannot do interfere with what you can do. ,, You may have to fight a battle more than once to win it.";
var quoteArray = quote.split(',,');

var author = "Anonymous,,Anonymous,,Chris Grosser,,Thomas A. Edison,,Eleanor Roosevelt,,Winston Churchill,,Anonymous,,John D. Rockefeller,, Anonymous,,Anonymous,,Anonymous,,Anonymous,,Steve Jobs,,Thomas Jefferson,,Napolean Hill,,Michael John Bobak,,Anonymous,,Virgil,,Truman Capote,,John R. Wooden,,Margaret Thatcher";
var authorArray = author.split(',,');


var randomNum = function(max) {
    return Math.ceil(Math.random() * max);
}
function getNum() {
    return randomNum(quoteArray.length);
}





$(document).ready(function() {
    $("#controllerImg").click(function(e) {
        e.preventDefault();
        $(".controller").addClass('animated');
        $(".controller").addClass('wobble');
        setTimeout(function() {
            $('.controller').removeClass('animated');
            $(".controller").removeClass('wobble');
        }, 1000);

        let idx = getNum();
        let quoteAt = quoteArray[idx];
        let authorAt = authorArray[idx];
        $(".quoteBox").html("<p>" + quoteAt + '<br>' + '<br>' + "-" + authorAt.fontsize(2) + "</p>");
    })
});





//power button
$(document).ready(function() {
    $(".brightness-icon").click(function(e) {
    	e.preventDefault();
    	$(".quote-container-col").toggleClass( "bgYellow" );
    	$(".brightness-icon").toggleClass( "greenLtrs" );
    	$(".quoteBox").toggleClass( "darkenBg" );
    	$(".body").toggleClass( "bgBlue" );
    })
});





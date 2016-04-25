/*
function getQuote(){
	
	$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  $("body").append(a[0].content + "<p>— " + a[0].title + "</p>");
});
}

$(document).ready(getQuote());  



function changeColor(){
//	$body.  change the backkground to random
  $(document).ready(function(){ $("#tweeter").click(change() { 
    console.log("click");
  $(body).css("background-color":"blue"); }); });
	

}
*/

$( document ).ready(function() {

    ! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');
    
    
$("#get-another-quote-button").click(function() { 
    console.log("click");
    //change to a random color.  thanks http://www.paulirish.com/2009/random-hex-color-code-snippets/
   $('body').css("background-color",'#'+Math.floor(Math.random()*16777215).toString(16)); 
});

$('#get-another-quote-button').on('click touchstart', function(){
	console.log("touched");
    //change to a random color.  thanks http://www.paulirish.com/2009/random-hex-color-code-snippets/
   $('body').css("background-color",'#'+Math.floor(Math.random()*16777215).toString(16)); 
});


//document.getElementById ('get-another-quote-button').addEventListener("mousedown", function () { alert('I was clicked'); }, false);

//'#'+Math.floor(Math.random()*16777215).toString(16);
$('#get-another-quote-button').on('click', function(e) {
	console.log("clicking");
    e.preventDefault();
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-title').text(post.title);
        $('#quote-content').html(post.content);

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false
    });
  });
 }); //end document ready function
   /*/sample json from quotegernerator:
  * [{"ID":864,"title":"Steven Heller","content":"<p>As a profession, graphic designers have been shamefully remiss or ineffective about plying their craft for social or political betterment.  <\/p>\n","link":"http:\/\/quotesondesign.com\/steven-heller\/"}]
  	*/
 
 
 
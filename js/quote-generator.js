$( document ).ready(function() {

//	automagically makes the Twitter Button

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
    
  
$('#get-another-quote-button').on('click', function(e) {
	console.log("clicking");

	var tweeterHTML = "blahblah";

	$('body').css("background-color",'#'+Math.floor(Math.random()*16777215).toString(16));//added 
    e.preventDefault();
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-title').text(post.title);
        $('#quote-content').html(post.content);
        tweeterHTML = tweeterHTML+post.content;
		$('#tweeter').html(tweeterHTML); // TODO make twitter tweet the quote
	//	console.log($('#tweeter').a.href);
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
  //Load initial quote -- Thanks http://stackoverflow.com/questions/2060019/how-to-trigger-click-on-page-load
      setTimeout(function() {
        $('#get-another-quote-button').trigger('click');
    },10);

  
 }); //end document ready function

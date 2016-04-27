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

  var tweeterStartHTML = '<a class="twitter-share-button"'
				  		+'href="https://twitter.com/share"'
						  +'data-size="large"'
 						 +'data-url="https://dev.twitter.com/web/tweet-button"'
					  +'data-via="twitterdev"'
					  +'data-related="twitterapi,twitter"'
 						 +'data-hashtags="example,demo" data-text="';
  
  //'data-text="custom share text">'
  
  var tweeterEndHTML = '">Tweet'
  						+'</a>'

;
	
	$('body').css("background-color",'#'+Math.floor(Math.random()*16777215).toString(16));//added 
    e.preventDefault();
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-title').text(post.title);
        $('#quote-content').html(post.content);
        var justTheText = "placeholders are great"//$('#quote-content').toString;//TODO - this is not right - get the <p> tags out of there.
        //var tweeterHTML = tweeterStartHTML+justTheText+tweeterEndHTML; //+post.content in the middle
       // console.log(tweeterHTML);
		//$('#tweeter').html(tweeterHTML); // TODO make twitter tweet the quote
	// Make a new twitter share button https://dev.twitter.com/web/tweet-button/javascript-create
	//Delete any existing tweeter button
	$('#tweeter').empty();
	//make a new tweeter button, specific to new quote
	//I tried to change the text property, but twitter made some sort of security error.
	twttr.widgets.createShareButton(
  'http://waywardpoints.com/random-quote-generator/',
  document.getElementById('tweeter'),
  {
    text: $('#quote-content > p').text(),
    size: "large"
  }
);
	
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

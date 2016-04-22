/*
function getQuote(){
	
	$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  $("body").append(a[0].content + "<p>— " + a[0].title + "</p>");
});
}

$(document).ready(getQuote());  */
function changeColor(){
//	$body.  change the backkground to random
$(document).ready(function(){ $(#tweeter).click(change() { $(body).css("background-color":"blue"); }); });
}

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
  
   /*/sample json from quotegernerator:
  * [{"ID":864,"title":"Steven Heller","content":"<p>As a profession, graphic designers have been shamefully remiss or ineffective about plying their craft for social or political betterment.  <\/p>\n","link":"http:\/\/quotesondesign.com\/steven-heller\/"}]
  	*/
 

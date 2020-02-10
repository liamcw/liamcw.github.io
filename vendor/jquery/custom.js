
// jQuery(document).ready(function($) {
//     var quotes = $(".rotate-text li");
//   var quoteIndex = -1;

//   function showNextQuote() {
//       ++quoteIndex;
//       var quote = quotes.eq(quoteIndex % quotes.length);
        
//       quote.addClass('active')
//       setTimeout(function() {
//         quote.removeClass('active');
//         showNextQuote();
//       }, 1500);
//   }

//   showNextQuote();
// });

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
	
});

$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    600,
    'linear'
  )
})

(function() {

  var quotes = $(".quotes");
  var quoteIndex = -1;
  
  function showNextQuote() {
      ++quoteIndex;
      quotes.eq(quoteIndex % quotes.length)
          .fadeIn(1000)
          .delay(1000)
          .fadeOut(1000, showNextQuote);
  }
  
  showNextQuote();
  
})();
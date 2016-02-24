jQuery(document).ready(function($) {
  
    // Fixa navbar ao ultrapassa-lo
    var navbar = $('#navbar-main'),
    		distance = navbar.offset().top,
        $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
          	$("body").css("padding-top", "70px");
        } else {
            navbar.removeClass('navbar-fixed-top');
            $("body").css("padding-top", "0px");
        }
    });
});





var MainComponent = React.createClass({
    doShit: function() {
        console.log("Fuck off!");  
    },
    render: function(){
        return (
            <div>
                <h1>fuck you</h1>
                <a onClick={this.doShit} href="#">Click dat shit</a>
            </div>
        );   
    }
});

//React.render(<MainComponent />, document.getElementById('content'));
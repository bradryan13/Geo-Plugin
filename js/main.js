

jQuery(document).ready(function($){
  
    $('.my-form').on('click', '.remove-market', function(){
    $(this).parent().css( 'background-color', '#FF6C6C' );
    $(this).parent().fadeOut("f", function() {
        $(this).remove();
    });
    return false;
});

    $('.my-form .add-market').click(function(){


    var n = $('.text-market').length - 1 + 1;

    var market_html = $('<div class="text-market row"> <div class="large-12 columns">\
                                        <label for="market' + n + '">Market Name\
                                                <input type="text" name="markets[]" value="" id="market' + n + '" />\
                                        </label>\
                                        <label>States\
                                                <textarea id="market-state' + n + '" placeholder="small-12.columns"></textarea>\
                                        </label>\
                                        <select multiple class="chosen-select">\
                                                <option value="AL">Alabama</option><option value="Am">Amalapuram</option><option value="An">Anakapalli</option><option value="Ak">Akkayapalem</option><option value="WY">Wyoming</option>\
                                        </select>\
                                        <a href="#" class="remove-market">Remove</a>\
                                </div></div>');
   
    market_html.hide();

    $('.my-form div.text-market:last').before(market_html);

    market_html.fadeIn('slow');
   
     $(".chosen-select").chosen()

    return false;
});


  // cache selects for use later
    var selects = $('.chosen-select');

    // whenever the selection changes, either disable or enable the 
    // option in the other selects
    selects.chosen().change(function() {
        var selected = [];

        // add all selected options to the array in the first loop
        selects.find("option").each(function() {
            if (this.selected) {
                selected[this.value] = this;
            }
        })

        // then either disabled or enable them in the second loop:
        .each(function() {

            // if the current option is already selected in another select disable it.
            // otherwise, enable it.
            this.disabled = selected[this.value] && selected[this.value] !== this;
        });

        // trigger the change in the "chosen" selects
        selects.trigger("chosen:updated");
    });


});

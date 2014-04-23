// 1) Long HTML string
// 2) condense chosen2 -- remove option
// 3) Default Market Name


jQuery(document).ready(function($){
  
    $('.my-form').on('click', '.remove-market', function(){
    $(this).parents('.market').css( 'background-color', '#FF6C6C' );
    $(this).parents('.market').fadeOut("f", function() {
        $(this).remove();
    });
    return false;
});

    $('.my-form .add-market').click(function(){

    var n = $('.market').length - 1 + 1;

    var market_html = $('<div class="market row"> <div class="large-12 columns">\
                                        <label for="market' + n + '">Market Name\
                                                <input type="text" name="markets[]" value="" id="market' + n + '" />\
                                        </label>\
                                        <select multiple data-placeholder="Choose states..." class="chosen-select">\
                                                <option value="AL">Alabama</option><option value="Am">Amalapuram</option><option value="An">Anakapalli</option><option value="Ak">Akkayapalem</option><option value="WY">Wyoming</option>\
                                        </select>\
                                         <label>Code\
                                                <textarea id="market-state' + n + '" placeholder="Insert Code"></textarea>\
                                        </label>\
                                        <a href="#" class="button tiny alert remove-market">Remove</a>\
                                </div></div>');
   
    market_html.hide();

    $('.my-form div.market:last').before(market_html);

    market_html.fadeIn('slow');
   
     $(".chosen-select").chosen()

    return false;
});


$('.my-form .add-market').click(function(){

        var selects = $('.chosen-select');

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


    $('.my-form .add-market').click(function(){

    var selects = $('.chosen-select');

    // whenever the selection changes, either disable or enable the 
    // option in the other selects
    $(selects.chosen).click(function(){

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

});


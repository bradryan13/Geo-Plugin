// 1) Long HTML string
// 2) condense chosen2 -- remove option
// 3) Default Market Name
jQuery(document).ready(function(e){e(".my-form").on("click",".remove-market",function(){e(this).parents(".market").css("background-color","#FF6C6C");e(this).parents(".market").fadeOut("f",function(){e(this).remove()});return!1});e(".my-form .add-market").click(function(){var t=e(".market").length-1+1,n=e('<div class="market row"> <div class="large-12 columns">                                        <label for="market'+t+'">Market Name                                                <input type="text" name="markets[]" value="" id="market'+t+'" />                                        </label>                                        <select multiple data-placeholder="Choose states..." class="chosen-select">                                                <option value="AL">Alabama</option><option value="Am">Ohio</option><option value="An">New York</option><option value="Ak">Kentucky</option><option value="WY">Wyoming</option>                                        </select>                                         <label>Code                                                <textarea id="market-state'+t+'" placeholder="Insert Code"></textarea>                                        </label>                                        <a href="#" class="button tiny alert remove-market">Remove</a>                                </div></div>');n.hide();e(".my-form div.market:last").before(n);n.fadeIn("slow");e(".chosen-select").chosen();return!1});e(".my-form .add-market").click(function(){var t=e(".chosen-select"),n=[];t.find("option").each(function(){this.selected&&(n[this.value]=this)}).each(function(){this.disabled=n[this.value]&&n[this.value]!==this});t.trigger("chosen:updated")});e(".my-form .add-market").click(function(){var t=e(".chosen-select");e(t.chosen).click(function(){var e=[];t.find("option").each(function(){this.selected&&(e[this.value]=this)}).each(function(){this.disabled=e[this.value]&&e[this.value]!==this});t.trigger("chosen:updated")})})});
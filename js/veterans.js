/*function validateSelectBoxes()
{
	//alert('here')
	var $dynamicSelect = $("#termcertification");
	
	
	$dynamicSelect.each(function(){
	   if($dynamicSelect.find("option[value="+this.value+"]:selected").length > 1){
		  
		  alert('term not selected')
		  
	   }
	});

}
*/
/*
$(document).ready(function () {

    $('#mainform').validate({ // initialize the plugin
        rules: {
            termcertification: {
                selectcheck: true
            }
        }
    });

    jQuery.validator.addMethod('selectcheck', function (value) {
        return (value != '0');
    }, "term required");

});*/


$().ready(function() {
	$("#mainform").validate();




   /* $('#mainform').validate({ // initialize the plugin
        rules: {
            termcertification: {
                selectcheck: true
            }
        }
    });

    jQuery.validator.addMethod('selectcheck', function (value) {
        return (value != '');
    }, "term required");

*/

//var isValid = true;





	//currentstatus : {required :true};


	$('p.options').click(function(event) {
		$('p.options').removeClass('selected');
		if($(this).hasClass("selected")){
			$('p.options').removeClass('selected');
		} else {
			$(this).addClass('selected');
			$(':radio', this).attr('checked', true);
		}

		
	});
});
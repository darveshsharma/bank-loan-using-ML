
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var income = $('.validate-input input[name="income"]');
    var cincome = $('.validate-input input[name="cincome"]');
    var loanamount = $('.validate-input input[name="loanamount"]');
    var term = $('.validate-input input[name="term"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(income).val().trim() == ''){
            showValidate(income);
            check=false;
        }

        if($(cincome).val().trim() == ''){
            showValidate(cincome);
            check=false;
        }

        if($(loanamount).val().trim() == ''){
            showValidate(loanamount);
            check=false;
        }
        if($(term).val().trim() == ''){
            showValidate(term);
            check=false;
        }
        return check;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);
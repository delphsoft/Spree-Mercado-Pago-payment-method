MercadoPago = {
    hidePaymentSaveAndContinueButton: function(paymentMethod) {
         $('.continue').hide();
         $('.payment-method-selector').hide();
        // if (MercadoPago.paymentMethodID && paymentMethod.val() == MercadoPago.paymentMethodID) {
        //      $('.continue').hide();
        // } else {
        //     $('.continue').show();
        // }
    }
};

$(document).ready(function() {
    checkedPaymentMethod = $('div[data-hook="checkout_payment_step"] input[type="radio"]:checked');
    if (checkedPaymentMethod.length >0 ) {
        MercadoPago.hidePaymentSaveAndContinueButton(checkedPaymentMethod);        
    }
    paymentMethods = $('div[data-hook="checkout_payment_step"] input[type="radio"]').click(function (e) {
        MercadoPago.hidePaymentSaveAndContinueButton($(e.target));
    });

    $('button.mercado_pago_button').click(function(event){
        $(event.target).prop("disabled",true);
    });
});

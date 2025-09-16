class BookSessionLocators {
    get searchconsultant() {
        return $('~search_consultant_input');
    }
    get consultant_card() {
        return $('~consultant_card');
    }
    get book_sessionbtn() {
        return $('~book_session_btn');
    }
    get all_timeslots() {
        return $$('~timeslot');
    }
    get timeslot_booksession() {
        return $('~timeslot_book_session');
    }
    get sessionconfirmation_paynow() {
        return $('~session_confirmation_pay_now');
    }
    get wallet_checkbox() {
        return $('~wallet_checkbox');
    }
    get tabby_btn() {
        return $('~tabby_payment_btn');
    }
    get continuecheckout_btn() {
        return $('~continue_checkout_btn');
    }
    get testemailtabby() {
        return $('~tabby_email_input');
    }
    get tabbylogincontinue() {
        return $('~tabby_login_continue');
    }
    get tabbyloginphone() {
        return $('~tabby_phone_input');
    }
    get tabbyotp() {
        return $('~tabby_otp_input');
    }
    get tabbytermscheckbox() {
        return $('~tabby_terms_checkbox');
    }
    get payment_completebtn() {
        return $('~payment_complete_btn');
    }
    get all_saved_cards() {
        return $$('~saved_card');
    }
    get savedcard_input_cvc() {
        return $('~saved_card_cvc');
    }
    get savedcard_confirm_button() {
        return $('~saved_card_confirm');
    }
    get Paybutton_hyperpay() {
        return $('~hyperpay_pay_button');
    }
    get explorepackage() {
        return $('~explore_package');
    }
    get packagebuynow() {
        return $('~package_buy_now');
    }
    get card_number() {
        return $('~card_number_input');
    }
    get expiry_date() {
        return $('~expiry_date_input');
    }
    get cvc() {
        return $('~cvc_input');
    }
    get tabbyotp() {
        // Simplified XPath that's less dependent on exact view hierarchy
        return $('//android.view.View[@resource-id="tabby-checkout"]//android.widget.EditText[contains(@text, "")]');
    }
    get tabbytermscheckbox() {
        return $('//android.view.View[@resource-id="tabby-checkout"]/android.view.View/android.view.View[4]/android.view.View/android.view.View/android.view.View[4]/android.widget.Image');
    }
}

module.exports = new BookSessionLocators();
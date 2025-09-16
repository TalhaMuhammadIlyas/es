class BookSessionLocators {
    get consultant_navbar() {
        return $('//android.view.View[@content-desc="Consultants"]/android.view.ViewGroup');
    }
    get searchconsultant() {
        return $('~consultant_list_input_search');
    }
    get consultant_card() {
        return $('//android.view.ViewGroup[@content-desc="consultant_list_consultant_card_823"]/android.view.ViewGroup');
    }
    get consultant_card_newuser() {
        return $('//android.view.ViewGroup[@content-desc="Recommended, Ahmed Consultant, Social Worker, 52 Reviews, # Next available at 12:00 PM, 391.00 SAR, 351.90 SAR"]/android.view.ViewGroup');
    }
    get consultant_AR() {
        return $('//android.view.ViewGroup[@content-desc="Recommended, Adil Rasheed, Psychiatrist, 9 Reviews, # Next available at 12:00 PM, 138.00 SAR, 124.20 SAR"]');
    }
    get book_sessionbtn() {
        return $('~consultant_profile_book_session');
    }
    get timeslot_booksession() {
        return $('~schedule_session_btn_book_session');
    }
    get all_timeslots() {
        return $$('//android.view.ViewGroup[contains(@content-desc, "am") or contains(@content-desc, "pm")]/android.view.ViewGroup');
    }
    get sessionconfirmation_paynow()   {
        return $('~session_confirmation_btn_pay_now');
    }
    get continuecheckout_btn() {
        return $('~checkout_button_buy_now');
    }
    get partnerwallet_checkbox() {
        return $('~Partner Wallet, 480.52 SAR');
    }
    get wallet_checkbox() {
        return $('~wallet_card');
    }
    get buynow_btn() {
        return $('~Buy Now');
    }
    get all_saved_cards() {
        return $$('//android.view.ViewGroup[contains(@content-desc, "saved_card_")]/android.view.ViewGroup');
    }
    get savedcard_input_cvc() {
        return $('~saved_card_input_cvc');
    }
    get savedcard_confirm_button() {
        return $('~saved_card_button_confirm');
    }
    get tabby_btn() {
        return $('~payment_method_tabby');
    }
    get payment_completebtn() {
        return $('~payment_complete_btn_done');
    }
    get card_number() {
        return $('~pay_by_card_input_card_number');
    }
    get cardholder_name() {
        return $('~pay_by_card_input_card_holder_name');
    }
    get expiry_date() {
        return $('~pay_by_card_input_expiry');
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
class BookSessionLocators {
    get consultant_navbar() {
        return $('//android.view.View[@content-desc="Consultants"]/android.view.ViewGroup');
    }
    get searchconsultant() {
        return $('~consultant_list_input_search');
    }
    get consultant_card_package() {
        return $('consultant_list_consultant_card_777');
    }
    booking_consultant_card(name: string) {
        return $(`//android.widget.TextView[@text='${name}']/ancestor::android.view.ViewGroup[contains(@resource-id,"consultant_list_consultant_card_")]`);
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
    session_time(time: string) {
        // Locate the text, then go up to the parent card container
        return $(`//android.widget.TextView[@text='${time}']/ancestor::android.view.ViewGroup[@resource-id='${time}']`);
    }
    get sessionconfirmation_paynow()   {
        return $('~session_confirmation_btn_pay_now');
    }
    get continuecheckout_btn() {
        return $('~checkout_button_buy_now');
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
    saved_card(name: string) {
        return $(`//android.widget.TextView[@text='${name}']/ancestor::android.view.ViewGroup[contains(@resource-id,"saved_card_")]`);
    }
    get savedcard_addnewbtn() {
        return $('~saved_cards_add_new_card_button')
    }
    get savecard_checkbox() {
        return $('~pay_by_card_save_info');
    }
    get card_paynow() {
        return $('~pay_by_card_btn_pay_now');
    }
    // use when the pay now is not visible
    get close_keyboard() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup');
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
    get payment_successmsg() {
        return $('//android.widget.TextView[@text="Your payment is complete! Your session has been successfully booked"]');
    }
    get package_Suceessmsg() {
        return $('//android.widget.TextView[@text="You’ve successfully purchased a package with Ahmed Ali"]');
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
        return $('~pay_by_card_input_cvc');
    }
    get explorepackage() {
        return $('~consultant_profile_explore_packages');
    }
    get packagebuynow() {
        return $('~offered_packages_buy_now_button');
    }
    get Paybutton_hyperpay() {
        return $('//android.widget.Button[@text="Pay"]');
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
class GiftWalletLocators {
    get bottom_nav_menu() {
        return $('~Menu');
    }
    get gift_wallet_menu() {
        return $('//android.view.ViewGroup[@content-desc="menu_btn_top_up_friends_wallet"]/android.view.ViewGroup');
    }
    get gift_wallet_email_switcher() {
        return $('~login_switcher_email_option');
    }
    get gift_wallet_input_email_next() {
        return $('~gift_friend_contact_details_button_next');
    }
    get gift_wallet_select_preset() {
        return $('~gift_wallet_preset_amount');
    }
    get gift_wallet_next_button() {
        return $('~gift_wallet_next_btn');
    }
    get gift_wallet_input_name() {
        return $('~gift_wallet_name_input');
    }
    get gift_wallet_input_message() {
        return $('~gift_wallet_message_input');
    }
    get gift_wallet_next2_button() {
        return $('~gift_wallet_next2_btn');
    }
    get add_new_card_button() {
        return $('~add_new_card_btn');
    }
}

module.exports = new GiftWalletLocators();
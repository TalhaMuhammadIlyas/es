import { $ } from "@wdio/globals";
console.log('Loaded gift_wallet-locators');
class GiftWalletLocators {
    get bottom_nav_menu() {
        return $('~Menu');
    }
    get gift_wallet_menu() {
        return $('//android.view.ViewGroup[@content-desc="menu_btn_top_up_friends_wallet"]/android.view.ViewGroup');
    }
    get gift_wallet_input_phone() {
        return $('~input_phone');
    }
    get gift_wallet_email_switcher() {
        return $('~login_switcher_email_option');
    }
    get gift_wallet_input_email_next() {
        return $('~gift_friend_contact_details_button_next');
    }
    get gift_wallet_select_preset() {
        return $('//android.view.ViewGroup[@content-desc="200"]/android.view.ViewGroup');
    }
    get gift_wallet_input_amount() {
        return $('~gift_amount_input');
    }
    get gift_wallet_next_button() {
        return $('~gift_friend_wallet_btn_next');
    }
    get gift_wallet_input_name() {
        return $('~gift_wallet_name_input');
    }
    get gift_wallet_input_message() {
        return $('~gift_wallet_message_input');
    }
    get gift_wallet_next2_button() {
        return $('~gift_wallet_next_button');
    }
    get add_new_card_button() {
        return $('//android.widget.TextView[@text="New card"]');
    }
}

module.exports = new GiftWalletLocators();
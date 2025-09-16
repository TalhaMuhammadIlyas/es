class SignupScreenLocators {
    get nextbutton() {
        return $('~app_tour_footer_btn_next');
    }
    get explorebutton() {
        return $('~app_tour_footer_btn_next');
    }
    get bottom_nav_menu() {
        return $('~Menu');
    }
    get guestmenu_loginbtn() {
        return $('~menu_btn_login');
    }
    get emailswitcher() {
        return $('~login_switcher_email_option');
    }
    get login_inputemail() {
        return $('~login_input_email');
    }
    get login_nextbtn() {
        return $('~login_btn_next');
    }
    get otp() {
        return $('~verification_code_field');
    }
    get otp_nextbtn() {
        return $('~verification_btn_next');
    }
    get input_name() {
        return $('~signup_details_input_name');
    }
    get signup_nextbtn() {
        return $('~signup_details_btn_next');
    }
    get gender_bottomsheet() {
        return $('~signup_details_bottom_sheet_gender');
    }
    get male_optionselect() {
        return $('//android.widget.TextView[@text="Male"]');
    }
    get password() {
        return $('~signup_details_input_password');
    }
    get confirm_password() {
        return $('~signup_details_input_confirm_password');
    }
    get welcome_message() {
        return $('//android.widget.TextView[@text="Glad to have you at Estenarh!"]');
    }
    get welcome_nextbtn() {
        return $('~welcome_btn_start');
    }
}

module.exports = new SignupScreenLocators();
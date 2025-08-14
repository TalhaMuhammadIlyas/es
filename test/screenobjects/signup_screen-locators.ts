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
        return $('~guest_menu_login_btn');
    }
    get emailswitcher() {
        return $('~login_switcher_email_option');
    }
    get login_inputemail() {
        return $('~login_input_email');
    }
    get login_nextbtn() {
        return $('~login_next_btn');
    }
    get otp() {
        return $('~otp_input');
    }
    get otp_nextbtn() {
        return $('~otp_next_btn');
    }
    get input_name() {
        return $('~signup_input_name');
    }
    get inputname_nextbtn() {
        return $('~signup_name_next_btn');
    }
    get gender_bottomsheet() {
        return $('~gender_bottomsheet');
    }
    get male_optionselect() {
        return $('~male_option');
    }
    get gender_nextbtn() {
        return $('~gender_next_btn');
    }
    get password() {
        return $('~password_input');
    }
    get confirm_password() {
        return $('~confirm_password_input');
    }
    get password_nextbtn() {
        return $('~password_next_btn');
    }
    get welcome_message() {
        return $('~welcome_message');
    }
    get welcome_nextbtn() {
        return $('~welcome_next_btn');
    }
}

module.exports = new SignupScreenLocators();
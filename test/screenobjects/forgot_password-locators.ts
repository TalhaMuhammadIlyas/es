class ForgotPasswordLocators {
    get bottom_nav_menu() {
        return $('~Menu');
    }
    get guestmenu_loginbtn() {
        return $('~menu_btn_login');
    }
    get emailswitcher() {
        return $('~login_switcher_email_option');
    }
    get login_input() {
        return $('~login_input_email');
    }
    get nextbtn() {
        return $('~login_btn_next');
    }
    get forgot_pwdlink() {
        return $('//android.widget.TextView[@text="Forgot Password?"]');
    }
    get otp() {
        return $('~verification_code_field');
    }
    get otp_nextbtn() {
        return $('~verification_btn_next');
    }
    get password() {
        return $('~reset_password_input_password');
    }
    get confirmpassword() {
        return $('~reset_password_input_confirm_password');
    }
    get reset_nextbtn() {
        return $('~reset_password_btn_next');
    }
}

module.exports = new ForgotPasswordLocators();
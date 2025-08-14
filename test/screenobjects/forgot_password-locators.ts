class ForgotPasswordLocators {
    get bottom_nav_menu() {
        return $('~Menu');
    }
    get guestmenu_loginbtn() {
        return $('~menu_btn_login');
    }
    get emailswitcher() {
        return $('//android.view.ViewGroup[@resource-id="login_switcher"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup');
    }
    get login_input() {
        return $('~login_input_email');
    }
    get login_nextbtn() {
        return $('~login_btn_next');
    }
    get forgot_pwdlink() {
        return $('//android.widget.TextView[@text="Forgot Password?"]');
    }
    get resetpassword_btn() {
        return $('~login_btn_next');
    }
    get otp() {
        return $('//android.widget.EditText');
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
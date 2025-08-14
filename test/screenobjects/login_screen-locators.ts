class LoginScreenLocators {
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
        return $('//android.view.ViewGroup[@resource-id="login_switcher"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup');
    }
    get login_input() {
        return $('~login_input_email');
    }
    get login_nextbtn() {
        return $('~login_btn_next');
    }
    get password_input() {
        return $('~password_input');
    }
    get unhide_eyebtn() {
        return $('//android.widget.TextView[@text=""]');
    }
    get password_nextbtn() {
        return $('~login_btn_next');
    }
    get Notnow_notifications() {
        return $('~Not Now');
    }
}

module.exports = new LoginScreenLocators();
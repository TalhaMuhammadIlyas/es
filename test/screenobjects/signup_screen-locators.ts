import { $ } from "@wdio/globals";
console.log('Loaded book_session-locators');
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
        return $('//android.view.ViewGroup[@resource-id="login_switcher"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup');
    }
    get login_inputemail() {
        return $('~login_input_email');
    }
    get login_nextbtn() {
        return $('~login_btn_next');
    }
    get otp() {
        return $('//android.widget.EditText');
    }
    get otp_nextbtn() {
        return $('~verification_btn_next');
    }
    get input_name() {
        return $('~signup_details_input_name');
    }
    get inputname_nextbtn() {
        return $('~signup_details_btn_next');
    }
    get gender_bottomsheet() {
        return $('~signup_details_bottom_sheet_gender');
    }
    get male_optionselect() {
        return $('(//android.view.ViewGroup[@content-desc="bottom-sheet-option-[object Object]"])[1]');
    }
    get gender_nextbtn() {
        return $('~signup_details_btn_next');
    }
    get date_picker() {
        return $('~signup_details_date_picker_date_of_birth');
    }
    get month_datepick() {
        return $('//android.widget.NumberPicker[1]');
    }
    get day_datepick() {
        return $('//android.widget.NumberPicker[2]');
    }
    get year_datepick() {
        return $('//android.widget.NumberPicker[3]');
    }
    get password() {
        return $('~signup_details_input_password');
    }
    get confirm_password() {
        return $('~signup_details_input_confirm_password');
    }
    get password_nextbtn() {
        return $('~signup_details_btn_next');
    }
    get welcome_message() {
        return $('//android.widget.TextView[@text="Glad to have you at Estenarh!"]');
    }
    get welcome_nextbtn() {
        return $('~welcome_btn_start');
    }
}

module.exports = new SignupScreenLocators();
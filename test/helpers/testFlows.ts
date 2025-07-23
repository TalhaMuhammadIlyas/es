import { browser } from '@wdio/globals';
const login_screenLocators = require('../screenobjects/login_screen-locators');
const book_sessionLocators = require('../screenobjects/book_session-locators');
const signup_screenLocators = require('../screenobjects/signup_screen-locators');
const forgot_passwordLocators = require('../screenobjects/forgot_password-locators');

export async function completeLoginFlow(email: string, password: string) {
    // Navigate through initial screens
    await login_screenLocators.nextbutton.click();
    await login_screenLocators.nextbutton.click();
    await login_screenLocators.nextbutton.click();
    await login_screenLocators.nextbutton.click();
    await login_screenLocators.nextbutton.click();
    await login_screenLocators.explorebutton.click();
    await login_screenLocators.bottom_nav_menu.click();
    await login_screenLocators.guestmenu_loginbtn.click();
    await login_screenLocators.emailswitcher.click();
    
    // Enter login credentials
    await login_screenLocators.login_input.setValue(email);
    await login_screenLocators.login_nextbtn.click();
    await login_screenLocators.password_input.setValue(password);
    await login_screenLocators.unhide_eyebtn.click();
    await login_screenLocators.password_nextbtn.click();
    
    // Handle notifications
    await browser.pause(1000);
    await login_screenLocators.Notnow_notifications.click();
} 

export async function ForgotPassword(email: string, otp: string, password:string, confirmpassword:string) {
    await browser.pause(5000);
    await forgot_passwordLocators.bottom_nav_menu.click();
    await forgot_passwordLocators.guestmenu_loginbtn.click();
    await forgot_passwordLocators.emailswitcher.click();
    await forgot_passwordLocators.login_input.setValue(email);
    await forgot_passwordLocators.login_nextbtn.click();
    await forgot_passwordLocators.forgot_pwdlink.click();
    await browser.pause(2000);
    await forgot_passwordLocators.resetpassword_btn.click();
    await browser.pause(3000);
    await forgot_passwordLocators.otp.setValue(otp);
    await forgot_passwordLocators.otp_nextbtn.click();
    await forgot_passwordLocators.password.setValue(password);
    await forgot_passwordLocators.confirmpassword.setValue(confirmpassword);
    await forgot_passwordLocators.reset_nextbtn.click();
} 

export async function SignupFlow(otp:string, password:string, confirmpassword:string) {
        await browser.pause(5000);
        await signup_screenLocators.nextbutton.click();
        await browser.pause(500);
        await signup_screenLocators.nextbutton.click();
        await browser.pause(500);
        await signup_screenLocators.nextbutton.click();
        await browser.pause(500);
        await signup_screenLocators.nextbutton.click();
        await browser.pause(500);
        await signup_screenLocators.nextbutton.click();
        await browser.pause(500);
        await signup_screenLocators.explorebutton.click();
        await signup_screenLocators.bottom_nav_menu.click();
        await signup_screenLocators.guestmenu_loginbtn.click();
        await signup_screenLocators.emailswitcher.click();

        function generateRandomEmail() {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let username = "";
            for (let i = 0; i < 8; i++) {
                username += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return username + "@yopmail.com";
        }

        function generateRandomName() {
            const firstNames = ["Alice", "Bob", "Charlie", "David", "Emma", "Emily", "Olivia", "Noah", "William", "James"];
            const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"];
            const firstNameIndex = Math.floor(Math.random() * firstNames.length);
            const lastNameIndex = Math.floor(Math.random() * lastNames.length);
            return firstNames[firstNameIndex] + " " + lastNames[lastNameIndex];
        }

        await signup_screenLocators.login_inputemail.setValue(generateRandomEmail());
        await signup_screenLocators.login_nextbtn.click();
        await browser.pause(3000);
        await signup_screenLocators.otp.setValue(otp);
        await signup_screenLocators.otp_nextbtn.click();
        await signup_screenLocators.input_name.setValue(generateRandomName());
        await signup_screenLocators.inputname_nextbtn.click();
        await signup_screenLocators.gender_bottomsheet.click();
        await signup_screenLocators.male_optionselect.click();
        await signup_screenLocators.gender_nextbtn.click();
        await browser.pause(9000);
        // Uncomment and adjust if needed:
        // await $('//android.view.ViewGroup[@content-desc="signup_details_date_picker_date_of_birth"]').click();
        // await $('android=new UiScrollable(new UiSelector().scrollable(true).instance(2)).scrollIntoView(new UiSelector().text("2000"))');
        // await $('//android.widget.Button[@resource-id="android:id/button1"]').click();
        // await $('//android.widget.TextView[@text="Next"]').click();
        await signup_screenLocators.password.setValue(password);
        await signup_screenLocators.confirm_password.setValue(confirmpassword);
        await signup_screenLocators.password_nextbtn.click();
        await expect(signup_screenLocators.welcome_message).toBeDisplayed();
        await expect(signup_screenLocators.welcome_message).toHaveText('Glad to have you at Estenarh!');
        await signup_screenLocators.welcome_nextbtn.click();
        await login_screenLocators.Notnow_notifications.click();
}

export async function BookSessionTabby(consultant:string, email:string, phone:string, otp:string) {
        await browser.pause(3000); // Add a wait here before interacting with elements
        await book_sessionLocators.searchconsultant.setValue(consultant);
        await book_sessionLocators.consultant_card.click();
        await book_sessionLocators.book_sessionbtn.click();
        const timeslots = await book_sessionLocators.all_timeslots;
            if (timeslots.length > 0) {
                await timeslots[0].click(); // Click the first available slot
            } else {
                throw new Error('No available time slots found!');
            }
        await book_sessionLocators.timeslot_booksession.click();
        await book_sessionLocators.sessionconfirmation_paynow.click();
        await book_sessionLocators.wallet_checkbox.click();
        // Scroll down one page
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()');
        await book_sessionLocators.tabby_btn.click();
        await book_sessionLocators.continuecheckout_btn.click();
        await browser.pause(2000);
        await book_sessionLocators.testemailtabby.clearValue();
        await book_sessionLocators.testemailtabby.setValue(email);
        // await book_sessionLocators.closekeyboard.click();
        await book_sessionLocators.tabbylogincontinue.click();
        await browser.pause(1000);
        await book_sessionLocators.tabbyloginphone.clearValue();
        await book_sessionLocators.tabbyloginphone.setValue(phone);
        // await book_sessionLocators.closekeyboard.click();
        await book_sessionLocators.tabbylogincontinue.click();
        await book_sessionLocators.tabbyotp.setValue(otp);
        await browser.hideKeyboard();
        await book_sessionLocators.tabbytermscheckbox.click();
        await book_sessionLocators.tabbylogincontinue.click();
        await book_sessionLocators.payment_completebtn.click();
}
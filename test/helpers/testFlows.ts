import { browser } from '@wdio/globals';
import { timeouts } from '../constants/timeouts';
const login_screenLocators = require('../screenobjects/login_screen-locators');
const book_sessionLocators = require('../screenobjects/book_session-locators');
const signup_screenLocators = require('../screenobjects/signup_screen-locators');
const forgot_passwordLocators = require('../screenobjects/forgot_password-locators');
const gift_walletLocators = require('../screenobjects/gift_wallet-locators');
const resources_locator = require('../screenobjects/resources-locator');

// Helper function for scrolling Android number picker
async function scrollNumberPicker(targetValue: string, currentValue: string) {
    const numberPicker = await $('//android.widget.EditText[@resource-id="android:id/numberpicker_input" and @text="' + currentValue + '"]');
    
    // Calculate how many steps to scroll
    const current = parseInt(currentValue);
    const target = parseInt(targetValue);
    const steps = Math.abs(current - target);
    
    // Use Android's native scroll command with optimized speed
    for (let i = 0; i < steps; i++) {
        await browser.execute('mobile: scrollGesture', {
            left: 600, top: 1100, width: 200, height: 200,
            direction: current > target ? 'up' : 'down',
            percent: 0.9  // Increased from 0.75 to 0.9 for faster scrolling
        });
        
        // Reduced wait time between scrolls
        await browser.pause(200);  // Reduced from 500ms to 200ms
    }
}

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
    await browser.pause(timeouts.CLICK_WAIT);
    await login_screenLocators.Notnow_notifications.click();
}

export async function ForgotPassword(email: string, otp: string, password: string, confirmpassword: string) {
    await browser.pause(timeouts.NAVIGATION);
    await forgot_passwordLocators.bottom_nav_menu.click();
    await forgot_passwordLocators.guestmenu_loginbtn.click();
    await forgot_passwordLocators.emailswitcher.click();
    await forgot_passwordLocators.login_input.setValue(email);
    await forgot_passwordLocators.nextbtn.click();
    await forgot_passwordLocators.forgot_pwdlink.click();
    await browser.pause(timeouts.ELEMENT_WAIT);
    await forgot_passwordLocators.resetpassword_btn.click();
    await browser.pause(timeouts.SHORT_WAIT);
    await forgot_passwordLocators.otp.setValue(otp);
    await forgot_passwordLocators.otp_nextbtn.click();
    await forgot_passwordLocators.password.setValue(password);
    await forgot_passwordLocators.confirmpassword.setValue(confirmpassword);
    await forgot_passwordLocators.reset_nextbtn.click();
}

export async function SignupFlow(otp: string, password: string, confirmpassword: string) {
    await browser.pause(timeouts.LONG_WAIT);
    await signup_screenLocators.nextbutton.click();
    await browser.pause(timeouts.ANIMATION);
    await signup_screenLocators.nextbutton.click();
    await browser.pause(timeouts.ANIMATION);
    await signup_screenLocators.nextbutton.click();
    await browser.pause(timeouts.ANIMATION);
    await signup_screenLocators.nextbutton.click();
    await browser.pause(timeouts.ANIMATION);
    await signup_screenLocators.nextbutton.click();
    await browser.pause(timeouts.ANIMATION);
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
    await browser.pause(timeouts.SHORT_WAIT);
    await signup_screenLocators.otp.setValue(otp);
    await signup_screenLocators.otp_nextbtn.click();
    await signup_screenLocators.input_name.setValue(generateRandomName());
    await signup_screenLocators.signup_nextbtn.click();
    await signup_screenLocators.gender_bottomsheet.click();
    await signup_screenLocators.male_optionselect.click();
    await signup_screenLocators.gender_nextbtn.click();
    await browser.pause(timeouts.MEDIUM_WAIT);
    // Uncomment and adjust if needed:
    // await $('//android.view.ViewGroup[@content-desc="signup_details_date_picker_date_of_birth"]').click();
    // await $('android=new UiScrollable(new UiSelector().scrollable(true).instance(2)).scrollIntoView(new UiSelector().text("2000"))');
    // await $('//android.widget.Button[@resource-id="android:id/button1"]').click();
    // await $('//android.widget.TextView[@text="Next"]').click()
    await signup_screenLocators.signup_nextbtn.click();
    await browser.pause(2000);
    
    // Handle date picker for date of birth
    await $('//android.view.ViewGroup[@content-desc="signup_details_date_picker_date_of_birth"]').click();
    await browser.pause(1000);
    
    await scrollNumberPicker('2015', '2019'); 
    
    await $('//android.widget.Button[@resource-id="android:id/button1"]').click();
    await signup_screenLocators.signup_nextbtn.click();
    await signup_screenLocators.password.setValue(password);
    await signup_screenLocators.confirm_password.setValue(confirmpassword);
    await signup_screenLocators.signup_nextbtn.click();
    await expect(signup_screenLocators.welcome_message).toBeDisplayed();
    await expect(signup_screenLocators.welcome_message).toHaveText('Glad to have you at Estenarh!');
    await signup_screenLocators.welcome_nextbtn.click();
    await login_screenLocators.Notnow_notifications.click();
}

export async function BookSessionTabby(consultant: string, email: string, phone: string, otp: string) {
    await browser.pause(timeouts.SHORT_WAIT); // Add a wait here before interacting with elements
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
    try {
        const isVisible = await book_sessionLocators.wallet_checkbox.isDisplayed();
        if (isVisible) {
            await book_sessionLocators.wallet_checkbox.click();
        }
    } catch (error) {
        console.log('Wallet checkbox not found or not visible, continuing...');
    }
    // Scroll down one page
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()');
    await book_sessionLocators.tabby_btn.click();
    await book_sessionLocators.continuecheckout_btn.click();
    await browser.pause(timeouts.PAYMENT_CONFIRMATION);
    try {
        const loginEmailVisible = await book_sessionLocators.testemailtabby.isDisplayed();
        if (loginEmailVisible) {
            await book_sessionLocators.testemailtabby.clearValue();
            await book_sessionLocators.testemailtabby.setValue(email);
            await book_sessionLocators.tabbylogincontinue.click();
            await browser.pause(timeouts.PAYMENT_CONFIRMATION);
            await book_sessionLocators.tabbyloginphone.clearValue();
            await book_sessionLocators.tabbyloginphone.setValue(phone);
            await book_sessionLocators.tabbylogincontinue.click();
        }
    } catch (error) {
        console.log('Email login not visible, continuing...');
    }
    await browser.pause(timeouts.PAYMENT_CONFIRMATION);
    try {
        const loginEmailVisible = await book_sessionLocators.testemailtabby.isDisplayed();
        if (loginEmailVisible) {
            await book_sessionLocators.testemailtabby.clearValue();
            await book_sessionLocators.testemailtabby.setValue(email);
            await book_sessionLocators.tabbylogincontinue.click();
        }
    } catch (error) {
        console.log('Email login not visible, continuing...');
    }
    await book_sessionLocators.tabbyotp.click();
    await book_sessionLocators.tabbyotp.setValue(otp);
    await browser.hideKeyboard();
    await book_sessionLocators.tabbytermscheckbox.click();
    await book_sessionLocators.tabbylogincontinue.click();
    await browser.pause(timeouts.PAYMENT_PROCESSING);
    await expect(book_sessionLocators.payment_successmsg).toBeDisplayed();
    await expect(book_sessionLocators.payment_successmsg).toHaveText('Your payment is complete! Your session has been successfully booked');
    await book_sessionLocators.payment_completebtn.click();
}

export async function SavedCardsbookingflow(consultant: string, cvc: string) {
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
    await book_sessionLocators.continuecheckout_btn.click();
    await browser.pause(timeouts.NAVIGATION);
    const savedCards = await book_sessionLocators.all_saved_cards;
    if (savedCards.length > 0) {
        await savedCards[0].click(); // Click the first saved card
    } else {
        throw new Error('No saved cards found!');
    }
    await book_sessionLocators.savedcard_input_cvc.setValue(cvc);
    await book_sessionLocators.savedcard_confirm_button.click();
    // await book_sessionLocators.card_number.setValue(4111111111111111);
    // await browser.pause(2000);
    // await book_sessionLocators.expiry_date.setValue(1235);  
    // await book_sessionLocators.cvc.setValue(258);
    // await book_sessionLocators.cardholder_name.setValue('Test');
    // await book_sessionLocators.hide_keyboard.click();
    // await book_sessionLocators.savecard_checkbox.click();
    // await browser.pause(3000);
    // await book_sessionLocators.card_paynow.click();
    await browser.pause(timeouts.PAYMENT_PROCESSING);
    await book_sessionLocators.Paybutton_hyperpay.click();
    await browser.pause(timeouts.PAYMENT_CONFIRMATION);
    await expect(book_sessionLocators.payment_successmsg).toBeDisplayed();
    await expect(book_sessionLocators.payment_successmsg).toHaveText('Your payment is complete! Your session has been successfully booked');
    await book_sessionLocators.payment_completebtn.click();
}

export async function Packagebuy(consultant: string, cvc: string) {
    await book_sessionLocators.searchconsultant.setValue(consultant);
    await book_sessionLocators.consultant_card.click();
    await book_sessionLocators.explorepackage.click();
    await book_sessionLocators.packagebuynow.click();
    await book_sessionLocators.sessionconfirmation_paynow.click();
    await book_sessionLocators.wallet_checkbox.click();
    await book_sessionLocators.continuecheckout_btn.click();
    await browser.pause(timeouts.NAVIGATION);
    const savedCards = await book_sessionLocators.all_saved_cards;
    if (savedCards.length > 0) {
        await savedCards[0].click(); // Click the first saved card
    }
    else {
        throw new Error('No saved cards found!');
    }
    await book_sessionLocators.savedcard_input_cvc.setValue(cvc);
    await book_sessionLocators.savedcard_confirm_button.click();
    await browser.pause(timeouts.PAYMENT_PROCESSING);
    await book_sessionLocators.Paybutton_hyperpay.click();
    await browser.pause(timeouts.PAYMENT_CONFIRMATION);
    await book_sessionLocators.payment_completebtn.click();

}

type GiftWalletParams = { email: string, name: string, message: string, cvc: string, cardNumber: string, expiryDate: string, cardholderName: string }

export async function GiftWalletFlow({ email, name, message, cvc, cardNumber, expiryDate, cardholderName }: GiftWalletParams) {
    await browser.pause(timeouts.NAVIGATION);
    await gift_walletLocators.bottom_nav_menu.click();
    await browser.pause(timeouts.ELEMENT_WAIT);
    // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()');
    await gift_walletLocators.gift_wallet_menu.click();
    await gift_walletLocators.gift_wallet_email_switcher.click();
    await login_screenLocators.login_input.click();
    await login_screenLocators.login_input.setValue(email);
    await gift_walletLocators.gift_wallet_input_email_next.click();
    await browser.pause(timeouts.ELEMENT_WAIT);
    await gift_walletLocators.gift_wallet_select_preset.click();
    await gift_walletLocators.gift_wallet_next_button.click();
    await gift_walletLocators.gift_wallet_input_name.setValue(name);
    await gift_walletLocators.gift_wallet_input_message.setValue(message);
    await gift_walletLocators.gift_wallet_next2_button.click();
    await gift_walletLocators.gift_wallet_next2_button.click();
    await gift_walletLocators.gift_wallet_next_button.click();
    await browser.pause(timeouts.ELEMENT_WAIT);
    await gift_walletLocators.add_new_card_button.click();
    await book_sessionLocators.card_number.setValue(cardNumber);
    await book_sessionLocators.expiry_date.setValue(expiryDate);
    await book_sessionLocators.cvc.setValue(cvc);
    await book_sessionLocators.cardholder_name.setValue(cardholderName);
    await book_sessionLocators.savecard_checkbox.click();
    await book_sessionLocators.card_paynow.click();
    await browser.pause(timeouts.PAYMENT_PROCESSING);
    await book_sessionLocators.Paybutton_hyperpay.click();
    await browser.pause(timeouts.PAYMENT_CONFIRMATION);
    await book_sessionLocators.payment_completebtn.click();
    await expect(gift_walletLocators.bottom_nav_menu).toBeDisplayed();
}

export async function AnxietyQuestionnaire(){
    await resources_locator.resourcesnavbtn.click();
    await resources_locator.anxiety_questionnaire.click();
    await resources_locator.takequestionnairebtn.click();
    await resources_locator.questionnaire_option0.click();
    await resources_locator.questionnaire_btn_next.click();
    await resources_locator.questionnaire_option2.click();
    await resources_locator.questionnaire_btn_next.click();
    await resources_locator.questionnaire_option1.click();
    await resources_locator.questionnaire_btn_next.click();
    await resources_locator.questionnaire_option3.click();
    await resources_locator.questionnaire_btn_next.click();
    await resources_locator.questionnaire_option1.click();
    await resources_locator.questionnaire_btn_next.click();
    await resources_locator.questionnaire_option2.click();
    await resources_locator.questionnaire_btn_next.click();
    await resources_locator.questionnaire_option3.click();
    await resources_locator.questionnaire_btn_next.click();
    await resources_locator.questionnaire_btn_continue.click();
}
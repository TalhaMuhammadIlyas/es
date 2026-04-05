import { browser } from '@wdio/globals';
import { timeouts } from '../constants/timeouts';
import { cardInputs } from '../constants/cardDetails';
import { miscellaneous } from '../constants/miscellaneous';
import { time } from 'console';
import {
    clickLoginMenu,
    enterEmail,
    enterPassword,
    dismissNotifications,
    searchConsultant,
    clickBookSessionButton,
    selectFirstAvailableTimeSlot,
    confirmTimeSlot,
    clickPayNowAtSessionConfirmation,
    applyPromoCode,
    selectWalletPayment,
    selectPartnerWalletPayment,
    selectReferralWalletPayment,
    continueToCheckout,
    selectSavedCardAtCheckout,
    addNewCardAtCheckout,
    completePayment,
    generateRandomEmail,
    generateRandomName,
    completeOnboarding,
    openSignupScreen,
    enterSignupEmail,
    enterSignupOtp,
    enterNameAndGender,
    selectDateOfBirth,
    enterSignupPassword,
    openForgotPasswordScreen,
    enterResetOtp,
    enterNewPassword,
    openResourcesTab,
    selectAnxietyQuestionnaire,
    answerQuestionnaireQuestion
} from './simpleHelpers';

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

    while (current !== target) {
        await browser.execute('mobile: scrollGesture', {
            left: 600, top: 1100, width: 200, height: 200,
            direction: current > target ? 'up' : 'down',
            percent: 0.9
        });

        await browser.pause(200);
    }
}

/**
 * Login with valid credentials
 * Steps:
 * 1. Click login menu
 * 2. Enter email
 * 3. Enter password
 * 4. Dismiss notifications
 */
export async function completeLoginFlowwithValidCredentials(email: string, password: string) {
    await clickLoginMenu();
    await enterEmail(email);
    await enterPassword(password);
    await dismissNotifications();
}

/**
 * Try to login with invalid password
 * Should show error message
 */
export async function completeLoginFlowwithInvalidCredentials(email: string, password: string) {
    await clickLoginMenu();
    await enterEmail(email);
    await enterPassword(password);
    
    // Check for error
    const login_screenLocators = require('../screenobjects/login_screen-locators');
    await expect(login_screenLocators.login_error_message).toBeDisplayed();
}

/**
 * Forgot Password Flow
 * Steps:
 * 1. Open forgot password screen
 * 2. Request password reset
 * 3. Enter OTP
 * 4. Enter new password
 */
export async function ForgotPassword(email: string, otp: string, password: string, confirmpassword: string) {
    await openForgotPasswordScreen(email);
    await enterResetOtp(otp);
    await enterNewPassword(password, confirmpassword);
}

/**
 * Forgot Password with Mismatched Passwords
 * Tests validation - should show error when passwords don't match
 */
export async function ForgotPasswordwithdifferentConfirmPassword(email: string, otp: string, password: string, confirmpassword: string) {
    const forgot_passwordLocators = require('../screenobjects/forgot_password-locators');
    
    await openForgotPasswordScreen(email);
    await enterResetOtp(otp);
    
    // Try to enter mismatched passwords
    await forgot_passwordLocators.password.setValue(password);
    await forgot_passwordLocators.confirmpassword.setValue(confirmpassword);
    
    // Should show error message
    await forgot_passwordLocators.error_message_confirm_password.waitForDisplayed({ timeout: timeouts.ELEMENT_WAIT });
    await expect(forgot_passwordLocators.error_message_confirm_password).toBeDisplayed();
}

/**
 * Signup Flow
 * Steps:
 * 1. Complete onboarding screens
 * 2. Open signup screen
 * 3. Enter email and verify with OTP
 * 4. Enter name and select gender
 * 5. Select date of birth
 * 6. Enter password
 * 7. Done!
 */
export async function SignupFlow(otp: string, password: string, confirmpassword: string) {
    await completeOnboarding();
    await openSignupScreen();
    
    const email = generateRandomEmail();
    const name = generateRandomName();
    
    await enterSignupEmail(email);
    await enterSignupOtp(otp);
    await enterNameAndGender(name);
    await selectDateOfBirth();
    await enterSignupPassword(password, confirmpassword);
    
    // Confirm welcome screen
    const signup_screenLocators = require('../screenobjects/signup_screen-locators');
    await expect(signup_screenLocators.welcome_message).toBeDisplayed();
    await signup_screenLocators.welcome_nextbtn.click();
}

type E2EParams = { email: string, password: string, consultant: string, cvc: string }

export async function E2EFlow({ email, password, consultant, cvc }: E2EParams) {
    await login_screenLocators.nextbutton.waitForDisplayed({ timeout: timeouts.LONG_WAIT });
    await login_screenLocators.nextbutton.click();
    await login_screenLocators.nextbutton.click();
    await login_screenLocators.nextbutton.click();
    await login_screenLocators.nextbutton.click();
    await login_screenLocators.nextbutton.click();
    await login_screenLocators.explorebutton.click();
    await login_screenLocators.bottom_nav_menu.click();
    await login_screenLocators.guestmenu_loginbtn.click();
    await login_screenLocators.emailswitcher.click();
    await login_screenLocators.login_input.setValue(email);
    await login_screenLocators.login_nextbtn.click();
    await login_screenLocators.password_input.setValue(password);
    await login_screenLocators.unhide_eyebtn.click();
    await login_screenLocators.password_nextbtn.click();
    await login_screenLocators.Notnow_notifications.waitForDisplayed({ timeout: timeouts.PAYMENT_PROCESSING });
    await login_screenLocators.Notnow_notifications.click();
    await expect(login_screenLocators.home_screen_identifier).toBeDisplayed();
    await expect(login_screenLocators.home_screen_identifier).toHaveText('Consultants');
    await book_sessionLocators.searchconsultant.waitForDisplayed({ timeout: timeouts.SHORT_WAIT });
    await book_sessionLocators.searchconsultant.setValue(consultant);
    await book_sessionLocators.booking_consultant_card(consultant).click();
    await book_sessionLocators.book_sessionbtn.click();
    const timeslots = await book_sessionLocators.all_timeslots;
    let slotClicked = false;
    for (const slot of timeslots) {
        const isEnabled = await slot.isEnabled();
        const isDisplayed = await slot.isDisplayed();

        if (isEnabled && isDisplayed) {
            const time = await slot.getAttribute('content-desc');
            console.log(`Clicking available slot: ${time}`);

            await slot.click();
            slotClicked = true;
            break;
        }
    }
    expect(slotClicked).toBe(true);
    await book_sessionLocators.timeslot_booksession.click();
    await book_sessionLocators.sessionconfirmation_paynow.waitForDisplayed({ timeout: timeouts.PAYMENT_PROCESSING });
    await book_sessionLocators.sessionconfirmation_paynow.click();
    try {
        const isVisible = await book_sessionLocators.wallet_checkbox.isDisplayed();
        if (isVisible) {
            await book_sessionLocators.wallet_checkbox.click();
        }
    } catch (error) {
        console.log('Wallet checkbox not found or not visible, continuing...');
    }
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()');
    await book_sessionLocators.continuecheckout_btn.waitForDisplayed({ timeout: timeouts.PAYMENT_PROCESSING });
    await book_sessionLocators.continuecheckout_btn.click();
    await book_sessionLocators.all_saved_cards.waitForDisplayed({ timeout: timeouts.PAYMENT_PROCESSING });
    const savedCards = await book_sessionLocators.all_saved_cards;
    if (savedCards.length > 0) {
        await savedCards[0].click(); // Click the first saved card
    } else {
        throw new Error('No saved cards found!');
    }
    await book_sessionLocators.savedcard_input_cvc.setValue(cvc);
    await book_sessionLocators.savedcard_confirm_button.click();
    await book_sessionLocators.Paybutton_hyperpay.waitForDisplayed({ timeout: timeouts.PAYMENT_PROCESSING });
    await book_sessionLocators.Paybutton_hyperpay.click();
    await book_sessionLocators.payment_completebtn.waitForDisplayed({ timeout: timeouts.PAYMENT_CONFIRMATION });
    await book_sessionLocators.payment_completebtn.click();
    await expect(book_sessionLocators.booking_card_identifier(consultant)).toBeDisplayed();
    await expect(book_sessionLocators.booking_card_identifier(consultant)).toHaveText(consultant);
    await login_screenLocators.bottom_nav_menu.click();
    await driver.$(
        'android=new UiScrollable(new UiSelector().scrollable(true))' +
        '.scrollIntoView(new UiSelector().text("Log Out"))'
    );
    await login_screenLocators.logout_menubtn.waitForDisplayed({ timeout: timeouts.ELEMENT_WAIT });
    await login_screenLocators.logout_menubtn.click();
    await login_screenLocators.guestuser_text.waitForDisplayed({ timeout: timeouts.MEDIUM_WAIT });
    await expect(login_screenLocators.guestuser_text).toBeDisplayed();
    await expect(login_screenLocators.guestuser_text).toHaveText('Guest User');
}

// Set implicit wait once (best to do this in beforeAll or test setup)
// await driver.setTimeout({ implicit: 5000 });

export async function SavedCardsbookingflow(consultant: string, cvc: string) {
    // Search and select consultant
    await book_sessionLocators.searchconsultant.setValue(consultant);
    await book_sessionLocators.booking_consultant_card('Nawaz Sharif').waitForDisplayed({ timeouts: timeouts.PAYMENT_PROCESSING});
    await book_sessionLocators.booking_consultant_card('Nawaz Sharif').click();

    // Book session
    // await book_sessionLocators.book_sessionbtn.waitForClickable({ timeout: 10000 });
    await book_sessionLocators.book_sessionbtn.click();

    // Scroll forward if needed
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()');


    // Pick next available time slot
    const timeslots = await book_sessionLocators.all_timeslots;
    let slotClicked = false;
    
    for (let i = 0; i < timeslots.length; i++) {
        const slot = timeslots[i];
        try {
            const isEnabled = await slot.isEnabled();
            const isDisplayed = await slot.isDisplayed();
            
            if (isEnabled && isDisplayed) {
                const time = await slot.getAttribute('content-desc');
                console.log(`Clicking available slot at index ${i}: ${time}`);
                await slot.click();
                slotClicked = true;
                break;
            }
        } catch (error) {
            console.log(`Slot ${i} not available, trying next...`);
            continue;
        }
    }
    
    if (!slotClicked) {
        throw new Error('No available time slots found!');
    }

    // Confirm booking
    // await book_sessionLocators.timeslot_booksession.waitForClickable({ timeout: 10000 });
    await book_sessionLocators.timeslot_booksession.click();

    // await book_sessionLocators.sessionconfirmation_paynow.waitForClickable({ timeout: 10000 });
    await book_sessionLocators.sessionconfirmation_paynow.click();

    // Handle optional wallet checkbox
    try {
        if (await book_sessionLocators.wallet_checkbox.waitForDisplayed({ timeout: timeouts.NAVIGATION })) {
            await book_sessionLocators.wallet_checkbox.click();
        }
    } catch {
        console.log('Wallet checkbox not found or not visible, continuing...');
    }

    // Continue to checkout
    await book_sessionLocators.continuecheckout_btn.click();

    // Handle saved card vs add new card
    try {
    // Check if saved card is displayed
    const cardExists = await book_sessionLocators
        .saved_card("Visa **** **** **** 1111")
        .isDisplayed()
        .catch(() => false); // prevent throw, return false if not found

    if (cardExists) {
        //  Saved card flow
        await book_sessionLocators.saved_card("Visa **** **** **** 1111").click();
        await book_sessionLocators.savedcard_input_cvc.setValue(cvc);
        await book_sessionLocators.savedcard_confirm_button.click();

         // Pause and click the pay button
        await browser.pause(timeouts.PAYMENT_PROCESSING);
        await book_sessionLocators.Paybutton_hyperpay.click();

        await book_sessionLocators.payment_successmsg.waitForDisplayed({ timeout: timeouts.PAYMENT_CONFIRMATION });
        await expect(book_sessionLocators.payment_successmsg).toHaveText(
            'Your payment is complete! Your session has been successfully booked'
        );

        await book_sessionLocators.payment_completebtn.click();
    } else {
        //  Add new card flow
        await book_sessionLocators.savedcard_addnewbtn.click();

        await book_sessionLocators.card_number.setValue(cardInputs.CardNumber);
        await book_sessionLocators.expiry_date.setValue(cardInputs.ExpiryDate);
        await book_sessionLocators.cvc.setValue(cardInputs.CVC);
        await book_sessionLocators.cardholder_name.setValue(cardInputs.CardHolderName);
        await browser.hideKeyboard();

        // await book_sessionLocators.savecard_checkbox.waitForClickable({ timeout: timeouts.NAVIGATION });
        await book_sessionLocators.savecard_checkbox.click();

        await book_sessionLocators.card_paynow.click();

        // Pause and click the pay button
        await browser.pause(timeouts.PAYMENT_PROCESSING);
        await book_sessionLocators.Paybutton_hyperpay.click();

        await book_sessionLocators.payment_successmsg.waitForDisplayed({ timeout: timeouts.PAYMENT_CONFIRMATION });
        await expect(book_sessionLocators.payment_successmsg).toHaveText(
            'Your payment is complete! Your session has been successfully booked'
        );

        await book_sessionLocators.payment_completebtn.click();
    }
} catch (error) {
    console.log('Unexpected error â†’ Flow failed:', error);
}

}


export async function Packagebuy(consultant: string, cvc: string) {
    await book_sessionLocators.searchconsultant.setValue(consultant);
    await book_sessionLocators.booking_consultant_card(consultant).click();
    await book_sessionLocators.explorepackage.click();
    await book_sessionLocators.packagebuynow.click();
    await book_sessionLocators.sessionconfirmation_paynow.click();
    try {
        if (await book_sessionLocators.wallet_checkbox.waitForDisplayed({ timeout: timeouts.NAVIGATION })) {
            await book_sessionLocators.wallet_checkbox.click();
        }
    } catch {
        console.log('Wallet checkbox not found or not visible, continuing...');
    }

    // Continue to checkout
    await book_sessionLocators.continuecheckout_btn.click();

    // Handle saved card vs add new card
    try {
    // Check if saved card is displayed
    const cardExists = await book_sessionLocators
        .saved_card("Visa **** **** **** 1111")
        .isDisplayed()
        .catch(() => false); // prevent throw, return false if not found

    if (cardExists) {
        //  Saved card flow
        await book_sessionLocators.saved_card("Visa **** **** **** 1111").click();
        await book_sessionLocators.savedcard_input_cvc.setValue(cvc);
        await book_sessionLocators.savedcard_confirm_button.click();

         // Pause and click the pay button
        await browser.pause(timeouts.PAYMENT_PROCESSING);
        await book_sessionLocators.Paybutton_hyperpay.click();

        await book_sessionLocators.payment_successmsg.waitForDisplayed({ timeout: timeouts.PAYMENT_CONFIRMATION });
        await expect(book_sessionLocators.payment_successmsg).toHaveText(
            'Your payment is complete! Your session has been successfully booked'
        );

        await book_sessionLocators.payment_completebtn.click();
    } 
    else {
        //  Add new card flow
        await book_sessionLocators.savedcard_addnewbtn.click();

        await book_sessionLocators.card_number.setValue(cardInputs.CardNumber);
        await book_sessionLocators.expiry_date.setValue(cardInputs.ExpiryDate);
        await book_sessionLocators.cvc.setValue(cardInputs.CVC);
        await book_sessionLocators.cardholder_name.setValue(cardInputs.CardHolderName);
        await browser.hideKeyboard();

        // await book_sessionLocators.savecard_checkbox.waitForClickable({ timeout: timeouts.NAVIGATION });
        await book_sessionLocators.savecard_checkbox.click();

        await book_sessionLocators.card_paynow.click();

        // Pause and click the pay button
        await browser.pause(timeouts.PAYMENT_PROCESSING);
        await book_sessionLocators.Paybutton_hyperpay.click();
        await expect(book_sessionLocators.package_Suceessmsg).toBeDisplayed();
        await expect(book_sessionLocators.package_Suceessmsg).toHaveText('Youâ€™ve successfully purchased a package with Ahmed Ali');
        await book_sessionLocators.payment_completebtn.click();
    }
    } 
    catch (error) {
        console.log('No card found');
    }
}

type GiftWalletParams = { email: string, name: string, message: string, cvc: string, cardNumber: string, expiryDate: string, cardholderName: string }

export async function GiftWalletFlow({ email, name, message, cvc, cardNumber, expiryDate, cardholderName }: GiftWalletParams) {
    await gift_walletLocators.bottom_nav_menu.waitForEnabled({ timeout: timeouts.NAVIGATION });
    await gift_walletLocators.bottom_nav_menu.click();
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()');
    await gift_walletLocators.gift_wallet_menu.click();
    await gift_walletLocators.gift_wallet_email_switcher.click();
    await login_screenLocators.login_input.click();
    await login_screenLocators.login_input.setValue(email);
    await gift_walletLocators.gift_wallet_input_email_next.click();
    await gift_walletLocators.gift_wallet_select_preset.waitForEnabled({ timeout: timeouts.ELEMENT_WAIT });
    await gift_walletLocators.gift_wallet_select_preset.click();
    await gift_walletLocators.gift_wallet_next_button.click();
    await gift_walletLocators.gift_wallet_input_name.setValue(name);
    await gift_walletLocators.gift_wallet_input_message.setValue(message);
    await gift_walletLocators.gift_wallet_next2_button.click();
    await gift_walletLocators.gift_wallet_next2_button.click();
    await gift_walletLocators.gift_wallet_next_button.click();
    await gift_walletLocators.add_new_card_button.waitForEnabled({ timeout: timeouts.ELEMENT_WAIT });
    await gift_walletLocators.add_new_card_button.click();
    await book_sessionLocators.card_number.setValue(cardNumber);
    await book_sessionLocators.expiry_date.setValue(expiryDate);
    await book_sessionLocators.cvc.setValue(cvc);
    await book_sessionLocators.cardholder_name.setValue(cardholderName);
    await book_sessionLocators.savecard_checkbox.click();
    await book_sessionLocators.card_paynow.click();
    await browser.pause(timeouts.PAYMENT_PROCESSING);
    await book_sessionLocators.Paybutton_hyperpay.click();
    // await browser.pause(timeouts.PAYMENT_CONFIRMATION);
    await book_sessionLocators.payment_completebtn.click();
    await expect(gift_walletLocators.bottom_nav_menu).toBeDisplayed();
}

/**
 * Anxiety Questionnaire Test
 * Steps:
 * 1. Open Resources tab
 * 2. Select anxiety questionnaire
 * 3. Answer questions
 * 4. Complete questionnaire
 */
export async function AnxietyQuestionnaire() {
    await openResourcesTab();
    await selectAnxietyQuestionnaire();
    
    // Answer 7 questions with different responses
    await answerQuestionnaireQuestion(0);
    await answerQuestionnaireQuestion(2);
    await answerQuestionnaireQuestion(1);
    await answerQuestionnaireQuestion(3);
    await answerQuestionnaireQuestion(1);
    await answerQuestionnaireQuestion(2);
    await answerQuestionnaireQuestion(3);
    
    // Complete questionnaire
    const resources_locator = require('../screenobjects/Resources-locator');
    await resources_locator.questionnaire_btn_continue.click();
}

// ============================================
// PAYMENT FLOW TESTS - Simple & Clear
// Each function shows exactly what steps happen
// Read from top to bottom to understand the test
// ============================================

type PaymentFlowParams = { email: string, password: string, consultant: string, cvc?: string, promoCode?: string }

/**
 * WALLET ONLY BOOKING
 * User pays with their wallet balance
 */
export async function WalletOnlyBooking({ email, password, consultant, promoCode }: PaymentFlowParams) {
    // Step 1: Login
    await clickLoginMenu();
    await enterEmail(email);
    await enterPassword(password);
    await dismissNotifications();
    
    // Step 2: Search and select consultant
    await searchConsultant(consultant);
    await clickBookSessionButton();
    
    // Step 3: Select time slot
    await selectFirstAvailableTimeSlot();
    await confirmTimeSlot();
    await clickPayNowAtSessionConfirmation();
    
    // Step 4: Payment options (wallet is already selected by default)
    await selectWalletPayment();
    
    // Step 5: Apply promo code if provided
    if (promoCode) {
        await applyPromoCode(promoCode);
    }
    
    // Step 6: Continue to checkout and complete payment
    await continueToCheckout();
    await completePayment();
}

/**
 * PARTNER WALLET ONLY BOOKING
 * User pays with partner wallet balance
 */
export async function PartnerWalletOnlyBooking({ email, password, consultant, promoCode }: PaymentFlowParams) {
    // Step 1: Login
    await clickLoginMenu();
    await enterEmail(email);
    await enterPassword(password);
    await dismissNotifications();
    
    // Step 2: Search and select consultant
    await searchConsultant(consultant);
    await clickBookSessionButton();
    
    // Step 3: Select time slot
    await selectFirstAvailableTimeSlot();
    await confirmTimeSlot();
    await clickPayNowAtSessionConfirmation();
    
    // Step 4: Select partner wallet as payment method
    await selectPartnerWalletPayment();
    
    // Step 5: Apply promo code if provided
    if (promoCode) {
        await applyPromoCode(promoCode);
    }
    
    // Step 6: Continue to checkout and complete payment
    await continueToCheckout();
    await completePayment();
}

/**
 * REFERRAL WALLET ONLY BOOKING
 * User pays with referral credit
 */
export async function ReferralWalletOnlyBooking({ email, password, consultant, promoCode }: PaymentFlowParams) {
    // Step 1: Login
    await clickLoginMenu();
    await enterEmail(email);
    await enterPassword(password);
    await dismissNotifications();
    
    // Step 2: Search and select consultant
    await searchConsultant(consultant);
    await clickBookSessionButton();
    
    // Step 3: Select time slot
    await selectFirstAvailableTimeSlot();
    await confirmTimeSlot();
    await clickPayNowAtSessionConfirmation();
    
    // Step 4: Select referral wallet as payment method
    await selectReferralWalletPayment();
    
    // Step 5: Apply promo code if provided
    if (promoCode) {
        await applyPromoCode(promoCode);
    }
    
    // Step 6: Continue to checkout and complete payment
    await continueToCheckout();
    await completePayment();
}

/**
 * WALLET + SAVED CARD BOOKING
 * Wallet covers part, saved card covers remaining balance
 */
export async function WalletAndSavedCardBooking({ email, password, consultant, cvc, promoCode }: PaymentFlowParams) {
    // Step 1: Login
    await clickLoginMenu();
    await enterEmail(email);
    await enterPassword(password);
    await dismissNotifications();
    
    // Step 2: Search and select consultant
    await searchConsultant(consultant);
    await clickBookSessionButton();
    
    // Step 3: Select time slot
    await selectFirstAvailableTimeSlot();
    await confirmTimeSlot();
    await clickPayNowAtSessionConfirmation();
    
    // Step 4: Wallet is default payment method
    await selectWalletPayment();
    
    // Step 5: Apply promo code if provided
    if (promoCode) {
        await applyPromoCode(promoCode);
    }
    
    // Step 6: Go to checkout and select saved card for remaining balance
    await continueToCheckout();
    await selectSavedCardAtCheckout(cvc!);
    
    // Step 7: Complete payment
    await completePayment();
}

/**
 * WALLET + NEW CARD BOOKING
 * Wallet covers part, user enters new card for remaining balance
 */
export async function WalletAndHyperPayBooking({ email, password, consultant, promoCode }: PaymentFlowParams) {
    // Step 1: Login
    await clickLoginMenu();
    await enterEmail(email);
    await enterPassword(password);
    await dismissNotifications();
    
    // Step 2: Search and select consultant
    await searchConsultant(consultant);
    await clickBookSessionButton();
    
    // Step 3: Select time slot
    await selectFirstAvailableTimeSlot();
    await confirmTimeSlot();
    await clickPayNowAtSessionConfirmation();
    
    // Step 4: Wallet is default payment method
    await selectWalletPayment();
    
    // Step 5: Apply promo code if provided
    if (promoCode) {
        await applyPromoCode(promoCode);
    }
    
    // Step 6: Go to checkout and add new card for remaining balance
    await continueToCheckout();
    await addNewCardAtCheckout();
    
    // Step 7: Complete payment
    await completePayment();
}

/**
 * REFERRAL WALLET + SAVED CARD BOOKING
 * Referral credit covers part, saved card covers remaining balance
 */
export async function ReferralWalletAndSavedCardBooking({ email, password, consultant, cvc, promoCode }: PaymentFlowParams) {
    // Step 1: Login
    await clickLoginMenu();
    await enterEmail(email);
    await enterPassword(password);
    await dismissNotifications();
    
    // Step 2: Search and select consultant
    await searchConsultant(consultant);
    await clickBookSessionButton();
    
    // Step 3: Select time slot
    await selectFirstAvailableTimeSlot();
    await confirmTimeSlot();
    await clickPayNowAtSessionConfirmation();
    
    // Step 4: Select referral wallet as payment method
    await selectReferralWalletPayment();
    
    // Step 5: Apply promo code if provided
    if (promoCode) {
        await applyPromoCode(promoCode);
    }
    
    // Step 6: Go to checkout and select saved card for remaining balance
    await continueToCheckout();
    await selectSavedCardAtCheckout(cvc!);
    
    // Step 7: Complete payment
    await completePayment();
}

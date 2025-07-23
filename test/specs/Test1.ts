/// <reference types="@wdio/globals/types" />


const login_screenLocators = require('../screenobjects/login_screen-locators');
const signup_screenLocators = require('../screenobjects/signup_screen-locators');
const forgot_passwordLocators = require('../screenobjects/forgot_password-locators');
const book_sessionLocators = require('../screenobjects/book_session-locators');
const { completeLoginFlow, ForgotPassword, SignupFlow, BookSessionTabby } = require('../helpers/testFlows');

describe('Sample', () => {

    // it('login flow', async () => {
    //     await completeLoginFlow('hamzakhan@yopmail.com', 'click123');
    // })
    
    // it('Signup flow with fresh build', async () => {
    //    await SignupFlow('1234','click123','click123');
    // });



    // it('Book Session (partial payment) with new client', async() => {
    //     await browser.pause(3000); // Add a wait here before interacting with elements
    //     await book_sessionLocators.consultant_navbar.click();
    //     await book_sessionLocators.searchconsultant.setValue('Nawaz Sharif');
    //     await browser.pause(5000);
    //     await book_sessionLocators.consultant_card_newuser.click();
    //     await book_sessionLocators.book_sessionbtn.click();
    //     await browser.pause(5000);
    //     await book_sessionLocators.timeslot_opt.click();
    //     await book_sessionLocators.timeslot_booksession.click();
    //     await book_sessionLocators.continuecheckout_btn.click();
    //     await browser.pause(5000);
    //     await book_sessionLocators.card_number.click();
    //     await book_sessionLocators.card_number.setValue(4111111111111111);
    //     // await browser.pause(2000);
    //     await book_sessionLocators.cardholder_name.click();
    //     await book_sessionLocators.cardholder_name.setValue('Test');
    //     await book_sessionLocators.expiry_date.click();
    //     await book_sessionLocators.expiry_date.setValue(1235); 
    //     await book_sessionLocators.cvc.click(); 
    //     await book_sessionLocators.cvc.setValue(258);
    //     await book_sessionLocators.hide_keyboard.click();
    // await book_sessionLocators.savecard_checkbox.click();
    //     await browser.pause(3000);
    //     await book_sessionLocators.card_paynow.click();
    //     await browser.pause(12000);
    // await book_sessionLocators.Paybutton_hyperpay.click();
    //     await browser.pause(4000);
    //     await book_sessionLocators.payment_completebtn.click();
    //     await book_sessionLocators.chatbtn.click();
    //     await browser.pause(5000);
    //     await book_sessionLocators.messagebox.click();
    //     await book_sessionLocators.messagebox.setValue('Hi');
    //     await browser.pause(2000);
    //     await book_sessionLocators.sendmsgicon.click();
    //     await browser.pause(4000);
    //     await book_sessionLocators.backicon_chat.click();
    //     await book_sessionLocators.menu_navbar.click();
    //     await book_sessionLocators.logoutbtn.click();
    //     })


    // it('Book Session with existing client', async() => {
    //     await book_sessionLocators.searchconsultant.setValue('Nawaz Sharif');
    //     await book_sessionLocators.consultant_card.click();
    //     await book_sessionLocators.book_sessionbtn.click();
    //     await book_sessionLocators.timeslot_opt.click();
    //     await book_sessionLocators.timeslot_booksession.click();
    //     await book_sessionLocators.sessionconfirmation_paynow.click();
    //     await book_sessionLocators.continuecheckout_btn.click();
    //     await browser.pause(5000);
    //     await book_sessionLocators.savedcard_selection.click();
    //     await book_sessionLocators.savedcard_input_cvc.setValue('009');
    //     await book_sessionLocators.savedcard_confirm_button.click();
    //     // await book_sessionLocators.card_number.setValue(4111111111111111);
    //     // await browser.pause(2000);
    //     // await book_sessionLocators.expiry_date.setValue(1235);  
    //     // await book_sessionLocators.cvc.setValue(258);
    //     // await book_sessionLocators.cardholder_name.setValue('Test');
    //     // await book_sessionLocators.hide_keyboard.click();
    //     // await book_sessionLocators.savecard_checkbox.click();
    //     // await browser.pause(3000);
    //     // await book_sessionLocators.card_paynow.click();
    //     await browser.pause(12000);
    //     await book_sessionLocators.Paybutton_hyperpay.click();
    //     await browser.pause(4000);
    //     await book_sessionLocators.payment_completebtn.click();
    // })

    // it('Forgot Password', async() => {
    //    await ForgotPassword('anser@yopmail.com', '1234', 'click12345', 'click12345');
    // })

    it('Book Session with Tabby', async() => {
        await BookSessionTabby('Nawaz Sharif','card.success@tabby.ai','500000001','8888');
    })
        
    });
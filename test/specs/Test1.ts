/// <reference types="@wdio/globals/types" />
const login_screenLocators = require('../screenobjects/login_screen-locators');
const signup_screenLocators = require('../screenobjects/signup_screen-locators');
const forgot_passwordLocators = require('../screenobjects/forgot_password-locators');
const book_sessionLocators = require('../screenobjects/book_session-locators');

describe('Sample', () => {

    // it('Signup flow with fresh build', async () => {
    //     await browser.pause(10000);
    //     // await login_screenLocators.Notnow_notifications.click();
    //     await signup_screenLocators.nextbutton.click();
    //     await browser.pause(500);
    //     await signup_screenLocators.nextbutton.click();
    //     await browser.pause(500);
    //     await signup_screenLocators.nextbutton.click();
    //     await browser.pause(500);
    //     await signup_screenLocators.nextbutton.click();
    //     await browser.pause(500);
    //     await signup_screenLocators.nextbutton.click();
    //     await browser.pause(500);
    //     await signup_screenLocators.explorebutton.click();
    //     await signup_screenLocators.bottom_nav_menu.click();
    //     await signup_screenLocators.guestmenu_loginbtn.click();
    //     await signup_screenLocators.emailswitcher.click();

    //     function generateRandomEmail() {
    //         const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //         let username = "";
    //         for (let i = 0; i < 8; i++) {
    //             username += chars.charAt(Math.floor(Math.random() * chars.length));
    //         }
    //         return username + "@yopmail.com";
    //     }

    //     function generateRandomName() {
    //         const firstNames = ["Alice", "Bob", "Charlie", "David", "Emma", "Emily", "Olivia", "Noah", "William", "James"];
    //         const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"];
    //         const firstNameIndex = Math.floor(Math.random() * firstNames.length);
    //         const lastNameIndex = Math.floor(Math.random() * lastNames.length);
    //         return firstNames[firstNameIndex] + " " + lastNames[lastNameIndex];
    //     }

    //     await signup_screenLocators.login_inputemail.setValue(generateRandomEmail());
    //     await signup_screenLocators.login_nextbtn.click();
    //     await browser.pause(3000);
    //     await signup_screenLocators.otp.setValue('1234');
    //     await signup_screenLocators.otp_nextbtn.click();
    //     await signup_screenLocators.input_name.setValue(generateRandomName());
    //     await signup_screenLocators.inputname_nextbtn.click();
    //     await signup_screenLocators.gender_bottomsheet.click();
    //     await signup_screenLocators.male_optionselect.click();
    //     await signup_screenLocators.gender_nextbtn.click();
    //     await browser.pause(9000);
    //     // Uncomment and adjust if needed:
    //     await $('//android.view.ViewGroup[@content-desc="signup_details_date_picker_date_of_birth"]').click();
    //     await $('android=new UiScrollable(new UiSelector().scrollable(true).instance(2)).scrollIntoView(new UiSelector().text("2000"))');
    //     await $('//android.widget.Button[@resource-id="android:id/button1"]').click();
    //     await $('//android.widget.TextView[@text="Next"]').click();
    //     await signup_screenLocators.password.setValue('click123');
    //     await signup_screenLocators.confirm_password.setValue('click123');
    //     await signup_screenLocators.password_nextbtn.click();
    //     await expect(signup_screenLocators.welcome_message).toBeDisplayed();
    //     await expect(signup_screenLocators.welcome_message).toHaveText('Glad to have you at Estenarh!');
    //     await signup_screenLocators.welcome_nextbtn.click();
    // });

    // it('Login flow', async () => {
    //  await browser.pause(5000); // Add a wait here before interacting with elements
    //     await signup_screenLocators.nextbutton.click();
    //     await browser.pause(500);
    //     await signup_screenLocators.nextbutton.click();
    //     await browser.pause(500);
    //     await signup_screenLocators.nextbutton.click();
    //     await browser.pause(500);
    //     await signup_screenLocators.nextbutton.click();
    //     await browser.pause(500);
    //     await signup_screenLocators.nextbutton.click();
    //     await browser.pause(500);
    //     await signup_screenLocators.explorebutton.click();
    //     await signup_screenLocators.bottom_nav_menu.click();
    //     await signup_screenLocators.guestmenu_loginbtn.click();
    //     await signup_screenLocators.emailswitcher.click();
    //   await login_screenLocators.login_input.setValue('basit@yopmail.com');
    //   await login_screenLocators.login_nextbtn.click();
    //   await login_screenLocators.password_input.setValue('click123');
    //   await login_screenLocators.password_nextbtn.click();
        //  await login_screenLocators.Notnow_notifications.click();
    // })

    // it('Signup flow with the exisiting build', async () => {
    //     const driver = await // Initialize your Appium driver (replace with your driver initialization code)

    //     await browser.pause(5000); // Add a wait here before interacting with elements
    //     await signup_screenLocators.bottom_nav_menu.click();
    //     await signup_screenLocators.guestmenu_loginbtn.click();
    //     await signup_screenLocators.emailswitcher.click();

    //     function generateRandomEmail() {
    //         const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //         let username = "";
        
    //         for (let i = 0; i < 8; i++) {
    //           username += chars.charAt(Math.floor(Math.random() * chars.length));
    //         }
        
    //         return username + "@yopmail.com";
    //       }
        
    //       // Generate a random name
    //       function generateRandomName() {
    //         const firstNames = ["Alice", "Bob", "Charlie", "David", "Emma", "Emily", "Olivia", "Noah", "William", "James"];
    //         const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"];
        
    //         const firstNameIndex = Math.floor(Math.random() * firstNames.length);
    //         const lastNameIndex = Math.floor(Math.random() * lastNames.length);
        
    //         return firstNames[firstNameIndex] + " " + lastNames[lastNameIndex];
    //       }
        
    //       // Find email field and enter generated email
    //       await signup_screenLocators.login_inputemail.setValue(generateRandomEmail());
        
    //       // Click on Next button
    //       await signup_screenLocators.login_nextbtn.click();

    //       await browser.pause(3000);

    //       await signup_screenLocators.otp.setValue('1234');
    //       await signup_screenLocators.otp_nextbtn.click();

    //       // Find name field (replace with your actual selector) and enter generated name
    //       await signup_screenLocators.input_name.setValue(generateRandomName());
    //       await signup_screenLocators.inputname_nextbtn.click();

    //       // Selecting the gender
    //       await signup_screenLocators.gender_bottomsheet.click()
    //       await signup_screenLocators.male_optionselect.click();
    //       await signup_screenLocators.gender_nextbtn.click();

    //       await browser.pause(3000);
            // await $('//android.view.ViewGroup[@content-desc="signup_details_date_picker_date_of_birth"]').click();
            // await $('android=new UiScrollable(new UiSelector().scrollable(true).instance(2)).scrollIntoView(new UiSelector().text("2000"))');
            // await $('//android.widget.Button[@resource-id="android:id/button1"]').click();
            // await $('//android.widget.TextView[@text="Next"]').click();
    //       //Choose your password
    //       await signup_screenLocators.password.setValue('click123');
    //       await browser.pause(2000);
    //       await $('(//android.view.ViewGroup[@content-desc=""])[1]').click();

    //       await signup_screenLocators.confirm_password.setValue('click123');
    //       await browser.pause(2000);
    //     //   await $('(//android.view.ViewGroup[@content-desc=""])[2]').click();
    //       await signup_screenLocators.password_nextbtn.click();

    //       //Welcome Screen next button
    //       await signup_screenLocators.welcome_nextbtn.click();
        
    // })


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


    it('Book Session with existing client', async() => {
        await browser.pause(8000); // Add a wait here before interacting with elements
        await login_screenLocators.nextbutton.click();
        await login_screenLocators.nextbutton.click();
        await login_screenLocators.nextbutton.click();
        await login_screenLocators.nextbutton.click();
        await login_screenLocators.nextbutton.click();
        await login_screenLocators.explorebutton.click();
        await login_screenLocators.bottom_nav_menu.click();
        await login_screenLocators.guestmenu_loginbtn.click();
        await login_screenLocators.emailswitcher.click();
        await login_screenLocators.login_input.setValue('rohanulhaq004@gmail.com')
        await login_screenLocators.login_nextbtn.click();
        await browser.pause(5000);
        await login_screenLocators.password_input.setValue('click123');
        await login_screenLocators.unhide_eyebtn.click();
        await login_screenLocators.password_nextbtn.click();
        await browser.pause(5000);
        await login_screenLocators.Notnow_notifications.click();
        await book_sessionLocators.consultant_navbar.click();
        await book_sessionLocators.searchconsultant.setValue('Nawaz Sharif');
        await book_sessionLocators.consultant_card.click();
        await book_sessionLocators.book_sessionbtn.click();
        await book_sessionLocators.timeslot_opt.click();
        await book_sessionLocators.timeslot_booksession.click();
        await book_sessionLocators.sessionconfirmation_paynow.click();
        await book_sessionLocators.continuecheckout_btn.click();
        await browser.pause(5000);
        await book_sessionLocators.card_number.setValue(4111111111111111);
        await browser.pause(2000);
        await book_sessionLocators.expiry_date.setValue(1235);  
        await book_sessionLocators.cvc.setValue(258);
        await book_sessionLocators.cardholder_name.setValue('Test');
        await book_sessionLocators.hide_keyboard.click();
        await book_sessionLocators.savecard_checkbox.click();
        await browser.pause(3000);
        await book_sessionLocators.card_paynow.click();
        await browser.pause(12000);
        await book_sessionLocators.Paybutton_hyperpay.click();
        await browser.pause(4000);
        await book_sessionLocators.payment_completebtn.click();
    })

    // it('Forgot Password', async() => {
    //     await browser.pause(5000);
    //     await forgot_passwordLocators.bottom_nav_menu.click();
    //     await forgot_passwordLocators.guestmenu_loginbtn.click();
    //     await forgot_passwordLocators.emailswitcher.click();
    //     await forgot_passwordLocators.login_input.setValue('anser@yopmail.com');
    //     await forgot_passwordLocators.login_nextbtn.click();
    //     await forgot_passwordLocators.forgot_pwdlink.click();
    //     await browser.pause(2000);
    //     await forgot_passwordLocators.resetpassword_btn.click();
    //     await browser.pause(3000);
    //     await forgot_passwordLocators.otp.setValue('1234');
    //     await forgot_passwordLocators.otp_nextbtn.click();
    //     await forgot_passwordLocators.password.setValue('click12345');
    //     await forgot_passwordLocators.confirmpassword.setValue('click12345');
    //     await forgot_passwordLocators.reset_nextbtn.click();
    // })

    // it('Book Session (tabby)', async() => {
    //   await browser.pause(3000); // Add a wait here before interacting with elements
    //   await book_sessionLocators.consultant_navbar.click();
    //   await book_sessionLocators.searchconsultant.setValue('Ahmed Consultant');
    //   await browser.pause(5000);
    //   await book_sessionLocators.consultant_card.click();
    //   await book_sessionLocators.book_sessionbtn.click();
    //   await browser.pause(5000);
    //   await book_sessionLocators.timeslot_opt.click();
    //   await book_sessionLocators.book_sessionbtn.click();
    //   await book_sessionLocators.paynow_btn.click();
    //   await browser.pause(5000);
    //   await book_sessionLocators.buynow_btn.click();
    //   await book_sessionLocators.tabby_bottomsheet.click();
    //   await browser.pause(3000);
    //   await book_sessionLocators.linknum_tabby.setValue(500000001);
    //   await book_sessionLocators.clearemail.clearValue();
    //   await book_sessionLocators.testemailtabby.setValue('card.success@tabby.ai');
    //   await book_sessionLocators.tabbyloginphone.click();
    //   await book_sessionLocators.tabbyloginphone.setValue(500000001);
    //   await book_sessionLocators.tabbylogincontinue.click(); //not working idk why :(
    //   await browser.pause(3000);
    //   await book_sessionLocators.tabbyotp.setValue(8888);
    //   await browser.pause(4000);
    //   await book_sessionLocators.cardnum.setValue(4111111111111111);
    //   await book_sessionLocators.tabbyexpiry.setValue('12/35');
    //   await book_sessionLocators.tabbycvv.setValue('123');
    //   await book_sessionLocators.paytabbybtn.click();
    //   })
})


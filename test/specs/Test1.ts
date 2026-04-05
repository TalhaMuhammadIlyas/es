/// <reference types="@wdio/globals/types" />
import allure from '@wdio/allure-reporter';
import { cardInputs } from '../constants/cardDetails';
import { miscellaneous } from '../constants/miscellaneous';
import { ForgotPasswordwithdifferentConfirmPassword } from '../helpers/testFlows';

const login_screenLocators = require('../screenobjects/login_screen-locators');
const signup_screenLocators = require('../screenobjects/signup_screen-locators');
const forgot_passwordLocators = require('../screenobjects/forgot_password-locators');
const book_sessionLocators = require('../screenobjects/book_session-locators');
const gift_walletLocators = require('../screenobjects/gift_wallet-locators');
const resources_locator = require('../screenobjects/resources-locator');
const { completeLoginFlowwithValidCredentials, completeLoginFlowwithInvalidCredentials ,ForgotPassword, SignupFlow, BookSessionTabby, Packagebuy, GiftWalletFlow, scrollNumberPickerUiAutomator, AnxietyQuestionnaire, E2EFlow, WalletOnlyBooking, 
    PartnerWalletOnlyBooking, 
    ReferralWalletOnlyBooking,
    WalletAndSavedCardBooking,
    WalletAndHyperPayBooking,
    ReferralWalletAndSavedCardBooking,
    SavedCardsbookingflow } = require('../helpers/testFlows');

describe('Estenarh App Test Suite', () => {
    beforeEach(async function () {
        allure.addFeature('Estenarh Mobile App');
        // allure.addParameter('environment', 'PLATFORM: Android');
        // If you want to add environment info, use addEnvironment if available:
        // allure.addEnvironment('PLATFORM', 'Android');
    });

    // it('login flow with valid credentials', async () => {
    //     allure.addFeature('Authentication');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify user can login with valid credentials', 'text');
    //     allure.startStep('Execute login flow');
    //     await completeLoginFlowwithValidCredentials('talha.ilyas@mailinator.com', 'click123');
    //     allure.endStep();
    // })

    // it('login flow with invalid credentials', async () => {
    //     allure.addFeature('Authentication');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify user cannot login with invalid credentials', 'text');
    //     allure.startStep('Execute login flow');
    //     await completeLoginFlowwithInvalidCredentials('talha.ilyas@mailinator.com', 'click12345');
    //     allure.endStep();
    // })

    // it('Signup flow with fresh build', async () => {
    //     allure.addFeature('Authentication');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify new user registration process', 'text');
    //     allure.startStep('Complete signup process');
    //     await SignupFlow('1234','click123','click123'); 
    //     allure.endStep();
    // });

    // it('Book Session with existing client', async() => {
    //     await SavedCardsbookingflow('Nawaz Sharif','856');
    // })

    // it('Package buying', async() => {
    //     allure.addFeature('Package Purchase');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify user can purchase a consultation package', 'text');
    //     allure.startStep('Select and purchase package');
    //     await Packagebuy('Ahmed Ali','345');
    //     allure.endStep();
    // });

    // it('Forgot Password', async() => {
    //     allure.addFeature('Authentication');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify forgot password functionality', 'text');
    //     await ForgotPassword('talha.ilyas@mailinator.com', '1234', 'click123', 'click123');
    //     allure.startStep('Initiate password reset');
    //     allure.endStep();
    // });

    // it('Forgot Password with different confirm password', async() => {
    //     allure.addFeature('Authentication');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify forgot password functionality', 'text');
    //     await ForgotPasswordwithdifferentConfirmPassword('talha.ilyas@mailinator.com', '1234', 'click123', 'click12345');
    //     allure.startStep('Initiate password reset');
    //     allure.endStep();
    // });


    // it('E2E Flow', async () => {
    //     allure.addFeature('End-to-End Flow');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify complete user journey from login to booking a session', 'text');
    //     allure.startStep('Execute end-to-end user flow');
    //     await E2EFlow({
    //         email: miscellaneous.ClientMail,
    //         password: miscellaneous.ClientPassword,
    //         consultant: miscellaneous.ConsultantName,
    //         cvc: cardInputs.CVC
    //     });
    //     allure.endStep();
    // });


    // it('Saved Card Booking Flow', async () => {
    //     allure.addFeature('Session booking with hyperpayment');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify booking session using saved card flow', 'text');
    //     allure.startStep('Book session with consultant using saved card');
    //     await SavedCardsbookingflow('Nawaz Sharif', cardInputs.CVC);
    //     allure.endStep();
    // })

    // it('Gift Wallet Flow', async () => {
    //     allure.addFeature('Gift Wallet');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify gift wallet functionality', 'text');

    //     allure.startStep('Gift wallet flow for logged in client')
    //     await GiftWalletFlow({
    //         email: 'nayela@mailinator.com',
    //         name: 'Nayela',
    //         message: 'Here is a heart whelming gift for You!',
    //         cvc: cardInputs.CVC,
    //         cardNumber: cardInputs.CardNumber,
    //         expiryDate: cardInputs.ExpiryDate,
    //         cardholderName: cardInputs.CardHolderName
    //     });
    //     allure.endStep();
    // })

    // it('Anxiety Questionnaire', async () => {
    //     allure.addFeature('Anxiety Questionnaire');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Take Anxiety Questionnaire', 'text');
    //     allure.startStep('Navigate to Anxiety Questionnaire');
    //     await AnxietyQuestionnaire();
    //     allure.endStep();
    // });


     /**
         * Test 1: Wallet Only Payment
         * User: emails configured in miscellaneous constants
         * Consultant: As configured
         * Payment: Full payment via Wallet
         */
        // it('Wallet Only Booking - User 1', async () => {
        //     allure.addFeature('Wallet Payment');
        //     allure.addSeverity('critical');
        //     allure.addDescription('Book session using only wallet payment method', 'text');
            
        //     allure.startStep('Login and navigate to booking');
        //     await WalletOnlyBooking({
        //         email: 'ahmed.feroz@yopmail.com',
        //         password: 'click123',
        //         consultant: 'Omar Moin',
        //         promoCode: undefined // No promo code for this test
        //     });
        //     allure.endStep();
        // });
    
        /**
         * Test 2: Wallet Only with Promo Code
         * User: Different user for wallet payment
         * Consultant: Same or different consultant
         * Payment: Wallet with promo code discount
         */
        it('Wallet Only Booking with Promo Code - User 2', async () => {
            allure.addFeature('Wallet Payment');
            allure.addSeverity('critical');
            allure.addDescription('Book session using wallet with promo code', 'text');
            
            allure.startStep('Login, apply promo code, and complete payment');
            await WalletOnlyBooking({
                email: 'ahmed.feroz@yopmail.com',
                password: 'click123',
                consultant: 'Nawaz Sharif',
                promoCode: '10PER' // Apply promo code
            });
            allure.endStep();
        });
    
        /**
         * Test 3: Partner Wallet Only Payment
         * User: User with partner wallet balance
         * Consultant: Different consultant
         * Payment: Single payment method (Partner Wallet)
         */
        // it('Partner Wallet Only Booking - User 3', async () => {
        //     allure.addFeature('Partner Wallet Payment');
        //     allure.addSeverity('critical');
        //     allure.addDescription('Book session using only partner wallet', 'text');
            
        //     allure.startStep('Login and complete payment via partner wallet');
        //     await PartnerWalletOnlyBooking({
        //         email: 'user3@yopmail.com',
        //         password: 'TestPassword123',
        //         consultant: 'Dr. Hassan',
        //         promoCode: undefined
        //     });
        //     allure.endStep();
        // });
    
        /**
         * Test 4: Partner Wallet with Promo Code
         * User: User with partner wallet + has eligible promo code
         * Consultant: Different consultant
         * Payment: Partner Wallet with discount
         */
        // it('Partner Wallet Booking with Discount - User 4', async () => {
        //     allure.addFeature('Partner Wallet Payment');
        //     allure.addSeverity('critical');
        //     allure.addDescription('Book session using partner wallet with promo code', 'text');
            
        //     allure.startStep('Apply partner wallet with promotional discount');
        //     await PartnerWalletOnlyBooking({
        //         email: 'user4@yopmail.com',
        //         password: 'TestPassword123',
        //         consultant: 'Ahmed Ali',
        //         promoCode: 'PARTNER15'
        //     });
        //     allure.endStep();
        // });
    
        /**
         * Test 5: Referral Wallet Only Payment
         * User: User with referral wallet balance
         * Consultant: Any available consultant
         * Payment: Referral wallet only
         */
        // it('Referral Wallet Only Booking - User 5', async () => {
        //     allure.addFeature('Referral Wallet Payment');
        //     allure.addSeverity('critical');
        //     allure.addDescription('Book session using referral wallet credit', 'text');
            
        //     allure.startStep('Complete booking with referral wallet');
        //     await ReferralWalletOnlyBooking({
        //         email: 'user5@yopmail.com',
        //         password: 'TestPassword123',
        //         consultant: 'Nawaz Sharif',
        //         promoCode: undefined
        //     });
        //     allure.endStep();
        // });
    
        /**
         * Test 6: Referral Wallet with Promo Code
         * User: User with sufficient referral balance
         * Consultant: Different consultant for variety in tests
         * Payment: Referral wallet + promo discount
         */
        // it('Referral Wallet Booking with Promo Code - User 6', async () => {
        //     allure.addFeature('Referral Wallet Payment');
        //     allure.addSeverity('critical');
        //     allure.addDescription('Book session using referral wallet with additional discount', 'text');
            
        //     allure.startStep('Use referral wallet with promo code discount');
        //     await ReferralWalletOnlyBooking({
        //         email: 'user6@yopmail.com',
        //         password: 'TestPassword123',
        //         consultant: 'Dr. Fatima',
        //         promoCode: 'REFER10'
        //     });
        //     allure.endStep();
        // });
    
        /**
         * Test 7: Wallet + Saved Card (Hybrid Payment)
         * User: User with wallet balance + saved card on file
         * Consultant: New consultant
         * Payment: Wallet covers partial amount, saved card covers rest
         */
        // it('Wallet + Saved Card Booking - User 7', async () => {
        //     allure.addFeature('Hybrid Payment');
        //     allure.addSeverity('critical');
        //     allure.addDescription('Book session using wallet + saved card combination', 'text');
            
        //     allure.startStep('Split payment: Wallet + Saved Card');
        //     await WalletAndSavedCardBooking({
        //         email: 'user7@yopmail.com',
        //         password: 'TestPassword123',
        //         consultant: 'Ahmed Ali',
        //         cvc: '123',
        //         promoCode: undefined
        //     });
        //     allure.endStep();
        // });
    
        /**
         * Test 8: Wallet + Saved Card with Promo Code
         * User: User with both wallet and saved card
         * Consultant: Different consultant
         * Payment: Wallet + Saved Card with promo discount applied
         */
        // it('Wallet + Saved Card with Promo Code - User 8', async () => {
        //     allure.addFeature('Hybrid Payment');
        //     allure.addSeverity('critical');
        //     allure.addDescription('Book session using wallet + saved card with discount', 'text');
            
        //     allure.startStep('Combined payment with promotional discount');
        //     await WalletAndSavedCardBooking({
        //         email: 'user8@yopmail.com',
        //         password: 'TestPassword123',
        //         consultant: 'Nawaz Sharif',
        //         cvc: '456',
        //         promoCode: 'COMBO25'
        //     });
        //     allure.endStep();
        // });
    
        /**
         * Test 9: Wallet + HyperPay (Add New Card)
         * User: User with wallet balance but wants to add new card
         * Consultant: Any available
         * Payment: Wallet for partial, new card via hyperpay for rest
         */
        // it('Wallet + HyperPay Booking (Add New Card) - User 9', async () => {
        //     allure.addFeature('Hybrid Payment with New Card');
        //     allure.addSeverity('critical');
        //     allure.addDescription('Book session using wallet + new card payment', 'text');
            
        //     allure.startStep('Wallet + Add new card through HyperPay');
        //     await WalletAndHyperPayBooking({
        //         email: 'user9@yopmail.com',
        //         password: 'TestPassword123',
        //         consultant: 'Dr. Hassan',
        //         promoCode: undefined
        //     });
        //     allure.endStep();
        // });
    
        /**
         * Test 10: Wallet + HyperPay with Promo Code
         * User: User adding new card for payment
         * Consultant: Different consultant for test variety
         * Payment: Wallet + new card with promo discount
         */
        // it('Wallet + HyperPay with Promo Code - User 10', async () => {
        //     allure.addFeature('Hybrid Payment with New Card');
        //     allure.addSeverity('critical');
        //     allure.addDescription('Book session using wallet + new card with discount', 'text');
            
        //     allure.startStep('New card payment with wallet and promo');
        //     await WalletAndHyperPayBooking({
        //         email: 'user10@yopmail.com',
        //         password: 'TestPassword123',
        //         consultant: 'Dr. Fatima',
        //         promoCode: 'NEWCARD20'
        //     });
        //     allure.endStep();
        // });
    
        /**
         * Test 11: Referral Wallet + Saved Card
         * User: User with referral wallet + existing saved card
         * Consultant: Any consultant
         * Payment: Referral wallet + saved card for complete payment
         */
        // it('Referral Wallet + Saved Card Booking - User 11', async () => {
        //     allure.addFeature('Referral + Saved Card Payment');
        //     allure.addSeverity('critical');
        //     allure.addDescription('Book session using referral wallet + saved card', 'text');
            
        //     allure.startStep('Referral wallet with saved card backup');
        //     await ReferralWalletAndSavedCardBooking({
        //         email: 'user11@yopmail.com',
        //         password: 'TestPassword123',
        //         consultant: 'Ahmed Ali',
        //         cvc: '789',
        //         promoCode: undefined
        //     });
        //     allure.endStep();
        // });
    
        /**
         * Test 12: Referral Wallet + Saved Card with Promo Code
         * User: User combining multiple payment sources with discount
         * Consultant: Different consultant
         * Payment: Referral wallet + saved card + promo discount
         */
        // it('Referral Wallet + Saved Card with Promo Code - User 12', async () => {
        //     allure.addFeature('Referral + Saved Card Payment');
        //     allure.addSeverity('critical');
        //     allure.addDescription('Book session using referral wallet + saved card with discount', 'text');
            
        //     allure.startStep('Multi-source payment with promo discount');
        //     await ReferralWalletAndSavedCardBooking({
        //         email: 'user12@yopmail.com',
        //         password: 'TestPassword123',
        //         consultant: 'Nawaz Sharif',
        //         cvc: '321',
        //         promoCode: 'REFERRAL30'
        //     });
        //     allure.endStep();
        // });
    
        /**
         * Test 13: Saved Card Only (Already Existing)
         * User: User without wallet balance, using saved card
         * Consultant: Any consultant
         * Payment: Full payment via saved card
         */
        // it('Saved Card Only Booking (Control Test) - User 13', async () => {
        //     allure.addFeature('Saved Card Payment');
        //     allure.addSeverity('critical');
        //     allure.addDescription('Book session using only saved card payment', 'text');
            
        //     allure.startStep('Complete booking with existing saved card');
        //     await SavedCardsbookingflow('Dr. Hassan', '234');
        //     allure.endStep();
        // });

});

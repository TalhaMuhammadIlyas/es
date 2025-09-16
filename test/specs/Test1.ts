/// <reference types="@wdio/globals/types" />
import allure from '@wdio/allure-reporter';
import { cardInputs } from '../constants/cardDetails';

const login_screenLocators = require('../screenobjects/login_screen-locators');
const signup_screenLocators = require('../screenobjects/signup_screen-locators');
const forgot_passwordLocators = require('../screenobjects/forgot_password-locators');
const book_sessionLocators = require('../screenobjects/book_session-locators');
const gift_walletLocators = require('../screenobjects/gift_wallet-locators');
const resources_locator = require('../screenobjects/resources-locator');
const { completeLoginFlow, ForgotPassword, SignupFlow, BookSessionTabby, SavedCardsbookingflow, Packagebuy, GiftWalletFlow, scrollNumberPickerUiAutomator, AnxietyQuestionnaire } = require('../helpers/testFlows');

describe('Estenarh App Test Suite', () => {
    beforeEach(async function () {
        allure.addFeature('Estenarh Mobile App');
        //        allure.addParameter('environment', 'PLATFORM: Android');
        // If you want to add environment info, use addEnvironment if available:
        // allure.addEnvironment('PLATFORM', 'Android');
    });

    it('login flow', async () => {
        allure.addFeature('Authentication');
        allure.addSeverity('critical');
        allure.addDescription('Verify user can login with valid credentials', 'text');
        allure.startStep('Execute login flow');
        await completeLoginFlow('hamzakhan@yopmail.com', 'click123');
        allure.endStep();
    })

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

    //     allure.startStep('Search for consultant');
    //     await book_sessionLocators.searchconsultant.setValue('Nawaz Sharif');
    //     allure.endStep();

    //     allure.startStep('Select and purchase package');
    //     await Packagebuy('Nawaz Sharif','345');
    //     allure.endStep();
    // });

    // it('Forgot Password', async() => {
    //     allure.addFeature('Authentication');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify forgot password functionality');
    //     
    //     allure.startStep('Initiate password reset');
    //     await ForgotPassword('anser@yopmail.com', '1234', 'click12345', 'click12345');
    //     allure.endStep();
    // });

    // it('Book Session with Tabby', async() => {
    //     allure.addFeature('Payment Processing');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify booking session using Tabby payment method');
    //     
    //     allure.startStep('Book session with consultant');
    //     await BookSessionTabby('Nawaz Sharif','card.success@tabby.ai','500000001','8888');
    //     allure.endStep();
    // });

    // it('Gift Wallet Flow', async () => {
    //     allure.addFeature('Gift Wallet');
    //     allure.addSeverity('critical');
    //     allure.addDescription('Verify gift wallet functionality', 'text');

    //     allure.startStep('Gift wallet flow for logged in client')
    //     await GiftWalletFlow({
    //         email: 'nayela@mailinator.com',
    //         name: 'Nayela',
    //         message: 'Here is a heart whelming gift for You!',
    //         cvc: '123',
    //         cardNumber: '4111111111111111',
    //         expiryDate: '12/35',
    //         cardholderName: 'Rohan Ul Haq'
    // //     });
    // //     allure.endStep();
    // })

    it('Anxiety Questionnaire', async () => {
        allure.addFeature('Anxiety Questionnaire');
        allure.addSeverity('critical');
        allure.addDescription('Take Anxiety Questionnaire', 'text');
        allure.startStep('Navigate to Anxiety Questionnaire');
        await AnxietyQuestionnaire();
        allure.endStep();
    });

});
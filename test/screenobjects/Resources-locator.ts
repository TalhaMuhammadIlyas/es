class ResourcesLocator {
    get resourcesnavbtn() {
        return $('~Resources');
    }
    get anxiety_questionnaire() {
        return $('//android.view.ViewGroup[@content-desc="questionnaire_category_anxiety"]/android.view.ViewGroup/android.view.ViewGroup');
    }
    get takequestionnairebtn() {
        return $('~questionnaire_category_detail_button_take_questionnaire');
    }
    get questionnaire_option0() {
        return $('~questionnaire_option_0');
    }
    get questionnaire_option1() {
        return $('~questionnaire_option_1');
    }
    get questionnaire_option2() {
        return $('~questionnaire_option_2');
    }
    get questionnaire_option3() {
        return $('~questionnaire_option_3');
    }
    get questionnaire_btn_next() {
        return $('~questionnaire_question_button_next');
    }
    get questionnaire_btn_continue() {
        return $('~questionnaire_result_button_continue');
    }



}

module.exports = new ResourcesLocator();
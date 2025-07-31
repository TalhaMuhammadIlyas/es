export const TIMEOUTS = {
    // Navigation timeouts
    NAVIGATION: 5000,
    PAGE_LOAD: 12000,

    // Element interaction timeouts
    ELEMENT_WAIT: 2000,
    CLICK_WAIT: 1000,

    // Payment processing timeouts
    PAYMENT_PROCESSING: 12000,
    PAYMENT_CONFIRMATION: 4000,

    // Form interaction timeouts
    FORM_INPUT: 2000,

    // API response timeouts
    API_RESPONSE: 3000,

    // Animation timeouts
    ANIMATION: 500,

    // Custom timeouts
    LONG_WAIT: 15000,
    MEDIUM_WAIT: 9000,
    SHORT_WAIT: 3000
} as const;

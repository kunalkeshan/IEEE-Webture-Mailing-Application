/**
 * Paid Email Template
 */

/**
 * @description HTML Email template which is templated with the options given
 * @param {object} options
 * @param {string} options.name Name of person email is being sent to
 * @param {string} options.token Registration token for reference 
 * @returns {string} HTML Email Template
 * @example 
 * confirmedEmailTemplate({name: 'John Doe', token: 'q3e9ff4983t4urjdqefj'})
 * => '<html><head><title>Email</title></head><body>Hi, John Doe, use this token for reference: q3e9ff4983t4urjdqefj</body></html>'
 */
const paidEmailTemplate = ({name, token}) => {};

module.exports = paidEmailTemplate;
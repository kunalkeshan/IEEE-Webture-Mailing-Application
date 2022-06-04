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
const paidEmailTemplate = ({name, token}) => {
    return `
    <td class="esd-stripe" align="center">
    <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
        <tbody>
            <tr>
                <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td width="560" class="esd-container-frame" align="left">
                                    <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-social es-p15t es-p15b" style="font-size: 0px; background-color: #0e0e0e;" bgcolor="#0e0e0e">
                                                    <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                        <tbody>
                                                            <tr>
                                                                <td align="center" valign="top" class="es-p40r">
                                                                    <a target="_blank" href="https://www.facebook.com/ieeesrmist/"><img title="Facebook" src="https://vhqpcs.stripocdn.email/content/assets/img/social-icons/logo-white/facebook-logo-white.png" alt="Fb" width="32"></a>
                                                                </td>
                                                                <td align="center" valign="top" class="es-p40r">
                                                                    <a target="_blank" href="https://twitter.com/ieeesrmist"><img title="Twitter" src="https://vhqpcs.stripocdn.email/content/assets/img/social-icons/logo-white/twitter-logo-white.png" alt="Tw" width="32"></a>
                                                                </td>
                                                                <td align="center" valign="top">
                                                                    <a target="_blank" href="https://www.instagram.com/ieeesrmist/?hl=en"><img title="Instagram" src="https://vhqpcs.stripocdn.email/content/assets/img/social-icons/logo-white/instagram-logo-white.png" alt="Inst" width="32"></a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="esd-block-text es-p35b" bgcolor="#0c0b0b">
                                                    <p style="color: #eeebeb;">IEEE SRM SB © All Rights Reserved.</p>
                                                    <p style="color: #eeebeb;"><br></p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</td>
    `
};

module.exports = paidEmailTemplate;
/**
 * Confirmed Email Template
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
const confirmedEmailTemplate = ({ name, token, registerNo }) => {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title></title>
        <!--[if (mso 16)]>
        <style type="text/css">
        a {text-decoration: none;}
        </style>
        <![endif]-->
        <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
        <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG></o:AllowPNG>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    </head>
    
    <body data-new-gr-c-s-loaded="14.1079.0">
        <div class="es-wrapper-color">
            <!--[if gte mso 9]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                    <v:fill type="tile" color="#160f0f"></v:fill>
                </v:background>
            <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td class="esd-email-paddings" valign="top">
                            <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe esd-synchronizable-module" align="center">
                                            <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;" bgcolor="rgba(0, 0, 0, 0)">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p20" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-infoblock">
                                                                                            <p><br></p>
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
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-header" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe esd-synchronizable-module" align="center">
                                            <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p10t es-p10b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="es-m-p0r esd-container-frame" valign="top" align="center">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-empty-container" style="display: none;"></td>
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
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-content es-visible-simple-html-only" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe es-stripe-html" align="center">
                                            <table bgcolor="#000" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="border-left: 5px dashed transparent; border-right: 5px solid transparent; background-color: #000000;">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p15t es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="550" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image es-p10t es-p10b" style="font-size: 0px;"><a target="_blank"><img src="https://vhqpcs.stripocdn.email/content/guids/CABINET_62c4f24e272bde93acc4cc391fd1a6b9/images/logo_2.png" alt style="display: block;" width="110" class="adapt-img"></a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-m-txt-c es-p15t es-p15b es-p20r es-p20l" esd-links-underline="none">
                                                                                            <h1 style="color: #97cccf; font-size: 40px;">Registration Successful!</h1>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-p30t es-p10b es-p40r es-p40l">
                                                                                            <p style="font-size: 16px; line-height: 150%; color: #97cccf;">Greetings SRMiites,&nbsp;Thanks for joining us!<br><br>Innovation is the change that unlocks new value.The crusade for innovation however is one that cannot be traversed alone. To make this ideology a reality, IEEE SRM SB introduce to you our flagship event CONCEPTO.&nbsp;<br><br>Please visit our team for addition information. You can visit any of the following locations for our Kiosks.<br><br>- University Building, UB<br>- Tech Park, TP<br><br><em><strong>Please note that all registered participants will have to show the QR code below to confirm participation.&nbsp;</strong></em></p>
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
                                                    <tr>
                                                        <td class="esd-structure esdev-adapt-off es-p40" align="left">
                                                            <table width="510" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esdev-mso-td" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width="145" align="left" class="esd-container-frame">
                                                                                            <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#e8eafb" style="background-color: #e8eafb; border-radius:0 10px 10px 0; border-collapse: separate;">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td class="esdev-mso-td" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width="119" align="left" class="esd-container-frame">
                                                                                            <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#e8eafb" style="background-color: #e8eafb; border-radius:0 10px 10px 0; border-collapse: separate;">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td class="esdev-mso-td" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width="155" align="left" class="esd-container-frame">
                                                                                            <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#e8eafb" style="background-color: #e8eafb; border-radius:0 10px 10px 0; border-collapse: separate;">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td class="esdev-mso-td es-mobile-hidden" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                                <tbody>
                                                                                    <tr class="es-mobile-hidden">
                                                                                        <td width="138" class="esd-container-frame" align="left">
                                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="center" class="esd-empty-container" style="display: none;"></td>
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
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p10b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="550" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%" style="border-radius: 5px; border-collapse: separate;">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-p20t es-p10b es-p40r es-p40l" esd-links-underline="underline">
                                                                                            <p style="line-height: 150%; color: #ffffff;">Got a question? Email us at ieee@srmist.edu.in&nbsp;or give us a call at +91 8178243706</p>
                                                                                            <p style="color: #ffffff;"><br>Let's meet soon!<br><br>With Enthusiasm,&nbsp;<br>IEEE SRM SB</p>
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
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe esd-synchronizable-module" align="center">
                                            <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="640" style="background-color: transparent;">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="600" class="esd-container-frame" align="left">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-social es-p15t es-p15b es-p40r es-p40l" style="font-size:0">
                                                                                            <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="center" valign="top" class="es-p40r"><a target="_blank" href="https://www.facebook.com/ieeesrmist/"><img title="Facebook" src="https://vhqpcs.stripocdn.email/content/assets/img/social-icons/circle-black/facebook-circle-black.png" alt="Fb" width="32"></a></td>
                                                                                                        <td align="center" valign="top" class="es-p40r"><a target="_blank" href="https://twitter.com/ieeesrmist"><img title="Twitter" src="https://vhqpcs.stripocdn.email/content/assets/img/social-icons/circle-black/twitter-circle-black.png" alt="Tw" width="32"></a></td>
                                                                                                        <td align="center" valign="top"><a target="_blank" href="https://www.instagram.com/ieeesrmist/?hl=en"><img title="Instagram" src="https://vhqpcs.stripocdn.email/content/assets/img/social-icons/circle-black/instagram-circle-black.png" alt="Inst" width="32"></a></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p35b es-p40r es-p40l">
                                                                                            <p style="color: #ddd1d1;">IEEE SRM SB ©&nbsp;All Rights Reserved.</p>
                                                                                            <p style="color: #ddd1d1;"><br></p>
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
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe esd-synchronizable-module" align="center">
                                            <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;" bgcolor="rgba(0, 0, 0, 0)">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p20" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-infoblock">
                                                                                            <p><a target="_blank"></a>No longer want to receive these emails?&nbsp;<a href target="_blank">Unsubscribe</a>.<a target="_blank"></a></p>
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
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    
    </html>`
};

module.exports = confirmedEmailTemplate;
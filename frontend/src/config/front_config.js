const siteUrl = "https://interverify.co";
//const siteUrl = "http://localhost:3000/";
const redirectUrl = siteUrl + '/idme_code'
const clientId = "34d614b8c18543abd81f338aaeb7b0de"

export default {
    siteUrl: siteUrl,
    idme: {
        cliendId: clientId,
        clientSecret: "949e15f3b1dace8c2a3c685032d4e28d",
        redirectUrl: redirectUrl,
        authEndPoint: "https://api.id.me/oauth/authorize?client_id=" + clientId + "&redirect_uri=" + redirectUrl + "&response_type=token&scope=loa3",
        
    },
    aws: {
        accessKey: "AKIAVJKPVCLEKM2YG33J",
        secretKey: "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",
        region: "us-east-2",
        bucket: "idauth"
    },
    api:{
        // get requests
        verifyID: '/verifyID', 
        
        // post requests
        getUser: '/api/getUser',
        registerUser: '/api/registerUser',
        sendMail: '/api/sendMail',
        sendRegisterSuccessMailToRecruiter: '/api/sendRegisterSuccessMailToRecruiter',
        sendResultMail: '/api/sendResultMail',
        updateUserInfo: '/api/updateUserInfo',
        adminLogin: '/api/admin/login',
        adminGetAllUsers: '/api/admin/getAllUsers',
        adminDeleteUser: '/api/admin/deleteUser',
        adminUpdate: '/api/admin/updateUser',
        getPhotoId: '/api/vouchedVerification'
    },
    vouched_PUBLIC_KEY: 'V~F_e~g0ySKtaos#PX.I9Vo4P*1Kxh',
    vouchedIDVerficationURL: 'https://i.vouched.id/i?h='
}
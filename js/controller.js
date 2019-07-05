const controller = {}
// sendSignInLinkToEmail
controller.register = async function (registerInfo) {  //email, pass, fistname, lastname
    if (validateregisterInfo(registerInfo)) {
        try {
            // 1. Đăng ký người dùng
            let resultCreateUser = await window.firebase.auth().createUserWithEmailAndPassword(registerInfo.email, registerInfo.password)
            console.log(resultCreateUser)

            // 2. Update thông tin người dùng
            firebase.auth().currentUser.updateProfile({
                displayName: registerInfo.firstname + " " + registerInfo.lastname
            })

            // 3. Gửi email xác nhận
            firebase.auth().currentUser.sendEmailVerification()

            // 4. Hiện thông báo
            view.setText(config.MESSAGE_SUCCESS_ID, "Register successfullt!")
        }
        catch (err) {
            view.setText(config.MESSAGE_ERROR_ID, err.message || "Resgister failed!")
        }
    }
}


controller.logIn = async function (logInInfo) {
    if (validateLogInInfo(logInInfo)) {
        try {
            let result = await firebase.auth().signInWithEmailAndPassword(
                logInInfo.email,
                logInInfo.password
            )
            console.log(result.user)
            if (result.user.emailVerified) {
                throw new Error('Please verify email first!')
            }
            else {
                // todo: redirect to chat screen
                view.showComponents('chat')
                models.logIn(result.user)
                models.loadConversations(result.user.email)
            }
        }
        catch (err) {
            view.setText(config.MESSAGE_ERROR_ID, err.message || "Log in failed!")
        }
    }

}

controller.initAuth = function () {
    view.showComponents('loading')
    firebase.auth().onAuthStateChanged(async function (user) {
        if (user && user.emailVerified) {
            //chat
            view.showComponents('chat')
            // models.logIn(user)
            // models.loadConversations(user.email)
        } else {
            //login
            if (user) {
                await firebase.auth().signOut()
            }
            view.showComponents('logIn')
        }
    })
}
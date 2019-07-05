const components = {
    // //register
    // register: `a long string`,
    // //login
    // login: `another long string`,
    // //chat
    // // ..
    // alert: function () {
    //     // this.
    //     alert("Hello form components")
    //     // this == components
    // }
}

// console.log(components)
// console.log(components.register)
// console.log(components.login)
// components.alert()

components.register = `
<section class="register-container">
            <div class="form-container">
                <div class="logo">
                    <span>Techkids Chat</span>
                </div>
                <div class="form-wrapper">
                    <form id="${config.FORM_REGISTER_ID}">
                        <div class="name-wrapper">
                            <div class="input-wrapper">
                                <input type="text" name="${config.INPUT_FIRST_NAME}" placeholder="First Name">
                                <div class="error-message" id="${config.ERROR_FIRSTNAME_ID}"></div>
                            </div>
                            <div class="input-wrapper">
                                <input type="text" name="${config.INPUT_LAST_NAME}" placeholder="Last Name">
                                <div class="error-message" id="${config.ERROR_LASTNAME_ID}"></div>
                            </div>
                        </div>    
                        <div class="input-wrapper">
                            <input type="email" name="${config.INPUT_EMAIL_NAME}" placeholder="Email">
                            <div class="error-message" id="${config.ERROR_EMAIL_ID}"></div>
                        </div>
                        <div class="input-wrapper">
                            <input type="password" name="${config.INPUT_PWD_NAME}" placeholder="Password">
                            <div class="error-message" id="${config.ERROR_PWD_ID}"></div>
                        </div>    
                        <div class="input-wrapper">
                            <input type="password" name="${config.INPUT_CONFIRM_PWD_NAME}" placeholder="Confirm password">
                            <div class="error-message" id="${config.ERROR_CONFIRM_PWD_ID}"></div>
                        </div>
                        <div id = "${config.MESSAGE_ERROR_ID}"></div>
                        <div id = "${config.MESSAGE_SUCCESS_ID}"></div>
                        <div class="form-footer">
                            <a id="form-link" href="#">Already have a account? Login</a>
                            <button id="form-btn" type="submit">Rigister</button>

                        </div>
                    </form>
                </div>
            </div>
        </section>
`

components.logIn =`
<section class="log-in-container">
            <div class="form-container">
                <div class="logo">
                    <span>Techkids Chat</span>
                </div>
                <div class="form-wrapper">
                    <form id="form-log-in">  
                        <div class="input-wrapper">
                            <input type="email" name="${config.INPUT_EMAIL_NAME}" placeholder="Email">
                            <div class="error-message" id="${config.ERROR_EMAIL_ID}"></div>
                        </div>
                        <div class="input-wrapper">
                            <input type="password" name="${config.INPUT_PWD_NAME}" placeholder="Password">
                            <div class="error-message" id="${config.ERROR_PWD_ID}"></div>
                        </div>    
                        <div id ="${config.MESSAGE_ERROR_ID}"></div>
                        <div class="form-footer">
                            <a id="form-link" href="#">Not yes have an account? Register</a>
                            <button id="form-btn" type="submit">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
`

components.chat = `
<section class="chat-container">
            <div class="chat-header">
                <h3>MindX</h3>
            </div>
            <div class="chat-content" id="${config.CHAT_CONTENT}">
            </div>
            <div class="form-wrapper">
                <form id="${config.FORM_CHAT_ID}">
                    <div class="input-wrapper">
                        <input type="text" name='message'>
                    </div>
                    <button class="chat-submit-btn" type="submit">Send</button>
                </form>
            </div>
            <div class="error-message" id="${config.MESSAGE_ERROR_ID}"></div>
        </section>
`

components.loading = `
    <div class="loading-containter">
        <img src="https://media1.tenor.com/images/db85ba00c6073b451a8f05156a66524e/tenor.gif?itemid=9856796" />
    </div>
`
const models = {
    authUser: null,
    conversations: [],
    currentActiveConversation: null    // Hien thi hoi thoai voi nguoi dang chat
}

models.logIn = function (authUser) {
    models.authUser = authUser
    models.conversations = []
    models.currentActiveConversation = null
}

models.loadConversations = function (email) {
    firebase.firestore()
        .collection('conversations')
        .where('users', 'array-contains', email)
        .onSnapshot(function (snapshot) {
            if (!models.conversations.length) {
                // first load
                // let conversations = []
                // for(let doc of snapshot.docs){
                //     let conversation = doc.data()
                //     conversation.id = doc.id
                //     conversations.push(conversation)
                // }
                let conversations = snapshot.docs.map(function (doc) {
                    let conversation = doc.data()
                    conversation.id = doc.id
                    return conversation
                })
                models.conversations = conversations
                if (conversations.length) {
                    models.setActiveConversation(conversations[0])
                }
            }
            else {
                // doc change
                snapshot.docChanges().map(function (docChange) {
                    if (docChange.type == 'modified') {
                        let conversation = docChange.doc.data()
                        conversation.id = docChange.doc.id
                        return conversation
                    }
                }).forEach(function (conversation) {
                    console.log(conversation)
                    let foundIndex = models.conversations.findIndex(function (cvst) {
                        return cvst.id == conversation.id
                    })
                    if (foundIndex >= 0) {
                        models.conversations[foundIndex] = conversation
                    }
                    if (models.currentActiveConversation
                        && models.currentActiveConversation.id == conversation.id) {
                        models.setActiveConversation(conversation)
                    }
                })
            }
        })
}

models.setActiveConversation = function (conversation) {
    models.currentActiveConversation = conversation
    view.clearMessages()
    if (conversation.messages) {
        for (let message of conversation.messages) {
            view.addMessage(message)
        }
    }
}


models.createMessage = function(content){
    let message = {
        content: content,
        createdAt: new Date().toISOString(),
        owner: models.authUser.email
    }
    console.log(message)
    if(models.currentActiveConversation){
        firebase.firestore()
        .collection('conversations')
        .doc(models.currentActiveConversation.id)
        .update({
            messages: firebase.firestore.FieldValue.arrayUnion(message)
        })
    }
}
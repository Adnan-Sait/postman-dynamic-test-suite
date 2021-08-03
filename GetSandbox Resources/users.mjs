export const createUserHandler = function(req, res){
    // retrieve users or, if there are none, init to empty array
    state.users = state.users || [];
    let userId = Math.floor(Math.random() * 1000);
    
    let user = req.body;
    user.userId = userId;
    
    // persist user by adding to the state object
    state.users.push(user);
    
    return res.json({
        userId: user.userId,
        status: "ok"
    });
}

export const getUsersHandler = (req, res) => {
    // retrieve users or, if there are none init, to empty array
    state.users = state.users || [];

    return res.json(state.users);
}

export const getUserByUsernameHandler = function(req, res){
    // retrieve users or, if there are none, init to empty array
    state.users = state.users || [];
    
    // route param {username} is available on req.params
    var username = req.params.username;
    
    // log it to the console
    console.log("Getting user " + username + " details");
    
    for (let user of state.users) {
        if (user.username == username) {
            return res.json(user);
        }
    }
    
    return res.json("");
}
/**
 * My API Sandbox
 * 
 */

import { createUserHandler, getUsersHandler, getUserByUsernameHandler } from "users.mjs";



// Using stateful behaviour to simulate creating users
Sandbox.define('/users', 'POST', createUserHandler);

// Using stateful behaviour to simulate getting all users
Sandbox.define('/users', 'GET', getUsersHandler);

// Using named route parameters to simulate getting a specific user
Sandbox.define('/users/{username}', 'GET', getUserByUsernameHandler);

Sandbox.define('/users/{userId}','PUT', function(req, res){
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    let userId = req.params.userId;
    let updatedUserDetails = req.body;
    
    // Set the status code of the response.
    res.status(204);
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    for (let user of state.users) {
        if (user.userId == userId) {
            user.username = updatedUserDetails.username;
            res.status(200);
            return res.json(user);
        }
    }
    
    // Send the response body.
    res.json({
        "status": "ok"
    });
})

Sandbox.define('/users/{userId}','DELETE', function(req, res){
    let userId = req.params.userId;
    let index = undefined;
    
    for (let tempIndex in state.users) {
        if (state.users[tempIndex].userId == userId) {
            index = tempIndex;
        }
    }
    
    if (index == undefined) {
        res.status = 204;
        return res.json({
            "status": "Not found"
        });
    }
    
    state.users.splice(index);
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": "ok"
    });
})
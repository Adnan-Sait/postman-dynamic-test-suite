# Dynamic Test Suite Using Postman
Thie project contains the reources used in the [Dynamic Test Suite Using Postman](http://medium.com) article.

## Postman Resources
1. Import the Postman collection and the Environment.
2. Edit the url variable in the environment to point to the server on which the APIs are hosted.

## Sandbox Configuration (Optional)
The APIs can be created and run on your local system or an online REST API service can be used.
I used Sandbox for this. In case you want to use Sandbox, these steps can be followed.

1. Go to [Sandbox Home Page](https://getsandbox.com/).
2. Select *Blank* Sandbox.
3. Select the *Code* panel.
4. Replace the content of the *main.mjs* and *users.mjs* files with those present in this project.
5. Save the files.
6. Go back to the *Overview* panel and copy the link to one of the APIs.

    ![Sandbox Screenshot](/screenshots/Sandbox.png)

7. Copy the base path of the API.
    * <base_path>/users/[userId]
8. Paste this base path as the value of the *url* variable in the Postman environment.
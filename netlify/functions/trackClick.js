// /netlify/functions/trackClick.js

exports.handler = async function(event, context) {
    console.log("Yes button was clicked.");

    // This is where you could add additional logic, such as:
    // - Recording the click event to a database.
    // - Sending an email notification.
    // - Integrating with third-party APIs.
    // - Or any other server-side logic you need to execute in response to the click.

    // The function then returns a response with a status code of 200 (OK),
    // and a body containing a JSON object with a custom message.
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Click recorded" })
    };
};

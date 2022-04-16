export async function onRequestPost({request, env}) {
    try {

        const formData = await request.formData(); // formData cannot be directly accessed but is a promise

        const body = {}; // entries in formData are in pair form, therefore we move to obj form
        for (const entry of formData.entries()) {
          body[entry[0]] = entry[1];
        }

        const urlfy = obj => // helper function to encode for x-www-form-urlencoded for API
            Object.keys(obj)
                .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
                .join("&");


        let user_data = { // hardcoded for sample. Remember sandbox accounts can only send to own email
            from: "arne@green-coding.org",
            to: "arne@green-coding.org",
            subject: "New contact request!",
            html: `The following was received:\n\nName: ${body['your-name']}\nName: ${body['your-email']}\nSubject: ${body['your-subject']}\nBody ${body['your-message']}`,
        };

        let user_options = {
            method: "POST",
            headers: {
                "Authorization": "Basic " + btoa("api:" + env.MAILGUN_API_KEY),
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Length": user_data.length
            },
            body: urlfy(user_data)
        };
        // replace the URL with your mailgun URL
        await fetch("https://api.mailgun.net/v3/sandbox5d45ace6a898464f8f72a026541ac1fa.mailgun.org/messages", user_options)

        return new Response("success");
    } catch(err) {
        return new Response(err);
    }
}



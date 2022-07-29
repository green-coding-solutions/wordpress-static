# wordpress-static
Wordpress static for demo purposes

This site is live on Cloudflare at: https://wordpress-static.pages.dev/

It features a full transfer of a dynamic Wordpress site from Wordpress.com to a 
faster and greener Hosting on Serverless Cloudflare Pages with HUGO static site builder.

Also dynamic functionality in terms of a contact form has been implented through Cloudflare Functions.


To make the contact form work all you need is to change the target in /functions/api/send-mail.js
and also supply an API-Key as an environment variable in the Cloudflare Pages build configuration.

Also use the variable HUGO_VERSION to tell Cloudlfare to use at least 0.95.0 as a HUGO version to build
this repository. Older versions might not work.


## Energy cost for building this site

Although HUGO sites are extremly energy efficient compared to a Wordpress site for instance
building a site costs energy.

To raise awareness and train developers judgement about the orders of magnitude
we attach a `usage_scenario.yml` to every project.

You can find all the measurements on https://metrics.green-coding.org/ by searching
for the repository URL.

<img src="https://img.shields.io/badge/Energy%20cost%20for%20build-1.4%20J-orange">


## Showcase

Look at our Showcase where we analyze the data: https://www.green-coding.org/showcases/wordpress-vs-hugo

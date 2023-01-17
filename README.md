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


## OpenEnergyBadge

Although HUGO sites are extremly energy efficient compared to a Wordpress site for instance
building a site costs energy.

To raise awareness and train developers judgement about the orders of magnitude
we attach a `usage_scenario.yml` to every project.

<a href="https://metrics.green-coding.berlin/stats.html?id=8ed2c0b8-78ed-4616-8aee-e1a5fd7cdd0d"><img src="https://api.green-coding.berlin/v1/badge/single/8ed2c0b8-78ed-4616-8aee-e1a5fd7cdd0d?metric=RAPL"></a>

## Case Studies

Look at our case studies where we analyze the data: https://www.green-coding.org/case-studies/wordpress-vs-hugo-cloudflare/


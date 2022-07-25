# Unopass

An Open Source Passwordless OAuth Client to eliminate Passwords for good

---

## What is Unopass?

**Unopass** is an open source project aimed to eliminate passwords for good. The Hassle of remembering passwords is a huge problem when the number of services in the internet has increased manyfold. Couple that with data leaks and password breaches, it is time to change the way we authenticate and authorize users.

One elegant approach would be to ditch the **WHAT-YOU-KNOW** and use the **WHAT-YOU-HAVE** approach, like a physical card or a mobile app. And an addon to it would be to use Oauth instead of traditional auth baked into each website. In theory an OAuth Approach is easy to maintain and keep track of all the services that are using it and access can be easily granted or revoked.

And **Unopass** is trying to build a complete Open Source, Passwordless OAuth Provider that would eliminate the pain in authentication and authorization. This project is a big undertaking and requires an elaborate set of applications, servers and components to be built so it could be used everywhere and be accessible to everyone. So, instead of being a one of repo it is an Organisation and you may check it here on Github

I [Dhanush G](https://github.com/dnashh) am the first developer of this project and I intend to keep it open source and expect help from the community. Feel free to contact me via twitter [@dna_shh](https://twitter.com/dna_shh)

## The Plan

Inorder to provide a complete end to end open source solution the required components that need to be built are:

1. An OAuth Client Built with Node.Js and Express which can handle Authorization and redirects for Authenticating 3rd Party Applications.
1. A Client App, Browser Extension or a Physical Card which can be used to authenticate users providing way towards a passwordless entry.
1. Various SDKs to Integrate the Client and Server with different Apps and Services.

Description:

The app flow is as follows:

1. A user want to send a mass email to get feedback for the company's service/product.
2. They visit the app URL and authenticate via a Google Auth page, and they are returned to the app.
3. The user click the 'add credits' button to add credits to their account.
4. By clicking the button, the user see a stripe payment pop-up and pay money.
5. Once the payment processes, the user is credited to their account.
6. The user clicks the '+' button to create a new survey.
7. The user fills out the form and customers' email address, and then send out via SendGrid's API.
8. A credit is reduced from the user's account.
9. A webhook is running to catch event notification from SendGrid.
10. Survey replies are stored in the database (MondoDB) for the appropriate survey and recipient.
11. The user who created the survey can view response records at any time via the app dashboard.


Feature:

 Node.js / Express.js API backend
 React / Redux frontend
 Google OAuth authentication
 MongoDB data storage with Mongoose
 Stripe API payments
 SendGrid API for mass emails and tracking
 Basic styling via Materialize CSS
 
 

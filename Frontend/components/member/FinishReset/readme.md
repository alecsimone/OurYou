# [The Finish Reset Component](FinishReset.tsx)

**Allows the member to reset their password. The component must be on a page with a "code" query parameter which will be passed with the reset mutation to verify that the user has access to the email address in question. The component shows a form with email, password, and confirm password fields. When submitted, it changes the user's password to the newly entered one, logs the user in, and redirects them to the homepage.**

## [useFinishReset](useFinishReset.ts)

1. Gets the code query parameter and makes sure it's a string ([getResetCode.ts](./getResetCode.ts))
1. Establishes a resetError state that will be passed back to the main component to alert the user to any errors
1. Creates a logIn mutation that can be called in the onCompleted block of the resetPassword mutation ([useLogInForCallback.ts](./useLogInForCallback.ts)). This mutation uses the email and password provided to the resetPassword form to log the member in, and if it's successful, it redirects the member to the homepage.
1. Creates the resetPassword mutation. On completion, this mutation will call the logIn mutation if the reset was successful. If it was unsuccessful, it updates the resetError to let the user know what happened.
1. Calls useForm to get the pieces needed to make the form
1. Makes the email, password, and confirm password fields for the form
1. Returns formCreator, formFields, and resetError to the FinishReset component.

## [Features](FinishReset.test.tsx)

### It renders the necessary form fields and lets the user type in them

- Just checks that all the expected parts of the form are present and can be typed in

### It disables the submit button if all inputs are not valid

- Grabs the submit button and makes sure it's disabled to start
- Types a couple characters in each field, then makes sure the submit button is still disabled
- Types a valid input in each field, then makes sure the submit button is now enabled

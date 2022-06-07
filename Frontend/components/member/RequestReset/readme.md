# [The Request Reset Component](RequestReset.tsx)

**A form with one input, for an email address. When submitted, this form calls a mutation that begins the password reset process. The server will generate a reset token and email the provided email address (assuming an account exists for it), a link to finish resetting their password.**

Note that this component lives inside the [LogIn](../LogIn/LogIn.tsx) component. When a user clicks the "Forgot password?" button in that component, it switches to rendering this form instead.

## [useRequestReset](useRequestReset.ts)

1. Creates the requestPasswordReset mutation which will be called when the form is submitted
1. Handles the resetRequested state that indicates to the user that their reset request has been received
1. Calls the useForm hook to get the pieces needed to make the form
1. Makes the email field for the form
1. Returns formCreator, formFields, and resetRequested to the RequestReset component

## [Features](RequestReset.test.tsx)

### It renders the necessary form fields and lets the user type in them

- Just checks that all the expected parts of the form are present and can be typed in

### It disables the submit button if all inputs are not valid

- Grabs the submit button and makes sure it's disabled to start
- Types a couple characters in the email field, then makes sure the submit button is still disabled
- Types a valid email in the email field, then makes sure the submit button is now enabled

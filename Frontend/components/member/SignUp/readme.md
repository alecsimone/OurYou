# [The SignUp Component](SignUp.tsx)

**A form that allows the user to sign up for a new account. Signing up requires providing an email and choosing a display name and password.**

## [useSignUp](useSignUp.ts)

This hook handles the following functionality:

1. Creates a signUpError message state that will hold any errors from the createMember callbacks
1. Creates a createMember mutation which will be called when the form is submitted
1. Sets up the initialState for the form
1. Creates an errorTranslator function that turns expected errors from the createMember mutation into a more readable format
1. Passes the initialState, createMember mutation, and errorTranslator to the [useForm](../../foundation/Form/readme.md) hook, which returns a state object, state update function, and formCreator HOC
1. Creates the form fields this form will use
1. Makes a form out of the formCreator and formFields
1. Returns the form and the error message state to the SignUp component

So basically, this hook takes in a closeModal function, sets up initial state and a submit callback for the form, then sets up all the fields the form will have, and returns a formCreator HOC as well as the formFields which will go in it.

## [Features](SignUp.test.tsx)

### It renders the necessary form fields and lets the user type in them

- Just checks that all the expected parts of the form are present and can be typed in

### It disables the submit button if all inputs are not valid and tells the user why

- Grabs the submit button and makes sure it's disabled to start
- Types a couple characters in each form field, then makes sure the submit button is still disabled
- Checks that the requirement text is shown explaining why the input is invalid
- Types a valid input in each form field, then makes sure the submit button is now enabled

### It creates a new member with valid inputs

- Enters valid inputs into all fields, then triggers the submit button
- MockedProvider gets a success response
- Checks that we've routed to the /verification page

### It shows an error message when sign up fails

- Enters valid inputs into all fields, then triggers the submit button
- MockedProvider gets a duplicate email response
- Checks that we've displayed the proper error to the user

# [The SignUp Component](SignUp.tsx)

**A form that allows the user to sign up for a new account. Signing up requires providing an email and choosing a display name and password.**

## [useSignUp](useSignUp.ts)

This hook handles the following functionality:

1. Creates a createMember mutation which will be called when the form is submitted
1. Sets up the initialState for the form
1. Creates an errorTranslator function that turns expected errors from the createMember mutation into a more readable format
1. Passes the initialState, createMember mutation, and errorTranslator to the [useForm](../../foundation/Form/readme.md) hook, which returns a state object, state update function, and formCreator HOC
1. Creates the form fields this form will use
1. Returns the formCreator HOC and the formFields to the SignUp component

So basically, this hook takes in a closeModal function, sets up initial state and a submit callback for the form, then sets up all the fields the form will have, and returns a formCreator HOC as well as the formFields which will go in it.

## [Features](SignUp.test.tsx)

### It renders the necessary form fields and lets the user type in them

- Just checks that all the expected parts of the form are present and can be typed in

### It disables the submit button if all inputs are not valid

- Grabs the submit button and makes sure it's disabled to start
- Types a couple characters in each form field, then makes sure the submit button is still disabled
- Types a valid input in each form field, then makes sure the submit button is now enabled

We need to do a lot more testing here, but I'm not sure how. The features I'd like to test are:

- Alerts the user when they've entered an invalid value. The "toBeVisible" check is failing for the .requirements div here because it's not getting display: none turned off. I believe this is because jest can't handle the ~ selector in our CSS which accomplishes this
- I can't figure out how to test the onCompleted and onError callbacks for useMutation

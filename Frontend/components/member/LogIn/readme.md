# [The LogIn Form](LogIn.tsx)

**A form that allows the user to log in to their account. Logging in requires providing an email and a password.**

## [useLogIn](useLogIn.ts)

This hook handles the following functionality:

1. Creates a logIn mutation which will be called when the form is submitted
1. Sets up the initialState for the form
1. Passes the initialState, createMember mutation, and errorTranslator to the [useForm](../../foundation/Form/readme.md) hook, which returns a state object, state update function, and formCreator HOC
1. Creates the form fields this form will use
1. Returns the formCreator HOC and the formFields to the LogIn component

So basically, this hook sets up initial state and a submit callback for the form, then sets up all the fields the form will have, and returns a formCreator HOC as well as the formFields which will go in it.

Please note: Keystone.js's log in mutation is weird in that it fails successfully. That is, when you provide invalid credentials, the mutation successfully completes, but the data returned indicates that the log in failed. This requires special handling, but that handling has to be done within the useForm hook so that it has access to the setError function. Thus the handling for a failed log in is hard coded into the useForm hook. This is an unsatisfying way of handling that, but it's the best I was able to come up with so far.

## [Features](LogIn.test.tsx)

### It renders the necessary form fields and lets the user type in them

- Just checks that all the expected parts of the form are present and can be typed in

### It disables the submit button if all inputs are not valid

- Grabs the submit button and makes sure it's disabled to start
- Types a couple characters in each form field, then makes sure the submit button is still disabled
- Types a valid input in each form field, then makes sure the submit button is now enabled

# [The SignUp Component](SignUp.tsx)

**A form that allows the user to sign up for a new account. Signing up requires providing an email and choosing a display name and password.**

## [useSignUp](useSignUp.ts)

This hook handles the following functionality:

1. Sets up the state for the Sign Up form and creates a handleFormUpdate function that it passes back to the SignUp component to update the form
1. Creates the submitForm function which it passes back to the component.
1. Handles the createMember mutation and its onCompleted and onError hooks. onCompleted, it routes to the /verify page. onError, it passes an error back to the component.

So ultimately, this form passes back to the component a formState object (which holds all the form data), a handleFormUpdate function (which handles updating the form data), a submitForm function (which submits the form), and a signUpError variable (which holds any error message returned by the createMember mutation).

## [Features](SignUp.test.tsx)

### It ... Description

- Feature 1 that Test 1 Tests

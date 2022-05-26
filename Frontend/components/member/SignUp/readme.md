# [The SignUp Component](SignUp.tsx)

**A form that allows the user to sign up for a new account. Signing up requires providing an email and choosing a display name and password.**

## [useSignUp](useSignUp.ts)

This hook handles the following functionality:

1. Sets up the state for the Sign Up form and creates a handleFormUpdate function that it passes back to the SignUp component to update the form
1. Creates the submitForm function which it passes back to the component.
1. Handles the createMember mutation and its onCompleted and onError hooks. onCompleted, it routes to the /verify page. onError, it passes an error back to the component.

So ultimately, this form passes back to the component a formState object (which holds all the form data), a handleFormUpdate function (which handles updating the form data), a submitForm function (which submits the form), and a signUpError variable (which holds any error message returned by the createMember mutation).

## [Features](SignUp.test.tsx)

### It renders the necessary form fields and lets the user type in them

- Just checks that all the expected parts of the form are present and can be typed in

We need to do a lot more testing here, but I'm not sure how. The features I'd like to test are:

- Alerts the user when they've entered an invalid value. The "toBeVisible" check is failing for the .requirements div here because it's not getting display: none turned off
- Does not submit form with invalid values. I can't figure out how to test if the form was submitted properly because the submit function comes from the custom hook, not a prop
- I can't figure out how to test the onCompleted and onError callbacks for useMutation

# [The LogIn Form](LogIn.tsx)

**A form that allows the user to log in to their account. Logging in requires providing an email and a password.**

## [useLogIn](useLogIn.ts)

This hook handles the following functionality:

1. Sets up the state for the Log In form and creates a handleFormUpdate function that it passes back to the LogIn component to update the form
1. Creates the submitForm function which it passes back to the component.
1. Handles the authenticateMemberWithPassword mutation and its onCompleted and onError hooks. This mutation is a little strange, because it fails successfully. That is, if you enter invalid credentials, it returns a MemberAuthenticationWithPasswordFailure type instead of a MemberAuthenticationWithPasswordSuccess type. So we can get an error from the onCompleted hook too, which means we have to check the \_\_typename of the returned data.

So ultimately, this form passes back to the component a formState object (which holds all the form data), a handleFormUpdate function (which handles updating the form data), a submitForm function (which submits the form), and a logInError variable (which holds any error message returned by the createMember mutation).

## [Features](LogIn.test.tsx)

### It renders the necessary form fields and lets the user type in them

- Just checks that all the expected parts of the form are present and can be typed in

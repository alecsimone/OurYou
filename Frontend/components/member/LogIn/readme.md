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

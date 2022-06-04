# [The useForm hook](useForm.tsx)

**Handles all the functionality needed to set up a form.**

This hook does the following things:

1. Creates a state object based on the initialState passed into the hook
1. Creates a handleFormUpdate function that is responsible for updating that state object
1. Creates a ref for the form and uses it to check that all the inputs in the form are valid. If they aren't, the submit button will be disabled.
1. Maintains an error state for the form, and if there is an error, it will be displayed at the top of the form.
1. Takes in a callBack mutation and calls it from the form's onSubmit listener
1. Creates a formCreator HOC that can be passed back to the component that calls this hook. That HOC takes an array of FormFields as children and creates a form with all of our functionality.

## Sub-Components

- **FormField**: Creates a form field given a long list of options

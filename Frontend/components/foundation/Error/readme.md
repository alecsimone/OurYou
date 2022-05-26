# [The Error Component](Error.tsx)

**Renders an error alert into the modal. It can be passed either an object with a message property or a message string, and will display that message with the word "Error:" and some styling to let the user know it's an error.**

## [Features](Error.test.tsx)

### It renders the error message when passed a string as a prop

- If the Error component gets a string as a prop, it will use that string as the error message

### It renders the error message when passed an object with a message property as a prop

- If the Error component gets an object with a message property as a prop, it will use that string as the error message

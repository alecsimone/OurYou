# [The Modal](Modal.tsx)

**Takes a child and renders it, via React Portals, into a modal that covers the screen. This component also takes a function to close the modal (because whatever component calls the modal will need to know when it closes), and attaches that function to a close button on the modal and to the escape key.**

The modal expects to find an element with an ID of "modalHolder" into which it can portal. If it does not find this element, it will create it. This is especially helpful for testing, during which I was unable to get the modal to find the #modalHolder, but it does add an extra level of robustness in case the #modalHolder doesn't show up for some reason.

## [useModal](useModal.ts)

Takes the close function passed into the Modal component as a prop and attaches it to a listener on the escape key.

## [Features](Modal.test.tsx)

### It exists and calls close with the button

- First we check that the modal properly renders its child
- Then we make sure that clicking the close button closes the modal

### It exists and calls close with the escape key

- This one is the same as the last one, except we use the escape key to close the modal instead of the button.

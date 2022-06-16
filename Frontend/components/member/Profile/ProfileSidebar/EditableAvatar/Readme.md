# [The EditableAvatar](EditableAvatar.tsx)

**Displays the avatar and gives the member an interface to change it, which accepts either an uploaded image or a link to an image.**

## [useEditableAvatar](useEditableAvatar.ts)

Returns a form, the avatar, and the editingAvatar and setEditingAvatar state values that determine whether to show the "Change Avatar" button or the edit avatar interface.

This hook creates the setAvatar mutation and passes it to the useForm hook, along with a cancel editing function. It then makes two form fields, one for uploading images and one for linking to one, and a potential error message to alert the user if they've both uploaded an image and linked to one. It then combines all this into the form it returns.

## [Features](EditableAvatar.test.tsx)

### It displays the member's avatar and a change avatar button by default

### It shows the edit avatar form after clicking the Change Avatar button

- Make sure the upload button, link input, cancel button, and submit buttons are all there, and that the link input can be typed in.

### It closes the edit avatar form when clicking the cancel button

### It disables the submit button when something other than a url is entered in the link input

- Type a random string into the link input, make sure the submit button is disabled
- Type a url into the link input, make sure the submit button is enabled

### It shows an error when both a link is entered and a file is uploaded Name

- This one's a little tricky, we have to mock both the URL.createObjectURL method on the window object and then create a fake file which we can upload. But we do that, and then we type a link in the linkInput
- This should show an error message, and we check that it does

### It disables the submit button when the entered link is the same as the current avatar

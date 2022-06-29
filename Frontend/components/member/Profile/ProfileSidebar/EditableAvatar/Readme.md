# [The EditableAvatar](EditableAvatar.tsx)

**Displays the avatar and gives the member an interface to change it, which accepts either an uploaded image or a link to an image.**

## [useEditableAvatar](useEditableAvatar.ts)

Returns a form, the avatar, and the editingAvatar and setEditingAvatar state values that determine whether to show the "Change Avatar" button or the edit avatar interface.

This hook creates the setAvatar mutation and passes it to the useForm hook, along with a cancel editing function. It then makes two form fields, one for uploading images and one for linking to one, and a potential error message to alert the user if they've both uploaded an image and linked to one. It then combines all this into the form it returns.

## Sub-Components

- **[EditAvatarForm](./EditAvatarForm/EditAvatarForm.tsx)**: The form which is shown when EditableAvatar is in edit mode. It allows you to edit the avatar either by adding a link to an already existing image or uploading a new image file. The form allows you to do only one of these things at a time.

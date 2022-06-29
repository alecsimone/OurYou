# [The Borderless Textarea](BorderlessTextarea.tsx)

**This is a textarea that's meant not to look like one. To the user, it should appear as though this is just regular text, until they click on it, at which point they realize it's an editable textarea.**

Basically we just hide the borders and disable resize on the textarea, then make the element submit its changes through a function passed in as a prop when the textarea loses focus (or when the user presses Enter).

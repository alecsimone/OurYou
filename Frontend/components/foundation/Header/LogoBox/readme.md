# [The Logo Box](LogoBox.tsx)

**Renders our logo (and if we're above the mobile breakpoint, our name) in the header. Below the mobile breakpoint, clicking the logo opens the nav sidebar. Above it, it (as well as the name) links to the homepage. Note that the sidebar toggle functionality lives in the [Layout](../../Layout/readme.md) component, as it needs to communicate with the nav sidebar**

## [Features](LogoBox.test.tsx)

### It renders our logo and name

- Above the mobile breakpoint, both the logo and name should be visible

### It doesn't render the name below the mobile breakpoint

- Below the mobile breakpoint, the name should have the css property `display: none`, and thus should not be visible

### It calls toggleNavSidebar when the logo is clicked

- Below the mobile breakpoint, clicking the logo should call the toggleNavSidebar function

### It routes to the homepage when clicked above the mobile breakpoint

- Above the mobile breakpoint, clicking either the logo or the name should route the user to the homepage

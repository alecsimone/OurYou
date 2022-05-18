# [Functional Icon](FunctionalIcon/FunctionalIcon.tsx)

**Provides a wrapper for our icons so we can easily give them all the functionality we need without having to apply it individually to each of them.**

Note that this component takes a child and renders it inside an svg tag, which means all icons should be inside fragments instead of inside an svg tag.

```typescript
interface FunctionalIconProps {
  iconName: string; // Will be used for className and title text (unless titleTextReplacement provided)
  extraClass?: string; // Added to the className after the iconName
  titleTextReplacement?: string; // Replaces the iconName as the title text for the SVG
  onClick?: MouseEventHandler<SVGSVGElement>; // Handler for the SVG onClick event
  children: ReactNode; // The actual icon you want to render
}
```

## [Features](FunctionalICon/FunctionalIcon.test.tsx)

### It passes its icon name as a title with the first letter capitalized

- The only required prop on FunctionalIcon is an iconName. It takes this name, capitalizes the first letter, and passes it as a title for the svg.

### It overrides the icon name when given a titleTextReplacement prop

- If passed a titleTextReplacement prop, it should use that as the title text and not the iconName

### It calls its onClick function

- FunctionalIcon can be passed an onClick function, which it should call when it's clicked.
- This should also work when it's focused and the user hits enter, but we haven't implemented that yet.

### It adds its extraClass prop as a class

- If passed an extraClass prop, it should add that as an extra class

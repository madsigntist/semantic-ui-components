# Semantic UI Components

Accessible **Tabs** and **Accordion** components built with semantic HTML, CSS, and vanilla JavaScript — no frameworks, no dependencies.

## Demo

The project contains two interactive UI components on a single page:

- **Tabs** — switch between content panels using a tab bar
- **Accordion** — expand and collapse content sections independently

Both components are keyboard-friendly, screen-reader accessible, and use real ARIA relationships.

## What's Inside

| File         | Purpose                                              |
| ------------ | ---------------------------------------------------- |
| `index.html` | Semantic markup for both components                  |
| `styles.css` | Layout, visual states, and CSS transitions           |
| `script.js`  | DOM selection, event listeners, and state management |

## Key Concepts

- **Semantic HTML** — `<main>`, `<header>`, `<section>`, `<h1>`–`<h3>`, and `<button>` used instead of generic `<div>`/`<span>` tags
- **ARIA relationships** — `aria-controls`, `aria-labelledby`, `aria-selected`, and `aria-expanded` connect controls to their content
- **DOM selection** — `querySelectorAll()` and `getElementById()`
- **Event listeners** — `addEventListener('click', ...)`
- **UI state via the DOM** — active state lives in classes, attributes, and the `hidden` property
- **classList methods** — `add()`, `remove()`, `toggle()`
- **Attribute updates** — `setAttribute()` keeps ARIA state in sync
- **BEM naming** — block, element, and modifier class conventions throughout
- **CSS transitions** — hover, focus, and active visual state changes
- **Keyboard accessibility** — focus styles and native button interactivity
- **Arrow-key tab navigation** — `ArrowRight` and `ArrowLeft` move focus between tabs, wrapping at each end; the focused tab is activated automatically

## Keyboard Navigation

The tabs component follows the [WAI-ARIA Tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) for keyboard interaction:

| Key          | Behavior                                                      |
| ------------ | ------------------------------------------------------------- |
| `ArrowRight` | Move focus to the next tab and activate it (wraps around)     |
| `ArrowLeft`  | Move focus to the previous tab and activate it (wraps around) |

Focus and activation are handled together — pressing an arrow key both moves focus to the new tab button and displays its panel.

## Getting Started

No build step required. Open `index.html` in a browser.

```bash
# or serve locally
npx serve .
```

## License

MIT

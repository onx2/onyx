# Onyx

## A component library written using Vue 3.x and Vite.

The goal is to create a lightweight / performant, customizable, and accessible component library for vue 3.x users.

---

## Development

This project is in a _very_ pre-alpha state, but ontributions are welcome and encouraged! To get started, fork this repo and follow these steps, filling in the info as needed.

```bash
$ git clone https://github.com/<YOUR_INFO>/onyx.git
$ cd onyx
$ yarn
$ yarn dev
```

## Roadmap

### Ready for Alpha

- Button
- Surface
- SurfaceHeader
- SurfaceBody
- SurfaceFooter

### In Progress

- Grid / GridRow / GridColumn
- Input

### Up Next

- Avatar
- Textarea
- List / ListItem

### Backlog

- Badge
- Calendar
- Chip
- DatePicker
- Dialog
- Divider
- Icon
- Menu
- Overlay
- Pagination
- ProgressLinear / ProgressCircular
- Snackbar
- Stepper
- Table
- Tabs
- TimePicker
- Treeview

Currently in a pre-alpha state, theres a lot to do still. Here are few things in no particular order...

## Todo

- Improve documention _(More automation and standardization)_
- Improve TypeScript declarations
- Improve Accessibility _(Constant WIP)_
- Export as ESM for library _(Waiting for Vite updates)_
- Expand component library offerings
- CI / CD
- Tests
- Themeing / Customization
- Breakpoints / Tablet & Mobile friendliness

## Notes

Components are all written using render functions and `defineComponent`. Functional components have been given a rehaul in 3.x, but because there isn't really a performance benefit to writing them anymore this library won't use them.

[Check out the RFC](https://github.com/vuejs/rfcs/blob/functional-async-api-change/active-rfcs/0007-functional-async-api-change.md#motivation)

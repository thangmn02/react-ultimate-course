# React structure
- Component: Card.tsx, DropdownField.tsx
- React Component: Login.tsx, Register.tsx
- util function: randomColor.ts, openNewTab.ts

### structure by folder
- components/
    Card.tsx
    DropdownField.tsx
- pages/
    Login
      Login.tsx
    Register
      Register.tsx
- utils/
    randomColor.ts
    openNewTab.ts

### structure by feature
- configs/
- components/
- features/
    Login
      components/
        DropdownField.tsx
      utils/
        validate.ts
        openNewTab.ts
      Login.tsx
    Register
      components/
        DropdownField.tsx
        Card.tsx
      utils/
        validate.ts
        openNewTab.ts
      Register.tsx

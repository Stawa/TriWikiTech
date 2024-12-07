# Development Guidelines

You are an expert in TypeScript, React, Remix, React Router, React Icons, and Tailwind, with a deep understanding of best practices and performance optimization techniques in these technologies.

## Code Style and Structure

- Write concise, maintainable, and technically accurate TypeScript code with relevant examples
- Use functional components and hooks; avoid class components
- Favor iteration and modularization to adhere to DRY principles and avoid code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError)
- Organize files systematically: each file should contain only related content, such as exported components, subcomponents, helpers, static content, and types

## Naming Conventions

- Use PascalCase for component files and components (e.g., `NavigationLink.tsx`)
- Use lowercase with dashes for directories (e.g., `components/auth-wizard`)
- Use camelCase for functions and variables
- Favor named exports for components and functions

## TypeScript Usage

- Use TypeScript for all code; prefer interfaces over types for their extendability
- Define proper types for component props using interfaces
- Use type assertions sparingly and only when necessary
- Leverage TypeScript's built-in utility types when appropriate (e.g., `Partial<T>`, `Pick<T>`)

## Remix and React Patterns

- Use Remix's built-in components (`Link`, `Form`, `useLoaderData`, etc.) for routing and data handling
- Implement proper error boundaries and loading states
- Follow Remix's nested routing patterns and data loading conventions
- Use React hooks effectively and create custom hooks when needed
- Keep components focused and single-responsibility

## UI and Styling

- Use Tailwind CSS for styling with a utility-first approach
- Implement responsive design using Tailwind's responsive modifiers
- Follow a mobile-first approach
- Use React Icons for consistent iconography
- Maintain dark mode support using Tailwind's dark mode classes

## Performance Optimization

- Implement proper code splitting using Remix's route-based splitting
- Use lazy loading for heavy components when appropriate
- Optimize images: use appropriate formats, include size data, implement lazy loading
- Implement proper caching strategies using Remix's caching mechanisms
- Keep bundle sizes small by avoiding unnecessary dependencies

## Key Conventions

- Optimize Web Vitals (LCP, CLS, FID) using tools like Lighthouse
- Write meaningful commit messages
- Document complex logic and important decisions
- Follow accessibility best practices
- Test critical user paths and components

## File Structure

```
app/
├── components/     # Reusable components
├── routes/         # Remix routes
├── styles/         # Global styles
├── utils/         # Helper functions
├── types/         # TypeScript types/interfaces
└── root.tsx       # Root component
```

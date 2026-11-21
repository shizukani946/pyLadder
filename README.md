# pyLadder

![CI](https://img.shields.io/github/actions/workflow/status/shizukani946/pyLadder/ci.yml?branch=main&label=CI) ![React](https://img.shields.io/badge/react-18+-61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6) ![License](https://img.shields.io/github/license/shizukani946/pyLadder?color=blue)

A collection of accessible, headless UI primitives for React. pyLadder exports Button and Card components plus a useToggle hook, all with full TypeScript generics, forwardRef support, and tree-shakeable ES module exports. Tested with @testing-library/react and Vitest. No CSS runtime required.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

## Features

- Tree-shakeable ES modules -- import only Button, Card, or useToggle
- useToggle hook for boolean state management with useCallback
- Button component with primary/secondary/ghost variants and sm/md/lg sizes
- Full TypeScript types with generic component props
- Built with tsup for CJS + ESM dual output with .d.ts files
- All components support forwardRef for ref forwarding
- Tested with @testing-library/react and Vitest

## Philosophy

pyLadder was built with the following principles:

- **Simplicity**: Minimal dependencies, clear code, easy to understand and modify
- **Correctness**: Comprehensive tests, type safety, and proper error handling
- **Performance**: Efficient algorithms, minimal overhead, fast startup
- **Maintainability**: Clean structure, documentation, and consistent code style

The goal is to provide a solid foundation that you can build upon, not a black box you have to work around.

## Prerequisites

- React 18 or higher (peer dependency)
- Node.js 16 or higher for development

## Installation

```bash
npm install pyLadder
# or
yarn add pyLadder
# or
pnpm add pyLadder
```

## Usage

```tsx
import { Button, Card } from 'pyLadder';
import { useToggle } from 'pyLadder';

function App() {
  const [open, toggle] = useToggle(false);

  return (
    <Card title="Demo Component">
      <Button variant="primary" size="md" onClick={toggle}>
        {open ? 'Close' : 'Open'}
      </Button>
      {open && <p>Content is now visible!</p>}
    </Card>
  );
}
```

## Project Structure

```
pyLadder/
├── src/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── useToggle.ts
│   └── index.ts
├── tests/
│   └── Button.test.tsx
├── package.json  tsconfig.json  tsup.config.ts
├── README.md  LICENSE  CHANGELOG.md  CONTRIBUTING.md  CODE_OF_CONDUCT.md
├── .github/
│   ├── workflows/ci.yml
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── PULL_REQUEST_TEMPLATE.md
└── .gitignore
```

## Running Tests

```bash
npm test
# watch mode
npm test -- --watch
```

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

Quick start:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes and run tests (see [Running Tests](#running-tests) above)
4. Commit with a clear message: `git commit -am 'Add: my feature'`
5. Push to your fork: `git push origin feature/my-feature`
6. Open a Pull Request

Please ensure all tests pass before submitting a pull request.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.

## License

This project is licensed under the MIT -- see the [LICENSE](LICENSE) file for details.

Copyright (c) 2026 maya park.

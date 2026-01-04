# React Performance Training Session

A hands-on repository and workshop material for understanding, measuring, and improving performance in React applications.

> This repo contains examples, exercises, demos, and notes used during a React performance training session. The goal is to give developers practical tools and techniques to profile and optimize React apps at component, rendering, and build levels.

---

## Table of contents

- [About](#about)
- [Workshop goals](#workshop-goals)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Workshop agenda & topics](#workshop-agenda--topics)
- [Exercises & challenges](#exercises--challenges)
- [How to measure & profile](#how-to-measure--profile)
- [Tips & best practices](#tips--best-practices)
- [Resources](#resources)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About

This repository is built to teach practical React performance techniques through code examples and interactive exercises. It covers measuring performance, diagnosing bottlenecks, and applying targeted optimizations while preserving maintainability and developer experience.

---

## Workshop goals

- Learn how to measure performance (browser tools, React DevTools profiler).
- Diagnose render & reconciliation issues.
- Apply optimizations: memoization, virtualization, code-splitting, lazy loading, selective rendering, web vitals improvements.
- Understand trade-offs and anti-patterns.
- Practice.

---

## Prerequisites

- Node.js (LTS recommended)
- npm or yarn
- Basic familiarity with React (hooks, components, props/state)
- Familiarity with bundlers (Webpack, Vite) is helpful but not required

---

## Getting started

1. Clone the repo

   ```bash
   git clone https://github.com/Suriya-Devaraj-V/react-performance-training-session.git
   cd react-performance-training-session
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the dev server (if demo apps exist)
   ```bash
   npm run dev
   # or
   npm start
   ```

---

## Project structure

A typical structure used in this repo (adjust if your repo differs):

- `src/` — main application source code and demo apps
- `package.json` — scripts and dependencies

If you open the repository you'll find one or more demo apps and exercise folders — each is self-contained and can be run independently.

---

## Workshop agenda & topics

The workshop is organized around practical problems and solutions:

1. Introduction to performance fundamentals
   - Perceived vs actual performance
   - Metrics (TTFB, FCP, LCP, TTI, CLS)
2. Measuring performance
   - Browser DevTools (Performance panel)
   - React DevTools Profiler
3. Render profiling & diagnosis
   - Identifying unnecessary renders
   - Props/state change cascades
4. Component-level optimizations
   - useMemo, useCallback, React.memo
   - Avoiding inline functions/objects where appropriate
5. Code-splitting & lazy loading
   - React.lazy, Suspense, dynamic imports
6. Build & delivery optimizations
   - Tree shaking, smaller dependencies, image & asset optimization
7. Caching & data fetching strategies
   - Client-side caches, SWR/React Query concepts
8. Putting it together — profiling a real app & applying fixes

---

## Exercises & challenges

Exercises are split by difficulty:

- Beginner
  - Measure baseline performance of a simple app using DevTools and React Profiler.
  - Replace expensive derived calculations with useMemo.
- Intermediate
  - Optimize a list rendering with virtualization.
  - Implement code-splitting to reduce initial bundle size.
- Advanced
  - Analyze a real-world demo, remove unnecessary rerenders, and measure improvements.
  - Implement data fetching caching and observe effect on rendering and network usage.

Each exercise should include:

- A starter folder (e.g. `exercises/01-start`)
- A solution folder (e.g. `exercises/01-solution`)
- A brief README with steps and the expected learning outcome

---

## How to measure & profile

Quick pointers:

- React DevTools Profiler: record interactions and inspect “why did this render?”
- Chrome/Edge/Firefox Performance tab: measure CPU usage, paint, layout, long tasks
- Lighthouse: audit for performance, accessibility, best practices
- Web Vitals (local or production): measure user-centric metrics (FCP, LCP, CLS, FID/INP)
- Bundle analyzers: `source-map-explorer`, `webpack-bundle-analyzer`, or Vite plugin
- Network panel: check resource sizes and caching headers

Typical workflow:

1. Reproduce the slow interaction.
2. Profile with React DevTools to find expensive components.
3. Use browser Performance to find layout/paint/long tasks.
4. Apply targeted fixes and re-measure.

---

## Tips & best practices

- Measure before optimizing — don’t prematurely optimize.
- Prefer simple readable code; only optimize hot paths.
- Use React.memo and hooks judiciously (they add cognitive overhead).
- Move heavy computations off the main thread when possible (web workers).
- Keep components small and focused.
- Use virtualization for long lists and large DOM trees.
- Do lazy loading for rare routes or large non-critical components.
- Monitor performance in production — lab tests don’t always match user environments.

---

## Resources

- React official docs — Performance: https://reactjs.org/docs/optimizing-performance.html
- React DevTools Profiler: https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html
- Lighthouse: https://developers.google.com/web/tools/lighthouse
- Web Vitals: https://web.dev/vitals/
- "The Cost of JavaScript" — https://www.fastly.com/blog/the-cost-of-javascript
- react-window (virtualization): https://github.com/bvaughn/react-window
- react-virtualized: https://github.com/bvaughn/react-virtualized
- Bundle analyzer tools: `webpack-bundle-analyzer`, `source-map-explorer`

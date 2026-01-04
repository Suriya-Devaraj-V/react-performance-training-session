# React Performance Training Session

## Table of contents

- [About](#about)
- [Workshop goals](#workshop-goals)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Workshop agenda & topics](#workshop-agenda--topics)
- [Tips & best practices](#tips--best-practices)
- [Resources](#resources)

---

## About

This repository is built to teach practical React performance techniques through code examples and interactive exercises. It covers measuring performance, diagnosing bottlenecks, and applying targeted optimizations while preserving maintainability and developer experience.

---

## Goals

- Why Performance is important?
- How react works underthehood?
- Learn how to measure performance (browser tools, React DevTools profiler).
- Diagnose render & reconciliation issues.
- Apply optimizations: memoization, virtualization, code-splitting, lazy loading, selective rendering, web vitals improvements.

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

---

## Workshop agenda & topics

The workshop is organized around practical problems and solutions:

1. Introduction to performance (Theory).
   - Code optimization
     - Handling the Data (Data Structures)
     - Framework/library optimization
   - System Architecture
2. Measuring performance (Web)
   - Browser DevTools (Performance panel)
   - React DevTools Profiler
3. React Architecture
   - Trigger, Render & Commit
4. Component-level optimizations
   - useMemo, useCallback, React.memo
   - Avoiding inline functions/objects where appropriate
5. Code-splitting & lazy loading
   - React.lazy and Suspense.
6. Build & delivery optimizations
   - Tree shaking, smaller dependencies, image & asset optimization

## Resources

- React official docs — Performance: https://reactjs.org/docs/optimizing-performance.html
- React DevTools Profiler: https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html
- Web Vitals: https://web.dev/vitals/
- "The Cost of JavaScript" — https://www.fastly.com/blog/the-cost-of-javascript

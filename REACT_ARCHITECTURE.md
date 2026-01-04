# React Fiber Architecture (React v19)

> Overview  
> Fiber is the internal _**tree data structure**_ React uses to represent mounted and in-progress UI. It lets React split work into small units, pause, resume, and prioritize rendering—enabling concurrent/updatable UIs (time-slicing, interruptions, Suspense, transitions).

---

## 1. Fiber node (conceptual)

A Fiber node represents a component instance (function, class, host). Key fields:

```ts
interface Fiber {
  tag: number; // type of fiber (FunctionComponent, HostComponent, etc.)
  key: string | null;
  elementType: any; // component identity
  type: any; // resolved type (after lazy, context)
  stateNode: any; // local instance (DOM node, class instance)
  return: Fiber | null; // parent
  child: Fiber | null; // first child
  sibling: Fiber | null; // next sibling
  index: number;

  pendingProps: any; // new props to process
  memoizedProps: any; // last committed props
  memoizedState: any; // last committed state
  updateQueue: UpdateQueue | null;

  flags: number; // mutations/effects for this node
  subtreeFlags: number; // aggregated flags for subtree

  lanes: Lanes; // priorities for updates on this fiber
  childLanes: Lanes; // aggregated priorities of children

  alternate: Fiber | null; // current <-> work-in-progress pair
}
```

Two trees: the committed `current` tree and a mutable `work-in-progress` (WIP) tree. `alternate` links them.

---

## 2. Three-phase flow:

### Trigger Phase:

- Trigger Phase (State setter function / props changed)
  1. State batching and push them into queues.
  2. Scheduler schedules to render phase

### Render Phase:

- Render phase (pure, interruptible, Computation)
  1. Step - 2a
     - Create a new WIP Fiber node from the Current node
     - Add all the States into linked list (memoized state)
  2. Step - 2b
     - Diffing takes place (heuristic algo - Computation is just O(n))
     - Compare the current and WIP node
     - Updates the changes to fiber that were triggered

### Commit phase

- Commit phase (synchronous, non-interruptible)
  - Apply three ordered steps:
    1. Before mutation effects
    2. Mutations (DOM insertions, updates, removals)
    3. Layout effects (useLayoutEffect) run synchronously
  - Passive effects (useEffect) are scheduled after commit (microtask/ task queues).

---

## 3. Scheduler and Lanes (priority system)

- React uses a cooperative scheduler with "lanes" (bitmask) representing priority buckets:
  - Examples: Sync, InputDiscrete, UserBlocking, Normal, Low, Idle.
- Each update is assigned lanes; root tracks pending lanes.
- Scheduler picks highest priority lanes to render; lower priority work can be interrupted.
- API surface: startTransition lowers priority of updates, automatic handling for user input.

---

## 4. Updates and UpdateQueue

- Updates are queued on a fiber's `updateQueue`.
- During render, React processes the queue to compute new `memoizedState`.
- Batching: React groups updates to avoid redundant renders; automatic batching across events/async boundaries.

---

## 5. Effects handling

- Types: Passive (useEffect), Layout (useLayoutEffect), and legacy lifecycles.
- Passive effects run after paint, scheduled asynchronously.
- Layout effects run during commit after DOM mutations, synchronously before painting.

---

## 6. Concurrency features (how Fiber enables them)

- Time-slicing: break render into chunks; yield to host to keep UI responsive.
- Interruptibility: render work can be thrown away and retried at new priority.
- Suspense: render can "suspend" (throw a promise); scheduler attempts to render fallback and resume when resolved.
- Offscreen/Transitions: React can keep subtrees hidden (not committed) and resume them without blocking main updates.

---

## 7. Error boundaries and recovery

- Errors thrown during render are caught by nearest error boundary fiber.
- Fiber records an error and schedules an update to render fallback UI during next commit.

---

## 8. Implementation invariants (practical notes)

- Fiber nodes are lightweight allocations frequently created during render.
- `alternate` lets React reuse allocations across commits and reduces GC churn.
- Flags/subtreeFlags allow a single traversal during commit to apply changes efficiently.

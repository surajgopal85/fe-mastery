EVENT
   ↓
setState()
   ↓
React schedules update
   ↓
RENDER
"What should the UI be now?"
   ↓
RECONCILIATION
"What's different from before?"
   ↓
COMMIT
"Apply necessary DOM mutations."
   ↓
BROWSER

## INSIGHTS
React lets me describe UI as functions of state rather than manually mutating the DOM.

What that means:
a. It works in 3 phases: RENDER, RECONCILIATION, COMMIT _ DOM_MANIPULATION (dom mutation is a key aspect of commit phase)
    a1. RENDER == What should the UI be?
    a2. RECONCILIATION == How does that differ from before?
    a3. COMMIT / DOM MANIPULATION == Apply necessary changes.
    a4. NOTE: parent rendering can cause descendents to render WITHOUT DOM mutations - they will render because they are nested inside something that re-renders, even if they themselves do not change. 

A child is something rendered by a parent. Think of a component inside another component (i.e. Footer is inside App - written separately but refd in JSX)

When a component renders, by default React proceeds through the subtree returned NOTE: there are bailout methods we'll touch later. 

The process of a child rendering down the tree when it doesn't have props/state (like footer):

1. Renders again, produces its UI again.
2. React compares new and old UI, realizes no DOM mutation necessary.
3. It does nothing to the DOM node on commit. 

What react knows in render phase:
- Where a state update that initiated a call to re-render came from. 

What react does not know in render phase:
- What the Apps UI will look like after update.

Reason: state change could provide logic for other changes...so...

React executes with state change. Then component will return result of that state change.
React will understand dom tree to be different, reconcile, commit with dom manipulated. 
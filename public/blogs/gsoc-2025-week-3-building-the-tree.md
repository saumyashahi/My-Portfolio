---
title: "GSoC Week 3: Giving the Bricks a Brain"
excerpt: "This week, I moved from drawing individual bricks to building the 'brain' that manages how they all connect. I developed a BrickTreeManager to handle complex hierarchies, puzzle-like snapping, and tree management."
category: "DEVELOPER DIARY"
date: "2025-06-21"
slug: "gsoc-2025-week-3-building-the-tree"
author: "Saumya Shahi"
tags: "gsoc25, sugarlabs, react, data-structures, typescript"
image: "/assets/Images/GSOC.png"
---

## GSoC '25: From Drawing to Doing

If the last two weeks were about teaching the computer how to *draw* the Music Blocks, this week was about giving them a *brain*. A single brick isn't much use on its own; the magic happens when you start connecting them. My goal was to build the underlying system that manages all of those connections, which I've wrapped into a class called `BrickTreeManager`.

### More Than Just a List of Bricks

At first glance, it might seem simple: just keep track of which brick is connected to which. But the reality is much more complex. We need to support two distinct types of connections simultaneously:

1.  **Hierarchical Connections:** This is the standard parent-child relationship. When you drag a block of code, all the blocks nested inside it should come along for the ride.
2.  **Notch Connections:** This is the puzzle-piece connection. Bricks can snap together side-by-side, but only if their "notches" are compatible and available.

Balancing these two systems was the biggest challenge of the week. I ended up creating a dual-connection model where the hierarchy defines the main structure, while the notch connections add that satisfying, graph-like "snap" behavior.

### Merging and Splitting Trees

The `BrickTreeManager` is also responsible for what happens when connections change.

-   **Merging:** When you connect two separate bricks (or stacks of bricks), their individual "trees" need to merge into one single, larger tree.
-   **Splitting:** When you disconnect a brick, the system needs to be smart enough to figure out what new trees are formed. If you disconnect a parent block, all its children should stay connected to each other and form their own new, independent tree.

To manage this, every brick gets a unique ID, and every *tree* of bricks gets a dynamic ID that changes whenever a connection is made or broken. This keeps the state of the workspace clean and predictable.

### Trust, But Verify (with Tests)

A system this complex is prone to bugs. To counter this, I spent a huge amount of time writing a comprehensive test suite. I created tests for every possible scenario I could think of: simple connections, complex disconnections, hierarchical moves, notch validation, and all the weird edge cases in between. This not only ensures the code is robust but also gives me the confidence to refactor and add new features later without breaking everything.

This week was a deep dive into tree and graph data structures, and it pushed my TypeScript and algorithm design skills significantly. Now that the "brain" is in place, the next step is to connect it to the visual side and actually render the interactive trees in the workspace. It's starting to feel like a real application!

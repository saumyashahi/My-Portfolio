---
title: "GSoC Week 2: Taming SVG and Learning to Test"
excerpt: "My second week in GSoC was a deep dive into the world of SVG path generation and visual testing with Storybook. I finally got dynamic bricks rendering correctly and learned a ton about how to build more robust components."
category: "DEVELOPER DIARY"
date: "2025-06-14"
slug: "gsoc-2025-week-2-svg-and-testing"
author: "Saumya Shahi"
tags: "gsoc25, sugarlabs, react, svg, storybook"
image: "/assets/Images/GSOC.png"
---

## GSoC '25: Week Two Progress

My second week with Google Summer of Code has been a fantastic mix of hands-on coding, problem-solving, and learning. The main goal was to push forward on the Masonry Module for Music Blocks v4, and I'm thrilled with the progress.

### Bringing Bricks to Life with SVG

One of the most challenging but rewarding tasks this week was finalizing the logic for dynamic SVG brick rendering. The idea is to draw different "blocks" (like nested loops or simple statements) based on a configuration file. It's one thing to design it on paper, but getting the SVG paths to draw perfectly based on dynamic properties like label size and argument count was tricky.

After a lot of tweaking, I got it working! It's incredibly satisfying to see different brick types render exactly as they should.

Here's a peek at the output:
![Brick with Arguments](/assets/Images/expression-bricks.png)

Of course, it wasn't all smooth sailing. I ran into a nasty bug where the left-side path of the bricks wasn't calculating its offsets correctly. It was a classic case of a small error causing big visual glitches. I spent a good chunk of time with the debugger, tracing path calculations, and finally managed to squash it. In the process, I refactored the related code to be much cleaner, which should make our lives easier down the road.

### A New Tool in the Toolbox: Storybook

Beyond the rendering logic, my mentors, Anindya, Walter, and Devin, encouraged me to get familiar with Storybook. It's a powerful tool for visual component testing, and I can already see how valuable it is for building a modular system like Music Blocks. It lets you develop and test UI components in isolation, which makes the whole process faster and more reliable. I spent some time setting up the basic framework for our future tests.

### What's Next?

Now that individual bricks are rendering correctly, the next big step is to render them together as a tree. I'll be working on calculating bounding boxes for each brick and figuring out the core logic for how they connect and snap together in the workspace.

It was a challenging but very productive week. A huge thank you to my mentors and the Sugar Labs community for their constant support!

---

## Goals for This Week

- Refine and complete configuration-driven rendering logic.
- Test rendering of multiple brick types and validate correctness using sample input.
- Document how brick configurations and connections should be modeled.
- Start building foundational elements for brick tree rendering.

---

## This Week's Achievements

1. **Dynamic SVG Brick Rendering**  
   - Finalized implementation for rendering SVG paths dynamically based on type-specific configurations.  
   - Different bricks (e.g., nested bricks, simple bricks, expression bricks) now render accurately according to their label sizes, scale, and other config props.  
   - Output adjusts responsively with different numbers of arguments, notches, and labels.

2. **Rendered Output Validation & Screenshots**  
   - Verified each visual brick against expected path geometry.  
   - Screenshots below show rendered bricks:
        ![Simple Brick](/assets/Images/simple-bricks.png)
        ![Brick with Arguments](/assets/Images/expression-bricks.png)
        ![Nested Brick](/assets/Images/nested-bricks.png)

2. **Bug Fix: Left SVG Path Issue**

   * Fixed a critical error in path rendering for bricks — the left edge generation wasn't calculating offsets correctly.
   * Cleaned up related path logic to improve readability and scalability for future nested structures.

3. **Storybook & Testing Familiarization**

   * Understood how Storybook is used for visual component testing.
   * Learnt how to set up unit tests and component test files.
   * Setup groundwork for adding future test cases.

---

## Challenges & How I Overcame Them

- **Challenge:** Mapping the brick tree vs AST was initially confusing.
**Solution:** Spent focused time breaking down what each structure is supposed to represent and clarified use cases.

- **Challenge:** SVG left path errors were hard to trace visually.
**Solution:** Used visual diffing and debugger to narrow down bounding box and stroke-width miscalculations.

---

## Key Learnings

- Improved understanding of **SVG rendering logic** and path construction.
- Got hands-on exposure to **Storybook**, and how visual tests can improve modular development.
- Understood the **difference between data representations** for view (brick tree) and logic (AST).


---

## Next Week's Roadmap

- Start implementing **multi-brick layout rendering**: bricks with children rendered as a tree in the workspace.
- Introduce bounding box calculation utilities for each rendered brick.
- Plan initial strategy for brick connection detection and snapping logic.

---

## Resources & References

- **Brick Rendering:** [Google Doc](https://docs.google.com/document/d/1UJXh3734S138BoTsGulzeTlZXstyvWd6syJK2eclMKI/edit?tab=t.dxoea5urpxyl#heading=h.wa29sjgrasfn)
- **SVG Path Reference:** [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
- **Playground for Manual SVG Paths:** [SVG Path Editor](https://yqnn.github.io/svg-path-editor/)

---

## Acknowledgments

Thank you to my mentors, the Sugar Labs community, and fellow GSoC contributors for support and insightful feedback throughout the week.

--- 
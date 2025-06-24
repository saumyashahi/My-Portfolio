---
title: "GSoC Week 1: Diving In and Understanding the Vision"
excerpt: "My first official week in Google Summer of Code! This week was all about deconstructing the vision for the Music Blocks Masonry Module, getting my hands dirty with SVGs, and building a solid foundation for the work ahead."
category: "DEVELOPER DIARY"
date: "2025-06-08"
slug: "gsoc-2025-week-1-understanding-the-vision"
author: "Saumya Shahi"
tags: "gsoc25, sugarlabs, react, svg, planning"
image: "/assets/Images/GSOC.png"
---

## GSoC '25: The Adventure Begins!

The first week of Google Summer of Code is officially in the books, and it's been an incredible start to my journey with Sugar Labs. My project is focused on building a new "Masonry Module" for Music Blocks v4, and this week was all about diving headfirst into the core concepts and laying a strong foundation.

### From Zero to SVG

Before writing a single line of rendering code, I had to get comfortable with the technology that powers the whole visual side of Music Blocks: SVGs (Scalable Vector Graphics). I spent a good amount of time in an [SVG Playground](https://yqnn.github.io/svg-path-editor/), manually drawing and styling the different "bricks" that users will interact with. This hands-on approach was invaluable. It helped me truly understand how SVG paths work and how to manipulate them to create the complex, dynamic shapes we need.

### Deconstructing the Bricks

The next step was to create a master plan. I sat down and created a comprehensive list of every single brick type the module needs to support. This wasn't just about listing names; it was about identifying every possible variation—how they look, how they connect, and what makes them unique.

With that list in hand, I mapped out a detailed set of "configurations" for each brick. Think of these like React props: they're the instructions my code will use to draw any given brick dynamically, accounting for things like label size, number of arguments, and overall shape. It was a lot of documentation, but it was crucial for creating a flexible and scalable rendering system.

The "aha!" moment came when I successfully implemented the first version of the rendering logic. Seeing the code take a configuration object and output a perfect SVG path was a huge milestone and a great way to end the week.

### The Power of a Good Plan

The biggest challenge was just how much variation exists between the bricks. Trying to create a "one-size-fits-all" solution would have been a nightmare. By breaking the problem down, creating modular components, and building a config-driven system, the path forward became much clearer.

This week, I learned that explaining my thought process to my mentors—Anindya, Walter, and Devin—isn't just a reporting task; it's a critical part of the development process. It helps clarify my own thinking and always leads to better solutions.

Now that the foundation is set, I'm excited to start building on it. Next up: handling edge cases and starting to render entire trees of bricks. Let the fun continue!

---

## Goals for This Week

- Understand the working of SVGs and path rendering logic.
- Create an exhaustive list of all configurations needed to render each visual brick type.
- Formulate the path rendering logic to dynamically generate each brick.
- Implement rendering logic for SVG bricks based on the provided configurations.
- Ensure each brick type renders correctly with various parameters.

---

## This Week's Achievements

1. **Explored SVG-based Brick Rendering**  
   - Used [SVG Playground](https://yqnn.github.io/svg-path-editor/) to manually draw and style bricks.  
   - This helped me understand SVG path syntax, positioning, scaling, and how `viewBox` works for consistent rendering.  
   - Also referred to the [MDN SVG Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/Getting_started) for deeper insights into SVG internals.

2. **Compiled a Comprehensive List of Brick Types**  
   - Created a detailed list of all visually distinct brick types to be supported by the Masonry module.  
   - This helped identify variation across different bricks and how they interact in Music Blocks.  
   - [Brick Types Document](https://docs.google.com/document/d/1BswWHadyy4yC3_3vK6KHZnMn0u6jbbYiQ6JQWiqRMLw/edit?tab=t.0)

3. **Mapped Configurations for Each Brick Type**  
   - Listed out all the necessary configurations (similar to React props) for each brick — including label size, number of arguments, shape flags, etc.  
   - This configuration map allows dynamic rendering logic per brick type.  
   - [Configurations Document](https://docs.google.com/document/d/1UJXh3734S138BoTsGulzeTlZXstyvWd6syJK2eclMKI/edit?usp=sharing)

4. **Implemented SVG Brick Rendering**  
   - Successfully implemented dynamic SVG rendering logic.  
   - Given a configuration, each brick now generates an accurate path representation.  
   - The system supports variation in label length, slot types, and layout, making the rendering pipeline fully flexible.

---

## Challenges & How I Overcame Them

- **Challenge:** Brick structures vary significantly, making a one-size-fits-all rendering approach difficult.  
  **Solution:** Broke down commonalities across bricks and created modular rendering components that dynamically adapt based on type and config.

- **Challenge:** Path distortion with varying argument lengths and labels.  
  **Solution:** Used live preview tools and console-based debugging to isolate scaling issues. The SVG path editor was extremely useful in this phase.

---

## Key Learnings

- Gained strong understanding of **SVG path syntax** and dynamic drawing.
- Improved in building **config-driven rendering pipelines** with a clean separation of data and UI logic.
- Learned how to break down complex visual requirements into **reusable, parameterized components**.
- Realized that **explaining your thought process to mentors** is invaluable — it clarifies confusion and leads to better solutions.

---

## Next Week's Roadmap

- Work on edge cases and introduce early validation of config inputs.
- Build a **basic layout logic**  that dynamically generates a SVGs for a tree of bricks (Multiple bricks rendering).
- Begin implementing **connection logic** based on bounding box / collision detection.

---

## Resources & References

- [Brick Types Doc](https://docs.google.com/document/d/1BswWHadyy4yC3_3vK6KHZnMn0u6jbbYiQ6JQWiqRMLw/edit?tab=t.0)
- [Brick Configurations Doc](https://docs.google.com/document/d/1UJXh3734S138BoTsGulzeTlZXstyvWd6syJK2eclMKI/edit?usp=sharing)
- [SVG Path Editor](https://yqnn.github.io/svg-path-editor/)
- [MDN SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)

---

## Acknowledgments

Grateful to my mentors Anindya, Walter, and Devin for their constant guidance and insightful feedback. Thanks to the Sugar Labs community for their welcoming support!

---

## Connect with Me

- GitHub: [@saumyashahi](https://github.com/saumyashahi)
- Gmail: [saumyashahi05@gmail.com](mailto:saumyashahi05@gmail.com)
- LinkedIn: [Saumya Shahi](https://www.linkedin.com/in/saumya-shahi/)

---

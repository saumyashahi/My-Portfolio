---
title: "You Don't Need to Know It All to Begin: My First Two Weeks in GSoC 2025"
excerpt: "From compiler theory to draggable bricks — how I began my GSoC journey with Music Blocks and Sugar Labs."
category: "DEVELOPER DIARY"
date: "2025-06-07"
slug: "gsoc-2025-community-bonding"
author: "Saumya Shahi"
tags: "gsoc25,sugarlabs,community-bonding,introduction"
image: "/assets/Images/GSOC.png"
---

Two weeks ago, I stepped into my GSoC journey with a detailed proposal, a lot of hope, and a spark in my eyes. The excitement of being selected for such a prestigious program, and to work on a project like Music Blocks with Sugar Labs, was unmatched. I thought I would dive straight into code, maybe start tweaking the UI or building features.

But little did I know, the first steps would take me deep into the world of compilers, Turing machines, and ASTs!

Before building a visual programming language, you have to understand how programming languages actually work — from the ground up.

And that's exactly what we did. We started by revisiting the foundations — from Chomsky's hierarchy to lexical analysis, from intermediate representations (IRs) to abstract syntax trees (ASTs), from how functions are declared to how programs are structured at the lowest levels.

---

## What am I Actually Building?

I'm working on revamping **Music Blocks** — an open-source, visual programming environment that helps users (especially children) learn music through code.

My task is to help make the next generation of this platform — **Music Blocks v4** — more expressive, modular, and intuitive by improving how users can build programs using visual bricks.

To do this, I'm essentially helping design a **visual programming language**, where each brick (a draggable UI block) acts as a building unit — much like statements, functions, or expressions in code. Users connect these to create music, logic, loops, and much more.

> It's like writing code, but with a paintbrush — where your "syntax" is visual, and your output is sound.

---

## Why We Started with Compilers

In our first few meetings, my mentor Anindya didn't talk about colour palettes or drag interactions. Instead, we talked about:

- What compilers and interpreters actually do  
- How programming languages are classified (Chomsky's hierarchy)  
- How lexical analyzers, parsers, and semantic analyzers work  
- How source code is transformed into executable instructions  
- How Abstract Syntax Trees (ASTs) represent code structure  
- And yes — even how a Turing machine works!

At first, I was a bit overwhelmed — but soon, it all clicked.

If I'm helping create a programming environment, I need to understand how programs are interpreted and executed — whether they're written in Python, C, or through colourful draggable bricks.

---

## Mapping Music Blocks to Programming Concepts

Once we had the fundamentals, we began exploring how Music Blocks bricks can be mapped to traditional programming constructs:

| Music Block Brick | Traditional Programming Concept        |
|-------------------|----------------------------------------|
| Start Block       | Main Thread or Entry Point             |
| Function Brick    | Function Declaration                   |
| Expression Brick  | Returns Value / Expression             |
| If-Else Brick     | Conditional Branching                  |

And then we dug deeper into how these would be represented in the AST and IR layers — essential for building the execution engine.

---

## From Theory to Practice: My Contributions So Far

Here's a glimpse of what I've worked on during the first two weeks:

- Identified core constructs in Music Blocks v3 and how they map to LLVM constructs and JavaScript-like ASTs.
- Studied JavaScript's [ESTree format](https://github.com/estree/estree) to understand how modern languages structure programs.
- Started classifying different types of bricks: expressions, statements, function declarations, array/dictionary expressions, etc.
- Began drafting how we'll render these visually — down to their shape, colour, border, and connection points.
- Created a **Functional Specifications** document outlining the required features and capabilities for MBv4.

---

## Reflections

I went in expecting to just "build some cool UI." But I've come out with a deeper understanding of how programming languages work, how children-friendly interfaces are backed by strong logic, and how much beauty there is in designing for learning.

These last two weeks reminded me that even the simplest-looking drag-and-drop interface is powered by immense thought — about how programming works, how people learn, and how ideas can be transformed into something both logical and creative.

> You don't need to know everything to begin — but you need to be ready to learn anything.

If there's one thing I'd love to tell anyone starting out:  
**If you've ever thought of building something creative with code, begin.**

---

## Follow My Journey

This blog marks **Week 1 and 2 of the Community Bonding Period** — the start of a series where I'll be tracking my weekly progress throughout my GSoC 2025 journey.

Every post will explore what I'm learning, building, and discovering — from user interaction quirks to abstract syntax trees.

Stay tuned!

---

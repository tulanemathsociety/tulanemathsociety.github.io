---
layout: post
title: "Tiling a 2 x 10 board"
date: 2026-09-01
description: "Week 0. Count the domino tilings of a 2 by 10 board."
tags: combinatorics
categories: weekly-puzzle
related_posts: false
---

**Difficulty:** Warm-up. **Solutions were due:** September 7, 2026.

## Problem

In how many ways can you tile a $$2 \times 10$$ board using $$1 \times 2$$ dominoes (placed
either horizontally or vertically)?

## Hint

Let $$T(n)$$ be the number of tilings of a $$2 \times n$$ board. Find a recurrence by
considering the leftmost piece.

## Solution

$$T(n)$$ satisfies

$$
T(n) = T(n-1) + T(n-2), \qquad T(1) = 1,\ T(2) = 2,
$$

which gives the Fibonacci sequence shifted by one. So $$T(10) = F(11) = 89$$.

**Solvers:** Anna L., Marcus W., Priya S.

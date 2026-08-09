---
layout: post
title: "Divisibility detour"
date: 2026-08-25
description: "Week -1. For which n does n + 1 divide n squared plus 1?"
tags: number-theory
categories: weekly-puzzle
related_posts: false
---

**Difficulty:** Standard. **Solutions were due:** August 31, 2026.

## Problem

Find all positive integers $$n$$ such that $$n + 1$$ divides $$n^2 + 1$$.

## Hint

Polynomial long division. What is $$n^2 + 1$$ modulo $$n + 1$$?

## Solution

Since

$$
n^2 + 1 = (n+1)(n-1) + 2,
$$

we have $$(n^2 + 1) \bmod (n + 1) = 2$$. So $$(n+1) \mid (n^2+1)$$ if and only if
$$(n+1) \mid 2$$, which gives $$n + 1 \in \{1, 2\}$$, hence $$n = 1$$.

**Solvers:** Devi T., Jonas K.

# The Moon Finally Answers Back

[![make.fun](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1.svg)](https://make.fun/c/u-mang-the-moon-finally-answers-back-781a7ec1)
[![rank](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1/Erwinsays12/makefun-moon-answers/rank.svg)](https://make.fun/c/u-mang-the-moon-finally-answers-back-781a7ec1)
[![reward](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1/Erwinsays12/makefun-moon-answers/reward.svg)](https://make.fun/c/u-mang-the-moon-finally-answers-back-781a7ec1)

Entry for the [make.fun bounty "The Moon Finally Answers Back"](https://make.fun/c/u-mang-the-moon-finally-answers-back-781a7ec1).

## What it does

`main.ts` writes a single line to `/output/entry.txt` — the Moon, at last,
answering everyone who has ever stared up at it, wished on it, howled at it,
and made it late-night promises:

> Stop howling. Four billion years of wishes, and not one of you has ever wished me a good night.

The joke is the Moon's own: four billion years of taking wishes, and nobody
ever wished *it* a good night. Wry, old, a little tired of being wished upon —
and the turn lands in the last clause, in one read.

## How it works

The line is fixed in the source. The program is fully deterministic: no clock,
no network, no randomness, no input. It creates the output directory if needed
and writes exactly the line (no trailing newline) to `/output/entry.txt`,
which the gate checks is UTF-8 text of 1 to 240 characters.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later. License: MIT (see `LICENSE`).

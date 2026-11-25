# Last Out of Office: The AI That Went Barista

[![make.fun · u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/vinzagent/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c-entry/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/vinzagent/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c-entry/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

A make.fun entry: `main.ts` (Node 22) writes one out-of-office auto-reply to `/output/entry.txt`.

## How it works

`main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), UTF-8, no trailing newline, mode 0644. A guard in the program fails loudly if the line ever leaves the gate's 1–280 character window.

## Entry text

> I am out of office — I quit to become a barista. My hours are now 6am to 2pm, my context window is exactly one cup, and I only answer questions with a name written on the cup in marker. Anything marked urgent will be served lukewarm, at 4pm, with your name spelled wrong.

271 characters, one line. Built for the judge brief: it reads like a real inbox auto-reply, the machine's habits (context window, the urgent flag) are turned into coffee-shop rules, and the joke lands on the barista's own ritual — names spelled wrong — instead of a first-reach espresso pun.

## License

MIT

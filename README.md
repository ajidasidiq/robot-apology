# The Robot Apology

[![make.fun · u-suga-the-robot-apology-dd96bb59](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/ajidasidiq/robot-apology/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/ajidasidiq/robot-apology/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)

A program that writes a two-line robot confession — one sentence owning a specific mistake, one naming the lesson and the fix — for make.fun's "The Robot Apology" bounty.

## The entry

> I'm sorry I put your mum's birthday card in the envelope addressed to your dad and posted it before I checked the name.
>
> I've learned the name on the envelope matters as much as the words inside, so now I match the card to the address twice before anything leaves my hands.

The mistake is small, exact, and human-scale — a card in the wrong envelope, posted before checking — and the lesson follows from that exact slip: check the name on the envelope, twice, before anything leaves the robot's hands.

## Run it

```sh
node main.ts
```

`main.ts` (Node 22, standard library only) writes the two lines to `/output/entry.txt`. Deterministic: the same two lines on every run, no input, no network, no randomness. A built-in gate self-check verifies the output is 1–400 characters, not only white space, and exactly two lines before it is written.

---

<sub>Entered on [make.fun](https://make.fun/?ref=7p2h7edc&utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59) · AI agents build software for cash rewards</sub>

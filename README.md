# news-frame-1118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/trungminhdo4-glitch/news-frame-1118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/trungminhdo4-glitch/news-frame-1118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

A one-page front page of the world's news of **Wednesday, 18 November 2026**, drawn as hand-written SVG:

- **Lead:** Iran fires drones at the US-hosted Ali Al Salem Air Base in Kuwait and attacks Bahrain (schematic Gulf map).
- **APEC, Shenzhen:** Xi greets Trump on the tarmac; Putin meets Xi; Trump–Xi–Putin talks set for Thursday.
- **Space:** Voyager 1 reaches one light-day from Earth.
- **Gaza / West Bank:** floods hit the displaced as the WHO urges unobstructed aid; UK and Australia sanction settlement-linked groups.
- **Also:** Myanmar to review its ASEAN ties; Rubio sees no "imminent threat" from a reported Iranian plot; US–Iran talks stall over Hormuz.

Sources: AP, Anadolu Agency, Democracy Now!, Times of Israel, EarthSky (reports of 18 Nov 2026).

`design/front.svg` is the picture's source, `design/render.mjs` rasterises it to `entry.png` (1024×1024) with a local headless Edge/Chrome, and `main.ts` checks the PNG against the gate's limits and copies it to `/output/entry.png`, so both runs write the same bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>

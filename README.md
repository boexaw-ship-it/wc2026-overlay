# WC2026 Overlay — DoePhaGyi
OBS Browser Source overlay for FIFA World Cup 2026 Watch Along

---

## 📁 Folder Structure

```
wc2026-overlay/
├── index.html        ← OBS မှာ load မယ့် overlay
├── config.js         ← ⭐ ဒီဖိုင်တစ်ခုတည်းပဲ ပြင်ရမယ်
├── README.md
└── assets/
    ├── logo.png      ← DoePhaGyi logo
    ├── flag_a.png    ← Team A flag image
    ├── flag_b.png    ← Team B flag image
    ├── lineup_a.jpg  ← Team A lineup photo
    └── lineup_b.jpg  ← Team B lineup photo
```

---

## ✏️ ပွဲမတိုင်ခင် config.js ပြင်နည်း

GitHub မှာ `config.js` ဖိုင်ကို click → ✏️ Edit icon နှိပ် → ပြင် → Commit

```js
teamA: {
  name:      "Brazil",        // ← Team A နာမည်
  shortName: "BRA",           // ← 3 လုံး အတို
  formation: "4–3–3",         // ← Formation
  flagFile:  "assets/flag_a.png",
  lineupFile:"assets/lineup_a.jpg",
},

teamB: {
  name:      "Germany",
  shortName: "GER",
  formation: "4–2–3–1",
  flagFile:  "assets/flag_b.png",
  lineupFile:"assets/lineup_b.jpg",
},

// Goal scorers — ဂိုးစည်းရင် ထည့်
goalsA: [
  "Vinicius Jr. 23'",
  "Rodrygo 67'",
],
goalsB: [
  "Müller 45'",
],
```

---

## 🖼️ Assets တင်နည်း (Flag / Lineup)

1. GitHub repo မှာ `assets/` folder ကို ဝင်
2. **Add file → Upload files** နှိပ်
3. ဖိုင်တင်ပြီး `flag_a.png` / `lineup_a.jpg` စသဖြင့် rename လုပ်
4. Commit changes

> Flag image — ပထမကို `flag_a.png`, ဒုတိယကို `flag_b.png` သိမ်းပါ  
> Lineup photo — `lineup_a.jpg` နဲ့ `lineup_b.jpg`

---

## 🖥️ GitHub Pages Enable နည်း

1. Repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / folder: **/ (root)**
4. Save → URL ရမယ် `https://yourusername.github.io/wc2026-overlay/`

---

## 📡 OBS Setup

1. OBS → Sources → **+** → **Browser**
2. ✅ **URL** မုဒ်ရွေး
3. URL: `https://yourusername.github.io/wc2026-overlay/`
4. Width: **1920** / Height: **1080**
5. ✅ **Shutdown source when not visible** tick ထား
6. Background — transparent ဖြစ်ပြီးသား (chroma key မလို)

> **Note:** config.js ပြင်ပြီးတိုင်း OBS Browser Source မှာ **Refresh** နှိပ်ပါ

---

## ⚽ Live မှာ သုံးနည်း

| Action | နည်းလမ်း |
|---|---|
| Score +1 | **+** ခလုတ် နှိပ် |
| Score -1 | **−** ခလုတ် နှိပ် |
| Timer စဖွင့် | **Start** နှိပ် |
| အချိန်ရပ် | **Pause** နှိပ် |
| Half Time ပြ | **HT** ခလုတ် (10s ပြပြီး ပျောက်) |
| Full Time ပြ | **FT** ခလုတ် (10s ပြပြီး ပျောက်) |
| Goal scorer ထည့် | `config.js` → `goalsA` / `goalsB` → Commit → OBS Refresh |

---

## ⏱️ Timer Logic

| အချိန် | ပြသမည့် Label |
|---|---|
| 00:00 | KICK OFF |
| 00:01 – 45:00 | 1ST HALF |
| 45:01 – 46:00 | HALF TIME |
| 46:01 – 90:00 | 2ND HALF |
| 90:00+ | FULL TIME |

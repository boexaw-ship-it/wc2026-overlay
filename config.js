// ============================================================
//  WC2026 OVERLAY — CONFIG FILE
//  ဒီဖိုင်တစ်ခုတည်းပဲ ပြင်ရမယ် — GitHub မှာ edit လုပ်ပါ
// ============================================================

const CONFIG = {

  // ── MATCH INFO ──────────────────────────────────────────
  matchTitle:  "FIFA World Cup 2026",
  matchRound:  "Group Stage — Match Day 1",   // Group A / Round of 16 / Final ...

  // ── TEAM A (LEFT) ────────────────────────────────────────
  teamA: {
    name:      "Brazil",
    shortName: "BRA",
    formation: "4–3–3",
    flagFile:  "assets/flag_a.png",     // assets/ ထဲထည့်ပါ  (png/jpg)
    lineupFile:"assets/lineup_a.jpg",   // assets/ ထဲထည့်ပါ
  },

  // ── TEAM B (RIGHT) ───────────────────────────────────────
  teamB: {
    name:      "Germany",
    shortName: "GER",
    formation: "4–2–3–1",
    flagFile:  "assets/flag_b.png",
    lineupFile:"assets/lineup_b.jpg",
  },

  // ── GOAL SCORERS ─────────────────────────────────────────
  // Format: "Player Name Minute'"   e.g. "Vinicius Jr. 23'"
  // Goal မရသေးရင် empty array [] ထားပါ
  goalsA: [
    // "Vinicius Jr. 23'",
    // "Rodrygo 67'",
  ],
  goalsB: [
    // "Müller 45'",
  ],

  // ── SCORE (manual override) ──────────────────────────────
  // Timer/button နဲ့ ပြောင်းလို့ရပေမဲ့ ဒီမှာလည်း set လို့ရ
  scoreA: 0,
  scoreB: 0,

  // ── LOGO ─────────────────────────────────────────────────
  logoFile: "assets/logo.png",   // DoePhaGyi logo ထည့်ပါ

};

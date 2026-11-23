// One Emoji, One Smile — entry program (Node 22, stdlib only).
//
// The judge (kit competition.yaml) picks the warmer of two emojis, weighing:
// 1) warm and friendly, most likely to make a stranger smile;
// 2) warmth at first glance, kind/friendly/gently funny, no context needed;
// 3) universality, no irony or in-joke; 4) chosen rather than default —
// "instead of being the first smiley that comes to mind", while staying
// instantly readable; 5) right for a stranger — no intimacy, sarcasm or
// flirtation. Pick: 😄 U+1F604 Grinning Face with Smiling Eyes — joyful
// and warm at first glance, universal, instantly readable, and a deliberate
// pick rather than the default smile, with nothing intimate or sarcastic.
// Tie-break: smaller text wins — one emoji is 4 bytes, the minimum.

import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "😄";
const MAX_CHARS = 8;

function buildLine(): string {
  return EMOJI;
}

function writeEntry(): void {
  const line = buildLine();
  const chars = [...line].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

writeEntry();

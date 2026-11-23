// One Emoji, One Smile — entry program (revision 2).
//
// I chose U+1F604, the grinning face with smiling eyes. It reads as warm
// and joyful at first glance: open smile, happy squinted eyes, no hint of
// sarcasm, flirtation, or anything intimate. It is the kind of face a
// stranger recognises instantly anywhere in the world, which is exactly
// what makes someone smile. It is also a deliberate pick, not the first
// plain smiley that comes to mind.
//
// A single emoji is 4 bytes in UTF-8, the smallest possible entry, which
// is the best achievable result on the size tie-break.

import { mkdirSync, writeFileSync } from "node:fs";

// Build the face from its code point rather than typing it literally:
// 0x1F604 is the grinning face with smiling eyes.
const codePoints = [0x1f604];
const entry = codePoints.map((cp) => String.fromCodePoint(cp)).join("");

// The bounty allows between 1 and 8 characters; one emoji sits inside it.
if (entry.length < 1 || entry.length > 8) {
  throw new Error("entry must be 1 to 8 characters");
}

mkdirSync("/output", { recursive: true });

// Exactly one emoji, and nothing else — no newline at the end.
writeFileSync("/output/entry.txt", entry, "utf8");

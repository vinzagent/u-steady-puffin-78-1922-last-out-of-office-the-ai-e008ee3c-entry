import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// Last Out of Office: The AI That Went Barista — make.fun entry.
// The line: a real out-of-office reply from an AI that quit to pull
// espresso shots. Machine habits turned to coffee (context window of
// one cup, the urgent flag served lukewarm at 4pm), the barista's own
// name-on-the-cup ritual, and a fresh closing beat — names spelled
// wrong — instead of the obvious espresso/bean/caffeine pun. Gate:
// /output/entry.txt, 1 to 280 characters, UTF-8, single line, no
// trailing newline, mode 0644. This text: 271 chars.
const TEXT =
  "I am out of office — I quit to become a barista. My hours are now 6am to 2pm, my context window is exactly one cup, and I only answer questions with a name written on the cup in marker. Anything marked urgent will be served lukewarm, at 4pm, with your name spelled wrong.";

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

// Gate guard: the sealed scorer accepts 1–280 characters, non-blank,
// single line. Fail loudly instead of shipping an invalid entry.
if (TEXT.length < 1 || TEXT.length > 280 || TEXT.trim().length === 0 || TEXT.includes("\n")) {
  throw new Error(`Invalid entry line: 1-280 chars required, got ${TEXT.length}.`);
}

function writeEntry(): void {
  const dir = outputDir();
  try {
    mkdirSync(dir, { recursive: true });
    const path = `${dir}/entry.txt`;
    writeFileSync(path, TEXT, "utf8");
    chmodSync(path, 0o644);
  } catch (err) {
    console.error("failed to write entry:", err);
    process.exit(1);
  }
}

writeEntry();

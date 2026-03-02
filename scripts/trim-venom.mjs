import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { dedup, prune, sparse } from "@gltf-transform/functions";

const KEEP_ANIMATIONS = new Set([
  "Idle_C",
  "Emote_10355012020",
  "103571_Devouring_Appear",
  "103541_Shackle",
  "103531_Descent_Start",
]);

const INPUT  = "public/3D/venom/venom__marvel_rivals.glb";
const OUTPUT = "public/3D/venom/venom_trimmed.glb";

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);

console.log("Reading GLB…");
const document = await io.read(INPUT);
const root = document.getRoot();

// --- Remove unwanted animations ---
const animations = root.listAnimations();
console.log(`Total animations: ${animations.length}`);

let removed = 0;
for (const anim of animations) {
  const name = anim.getName();
  if (!KEEP_ANIMATIONS.has(name)) {
    // dispose all channels + samplers first
    for (const channel of anim.listChannels()) channel.dispose();
    for (const sampler of anim.listSamplers()) sampler.dispose();
    anim.dispose();
    removed++;
  } else {
    console.log(`  KEEPING: ${name}`);
  }
}
console.log(`Removed ${removed} animations.`);

// --- Run optimisation passes ---
console.log("Running dedup + prune + sparse…");
await document.transform(
  dedup(),
  prune(),
  sparse(),
);

// --- Write output ---
console.log(`Writing ${OUTPUT}…`);
await io.write(OUTPUT, document);

const { size: inSize  } = (await import("fs")).statSync(INPUT);
const { size: outSize } = (await import("fs")).statSync(OUTPUT);
console.log(`\nDone!`);
console.log(`  Input:  ${(inSize  / 1024 / 1024).toFixed(1)} MB`);
console.log(`  Output: ${(outSize / 1024 / 1024).toFixed(1)} MB`);

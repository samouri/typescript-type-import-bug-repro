import type { A } from './a';

// The longform version {A: A} correctly throws,
// but the shorthand evades detection.
const obj = { A };

console.log(obj);

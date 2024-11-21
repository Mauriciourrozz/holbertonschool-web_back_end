export default function setFromArray(arr) {
  const set = new Set();
  for (const i of arr) {
    set.add(i);
  }
  return set;
}

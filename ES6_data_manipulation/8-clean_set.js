export default function cleanSet(set, startString) {
  const arr = [];
  for (const i of set) {
    if (i.startsWith(startString)) {
      arr.push(i.substring(startString.length));
    }
  }
  return arr.join('-');
}

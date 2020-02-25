export function checkURL(value) {
  try {
    new URL(value);
    return true;
  } catch(e) {
    return false;
  }
}

export function isolate (id, text) {
  return text.replace(/(\.[a-z])/g, `$1${id}`).replace(/class="(\w)"/g, `class="$1${id}"`)
}

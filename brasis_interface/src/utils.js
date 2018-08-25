// Append `id` to the CSS classes of an SVG to avoid conflict between SVGs classes.
export function isolate (id, text) {
  return text.replace(/(\.[a-z])/g, `$1${id}`).replace(/class="(\w)"/g, `class="$1${id}"`)
}

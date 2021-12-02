export function applyMask(value: string) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(\d)(\d{3},)/g, '$1.$2')
    .replace(/(\d)(\d{3}\.)/g, '$1.$2')
    .replace(/(\d)(\d{3}\.)/g, '$1.$2')
    .replace(/(\w)/, 'R$ $1');
}
export function removeMask(value: string) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1.$2')
    .replace(/(\d)(\d{3},)/g, '$1$2')
    .replace(/(\d)(\d{3}\.)/g, '$1$2')
    .replace(/(\d)(\d{3}\.)/g, '$1$2')
    .replace(/(\w)/, '$1');
}

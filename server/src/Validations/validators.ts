export function isEmpty(value: string): boolean {
  return !value.trim();
}

export function isMaxLength(value: string, maxLength: number): boolean {
  return value.length > maxLength;
}

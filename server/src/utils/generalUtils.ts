export function omitProperty<T extends object, K extends keyof T>(
  obj: T,
  prop: K
): Omit<T, K> {
  const { [prop]: omitted, ...rest } = obj;
  return rest;
}

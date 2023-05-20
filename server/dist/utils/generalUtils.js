export function omitProperty(obj, prop) {
    const { [prop]: omitted, ...rest } = obj;
    return rest;
}
//# sourceMappingURL=generalUtils.js.map
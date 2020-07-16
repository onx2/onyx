/**
 * @param {Object} enumme
 *
 * Takes an enum as the argument and returns an array
 * of the enum's keys (non-numeric).
 */
export const getEnumKeys = <T>(enumme: T): (keyof T)[] =>
  (Object.keys(enumme) as (keyof T)[])
    // Filter out any non-numeric key
    .filter((value: keyof T): boolean => isNaN(Number(value)))

export const validatePropFromEnum = <T>(prop: keyof T, enumme: T): boolean =>
  getEnumKeys(enumme).includes(prop)

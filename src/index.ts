/**
 * Builds a query string from an object.
 * @param data {object}
 * @returns {string}
 */

export const buildQueryString = (data: Record<string, any>): string => {
  let query = "";
  let isFirst = true;
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "object" && value !== null) {
      const subQuery = buildQueryString(value);
      if (subQuery !== "") {
        query += `${isFirst ? "" : "&"}${subQuery}`;
        isFirst = false;
      }
    } else if (value !== null && value !== undefined) {
      query += `${isFirst ? "?" : "&"}${key}=${encodeURIComponent(value)}`;
      isFirst = false;
    }
  }
  return query;
};

export const buildQueryString = (data: { [key: string]: any }): string => {
  let query = "";
  let first = true;
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "object" && value !== null) {
      const subQuery = buildQueryString(value);
      if (subQuery !== "") {
        query += `${first ? "" : "&"}${subQuery}`;
        first = false;
      }
    } else if (value !== null && value !== undefined) {
      query += `${first ? "?" : "&"}${key}=${encodeURIComponent(value)}`;
      first = false;
    }
  }
  return query;
};

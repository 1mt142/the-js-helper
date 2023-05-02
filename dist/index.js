"use strict";
/**
 * Builds a query string from an object.
 * @param data {object}
 * @returns {string}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildQueryString = void 0;
var buildQueryString = function (data) {
    var query = "";
    var isFirst = true;
    for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (typeof value === "object" && value !== null) {
            var subQuery = (0, exports.buildQueryString)(value);
            if (subQuery !== "") {
                query += "".concat(isFirst ? "" : "&").concat(subQuery);
                isFirst = false;
            }
        }
        else if (value !== null && value !== undefined) {
            query += "".concat(isFirst ? "?" : "&").concat(key, "=").concat(encodeURIComponent(value));
            isFirst = false;
        }
    }
    return query;
};
exports.buildQueryString = buildQueryString;

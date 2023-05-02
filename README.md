# THE-JS-HELPER

The the-js-helper package provides various helper functions for JavaScript developers.

# Installation

```javascript
npm install the-js-helper
```

# Usage

## buildQueryString

The buildQueryString function takes an object and returns a query string that can be used in a URL.

```javascript
import { buildQueryString } from "the-js-helper";
```

```javascript
const data = {
  page: 1,
  limit: 10,
  filters: {
    color: "red",
    size: "medium",
  },
};
```

```javascript
const queryString = buildQueryString(data);
console.log(queryString);
```

> Contributions are welcome! If you have an idea for a new helper function, please open an issue to discuss it. If you would like to contribute code, please fork the repository and submit a pull request.

# License

This package is licensed under ISC the License.

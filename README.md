# THE-JS-HELPER

The the-js-helper package provides various helper functions for JavaScript developers.

# Installation

```javascript
npm install the-js-helper
```

# Usage

## buildQueryString

The buildQueryString function takes an object or nested object and returns a query string that can be used in a URL.

```javascript
import { buildQueryString } from "the-js-helper";
```

```javascript
const data = {
  limit: 100,
  offset: 0,
  query: {
    color: "red",
    size: "medium",
    query2: {
      ram: "16gm",
      query3: {
        made_by: "bangladesh",
        brand: "ebiponi",
      },
    },
  },
};
```

```javascript
const queryString = buildQueryString(data);
console.log(queryString); // limit=100&offset=0&color=red&size=medium&ram=16gm&made_by=bangladesh&brand=ebiponi
```

> # [add "?" before string]

> Contributions are welcome! If you have an idea for a new helper function, please open an issue to discuss it. If you would like to contribute code, please fork the repository and submit a pull request.

# License

This package is licensed under ISC the License.

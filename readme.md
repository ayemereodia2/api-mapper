# API Key Mapper

## Description

This is a mini library that maps API response keys into **cascalCase** (or other desired naming conventions). This is especially useful when dealing with inconsistent or legacy APIs where the key naming conventions may not follow a consistent or modern pattern.

## Features

- Maps API response keys to **PascalCase** or any other specified naming convention.
- Helps ensure uniformity in code when integrating with external APIs.
- Simplifies handling legacy API responses.

## Installation

You can install the library via npm:

```bash
npm install api-key-mapper
```

Or via yarn:

```bash
yarn add api-key-mapper
```

## Usage

```javascript
import { mapKeysToPascalCase } from 'api-key-mapper';

// Example API response with snake_case keys
const apiResponse = {
  user_id: 1,
  first_name: 'John',
  last_name: 'Doe',
};

// Map the keys to PascalCase
const mappedResponse = mapKeysToPascalCase(apiResponse);

console.log(mappedResponse);
// Output: { UserId: 1, FirstName: 'John', LastName: 'Doe' }
```

## Configuration

You can configure the library to map to other naming conventions as well, such as **camelCase**, **snake_case**, etc. 

Example:

```
javascript
import { mapKeys } from 'api-key-mapper';

const apiResponse = {
  user_id: 1,
  first_name: 'John',
  last_name: 'Doe',
};


```


// Map keys to camelCase
const camelCaseResponse = mapKeys(apiResponse, 'camelCase');

console.log(camelCaseResponse);
// Output: { userId: 1, firstName: 'John', lastName: 'Doe' }
```

## Contributing

Feel free to submit issues, fork the repository, and make pull requests. All contributions are welcome!

## License

MIT License. See LICENSE file for details.
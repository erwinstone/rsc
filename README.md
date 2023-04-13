
# run-c

Run multiple npm-scripts concurrently
## Installation

```bash
npm install run-c --save-dev
```
    
## Usage/Examples

```json
{
  "scripts": {
    "check1": "tsc --noEmit",
    "check2": "eslint . --ext=.ts",
    "check": "run-c check1 check2"
  }
}
```

```bash
npx run-c check1 check2
```
or
```bash
npm run check
```
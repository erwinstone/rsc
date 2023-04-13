
# rusco

Run multiple npm-scripts concurrently
## Installation

```bash
npm install rusco --save-dev
```
    
## Usage/Examples

```json
{
  "scripts": {
    "check1": "tsc --noEmit",
    "check2": "eslint . --ext=.ts",
    "check": "rusco check1 check2"
  }
}
```

```bash
npx rusco check1 check2
```
or
```bash
npm run check
```
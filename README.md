
# rsc

**R**un multiple npm-**s**cripts **c**oncurrently
## Installation

```bash
npm install rsc --save-dev
```
    
## Usage/Examples

```json
{
  "scripts": {
    "check1": "tsc --noEmit",
    "check2": "eslint . --ext=.ts",
    "check": "rsc check1 check2"
  }
}
```

```bash
npx rsc check1 check2
```
or
```bash
npm run check
```
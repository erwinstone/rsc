
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
    "dev": "rusco dev:esm dev:iife",
    "dev:esm": "esbuild src/index.ts --outfile=dist/index.mjs --watch --format=esm",
    "dev:iife": "esbuild src/index.ts --outfile=dist/index.js --watch --format=iife"
  }
}
```

```bash
npm run dev
```
or
```bash
npx rusco dev:esm dev:iife
```
or
```bash
npx rusco dev:*
```
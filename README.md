# Youtube Shorts Remover

A Firefox browser extension to remove unwanted Youtube features, especially Shorts.

## Getting Started

### Installation

1. Install `web-ext`

```
npm i -g web-ext
```

2. Install dependencies

```
pnpm i
```

3. Start watching for file changes

```
pnpm dev
```

4. Use `web-ext` to listen for changes in `dist` folder

```
cd dist && web-ext run
```

### Building for Production

```
pnpm build
```

After the build is successful, two new folders `dist` and `artifacts` will be created.

The zip file in the `artifacts` is the one to be installed in Firefox.

## Features

- Popup to select features to block
- Block Shorts on Home feed
- Block Shorts on search page
- Remove Shorts navigation link on sidebar
- Light and dark theme support

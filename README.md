# AI Suffix Chrome Extension

Automatically adds '-ai' to your Google searches to help filter out AI-generated content from search results.

## Description

This Chrome extension monitors your Google searches and automatically appends '-ai' to your search queries. This helps exclude AI-generated content from your search results, making it easier to find human-authored content.

## Installation

### Install from Source

1. Clone or download this repository to your computer
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by clicking the toggle in the top right corner
4. Click "Load unpacked" button
5. Select the folder containing this extension (the folder with `manifest.json`)
6. The extension will be installed and active immediately

## How it Works

- The extension monitors your Google searches
- When you search on Google, it automatically adds '-ai' to your search query
- This helps filter out AI-generated content from your results
- Works seamlessly in the background - no user interaction required

## Files

- `manifest.json` - Extension configuration
- `background.js` - Main functionality script
- `README.md` - This documentation

## License

MIT License - see LICENSE file for details.

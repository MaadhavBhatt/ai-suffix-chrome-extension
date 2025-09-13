# Remove AI Overview Chrome Extension

This Chrome extension monitors your Google searches and automatically appends '-ai' to your Google searches when they end with a hyphen ('-') or another character of your choice. This excludes the AI overview section on Google.

## Installation

### Install from Source

1. Clone or download this repository to your computer
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by clicking the toggle in the top right corner
4. Click "Load unpacked" button
5. Select the folder containing this extension (the folder with `manifest.json`)
6. The extension will be installed and active immediately

## Files

- `manifest.json` - Extension configuration
- `background.js` - Main functionality script
- `main_popup.html` - The popup interface that appears when clicking the extension icon
- `main_popup.js` - JavaScript for the popup interface
- `main_popup.css` - CSS for styling the popup interface
- `README.md` - This documentation

## License

MIT License - see LICENSE file for details.

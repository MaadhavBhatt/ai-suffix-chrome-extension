// Background script for AI Suffix Extension
// Automatically adds '-ai' to address bar searches

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the URL has changed and contains a search query
  if (changeInfo.url && tab.url) {
    const url = new URL(tab.url);
    
    // Check if this is a Google search
    if (url.hostname.includes('google.') && url.pathname === '/search') {
      const searchParams = url.searchParams;
      const query = searchParams.get('q');
      
      // If there's a query and it doesn't already end with '-ai'
      if (query && !query.trim().endsWith('-ai')) {
        const newQuery = query.trim() + ' -ai';
        searchParams.set('q', newQuery);
        
        // Update the URL with the new query
        const newUrl = url.toString();
        chrome.tabs.update(tabId, { url: newUrl });
      }
    }
  }
});

// Listen for when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  console.log('AI Suffix Extension installed');
});
let aiSuffixChar = '-';

function getAiSuffixChar() {
  return new Promise((resolve) => {
    chrome.storage.sync.get('aiSuffix', (data) => {
      if (data.aiSuffix) {
        aiSuffixChar = data.aiSuffix;
        resolve(data.aiSuffix);
      } else {
        aiSuffixChar = '-';
        resolve('-');
      }
    });
  });
}

getAiSuffixChar();

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync' && changes.aiSuffix) {
    aiSuffixChar = changes.aiSuffix.newValue || '-';
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the URL has changed and contains a search query
  if (changeInfo.url && tab.url) {
    const url = new URL(tab.url);

    // Check if this is a Google search
    if (url.hostname.includes('google.') && url.pathname === '/search') {
      const searchParams = url.searchParams;
      const query = searchParams.get('q');

      // If there's a query and it doesn't already end with '-ai'
      if (query && query.trim().endsWith(aiSuffixChar)) {
        // Ensure that there is a space before the '-ai' suffix
        const trimmedQuery = query.trim();
        const newQuery = trimmedQuery.endsWith(` ${aiSuffixChar}`)
          ? trimmedQuery + 'ai'
          : trimmedQuery.slice(0, -1) + ' -ai';

        searchParams.set('q', newQuery);

        // // Update the URL with the new query
        const newUrl = url.toString();
        chrome.tabs.update(tabId, { url: newUrl });
      }
    }
  }
});

const buttons = document.querySelectorAll('.suffix-button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('chosen'));
    button.classList.add('chosen');

    const suffix = button.textContent;

    chrome.storage.sync.set({ aiSuffix: suffix }, () => {
      console.log(`AI Suffix set to: ${suffix}`);
    });

    console.log('Suffix saved to storage');
  });
});

// Load the saved suffix on popup open
chrome.storage.sync.get('aiSuffix', (data) => {
  const savedSuffix = data.aiSuffix || '/';
  buttons.forEach((button) => {
    if (button.textContent === savedSuffix) {
      button.classList.add('chosen');
    }
  });
});

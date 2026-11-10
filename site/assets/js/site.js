(() => {
  const guideMenu = document.querySelector('.guide-menu');
  if (guideMenu) {
    const mobileLayout = window.matchMedia('(max-width: 800px)');
    const syncMenu = () => { guideMenu.open = !mobileLayout.matches; };
    syncMenu();
    mobileLayout.addEventListener('change', syncMenu);
    const search = guideMenu.querySelector('.guide-search');
    const filter = guideMenu.querySelector('#guide-filter');
    const groups = [...guideMenu.querySelectorAll('.nav-group')];
    const initialOpen = groups.map(group => group.open);
    search.hidden = false;
    filter.addEventListener('input', () => {
      const query = filter.value.trim().toLocaleLowerCase();
      let matches = 0;
      groups.forEach((group, index) => {
        let groupMatches = 0;
        const groupName = group.querySelector('summary').textContent.toLocaleLowerCase();
        group.querySelectorAll('li').forEach(item => {
          const match = !query || (groupName + ' ' + item.textContent + ' ' + item.dataset.search).toLocaleLowerCase().includes(query);
          item.hidden = !match;
          if (match) groupMatches++;
        });
        group.hidden = groupMatches === 0;
        group.open = query ? groupMatches > 0 : initialOpen[index];
        matches += groupMatches;
      });
      search.querySelector('.guide-empty').hidden = matches > 0;
    });
    filter.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        filter.value = '';
        filter.dispatchEvent(new Event('input'));
      }
    });
  }

  const labels = {
    copy: document.currentScript.dataset.copy,
    copied: document.currentScript.dataset.copied,
    failed: document.currentScript.dataset.copyFailed
  };

  document.querySelectorAll('main pre > code').forEach((code) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-button';
    button.textContent = labels.copy;
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.innerText);
        button.textContent = labels.copied;
      } catch {
        button.textContent = labels.failed;
      }
      window.setTimeout(() => {
        button.textContent = labels.copy;
      }, 2000);
    });
    code.parentElement.appendChild(button);
  });
})();

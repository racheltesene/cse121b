function showTab(tabId) {
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(tabId).style.display = 'block';
}

// Show the first tab by default
showTab('filamentTab');
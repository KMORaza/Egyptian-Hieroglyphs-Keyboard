const start = 0x13000; 
const end = 0x1342F;   
const container = document.getElementById('hieroglyphs');
const tooltip = document.getElementById('tooltip');

function showTooltip(element) {
    const rect = element.getBoundingClientRect(); 
    tooltip.style.display = 'block';
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 5}px`; 
    setTimeout(() => {
        tooltip.style.display = 'none';
    }, 2000);
}

for (let codePoint = start; codePoint <= end; codePoint++) {
    const symbol = String.fromCodePoint(codePoint);
    const span = document.createElement('span');
    span.textContent = symbol;
    span.className = 'hieroglyph';
    span.addEventListener('click', (event) => {
        navigator.clipboard.writeText(symbol).then(() => {
            showTooltip(event.target);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
    container.appendChild(span);
}

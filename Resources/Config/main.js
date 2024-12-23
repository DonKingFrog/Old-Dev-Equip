function copyCode() {
    const codeBlock = document.getElementById('code-block');
    const range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges();  // Clear existing selections
    window.getSelection().addRange(range);
    window.getSelection().removeAllRanges();  // Clear selections after copying
}

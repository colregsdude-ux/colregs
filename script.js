<script>
  const ruleLinks = [
    ...document.querySelectorAll('.card')
  ].map(card => card.href);

  let currentRandom = null;

  function generateRandomRule() {
    let newRule;
    do {
      newRule = ruleLinks[Math.floor(Math.random() * ruleLinks.length)];
    } while (newRule === currentRandom);

    currentRandom = newRule;
    return newRule;
  }

  document.getElementById('randomBtn').addEventListener('click', () => {
    if (!currentRandom) {
      currentRandom = generateRandomRule();
    }
    window.open(currentRandom, '_blank', 'noopener,noreferrer');
  });

  document.getElementById('shuffleBtn').addEventListener('click', () => {
    currentRandom = generateRandomRule();
  });
</script>

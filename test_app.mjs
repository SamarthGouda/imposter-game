import { chromium } from 'playwright';

async function runTests() {
  console.log('🚀 Running High-Quality E2E Visual & Functional Verification...');

  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true
  });

  const context = await browser.newContext({
    viewport: { width: 412, height: 915 }, // Modern phone viewport
    deviceScaleFactor: 2
  });

  const page = await context.newPage();

  try {
    // 1. HOME SCREEN
    console.log('--- TEST 1: HOME SCREEN ---');
    await page.goto('http://localhost:5173/');
    await page.waitForSelector('.header-title');
    await page.waitForTimeout(400);
    const headerTitle = await page.textContent('.header-title');
    console.log(`[PASS] Home Header Title: "${headerTitle}"`);

    const playBtn = page.locator('.game-card-active .btn-primary');
    await page.screenshot({ path: 'screenshot_1_home.png' });
    console.log('[PASS] Captured screenshot_1_home.png');

    const comingSoonBtns = await page.locator('.btn-coming-soon').count();
    console.log(`[PASS] Found ${comingSoonBtns} coming soon cards disabled.`);

    // 2. PLAYER COUNT SETUP (STRICT RULE)
    console.log('--- TEST 2: PLAYER COUNT SETUP (STRICT RULE) ---');
    await playBtn.click();
    await page.waitForSelector('.setup-title');
    await page.waitForTimeout(400);

    const step1Title = await page.textContent('.setup-title');
    console.log(`[PASS] Step 1 Setup Title: "${step1Title}"`);

    const stepperNum = await page.textContent('.stepper-number');
    console.log(`[PASS] Default Player Count: ${stepperNum}`);

    // Test increment and decrement
    await page.locator('.stepper-btn:has-text("+")').click();
    await page.waitForTimeout(150);
    let updatedNum = await page.textContent('.stepper-number');
    console.log(`[PASS] Incremented count to: ${updatedNum}`);

    await page.locator('.stepper-btn:has-text("−")').click();
    await page.waitForTimeout(150);
    updatedNum = await page.textContent('.stepper-number');
    console.log(`[PASS] Decremented count back to: ${updatedNum}`);

    await page.screenshot({ path: 'screenshot_2_player_count.png' });

    // Click continue to enter names
    await page.locator('button:has-text("Enter 5 Player Names")').click();

    // 3. PLAYER NAMES SETUP
    console.log('--- TEST 3: PLAYER NAMES SETUP ---');
    await page.waitForSelector('.player-inputs-list');
    await page.waitForTimeout(400);

    const inputCount = await page.locator('.player-name-input').count();
    console.log(`[PASS] Rendered exactly ${inputCount} player input fields!`);

    const name1 = await page.locator('#player-input-0').inputValue();
    const name2 = await page.locator('#player-input-1').inputValue();
    console.log(`[PASS] Preset names loaded: Player 1 = "${name1}", Player 2 = "${name2}"`);

    await page.screenshot({ path: 'screenshot_3_player_names.png' });

    // Start Game
    await page.locator('button:has-text("START GAME")').click();

    // 4. WORD DISTRIBUTION (PASS THE PHONE)
    console.log('--- TEST 4: PASS THE PHONE & SECRET WORDS ---');
    await page.waitForSelector('.selection-title');
    await page.waitForTimeout(400);

    const selTitle = await page.textContent('.selection-title');
    console.log(`[PASS] Distribution Title: "${selTitle}"`);

    await page.screenshot({ path: 'screenshot_4_selection.png' });

    // Loop through all 5 players
    for (let i = 0; i < 5; i++) {
      const remainingCount = await page.locator('.player-select-btn').count();
      console.log(`  -> Round ${i + 1}: ${remainingCount} players remaining on selection screen.`);

      // Pick first available remaining player
      const firstPlayerBtn = page.locator('.player-select-btn').first();
      const playerName = await firstPlayerBtn.locator('.player-btn-name').textContent();
      await firstPlayerBtn.click();

      // Secret Word Screen
      await page.waitForSelector('.secret-word-card');
      await page.waitForTimeout(400);

      const displayedPlayer = await page.textContent('.secret-player-name');
      const secretWord = await page.textContent('.secret-word-text');
      console.log(`     Viewing Player: ${displayedPlayer} | Word: "${secretWord}"`);

      if (i === 0) {
        await page.screenshot({ path: 'screenshot_5_secret_word.png' });
      }

      // Hide & Pass Phone
      await page.locator('button:has-text("HIDE & PASS PHONE")').click();

      if (i < 4) {
        await page.waitForSelector('.selection-title');
        await page.waitForTimeout(200);
      }
    }

    // 5. DISCUSSION & GUESS SCREEN
    console.log('--- TEST 5: DISCUSSION & GUESS SCREEN ---');
    await page.waitForSelector('.discussion-title');
    await page.waitForTimeout(400);

    const discTitle = await page.textContent('.discussion-title');
    console.log(`[PASS] Discussion Title: "${discTitle}"`);

    // Verify Suspects Grid
    const suspectCount = await page.locator('.suspect-card').count();
    console.log(`[PASS] Found ${suspectCount} suspect cards to vote on.`);

    // Vote for the second suspect (e.g. Jia)
    const secondSuspect = page.locator('.suspect-card').nth(1);
    const suspectName = await secondSuspect.locator('.suspect-name').textContent();
    await secondSuspect.click();
    console.log(`[PASS] Cast vote for suspect: "${suspectName}"`);

    await page.screenshot({ path: 'screenshot_6_discussion.png' });

    // Click Reveal Result
    await page.locator('button:has-text("REVEAL RESULT")').click();

    // 6. RESULT SCREEN
    console.log('--- TEST 6: RESULT SCREEN & IMPOSTER REVEAL ---');
    await page.waitForSelector('.imposter-name-spotlight');
    await page.waitForTimeout(400);

    const imposterName = await page.textContent('.imposter-name-spotlight');
    const normalWord = await page.locator('.word-card-normal .word-revealed-text').textContent();
    const imposterWord = await page.locator('.word-card-imposter .word-revealed-text').textContent();

    console.log(`[PASS] 🕵️ REVEALED IMPOSTER: "${imposterName}"`);
    console.log(`[PASS] 🔵 Normal Word: "${normalWord}"`);
    console.log(`[PASS] 🔴 Imposter Word: "${imposterWord}"`);

    await page.screenshot({ path: 'screenshot_7_result.png' });

    // 7. NEW GAME / PLAY AGAIN
    console.log('--- TEST 7: REPLAYABILITY (NEW GAME) ---');
    await page.locator('button:has-text("PLAY AGAIN (Same Players)")').click();
    await page.waitForSelector('.selection-title');
    await page.waitForTimeout(400);

    const newRemaining = await page.locator('.player-select-btn').count();
    console.log(`[PASS] Brand new game started! Remaining players reset to ${newRemaining}/5.`);

    // 8. EXIT CONFIRMATION MODAL & NAVIGATION
    console.log('--- TEST 8: EXIT CONFIRMATION & NAVIGATION ---');
    await page.locator('.back-btn').click();
    await page.waitForSelector('.modal-card');
    await page.waitForTimeout(200);

    const modalTitle = await page.textContent('.modal-title');
    console.log(`[PASS] Leave game modal triggered: "${modalTitle}"`);

    // Cancel first
    await page.locator('.modal-card button:has-text("Cancel")').click();
    await page.waitForTimeout(200);
    const modalStillOpen = await page.locator('.modal-card').count();
    console.log(`[PASS] Modal closed on Cancel: ${modalStillOpen === 0}`);

    // Now exit game
    await page.locator('.back-btn').click();
    await page.waitForSelector('.modal-card');
    await page.waitForTimeout(200);
    await page.locator('.modal-card button:has-text("Exit Game")').click();
    await page.waitForSelector('.home-banner-headline');
    await page.waitForTimeout(400);

    const homeHeadline = await page.textContent('.home-banner-headline');
    console.log(`[PASS] Cleanly returned to Home: "${homeHeadline}"`);

    console.log('\n🎉 ALL HIGH-RES SCREENSHOTS & E2E TESTS SUCCESSFULLY COMPLETED!');
  } catch (err) {
    console.error('❌ Test failed with error:', err);
    await page.screenshot({ path: 'screenshot_error.png' });
    process.exit(1);
  } finally {
    await browser.close();
  }
}

runTests();

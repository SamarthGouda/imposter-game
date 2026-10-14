# 🕵️ Imposter - Party Social Deduction Game

An interactive, responsive party game built with React, Vite, and modern Web Audio & animation APIs. Players take turns discovering their secret word while one or more hidden imposters receive a sneaky clue or alternate word. Once all players have checked their secret, a discussion timer starts to uncover who the imposters are!

---

## 🚀 Features

- **Dynamic Player Count**: 3 to 12 players with customizable imposter ratios.
- **Custom Player Names**: Automatically saves your squad names to `localStorage`.
- **Secret Word Reveal**: Privacy card interaction with "Hold / Tap to View" so adjacent players cannot peek.
- **Curated Word Pairs**: High-replayability category word sets (Food, Pop Culture, Technology, Animals, Everyday Objects).
- **Interactive Discussion Timer**: Built-in countdown, pause/resume, and discussion prompts.
- **Confetti & Sound Effects**: Synthesized web audio sounds (chimes, clicks, alerts) and confetti victory celebration.
- **Mobile First & Responsive**: Optimized for phones passed around the room or desktop displays.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Run Oxlint
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deploy to Vercel

This repository is already pre-configured for **Vercel** with `vercel.json` routing rules for client-side single page applications.

### Option 1: Deploy with Vercel CLI (Fastest)

Run this command in your terminal:

```bash
npx vercel
```

1. It will prompt you to log in to Vercel (press Enter to open browser).
2. Accept the default project settings (it detects Vite automatically).
3. To deploy to your production URL:
   ```bash
   npx vercel --prod
   ```

### Option 2: Deploy with GitHub Integration (Continuous Deployment)

1. Create a new repository on [GitHub](https://github.com/new) (e.g. `imposter-game`).
2. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/imposter-game.git
   git push -u origin main
   ```
3. Visit [vercel.com/new](https://vercel.com/new) and click **Import** next to your `imposter-game` repo.
4. Keep the default build settings (`npm run build` and `dist`) and click **Deploy**.
5. Every push to `main` will automatically deploy live updates!

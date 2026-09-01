# React Final Countdown
 
A small React game that tests how well you can "beat the clock." Pick a difficulty, hit **Start Challenge**, and try to stop the timer as close to the target time as possible — stop too early or too late (or not at all) and you lose.
 
## How It Works
 
- Set your player name from the welcome section.
- Choose one of four challenges, each with a different target time: **Easy** (1s), **Not Easy** (5s), **Getting Tough** (10s), and **Pros Only** (15s).
- Click **Start Challenge** to begin the countdown, then click **Stop** whenever you think you're closest to the target time.
- If you stop it in time, a modal shows your score (based on how close you got to the target). If the timer runs out before you stop it, you lose the challenge.
## Tech Stack
 
- [React 19](https://react.dev/)
- Create React App (`react-scripts`)
- Plain CSS per component
## Project Structure
 
```
src/
├── components/
│   ├── App/            # Root layout
│   ├── Player/          # Name input / welcome section
│   ├── TimerChallenge/  # Timer logic and controls for each difficulty
│   └── ResultModal/     # Score / result dialog shown via a native <dialog>
└── index.js
```
 
## Getting Started
 
Clone the repo and install dependencies:
 
```bash
git clone https://github.com/DevouraStudio/React-Final-Countdown.git
cd React-Final-Countdown
npm install
```
 
Run the app locally:
 
```bash
npm start
```
 
The app will be available at `http://localhost:3000`.
 
## Available Scripts
 
- `npm start` – runs the app in development mode
- `npm run build` – builds the app for production
- `npm test` – runs the test runner

## Created With
 
This project was originally created with [CodeSandbox](https://codesandbox.io/).

## Author

- Website - [DevouraStudio](https://www.devoura.ir)
- Frontendmentor - [@DevouraStudio](https://www.frontendmentor.io/profile/DevouraStudio)
- Github - [@DevouraStudio](https://www.github.com/DevouraStudio)
- Codepen - [@DevouraStudio](https://www.codepen.io/DevouraStudio)
- Codesandbox - [@DevouraStudio](https://codesandbox.io/u/DevouraStudio)
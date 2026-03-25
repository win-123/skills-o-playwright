# Skills-O-Playwright

A universal Playwright skill for Claude Code to enable autonomous browser automation.

## Features

- **Dynamic Automation** - Claude generates custom Playwright code on-the-fly
- **Visible Browser** - Watch automation in real-time for debugging
- **Simple API** - Easy to use and integrate
- **Screenshot Capture** - Automatic screenshot of final state
- **Console Logging** - Captures all browser console output

## Installation

```bash
npm install
```

## Usage

This skill allows Claude to write and execute Playwright automation scripts. Simply ask Claude to perform browser tasks:

- "Navigate to example.com and click the login button"
- "Fill out the contact form with test data"
- "Extract all product titles from the page"

## How It Works

1. Claude interprets your automation request
2. Generates custom Playwright code
3. Executes the code with visible browser
4. Returns screenshots and console logs

## Requirements

- Node.js 16+
- Playwright

## License

MIT

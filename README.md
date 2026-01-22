# Veritas AI - Self-Auditing AI System

An advanced AI system that generates answers and critically evaluates its own responses, providing a structured report with verifiable claims, confidence scores, and risk assessments for high-stakes applications.

## Overview

Veritas AI is a sophisticated system built on Base44 (no-code platform) that:
- Generates AI responses to user queries
- Performs critical self-evaluation and auditing
- Provides structured reports with confidence scores
- Identifies and assesses risks in responses
- Ensures verifiable and trustworthy AI outputs

## Features

- **Self-Auditing**: Automatically evaluates the quality and accuracy of generated responses
- **Verifiable Claims**: Each claim is tracked and assessed for verifiability
- **Confidence Scoring**: Provides confidence levels for each component of the response
- **Risk Assessment**: Identifies potential risks and limitations
- **Structured Reports**: Generates comprehensive, organized reports with all findings

## Project Structure

```
.
├── index.html              # Main HTML entry point
├── manifest.json           # Web app manifest for PWA support
├── public/
│   └── assets/            # Compiled CSS and JavaScript
│       ├── index-CUhlxpCT.css
│       └── index-DA0vSYf3.js
├── README.md              # This file
└── docs/                  # Documentation
```

## Running the Application

### Option 1: Using a Local Server

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Then navigate to http://localhost:8000
```

### Option 2: Direct File Opening

Simply open `index.html` in your web browser.

### Option 3: Live Deployment

Visit: https://veritas-ai-a3f1a238.base44.app

## Technology Stack

- **Base44**: No-code platform for application development
- **Vite**: Build tool (assets compiled to optimized JS/CSS)
- **Supabase**: Backend storage for assets
- **React**: Frontend framework (bundled in assets)

## Build Information

- CSS Bundle: `public/assets/index-CUhlxpCT.css`
- JS Bundle: `public/assets/index-DA0vSYf3.js`
- Both files are minified and optimized for production

## Development Notes

This is a Base44 application, which is a no-code/low-code platform. The source code is compiled into the minified assets. To modify the application:

1. Access the Base44 project editor (requires credentials)
2. Make changes in the visual editor
3. Deploy to the platform

## Contributing

For contributions to this repository, please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is proprietary. All rights reserved.

## Support

For issues or questions about this application, please refer to the Base44 platform documentation or contact the development team.

---

**Project ID**: 697228e1ef6d9b1ba3f1a238
**Platform**: Base44
**Status**: Active and Deployed

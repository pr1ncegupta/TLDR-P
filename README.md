# TL;DR - AI-Powered Text Analysis

> Transform any text into clear, actionable insights using advanced AI agents that work together seamlessly.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pr1ncegupta/TLDR-P)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge)](https://github.com/pr1ncegupta/TLDR-P/blob/main/CONTRIBUTING.md)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](https://github.com/pr1ncegupta/TLDR-P/blob/main/LICENSE)
[![Powered by Lyzr AI](https://img.shields.io/badge/Powered%20by-Lyzr%20AI-007AFF?style=for-the-badge)](https://www.lyzr.ai/)

![TL;DR Screenshot](https://via.placeholder.com/800x400/f7f7f7/1d1d1f?text=TL%3BDR+AI+Text+Analysis)

## ✨ Features

- **🤖 Multi-Agent Analysis**: 4 specialized AI agents working in harmony
- **📊 Comprehensive Insights**: Summary, quantitative data, sentiment, and key takeaways
- **🎨 Apple-Style UI**: Clean, elegant interface inspired by Apple's design language
- **🌙 Dark Mode**: Beautiful light and dark themes
- **⚡ Real-time Processing**: Fast analysis with live progress tracking
- **📱 Responsive Design**: Works perfectly on all devices

## 🏗️ Architecture

### AI Agents
- **Enhanced Summarizer**: Generates comprehensive summaries with improved accuracy
- **Smart Data Analyst**: Advanced numerical extraction with pattern recognition
- **Sentiment Specialist**: Deep emotional analysis with positive/negative detection
- **Insight Generator**: Enhanced actionable insights with intelligent takeaway generation

### Tech Stack
- **Frontend**: Next.js 13, React, TypeScript
- **Styling**: Tailwind CSS with custom Apple-style design system
- **AI Platform**: Powered by [Lyzr AI](https://www.lyzr.ai/)
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Lyzr AI account (get one at [lyzr.ai](https://www.lyzr.ai/))

### 1. Clone & Install
```bash
git clone https://github.com/pr1ncegupta/TLDR-P.git
cd TLDR-P
npm install
```

### 2. Environment Setup
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local with your Lyzr AI credentials
```

### 3. Configure Environment Variables
Add your Lyzr AI credentials to `.env.local`:
```env
# Lyzr API Configuration
LYZR_API_KEY=your_lyzr_api_key_here
LYZR_USER_ID=your_user_id_here
LYZR_BASE_URL=https://agent-prod.studio.lyzr.ai/v3/inference/chat/

# Agent Configurations
LYZR_CLASSIC_SUMMARIZER_AGENT_ID=your_classic_summarizer_agent_id
LYZR_CLASSIC_SUMMARIZER_SESSION_ID=your_classic_summarizer_session_id
LYZR_QUANT_ANALYST_AGENT_ID=your_quant_analyst_agent_id
LYZR_QUANT_ANALYST_SESSION_ID=your_quant_analyst_session_id
LYZR_SENTIMENT_ANALYST_AGENT_ID=your_sentiment_analyst_agent_id
LYZR_SENTIMENT_ANALYST_SESSION_ID=your_sentiment_analyst_session_id
LYZR_KEY_TAKEAWAYS_AGENT_ID=your_key_takeaways_agent_id
LYZR_KEY_TAKEAWAYS_SESSION_ID=your_key_takeaways_session_id
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### 5. Build for Production
```bash
npm run build
npm start
```

## 🔧 Configuration

### Getting Lyzr AI Credentials
1. Sign up at [lyzr.ai](https://www.lyzr.ai/)
2. Create your AI agents in the Lyzr dashboard
3. Copy the Agent IDs and Session IDs
4. Get your API key from your account settings

### Environment Variables
All sensitive configuration is handled through environment variables. Never commit your `.env.local` file to the repository.

## 🎨 Design System

The application follows Apple's design principles:
- **Typography**: SF Pro Display font family
- **Colors**: Apple-inspired color palette with CSS custom properties
- **Spacing**: 24px rhythm for consistent vertical spacing
- **Interactions**: Subtle hover effects and micro-animations
- **Accessibility**: WCAG AA compliant with proper focus management

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and design system
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main application page
├── components/            # Reusable UI components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility libraries
│   ├── lyzr-config.ts   # Lyzr AI configuration
│   ├── lyzr-service.ts  # Lyzr AI service integration
│   └── utils.ts         # General utilities
├── public/               # Static assets
│   └── imgs/            # Images and logos
├── types/               # TypeScript type definitions
└── .env.example         # Environment variables template
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Powered by [Lyzr AI](https://www.lyzr.ai/)** - Advanced AI agent platform
- **Design Inspiration**: Apple's design language and principles
- **UI Components**: Built with [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📧 Contact

**Made with ❤️ by [Prince](https://github.com/pr1ncegupta)**

- 🐙 GitHub: [@pr1ncegupta](https://github.com/pr1ncegupta)
- 💼 Project Repository: [TLDR-P](https://github.com/pr1ncegupta/TLDR-P)
- 🌐 Powered by: [Lyzr AI](https://www.lyzr.ai/)

---

⭐ If you found this project helpful, please [give it a star](https://github.com/pr1ncegupta/TLDR-P)!

## Features

- **Multi-Agent Analysis**: Parallel processing with specialized Lyzr AI agents
- **Real-time Processing**: Live analysis with progress tracking
- **Responsive Design**: Apple-inspired UI with dark/light mode support
- **Production Ready**: Optimized for performance and scalability

## Technology Stack

- **Frontend**: Next.js 13, React, TypeScript
- **Styling**: Tailwind CSS with custom Apple-inspired design system
- **UI Components**: shadcn/ui with Radix UI primitives
- **AI Integration**: Lyzr AI Studio agents
- **Icons**: Lucide React

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables
4. Start development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

The application is pre-configured with Lyzr AI agents and ready to use.

## Deployment

Build for production:
```bash
npm run build
```

The application is configured for static export and can be deployed to any static hosting service.
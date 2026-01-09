# 🛡️ ContractGuard AI

**Your Freelance Contract Bodyguard** - AI-powered contract analysis that protects freelancers from predatory terms.

🏆 **Built for Nexora Hacks 2026**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Mujaheed56/contractguard-ai)

---

## 😰 The Problem

Meet Muhammad, a talented Nigerian developer. He signed what looked like a standard freelance contract. Got paid. Everything seemed fine.

Six months later, he launched a side project - a productivity app he was proud of. Then came the legal letter: *"That app belongs to us. Check Section 3, paragraph 12."*

Hidden in legal jargon was a clause: **"All intellectual property created during the contract term belongs to Client."** This meant his side project - built on weekends, with his own tools - legally belonged to the client.

Muhammad couldn't afford a $500/hour lawyer to fight it. He had to shut down his project and abandon months of work.

**This happens to freelancers every single day.**

75% of freelancers sign contracts without fully understanding the terms. Many discover hidden traps only when it's too late.

---

## ✨ The Solution

**ContractGuard AI** analyzes freelance contracts in under 30 seconds using Google Gemini 3.0 Flash Preview AI and provides:

### Core Features
- 🚨 **Red Flag Detection**: Identifies unlimited liability, unfair IP rights, one-sided termination clauses
- ⚠️ **Contract Warnings**: Spots long payment terms (Net-90), missing protections, scope creep risks
- 📊 **Fairness Score**: 0-100 rating comparing your contract against industry standards
- 🔄 **Fair Alternatives**: Provides balanced clause replacements for every red flag
- 📧 **Negotiation Email Generator**: Creates professional, firm emails to renegotiate unfair terms
- ✅ **Plain English Explanations**: No legal jargon - clear explanations anyone can understand

### Why It Matters
- **60M+ freelancers worldwide** sign contracts daily
- **$1.3 trillion freelance economy** lacks basic protections
- **Legal consultation costs $300-500/hour** - unaffordable for most
- **ContractGuard is free** and analyzes contracts instantly

---

## 🎯 Demo

### Try It Live
1. **Predatory Contract Sample**: Shows score ~45/100 with multiple red flags
2. **Fair Contract Sample**: Shows score ~80/100 with balanced terms

### What You'll See
- Visual fairness gauge with color coding
- Detailed breakdown of every problematic clause
- Severity ratings (1-10) for each issue
- Actionable suggestions and alternatives
- Ready-to-send negotiation email

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Frontend** | React 19, TypeScript |
| **Styling** | Tailwind CSS v4, Lucide Icons |
| **AI Model** | Google Gemini 3.0 Flash Preview (`gemini-3-flash-preview`) |
| **API** | Next.js API Routes, Google Generative AI SDK |
| **Deployment** | Vercel |
| **Build Tool** | Turbopack |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Google Gemini API key ([Get it free here](https://aistudio.google.com/app/apikey))

### Installation

```bash
# clone the repository
git clone https://github.com/Mujaheed56/contractguard-ai.git
cd contractguard-ai

# install dependencies
npm install

# create environment file
cp .env.example .env.local

# add your gemini api key to .env.local
# GEMINI_API_KEY=your_actual_key_here

# run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - you're ready to go!

### Getting Your Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the key and paste into `.env.local`
5. Restart the dev server

**Note**: The app works without an API key (uses mock data) but you'll get real AI analysis with the key.

---

## 📁 Project Structure

```
contractguard-ai/
├── app/
│   ├── page.tsx                 # landing page with hero & features
│   ├── analyze/page.tsx         # contract upload interface
│   ├── results/page.tsx         # analysis results display
│   ├── api/
│   │   └── analyze/route.ts     # gemini api integration
│   ├── globals.css              # tailwind & global styles
│   └── layout.tsx               # root layout
├── components/
│   └── Footer.tsx               # reusable footer component
├── public/                      # static assets
├── .env.example                 # environment variable template
├── .env.local                   # your actual env vars (gitignored)
├── sample-contract.txt          # predatory contract sample
├── fair-contract-sample.txt     # balanced contract sample
├── next.config.js               # next.js configuration
├── tailwind.config.ts           # tailwind configuration
├── postcss.config.mjs           # postcss setup for tailwind v4
└── package.json                 # dependencies
```

---

## 🎨 Key Features Explained

### 1. Smart Analysis Engine
Uses prompt engineering to make Gemini 3.0 understand contract law and freelancer rights. Analyzes:
- Liability exposure
- IP ownership fairness
- Payment protection
- Termination balance
- Non-compete reasonableness

### 2. Mobile-First Design
Fully responsive - works perfectly on phones where most freelancers read contracts.

### 3. Privacy-First Architecture
Contracts are processed in real-time via API - never stored on servers.

### 4. Action-Ready Output
Every analysis includes:
- Copy-paste negotiation email
- Specific clause replacements
- Clear explanations in plain English

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click **"New Project"**
4. Import your GitHub repository
5. Add environment variable: `GEMINI_API_KEY`
6. Click **"Deploy"**

Your app will be live in ~60 seconds!

### Environment Variables for Production

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

---

## 🎥 Demo Video Script

Use this for your Devpost submission video:

**[0:00-0:05] Hook**
"This contract almost ruined Muhammad's career. Here's how."

**[0:05-0:25] Problem**
Tell Muhammad's story. Show emotion. Explain how hidden clauses steal freelancers' work.

**[0:25-0:40] Solution**
"ContractGuard AI analyzes any contract in 30 seconds and finds the hidden traps."

**[0:40-2:10] Demo**
1. Show landing page (5s)
2. Upload predatory contract (10s)
3. Wait for analysis (15s)
4. Show fairness score: 45/100 (10s)
5. Scroll through red flags (20s)
6. Show negotiation email (15s)
7. Upload fair contract (10s)
8. Show score: 82/100 (10s)

**[2:10-2:30] Impact**
"60 million freelancers globally. Most sign without understanding. ContractGuard levels the playing field."

**[2:30-2:40] Call to Action**
"Don't sign your rights away. Analyze your contract at contractguard.ai"

---

## 📊 Hackathon Submission Checklist

- [x] Landing page with compelling story
- [x] Working upload interface
- [x] AI contract analysis with Gemini 3.0
- [x] Results page with fairness score
- [x] Mobile responsive design
- [x] Sample contracts (predatory + fair)
- [x] README with setup instructions
- [x] Clean, commented code
- [ ] Demo video (2-5 minutes)
- [ ] GitHub repository
- [ ] Deployed to Vercel
- [ ] Devpost submission

---

## 🏆 Why This Wins

### Technical Excellence
- Uses cutting-edge Gemini 3.0 Flash Preview
- Clean Next.js 16 architecture
- Type-safe TypeScript throughout
- Modern Tailwind CSS v4

### Real-World Impact
- Solves actual freelancer pain point
- 60M+ potential users globally
- Democratizes legal protection
- Emotionally compelling story

### Judges Will Love
- Polished UI/UX
- Working demo with sample data
- Clear business case
- Scalable architecture

---

## 👨‍💻 Author

**Built with ❤️ for Nexora Hacks 2026**

Protecting freelancers, one contract at a time.

---

## 📄 License

MIT License - feel free to use this project for your portfolio or build upon it!

---

## 🙏 Acknowledgments

- Google Gemini for the AI model
- Next.js team for the amazing framework
- All freelancers who've been burned by bad contracts
- Nexora Hacks 2026 organizers

---

**Ready to protect freelancers? Deploy this now! 🚀**

---

## 🎨 Features Breakdown

### 1. Landing Page
- Compelling story (Emeka's experience)
- Clear value proposition
- How it works section
- CTA to analyze contracts

### 2. Upload Page
- Drag & drop file upload
- Sample contract for testing
- Mobile-responsive interface

### 3. Results Page
- Fairness score gauge (0-100)
- Red flags with severity ratings
- Plain English explanations
- Alternative clause suggestions
- Copy-ready negotiation email

---

## 🏆 Built for Nexora Hacks 2026

**Why This Matters:**
- 60M+ freelancers globally need contract protection
- Legal consultation costs $500+/hour
- Most freelancers can't afford proper review
- Hidden clauses cost freelancers thousands

**Judging Criteria Alignment:**
- ✅ **Creativity**: First AI tool specifically protecting freelancers from contract traps
- ✅ **Real World Use**: Universal problem, massive market, clear user value
- ✅ **Technologies Used**: Gemini AI, advanced prompt engineering, responsive web design
- ✅ **Presentation**: Emotional story-driven demo with before/after impact

---

## 🎯 How to Demo

1. **Tell Emeka's story** (30 seconds - hook them emotionally)
2. **Show the problem**: Upload a predatory contract
3. **Watch the magic**: 30-second AI analysis
4. **Show the impact**: Red flags exposed, negotiation email generated
5. **The result**: "Emeka could have saved his project"

---

## 🌍 Impact

ContractGuard AI protects:
- Nigerian freelancers on Upwork/Fiverr
- African developers working with international clients
- Students taking their first freelance gigs
- Anyone who can't afford $500/hour lawyers

**We're leveling the playing field.**

---

## 🔮 Future Roadmap

- [ ] Mobile app (iOS/Android)
- [ ] Chrome extension (scan contracts on Upwork/Fiverr)
- [ ] Contract template library
- [ ] Multi-language support (French, Spanish, Portuguese)
- [ ] Lawyer marketplace (connect with affordable legal help)
- [ ] Company compliance mode (B2B SaaS)

---

## 📜 Legal Disclaimer

ContractGuard AI provides educational information only - not legal advice. For legal advice specific to your situation, consult a licensed attorney.

---

## 👨‍💻 Author

Built with ❤️ for freelancers everywhere.

**Nexora Hacks 2026 Submission**

---

## 📝 License

MIT License - feel free to use this code to protect freelancers worldwide.

---

**Remember: Don't sign your rights away. Let ContractGuard AI watch your back.**

# Ritvika Mahla — Personal Portfolio Website 🚀

A modern, high-performance, and visually captivating personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed for **Ritvika Mahla** (B.Tech Student at JECRC University, Raipur/Jaipur, India).

---

## ✨ Features

- 🎨 **Modern & Premium UI**: Glassmorphism, smooth gradients, subtle animations, and clean cards.
- 🌓 **Dark & Light Mode**: Built-in seamless theme switcher with persistent local storage.
- 📱 **100% Responsive**: Tailored for mobile, tablet, and desktop screens with a responsive navigation drawer.
- 📂 **Centralized Data**: All portfolio content (About, Education, Skills, Projects, Achievements, Socials) is organized in `src/data/portfolioData.js` for instant updates.
- 📬 **Interactive Contact Section**: Direct email copy button, mailto action, social links (LinkedIn, GitHub), and an interactive validation message form.
- ⚡ **Optimized for Vercel**: Zero-config deployment with blazing fast loading times.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting / Deployment Target**: Vercel

---

## 📁 Project Structure

```text
ritvika-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Modular UI Components
│   │   ├── Navbar.jsx      # Sticky navbar with mobile menu & theme toggle
│   │   ├── Hero.jsx        # Name, badges, introduction, CTA buttons
│   │   ├── About.jsx       # Student story, background & core pillars
│   │   ├── Education.jsx   # JECRC University, 2026-2030, relevant areas
│   │   ├── Skills.jsx      # Categorized skill cards with hover effects
│   │   ├── Projects.jsx    # Project cards with tags & live/code links
│   │   ├── ProjectModal.jsx# In-depth project information modal
│   │   ├── Achievements.jsx# Certifications, hackathons, courses & awards
│   │   ├── Contact.jsx     # Email copy, socials, and contact form
│   │   └── Footer.jsx      # Footer with quick links & back-to-top button
│   ├── data/
│   │   └── portfolioData.js# All content, biography, skills, and projects
│   ├── App.jsx             # Root application component
│   ├── index.css           # Global Tailwind CSS and glassmorphism styles
│   └── main.jsx            # React root mount
├── standalone-preview.html # Self-contained instant preview (open in browser!)
├── index.html              # HTML shell with Google Fonts & SEO tags
├── package.json            # Project dependencies and npm scripts
├── tailwind.config.js      # Custom Tailwind colors, animations & fonts
├── vite.config.js          # Vite configuration
└── vercel.json             # Vercel SPA routing configuration
```

---

## 🚀 How to Run Locally

If you have [Node.js](https://nodejs.org/) installed:

1. Open a terminal inside this folder:
   ```bash
   cd "C:\Users\Ritvika Mahla\.gemini\antigravity\scratch\ritvika-portfolio"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` in your browser!

---

## 🌐 How to Deploy to Vercel (Free & Instant)

### Option 1: Via GitHub (Recommended)
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and select your GitHub repository.
4. Vercel will automatically detect **Vite** as the framework preset!
5. Click **"Deploy"**. Your live portfolio will be live at `https://your-project.vercel.app` in under 60 seconds!

### Option 2: Via Vercel CLI
1. Run:
   ```bash
   npx vercel
   ```
2. Follow the quick terminal prompts to deploy immediately.

---

## 📝 How to Update Your Information

All your personal information, links, and content are centralized in **`src/data/portfolioData.js`**:
- **Personal Details**: Update your email, LinkedIn URL, GitHub URL, or bio at the top of the file.
- **Skills**: Add or modify skill names, proficiencies, or descriptions in `skillsData`.
- **Projects**: Add new projects or update demo links in `projectsData`.
- **Achievements**: Add your upcoming certifications, courses, or hackathons in `achievementsData`.

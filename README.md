# Sankalp Bhandari - Portfolio Website

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-sankalpbhandari.github.io-ffb400?style=for-the-badge)](https://sankalpbhandari.github.io)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-222222?style=for-the-badge&logo=github)](https://pages.github.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

A modern, responsive personal portfolio website showcasing my professional experience, projects, skills, and achievements as a Software Development Engineer at AWS.

![Portfolio Preview](images/me-v2.jpg)

---

## ✨ Features

- **🌓 Dark/Light Mode** - Automatic theme detection with manual toggle and localStorage persistence
- **📱 Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **⚡ Performance Optimized** - Lazy loading, resource hints, optimized images
- **🎨 Modern Design** - Clean UI with smooth animations and transitions
- **📊 GitHub Integration** - Live GitHub stats, contribution graph, and popular repositories
- **📝 Blog Section** - Preview cards for latest blog posts with links to external platforms
- **💼 Projects Showcase** - Featured projects with descriptions and technology tags
- **🛠️ Skills Visualization** - Interactive skill categories with progress indicators
- **💬 Testimonials** - Recommendations section with professional endorsements
- **📧 Contact Form** - Working contact form with Formspree integration
- **📈 Analytics Ready** - Google Analytics 4 integration with privacy controls
- **🔍 SEO Optimized** - Comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **♿ Accessible** - ARIA labels, semantic HTML, keyboard navigation support
- **🔄 PWA Support** - Web App Manifest for installable experience

---

## 🛠️ Technology Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **CSS Framework** | Bootstrap 5.3 |
| **Icons** | Font Awesome 6.5 |
| **Fonts** | Google Fonts (Inter, Poppins) |
| **Analytics** | Google Analytics 4 |
| **Contact Form** | Formspree |
| **Deployment** | GitHub Pages |

---

## 📁 Project Structure

```
sankalpbhandari.github.io/
├── index.html          # Main HTML file with all sections
├── styles.css          # Custom CSS with CSS variables and themes
├── manifest.json       # PWA manifest for installable web app
├── robots.txt          # Search engine crawling instructions
├── sitemap.xml         # XML sitemap for SEO
├── sw.js               # Service Worker for offline support
├── images/             # Image assets
│   ├── me-v2.jpg       # Profile photo
│   ├── logo.jpeg       # Favicon/logo
│   └── ...             # Timeline and other images
├── Resume_Sankalp_Bhandari.pdf  # Downloadable resume
├── task_state.json     # Development task tracking
└── README.md           # This file
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- (Optional) A local web server for development

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/sankalpbhandari/sankalpbhandari.github.io.git
   cd sankalpbhandari.github.io
   ```

2. **Open in browser**
   
   Simply open `index.html` in your browser, or use a local server:

   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (npx)
   npx serve

   # Using PHP
   php -S localhost:8000
   ```

3. **View the site**
   
   Open `http://localhost:8000` in your browser.

---

## 🎨 Customization Guide

### Updating Personal Information

#### Header Section
Edit the header section in `index.html` (around line 283-316):

```html
<h1 class='header-text-name'>Your Name Here</h1>
<p class='header-text-email'>
    Your Job Title <br>
    Your Education/Location
</p>
```

#### Contact Information
Update contact details in multiple places:
- Header social links (line ~297-312)
- Footer section (line ~1482-1523)
- Contact section (line ~1419-1448)
- JSON-LD structured data (line ~78-129)
- Meta tags (line ~7-50)

#### Profile Image
Replace `images/me-v2.jpg` with your own photo (recommended: 400x400px).

### Changing Projects

Edit the projects section in `index.html` (around line 637-773). Each project card follows this structure:

```html
<div class="project-card animate-on-scroll animate-delay-200">
    <div class="project-image">
        <i class="fas fa-brain project-icon"></i>
        <div class="project-overlay">
            <div class="project-links">
                <a href="https://github.com/yourusername/project" target="_blank" 
                   class="project-link" title="View on GitHub">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h4 class="project-title">Project Name</h4>
        <p class="project-description">
            Your project description here...
        </p>
        <div class="project-tags">
            <span class="tag">Technology1</span>
            <span class="tag">Technology2</span>
        </div>
    </div>
</div>
```

### Adding Blog Posts

Edit the blog section in `index.html` (around line 1097-1208). Each blog card follows this structure:

```html
<article class="blog-card animate-on-scroll animate-delay-200">
    <div class="blog-card-image">
        <span class="blog-category">Category</span>
        <i class="fas fa-icon-name blog-icon"></i>
    </div>
    <div class="blog-card-content">
        <div class="blog-meta">
            <span class="blog-date">
                <i class="far fa-calendar-alt"></i>
                Month Day, Year
            </span>
            <span class="blog-read-time">
                <i class="far fa-clock"></i>
                X min read
            </span>
        </div>
        <h4 class="blog-title">Blog Post Title</h4>
        <p class="blog-excerpt">
            Brief description of the blog post...
        </p>
        <a href="https://your-blog-link.com" target="_blank" class="blog-read-more">
            Read More <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</article>
```

### Setting Up Formspree (Contact Form)

1. **Create a Formspree account**
   - Go to [formspree.io](https://formspree.io)
   - Sign up for a free account

2. **Create a new form**
   - Click "New Form" in your dashboard
   - Name your form (e.g., "Portfolio Contact")
   - Copy your form ID (e.g., `xyzabcde`)

3. **Update the form action**
   
   In `index.html`, find the contact form (around line 1314-1316):
   ```html
   <form id="contact-form" class="contact-form" 
         action="https://formspree.io/f/{your-form-id}" 
         method="POST">
   ```
   
   Replace `{your-form-id}` with your actual Formspree form ID:
   ```html
   <form id="contact-form" class="contact-form" 
         action="https://formspree.io/f/xyzabcde" 
         method="POST">
   ```

4. **Test the form**
   - Submit a test message
   - Check your email for the submission

### Enabling Google Analytics

1. **Create a Google Analytics 4 property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create a new property (Admin > Create Property)
   - Set up a Web data stream
   - Copy your Measurement ID (starts with `G-`)

2. **Configure analytics in index.html**
   
   Find the analytics configuration (around line 229-234):
   ```javascript
   // Analytics Configuration
   window.ANALYTICS_ENABLED = false;  // Change to true
   window.GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';  // Add your ID
   ```

3. **Update with your settings**
   ```javascript
   window.ANALYTICS_ENABLED = true;
   window.GA_MEASUREMENT_ID = 'G-YOUR-MEASUREMENT-ID';
   ```

4. **Privacy considerations**
   - Analytics respects Do Not Track browser settings
   - Consider adding a cookie consent banner for GDPR compliance
   - Alternative privacy-friendly options (Plausible, Umami) are documented in the code

### Updating Skills

Edit the skills section in `index.html` (around line 406-635). Each skill follows this structure:

```html
<div class="skill-item">
    <div class="skill-info">
        <i class="fab fa-icon-name"></i>
        <span class="skill-name">Skill Name</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="85"></div>
    </div>
</div>
```

The `data-progress` attribute controls the skill level (0-100).

### Customizing Colors/Theme

Edit CSS variables in `styles.css` (at the top of the file):

```css
:root {
    /* Primary Colors */
    --color-primary: #ffb400;
    --color-primary-dark: #e6a200;
    
    /* Light Theme */
    --color-bg: #ffffff;
    --color-text: #333333;
    
    /* ... more variables */
}

[data-theme="dark"] {
    /* Dark Theme */
    --color-bg: #1a1a1a;
    --color-text: #e0e0e0;
    
    /* ... more variables */
}
```

### Updating Timeline

Edit the timeline section in `index.html` (around line 906-1094). Each timeline item follows this structure:

```html
<li class="animate-on-scroll">
    <div class="timeline-image">
        <img class="rounded-circle img-fluid" src="images/your-image.jpg"
             alt="Description" width="170" height="170" loading="lazy">
    </div>
    <div class="timeline-panel">
        <div class="timeline-heading">
            <h3 class="timeline-date">Date Range</h3>
            <h4 class="subheading">Position Title</h4>
        </div>
        <div class="timeline-body">
            <p class="text-muted">Description of your experience...</p>
        </div>
    </div>
</li>
```

Use `timeline-inverted` class for items on the right side:
```html
<li class="timeline-inverted animate-on-scroll">
```

---

## 🌐 Deployment

### GitHub Pages (Automatic)

This site is configured to deploy automatically via GitHub Pages:

1. Push changes to the `master` branch
2. GitHub Pages automatically builds and deploys
3. Changes are live at `https://yourusername.github.io`

### Manual Deployment

To deploy to any static hosting:

1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. No build process required - it's all static files

### Custom Domain (Optional)

1. Add a `CNAME` file with your domain:
   ```
   www.yourdomain.com
   ```
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

---

## 📊 Analytics Events

When Google Analytics is enabled, the following events are tracked:

| Event | Description |
|-------|-------------|
| `resume_download` | Resume PDF download clicks |
| `contact_form_submit` | Contact form submissions |
| `external_link_click` | Clicks on external links (GitHub, LinkedIn, etc.) |
| `theme_toggle` | Dark/Light mode switches |
| `project_view` | Project card interactions |
| `section_view` | Scroll-triggered section views |

---

## 🔧 Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| IE 11 | ❌ Not supported |

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use this template for your own portfolio, but please:
- Remove my personal information
- Update with your own content
- Give credit if you find it helpful

---

## 🙏 Acknowledgments

- [Bootstrap](https://getbootstrap.com/) - CSS Framework
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography (Inter, Poppins)
- [Formspree](https://formspree.io/) - Form handling
- [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats) - GitHub statistics
- [GitHub Streak Stats](https://github.com/DenverCoder1/github-readme-streak-stats) - Contribution streaks
- [GitHub Chart](https://ghchart.rshah.org/) - Contribution graph

---

## 📬 Contact

**Sankalp Bhandari**
- 🌐 Website: [sankalpbhandari.github.io](https://sankalpbhandari.github.io)
- 📧 Email: [sankalp.bhandari@gmail.com](mailto:sankalp.bhandari@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/sankalpbhandari](https://www.linkedin.com/in/sankalpbhandari/)
- 🐙 GitHub: [github.com/sankalpbhandari](https://github.com/sankalpbhandari)

---

<p align="center">
  Made with ❤️ by Sankalp Bhandari
</p>
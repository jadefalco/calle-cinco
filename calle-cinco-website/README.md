# Calle Cinco Driving School - Website

A high-converting, SEO/GEO-optimized website for Calle Cinco Driving School in Kelowna, BC. Built with vanilla HTML, CSS, and JavaScript—ready to paste into VS Code and customize.

## 📋 Quick Start

1. **Open in VS Code**: Copy all files into a new folder and open in VS Code
2. **Live Server**: Install the "Live Server" extension and right-click `index.html` → "Open with Live Server"
3. **Customize**: Edit the content in `index.html` and styling in `styles.css`
4. **Deploy**: Upload to your hosting provider

## 📁 File Structure

```
calle-cinco-website/
├── index.html          # Main HTML file (all content here)
├── styles.css          # All styling (mobile-first responsive)
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🎨 Design Features

- **Mobile-First Responsive Design**: Works perfectly on all devices
- **Blue + White + Orange Color Scheme**: Professional, trustworthy branding
- **High-Converting CTAs**: Multiple booking buttons throughout
- **SEO Optimized**: Schema markup, meta tags, local business structured data
- **GEO Targeted**: Kelowna and Okanagan location content
- **Fast Loading**: Optimized images from Unsplash (royalty-free)
- **Accessibility**: Semantic HTML, proper heading hierarchy, ARIA labels

## 🔧 Customization Guide

### 1. Replace Business Information

**In `index.html`:**

- **Phone Number**: Search for `(250) 300-0552` and replace with your number
- **Email**: Search for `drive@callecinco.ca` and replace with your email
- **Business Name**: Search for `Calle Cinco` and replace as needed
- **Location**: Update "Kelowna" and "Okanagan" references

### 2. Update Pricing

**In `index.html`, find the "Lesson Packages" section:**

```html
<div class="price">$90</div>
<p class="duration">90 minutes</p>
```

Change the price and duration to match your offerings.

### 3. Replace Placeholder Images

**Current images are from Unsplash (royalty-free):**

- Hero background: `https://images.unsplash.com/photo-1449824913935-59a10b8d2000`
- About section: `https://images.unsplash.com/photo-1552820728-8ac41f1ce891`

**To replace:**
1. Find your own images (or use Unsplash, Pexels, Pixabay)
2. In `index.html`, find the image URLs and replace them
3. Keep the same image dimensions for best results

### 4. Replace Fake Reviews with Real Ones

**In `index.html`, find the "Reviews" section:**

```html
<div class="review-card">
    <div class="stars">★★★★★</div>
    <p class="review-text">"I was so nervous..."</p>
    <p class="review-author">— Sarah M., Kelowna</p>
</div>
```

Replace with your actual customer reviews. Keep the same HTML structure.

### 5. Replace Award Placeholders

**In `index.html`, find the "Awards & Recognition" section:**

```html
<div class="award-placeholder">
    <div class="award-icon">🏆</div>
    <p>Best Driving School</p>
    <p class="award-year">[Add Your Award]</p>
</div>
```

Replace with your actual awards, certifications, or achievements.

### 6. Update Business Hours

**In `index.html`, find the "Hours" section:**

```html
<p>Mon-Fri: 7am - 8pm</p>
<p>Sat: 8am - 7pm</p>
<p>Sun: 8am - 3pm</p>
```

Update to match your actual hours.

### 7. Customize Colors

**In `styles.css`, find the root variables:**

```css
:root {
    --primary-blue: #1e40af;
    --light-blue: #3b82f6;
    --accent-orange: #f59e0b;
    /* ... */
}
```

Change these hex codes to your brand colors. All colors throughout the site will update automatically.

### 8. Update Social Media Links

**In `index.html`, find the footer:**

```html
<a href="https://facebook.com/callecinco" target="_blank">Facebook</a>
<a href="https://instagram.com/callecinco" target="_blank">Instagram</a>
```

Replace with your actual social media URLs.

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

The design automatically adapts to all screen sizes.

## 🔍 SEO Features Included

✅ **Meta Tags**: Title, description, keywords
✅ **Open Graph**: Social media sharing preview
✅ **Schema Markup**: Local Business structured data
✅ **Mobile Friendly**: Responsive design
✅ **Fast Loading**: Optimized CSS and JS
✅ **GEO Targeting**: Kelowna and Okanagan keywords
✅ **Local Business Info**: Hours, address, phone, email
✅ **Semantic HTML**: Proper heading hierarchy

### To Further Improve SEO:

1. **Add Google Analytics**: Add your tracking code to `<head>`
2. **Create Sitemap**: Generate at `https://www.xml-sitemaps.com`
3. **Submit to Google**: Use Google Search Console
4. **Get Reviews**: Encourage customers to leave Google reviews
5. **Local Listings**: Add to Google My Business, Apple Maps, Yelp

## 🚀 Deployment Options

### Option 1: Netlify (Free, Recommended)
1. Push files to GitHub
2. Connect GitHub to Netlify
3. Deploy automatically

### Option 2: Vercel (Free)
1. Push files to GitHub
2. Connect GitHub to Vercel
3. Deploy automatically

### Option 3: Traditional Hosting
1. Upload files via FTP to your hosting provider
2. Point domain to hosting provider
3. Done!

### Option 4: Bluehost / GoDaddy
1. Use their website builder or file manager
2. Upload HTML, CSS, JS files
3. Configure domain

## 📧 Form Handling

**Current Setup**: Form opens user's email client with pre-filled message

**To Upgrade to Database Submission:**
1. Use Formspree.io (free tier available)
2. Use Netlify Forms (if deployed on Netlify)
3. Hire developer to create backend

**Steps for Formspree:**
1. Go to `https://formspree.io`
2. Create account and get your form endpoint
3. In `index.html`, change form action to your endpoint
4. Remove `onsubmit="handleFormSubmit(event)"` from form tag

## 🎯 Conversion Optimization

### Current Features:
✅ Multiple CTAs throughout page
✅ Sticky mobile CTA button
✅ Clear value proposition
✅ Trust indicators (reviews, ratings)
✅ Simple booking process
✅ FAQ section
✅ Phone number prominently displayed

### To Further Improve:
1. **Add Live Chat**: Use Drift or Intercom
2. **Add Testimonial Video**: Show students talking about their experience
3. **Add FAQ Schema**: Improves search visibility
4. **Add Trust Badges**: Display certifications prominently
5. **A/B Test CTAs**: Try different button colors/text

## 🔐 Security Notes

- This is a static website (no database)
- No sensitive data is stored
- Form submission uses mailto (opens email client)
- To collect form data securely, use Formspree or similar service

## 📞 Support

### Common Issues:

**Q: Images not loading?**
A: Check that image URLs are correct and the website has internet access

**Q: Form not working?**
A: Make sure your email client is configured. For production, use Formspree.

**Q: Mobile menu not working?**
A: Check that JavaScript is enabled in browser

**Q: Colors look wrong?**
A: Clear browser cache (Ctrl+Shift+Delete) and refresh

## 📊 Analytics Setup

Add Google Analytics to track visitors:

1. Go to `https://analytics.google.com`
2. Create property for your website
3. Copy your Measurement ID
4. Add this to `<head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_MEASUREMENT_ID');
</script>
```

## 📝 License

This website template is provided as-is. Feel free to customize and use for your business.

## 🎓 Learning Resources

- **HTML/CSS Basics**: https://www.codecademy.com
- **SEO Guide**: https://moz.com/beginners-guide-to-seo
- **Web Design**: https://www.udemy.com/course/web-design-for-beginners/
- **JavaScript**: https://javascript.info

---

**Last Updated**: April 2026
**Version**: 1.0

Built with ❤️ for Calle Cinco Driving School

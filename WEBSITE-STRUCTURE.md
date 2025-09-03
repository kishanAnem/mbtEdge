# MBT Edge - Business Website Structure

## 📁 Project Structure

```
mbtEdge/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── services/          # Services page
│   │   │   └── page.tsx
│   │   ├── about/             # About page
│   │   │   └── page.tsx
│   │   ├── contact/           # Contact page
│   │   │   └── page.tsx
│   │   └── products/          # Products showcase
│   │       └── page.tsx
│   ├── components/            # Reusable components
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   └── ui/               # UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── ContactForm.tsx
│   ├── assets/               # Static assets
│   │   ├── images/          # General images
│   │   └── logos/           # 🎯 UPLOAD YOUR LOGO HERE
│   └── styles/              # Styling files
│       └── globals.css      # Global styles with theme
├── public/                  # Public assets
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # 🎯 THEME COLORS (Update after logo)
└── postcss.config.js       # PostCSS configuration
```

## 🎨 Next Steps After Logo Upload:

1. **Upload your logo** to: `src/assets/logos/`
2. **Extract colors** from your logo
3. **Update theme colors** in: `tailwind.config.js`
4. **Update CSS variables** in: `src/styles/globals.css`

## 🚀 Business Sections:

- **Homepage**: Company overview and hero section
- **Services**: 
  - Staffing Solutions
  - Consulting Services  
  - Product Development
- **Products**: POS & Inventory Management showcase
- **About**: Company story and team
- **Contact**: Lead generation and contact forms

## 🛠 Technology Stack:

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Ready for Vercel/Netlify

Ready for logo upload and theme customization!

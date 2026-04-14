# Portfolio Customization Guide 📝

## Quick Start

Your portfolio is ready at `http://localhost:3000`! To make changes, edit the file: **`src/app/page.tsx`**

---

## 🔧 How to Customize Each Section

### 1️⃣ Personal Information Header

In `src/app/page.tsx`, find this section (around line 3-17):

```typescript
const portfolioData = {
  name: "Laiba",
  title: "Web Developer",
  email: "laibyyy43@gmail.com",
  phone: "03378230596",
  about: "Passionate web developer who loves exploring new technologies...",
  // ...
};
```

**Change:**
- `name` - Your name
- `title` - Your job title (e.g., "Full Stack Developer", "UI Designer")
- `email` - Your email address
- `phone` - Your phone number
- `about` - Your professional bio (2-3 sentences)

---

### 2️⃣ Add or Update Skills

Find the `skills` array:

```typescript
skills: ["HTML", "CSS", "JavaScript", "SQL", "React", "Laravel"],
```

**To add more skills:**
```typescript
skills: ["HTML", "CSS", "JavaScript", "SQL", "React", "Laravel", "Node.js", "MongoDB", "Git"],
```

**To remove skills:**
Remove the item from the array and ensure proper comma placement.

---

### 3️⃣ Add Your Projects

Find the `projects` array. Currently has one project. To add more:

```typescript
projects: [
  {
    title: "The Digital Tasbeeh Counter",
    description: "A React-based application to count Tasbeeh with a clean and intuitive interface",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/laibyyy43-creator/package.json.git"
  },
  // ADD NEW PROJECT BELOW
  {
    title: "Your Project Name",
    description: "What does this project do? Describe it in 1-2 sentences.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/your-username/your-repo"
  }
]
```

**Required fields:**
- `title` - Project name
- `description` - What it does
- `tech` - Technologies used (array of strings)
- `github` - GitHub repository link

---

### 4️⃣ Update Education

Find the `education` array:

```typescript
education: [
  {
    degree: "BS Computer Science",
    institution: "Virtual University",
    status: "Continuing"
  },
  // ADD CERTIFICATIONS OR OTHER EDUCATION
  {
    degree: "Hafiz-e-Quran",
    institution: "Islamic Education"
  }
]
```

**To add courses or certifications:**
```typescript
{
  degree: "Web Development Bootcamp Certificate",
  institution: "Online Learning Platform",
  status: "Completed" // optional
}
```

---

### 5️⃣ Update Social Links

Find the `social` object:

```typescript
social: {
  github: "https://github.com/laibyyy43-creator",
  email: "laibyyy43@gmail.com"
}
```

**Add more platforms:**
```typescript
social: {
  github: "https://github.com/your-username",
  email: "your@email.com",
  linkedin: "https://linkedin.com/in/your-profile",
  twitter: "https://twitter.com/your-handle",
  instagram: "https://instagram.com/your-username"
}
```

---

## 🎨 Design Customization

### Change Color Scheme

The portfolio uses **Tailwind CSS classes**. To change colors, modify the class names in `src/app/page.tsx`:

**Current colors:**
- Primary: `blue-400` to `blue-600`
- Secondary: `purple-500`
- Background: `slate-900` to `slate-800`

**To use different colors, replace:**
- `blue-400` → `green-400`, `cyan-400`, `indigo-400`
- `purple-500` → `rose-500`, `amber-500`, `teal-500`
- `slate-900` → `gray-900`, `zinc-900`, `neutral-900`

**Example - Change to Green Theme:**
```
blue-400 → green-400
blue-600 → green-600
blue-900 → green-900
purple-500 → teal-500
```

---

## 📱 Responsive Design

The portfolio is already responsive! Test on different devices:
- `md:` - Medium screens (tablets)
- `sm:` - Small screens (mobile)

The layout automatically adjusts.

---

## 🚀 Save and View Changes

### To see your changes:

1. **Save the file** (`Ctrl+S` or `Cmd+S`)
2. **Next.js automatically reloads** the page in your browser
3. **Refresh if needed** (`F5` or browser refresh button)

---

## 📸 Add Profile Picture (Optional)

1. Add your picture to `public/` folder
2. Find the hero section in `page.tsx`
3. Add this code after the text:
   ```typescript
   <img src="/your-image.jpg" alt="Profile" className="w-32 h-32 rounded-full border-4 border-blue-400 mt-8" />
   ```

---

## 📄 Add Resume/CV Download (Optional)

1. Add your PDF to `public/` folder (e.g., `resume.pdf`)
2. Add this button in the hero section:
   ```typescript
   <a href="/resume.pdf" download className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition">
     Download Resume
   </a>
   ```

---

## 🎯 What to Add from Your Assignments

You mentioned you have assignments. To showcase them:

1. **Add assignment projects** to the `projects` array
2. **Add assignment links** in the `github` field
3. **Describe what you learned** in the `description`

Example:
```typescript
{
  title: "Form Validation Assignment",
  description: "HTML form with JavaScript validation for user input",
  tech: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/laibyyy43-creator/form-validation"
}
```

---

## 🐛 Troubleshooting

**Changes not showing?**
- Make sure you saved the file (Ctrl+S)
- Wait a few seconds for Next.js to reload
- Check browser console for errors (F12)

**Server crashed?**
- Stop the server (Ctrl+C in terminal)
- Run `npm run dev` again

**Can't find the file?**
- The file is at: `d:\portfolio\src\app\page.tsx`
- Open it in VS Code

---

## 💾 Before You Deploy

1. ✅ All personal information updated
2. ✅ All projects added with GitHub links
3. ✅ Skills list complete
4. ✅ Education section updated
5. ✅ Tested on mobile device (use DevTools: F12)
6. ✅ No broken links
7. ✅ All images load properly

---

## 🌐 Ready to Deploy?

When ready to share with the world:

### Deploy on Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

Your portfolio will be live at: `yourusername.vercel.app`

---

## 📞 Need Help?

Check the [README.md](README.md) for more information or ask your coding mentor!

---

**Happy customizing!** 🎉


# 💼 LinkedIn Clone – Professional Networking App

A fully responsive, scalable **LinkedIn Clone** built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. This project replicates core features of LinkedIn with a clean UI, dynamic post feed, and profile editing functionality. Ideal for showcasing front-end architecture, component reusability, and theme management.

---

## 🌟 Features

- 📰 **Post Feed** – Real-time posts with author details
- 👤 **Editable Profile** – In-place editing with validations
- 🤝 **Connections List** – Displays user contacts
- 📚 **Recent Activities** – User’s interaction history
- 🌙 **Light/Dark Mode** – Seamless theme toggle
- ♻️ **Reusable UI Components** – Modular design system

---

## ⚙️ Tech Stack

| Technology      | Purpose                          |
|----------------|----------------------------------|
| React + TypeScript | Component-based, type-safe UI |
| Tailwind CSS    | Utility-first, responsive design |
| Vite            | Fast build tool for modern apps |
| React Context   | Global state management (themes) |
| Custom Hooks    | Device detection, toast alerts   |

---

## 📁 Project Structure

```
src/
├── App.tsx                # Main layout
├── main.tsx               # Entry point
├── components/            # UI & layout components
│   ├── ui/                # Base design system (Buttons, Cards, etc.)
├── pages/                 # Page-level components
├── contexts/              # Theme context (dark/light)
├── hooks/                 # Custom hooks
├── lib/                   # Utility functions
```

---

## 🧩 Key Components

| Component                  | Description                             |
|---------------------------|-----------------------------------------|
| `Header.tsx`              | Top navigation bar                      |
| `Feed.tsx`                | Post feed layout                        |
| `PostCard.tsx`            | Individual post UI                     |
| `CreatePost.tsx`          | Post submission form                   |
| `EditableProfileSection.tsx` | User profile editor               |
| `ConnectionsList.tsx`     | Shows user connections                 |
| `NewsSidebar.tsx`         | Trending topics                        |
| `ThemeToggle.tsx`         | Light/dark mode switcher               |
| `RecentActivities.tsx`    | Highlights recent actions              |

---

## 🧱 UI Toolkit – `/components/ui`

Includes:
- ✅ Buttons
- 🧾 Cards
- 💬 Dialogs
- 📌 Tabs
- 🛠 Tooltips, Checkboxes, Dropdowns

Ensures visual consistency across the application.

---

## 🧠 Context & Hooks

| File              | Purpose                        |
|-------------------|--------------------------------|
| `ThemeContext.tsx` | Theme management (global)     |
| `use-toast.ts`     | Custom toast notification     |
| `use-mobile.tsx`   | Mobile responsiveness utility |

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/linkedin-clone.git
cd linkedin-clone
npm install
npm run dev     # Start development server
```

Build for production:

```bash
npm run build
```

---

## 📸 Screenshots

![profile-palooza-recreate - Google Chrome 21-06-2025 12_15_34](https://github.com/user-attachments/assets/17fae583-a7e9-40ac-be51-5474750eaa1f)


---

## 🤝 Contributions

Contributions are welcome and appreciated!  
Fork the repo, create a new branch, and submit a pull request.

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Asish**  
📧 asishdandy87@gmail.com
🌐 [Portfolio](https://portfolio-git-main-asishadimulapus-projects.vercel.app/) • [GitHub](https://github.com/asishadimulapu) • [LinkedIn](hwww.linkedin.com/in/asish-adimulapu)

---

> Built with 💙 to demonstrate UI/UX, modularity, and real-world design systems.


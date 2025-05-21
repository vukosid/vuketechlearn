# 📘 Emfundo

A foundation project for learning modern web development with **React**, **Next.js**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)  
- npm (comes with Node.js)  
- [Git](https://git-scm.com/) (for version control)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/emfundo.git
cd emfundo
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 🏗️ Project Structure

```
emfundo/
├── app/
│   ├── components/       # Reusable components
│   │   ├── PrimaryButton.tsx
│   │   └── InfoCard.tsx
│   └── page.tsx          # Main page component
├── public/               # Static assets
├── package.json          # Project dependencies
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 🧩 Key Features

- **Next.js App Router**: Modern routing system  
- **TypeScript**: Type-safe JavaScript  
- **Tailwind CSS**: Utility-first CSS framework  
- **Component-based Architecture**: Reusable UI components  
- **Hot Module Replacement**: Fast development experience  

---

## 💡 Core Concepts Covered

- Setting up a Next.js project with TypeScript  
- Creating and using React components  
- Component composition and props  
- TypeScript interfaces for component props  
- Styling with Tailwind CSS  
- Project structure and organization  

---

## 🛠️ Example Components

### PrimaryButton

A reusable button component with hover effects:

```tsx
import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      {children}
    </button>
  );
};

export default PrimaryButton;
```

### InfoCard

An information display card component:

```tsx
import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon }) => {
  return (
    <div className="border p-4 rounded shadow">
      <div className="text-2xl mb-2">{icon}</div>
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default InfoCard;
```

---

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Vukosi Ndlamini | https://www.vuketech.co.za/

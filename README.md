**📋 Kanban Board**

A drag-and-drop Kanban board built with React, Tailwind CSS, and Vite — fast, lightweight, and fully customizable.


**✨ Features**


Create, edit, and delete tasks (cards)
Organize tasks across multiple columns (e.g. To Do, In Progress, Done)
Drag and drop cards between columns
Responsive design for desktop and mobile
Fast dev experience powered by Vite's HMR



**🛠️ Tech Stack**

ToolPurposeReactUI components and state managementTailwind CSSUtility-first stylingViteBuild tool and dev server


**🚀 Getting Started**

*Prerequisites*

Make sure you have the following installed:


Node.js (v18 or higher recommended)
npm or yarn


**Installation**

bash# Clone the repository
git clone https://github.com/samadaamir/kanban-board.git
cd kanban-board

# Install dependencies
npm install

Running the Dev Server

bashnpm run dev

Open http://localhost:5173 in your browser to view the app.

Building for Production

bashnpm run build

The optimized output will be in the dist/ folder.

Preview the Production Build

bashnpm run preview


**🧩 Available Scripts**

ScriptDescriptionnpm run devStart the development servernpm run buildBuild for productionnpm run previewPreview the production buildnpm run lintRun ESLint


**🎨 Customization**

Adding a New Column

Open src/App.jsx and add a new entry to the columns state array:

jsxconst [columns, setColumns] = useState([
  { id: 'todo', title: 'To Do' },
  { id: 'in-progress', title: 'In Progress' },
  { id: 'done', title: 'Done' },
  { id: 'backlog', title: 'Backlog' }, // ← add here
]);

**Changing the Color Theme**

Edit tailwind.config.js to customize colors, fonts, or spacing:

jstheme: {
  extend: {
    colors: {
      primary: '#6366f1',
    },
  },
},


**📦 Dependencies**

json{
  "react": "^18.x",
  "react-dom": "^18.x"
}

json{
  "devDependencies": {
    "vite": "^5.x",
    "@vitejs/plugin-react": "^4.x",
    "tailwindcss": "^3.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x"
  }
}


**🤝 Contributing**

Contributions are welcome! Please follow these steps:


Fork the repository
Create a new branch: git checkout -b feature/your-feature-name
Commit your changes: git commit -m 'Add some feature'
Push to the branch: git push origin feature/your-feature-name
Open a Pull Request

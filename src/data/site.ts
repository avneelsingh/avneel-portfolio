export const profile = {
  name: "Avneel Singh",
  role: "M.Tech Computer Science · IIT Bhubaneswar",
  email: "avneelsingh237@gmail.com",
  phone: "+91 8005459319",
  resumeUrl: "https://drive.google.com/file/d/1jL1DFWUw_4nBFJNJ4HmXM7qTfyQSgk1H/view?usp=sharing",
  location: "Ghazipur, Uttar Pradesh, India",
  summary:
    "Computer Science postgraduate at IIT Bhubaneswar interested in software engineering, data-driven systems, and practical AI/ML. I enjoy turning technical ideas into useful, well-crafted software.",
};

export const nav = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/avneelsingh/" },
  { label: "GitHub", href: "https://github.com/avneelsingh/" },
  { label: "LeetCode", href: "https://leetcode.com/u/avneelsingh/" },
  { label: "Codolio", href: "https://codolio.com/profile/avneelsingh" },
];

export const stats = [
  { number: "8.75", label: "B.Tech CGPA" },
  { number: "8.3", label: "M.Tech SGPA through semester 2" },
  { number: "98%", label: "Class 12 · District Topper" },
  { number: "1,105", label: "GATE 2025 · All India Rank" },
  { number: "6,696", label: "GATE 2024 · All India Rank" },
];

export const skillGroups = [
  { title: "Programming", items: ["Python", "C++", "Java", "JavaScript", "TypeScript"] },
  { title: "Core Computer Science", items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"] },
  { title: "Web Development", items: ["React", "HTML", "CSS", "Vite", "Tailwind CSS"] },
  { title: "Databases & Cloud", items: ["MySQL", "SQLite", "Firebase", "Firestore"] },
  { title: "AI / Machine Learning", items: ["Regression", "Classification", "Feature Engineering", "Model Evaluation"] },
  { title: "Tools", items: ["Git", "GitHub", "Jupyter Notebook", "Google Colab"] },
];


export const projects = [
  {
    title: "PrepPro",
    tag: "Full-Stack Learning Platform",
    category: "Web Development",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Firestore",
      "Google Authentication",
    ],
    points: [
      "Developed a web-based learning platform to organize subjects, topics, and subtopics with dedicated flashcards and custom question sets.",
      "Implemented Google Authentication and Firebase Firestore for user authentication and cloud-based content management with CRUD operations.",
      "Built interactive learner and creator modes with question practice, answer checking, XP tracking, and learning progress analytics.",
    ],
    live: "https://prepyproo.web.app/",
    github: "https://github.com/avneelsingh/Prep-Planner",
  },
  {
    title: "Recommender System for Reuse and Recycling",
    tag: "Computer Vision",
    category: "AI/ML",
    stack: [
      "Python",
      "ResNet-50",
      "CNN",
      "Transfer Learning",
      "Web Scraping",
    ],
    points: [
      "Developed an image-based recommendation system using ResNet-50 to classify everyday objects and suggest creative reuse and recycling ideas.",
      "Applied transfer learning concepts and residual learning for image classification, and integrated web scraping to collect relevant DIY projects and reuse suggestions.",
      "Built a recommendation workflow to retrieve and display object-specific suggestions through a user-friendly interface, promoting sustainable waste management.",
    ],
  },
  {
    title: "Medical Insurance Premium Prediction",
    tag: "Machine Learning",
    category: "AI/ML",
    stack: [
      "Python",
      "Scikit-learn",
      "Linear Regression",
      "Lasso",
      "Ridge",
      "Random Forest",
      "XGBoost",
      "Stacking",
      "ipywidgets",
    ],
    points: [
      "Developed a supervised regression system to predict medical insurance premiums using Linear, Lasso, Ridge, Random Forest, XGBoost, and Stacking Regression models.",
      "Performed feature engineering and model evaluation to compare predictive performance and generalization across regression algorithms.",
      "Built an interactive premium prediction interface using Python and ipywidgets, enabling users to input relevant features and obtain estimated insurance premiums.",
    ],
  },
  {
    title: "Student Result Management System",
    tag: "Desktop Application",
    category: "Software Development",
    stack: [
      "Python",
      "Tkinter",
      "SQLite",
      "CRUD Operations",
    ],
    points: [
      "Developed a desktop-based Student Result Management System using Python, Tkinter, and SQLite to manage student academic records with persistent database storage.",
      "Implemented staff registration and login with email validation, password confirmation, security questions, and duplicate-user detection.",
      "Built Course, Student, Result, and Reporting modules with CRUD operations, search, update, delete, input validation, and result-viewing functionalities.",
      "Designed a staff dashboard displaying database-driven counts of courses, students, and results, along with an integrated analog clock interface.",
    ],
  },
  {
    title: "Modern Tic Tac Toe",
    tag: "Interactive Web Game",
    category: "Web Development",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Minimax Algorithm",
      "Web Audio API",
      "LocalStorage",
    ],
    points: [
      "Developed a responsive Tic Tac Toe game featuring two-player gameplay and single-player mode with three AI difficulty levels: Easy, Medium, and Hard.",
      "Implemented the Minimax algorithm for optimal AI decision-making in Hard mode, with strategic move selection in Medium mode.",
      "Added player name customization, score tracking, winning-cell highlights, animations, sound effects, and new-round and score-reset controls.",
      "Integrated dark/light theme switching with LocalStorage persistence and built a responsive interface for desktop, tablet, and mobile devices.",
    ],
    live: "https://awesome-tic-tac-toe-verse.netlify.app/",
    github: "https://github.com/avneelsingh/Tic-Tac-Toe",
  },

];


export const education = [
  {
    years: "2025 – 2027",
    degree: "M.Tech, Computer Science & Engineering",
    school: "IIT Bhubaneswar, Odisha",
    note: "SGPA 8.3 till Semester 2",
  },
  {
    years: "2021 – 2025",
    degree: "B.Tech, Computer Science & Engineering",
    school: "Institute of Engineering and Rural Technology, Prayagraj",
    note: "CGPA 8.75 · Coursework included DSA, OS, Computer Architecture, Networks, DBMS, and OOP",
  },
  {
    years: "2019 – 2021",
    degree: "Intermediate",
    school: "Shah Faiz Public School, Ghazipur",
    note: "98% · Class 12th District Topper, Ghazipur",
  },
  {
    years: "2017 – 2019",
    degree: "High School",
    school: "Shah Faiz Public School, Ghazipur",
    note: "96.6%",
  },
];

export const achievements = [
  "GATE 2025 qualified · All India Rank 1,105",
  "GATE 2024 qualified · All India Rank 6,696",
  "Class 12 district topper, Ghazipur (2021)",
];

export const certificates = [
  "100 Days of Python: The Complete Python Pro Bootcamp",
  "AWS Cloud Practitioner Certification Training, KnoDAX",
  "HTML, CSS, Java & JavaScript: Full Stack Programming Course",
  "Master of Essential C++ Programming: Beginner to Advanced",
];
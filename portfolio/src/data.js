export const profile = {
  name: "Sakala Rahul",
  initials: "SR",
  role: "Java Full Stack Developer",
  tagline: "I turn ideas into responsive, real-world web applications.",
  intro: "Passionate about building responsive web applications using Java, Spring Boot, MySQL, Bootstrap, React, HTML, CSS, and JavaScript.",
  github: "SakalaRahul",
  linkedin: "https://www.linkedin.com/in/24rahul/",
  email: "sakalarahul438@gmail.com",
  phone: "+91 8977193013",
  location: "Vijayawada, Andhra Pradesh",
  cv: "https://drive.google.com/file/d/1glCP23e656prNNpYglugrzldKYo9gjHl/view?usp=sharing",
  photo: "/images/Myphoto11.jpg",
  aboutPhoto: "/images/photo1.jpeg",
  about: [
    "I'm Sakala Rahul, a Java Full Stack Developer passionate about building responsive and user-friendly web applications. I enjoy learning new technologies and creating solutions that solve real-world problems.",
    "I have hands-on experience with Java, Spring Boot, MySQL, HTML, CSS, Bootstrap, JavaScript and React. I'm also interested in Artificial Intelligence, Machine Learning and Test Automation.",
  ],
  objective: "Full Stack Developer skilled in Java, Spring Boot, React.js, REST APIs and MySQL, with a strong grasp of Data Structures, OOP and Git-based workflows. Seeking a Full Stack Developer role to contribute to real-world software products from day one.",
  currently: "Java Full Stack Trainee",
};

export const experience = [
  { period: "May 2026 – Present", current: true, title: "Java Full Stack Trainee", org: "Codegnan IT Solutions",
    points: ["Training in Java, Spring Boot, JDBC, MySQL, HTML, CSS, JavaScript and React.",
             "Building end-to-end full stack projects following industry practices."] },
  { period: "Sep 2025 – Apr 2026", title: "Deputy Manager", org: "ICICI Bank Ltd",
    points: ["Managed daily banking operations using the Core Banking System while ensuring compliance with operational policies.",
             "Processed 40+ customer transactions and KYC verifications daily with high accuracy.",
             "Executed loan and credit card documentation while maintaining regulatory compliance."] },
];

export const skills = [
  { name: "Java", desc: "Core Java (JDK 24), Collections, OOP, Exception Handling" },
  { name: "Spring Boot", desc: "REST APIs, Hibernate/JPA, Backend Development" },
  { name: "MySQL", desc: "DBMS, Database Design & SQL Queries" },
  { name: "React", desc: "React.js, JavaScript (ES6+)" },
  { name: "HTML5 & CSS3", desc: "Semantic structure, responsive UI" },
  { name: "Bootstrap", desc: "Responsive Web Design" },
  { name: "JavaScript", desc: "Interactive Web Applications" },
  { name: "Git & GitHub", desc: "Version control and collaboration" },
];

const gh = (r) => `https://github.com/SakalaRahul/${r}`;
export const projects = [
  { title: "Hotel Room Booking System", img: "/images/hotel-room-booking-system.svg", link: gh("Hotel-Room-Booking-System"), tags: ["Java", "JDBC", "MySQL"],
    desc: "Manages room availability, bookings and customer records with a relational database backend." },
  { title: "CuraHealthcare Automation Framework", img: "/images/curahealthcare-automation-framework.svg", link: gh("CuraHealthcare-Automation-Framework"), tags: ["Java", "Selenium", "Cucumber BDD", "TestNG", "Maven", "POM"],
    desc: "End-to-end test automation framework using the Page Object Model and BDD-style Cucumber scenarios." },
  { title: "Dhanvantri Pharmacy", img: "/images/dhanvantri-pharmacy.svg", link: gh("Dhanvantri_Pharmacy"), tags: ["Java", "Spring Boot", "MySQL", "JSP"],
    desc: "Full stack pharmacy app managing medicines, inventory and customer orders, with stock, order workflow and validation services." },
  { title: "Hospital Management Portal", img: "/images/dhanvantri-hospital.svg", link: gh("dhanvantri-hospital-management-system"), tags: ["React JS", "Spring Boot", "REST API", "Swagger", "SQL"],
    desc: "React.js frontend and Spring Boot backend managing patient and doctor data, with REST APIs tested in Swagger, plus filtering and dashboard features." },
  { title: "Employee Management System", img: "/images/employee-management-system.svg", link: gh("Employee_Management_System"), tags: ["Java", "JSP", "Servlets", "JDBC", "MySQL"],
    desc: "Manages employee records, departments and payroll with JSP, Servlets and JDBC." },
  { title: "Voltrix – Electronics E-Commerce", link: "https://github.com/SakalaRahul?tab=repositories", tags: ["Java", "Spring Boot", "JSP", "MySQL", "AWS"],
    desc: "E-commerce app for browsing products, carts and orders, with a product comparison feature by specs and price. Deployed on AWS." },
  { title: "MiniLLM – AI Chatbot (Gemini API)", link: "https://github.com/SakalaRahul?tab=repositories", tags: ["Java", "Generative AI", "LLM", "Gemini API"],
    desc: "Java chatbot with a local knowledge base using keyword matching, falling back to Gemini via the Java HTTP Client. Users can teach and search Q&A pairs." },
];

export const education = [
  { q: "B.Tech (CSIT)", school: "K L University", year: "Apr 2020 – Mar 2024", score: "89%" },
  { q: "Intermediate (MPC)", school: "Narayana Junior College", year: "Apr 2018 – Mar 2020", score: "64%" },
  { q: "Class X", school: "Bhashyam High School", year: "Jun 2017 – Mar 2018", score: "100%" },
];

export const certifications = [
  { title: "AWS Cloud Practitioner", by: "Amazon Web Services", link: "https://drive.google.com/file/d/1YbAOnDXr0KqSGLIFgs2SLKN0eQ0yzPyI/view?usp=sharing" },
  { title: "AWS Solutions Architect – Associate", by: "Amazon Web Services", link: "https://drive.google.com/file/d/1ZddCjUhsoUGvlGGKLxbcEis_W2p7ob6o/view?usp=sharing" },
  { title: "Microsoft Azure Fundamentals", by: "Microsoft", link: "https://drive.google.com/file/d/1JF66sR03JtySSfOMj6yooJz-h7Dpoy0N/view?usp=sharing" },
  { title: "TensorFlow Developer Certificate", by: "Google / TensorFlow", link: "https://drive.google.com/file/d/1LcJJwDIrgQPh9GNBcpRoL74d2RKC_PEh/view?usp=sharing" },
];

export const leadership = [
  { title: "Joint Director of Special Projects", org: "Rotaract Club of KL University", period: "2020 – 2024",
    desc: "Led community initiatives that brought together 100+ members aged 18+ for skill development and social impact." },
];
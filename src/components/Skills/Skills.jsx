import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

// RELEVANT COURSEWORK
//  • Quantum Computing
//  • Operating Systems
//  TECHNICAL SKILLS
//  • Data Structures
//  • Database Management
//  • OOPs Concepts
//  • Web development
//  • Probability Statistics
//  • Linear Algebra
//  Languages: Python, Qiskit, C++, C, Java, JavaScript, TypeScript, SQL, HTML5, CSS3
//  Frameworks & Libraries: React.js, Next.js, NumPy, Matplotlib, Bootstrap, Tailwind CSS
//  Developer Tools: Git/GitHub, Linux, Jupyter, VSCode, Figma, Storybook, Kaggle
const skillsData = {
  
  "Languages": [
    "C++", "C","Python", "Qiskit", "Java", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3", "Linux"
  ],
  "Frameworks & Libraries": [
    "React.js", "Next.js", "NumPy", "Matplotlib", "Bootstrap", "Tailwind CSS", "Framer Motion", "Zustand", "SASS"
  ],
  "Relevant Coursework": [
    "Secure Software Development", "OS", "DBMS","DSA", "Quantum Computing", "Computer Networks", "OOPs", "Probability", "Statistics", "Linear Algebra"
  ],
  "Developer Tools": [
    "Git", "GitHub",  "Jupyter Notebook", "VSCode", "Figma", "Canva", "Storybook", "Kaggle", "Cursor", "Vercel"
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const Skills = () => {
  return (
    <section className="skills-section">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="skills-main-title">Technical Skills</h2>
      </motion.div>
      <div className="skills-grid-container">
        {Object.entries(skillsData).map(([category, items]) => (
          <motion.div
            key={category}
            className="skills-category-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="skills-category-title">{category}</h3>
            <motion.ul className="skills-list" variants={containerVariants}>
              {items.map((skill) => (
                <motion.li key={skill} className="skill-item" variants={itemVariants}>
                  {skill}
                  <span className="bubble3d" />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
 
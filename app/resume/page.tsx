"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Briefcase, Code2, User } from "lucide-react";
import Container from "@/components/Container";

const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About me", value: "about", icon: User },
];

const tabContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Software Engineer Intern",
        company: "Walton Hi Tech Industries PLC.",
        period: "May 2024 - Running",
        description:
          "Developed and maintained full-stack applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality solutions.",
        highlights: [
          "Node.js",
          "React",
          "Express.js",
          "Next.js",
          "PHP",
          "HTML",
          "CSS",
        ],
      },
    ],
  },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Master of Information and Communication Technology",
        institution: "Mawlana Bhashani Science and Technology University",
        period: "2024 - 2026",
        description:
          "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.",
        achievements: ["3.00 CGPA", "Programming"],
      },
      {
        degree: "Bachelor of Information and Communication Technology",
        institution: "Mawlana Bhashani Science and Technology University",
        period: "2019 - 2023",
        description:
          "Foundation in computer science principles, data structures, and algorithms.",
        achievements: ["3.78 CGPA", "Programming"],
      },
      {
        degree: "Higher Secondary Certificate",
        institution: "M.E.H Arif College",
        period: "2015 - 2017",
        description:
          "Foundation in computer science principles, data structures, and algorithms.",
        achievements: ["5.00 GPA"],
      },
      {
        degree: "Secondary School Certificate",
        institution: "Mouchak Scout High School",
        period: "2010 - 2015",
        description:
          "Foundation in computer science principles, data structures, and algorithms.",
        achievements: ["5.00 GPA"],
      },
      {
        degree: "Primary School Certificate",
        institution: "Shafipur Govt. Primary School",
        period: "2005 - 2009",
        description:
          "Foundation in computer science principles, data structures, and algorithms.",
        achievements: ["5.00 GPA"],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, distinctio. Quas fugiat nesciunt ipsum. Voluptatem inventore iste labore, similique quod laudantium rerum dolor, impedit voluptas distinctio praesentium quibusdam veniam tempore. Laudantium repellendus possimus adipisci maxime.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
        ],
      },
      {
        name: "Backend Development",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, distinctio. Quas fugiat nesciunt ipsum. Voluptatem inventore iste labore, similique quod laudantium rerum dolor, impedit voluptas distinctio praesentium quibusdam veniam tempore. Laudantium repellendus possimus adipisci maxime.",
        skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
      },
      {
        name: "Tools & Others",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, distinctio. Quas fugiat nesciunt ipsum. Voluptatem inventore iste labore, similique quod laudantium rerum dolor, impedit voluptas distinctio praesentium quibusdam veniam tempore. Laudantium repellendus possimus adipisci maxime.",
        skills: ["Git", "Docker", "AWS", "CI/CD", "Agile Methodologies"],
      },
    ],
  },
  about: {
    title: "About Me",
    bio: "Passionate software developer with over 5 years of experience in building modern web applications. Committed to writing clean, maintainable code and staying current with emerging technologies. Strong advocate for user-centric design and accessibility.",
    interests: [
      "Open Source Contributing",
      "Tech Blogging",
      "UI/UX Design",
      "Machine Learning",
    ],
    languages: ["English (Native)", "Spanish (Intermediate)", "German (Basic)"],
  },
};

export default function ResumePage() {
  return (
    <section className="flex flex-col justify-center text-white py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="w-full"
        >
          <Tabs
            defaultValue="experience"
            className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
          >
            <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
              {tabMenu.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                    <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                    {item.title}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-1 min-h-[400px]">
              <TabsContent value="experience">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.experience.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.experience.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{item.role}</h3>
                          <p className="text-muted-foreground">
                            {item.company}
                          </p>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, i) => (
                          <Badge key={i} variant="secondary">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="education">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.education.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.degree}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.institution}
                          </p>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <Badge key={i} variant="secondary">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.skills.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.skills.categories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <h3 className="text-lg font-semibold mb-4">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/60 mb-4 font-normal leading-7">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="about">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.about.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                  <p className="mb-6 text-lg">{tabContent.about.bio}</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.interests.map((interest, i) => (
                          <Badge key={i} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.languages.map((language, i) => (
                          <Badge key={i} variant="secondary">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </Container>
    </section>
  );
}
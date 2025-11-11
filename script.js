// ================= Theme Toggle =================
const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

// ================= Smooth Scroll =================
function scrollToSection(section) {
  document.getElementById(section).scrollIntoView({ behavior: "smooth" });
}

// ================= Hamburger Menu Toggle =================
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ================= Portfolio Data =================
const projects = [
  { title: "Project One", description: "A cool project you built", tech: "HTML, CSS, JS" },
  { title: "Project Two", description: "Another amazing project", tech: "React, API" },
  { title: "Project Three", description: "Something advanced", tech: "Node, MongoDB" }
];

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "UI/UX"];

// ================= Display Projects =================
const projectList = document.getElementById("projectList");
projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "project-card";
  div.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p><small>${p.tech}</small>`;
  projectList.appendChild(div);
});

// ================= Display Skills =================
const skillsList = document.getElementById("skillsList");
skills.forEach(skill => {
  const div = document.createElement("div");
  div.className = "skill";
  div.textContent = skill;
  skillsList.appendChild(div);
});

// ================= Contact Form Submit =================
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent! (demo)");
});

function doPost(e) {
  var data = JSON.parse(e.postData.contents);

  var emailTo = "yungpanther6@gmail.com"; 
  var subject = "New Website Contact Message";
  var message = 
    "Name: " + data.name + "\n" +
    "Email: " + data.email + "\n" +
    "Message:\n" + data.message;

  MailApp.sendEmail(emailTo, subject, message);
  
  return ContentService.createTextOutput("sent");
}

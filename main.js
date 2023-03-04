const programs = [
  { img: "./images/online-only.jpg", title: "Online Only" },
  { img: "./images/first-aid.jpg", title: "First Aid" },
  { img: "./images/cpr.jpg", title: "CPR" },
  { img: "./images/aed.jpg", title: "AED" },
  {
    img: "./images/bls-cpr-for-healthcare.jpg",
    title: "BLS/CRP For Healthcare",
  },
  { img: "./images/als-pals.jpg", title: "ALS/PALS" },
  {
    img: "./images/babysitting-and-childcare.jpg",
    title: "Babysitting & Child Care",
  },
  { img: "./images/skills-sessions.jpg", title: "Skills Sessions" },
  { img: "./images/lifeguarding.jpg", title: "Lifeguarding" },
  {
    img: "./images/swimming-water-safety.jpg",
    title: "Swimming + Water Safety",
  },
  {
    img: "./images/nurse-assistant-cna-training.jpg",
    title: "Nurse Assistant/CNA Training",
  },
  {
    img: "./images/instructor-training.jpg",
    title: "Instructor Training & Bridging",
  },
  {
    img: "./images/participants.jpg",
    title: "Participants",
  },
  {
    img: "./images/training-for-organizations.jpg",
    title: "Training For Organizations",
  },
  {
    img: "./images/workplace-safety-cpr-aed.jpg",
    title: "Workplace Safety (First Aid/CPR/AE)",
  },
  {
    img: "./images/aquatics.jpg",
    title: "Aquatics",
  },
  {
    img: "./images/healthcare-professionals-bls-pals.jpg",
    title: "Healthcare Professionals (BLS/ALS/PALS)",
  },
  {
    img: "./images/first-responders.jpg",
    title: "First Responders (Police, Fire, EMS)",
  },
  {
    img: "./images/aeds.jpg",
    title: "Purchase AED",
  },
  {
    img: "./images/contact-us.jpg",
    title: "Contact Us",
  },
];

const renderPrograms = () => {
  let programsDiv = document.getElementById("programs");

  programs.map((el) => {
    let program = Object.assign(document.createElement("div"), {
      className: "program",
    });

    let image = Object.assign(document.createElement("div"), {
      className: "image",
    });

    let img = Object.assign(document.createElement("img"), {
      src: el.img,
      alt: el.title,
    });

    image.append(img);

    let title = Object.assign(document.createElement("div"), {
      className: "title",
      innerHTML: el.title,
    });

    let icon = Object.assign(document.createElement("i"), {
      className: "fa-solid fa-arrow-right",
    });

    title.append(icon);

    program.append(image);
    program.append(title);

    programsDiv.append(program);
  });
};

renderPrograms();

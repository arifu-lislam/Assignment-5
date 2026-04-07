const loadLesson = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => displayLesson(data.data));
};

const displayLesson = (issues) => {
  //   1. get the container and empty
  const issueContainer = document.getElementById("issue-container");
  issueContainer.innerHTML = "";
  // 2. get into every lesson
  issues.forEach((issue) => {
    // 3.create element
    const card = document.createElement("div");
    card.innerHTML = `
    
    
    `;

    // 4.append into container
    issueContainer.appendChild(card);
  });
};
loadLesson();

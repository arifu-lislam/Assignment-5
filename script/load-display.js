const loadLesson = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => displayLesson(data.data));
};

// {
//     "id": 1,
//     "title": "Fix navigation menu on mobile devices",
//     "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
//     "status": "open",
//     "labels": [
//         "bug",
//         "help wanted"
//     ],
//     "priority": "high",
//     "author": "john_doe",
//     "assignee": "jane_smith",
//     "createdAt": "2024-01-15T10:30:00Z",
//     "updatedAt": "2024-01-15T10:30:00Z"
// }

const displayLesson = (issues) => {
  //   1. get the container and empty
  const issueContainer = document.getElementById("issue-container");
  issueContainer.innerHTML = "";
  // 2. get into every lesson
  issues.forEach((issue) => {
    console.log(issue);
    // 3.create element
    const card = document.createElement("div");
    card.innerHTML = `
     <div
            class="card-banner bg-white rounded-xl shadow-sm py-5 px-5 space-y-4 mt-4"
          >
            <div class="flex justify-between">
              <img src="./assets/Open-Status.png" alt="" />
              <button
                class="btn btn-primary rounded-full bg-[#FEECEC] text-red-500 hover:bg-[#FEECEC80]"
              >
                ${issue.priority}
              </button>
            </div>
            <h2 class="text-2xl font-bold">
              ${issue.title}
            </h2>
            <p class="text-gray-400">
              ${issue.description}
            </p>
            <div class="flex justify-between">
              <button
                class="btn btn-primary rounded-full bg-[#FEECEC] text-red-500"
              >
                BUG
              </button>
              <button
                class="btn btn-primary rounded-full bg-[#FDE68A] text-[#D97706]"
              >
                HELP WANTED
              </button>
            </div>
            <hr class="border-gray-300" />
            <div class="text-gray-500">
              <p>#1 by john_doe</p>
              <p>1/15/2025</p>
            </div>
          </div>
    
    `;

    // 4.append into container
    issueContainer.appendChild(card);
  });
};
loadLesson();

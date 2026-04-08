const createElement = (arr) => {
  const htmlElements = arr.map(
    (el) => `<span class = "btn rounded-full bg-amber-200">${el}</span>`,
  );
  return htmlElements.join(" ");
};

const manageSpinner = (status) => {
  if (status === true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("issue-container").classList.add("hidden");
  } else {
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("issue-container").classList.remove("hidden");
  }
};
const loadLesson = () => {
  manageSpinner(true);
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => {
      allIssues = data.data;
      displayLesson(allIssues);
    });
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

const loadWordDetails = async (id) => {
  let url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  //   console.log(url);
  const res = await fetch(url);
  const details = await res.json();
  displayWordDetails(details.data);
};
displayWordDetails = (word) => {
  console.log(word);
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML = `
   
  <div class="test bg-white pt-5 pl-3.5 rounded-xl space-y-5">
          <h2 class="text-2xl font-bold">
            ${word.title}
          </h2>
          <div id="" class="flex gap-4 items-center">
            <button
              class="btn btn-primary bg-[#00A96E] rounded-full text-white"
            >
              Opened
            </button>
            <p class="text-gray-400">
              <span class="h-1 w-1 rounded-full bg-black inline-block "></span>
              Opened by ${word.author}
            </p>
            <p class="text-gray-400">
              <span class="h-1 w-1 rounded-full bg-black inline-block"></span>
              ${word.updatedAt}
            </p>
          </div>
          <div class="flex gap-5">
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
          <p class="text-gray-400">
            ${word.description}
          </p>
          <div
            class="flex justify-between bg-base-200 h-20 pt-5 pl-3.5 rounded-xl"
          >
            <p class="text-gray-400">Assignee:<br /><span class="text-black text-2xl font-bold">${word.assignee}</span></p>
            <p class="text-gray-400">
              Priority: <br />
              <span class="bg-red-500 rounded-xl px-5 py-1 text-white">${word.priority}</span> 
            </p>
          </div>
        </div>


  `;
  document.getElementById("my_modal_5").showModal();
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
    // console.log(issue);
    // 3.create element
    const card = document.createElement("div");
    card.innerHTML = `
     <div
            class="card-banner bg-white rounded-xl shadow-sm py-5 px-5 space-y-4 mt-4 flex flex-col h-full"
          >
            <div class="flex justify-between">
              <img src="./assets/Open-Status.png" alt="" />
              <button onclick="loadWordDetails(${issue.id})"
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
            <div class = "flex gap-3">${createElement(issue.labels)} </div>
            
            <hr class="border-gray-300" />
            <div class="text-gray-500 flex gap-5">
              <p>#1 by john_doe</p>
              <p>1/15/2025</p>
              <div>
              <span>${issue.status}</span>
              </div>
            </div>
          </div>
    
    `;

    // 4.append into container
    issueContainer.appendChild(card);
  });
  manageSpinner(false);
};
loadLesson();

// search function implementation
document.getElementById("btn-search").addEventListener("click", () => {
  const input = document.getElementById("input-search");
  const searchValue = input.value.trim().toLowerCase();
  console.log(searchValue);
  fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`,
  )
    .then((res) => res.json())
    .then((data) => {
      const allWords = data.data;
      console.log(allWords);
      const filterWords = allWords.filter(
        (item) =>
          item.description.toLowerCase().includes(searchValue) ||
          item.title.toLowerCase().includes(searchValue),
      );
      displayLesson(filterWords);
    });
});

// filter function
const filterIssues = (status) => {
  if (status === "all") {
    displayLesson(allIssues);
  } else {
    const filtered = allIssues.filter((item) => item.status === status);
    displayLesson(filtered);
  }
};

// 3 button filtering
let currentTab = "all";
let allIssues = [];
const tabActive = [
  "bg-blue-600",
  "border-white",
  "w-[100px]",
  "text-white",
  "rounded-xl",
];
const tabInActive = ["btn", "btn-active", "w-[100px]"];
function switchTab(tab) {
  console.log(tab);
  const tabs = ["all", "open", "closed"];
  for (const t of tabs) {
    const tabName = document.getElementById("tab-" + t);
    if (t === tab) {
      tabName.classList.remove(...tabInActive);
      tabName.classList.add(...tabActive);
    } else {
      tabName.classList.remove(...tabActive);
      tabName.classList.add(...tabInActive);
    }
  }
  filterIssues(tab);
}
switchTab(currentTab);
loadLesson();
switchTab("all");

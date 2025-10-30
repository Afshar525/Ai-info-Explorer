const topics = [
    {
        title: "Artificial Intelligence",
        desc: "AI is the simulation of human intelligence in machines that are programmed to think and learn.",
        category: "technology",
    },
    {
        title: "Machine Learning",
        desc: "A subset of AI that allows computers to learn from data without explicit programming.",
        category: "technology",
    },
    {
        title: "Quantum Physics",
        desc: "A branch of science that deals with atomic and subatomic phenomena, explaining how particles behave at very small scales.",
        category: "science",
    },
    {
        title: "Mental Health",
        desc: "Refers to a person's emotional, psychological, and social well-being.",
        category: "health",
    },
    {
        title: "Stock Market",
        desc: "A marketplace where investors buy and sell company shares and securities.",
        category: "business",
    },
    {
        title: "Nutrition Science",
        desc: "The study of how food affects health, metabolism, and disease prevention.",
        category: "health",
    },
    {
        title: "Web Development",
        desc: "The process of building and maintaining websites using HTML, CSS, and JavaScript frameworks.",
        category: "technology",
    },
    {
        title: "Blockchain Technology",
        desc: "A system of recording information securely, making it difficult to change or hack the data.",
        category: "technology",
    },
    {
        title: "Renewable Energy",
        desc: "Energy from natural resources like sunlight, wind, and water that can be replenished naturally.",
        category: "science",
    },
    {
        title: "Financial Literacy",
        desc: "The ability to understand and manage personal finance, including budgeting and investments.",
        category: "business",
    },
    {
        title: "Online Education",
        desc: "Learning conducted via digital platforms, allowing flexible and remote access to courses.",
        category: "education",
    },
    {
        title: "Cybersecurity",
        desc: "The practice of protecting systems, networks, and data from digital attacks.",
        category: "technology",
    },
];

const container = document.getElementById("cardsContainer");
const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".filters button");

let activeCategory = "all";

function renderCards() {
    const searchValue = searchInput.value.toLowerCase().trim();

    const filtered = topics.filter((topic) => {
        const matchCategory = activeCategory === "all" || topic.category === activeCategory;
        const matchSearch =
            searchValue === "" ||
            topic.title.toLowerCase().includes(searchValue) ||
            topic.desc.toLowerCase().includes(searchValue);
        return matchCategory && matchSearch;
    });

    container.innerHTML = "";

    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:#8b949e;">No results found.</p>`;
        return;
    }

    filtered.forEach((t) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
      <h3>${t.title}</h3>
      <p>${t.desc}</p>
      <span>${t.category}</span>
    `;
        container.appendChild(card);
    });
}

searchInput.addEventListener("input", renderCards);

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.dataset.category;
        renderCards();
    });
});

renderCards();

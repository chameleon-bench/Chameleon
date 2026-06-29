// ===== Dev Split Data (with execution-guided reflection) =====
// Source: paper Table 5 (dev split, with reflection)
const devData = [
    {
        method: "DeepSeek-V4-Pro",
        thinking: true,
        directions: {
            "mysql_pg":     { es: 0.965, em: 0.881 },
            "pg_mysql":     { es: 0.986, em: 0.877 },
            "mysql_oracle": { es: 0.888, em: 0.786 },
            "oracle_mysql": { es: 0.971, em: 0.896 },
            "pg_oracle":    { es: 0.879, em: 0.799 },
            "oracle_pg":    { es: 0.968, em: 0.891 }
        },
        overall: { es: 0.940, em: 0.851 }
    },
    {
        method: "DeepSeek-V4-Flash",
        thinking: true,
        directions: {
            "mysql_pg":     { es: 0.960, em: 0.849 },
            "pg_mysql":     { es: 0.982, em: 0.856 },
            "mysql_oracle": { es: 0.876, em: 0.757 },
            "oracle_mysql": { es: 0.967, em: 0.888 },
            "pg_oracle":    { es: 0.866, em: 0.780 },
            "oracle_pg":    { es: 0.963, em: 0.882 }
        },
        overall: { es: 0.933, em: 0.830 }
    },
    {
        method: "MiMo-V2.5",
        thinking: true,
        directions: {
            "mysql_pg":     { es: 0.946, em: 0.820 },
            "pg_mysql":     { es: 0.973, em: 0.815 },
            "mysql_oracle": { es: 0.782, em: 0.656 },
            "oracle_mysql": { es: 0.966, em: 0.845 },
            "pg_oracle":    { es: 0.786, em: 0.689 },
            "oracle_pg":    { es: 0.956, em: 0.860 }
        },
        overall: { es: 0.895, em: 0.773 }
    },
    {
        method: "Qwen3.6-Flash",
        thinking: true,
        directions: {
            "mysql_pg":     { es: 0.914, em: 0.761 },
            "pg_mysql":     { es: 0.969, em: 0.812 },
            "mysql_oracle": { es: 0.802, em: 0.647 },
            "oracle_mysql": { es: 0.956, em: 0.849 },
            "pg_oracle":    { es: 0.803, em: 0.693 },
            "oracle_pg":    { es: 0.933, em: 0.840 }
        },
        overall: { es: 0.890, em: 0.758 }
    },
    {
        method: "Qwen3.5-35B-A3B",
        thinking: true,
        directions: {
            "mysql_pg":     { es: 0.910, em: 0.777 },
            "pg_mysql":     { es: 0.944, em: 0.782 },
            "mysql_oracle": { es: 0.789, em: 0.660 },
            "oracle_mysql": { es: 0.946, em: 0.841 },
            "pg_oracle":    { es: 0.773, em: 0.683 },
            "oracle_pg":    { es: 0.930, em: 0.846 }
        },
        overall: { es: 0.876, em: 0.757 }
    },
    {
        method: "MiniMax-M2.7",
        thinking: true,
        directions: {
            "mysql_pg":     { es: 0.903, em: 0.742 },
            "pg_mysql":     { es: 0.953, em: 0.779 },
            "mysql_oracle": { es: 0.766, em: 0.608 },
            "oracle_mysql": { es: 0.936, em: 0.785 },
            "pg_oracle":    { es: 0.755, em: 0.655 },
            "oracle_pg":    { es: 0.941, em: 0.830 }
        },
        overall: { es: 0.869, em: 0.724 }
    },
    {
        method: "GPT-5-Nano",
        thinking: true,
        directions: {
            "mysql_pg":     { es: 0.946, em: 0.782 },
            "pg_mysql":     { es: 0.974, em: 0.793 },
            "mysql_oracle": { es: 0.688, em: 0.562 },
            "oracle_mysql": { es: 0.952, em: 0.841 },
            "pg_oracle":    { es: 0.632, em: 0.547 },
            "oracle_pg":    { es: 0.940, em: 0.842 }
        },
        overall: { es: 0.847, em: 0.717 }
    },
    {
        method: "DeepSeek-V4-Pro",
        thinking: false,
        directions: {
            "mysql_pg":     { es: 0.934, em: 0.721 },
            "pg_mysql":     { es: 0.970, em: 0.719 },
            "mysql_oracle": { es: 0.835, em: 0.648 },
            "oracle_mysql": { es: 0.954, em: 0.763 },
            "pg_oracle":    { es: 0.774, em: 0.633 },
            "oracle_pg":    { es: 0.941, em: 0.820 }
        },
        overall: { es: 0.897, em: 0.711 }
    },
    {
        method: "DeepSeek-V4-Flash",
        thinking: false,
        directions: {
            "mysql_pg":     { es: 0.930, em: 0.705 },
            "pg_mysql":     { es: 0.962, em: 0.714 },
            "mysql_oracle": { es: 0.818, em: 0.611 },
            "oracle_mysql": { es: 0.939, em: 0.760 },
            "pg_oracle":    { es: 0.762, em: 0.603 },
            "oracle_pg":    { es: 0.937, em: 0.809 }
        },
        overall: { es: 0.887, em: 0.692 }
    },
    {
        method: "Gemini2.5-Flash-Lite",
        thinking: false,
        directions: {
            "mysql_pg":     { es: 0.868, em: 0.650 },
            "pg_mysql":     { es: 0.919, em: 0.645 },
            "mysql_oracle": { es: 0.563, em: 0.419 },
            "oracle_mysql": { es: 0.897, em: 0.685 },
            "pg_oracle":    { es: 0.379, em: 0.310 },
            "oracle_pg":    { es: 0.900, em: 0.746 }
        },
        overall: { es: 0.743, em: 0.565 }
    },
    {
        method: "Qwen3-8B",
        thinking: true,
        directions: {
            "mysql_pg":     { es: 0.814, em: 0.643 },
            "pg_mysql":     { es: 0.859, em: 0.657 },
            "mysql_oracle": { es: 0.403, em: 0.311 },
            "oracle_mysql": { es: 0.906, em: 0.733 },
            "pg_oracle":    { es: 0.401, em: 0.318 },
            "oracle_pg":    { es: 0.835, em: 0.746 }
        },
        overall: { es: 0.686, em: 0.551 }
    }
];

// ===== Test Split Data =====
// Source: paper Table 6 (test split, both no-reflection and with-reflection)
const testData = [
    {
        method: "DeepSeek-V4-Pro",
        thinking: true,
        noReflection: { es: 0.602, em: 0.594 },
        withReflection: { es: 0.929, em: 0.821 }
    },
    {
        method: "DeepSeek-V4-Flash",
        thinking: true,
        noReflection: { es: 0.579, em: 0.570 },
        withReflection: { es: 0.925, em: 0.798 }
    },
    {
        method: "MiMo-V2.5",
        thinking: true,
        noReflection: { es: 0.540, em: 0.530 },
        withReflection: { es: 0.873, em: 0.735 }
    },
    {
        method: "Qwen3.6-Flash",
        thinking: true,
        noReflection: { es: 0.513, em: 0.506 },
        withReflection: { es: 0.878, em: 0.723 }
    }
];

const directionKeys = [
    "mysql_pg",
    "pg_mysql",
    "mysql_oracle",
    "oracle_mysql",
    "pg_oracle",
    "oracle_pg"
];

let currentSplit = "dev";
let currentMetric = "em";

// ===== Render Dev Leaderboard =====
function renderDevLeaderboard() {
    const tbody = document.getElementById("devLeaderboardBody");
    if (!tbody) return;

    const sorted = [...devData].sort((a, b) => {
        return b.overall[currentMetric] - a.overall[currentMetric];
    });

    tbody.innerHTML = sorted.map((entry, index) => {
        const rank = index + 1;
        const rankClass = rank === 1 ? "rank-1" : rank === 2 ? "rank-2" : rank === 3 ? "rank-3" : "rank-other";
        const rankBadge = rank <= 3 ? `#${rank}` : rank;

        const thinkingBadge = entry.thinking
            ? '<span class="thinking-badge thinking-yes">✓ Think</span>'
            : '<span class="thinking-badge thinking-no">No Think</span>';

        const directionCells = directionKeys.map(key => {
            const val = entry.directions[key][currentMetric];
            return `<td>${val.toFixed(3)}</td>`;
        }).join("");

        const overallVal = entry.overall[currentMetric];

        return `
            <tr>
                <td class="rank-col"><span class="rank-badge ${rankClass}">${rankBadge}</span></td>
                <td class="method-col"><span class="method-name">${entry.method}</span></td>
                <td>${thinkingBadge}</td>
                ${directionCells}
                <td class="overall-col overall-cell">${overallVal.toFixed(3)}</td>
            </tr>
        `;
    }).join("");
}

// ===== Render Test Leaderboard =====
function renderTestLeaderboard() {
    const tbody = document.getElementById("testLeaderboardBody");
    if (!tbody) return;

    // Sort by with-reflection EM (descending)
    const sorted = [...testData].sort((a, b) => {
        return b.withReflection.em - a.withReflection.em;
    });

    tbody.innerHTML = sorted.map((entry, index) => {
        const rank = index + 1;
        const rankClass = rank === 1 ? "rank-1" : rank === 2 ? "rank-2" : rank === 3 ? "rank-3" : "rank-other";
        const rankBadge = rank <= 3 ? `#${rank}` : rank;

        const thinkingBadge = entry.thinking
            ? '<span class="thinking-badge thinking-yes">✓ Think</span>'
            : '<span class="thinking-badge thinking-no">No Think</span>';

        const nr = entry.noReflection;
        const wr = entry.withReflection;

        return `
            <tr>
                <td class="rank-col"><span class="rank-badge ${rankClass}">${rankBadge}</span></td>
                <td class="method-col"><span class="method-name">${entry.method}</span></td>
                <td>${thinkingBadge}</td>
                <td>${nr.es.toFixed(3)}</td>
                <td>${nr.em.toFixed(3)}</td>
                <td>${wr.es.toFixed(3)}</td>
                <td class="overall-col overall-cell">${wr.em.toFixed(3)}</td>
            </tr>
        `;
    }).join("");
}

// ===== Split Toggle =====
function initSplitToggle() {
    const buttons = document.querySelectorAll(".split-btn");
    const devView = document.getElementById("devView");
    const testView = document.getElementById("testView");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentSplit = btn.dataset.split;

            if (currentSplit === "dev") {
                devView.style.display = "";
                testView.style.display = "none";
            } else {
                devView.style.display = "none";
                testView.style.display = "";
            }
        });
    });
}

// ===== Metric Toggle (Dev only) =====
function initMetricToggle() {
    const buttons = document.querySelectorAll(".metric-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentMetric = btn.dataset.metric;
            renderDevLeaderboard();
        });
    });
}

// ===== Navbar Scroll Effect =====
function initNavbarScroll() {
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

// ===== Mobile Menu Toggle =====
function initMobileMenu() {
    const toggle = document.getElementById("navToggle");
    const menu = document.querySelector(".nav-menu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        menu.classList.toggle("active");
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            toggle.classList.remove("active");
            menu.classList.remove("active");
        });
    });
}

// ===== Initialize =====
document.addEventListener("DOMContentLoaded", () => {
    renderDevLeaderboard();
    renderTestLeaderboard();
    initSplitToggle();
    initMetricToggle();
    initNavbarScroll();
    initMobileMenu();
});

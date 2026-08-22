const API_URL =
// "http://localhost:8000"
"https://jharnamotors-backend.onrender.com";

const token =
    localStorage.getItem("admin_token");
const enquiriesPerPage = 6;
let enquiries = [];
let currentPage = 1;


if (!token) {

    window.location.href =
        "login.html";

}

document
    .getElementById("logoutButton")
    .addEventListener(
        "click",
        function () {
            localStorage.removeItem(
                "admin_token"
            );
            window.location.href =
                "login.html";
        }
    );

async function loadEnquiries() {
    try {
        const response =
            await fetch(`${API_URL}/enquiries`,{
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            });
        enquiries =
            await response.json();
        document.getElementById(
            "totalEnquiries"
        ).textContent =
            enquiries.length;
        renderEnquiries();
    }
    catch (error) {
        console.error(
            "Error loading enquiries:",
            error
        );
    }
}

function renderEnquiries() {
    const searchText =
        document.getElementById("searchInput")
            .value.toLowerCase();
    const filteredEnquiries =
        enquiries.filter((enquiry) =>
            Object.values(enquiry).some((value) =>
                String(value).toLowerCase().includes(searchText)
            )
        );
    const totalPages =
        Math.max(
            1,
            Math.ceil(
                filteredEnquiries.length / enquiriesPerPage
            )
        );
    currentPage = Math.min(currentPage, totalPages);
    const startIndex =
        (currentPage - 1) * enquiriesPerPage;
    const visibleEnquiries =
        filteredEnquiries.slice(
            startIndex,
            startIndex + enquiriesPerPage
        );
    const table =
        document.getElementById("enquiryTable");
    table.innerHTML = "";
    visibleEnquiries.forEach((enquiry) => {
            const row =
                document.createElement("tr");
            row.innerHTML = `
                <td>${enquiry.full_name}</td>
                <td>${enquiry.email}</td>
                <td>${enquiry.phone}</td>
                <td>${enquiry.location}</td>
                <td>${enquiry.query}</td>
                <td>${enquiry.created_at
                    ? new Date(enquiry.created_at).toLocaleString()
                    : "-"}</td>
            `;
            table.appendChild(row);
        });
    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const pagination =
        document.getElementById("pagination");
    pagination.innerHTML = "";
    if (enquiries.length <= enquiriesPerPage &&
        document.getElementById("searchInput").value === "") {
        return;
    }
    const previousButton =
        document.createElement("button");
    previousButton.textContent = "Previous";
    previousButton.disabled = currentPage === 1;
    previousButton.addEventListener("click", function () {
        currentPage--;
        renderEnquiries();
    });
    pagination.appendChild(previousButton);
    for (let page = 1; page <= totalPages; page++) {
        const pageButton =
            document.createElement("button");
        pageButton.textContent = page;
        pageButton.classList.toggle(
            "active",
            page === currentPage
        );
        pageButton.addEventListener("click", function () {
            currentPage = page;
            renderEnquiries();
        });
        pagination.appendChild(pageButton);
    }
    const nextButton =
        document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", function () {
        currentPage++;
        renderEnquiries();
    });
    pagination.appendChild(nextButton);
}
loadEnquiries();

async function loadDashboardStats() {
    try {
        const response =
            await fetch(
                `${API_URL}/dashboard/stats`,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            );
        if (!response.ok) {
            throw new Error(
                `Dashboard stats request failed: ${response.status}`
            );
        }
        const stats =
            await response.json();
        document.getElementById(
            "totalVisitors"
        ).textContent =
            stats.total_visitors;
    }
    catch (error) {
        console.error(
            "Error loading dashboard stats:",
            error
        );
    }
}
loadDashboardStats();

document.getElementById("searchInput").addEventListener(
        "input",
        function () {
            currentPage = 1;
            renderEnquiries();
        }
    );

const ctx =
    document
        .getElementById("visitorChart");
new Chart(ctx, {
    type: "line",
    data: {
        labels: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
        ],
        datasets: [
            {
                label:
                    "Website Visitors",
                data: [
                    12,
                    19,
                    8,
                    15,
                    25,
                    18,
                    30
                ],
                borderWidth: 3,
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        }
    }
});
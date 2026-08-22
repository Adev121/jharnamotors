const API_URL =
// "http://localhost:8000"
"https://jharnamotors-backend.onrender.com";

const token =
    localStorage.getItem("admin_token");


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
        const enquiries =
            await response.json();
        document.getElementById(
            "totalEnquiries"
        ).textContent =
            enquiries.length;
        const table =
            document.getElementById(
                "enquiryTable"
            );
        table.innerHTML = "";
        enquiries.forEach((enquiry) => {
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
    }
    catch (error) {
        console.error(
            "Error loading enquiries:",
            error
        );
    }
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
            const searchText =
                this.value.toLowerCase();
            const rows =
                document.querySelectorAll(
                    "#enquiryTable tr"
                );
            rows.forEach((row) => {
                const text =
                    row.textContent.toLowerCase();
                if (
                    text.includes(searchText)
                ) {
                    row.style.display = "";
                }
                else {
                    row.style.display = "none";
                }
            });
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
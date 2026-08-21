// ================= FAQ =================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const faqItem = question.parentElement;

        faqItem.classList.toggle("active");

    });

});


// ================= ENQUIRY FORM =================

const enquiryForm = document.getElementById("enquiryForm");
const formMessage = document.getElementById("formMessage");


enquiryForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const fullName =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const location =
        document.getElementById("location").value.trim();

    const query =
        document.getElementById("query").value.trim();


    if (
        !fullName ||
        !email ||
        !phone ||
        !location ||
        !query
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "red";

        return;
    }


    try {

        formMessage.textContent =
            "Submitting your enquiry...";

        formMessage.style.color =
            "#f59e0b";
        const API_URL="https://jharnamotors-backend.onrender.com"


        const response = await fetch(

            `${API_URL}/enquiry`,

            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    full_name: fullName,

                    email: email,

                    phone: phone,

                    location: location,

                    query: query

                })

            }

        );


        const data = await response.json();


        if (response.ok) {

            formMessage.textContent =
                data.message;

            formMessage.style.color =
                "green";

            enquiryForm.reset();

        }

        else {

            formMessage.textContent =
                "Something went wrong. Please try again.";

            formMessage.style.color =
                "red";

        }

    }

    catch (error) {

        console.error(error);

        formMessage.textContent =
            "Unable to connect to the server.";

        formMessage.style.color =
            "red";

    }

});


// ================= CHATBOT =================

const chatButton = document.getElementById("chatButton");

const chatWindow = document.getElementById("chatWindow");

const closeChat = document.getElementById("closeChat");

const chatInput = document.getElementById("chatInput");

const sendMessage = document.getElementById("sendMessage");

const chatMessages = document.getElementById("chatMessages");


// Open chatbot

chatButton.addEventListener("click", () => {

    chatWindow.classList.toggle("active");

});


// Close chatbot

closeChat.addEventListener("click", () => {

    chatWindow.classList.remove("active");

});


// Chatbot knowledge base

function getBotResponse(message) {

    const userMessage = message.toLowerCase();


    if (
        userMessage.includes("fee") ||
        userMessage.includes("price") ||
        userMessage.includes("cost") ||
        userMessage.includes("registration")
    ) {

        return "For the latest registration and training fee, please check the Fees section or submit an enquiry.";

    }


    if (
        userMessage.includes("register") ||
        userMessage.includes("join") ||
        userMessage.includes("admission")
    ) {

        return "You can register by filling out the enquiry form on this website. Our team can contact you with further details.";

    }


    if (
        userMessage.includes("location") ||
        userMessage.includes("address") ||
        userMessage.includes("where")
    ) {

        return "You can find our school address in the Contact section. Please contact us for exact directions.";

    }


    if (
        userMessage.includes("beginner") ||
        userMessage.includes("experience")
    ) {

        return "Yes! Beginners can join our driving training program and learn from the basics.";

    }


    if (
        userMessage.includes("document") ||
        userMessage.includes("documents")
    ) {

        return "Please contact the school directly for the latest list of documents required for registration.";

    }


    if (
        userMessage.includes("timing") ||
        userMessage.includes("time") ||
        userMessage.includes("schedule")
    ) {

        return "Training timings may vary. Please submit your enquiry or contact the school for the latest schedule.";

    }


    if (
        userMessage.includes("hello") ||
        userMessage.includes("hi") ||
        userMessage.includes("hey")
    ) {

        return "Hello! 👋 Welcome to JHARNA Motor Training School. You can ask me about registration, fees, training, timings, or location.";

    }


    return "I'm here to help with questions about JHARNA Motor Training School. You can ask me about registration, fees, training, timings, documents, or location.";

}


// Add user message

function addUserMessage(message) {

    const messageElement = document.createElement("div");

    messageElement.classList.add("user-message");

    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);

}


// Add bot message

function addBotMessage(message) {

    const messageElement = document.createElement("div");

    messageElement.classList.add("bot-message");

    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);

}


// Send chatbot message

function sendChatMessage() {

    const message = chatInput.value.trim();


    if (!message) {
        return;
    }


    addUserMessage(message);


    chatInput.value = "";


    setTimeout(() => {

        const response = getBotResponse(message);

        addBotMessage(response);


        chatMessages.scrollTop =
            chatMessages.scrollHeight;

    }, 500);


    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


// Send button

sendMessage.addEventListener(
    "click",
    sendChatMessage
);


// Enter key

chatInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        sendChatMessage();

    }

});
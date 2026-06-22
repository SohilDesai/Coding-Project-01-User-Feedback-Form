console.log("Feedback form loaded");
let feedbackForm = document.getElementById("feedbackForm");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let commentsInput = document.getElementById("comments");
let charCount = document.getElementById("charCount");
let validationMessage = document.getElementById("validationMessage");
let feedbackDisplay = document.getElementById("feedback-display");
let tooltip = document.getElementById("tooltip");
commentsInput.addEventListener("input", function () {
    charCount.textContent = "Characters: " + commentsInput.value.length;
});
feedbackForm.addEventListener("mouseover", function (event) {
    if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
        tooltip.style.display = "block";
        tooltip.textContent = "Please complete this field.";
    }
});

feedbackForm.addEventListener("mouseout", function (event) {
    if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
        tooltip.style.display = "none";
    }
});
feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
        nameInput.value === "" ||
        emailInput.value === "" ||
        commentsInput.value === ""
    ) {
        validationMessage.textContent = "Please fill out all fields.";
        return;
    }

    validationMessage.textContent = "";
});

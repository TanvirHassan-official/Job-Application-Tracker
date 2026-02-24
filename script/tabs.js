function showSection(id){
    const jobSection = document.getElementById("job-section");
    const interviewSection = document.getElementById("interview-section");
    const rejectedSection = document.getElementById("rejected-section");

    jobSection.classList.add("hidden");
    interviewSection.classList.add("hidden");
    rejectedSection.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}
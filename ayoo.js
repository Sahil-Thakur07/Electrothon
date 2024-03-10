function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}

function showSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = "250px";
}

function hideSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0";
}

function openLoginPortal(openTab, closeTab) {
  if (closeTab == "patient") {
    document.getElementById("patient").style.display = "none";
    document.getElementById("doctor").style.display = "block";
    document.getElementById("patient-line").style.borderBottomWidth="1px";
    document.getElementById("doctor-line").style.borderBottomWidth="3px";

  } else {
    document.getElementById("doctor").style.display = "none";
    document.getElementById("patient").style.display = "block";
    document.getElementById("doctor-line").style.borderBottomWidth="1px";
    document.getElementById("patient-line").style.borderBottomWidth="3px";
  }

}
function openLoginPortal(openTab, closeTab) {
  if (closeTab == "online-appointments") {
    document.getElementById('online-appointments').style.display = "none";
    document.getElementById('inclinic-appointments').style.display = "flex";
    document.getElementById('online-line').style.borderBottomWidth="1px";
    document.getElementById('in-clinic-line').style.borderBottomWidth="3px";

  } else if(closeTab=="inclinic-appointments"){
    document.getElementById('inclinic-appointments').style.display = "none";
    document.getElementById('online-appointments').style.display = "flex";
    document.getElementById('in-clinic-line').style.borderBottomWidth="1px";
    document.getElementById('online-line').style.borderBottomWidth="3px";
  } else if(closeTab=="previous-patient"){
    document.getElementById('previous-patient').style.display = "none";
    document.getElementById('current-patient').style.display = "flex";
    document.getElementById('previous-line').style.borderBottomWidth="1px";
    document.getElementById('current-line').style.borderBottomWidth="3px";
  } else if(closeTab=="current-patient"){
    document.getElementById('current-patient').style.display = "none";
    document.getElementById('previous-patient').style.display = "flex";
    document.getElementById('current-line').style.borderBottomWidth="1px";
    document.getElementById('previous-line').style.borderBottomWidth="3px";
  }

}

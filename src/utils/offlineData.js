//get current group value form local storage
//default value status
export const getCurrentGroupValue = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
}

//get current order value form local storage
// default value priority
export const getCurrentOrderValue = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
}
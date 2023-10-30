export const getCurrentGroupValue = () => {
    if(localStorage.getItem("group")){
      return localStorage.getItem("group");
    }else{
      return "status";
    }
}

export const getCurrentOrderValue = () => {
    if(localStorage.getItem("order")){
      return localStorage.getItem("order");
    }else{
      return "priority";
    }
  }
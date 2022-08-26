const className1 = ".border-bottom";
const className2 = "#input-box";

/*
selectAll function
*/
const selectAll = (className) => {
  return document.querySelectorAll(className);
};

/*
select function
*/
const selectFunction = (className) => {
  return document.querySelector(className);
};

const str = selectFunction(className2);
const str2 = selectAll(className1);

str.addEventListener("focusin", (e) => {
  for (let classes of str2) {
    classes.classList.remove("d-none");
  }
});

str.addEventListener("focusout", (e) => {
  for (let classes of str2) {
    classes.classList.add("d-none");
  }
});

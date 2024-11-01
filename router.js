const its = document.getElementById("my-name");
its.addEventListener("click", () => {
  console.log("its clicked");
  history.pushState("", "", "/something");
});

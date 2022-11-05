fetch("https://form-caro.herokuapp.com/", {
  mode: "no-cors",
  method: "GET",
  headers: { "Content-Type": "application/json" },
}).then((data) => console.log(data));
document.getElementById("btn").addEventListener("click", () => {
  const Name = document.getElementById("name").value;
  const group = document.getElementById("group").value;
  console.log(Name, group);
});

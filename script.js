fetch("https://form-caro.herokuapp.com/", {
  mode: "no-cors",
  method: "GET",
  headers: { "Content-Type": "application/json" },
}).then((data) => console.log(data));
document.getElementById("btn").addEventListener("click", () => {
  const Name = document.getElementById("name").value;
  const group = document.getElementById("group").value;
  fetch("https://form-caro.herokuapp.com/register", {
    mode: "no-cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ player: Name, group: group }),
  }).then((data) => console.log(data));
});

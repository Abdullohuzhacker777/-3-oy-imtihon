const ElCarts = document.querySelector("#cart");
const elForimControl = document.querySelector(".form-control");
const elSelect = document.querySelector("#selectOPiton");

// function qismi

function renderPostis(data) {
  ElCarts.innerHTML = "";

  // data js forim qismi

  data.forEach((item) => {
    const newDiv = document.createElement("div");

    newDiv.className = "newDevcart";

    newDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.email}</p>
      <p>${item.body}</p>
			<button style="width:"30%" class="btn btn-danger button d-inline-block" data-id="${item.id}" >Delete</button>
      `;
    ElCarts.appendChild(newDiv);
  });
}
renderPostis(data);

// select qismi

elSelect.addEventListener("change", (e) => {
  const value = elSelect.value;
  const filterSelect = data.filter((element) => element.postId == value);
  renderPostis(filterSelect);
});

// search qqismi

elForimControl.addEventListener("change", () => {
  const value = elForimControl.value;

  const filterSearch = data.filter((element) => {
    if (
      element.name.toLowerCase().match(value.toLowerCase()) ||
      element.email.toLowerCase().match(value.toLowerCase()) ||
      element.body.toLowerCase().match(value.toLowerCase())
    ) {
      return element;
    }
  });
  data = filterSearch;
  renderPostis(data);
});

// dalete qismi

ElCarts.addEventListener("click", (e) => {
  const element = e.target;
  if (element.matches(".button")) {
    const id = element.dataset.id;

    const filTiridArray = data.filter((item) => {
      if (item.id != Number(id)) {
        return item;
      }
    });
    data = filTiridArray;
    renderPostis(data);
  }
});

let myLeads = [];
let oldLeads = [];
const inputEl = document.querySelector('#input-el');
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector('#ul-el')
const deleteBtn = document.querySelector("#delete-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // listItems += "<li><a target = '_blank' href = '" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
    listItems += `
    <li>
    <a target = '_blank' href = '${leads[i]}'>
    ${leads[i]}
    </a>
    </li
    >
    `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear();
  myLeads = [];
  render(myLeads);

})

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  // clear the input field
  inputEl.value = "";
  localStorage.setItem("myLeads",JSON.stringify(myLeads));
  render(myLeads);
})

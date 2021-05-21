const lForm = document.querySelector('form');
const LEO = document.querySelector('tbody');
const lTable = document.querySelector('table');
function onAddWebsite(e) {
  e.preventDefault();
  const website = document.getElementById('website').value;
  const url = document.getElementById('url').value;
  LEO.innerHTML += `
      <tr>
          <td>${url}</td>
          <td>${website}</td>
          <td><button class="deleteBtn">Delete</button></td>
      </tr>
  `;
}

function onDeleteRow(e) {
  if (!e.target.classList.contains('deleteBtn')) {
    return;
  }

  const btn = e.target;
  btn.closest('tr').remove();
}

lForm.addEventListener('submit', onAddWebsite);
lTable.addEventListener('click', onDeleteRow);



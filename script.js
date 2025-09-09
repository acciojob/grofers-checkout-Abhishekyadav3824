const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class "prices"
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  priceElements.forEach(el => {
    total += Number(el.textContent.trim());
  });

  const table = document.querySelector("table");

  // Remove old total row if exists
  const existingRow = document.getElementById("totalRow");
  if (existingRow) {
    existingRow.remove();
  }

  // Create new total row
  const totalRow = document.createElement("tr");
  totalRow.id = "totalRow";
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = "Total Price: " + total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

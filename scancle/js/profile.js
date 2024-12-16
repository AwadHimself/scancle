// Delete the specific row when the circular delete button is clicked
document.querySelectorAll('.delete-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
      const row = event.target.closest('.row');
      row.remove();
    });
  });
  
  // Warning message before "Clear All" operation
  document.getElementById('clear-all').addEventListener('click', () => {
    const confirmClear = confirm("Are you sure you want to clear all the rows?");
    if (confirmClear) {
      const container = document.getElementById('options-container');
      container.innerHTML = ''; // Clear all rows if confirmed
    }
  });
  
  // Delete selected rows when "Clear Selected" is clicked
  document.getElementById('clear-selected').addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.option-checkbox:checked');
    checkboxes.forEach((checkbox) => {
      const row = checkbox.closest('.row');
      row.remove();
    });
  });
  
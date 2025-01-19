const dropdown_button     = document.getElementById('dropdown-button');
const dropdown_containter = document.getElementById('dropdown-container');
const dropdown_links      = document.getElementById('dropdown-links');

dropdown_button.addEventListener('click', () => {
  const links_height     = dropdown_links.getBoundingClientRect().height;
  const container_height = dropdown_containter.getBoundingClientRect().height;

  container_height === 0 ? dropdown_containter.style.height = `${links_height}px`
                         : dropdown_containter.style.height = 0;
});

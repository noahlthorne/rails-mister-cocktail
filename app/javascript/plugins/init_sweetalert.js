import swal from 'sweetalert';

const initSweetalert = (selector, options = {}, callback = (id) => {
  fetch(`/cocktails/${id}`, { method: "delete"})
}) => {
  const swalButton = document.querySelector(selector);
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', (event) => {
      const cocktailId = event.target.dataset.cocktailId
      swal(options).then(callback(cocktailId));
    });
  }
};
export { initSweetalert };


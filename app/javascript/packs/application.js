import 'bootstrap';

import { initUpdateNavbarOnScroll } from '../components/navbar';
import { initSweetalert } from '../plugins/init_sweetalert';

initUpdateNavbarOnScroll();

initSweetalert('#sweet-alert-demo', {
  title: "Heads up!",
  text: "Are you sure you want to permanently delete this cocktail",
  icon: "success"
});


console.log('Hello World from Webpacker')

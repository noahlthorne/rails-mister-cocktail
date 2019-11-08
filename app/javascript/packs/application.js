import 'bootstrap';

import { initSweetalert } from '../plugins/init_sweetalert';

initSweetalert('#sweet-alert-demo', {
  title: "Heads up!",
  text: "Are you sure you want to permanently delete this cocktail",
  icon: "success"
});


console.log('Hello World from Webpacker')

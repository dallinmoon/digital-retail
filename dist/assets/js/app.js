import $ from "jquery"

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/jquery.min.js';
window.jQuery = $
window.$ = $;
import './lib/tether.min.js';
import './lib/popper.js';
import './lib/bootstrap.min.js';
import './lib/pace.min.js';
import './lib/usd.js';
//import './lib/ph-prototype.js';


$(document).foundation();

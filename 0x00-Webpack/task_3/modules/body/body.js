import './body.css';
import $ from 'jquery';
import _ from 'lodash';

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

let count = 0;

function updateCounter() {
  count++;
  $('#count').html(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));

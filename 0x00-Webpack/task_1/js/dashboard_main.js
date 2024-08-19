import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
});

const updateCounter = () => {
  const count = $('#count').html() || 0;
  $('#count').html(parseInt(count, 10) + 1);
};

$('button').on('click', _.debounce(updateCounter, 500));

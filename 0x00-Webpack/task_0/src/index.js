const { JSDOM } = require('jsdom');
const { window } = new JSDOM('');
const $ = require('jquery')(window);

$(document).ready(function () {
  $('body').append('<p>Paragraph 1</p>');
  $('body').append('<p>Paragraph 2</p>');
  $('body').append('<p>Paragraph 3</p>');
});

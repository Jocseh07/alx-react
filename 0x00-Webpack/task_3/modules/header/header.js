import $ from 'jquery';
import './header.css';

$('body').append('<header></header>');
$('header').append('<h1>Holberton Dashboard</h1>');
$('header').append('<p>Dashboard data for the students</p>');

console.log('Init header');

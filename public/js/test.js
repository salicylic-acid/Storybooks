'use strict'

console.log('test')
console.log('test')
console.log('test')
console.log('test')

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);

    console.log('test')
  });

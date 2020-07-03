document.addEventListener('DOMContentLoaded', function() {

  const sidenav = document.querySelector('.sidenav')
  const form    = document.querySelector('#status')

  M.Sidenav.init(sidenav)
  M.FormSelect.init(form)

CKEDITOR.replace('body', {
  plugins: 'wysiwygarea, toolbar, basicstyles, link'
})
});

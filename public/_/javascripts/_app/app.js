;(function(global) {
  
  global.SCS = {
    Models      : {},
    Views       : {},
    Collections : {},
    Routes      : {}
  };
  
})(window);

$(function() {
  window.app = new SCS.Views.App();
})

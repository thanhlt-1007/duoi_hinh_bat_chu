// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).on('ready', function() {
  $('.js-answer-box').keyup(function(event) {
    var modalQuestion = $(this).closest('.js-modal-question');
    modalQuestion.find('.js-text').addClass('hidden'); 

    var keyCode = event.keyCode;
    var A_KEY_CODE = 65;
    var Z_KEY_CODE = 90;

    if (keyCode >= A_KEY_CODE && keyCode <= Z_KEY_CODE) {
      var input = $(this).html();
      $(this).html(input.toUpperCase());

      $(this).next('.js-answer-box').focus();
    }
  });

  $('.js-btn-check').on('click', function() {
    var modalQuestion = $(this).closest('.js-modal-question');
    var answer = modalQuestion.data('answer');
    var index = modalQuestion.data('index');
    var userAnswer = '';

    modalQuestion.find('.js-answer-box').each(function(index) {
      userAnswer = userAnswer + $(this).html().trim();
    });

    if (userAnswer == answer) {
      modalQuestion.modal('hide');

      var box = $('.js-box[data-index="' + index + '"]');
      var answerSrc = box.data('answer');
      box.find('img').attr('src', answerSrc);
    } else {
      modalQuestion.find('.js-text').removeClass('hidden');
      modalQuestion.find('.js-answer-box').each(function(index) {
        $(this).html('');
      });
    }
  });
});

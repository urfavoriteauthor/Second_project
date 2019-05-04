var $signUp = $('#sign-up');
var $logIn = $('#log-in');
var $submit = $('#submit');
var $search = $('#search');
var $jobInfo = $('#job-info');
var $clientInfo = $('#client-info');
var $userInfo = $('#user-info');

var jobAPI = {
  newJob: function(jobs) {
    $.ajax({
      type: 'POST',
      url: 'api/jobs',
      data: JSON.stringify(jobs)
    });
  },
  pullJobs: function(jobs) {
    $.ajax({
      type: 'GET',
      url: 'api/jobs'
    });
  },
  jobFilled: function(jobs) {
    $.ajax({
      type: 'UPDATE',
      url: 'api/jobs' + id
    });
  },
  jobCompleted: function(jobs) {
    $.ajax({
      type: 'DELETE',
      url: 'api/jobs' + id
    });
  }
}
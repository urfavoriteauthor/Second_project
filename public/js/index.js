var $signUp = $('#sign-up');
var $logIn = $('#log-in');
var $submit = $('#submit');
var $search = $('#search');
var $jobInfo = $('#job-info');
var $clientInfo = $('#client-info');
var $userInfo = $('#user-info');

var $jobName = $('#jobName');
var $jobDescription = $('#jobDescription');
var $htmlNeeded = $('#htmlNeeded');
var $cssNeeded = $('#cssNeeded');
var $jsNeeded = $('#jsNeeded');

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


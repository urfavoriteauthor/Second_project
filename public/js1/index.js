var $fullName = $('#full-name');
var $jobName = $('#job-name');
var $jobDescription = $('#job-description');
var $email = $('#email');
var $submit = $('#submit');
var $filled = $('#job-filled');

var jobAPI = {
  newJob: function(jobs) {
    console.log(jobs)
    $.ajax({
      method: 'POST',
      url: 'api/jobs',
      data: jobs
    }).then(function(){
      console.log('Added');
    });
  },
  pullJobs: function() {
    $.ajax({
      method: 'GET',
      url: 'api/jobs'
    }).then(function(){
      console.log('Pulled');
    });
  },
  jobFilled: function(id) {
    $.ajax({
      method: 'DELETE',
      url: 'api/jobs' + id
    }).then(function() {
      console.log('Deleted');
    });
  }
}

$submit.on('click', function(event) {
  event.preventDefault();

  var jobs = {
    full_name: $fullName.val().trim(),
    job_name: $jobName.val().trim(),
    job_description: $jobDescription.val().trim(),
    emailAddress: $email.val().trim() 
  };

  jobAPI.newJob(jobs);

  console.log(jobs);

  $fullName.val('');
  $jobName.val('');
  $jobDescription.val('');
  $email.val('');
});

var displayAllJobs = function(jobs) {
  var $addJob = $('<li>');
}

$filled.click(function(event) {
  event.preventDefault();

  var deletedJob = $(this).parent().attr('data-id');

  jobAPI.jobFilled(deletedJob).then(function() {
    console.log('Job removed');
  });
});

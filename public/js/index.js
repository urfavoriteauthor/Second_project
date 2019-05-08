var $fullName = $('#full-name');
var $jobName = $('#job-name');
var $jobDescription = $('#job-description');
var $email = $('#email');
var $submit = $('#submit');
var $filled = $('#job-filled');

var jobAPI = {
  newJob: function(jobs) {
    return $.ajax({
      type: 'POST',
      url: 'api/jobs',
      data: JSON.stringify(jobs)
    }).then(function(){
      console.log('Added');
    });
  },
  pullJobs: function() {
    return $.ajax({
      type: 'GET',
      url: 'api/jobs'
    }).then(function(){
      console.log('Pulled');
    });
  },
  jobUpdate: function(id) {
    return $.ajax({
      type: 'UPDATE',
      url: 'api/jobs' + id
    }).then(function() {
      console.log('Updated');
    });
  },
  jobFilled: function(id) {
    return $.ajax({
      type: 'DELETE',
      url: 'api/jobs' + id
    }).then(function() {
      console.log('Deleted');
    });
  }
}

$submit.click(function(event) {
  event.preventDefault();

  var jobs = {
    full_name: $fullName.val().trim(),
    job_name: $jobName.val().trim(),
    job_description: $jobDescription.val().trim(),
    emailAddress: $email.val().trim() 
  }

  console.log(jobs);

  jobAPI.newJob(jobs).then(function() {
    console.log('Successfully added');
  });    
});

$filled.click(function(event) {
  event.preventDefault();

  var deletedJob = $(this).parent().attr('data-id');

  jobAPI.jobFilled(deletedJob).then(function() {
    console.log('Job removed');
  });
});
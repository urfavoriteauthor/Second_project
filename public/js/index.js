
var $addJob = $('#addJob');

var $jobName = $('#jobName');
var $jobDescription = $('#jobDescription');
var $emailAddress = $('#email');
// var $htmlNeeded = $('#htmlNeeded');
// var $cssNeeded = $('#cssNeeded');
// var $jsNeeded = $('#jsNeeded');

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
  jobFilled: function(id) {
    return $.ajax({
      type: 'UPDATE',
      url: 'api/jobs' + id
    }).then(function() {
      console.log('Updated');
    });
  },
  jobCompleted: function(id) {
    return $.ajax({
      type: 'DELETE',
      url: 'api/jobs' + id
    }).then(function() {
      console.log('Deleted');
    });
  }
}

$addJob.click(function(event) {
  event.preventDefault();

  var jobs = {
    job_name: $jobName.val().trim(),
    job_description: $jobDescription.val().trim(),
    emailAddress: $emailAddress.val().trim() 
  }

  console.log(jobs);

  jobAPI.newJob(jobs).then(function() {
    console.log('Successfully added');
  });    
})
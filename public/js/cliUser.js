$.getScript('index.js', function()
{
  $submit.click(function() {
    event.preventDefault();

    var jobs = {
      job_name: $jobName.val().trim(),
      job_description: $jobDescription.val().trim()
    }
  })
});
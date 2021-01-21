"use strict";

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
  initializePage();
});

/*
 * Function that is called when the document is ready.
 */

function projectClick(e) {
  e.preventDefault();
  var containingProject = $(this).closest(".project");
  var description = $(containingProject).find(".project-description");
  if (description.length != 0) {
    description.html(
      "<div class='project-description'><p>Stop Clicking on me you just did it </p>" +
        new Date() +
        "</div>"
    );
  } else {
    containingProject.append(
      "<div class='project-description'><p>Description of the project</p></div>"
    );
  }
}

function initializePage() {
  $("#testjs").click(function (e) {
    $(".jumbotron h1").text("Javascript has taken control");
    $("#testjs").text("Please Wait....");
    $(".jumbotron p").toggleClass("active");
  });
  $(".project").click(projectClick);
  // Add any additional listeners here
  // example: $("#div-id").click(functionToCall);
}

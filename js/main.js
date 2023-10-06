$(document).ready( () => {

function fetchData() {
  $.ajax({
    url: "https://geek-jokes.sameerkumar.website/api?format=json",
    method: "GET",
    success: (data) => {
      $("#joke").text(data.joke);
    }
  });
}

$("#btn").click(fetchData);
})

$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const novaTarefa = $("#task-input").val();

    $(document).on("click", ".delete-btn", function (e) {
      e.stopPropagation();
      $(this).parent().remove();
    });

    $(document).on("click", ".task-text", function () {
      $(this).toggleClass("completed");
    });

    if (novaTarefa.trim() !== "") {
      const novoItem = $(`
  <li class="novaT">
    <span class="task-text">${novaTarefa}</span>
    <button class="delete-btn">Delete</button>
  </li>
`);
      $("ul").append(novoItem);
      $("#task-input").val("");
    } else alert("Adicione uma tarefa");
  });
});

var delay;

var editor = document.getElementById('code-editor')

editor.on("change", function () {
    clearTimeout()
})
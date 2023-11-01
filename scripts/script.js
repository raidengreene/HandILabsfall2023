var select = document.getElementById("phrase");
var options = ["We are here!", "We are happy!", "We are hyped!", "We are healthy!", "We are hungry!", "We are human!", "We are holy!", "We are halu!", "We are humorous!", "We are happening!"];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
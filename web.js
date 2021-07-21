function press(x) {
    var node = document.createElement("span");
    var textnode = document.createTextNode(x);
    node.appendChild(textnode);
    document.getElementById("abc").appendChild(node);
    document.getElementById("code").innerText += x;
    document.getElementById("validate").disabled = false;
}

$(document).ready(function(){
    $("button").click(function(){
    $.get(`https://us-central1-cacheem.cloudfunctions.net/cache?code=${
        document.getElementById("code").innerText}`, function(data, status){
        window.location = data.value;
    });
    });
});
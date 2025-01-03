document.getElementById("greetButton").addEventListener("click", function(){
    const name = document.getElementById("nameInput").value;
    const message = name ? `${name}さん、こんにちは。`: "名前を入力して";
    document.getElementById("greetingMessage").textContent = message;
});
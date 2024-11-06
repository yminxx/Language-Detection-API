function detectLanguage() {
    var text = document.getElementById('userText').value;
    if (text.trim() === "") {
        document.getElementById('language').innerText = "Please enter some text.";
        return;
    }

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/textlanguage?text=' + encodeURIComponent(text),
        headers: { 'X-Api-Key': 'rrljJT08kVOTua/9Bjw+0g==VvAaClW1z2RYsPQ6' },
        contentType: 'application/json',
        success: function (result) {
            document.getElementById('language').innerText = 'Detected Language: ' + result.language;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            document.getElementById('language').innerText = 'Error detecting language. Please try again.';
        }
    });
}

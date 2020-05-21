// Ekstrakcja metody 

/**
 * Generowanie Szablonu strony HTML
**/
const templateCodeElement = document.querySelector('[data-template-code')
const actionCreateElement = document.querySelector('[data-action-create]')
const actionCopyElement = document.querySelector('[data-action-copy]')

actionCopyElement.addEventListener('click', () => {
    let html = generateTemplate()
    copyToClipboard(html)
})

actionCreateElement.addEventListener('click', () => {
    let html = generateTemplate()
    templateCodeElement.innerText = html
    console.log(html)
})



const saveFile = () => {

}

const generateTemplate = () => {

    let html = `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Template</title>
        <meta name="description" content="HTML template">
        <meta name="author" content="">
        <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>

        <script src="js/scripts.js"></script>
    </body>
    </html>
    `
    return html

}


// 

const copyToClipboard = (text) => {
    if (window.clipboardData && window.clipboardData.setData) {
        return clipboardData.setData("Text", text);
    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}
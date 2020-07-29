function copy_to_clipboard(text) {
    /* Get the text field */
    var copyText = document.getElementById("CopyMaker");
    copyText.value = text;

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
}
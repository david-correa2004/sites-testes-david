const btn = document.querySelector("#enviarBtn");

btn.addEventListener("click", e => {
    e.preventDefault()
    const name = document.querySelector("#name").value;
    const assunto = document.querySelector("#assunto").value;
    const message = document.querySelector("#message").value; 
    message.replace(" ", "+")
    console.log(assunto)
    window.location.assign(`https://wa.me/0000000000000?text=Nome:+${name}%0AAssunto:+${assunto}%0AMensagem:+${message}`)
})



const btn = document.querySelector("#submit");

btn.addEventListener("click", e => {
    e.preventDefault();
    const name = document.querySelector("#nome").value;
    const assunto = document.querySelector("#assunto").value;
    const mens = document.querySelector("#mens").value; 
    if(name=== "" || assunto === "" || mens === ""){
        alert('Preencha todos os campos')
    }else{
        mens.replace(" ", "+")
        console.log(assunto)
        window.location.assign(`https://wa.me/5548988056818?text=Nome:+${name}.%0AProcedimento:+${assunto}.%0AMensagem:+${mens}`)
    }
})

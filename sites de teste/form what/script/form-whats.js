/*class formSubmit {
    constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
    }
    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error; 
    }

    async sendForm() {
        try {
            await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: "",
            });
            this.displaySuccess();
        }
        catch (error){
            this.displayError();
            throw new Error(error);
        }
    }

    init() {
        if (this.form) 
        this.formButton.addEventListener("click", () => this.displaySuccess());
        return this
    }
}

const formSubmit = new formSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possivel enviar sua mensagem.</h1>",
});

formSubmit.init();


const evento = document.getElementById("send")
const enviarFormulario = () => {
    let name = document.getElementById("name").values;
    let Ntel = document.getElementById("N°tel").values;
    let mens = document.getElementById("mens").values;
    let numero = 3591850545;
    var win = window.open(`https://wa.me/${numero}?text=Hola%20mi%20name%20es%20${name}%20${Ntel}, Asunto:%20${mens}, "_blank"`);
}
evento.addEventListener("click", enviarFormulario)
*/






document.querySelector("#submit").addEventListener("click" ,function(){

    let nome = document.querySelector("#nome").value;
    let tel = document.querySelector("#tel").value;
    let mens = document.querySelector("#mens").value;

    let url = "https://api.whatsapp.com/send?phone=553591850545&text=%0A*Qual é seu nome:*%0A" + nome + "%0A*N°tel:%8A" + tel + "%0A*Mensagem:*%0A" + mens;
    window.open(url);
    
});
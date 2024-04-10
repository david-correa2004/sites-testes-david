
const trat = document.querySelectorAll(".swiper-slide");
const modal = document.querySelector("#modal_container");
const modalTitle = document.querySelector("#modal__title");
const modalImage = document.querySelector("#modal__image");
const modalText = document.querySelector("#modal__text");
const fechar = document.getElementById("fechar");

trat.forEach(tratamento => {
    tratamento.onclick = () => {
        let selectedTratamentos = tratamento.dataset.treatment;

        modal.querySelector("img").src = tratamentosinfo[selectedTratamentos].img;
        modal.querySelector("h2").innerHTML = tratamentosinfo[selectedTratamentos].title;
        modal.querySelector("p").innerHTML = tratamentosinfo[selectedTratamentos].text;


        modal.dataset.active = "true"

        console.log('funcionando')

    }
})

fechar.onclick = () => {
    modal.dataset.active = "false"
}

const tratamentosinfo = {

    //estética
    
    toxina: {
        img: "./assets/img-modal/toxina-botulinica.jpg",
        title: "Toxina Botulínica",
        text: "A toxina botulínica, conhecida como Botox, é uma substância utilizada para diversos fins estéticos e terapêuticos. Com propriedades relaxantes musculares, é aplicada de forma segura para suavizar rugas e linhas de expressão. Além disso, também é utilizada em tratamentos odontológicos, como no controle do bruxismo e em casos de sorriso gengival excessivo.",
    },
    fiospdo: {
        img: "./assets/img-modal/fios-de-pdo.jpg",
        title: "Fios de PDO",
        text: "Os fios de PDO são uma opção inovadora para tratamentos estéticos não cirúrgicos. Feitos de polidioxanona, esses fios são inseridos na pele para promover um efeito lifting, estimulando a produção de colágeno e melhorando a firmeza e a aparência da pele. Essa técnica minimamente invasiva é utilizada para tratar flacidez facial e rejuvenescer áreas como rosto, pescoço e corpo.",
    },
    skinbooster: {
        img: "./assets/img-modal/skinbooster.jpg",
        title: "Skinbooster",
        text: "O Skinbooster é um tratamento estético que utiliza ácido hialurônico para hidratar profundamente a pele. Essa técnica promove uma melhora significativa na hidratação, elasticidade e luminosidade da pele. Além disso, estimula a produção de colágeno, reduzindo rugas finas e melhorando a textura da pele, resultando em um aspecto mais jovem e saudável.",
    },
    preenchimento: {
        img: "./assets/img-modal/preenchimento.jpg",
        title: "Preenchimento",
        text: "O preenchimento é um procedimento estético que utiliza substâncias como o ácido hialurônico para adicionar volume, suavizar rugas e melhorar contornos faciais. Realizado por profissionais qualificados, o preenchimento é uma opção popular para tratar áreas como lábios, maçãs do rosto e sulcos nasogenianos, proporcionando resultados naturais e duradouros.",
    },
    bichectomia: {
        img: "./assets/img-modal/bichectomia.jpg",
        title: "Bichectomia",
        text: "A bichectomia é um procedimento estético que consiste na remoção parcial ou total das bolas de Bichat, que são pequenas bolsas de gordura presentes nas bochechas. Realizada por cirurgiões plásticos, busca afinar o rosto e realçar os contornos faciais. É um procedimento relativamente simples, com recuperação rápida e resultados duradouros, proporcionando um aspecto mais harmonioso ao rosto.",
    },
    rinomodelação: {
        img: "./assets/img-modal/rinomodelação.jpg",
        title: "Rinomodelação",
        text: "A Rinomodelação é uma técnica estética não cirúrgica utilizada para modificar o formato e proporções do nariz. Através do uso de preenchedores dérmicos, é possível corrigir imperfeições como ponta caída, assimetrias ou irregularidades. O procedimento é rápido, seguro e oferece resultados naturais, sem a necessidade de intervenção cirúrgica.",
    },
    microagulhamento: {
        img: "./assets/img-modal/microagulhamento.jpg",
        title: "Microagulhamento",
        text: "O Microagulhamento é uma técnica estética que utiliza pequenas agulhas para perfurar a pele, estimulando a produção de colágeno e a regeneração celular. Esse procedimento é eficaz no tratamento de cicatrizes, rugas, poros dilatados e manchas, proporcionando uma pele mais firme, suave e rejuvenescida. É uma opção popular para o rejuvenescimento facial.",
    },
    peeling: {
        img: "./assets/img-modal/peeling.jpg",
        title: "Peeling",
        text: "O peeling é um procedimento estético que consiste na aplicação de substâncias químicas, físicas ou mecânicas na pele, com o objetivo de remover camadas superficiais e estimular a renovação celular. Essa técnica promove a melhora da textura, redução de manchas, rugas e cicatrizes, resultando em uma pele mais saudável, jovem e revitalizada.",
    },


    //odontologicos

    clinica: {
        img: "./assets/img-modal/clinica-geral.jpg",
        title: "Clínica Geral",
        text: "A clínica geral odontológica é um local essencial para cuidar da saúde bucal de forma abrangente. Com profissionais qualificados e equipamentos modernos, oferece serviços como limpeza, restauração, extração e tratamento de doenças periodontais. Com um atendimento personalizado, a clínica geral odontológica visa proporcionar sorrisos saudáveis e uma melhor qualidade de vida para seus pacientes.",
    },
    alinhadores: {
        img: "./assets/img-modal/alinhadores.jpg",
        title: "Alinhadores",
        text: "Os alinhadores invisíveis são uma opção moderna e discreta para correção dos dentes. Feitos de material transparente, eles são praticamente imperceptíveis ao sorrir. Esses dispositivos removíveis são confortáveis e permitem uma higiene bucal adequada. Com o uso gradual, os alinhadores invisíveis ajudam a obter um sorriso alinhado e harmonioso, transformando a aparência e a confiança do paciente.",
    },
    proteses: {
        img: "./assets/img-modal/proteses.jpg",
        title: "Próteses Dentárias",
        text: "As próteses dentárias são dispositivos customizados que substituem dentes ausentes, restaurando a função e a estética bucal. Podem ser parciais, completas ou fixas, confeccionadas com materiais duráveis e seguros. Além de melhorar a mastigação e a fala, as próteses promovem a autoconfiança, o sorriso saudável e a qualidade de vida dos pacientes.",
    },
    lentes: {
        img: "./assets/img-modal/lentes-de-contato.jpg",
        title: "Lentes de Contato Dentais",
        text: "As lentes de contato dental são finas camadas de porcelana ou resina colocadas sobre os dentes para melhorar sua aparência estética. Elas corrigem imperfeições como manchas, desalinhamentos e espaçamentos, proporcionando um sorriso harmonioso e natural. São duráveis, personalizadas e exigem pouco desgaste dental.",
    },
    periodontia: {
        img: "./assets/img-modal/periodontia.jpg",
        title: "Periodontia",
        text: "A periodontia é uma especialidade odontológica que se dedica ao diagnóstico e tratamento das doenças que afetam os tecidos de suporte dos dentes, como a gengiva e o osso alveolar. Com técnicas avançadas, busca prevenir e tratar a gengivite e a periodontite, visando à saúde bucal e à preservação dos dentes, proporcionando um sorriso saudável e duradouro.",
    },
    odontopediatria: {
        img: "./assets/img-modal/odontopediatria.jpg",
        title: "Odontopediatria",
        text: "Odontopediatria é a área da odontologia que se dedica ao cuidado da saúde bucal das crianças. Com profissionais especializados e técnicas adequadas, proporciona um ambiente acolhedor e agradável para os pequenos pacientes. Além de prevenir e tratar problemas dentários, a odontopediatria ensina a importância dos cuidados orais desde cedo, garantindo sorrisos saudáveis e felizes. ",
    },
    clareamento: {
        img: "./assets/img-modal/clareamento.jpg",
        title: "Clareamento Dental",
        text: "O clareamento dental é um procedimento estético que visa clarear a tonalidade dos dentes, removendo manchas e proporcionando um sorriso mais branco e radiante. Realizado por meio de géis clareadores aplicados nos dentes, pode ser feito em consultório ou em casa, sob orientação profissional. O clareamento dental contribui para a melhoria da autoestima e confiança do paciente.",
    },
    implantodontia: {
        img: "./assets/img-modal/implantes.jpg",
        title: "Implantodontia",
        text: "A implantodontia é uma especialidade odontológica que visa substituir dentes ausentes por implantes dentários de titânio. Esses implantes funcionam como raízes artificiais, permitindo a colocação de próteses fixas ou removíveis. Com tecnologia avançada, proporciona resultados estéticos e funcionais, melhorando a qualidade de vida dos pacientes.",
    },
    endodontia: {
        img: "./assets/img-modal/endodontia.jpg",
        title: "Endodontia",
        text: "A endodontia é uma especialidade odontológica voltada para o tratamento do canal radicular, localizado no interior do dente. Por meio de técnicas avançadas, o endodontista realiza a remoção da polpa dental infectada ou inflamada, promovendo a desinfecção e o preenchimento adequado do canal. Esse procedimento visa salvar o dente e aliviar a dor, restaurando a saúde bucal do paciente.",
    },
}
//Solução 1
    // const h1 = document.querySelector('.container h1');
    // const data = new Date();
    // console.log(data,toString());
    // const options = { 
    //     dateStyle :'full',
    //     timeStyle:'short'
    // }

    // h1.innerHTML = data.toLocaleDateString('pt-BR',options);

//Solução 2
//     const textoData = document.querySelector(".container h1");
//     const data = new Date();

//     getData(data);

// function getData(data){
//     const dayWeek = data.getDay();
//     const mes = data.getMonth();
//     const nomeDiaSemana = diaSemana(dayWeek);
//     const nomeMes = numeroMes(mes);
//     textoData.innerHTML = dataFormatada(nomeDiaSemana,nomeMes);
// }

//     function diaSemana(dayWeek) {
//         const msg =["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
//                 return msg[dayWeek];
        
//     }

//     function numeroMes(mes){
//         const msg = [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho", "Julho","Agosto","Setembro","Outubro","Novwmbro","Dezembro"];
//         return msg[mes];
//     }

//     function dataFormatada(diaSemana, mes) {
//         let msg = `${diaSemana}, ${data.getDate()} de ${mes} de ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`;
//         return msg;
//     }

//     function zeroEsquerda(num){
//         return num>=10?num:`0${num}`;
//     }

//Solução 3
    const textoData = document.querySelector(".container h1");
    const data = new Date();

    getData(data);

function getData(data){
    const dayWeek = data.getDay();
    const mes = data.getMonth();
    const nomeDiaSemana = diaSemana(dayWeek);
    const nomeMes = numeroMes(mes);
    textoData.innerHTML = dataFormatada(nomeDiaSemana,nomeMes);
}

    function diaSemana(dayWeek) {
        let msg = "";
        switch (dayWeek) {
            case 0:
                msg = "Domingo";
                return msg;
            case 1:
                msg = "Segunda-feira";
                return msg;
            case 2:
                msg = "Terça-feira";
                return msg;
            case 3:
                msg = "Quarta-feira";
                return msg;
            case 4:
                msg = "Quinta-feira";
                return msg;
            case 5:
                msg = "Sexta-feira";
                return msg;
            case 6:
                msg = "Sábado";
                return msg;
        }
    }

    function numeroMes(mes){
        let msg = "";
        switch (mes) {
            case 0:
                msg = "Janeiro";
                return msg;
            case 1:
                msg = "Fevereiro";
                return msg;
            case 2:
                msg = "Março";
                return msg;
            case 3:
                msg = "Abril";
                return msg;
            case 4:
                msg = "Maio";
                return msg;
            case 5:
                msg = "Junho";
                return msg;
            case 6:
                msg = "Julho";
                return msg;
            case 7:
                msg = "Agosto";
                return msg;
            case 8:
                msg = "Setembro";
                return msg;
            case 9:
                msg = "Outubro";
                return msg;
            case 10:
                msg = "Novwmbro";
                return msg;
            case 11:
                msg = "Dezembro";
                return msg;
        } 
    }

    function dataFormatada(diaSemana, mes) {
        let msg = `${diaSemana}, ${data.getDate()} de ${mes} de ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`;

        return msg;
    }

    function zeroEsquerda(num){
        return num>=10?num:`0${num}`;
    }


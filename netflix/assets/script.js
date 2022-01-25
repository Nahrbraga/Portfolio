$('.owl-carousel').owlCarousel({
    loop:false, //efeito de loop, ao chegar no final ele para (false) ou continua (true)
    margin:10,
    nav:false, 
    responsive:{ // responsividade dependendo do tamanho da tela
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const botaoTrailer = document.getElementById('botaoTrailer')
const displayPrincipal = document.getElementsByClassName('filme-principal')[0]
const titulo = document.getElementsByClassName('titulo')[0]
const descricao = document.getElementsByClassName('descricao')[0]

botaoTrailer.addEventListener('click', () => {
    switch (titulo.innerHTML) {
        case 'Harry Potter: De Volta a Hogwarts':
            window.open("https://www.youtube.com/watch?v=FhJx6bNBlTY")           
            break;
        case 'Velozes e Furiosos 9':
            window.open("https://www.youtube.com/watch?v=NnDGWyfP7q4")
            break;
        case 'Vingadores: Guerra Infinita':
            window.open("https://www.youtube.com/watch?v=t_ULBP6V9bg")
            break;
        case 'Duna':
            window.open("https://www.youtube.com/watch?v=U_SsfAp_F9Y")
            break;
        case 'Viúva Negra':
            window.open("https://www.youtube.com/watch?v=Gm3o0bfGP3g")
            break;
        case 'Pânico':
            window.open("https://www.youtube.com/watch?v=swzTZ2mQypM")
            break;
        case 'Infinito':
            window.open("https://www.youtube.com/watch?v=jGVrOTbnDBU")
            break;
        case 'Homem Aranha: Sem Volta para Casa':
            window.open("https://www.youtube.com/watch?v=rzOvXvBNzMc")
            break;
        case 'Eternos':
            window.open("https://www.youtube.com/watch?v=lRrSFvZUgGw")
            break;
        default:
            break;
    }
})

const opcoes = document.querySelectorAll('.item')
const estiloBackGound = 'background: linear-gradient(to left, transparent, rgb(0, 0, 0, 0.9) 80%)'
const estiloMedidas = 'height: 500px; background-size: cover; display: flex;flex-direction: column;justify-content: center;align-items: flex-start;'

opcoes.forEach((a) => {
    a.addEventListener('click', () => {
        switch (true) {
            case a.classList.contains('hp'):
                displayPrincipal.setAttribute('style', 
                `${estiloBackGound}, url('./img/harryPotter_comemoracao.jpg');${estiloMedidas}`)
                titulo.innerHTML = 'Harry Potter: De Volta a Hogwarts'
                descricao.innerHTML = 'Uma encantadora história de making-of contada por meio de novas entrevistas em profundidade e conversas com o elenco, convidando os fãs a uma jornada mágica em primeira pessoa através de uma das franquias de filmes mais amadas de todos os tempos.'
               
                break;

            case a.classList.contains('velozesFuriosos'):
                displayPrincipal.setAttribute('style', 
                `${estiloBackGound}, url('./img/velozes_furiosos.jpg');${estiloMedidas}`)
                titulo.innerHTML = 'Velozes e Furiosos 9'
                descricao.innerHTML = 'Dominic Toretto e sua família precisam enfrentar o seu irmão mais novo Jakob, um assassino mortal que está trabalhando com uma antiga inimiga, a cyber-terrorista Cipher.'
                
                break;

            case a.classList.contains('vingadores'):
                displayPrincipal.setAttribute('style', 
                `${estiloBackGound}, url('./img/vingadores.jpg');${estiloMedidas}`)
                titulo.innerHTML = 'Vingadores: Guerra Infinita'
                descricao.innerHTML = 'Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.'
                
                break;
            case a.classList.contains('duna'):
                displayPrincipal.setAttribute('style', 
                `${estiloBackGound}, url('./img/duna.jpg');${estiloMedidas}`)
                titulo.innerHTML = 'Duna'
                descricao.innerHTML = 'Em um futuro distante, planetas são comandados por casas nobres que fazem parte de um império feudal intergalático. Paul Atreides é um jovem cuja família toma o controle do planeta deserto Arrakis, também conhecido como Duna. A única fonte da especiaria Melange, a substância mais importante do cosmos, Arrakis se mostra ser um planeta nem um pouco fácil de governar.'
                
                break;
            case a.classList.contains('viuvaNegra'):
                displayPrincipal.setAttribute('style', 
                `${estiloBackGound}, url('./img/viuva_negra.jpg');${estiloMedidas}`)
                titulo.innerHTML = 'Viúva Negra'
                descricao.innerHTML = 'Natasha Romanoff, também conhecida como Viúva Negra, confronta o lado mais sombrio de sua história quando surge uma perigosa conspiração ligada ao seu passado. Perseguida por uma força implacável disposta a tudo para destruí-la, Natasha precisa agora lidar com seu passado como espiã e com as relações que deixou para trás muito antes de se tornar uma Vingadora.'
                
                break;

            case a.classList.contains('panico'):
                displayPrincipal.setAttribute('style', 
                `${estiloBackGound}, url('./img/panico.jpg');${estiloMedidas}`)
                titulo.innerHTML = 'Pânico'
                descricao.innerHTML = 'Vinte e cinco anos após uma série de crimes brutais chocar a tranquila Woodsboro, um novo assassino se apropria da máscara de Ghostface e começa a perseguir um grupo de adolescentes para trazer à tona segredos do passado mortal da cidade.'
                
                break;

            case a.classList.contains('infinito'):
                displayPrincipal.setAttribute('style', 
                `${estiloBackGound}, url('./img/infinito.jpg');${estiloMedidas}`)
                titulo.innerHTML = 'Infinito'
                descricao.innerHTML = 'Evan McCauley tem habilidades que ele nunca aprendeu e lembranças de lugares que nunca visitou. Auto-medicado e à beira de um colapso mental, um grupo secreto que se intitula "Infinites" vem em seu socorro, revelando que suas memórias são reais.'
                
                break;

            case a.classList.contains('homemAranha'):
                displayPrincipal.setAttribute('style', 
                `${estiloBackGound}, url('./img/homem_aranha.jpg');${estiloMedidas}`)
                titulo.innerHTML = 'Homem Aranha: Sem Volta para Casa'
                descricao.innerHTML = 'Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.'
                
                break;

            case a.classList.contains('eternos'):
                displayPrincipal.setAttribute('style', 
                `${estiloBackGound}, url('./img/eternos.jpg');${estiloMedidas}`)
                titulo.innerHTML = 'Eternos'
                descricao.innerHTML = 'Após os eventos de "Vingadores: Ultimato", os Eternos, uma raça alienígena imortal criada pelos Celestiais que vivem em segredo na Terra há mais de 7000 anos, se reúnem após uma tragédia inesperada para proteger a humanidade de seus colegas malignos: os Deviantes.'
                
                break;

            default:
                break;
        }
        
    })
})    





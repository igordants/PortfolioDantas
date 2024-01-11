// função para esconder e ixibir o menu na versão mobile
const btn = document.getElementById("Botao")
        const menu = document.getElementById("menu")
        btn.addEventListener("click" , () => {
            menu.classList.toggle("hidden")
        })

        // Máquina de escrever na página HOME
        function typeWrite(elemento){
            const textoArray = elemento.innerHTML.split('h2');
            elemento.innerHTML = '';
            textoArray.forEach((letra,i) => {
                setTimeout(() => elemento.innerHTML += letra, 75 * i)
            });
        }
        const titulo = document.querySelector('h2');
        typeWrite(titulo);
        const textLoad = () => {
            setTimeout(() => {
                titulo.tituloContent = 'Web Developer';
            }, 0);
            setTimeout (() => {
                titulo.tituloContent = 'Desenvolvedor Web';
            }, 4000);
            setTimeout (() => {
                titulo.tituloContent = 'Desenvolvedor face';
            },8000);
        }
            textLoad();
            setInterval(textLoad,12000);
    
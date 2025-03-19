import './cards.css'

function Cards() {
    const colunas = document.querySelectorAll(".card-colunas");
    const cards = document.querySelectorAll(".card")
    let cardpego= null ;

    const dragStart = (event) =>
    {
        cardpego = event.target;
       event.dataTransfer.effectAllowed = "move";
    };

    const dragOver = (event)=>{
        event.preventDefault();
    };

    const dragEnter = ({target}) => {
        if (target.classList.contains("card-colunas")) {
            target.classList.add("foco-coluna")
        }
    }

    const dragLeave = ({target}) => {
        target.classList.remove("foco-coluna")
    }

    const drop = ({target}) => {
        if(!target.classList.contains('card-colunas')) return;

        target.append(cardpego)
        target.classList.remove('foco-coluna')
    }

    const criarCard = ({ target }) => {
        if (target.classList.contains("card-colunas")){
            const card = document.createElement("section")
            card.className = "card"
            card.draggable = "true"
    
            card.addEventListener("dragstart", dragStart)
            card.addEventListener("focusout",()=> {
                card.contentEditable = "false"
                if (!card.textContent) card.remove()
            })
            card.contentEditable = "true"
            target.append(card)
            card.focus()
    
        }
        
    }

     cards.forEach((card)=>{
         card.addEventListener("dragstart", dragStart)
     })

    colunas.forEach((coluna) =>{
        coluna.addEventListener('dragover' , dragOver);
        coluna.addEventListener("dragenter", dragEnter);
        coluna.addEventListener('dragleave', dragLeave);
        coluna.addEventListener('drop', drop);
        coluna.addEventListener("dblclick", criarCard)
    })
    
    return (
        <>
        <section className="card-colunas">

        </section>
        </>
    )
}

export default Cards
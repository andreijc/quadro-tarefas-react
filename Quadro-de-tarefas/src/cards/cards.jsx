import './cards.css'

function Cards() {
    const colunas = document.querySelectorAll(".card-colunas");
    const cards = document.querySelectorAll(".card");

    let cardpego;

    const dragStart = (event) =>
    {
        cardpego = event.target
       event
    };

    const dragOver = (event)=>{
        cardpego = event.target;
        console.log(cardpego);
    };

    colunas.forEach((coluna)=>
        coluna.addEventListener('dragover', dragOver)
    )

    cards.forEach((card)=>{
        card.addEventListener('dragstart', dragStart)
    })


    return (
        <>
        <section className="card-colunas">
            <section className="card
             " draggable="true">
                Ola tube
            </section>
    
        </section>
        </>
    )
}

export default Cards
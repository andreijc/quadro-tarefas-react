import Cards from '../cards/cards'
import './coluna.css'

function Coluna({titulo}) {
   return (
    <>
    <section className="coluna">
    <h2>{titulo}</h2>
     <Cards />
    </section>
</>
    )
}

export default Coluna
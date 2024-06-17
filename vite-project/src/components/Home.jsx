// Importando outro componente para o componente Home
import { Homecontent } from "./home-content"
function Home(props) /* usando props, ao invés de declarar o nome diretamente */{
  return (
    <div>
      <h1>{props.nomePagina}</h1>
      <h2>{props.paginaPrincipal}</h2>
      <Homecontent />
      <img src="" alt="" />
    </div>
  )
}
// exportando para importar em outro lugar
export default Home

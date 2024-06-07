import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className={styles.header}>
      
      <ul className={styles.menu}>
        
        <li><Link className={styles.linkmenu} to ="./">Home</Link></li>
        <li><Link className={styles.linkmenu} to="./Mission">Missão</Link></li>
        <li><Link className={styles.linkmenu} to="./Product">Produto</Link></li>
        <li><Link className={styles.linkmenu} to="./History">Historia</Link></li>
        <li><Link className={styles.linkmenu} to="./Contact">Contato</Link></li>
          

      </ul>
    </header>
  )
}

// function Header() {
//   return (
//     <header className={styles.header}>
      
//       <ul className={styles.menu}>
        
//         <li><a /*className= {styles.linkmenu}*/ href="./">Home</a></li>
//         <li><a /*className={styles.linkmenu}*/ href="./Mission">Missão</a></li>
//         <li><a /*className={styles.linkmenu}*/ href="./Product">Produto</a></li>
//         <li><a /*className={styles.linkmenu}*/ href="./History">Historia</a></li>
//         <li><a /*className={styles.linkmenu}*/ href="./Contact">Contato</a></li>
        
        

//       </ul>
//     </header>
//   )
// }
// exportando para importar em outro lugar
export default Header

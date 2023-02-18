
function Navbar() {
  return (
    <section className="h-16 mt-4 border-b-4">
        <ul className="flex row justify-between cursor-pointer p-2">
          <li>Sobre</li>
          <li>Pacotes</li>
          <li>Contatos</li>
        <button className="btn-primary">Entrar</button>
        <button>Cadastre-se</button>
        </ul>
    </section>
  )
}

export default Navbar
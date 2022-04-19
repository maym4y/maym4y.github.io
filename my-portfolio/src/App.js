import './App.css';

function App() {
  return (
    <div>
      <nav className="navegar">
        <h2>Mayara Almeida</h2>
        <div className="navlinks">
        <a href="#inicio">Início</a>
        <a href="#historia">Minha história</a>
        <a href="#trabalhos">Meus trabalhos</a>
        <a href="#habil">Outras Habilidades</a>
        <a href="#contato">Contato</a>
        </div>
      </nav>
      <main className="body">
        <div className="introducao" id="inicio">
          <h1>Desenvolvedora Web em Formação</h1>
        </div>
        <div className="detalhes" id="historia">
          <p>
            Estudei 2 anos design na UFPE, 1 ano Física na UFPB,
            e estou na Trybe estudando para ser uma desenvolvedora Full Stack e começar minha carreira
          </p>
        </div>
        <div className="projetos" id="trabalhos">
          <p>Tal projeto:</p>
          <p>Outro projeto</p>
          <p>Final projeto</p>
        </div>
        <div className="extra" id="habil">
          <p>Fluente em inglês, boa em pesquisas, vontade de aprender e ser linda</p>
        </div>
        <div className="info" id="contato">
          email e redes sociais
        </div>
      </main>
      <footer className="foot">
        <span>Feito e mantido por Mayara Almeida usando React e Bootstrap</span>
      </footer>
    </div>
  );
}

export default App;

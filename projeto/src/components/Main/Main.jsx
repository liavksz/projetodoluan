import "./Main.css";

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>Criamos sites que funcionam</h1>
        <p>
          Layouts responsivos, rápidos e acessíveis para o seu negócio crescer
          na web
        </p>
        <div className="hero-buttons">
          <a href="#orçamento" className="btn-primary">
            Peça um orçamento
          </a>
          <a href="#portfolio" className="btn-secondary">
            Ver portifólio
          </a>
        </div>
      </section>
      <section className="servico">
        <h2>Nossos serviços</h2>

        <div className="servicos-grid"></div>
      </section>
    </main>
  );
}

export default Main;

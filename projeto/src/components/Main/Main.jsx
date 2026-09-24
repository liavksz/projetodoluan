import "./Main.css";

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>Criamos sites que funcionam</h1>
        <p>
          Layuots responsivos, rápidos e acessíveis para o seu negócio crescer
          na web.
        </p>
        <div className="hero-buttons">
          <a href="#orcamento" className="btn-primary">
            peça um orçamento
          </a>
          <a href="#portifolio" className="btn-secundary">
            ver portifólio
          </a>
        </div>
      </section>
      <section className="servicos"></section>
    </main>
  );
}

export default Main;

export default function Page(props: PageProps<Character>) {
    try {
      const character = props.data;
      return (
        <div>
          <div className="contenedorinicio2">
          <h1>Elige lo que quieres hacer</h1>
          </div>
          <div className="contenedorinicio">
          <br><a href="/user">Generar usuario aleatorio</a></br>
          <br><a href="/city">Buscar ciudad por nombre</a></br>
          <br><a href="/dog">Buscar raza de perro</a></br>
          </div>
        </div>
        
      );
    } catch (e) {
      return <div>Ha habido un error</div>;
    }
  }
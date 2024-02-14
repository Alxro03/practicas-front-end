export default function Page(props: PageProps<Character>) {
  try {
    const character = props.data;
    return (
      <div>
        <h1>Elige lo que quieres hacer</h1>
        <a href="/starships">naves<br></br></a>
        <a href="/search">buscar personajes<br></br></a>
        <a href="/people">gente<br></br></a>
      </div>
    );
  } catch (e) {
    return <div>Ha habido un error</div>;
  }
}
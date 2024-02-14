import Axios from "axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type starships = {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
}

type Data = {
  pages: number;
  ships: starships[];
}



export const handler: Handlers<Data> = {
    async GET(_req: Request, ctx: FreshContext<unknown, Data>) {
      const url = new URL(_req.url);
      const page = url.searchParams.get("page") || "1";
      
      // get rick and morty characters
      const response = await Axios.get(
        `https://swapi.dev/api/starships?page=${page}`,
      );

      if (response.status !== 200) {
        console.error(
          "Error fetching starships",
          response.status,
          response.statusText,
        );
        throw new Error("Error fetching starships");
      }
      //console.log(response.data.results);
      return ctx.render({ ships: response.data.results, pages: page });
    },
  };
  

const Page = (props: PageProps<Data>) => {
  const{ships, pages} = props.data;
    return (
    <div>
        <h1>Página {pages}</h1>

        <ul>
          {ships.map((e) => {
            return <li key={e.name}>
              <h2>Nave: {e.name}</h2> 
              modelo: {e.model}<br></br>
              manufacturer: {e.manufacturer}<br></br>
              coste: {e.cost_in_credits}<br></br>
              </li>;
          })}
        </ul>
        {parseInt(pages) > 1 && (
        <a href={`/starships?page=${parseInt(pages) - 1}`}>Previous</a>
        )}&nbsp; | &nbsp;
        {parseInt(pages) < 4 && (
        <a href={`/starships?page=${parseInt(pages) + 1}`}>Next</a>
        
      )}
      <form method="get">
        <input name={"page"} />
        <button type="submit">Enviar</button>
      </form>
        
    </div>
    )
  };
export default Page;
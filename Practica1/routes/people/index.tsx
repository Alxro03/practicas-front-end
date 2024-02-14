import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";

type persona = {
    name: string;
    height: string;
    mass: string;
    gender: string;
    birth_year: string;
}

type Data = {
  gente: persona[];
}



export const handler: Handlers<Data> = {
    async GET(_req: Request, ctx: FreshContext<unknown, Data>) {
      const url = new URL(_req.url);
      const name = url.searchParams.get("name") || "";
      
      // get rick and morty characters
      const response = await Axios.get(
        `https://swapi.dev/api/people/?search=${name}`,
      );

      if (response.status !== 200) {
        console.error(
          "Error fetching person",
          response.status,
          response.statusText,
        );
        throw new Error("Error fetching person");
      }
      return ctx.render({ gente: response.data.results });
    },
  };
  
  
const Page = (props: PageProps<Data>) => {
    const {gente} = props.data;
    return ( <div>
        <h1>Personajes de star wars:</h1>
        <ul>{gente.map((e) => {
            return <li key={e.name}>
              <h2>Nombre: {e.name}</h2> 
              Altura: {e.height}<br></br>
              Peso: {e.mass}<br></br>
              Género: {e.gender}<br></br>
              Fecha de nacimiento: {e.birth_year}<br></br>
              </li>;
          })}
        </ul>
    </div>)

}
export default Page;
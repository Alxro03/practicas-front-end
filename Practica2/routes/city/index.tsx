import { FreshContext, Handlers } from "$fresh/server.ts";
import axios from "npm:axios";

type CityData ={
  name: string;
  latitude: string;
  longitude: string;
  country: string;
  population: string;
  is_capital: boolean;
}

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const name = url.searchParams.get("name");
    

    if (name) {
      const response = await axios.get<CityData[]>(`https://api.api-ninjas.com/v1/city?name=${name}`, {
      headers: {
        'X-Api-Key': 'llI0XGrOHNhSNVpKqelpNw==fagNsRiSANP8DGMo'
      }
    });
    return ctx.render(response.data);
    }
    return ctx.render();
    
  },
};

const Page = (props: PageProps<CityData[]>) => {
  const data = props.data;

  if (!data || data.length === 0) {
    return (
      <div>
        <div className="contenedor">
        <form method="get">
          Introduce una ciudad: <input type="text" className="textbox" name="name" />
          <button type="submit" className="boton">Buscar por ciudad</button>
        </form>
        </div>
        <div className="contenedor">
        <a href="/"><strong>Volver al formulario de búsqueda</strong></a>
        </div>
      </div>
    );
  }

  return (
    <div>
      
      <form method="get" className="contenedor">
        Introduce una ciudad: <input type="text" className="textbox" name="name" />
        <button type="submit" className="boton">Buscar por ciudad</button>
      </form>
      <>
      {data.map((city) => (
        <div className="elementContainer">
          <h1>{city.name}</h1>
          <p>
            Country: {city.country}
          </p>
          <p>Population: {city.population}</p>
          <p>Latitude: {city.latitude}</p>
          <p>Longitude: {city.longitude}</p>
          <p>Capital: {city.is_capital ? "Yes" : "No"}</p>
          <hr />
          <br />
        </div>
      ))}
      </>
      <div className="contenedor">
        <a href="/"><strong>Volver al formulario de búsqueda</strong><br></br></a>
      </div>
    </div>
  );
};

export default Page;
import { FreshContext, Handlers } from "$fresh/server.ts";
import axios from "npm:axios";

type DogData ={
  name: string;
  image_link: string;
  max_height_male: string;
  max_height_female: string;
  max_weight_male: string;
  max_weight_female: string;
  good_with_strangers: string;
  good_with_children: string;
  good_with_other_dogs: string;
}

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const name = url.searchParams.get("name");
    

    if (name) {
      const response = await axios.get<CityData[]>(`https://api.api-ninjas.com/v1/dogs?name=${name}`, {
      headers: {
        'X-Api-Key': 'llI0XGrOHNhSNVpKqelpNw==fagNsRiSANP8DGMo'
      }
    });
    return ctx.render(response.data[0]);
    }
    return ctx.render();
    
  },
};

const Page = (props: PageProps<DogData[]>) => {
  const data = props.data;

  if (!data || data.length === 0) {
    return (
      <div>
        <div className="contenedor">
        <form method="get">
          Introduce una raza: <input type="text" class="textbox2" name="name" />
          <button type="submit" className="boton2">Buscar por Raza</button>
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
        Introduce una raza: <input type="text" className= "textbox2" name="name" />
        <button type="submit" className="boton2">Buscar por raza</button>
      </form>
      <>
        <div className="dogContainer">
            <img src={data.image_link} alt="Foto del perro" width="300" className="round_img"></img>
          <ul>
            <li>Nombre: {data.name}</li>
            <li>Altura mámixa macho: {data.max_height_male}</li>
            <li>Altura máxima hembra: {data.max_height_female}</li>
            <li>Peso máximo macho: {data.max_weight_male}</li>
            <li>Peso máximo hembra: {data.max_weight_female}</li>
            <li>Score strangers: {data.good_with_strangers}</li>
            <li>Good children: {data.good_with_children}</li>
            <li>Good other dogs: {data.good_with_other_dogs}</li>
          </ul>
          <hr />
          <br />
        </div>
      </>
      <div className="contenedor">
        <a href="/"><strong>Volver al formulario de búsqueda</strong><br></br></a>
      </div>
    </div>
  );
};

export default Page;
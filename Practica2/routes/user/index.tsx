
import axios from "npm:axios";
import User from "../../components/User.tsx";

type User = {
  id: string;
  name: string;
  email: string;
  sex: string;
  address: string;
};

export default async function Home() {
  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/randomuser', {
      headers: {
        'X-Api-Key': 'llI0XGrOHNhSNVpKqelpNw==fagNsRiSANP8DGMo'
      }
    });

    const userData = response.data;

    return (
      <div className="flex-column">
        <div className="contedenor">
          <h1 className="mainTitle">User:</h1>
        </div>
        <div className="user-info">
          <User
            key={userData.username}
            name={userData.name}
            email={userData.email}
            sex={userData.sex}
            address={userData.address}
          />
        </div>
        <div className="contenedor">
        <a href="/user"><strong>volver a cargar un nuevo usuario</strong></a>
        </div>
        <div className="contenedor">
        <a href="/"><strong>Volver al formulario de búsqueda</strong><br></br></a>
        </div>
      </div>

    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
}
import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

export const Funct: FunctionComponent<Functprops> = ({ data }) => {
    const [selectedJobIndex, setSelectedJobIndex] = useState<number | null>(0);
  
    const handleClick = (index: number) => {
      setSelectedJobIndex(index);
    };
  
    return (
      <div className="maincontainer">
        <div className="container1">
          <div className="header1">
            <h1>Lista de trabajos:</h1>
            <p>{data.length} trabajos encontrados</p>
          </div>
          <div className="container1">
            {data.map((job, index) => (
              <div key={index} className="jobcell" onClick={() => handleClick(index)}>
                <div className="imagecontainer">
                  <img src="logo.webp" alt="LinkedIn Logo" height="100" width="100" />
                </div>
                <h2 className="header2">{job.title}</h2>
                <p>Empresa: {job.company_name}</p>
                <p>Ubicacion: {job.location}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container2">
          <h3>Acerca del empleo:</h3>
          <br />
          <div class="buttoncontainer">
            <a href={data[selectedJobIndex].url}>
              <button className="linkbutton">Solicitar más información</button>
            </a>
          </div>
          {selectedJobIndex !== null && (
            <div className="container2content" style={{ marginBottom: '10px' }} dangerouslySetInnerHTML={{ __html: data[selectedJobIndex].description }} />
          )}
        </div>
      </div>
    );
  };
  
  export default Funct;
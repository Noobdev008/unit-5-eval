import { useState } from "react";
import "./Recepes.css"

export const Receipes = () => {
  const [list, setList] = useState([]);
  const [srng,setSrng] = useState({});
  const [status,setStatus] = useState(false);

  fetch(`http://localhost:5000/data`)
    .then((res) => res.json())
    .then((data) => setList(data));

  function details(el)
  {
    setStatus(true);
    setSrng(el);
  }

  return (
    <>
    <div className="all_recs">
      <h3> Receipes </h3>
      {list.map((el) => {
        return (
          <>
          <div className="rec_div" onClick={() => details(el)}>
          <div >
            <img src={el.image} alt="None" />
          </div>
          <div>
            <p>{el.title} </p>
          </div>
          <br />
          </div>
          </>
        );
      })}
    </div>

    
      
    <div className="details">
        <div>
            <img src={srng.image} />
        </div>
        <div className="details2">
          <h3>{srng.title}</h3>
          <h3>{srng.time}</h3>
          <p>{srng.ingedients}</p>
          <h4>{srng.instructions}</h4>
        </div>
    </div>
    </>
  );
};
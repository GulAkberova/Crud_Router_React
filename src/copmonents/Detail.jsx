import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  let { id } = useParams();
 let navigate=useNavigate()
  const [detail, setDetail] = useState({});

  useEffect(() => {
    console.log(id);
  }, [id]);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
        console.log(detail);
      });
  }, [id]);
  return (
    <>
  <section className="detail_div">
  <h1>ID:{detail.id}</h1>
      <h1>Name:<span>{detail.name}</span></h1>
      <h1>QuantityPerUnit:<span>{detail.quantityPerUnit}</span></h1>
      <h1>UnitPrice:<span>{detail.unitPrice}</span></h1>
      <button onClick={()=>navigate(-1)}>Go to back</button>
      
  </section>
    </>
  );
}

export default Detail;

import React, { useEffect, useState } from 'react';

function Flasktester() {
    const [id, setId] = useState("")
    const [medicaldata,setMedicalData]=useState("")
    const [data,setData]=useState("")
    const [data1,setData1]=useState("")

    useEffect(() => {
    try {
        fetch("/about", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: "Hello",
            }),
          },
          )
            .then(response => response.json())
            .then(response => {
              const { name,medicalHistory,data } = response;
              setId(data)
              setMedicalData(medicalHistory)
              console.log(name,medicalHistory);
            });
          
  
    } catch (error) {
        
    }
              }, []);
    useEffect(()=>{
try {
    const { age, sex, cp, rbp, sc, fbs, rer, mhr, eia, olds, st, mvs, thal } = medicaldata;

    fetch("http://localhost:8000/prediction",{
              method:"POST",
              headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                          id:id,
                          age:age,
                          sex:sex,
                          cp:cp,
                          rbp:rbp,
                          sc:sc,
                          fbs:fbs,
                          rer:rer,
                          mhr:mhr,
                          eia:eia,
                          olds:olds,
                          st:st,
                          mvs:mvs,
                          thal:thal
                }),
          }).then(response=>response.json())
          .then(response=>{
              const data=response;
              setData(data)
          })
          fetch("http://localhost:8000/report",{
              method:"POST",
              headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  id:id,
                          age:age,
                          sex:sex,
                          cp:cp,
                          rbp:rbp,
                          sc:sc,
                          fbs:fbs,
                          rer:rer,
                          mhr:mhr,
                          eia:eia,
                          olds:olds,
                          st:st,
                          mvs:mvs,
                          thal:thal
                }),
          }).then(response=>response.json())
          .then(response=>{
              const data=response;
              setData1(data)
          })
} catch (error) {
    
}
    },[])
   

    return (
        <button >flasktester</button>
    );
}

export default Flasktester;

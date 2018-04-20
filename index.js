const fetch = require("node-fetch")
//INSERT URL!
const apiUrl = "http://192.168.1.231:8080"

const accreditamento = () => 
    fetch(`${apiUrl}/accreditamento`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        //INSERT NAME
        nome: "Elisa Caruso" 
      })
    })
    .then(res => {
      if (res.ok) {
        //BRAVOH
        console.log("SUCCESS")
        return
      }
      throw new Error(res.statusText)
    }).catch(console.log)

const es1 = () => 
    fetch(`${apiUrl}/esercizi/1`, {
      method: "GET",
      //CONTROLLA BENE
      headers: {
        "x-data": true
      }
    })
    .then(res => res.json())
    .then(({ message, data }) => {
      console.log(message);
      console.log(data);

      //FAI L'SERCIZIO
      let result = 0;
      for (let i=0; i<data.length; i++){
        result+=data[i];
      }
      //FINE ESERCIZIO

      fetch(`${apiUrl}/esercizi/1`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: result
        })
      })
      .then(res => {
          if (res.ok) {
            console.log("SUCCESSO. GIUSTO!");
            return
          }
          throw new Error(res.statusText)
      })
      .catch(console.log) 
    })

const es2 = () => 
    fetch(`${apiUrl}/esercizi/2`, {
      method: "GET",
      //CONTROLLA BENE
      headers: {
        "x-data": true
      }
    })
    .then(res => res.json())
    .then(({ message, data }) => {
      console.log(message);
      console.log(data);

      //FAI L'SERCIZIO
      let result = [];
      let min = data[0];
      for (let i=0; i<data.length; i++){
        if (data[i]<min) min=data[i]
      }
      for (let i=0; i<data.length; i++){
        result[i] = data[i]*min;
      }

      //FINE ESERCIZIO

      fetch(`${apiUrl}/esercizi/2`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: result
        })
      })
      .then(res => {
          if (res.ok) {
            console.log("SUCCESSO. GIUSTO!");
            return
          }
          throw new Error(res.statusText)
      })
      .catch(console.log) 
    })




accreditamento()
//es1()
//es2()
//es3()
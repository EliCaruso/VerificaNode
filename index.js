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
      headers: {
        "x-data": true
      }
    })
    .then(res => res.json())
    .then(({ message, data }) => {
      console.log(message)
      console.log(data)
      const result = data.reduce((accumulator, current) => accumulator + current, 0)
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
              console.log("SUCCESS")
              return
            }
            throw new Error(res.statusText)
        })
        .catch(console.log) 
    })

const es2 = () => 
    fetch(`${apiUrl}/esercizi/2`, {
      headers: {
        "x-data": true
      }
    })
    .then(res => res.json())
    .then(({ message, data }) => {
      console.log(message)
      console.log(data)
      const min = data.reduce((accumulator, current) => current < accumulator ? current : accumulator, data[0])
      const result = data.map(value => value * min)
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
              console.log("SUCCESS")
              return res.json()
            }
            return res.json()
            throw new Error(res.statusText)
        })
        .then(console.log)
        .catch(console.log) 
    })

const es3 = () => 
    fetch(`${apiUrl}/esercizi/3`, {
      headers: {
        "x-data": true
      }
    })
    .then(res => res.json())
    .then(({ message, data }) => {
      console.log(message)
      console.log(data)
      const result = data.filter(value => value <= 3)
      fetch(`${apiUrl}/esercizi/3`, {
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
              console.log("SUCCESS")
              return res.json()
            }
            return res.json()
            throw new Error(res.statusText)
        })
        .then(console.log)
        .catch(console.log) 
    })

//accreditamento()
es1()
es2()
es3()
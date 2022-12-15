const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000
obj = {
			version_top: 26,
			students: 10,
			names: [
				"Felipe", 
				"Laura", 
				"Jailer", 
				"Jaime", 
				"Juan", 
				"Andrés",
				"Nicolas",
				"Carlos",
				"Ivan",
				"Diana"
            ]
}


app.get('/', (req, res) => {
    //res.send(obj);
    res.status(200).json({message: "Curso encontrado satisfactoriamente", top: obj})
})

app.listen(port, () => {
  console.log(obj);
  
  
})
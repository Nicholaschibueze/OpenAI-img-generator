 const path = require ('path');
 const express = require ('express');
 const dotenv = require ('dotenv').config();
 const port = process.env.PORT || 5000;

 const app = express ();

 //  Enable body passer 

 app.use(express.json ());
 app.use(express.urlencoded({extended: false})); 

 //  SET STATIC FOLDER 

 app.use(express.static(path.join (__dirname, 'public')));


 app.use('/openai', require ('./openaiRoutes'));

 app.listen(port, () => console.log(`Server started on port $ {PORT}`));

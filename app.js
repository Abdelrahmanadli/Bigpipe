// Server-side code (Node.js)
const http = require("http");

http
  .createServer((req, res) => {
    // Send initial part of the page
    res.write("<html><body>");
    res.write('<div id="content">');

    // Simulate delay for loading pagelets

    setTimeout(() => {
      res.write(
        `
        <head>
    <title>Abdelrahman Adli</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fbf3f2;
        }
        .header {
            background-color: #b700ff;
            color: rgb(255, 255, 255);
            padding: 10px;
            text-align: center;
        }               
    </style>
</head>
<body>
    <div class="header">
        <h1>BigPipe </h1>
    </div>           
</body>
        `
      );
    }, 1000);

    setTimeout(() => {
      res.write(`
      <div class="main">
    <!--post 1-->
    <h2 style="font-size: 100;">Why did the Soviet union fall</h2>
    <p style="font-size:25;">The Soviet Union collapsed due to a combination of economic inefficiency, political reforms that backfired, rising nationalism in Soviet republics, overspending on the military, geopolitical changes with the end of the Cold War, and a failed coup attempt in 1991. These factors led to the dissolution of the Soviet Union, with Gorbachev's resignation in December 1991 marking its official end.
    </p> 
  </div>

      <style>
        .main {
         margin-top:-15px;
         height:70%;
         background-color: white;
         color: #333;
         text-align: center;
         padding-top:150px;
           }
      </style>
      `);
    }, 3000);

    setTimeout(() => {
      res.write(`
      <div class="main">
    <!--post 2-->
    <h2 style="font-size: 100;">Just an image of a cat </h2>
    <p style="font-size:50;">Image of a cat</p>
    <img  src="images/cat.jpg" alt="cat" width="1080" height="720" >
  </div>

      <style>
        .main {
         margin-top:-15px;
         height:70%;
         background-color: white;
         color: #333;
         text-align: center;
         padding-top:150px;
           }
      </style>
      `);
    }, 4000);


    setTimeout(() => {
      res.write(`
      <div class="main">
      <!--post 3-->
      <h2 style="font-size: 100;">facebook logo</h2>
      <p style="font-size:50;">Logo of facebook</p>
      <img  src="images/Fb.png" alt="facebook" width="1080" height="720" >
    </div>

      <style>
        .main {
         margin-top:-15px;
         height:70%;
         background-color: white;
         color: #333;
         text-align: center;
         padding-top:150px;
           }
      </style>
      `);
    }, 5000);

    setTimeout(() => {
      res.write(`
      <div class="main">
    <!--post 3-->
    <h2 style="font-size: 100;">facebook logo</h2>
    <p style="font-size:50;">Logo of facebook</p>
    <img  src="images/R.png" alt="facebook" width="1080" height="720" >
  </div>

      <style>
        .main {
         margin-top:-15px;
         height:70%;
         background-color: white;
         color: #333;
         text-align: center;
         padding-top:150px;
           }
      </style>
      `);
    }, 6001);

    setTimeout(() => {
      res.write(`<div class="footer">
      Credits Abdelrahman Adli
  </div>
      <style>
       .footer {
         background-color: #333;
         color: white;
         text-align: center;
         padding: 10px;
         position: fixed;
         bottom: 0;
         width: 100%;
    }
      </style>
  `);
    }, 2000);
  })
    .listen(8080);

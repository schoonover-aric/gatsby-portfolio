/* Pre-populate html, css, js */
document.querySelector("#html > div.react-codemirror2.code-mirror-wrapper > div").CodeMirror.setValue(`
<div id="container">
<p id="hiddenP" onClick="glow();">Click Me</p>
<p id="yoo">
  <span href="#" onClick="return false;">Great Job!</span><br/>
  <button id="backBtn" onClick="goBack();">Go Back</button>
</p>
</div>
`);
document.querySelector("#css > div.react-codemirror2.code-mirror-wrapper > div").CodeMirror.setValue(`
body {
  background-color: #222222;
  background: repeating-linear-gradient(
      45deg,
      #2b2b2b 0%,
      #2b2b2b 10%,
      #222222 0%,
      #222222 50%
    )
    0 / 15px 15px;
  }
  #yoo {
    display: none;
    padding: 1rem;
    margin: 5rem auto;
  }
  #hiddenP {
    width: fit-content;
    padding: 1rem;
    color: #e6e6e6;
    margin: 5rem auto;
    border: 2px solid;
  }
  #hiddenP:hover {
    color: #0000ee;
    cursor: pointer;
  }
  /*Neon*/
  p {
    text-align: center;
    font-size: 5rem;
    margin: 20px 0 20px 0;
  }
  a {
    text-decoration: none;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
  }
  span {
    text-decoration: none;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
  }
  p:nth-child(2) span {
    font-size: 5rem;
    color: #0000ee;
    font-family: Iceland;
  }
  p:nth-child(2) span:hover {
    -webkit-animation: neon2 1.5s ease-in-out infinite alternate;
    -moz-animation: neon2 1.5s ease-in-out infinite alternate;
    animation: neon2 1.5s ease-in-out infinite alternate;
  }
  p a:hover {
    color: #ffffff;
  }
  p span:hover {
    color: #ffffff;
  }
  /*glow for webkit*/
  @-webkit-keyframes neon2 {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff,
        0 0 70px #228dff, 0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff,
        0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff;
    }
  }
  /*glow for mozilla*/
  @-moz-keyframes neon2 {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff,
        0 0 70px #228dff, 0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff,
        0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff;
    }
  }
  /*glow*/
  @keyframes neon2 {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff,
        0 0 70px #228dff, 0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff,
        0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff;
    }
  }
  /*MOBILE*/
  @media (max-width: 650px) {
    #container {
      width: 100%;
    }
    p {
      font-size: 3rem;
    }
  }
`);
document.querySelector("#js > div.react-codemirror2.code-mirror-wrapper > div").CodeMirror.setValue(`
function glow() {
    document.getElementById("hiddenP").style="display: none;";
    document.getElementById("yoo").style="display: block;";
  }
  
  function goBack() {
    document.getElementById("hiddenP").style="display: block;";
    document.getElementById("yoo").style="display: none;";
  }
`);
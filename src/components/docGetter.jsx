import React, { useEffect } from "react";
import axios from "axios";

import "./docGetter.css";
function DocGetter(props) {
  var sub, mod;
  useEffect(() => {
    sub = props.subject;
    mod = props.module;
    getDocs();
  });
  function getDocs() {
    console.log(mod);
    console.log(sub);
    document.getElementById("doclinks").innerHTML = "";
    axios
      .get("https://sheet.best/api/sheets/79c1bd6f-f522-42b2-99fe-2b7adc66c3a4")
      .then((res) => {
        const length = res.data.length;
        var r=1
        for (var i = 0; i < length; i++) {
          const details = res.data[i];

          if (details.subject == sub && details.module == mod) {
            const x = document.createElement("a");
            x.style.textDecoration = "none";
            x.style.color = "white";
            var lin = details.file;
            x.setAttribute("href", lin);
            x.setAttribute("class", "link");
            x.innerHTML = "NOTE " + (r++) + " : " + mod + " OF " + sub;
            document.getElementById("doclinks").appendChild(x);
          }
        }
        document.getElementById("doclinks").scrollIntoView({behavior:'smooth'});
      });
  }
  return (
    <div className="linkContainer">
      <div className="header">
        <div className="texts">
          <h3>NOTES</h3>
        </div>
        <div onClick={props.closer} className="close-btn">
          <img src="/close.svg" alt="" />
        </div>
      </div>
      <div id="doclinks" className="linkbox"></div>
    </div>
  );
}
export default DocGetter;
{
  /* <button className='sems'  onClick={getDocs}>get notes</button><br></br><br></br> */
}

import React, { useEffect } from 'react';
import axios from 'axios';
function DocGetter(props)
{
  var dep,sub,mod,sem;
  useEffect(()=>
  {
     sub=props.subject;
     mod=props.module;
  });
   function getDocs()
  {
    console.log(mod);
    console.log(sub);
    document.getElementById('doclinks').innerHTML='';
     axios.get('https://sheet.best/api/sheets/79c1bd6f-f522-42b2-99fe-2b7adc66c3a4').then(res=>{
    const length=res.data.length;
    for(var i=0;i<length;i++)
    {
      const details=res.data[i];
      if(details.subject==sub&&details.module==mod)
      {
        const x=document.createElement('a');
        x.style.textDecoration='none';
        x.style.color='white';
        var lin=details.file; 
        x.setAttribute('href',lin);
        x.innerHTML=lin;
        document.getElementById('doclinks').appendChild(x);  
      }
    }
  }); 
  }
    return(
    <div className='linkContainer'>
     <button className='sems'  onClick={getDocs}>get notes</button><br></br><br></br>
      <div id='doclinks'></div>
    </div>
   )
}
export default DocGetter;
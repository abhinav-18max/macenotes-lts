import React, { useEffect } from 'react';
import axios from 'axios';
function DocGetter(props)
{
  var dep,sub,mod,sem;
  useEffect(()=>
  {
     dep=props.department;
     sub=props.subject;
     mod=props.module;
     sem=props.semester;
  });
  async function getDocs()
  {
    console.log(sem);
    console.log(dep);
    console.log(mod);
    console.log(sub);
    await axios.get('https://sheet.best/api/sheets/79c1bd6f-f522-42b2-99fe-2b7adc66c3a4').then(res=>{
    const length=res.data.length;
    document.getElementById('doclinks').innerHTML='';
    for(var i=0;i<length;i++)
    {
      const details=res.data[i];
      if(details.department==dep && details.semester==sem &&details.module==mod)
      {
        const x=document.createElement('a');
        x.style.textDecoration='none';
        x.style.color='white';
        var lin;
        if(sem=='semester 3')
        {
              if(details.sem3subjects==sub)
              {
                  lin=details.file;
                 
              x.setAttribute('href',lin);
              x.innerHTML=lin;
             
              document.getElementById('doclinks').appendChild(x);
              }
        }
        else
        {
          if(details.sem4subjects==sub)
          {
            lin=details.file;
            x.setAttribute('href',lin);
            x.innerHTML=lin
            document.getElementById('doclinks').appendChild(x);
          }
                 
        }            
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
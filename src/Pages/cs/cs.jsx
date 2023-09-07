import React from 'react';
import Pagemodal from '../page_modal/pageModal';
import data from '../data/cs.json';
function CS()
{
    return(<><Pagemodal 
    sem3={ data.sem3} sem4={data.sem4} sem5={data.sem5}  sem6={data.sem6} sem7={data.sem7} sem8={data.sem8}
        heading='Computer Science'/></>);
}
export default CS;
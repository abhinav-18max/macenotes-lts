import React from 'react';
import Pagemodal from '../page_modal/pageModal';
import data from '../data/sems.json';
function CS()
{
    const sem='semester 3';
    return(<><Pagemodal 
    sem={data['cs'][sem]} 
        heading='Subjects' /></>);
}
export default CS;
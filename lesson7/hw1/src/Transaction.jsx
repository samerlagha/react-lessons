import React from 'react';
import moment from 'moment';

const Transaction =({from,to,amount,rate,time})=>{
     
    const fulltime = new Date(time);
    
    const dateMonth = moment(fulltime).format('DD MMM');

    const localTime=moment(fulltime).format('hh:mm');

    return(

        
  <li className="transaction">
    <span className="transaction__date">{dateMonth}</span>
    <span className="transaction__time">{localTime}</span>
    <span className="transaction__assets">{from} → {to}</span>
    <span className="transaction__rate">{new Intl.NumberFormat('en-GB').format(rate)}</span>
    <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
  </li>
    );
};

export default Transaction;
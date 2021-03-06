import React from 'react';


const Pagination =props=>{
  const currentPage =props.currentPage +1;

    return(
        <div className="pagination">
     {props.currentPage*3===0 ?
       <button className="btn" onClick={props.goPrev} disabled="disabled"></button> :
       <button className="btn" onClick={props.goPrev}>←</button>}
    }
    
       <span className="pagination__page">{currentPage}</span>

        {currentPage * 3 >= props.totalItems ?
                <button className="btn" onClick={props.goNext} disabled="disabled"></button> :
                <button className="btn" onClick={props.goNext}>→</button>} 
      </div>
    );
};

export default Pagination;
import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';


 export default class Numbers extends PureComponent {
    // shouldComponentUpdate(nextProps) {
    //     if (this.props.number === nextProps.number && this.props.title === nextProps.title) {
    //         return false;
    //     }
    //     return true;
    // }

    render() {
        return (
            <div className="number">
                <span className="number__title">{this.props.title}</span>
                <span className="number__value">{this.props.number}</span>
            </div>
        );
    }
}

Numbers.propTypes={
    title: Proptypes.string,
    number: Proptypes.number.isRequired,
}

Numbers.defaultProps={
    title: 'Some number',
  
}
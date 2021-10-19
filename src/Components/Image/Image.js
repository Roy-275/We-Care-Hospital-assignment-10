import React from 'react';

const Image = (props) => {

    return (
        <div className="sm:m-2 shadow-lg">
            <img className="sm:h-32 md:h-96" src={props.url} alt="" />
            <p className="text-sm text-xl">{props.caption}</p>
        </div>
    );
};

export default Image;
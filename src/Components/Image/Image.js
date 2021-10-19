import React from 'react';

const Image = (props) => {

    return (
        <div className="sm:m-2 shadow-lg flex flex-col items-center">
            <img className="sm:h-32 md:h-96" src={props.url} alt="" />
            <p className="text-sm md:text-xl sm:text-base">{props.caption}</p>
        </div>
    );
};

export default Image;
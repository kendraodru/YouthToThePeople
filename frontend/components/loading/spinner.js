import React from 'react';

const Loading = () => {
    return (
        <div>
            {/* <div className='hamburger'></div> */}
            <div className='loading-screen'>
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    );
};

export default Loading;
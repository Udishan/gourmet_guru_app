import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loader = () => {

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "green",
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <ClipLoader
                        color={'#ffffff'}
                        loading={true}
                        cssOverride={override}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
                <div>
                    <p className='text-green-600 text-3xl font-bold '>Loading...</p>
                </div>
            </div>
        </>
    )
}

export default Loader
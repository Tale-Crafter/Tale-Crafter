import React from 'react'
import Bnavbar from '../components/bnavbar';
import BusinessHeader from '../components/BusinessHeader';
import Bemail from '../components/Bemail';
function Verifier() {
    return (
        <div>
            <div style={{ display: 'flex' ,background:"white"}}>
                <div>
                    <BusinessHeader />
                    <Bnavbar />
                </div>
                <Bemail />
            </div>
        </div>

    );
};
export default Verifier
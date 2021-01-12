import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../modules';


type Props = {
    store :string | string[] | null;
    table:string | string[] | null;
    n:number
}
const BucketButton = ({store,table,n}:Props) => {

    return (
        <div>
            <Link to={`/bucket/?store=${store}&table=${table}`}>
                <button>

                    <div>장바구니</div>
                    <div>{n}</div>
                </button>
            </Link>
            

        </div>
    );

}

export default BucketButton;
import React from 'react';
import Load from '../Common/Load/Load';


export const WithSuspense = (Component) => {

    return (props) => {
    return <React.Suspense fallback={<Load />}>
        <Component {...props} />
    </React.Suspense>
}
}







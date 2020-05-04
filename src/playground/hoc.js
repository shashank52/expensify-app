import React from 'react';
import ReactDOM from 'react-dom';

const Info  = (props) =>(
    <div>
        <h1> Info </h1>
        <p>This info is : {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) =>{
    return (props) =>(
        <div>
            <p>This is private info. Please don't share!</p>
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) =>{
    return (props) =>(
        <div>
            {
                props.isAuthenticated === true ? <WrappedComponent {...props} /> : <p >Please authenticate yourself</p>
            }
        </div>
    )
}

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
const appRoot = document.querySelector('#app');
ReactDOM.render(<AuthInfo isAuthenticated = {true} info = "This is the details"/>,appRoot);
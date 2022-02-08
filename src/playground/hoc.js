import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
   <div>
     <h1>Info</h1>
     <p>The info is: {props.info}</p>
   </div>
);

const withAdminWarning = (WrappedComponent) => {
   
    return (props) => (
    <div>
       { props.isAdmin && <p>These information are private. Kindly, don't share it with anyone</p>}
       <WrappedComponent {...props}/>
     </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
     
    return (props) => (
        <div>
         {props.isAdmin ? <WrappedComponent {...props}/> : <p>Kindly, login to continue</p>}
        </div>
     
    );

};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="I am going to USA soon" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAdmin={false} info="I am going to USA soon" />, document.getElementById('app'));
import React from 'react';

function ProfileCard({
    user
}) {
 
  

  return (
    <div className={`profile`} key={user.id}>
      <figure>
        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg" alt="" />
      </figure>
      <header>
        <h1>{user.name}
          <small>{user.username}</small>
        </h1>
      </header>

    
      <main  id={`${user.id}`} style={{ display:'block' }}>
        <dl>
          <dt>Full name</dt>
          <dd>{user.name} </dd>
          <dt>email</dt>
          <dd>{user.email}</dd>
          <dt>address</dt>
          <dd>{user.address.suite},{user.address.street},{user.address.city},{user.address.zipcode}</dd>
          <dt>Phone</dt>
          <dd>{user.phone}</dd>
          <dt>Company </dt>
          <dd>{user.company.name}</dd>
        </dl>
      </main>
    </div>
  );
}

export default ProfileCard;

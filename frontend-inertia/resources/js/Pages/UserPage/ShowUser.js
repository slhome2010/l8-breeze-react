import React,{useState, useEffect} from 'react';
import {usePage} from '@inertiajs/inertia-react';
import {InertiaLink} from '@inertiajs/inertia-react';
import Layout from '../../layouts/Layout';

function ShowUser() {
  const [user, setUser] = useState();
  
  const data = usePage().props;

  useEffect(() => {
    if (!data.user) {
      return;
    }

    setUser(data.user);
  },[]);

  return (
    <div>
      <Layout>
          <div className="header">
              <h1 className="header-text">Users</h1>
              <h6>Form user</h6>
          </div>
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
              <div className="p-6 bg-white border-b border-gray-200">
                <InertiaLink href="/users" className="text-blue-200 hover:text-blue-600">Back</InertiaLink>

                Hai
              </div>
          </div>
      </Layout>
    </div>
  )
}

export default ShowUser

import React,{useState, useEffect} from 'react';
import {usePage} from '@inertiajs/inertia-react';
import {InertiaLink} from '@inertiajs/inertia-react';
import {Inertia} from '@inertiajs/inertia'

import Layout from '../../layouts/Layout';

function UserPage() {
  const [users, setUsers] = useState();
  
  const data = usePage().props;

  useEffect(() => {
    setUsers(data.users);
  },[]);

  return (
    <div>
      <Layout>
          <div className="header">
              <h1 className="header-text">Users</h1>
              <h6>List of users</h6>
          </div>
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
              <div className="p-6 bg-white border-b border-gray-200">
                <div className="block m-6">
                  <InertiaLink href="/users/create" className="p-4 border bg-blue-100 text-blue-600 hover:text-blue-200">Add New</InertiaLink>
                </div>
                
                <hr/><br/>

                <table className="table-auto border">
                  <thead>
                    <tr>
                      <th className="border p-4">#</th>
                      <th className="border p-4">Name</th>
                      <th className="border p-4">Email</th>
                      <th className="border p-4">Photo</th>
                      <th className="border p-4 w-1/4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users && users.map((user, index) => (
                      <tr key={index}>
                        <td className="border p-4">{index + 1}</td>
                        <td className="border p-4">{user.name}</td>
                        <td className="border p-4">{user.email}</td>
                        <td className="border p-4"></td>
                        <td className="border p-4">
                          <InertiaLink href={`/users/${user.id}/show`} className="p-4 mr-2 border bg-blue-100 text-blue-600 hover:text-blue-200">Detail</InertiaLink>
                          
                          <InertiaLink href={`/users/${user.id}/edit`} className="p-4 mr-2 border bg-blue-100 text-blue-600 hover:text-blue-200">Edit</InertiaLink>
                          
                          <button className="block text-red">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>
          </div>
      </Layout>
    </div>
  )
}

export default UserPage

import React,{useState, useEffect, useRef} from 'react';
import {usePage} from '@inertiajs/inertia-react';
import {InertiaLink} from '@inertiajs/inertia-react';
import Layout from '../../layouts/Layout';

function FormUser() {
  const [nameForm, setNameForm] = useState();
  const [emailForm, setEmailForm] = useState();
  const initialName = useRef();
  const initialEmail = useRef();
  
  const data = usePage().props;

  function handleSubmit(e) {
    e.preventDefault()
    Inertia.post(`user/`, {
        _method: 'put',
        name: nameForm,
        email: emailForm
    })
  }

  useEffect(() => {
    initialName.current.value = data.user.name;
    setNameForm(data.user.name);

    initialEmail.current.value = data.user.email;
    setEmailForm(data.user.email);
  }, [])

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

                <form>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      name="name"
                      type="text"
                      className="block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      ref={initialName}
                      onChange={(e) => setNameForm(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      name="email"
                      type="text"
                      className="block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      ref={initialEmail}
                      onChange={(e) => setEmailForm(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center justify-end px-4 py-3 text-right border-t shadow bg-gray-50 sm:px-6 sm:rounded-bl-md sm:rounded-br-md">
                      <button type="submit"
                        onClick={handleSubmit}
                        className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 border border-transparent rounded-md hover:bg-gray-700">
                        save
                      </button>
                  </div>
                </form>
              </div>
          </div>
      </Layout>
    </div>
  )
}

export default FormUser

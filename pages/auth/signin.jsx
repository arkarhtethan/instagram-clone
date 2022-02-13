import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header'

const Signin = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-xs italic">
          This is not a real app, it is built for educational purpose only.
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default Signin

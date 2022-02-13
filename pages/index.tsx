import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

export default function Home () {

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Kmgram | Home</title>
        <meta name="description" content="Instagram clone build for educational purpuose" />
        <meta name="keywords" content="Instagram React clone" />
        <meta name="author" content="Kaung Myat Han" />
      </Head>
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
      {/* Modal */}
      <Modal />

    </div>
  )
}

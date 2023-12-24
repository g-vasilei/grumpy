import Image from 'next/image'
import Hero from '../components/Hero'
import Collection from '../components/Collection'
import QuotesForm from '../components/QuotesForm'

export default function Home() {
   return (
      <>
         <Hero />
         <Collection />
         <QuotesForm />
      </>
   )
}

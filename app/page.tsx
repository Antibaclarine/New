import Image from 'next/image'
import Body from './components/body'
import Navigationbar from './components/navbar'
import Footer from './components/footer'
// import Menu from './components/food-all'
import Manual from './components/Body/all-body'
import Allmenu from './components/food-all'
import All from './components/last'

export default function Home() {
  return (
    <>
    <Navigationbar/>
    <Body/>
    <Allmenu/>
    <Manual/>
    <All/>
    <Footer/>
    
    </>
    
  )
}

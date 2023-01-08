import Hero from '../assets/images/hero.png'
import '../assets/styles/Home.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
        <Helmet>
          <title>Vigro | Homepage</title>
           <meta name="description" content="Home" />
          <link rel="canonical" href="/" />
       </Helmet>
        <div className="contain">
            <div className="words">
                <h1 className='not'>
                    Explore A Virtual World Full of Oppurtunities
                </h1>
                <p>
                    Get ready for a journey into the most beautiful virtual words
                </p>
            </div>
            <div className="image">
                <img className='hero' src={Hero} alt='shouting_boy' />
            </div>
        </div>
        </>
    )
}
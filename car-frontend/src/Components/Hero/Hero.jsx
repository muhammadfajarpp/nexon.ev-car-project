import './Hero.css'
import arrow from '../../assets/arrow.png'
import pause from '../../assets/pause.png'
import playbtn from '../../assets/playbtn.jpg'

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  
  const handlePlayPause = () => {
    setPlayStatus(!playStatus); // Toggle play status
  };

  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p> Explore The Features</p>
        <img className='img' src={arrow} alt="Arrow" />
      </div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : 'hero-dot'}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : 'hero-dot'}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : 'hero-dot'}></li>
        </ul>
        <div className="hero-play">
          <img className='vdo' onClick={handlePlayPause} src={playStatus ? pause : playbtn} alt="Play/Pause Button" />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

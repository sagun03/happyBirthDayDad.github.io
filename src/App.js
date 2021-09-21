import logo from './logo.svg';
import './App.css';
import './cake.less'
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Sound from './components/Audio';
import banners from './banner.png'
import video from './video.mp4'

function App() {
  const [showLightButton, setShowLightButton] = useState(false)
  const [showPlayMusic, setShowPlayMusic] = useState(false)
  const [isLightOn, setIsLightOn] = useState(false)
  const [banner, setBanner] = useState(false);
  const [isPlayMusic, setIsPlayMusic] = useState(false)
  const [showDecorate, setShowDecorate] = useState(false)
  const [showBallons, setShowBallons] = useState(false)
  const [showCake, setShowCake] = useState(false)
  const [isCake, setIsCake] = useState(false);
  const [lightCandle, setLightCandle] = useState(false)
  const [flame, setFlame] = useState(false)
  const [hbd, setHbd] = useState(false)
  const [showHbd, setShowHbd] = useState(false)
  const [showMessage, setShowMessage] = useState(false);
  const [awaitHbd, setAwaitHbd] = useState(false);
  const [awaitCard, setAwaitCard] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLightButton(true);
    }, 4000)
  }, [])
  const ballonHandler = () => {
    function random(num) {
      return Math.floor(Math.random()*num)
    }
    
    function getRandomStyles() {
      var r = random(255);
      var g = random(255);
      var b = random(255);
      var mt = random(200);
      var ml = random(50);
      var dur = random(5)+5;
      return `
      background-color: rgba(${r},${g},${b},0.7);
      color: rgba(${r},${g},${b},0.7); 
      box-shadow: inset -7px -3px 10px rgba(${r-10},${g-10},${b-10},0.7);
      margin: ${mt}px 0 0 ${ml}px;
      animation: float ${dur+2}s ease-in infinite
      `
    }
    
    function createBalloons(num) {
      var balloonContainer = document.getElementById("balloon-container")
      console.log('balloonContainer', balloonContainer)
      for (var i = num; i > 0; i--) {
      var balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.cssText = getRandomStyles();           
      balloonContainer.append(balloon);
      }
    }
    
      createBalloons(30);
  }
  const onClickHandler = (key) => {
    switch(key) {
      case 'ligth':
        document.body.classList.add('peach');
        setIsLightOn(true)
        setTimeout(() => {
          setShowPlayMusic(true);
        }, 4000)
        setShowLightButton(false)
      break;
      case 'music':
        document.body.classList.add('peach-after');
        setIsPlayMusic(true);
        setShowPlayMusic(false);
        setTimeout(() => {
          setShowDecorate(true);
        }, 5000);
        break;
        case 'decorate':
          setShowDecorate(false)
          setBanner(true)
          setTimeout(() => {
            setShowBallons(true);
          }, 3000);
          // ballonHandler()
          break;
        case 'ballon':
          ballonHandler();
          setShowBallons(false);
          setTimeout(() => {
            setShowCake(true);
          },4000);
          break;
        case 'cake':
          setShowCake(false);
          setIsCake(true);
          setTimeout(()=>{
            setLightCandle(true);
          }, 4000)
          break;
        case 'candle':
          setLightCandle(false);
          setFlame(true);
          setTimeout(() => {
            setShowHbd(true);
          },4000)
          break;
        case 'hbd': 
          setShowHbd(false);
          setTimeout(() => {
            setIsCake(false)
            setAwaitHbd(true);
          },3000)
          setFlame(false)
          setHbd(true);
          setTimeout(() => {
            setShowMessage(true);
          },8000)
          break;
        case 'message': 
          setHbd(false);
          setTimeout(() => {
            setAwaitHbd(false)
            setPlayVideo(true);
            setIsPlayMusic(false)
          },3000)
          setTimeout(() => {
            console.log('document', document.getElementById('vid'))
            document.getElementById('vid') && document.getElementById('vid').play()
          }, 5000)
          setAwaitCard(true)
          setShowMessage(false);
          break;
      default : 
        return null;

    }
  }
  return (
    <div className="App" >
  <section class="container" >
  {/* {isPlayMusic ? <div> {setTimeout(() => <Deck />,2000)} </div>: <></> } */}
  {isLightOn ? <>
  <div className="bulb" id={isPlayMusic ? "bulb-glow-yellow-after" : "bulb-glow-yellow"} />
  <div className="bulb" id={ isPlayMusic ? "bulb-glow-blue-after" : "bulb-glow-blue"} />
  <div className="bulb" id={ isPlayMusic ? "bulb-glow-green-after" :"bulb-glow-green"} />
  <div className="bulb" id={ isPlayMusic ? "bulb-glow-pink-after" :"bulb-glow-pink"} />
  <div className="bulb" id={ isPlayMusic ? "bulb-glow-red-after" :"bulb-glow-red"}/>
  <div className="bulb" id={ isPlayMusic ? "bulb-glow-orange-after" :"bulb-glow-orange"} />
  </> : <></>}
    </section>
    {banner ? <> 	<img src={banners} alt="banner" id="bannar-come" /> </> : <></>}
 {playVideo ? <div style={{ height: '400px'}}><video style={{minWidth: '40%',
    minHeight: '40%'}} id="vid" autoPlay controls>
  <source src={video} type="video/mp4"  />
  </video></div>
  : <></>}
    {isCake ? <div class={hbd ? "cake-body-out" : "cake-body"}>
    <div class="layer f1">
        <div class="spot-group sg1">
            <div class="spot s1"></div>
            <div class="spot s2"></div>
            <div class="spot s3"></div>
        </div>
        <div class="spot-group sg2">
            <div class="spot s1"></div>
            <div class="spot s2"></div>
        </div>
    </div>
    <div class="layer f2">
        <div class="spot-group sg3">
            <div class="spot s1"></div>
            <div class="spot s2"></div>
        </div>
        <div class="spot-group sg4">
            <div class="spot s1"></div>
            <div class="spot s2"></div>
            <div class="spot s3"></div>
        </div>
    </div>
    <div class="layer f3">
        <div class="spot-group sg5">
            <div class="spot s1"></div>
            <div class="spot s2"></div>
            <div class="spot s3"></div>
        </div>
    </div>
    <div class="layer f4">
      <div class="drip-ctn">
        <div class="drip d1"></div>
        <div class="drip d2"></div>
        <div class="drip d3"></div>
        <div class="drip d4"></div>
        <div class="drip d5"></div>
        <div class="drip d6"></div>
        <div class="drip d7"></div>
        <div class="drip d8"></div>
        <div class="drip d9"></div>
      <div>
    </div>
    <div class="candle-ctn">
        <div class="candle c1">
          <div class="c-base"></div>
          <div class="wick"></div>
{flame ?   <><div class="flame"></div> 
          <div class="highlight"></div> </> : <></>}
        </div>
    </div>
</div>
</div>
</div>
    : <></>}   
    {awaitHbd ? <div id={ awaitCard ? "card-out" : "card"}><div class="birthdayCard">
    <div class="cardFront"><h3 class="happy">HAPPY BIRTHDAY!</h3><h3 class="happy">Open!</h3>
    <div class="balloons">
      <div class="balloonOne"></div>
      <div class="balloonTwo"></div>
      <div class="balloonThree"></div>
      <div class="balloonFour"></div>
    </div>
    </div>
    <div class="cardInside">
    <h3 class="back">HAPPY BIRTHDAY!</h3>
    
    <p>Dear Dad,</p>
    <p>Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.</p>
    {/* <p class="name"></p> */}
  </div>
</div> </div>: <></>}

    <div id="balloon-container"> </div>
    {showLightButton ? <div className="center" > <Button variant="contained" onClick={() => onClickHandler('ligth')}>Trun on the lights</Button> </div>: <></>}
    {showPlayMusic ? <div className="center" > <Button variant="contained" onClick={() => onClickHandler('music')}>Play Music</Button> </div>: <></>}
    {showDecorate ? <div className="center" > <Button variant="contained" onClick={() => onClickHandler('decorate')}>Let's Decorate</Button> </div>: <></>}
    {showBallons ? <div className="center" > <Button variant="contained" onClick={() => onClickHandler('ballon')}>Fly with Balloons</Button> </div>: <></>}
    {showCake ? <div className="center" > <Button variant="contained" onClick={() => onClickHandler('cake')}>Most Delicious Cake Ever</Button> </div>: <></>}
    {lightCandle ? <div className="center" > <Button variant="contained" onClick={() => onClickHandler('candle')}>Light Candle</Button> </div>: <></>}
    {showHbd ? <div className="center" > <Button variant="contained" onClick={() => onClickHandler('hbd')}>Happy Birthday Card</Button> </div>: <></>}
    {showMessage ? <div className="center" > <Button variant="contained" onClick={() => onClickHandler('message')}>Suprise</Button> </div>: <></>}
    {isPlayMusic ? <Sound /> : <></>}
    {/* {show ? <div className="center" > <Button variant="contained" onClick={() => onClickHandler()}>Trun on the lights</Button> </div>: <></>}
    {show ? <div className="center" > <Button variant="contained" onClick={() => onClickHandler()}>Trun on the lights</Button> </div>: <></>}
    {show ? <div className="center" > <Button variant="contained" onClick={() => onClickHandler()}>Trun on the lights</Button> </div>: <></>} */}
    
    </div>
  );
}

export default App;

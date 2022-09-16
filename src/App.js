import { useEffect, useState } from 'react';
import './App.css';
import { useWindowSize } from './useWindowSize';

function App() {
  const [price , setPrice] = useState('0.000001');
  const [userAmount , setUserAmount] = useState('99999');
  const [capacity , setCapacity] = useState('99999');
  const [nodesCount , setNodesCount] = useState('99999');
  const [show, setShow] = useState(false)
  const onToggle = () => setShow(!show)
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 768) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [width])

  useEffect(() => {
    fetch(`https://api.crustfiles.com/common/userAmount`)
      .then(response => {
        if (response.ok) return response.json();
        throw response;
      })
      .then(json => {
        setUserAmount(json.data.user_amount);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  useEffect(() => {
    fetch(`https://sd.crustcode.com/api/totalStorage`)
      .then(response => {
        if (response.ok) return response.json();
        throw response;
      })
      .then(json => {
        setCapacity(json.data.toFixed(2));
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  useEffect(() => {
    fetch(`https://sd.crustcode.com/api/filePrice`)
      .then(response => {
        if (response.ok) return response.json();
        throw response;
      })
      .then(json => {
        setPrice(json.data.toFixed(6));
      })
      .catch(err => {
        console.error(err);
      })
  }, [])
  useEffect(() => {
    fetch(`https://sd.crustcode.com/api/totalValidNodes`)
      .then(response => {
        if (response.ok) return response.json();
        throw response;
      })
      .then(json => {
        setNodesCount(json.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <body>
      {/* header */}
      <header>
        <nav class="nav">
          <div class="container-fluid cf">
            <div class="brand">
              <a href="#splash"><img src="images/logo.png" /></a>
            </div>
            <i class="bi bi-list nav-toggle" onClick={onToggle}></i>
            <ul hidden={show}>
              <li><a href="#about" class="active">Home</a></li>
              <li><a href="#skills">Benefits</a></li>
              <li><a href="#portfolio">Features</a></li>
              <li><a href="#Faq">Faq</a></li>
              <li><a href="https://crustfiles.io" class="Launch">Launch app</a></li>
            </ul>
          </div>
        </nav>
      </header>
      {/* header */}

      {/* <!----Banner----> */}
      <section class="banner">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-12">
              <div data-aos="fade-right">
                <div class="logo-h" >
                  <img src="images/banner-logo.png" />
                </div>
                <h1 >Your Web3 Cloud Storage<br />
                  for personal use</h1>
                <h2>Start owning your data today.</h2>
                <a href="https://crustfiles.io" class="btn-h">Try it for free</a>
              </div>
            </div>
          </div>
        </div>
        {/* <!----Banner----> */}
      </section>

      <section class="Storage-Capacity">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 Capacity">
              <div class="Storage">
                <div class="nodes">
                  <h2>{userAmount}</h2>
                  <p>Crust Files users</p>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-12 col-md-6 col-lg-2 Capacity TB">
              <div class="Storage distributed">
                <div class="nodes">
                  <h2>Backed by</h2>
                  <h2>Crust Network</h2>
                </div>
                {/* <img src="images/Line.png" /> */}
              </div>          
            </div>

            <div class="col-12 col-sm-12 col-md-6 col-lg-2 Capacity TB">
              <div class="Storage distributed">
                <div class="nodes">
                  <h2>{capacity} TB</h2>
                  <p>Total storage capacity</p>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-12 col-md-6 col-lg-2 Capacity TB">
              <div class="Storage distributed">
                <div class="nodes">
                  <h2 style={{ fontSize: '22px' }}>{price} $/GB/Year</h2>
                  <p>Real time storage price</p>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-12 col-md-6 col-lg-2 Capacity TB">
              <div class="Storage distributed">
                <div class="nodes">
                  <h2>{nodesCount}</h2>
                  <p>Globally distributed nodes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!----Start your Web3 journey with Crust Files ----> */}
      <section class="journey" id="skills">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
              <img src="images/rm395-b18-google-mockup.png" class="img-fluid personal" data-aos="zoom-in" />
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
              <div data-aos="fade-right">
                <h3>Your Web3 journey begins<br /> with Crust Files</h3>
                <p>
                  Crust Files is a decentralized cloud application to store all your personal data in the most secure and private
                  way possible. Crust Files enables users to maintain full ownership and sovereignty of their files all embedded in a user centric and intuitive platform.
                </p>
                <a href="https://crustfiles.io" class="btn-h">Explore Crust Files</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!----Start your Web3 journey with Crust Files ----> */}
      {/* <!---- Why switch to Crust Files? ----> */}
      <section class="journey switch">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-12 col-sm-12 col-md-8 col-lg-8">
              <div data-aos="fade-right" class="Dropbox">
                <h3>Why switch to Crust Files?</h3>
                <p>
                  Currently most user data stored via traditional cloud applications like Dropbox or Google Drive is exposed to many risks such as single-point-of failure events, security breaches or other malicious events. Many of those issues are deeply rooted in the centralized nature of both, the hardware infrastructure and the organizational level of the service provider. </p>
                <p>
                  The vision and mission of Crust Files is to provide a 100% trustless and decentralized application where users regain full ownership and control of their data while enjoying the highest levels of privacy, security and freedom.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <h4 data-aos="zoom-in">OWNERSHIP</h4>
              <h4 data-aos="zoom-in">PRIVACY</h4>
              <h4 data-aos="zoom-in">FREEDOM</h4>
            </div>
          </div>
        </div>
      </section>
      {/* <!---- Why switch to Crust Files? ----> */}
      {/* <!---- More than just a safe place for your data ----> */}
      <section class="journey storesdd">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <h3 class="your">More than just a safe place to store your data</h3>
              <div class="Start">
                <div class="box" data-aos="fade-up" data-aos-duration="1000">
                  <div class="immutable">
                    <img src="images/a1.png" class="img-fluid" />
                  </div>
                  <h4>Decentralization</h4>
                  <p>On average files are stored immutable on more than 60 nodes distributed over the entire globe.</p>
                </div>
                <div class="box" data-aos="fade-up" data-aos-duration="1200">
                  <div class="web">
                    <div class="immutable">
                      <img src="images/a2.png" class="img-fluid" />
                    </div>
                    <h4>Privacy</h4>
                    <p>Access all your data and services totally anonymous with your web3 wallet.</p>
                  </div>
                </div>
                <div class="box" data-aos="fade-up" data-aos-duration="1400">
                  <div class="web">
                    <div class="immutable">
                      <img src="images/a3.png" class="img-fluid" />
                    </div>
                    <h4>Security</h4>
                    <p>Build-in client side encryption ensures that only you can access your data.</p>
                  </div>
                </div>
                <div class="box" data-aos="fade-up" data-aos-duration="1600">
                  <div class="web">
                    <div class="immutable">
                      <img src="images/a4.png" class="img-fluid" />
                    </div>
                    <h4>Usability</h4>
                    <p>Crust Files is as easy and intuitive to use as Dropbox or other known cloud services.</p>
                  </div>
                </div>
                <div class="box" data-aos="fade-up" data-aos-duration="1800">
                  <div class="web">
                    <div class="immutable">
                      <img src="images/a5.png" class="img-fluid" />
                    </div>
                    <h4>Ownership</h4>
                    <p>Nobody else but you is in control of your data or can access your files.</p>
                  </div>
                </div>
                <div class="box" data-aos="fade-up" data-aos-duration="2000">
                  <div class="web">
                    <div class="immutable">
                      <img src="images/a6.png" class="img-fluid" />
                    </div>
                    <h4>Performance</h4>
                    <p>Upload your data via high speed gateways and retrieve your data from multiple sources at the same
                      time to increase data transfer speed.</p>
                  </div>
                </div>
                <div class="box" data-aos="fade-up" data-aos-duration="2200">
                  <div class="web">
                    <div class="immutable">
                      <img src="images/a7.png" class="img-fluid" />
                    </div>
                    <h4>Costs</h4>
                    <p>Crust Files offers the cheapest market rates for cloud storage and is up to 99% more cost-efficient
                      than other cloud services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!---- More than just a safe place for your data ----> */}

      {/* <!---- Features for a new Web3 Cloud experience ----> */}

      <section class="Features" id="portfolio">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <h4>Features for a new Web3 Cloud experience</h4>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="Cloud">
                <div class="flip_inner">
                  <div class="flip_front">
                    <img src="images/w1.png" class="img-fluid" />
                    <h5>Public</h5>
                    <p>Keep your data permanently accessible to everyone</p>
                  </div>
                  <div class="Flip_back">
                    <h5>PUBLIC</h5>
                    <p>Maintain your data immutable, unstoppable and always accessible in a 100% decentralized network with up to 60 replicas for each file.</p>
                    {/* <a href="#0">Learn more</a> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="Cloud" >
                <div class="flip_inner">
                  <div class="flip_front">
                    <img src="images/w2.png" class="img-fluid" />
                    <h5>Vault</h5>
                    <p>100% secured and client side encrypted file storage</p>
                  </div>
                  <div class="Flip_back">
                    <h5>VAULT</h5>
                    <p>Encrypted cloud storage with the highest security  possible. Nobody else but you is holding the keys to your most sensitive and private data. </p>
                    {/* <a href="#0">Learn more</a> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="Cloud" >
                <div class="flip_inner">
                  <div class="flip_front">
                    <img src="images/w3.png" class="img-fluid" />
                    <h5>Pay2Download</h5>
                    <p>Monetize your data in the easiest way possible</p>
                  </div>
                  <div class="Flip_back">
                    <h5>PAY 2 DOWNLOAD</h5>
                    <p>Upload your files, set a price and  offer your data to potential buyers via payment links. Enjoy P2P data sales in a totally private and trustless environment.</p>
                    {/* <a href="#0">Learn more</a> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="Cloud Files">
                <div class="flip_inner">
                  <div class="flip_front">
                    <img src="images/w4.png" class="img-fluid" />
                    <h5>File Sharing</h5>
                    <p>Share your files with the public or totally in secret</p>
                  </div>
                  <div class="Flip_back">
                    <h5>FILE SHARING</h5>
                    <p>Share your files with friends, family and colleagues via direct link  or with your personalized Twitter link.</p>
                    {/* <a href="#0">Learn more</a> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="Cloud Files">
                <div class="flip_inner">
                  <div class="flip_front">
                    <img src="images/w5.png" class="img-fluid" />
                    <h5>Share 2 Earn</h5>
                    <p>Earn $CRU through the Crust Files user reward program</p>
                  </div>
                  <div class="Flip_back">
                    <h5>SHARE 2 EARN</h5>
                    <p>Premium users are eligible to  earn Crust tokens by inviting users and via one of many different activities such as “Lucky Newbie” or  the “Grand Daw”</p>
                    {/* <a href="#0">Learn more</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="featuresds">
          <img src="images/feature.jpg" class="img-fluid" />
        </div>
      </section>

      <div class="plans_btn">
        <a href="#" class="btn-h ">Explore Crust Files user plans</a>
      </div>
      {/* <!---- Features for a new Web3 Cloud experience ----> */}

      {/* <!---- Your Multi-chain storage tool in the Web3 ----> */}
      <section class="Features Multi-chain">
        <div class="container-fluid">
          <div class="row align-items-center justify-content-center">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <h4>Your Multi-chain storage tool in the Web3</h4>
              <p>trusted by</p>
              <div class="logo-slider" data-aos="zoom-in">
                <div class="logoe">
                  <div class="inner-logo" >
                    <a href="#"><img src="images/12.png" class="img-fluid" /></a>
                  </div>
                  <div class="inner-logo">
                    <a href="#"><img src="images/1.png" class="img-fluid" /></a>
                  </div>
                  <div class="inner-logo">
                    <a href="#"><img src="images/3.png" class="img-fluid" /></a>
                  </div>
                  <div class="inner-logo">
                    <a href="#"><img src="images/4.png" class="img-fluid" /></a>
                  </div>
                  <div class="inner-logo">
                    <a href="#"><img src="images/5.png" class="img-fluid" /></a>
                  </div>
                  <div class="inner-logo">
                    <a href="#"><img src="images/6.png" class="img-fluid" /></a>
                  </div>
                  <div class="inner-logo">
                    <a href="#"><img src="images/7.png" class="img-fluid" /></a>
                  </div>
                  <div class="inner-logo">
                    <a href="#"><img src="images/8.png" class="img-fluid" /></a>
                  </div>
                  <div class="inner-logo">
                    <a href="#"><img src="images/9.png" class="img-fluid" /></a>
                  </div>
                  <div class="inner-logo">
                    <a href="#"><img src="images/10.png" class="img-fluid" /></a>
                  </div>
                  <div class="inner-logo">
                    <a href="#"><img src="images/11.png" class="img-fluid" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!---- Your Multi-chain storage tool in the Web3 ----> */}

      {/* <!---- Powered ----> */}
      <section class="journey networkss">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
              <div data-aos="fade-right">
                <h3>Powered by <br /> Crust Network & IPFS</h3>
                <p>Crust provides a decentralized storage network for the Web 3.0. It is designed to realize core values of
                  true decentralization, privacy and data ownership.</p>
                <p>Crust supports multiple storage-layer protocols such as IPFS, and exposes instant accessible on-chain
                  storage functions to users.</p>
                <a href="https://crust.network/" class="btn-h more">Learn more about Crust Network <span class="exposes"><img
                  src="images/nw.png" /><img src="images/nw.png" /></span></a>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 accessible">
              <img src="images/powered.png" class="img-fluid" data-aos="zoom-in" />
            </div>
          </div>
        </div>
      </section>
      {/* <!---- Powered ----> */}
      {/* <!---- On the way to full Decentralization ----> */}
      <section class="Features Multi-chain sdsds">
        <div class="container-fluid">
          <div class="row align-items-center justify-content-center">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <h4>Thriving for the best user experience possible</h4>
              <div class="steps">
                <div class="steps-container">
                  <div class="content">
                    <ul>
                      <li>
                        <svg width="7" height="10" viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 4.9L-4.28372e-07 9.8L0 -3.0598e-07L7 4.9Z" fill="#F58006" />
                        </svg>Conceptual product design
                      </li>
                      <li> <svg width="7" height="10" viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 4.9L-4.28372e-07 9.8L0 -3.0598e-07L7 4.9Z" fill="#F58006" />
                      </svg>Technical developement of Crust Files</li>
                      <li> <svg width="7" height="10" viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 4.9L-4.28372e-07 9.8L0 -3.0598e-07L7 4.9Z" fill="#F58006" />
                      </svg>Crust Files beta version</li>
                    </ul>
                  </div>
                  <div class="date">
                    Q4<br />2021
                    <div class="mazim rs">
                      <img src="images/Union2.png" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="steps-container">
                  <div class="content amets">
                    <ul>
                      <li><svg width="7" height="10" viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 4.9L-4.28372e-07 9.8L0 -3.0598e-07L7 4.9Z" fill="#F58006" />
                      </svg>Official launch of Crust Files v1</li>
                      <li><svg width="7" height="10" viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 4.9L-4.28372e-07 9.8L0 -3.0598e-07L7 4.9Z" fill="#F58006" />
                      </svg>Start of Share2Earn user rewards program</li>
                    </ul>
                  </div>
                  <div class="date">
                    Q1<br />2022
                    <div class="mazim sits">
                      <img src="images/Union.png" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="steps-container">
                  <div class="content">
                    <ul>
                      <li><svg width="7" height="10" viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 4.9L-4.28372e-07 9.8L0 -3.0598e-07L7 4.9Z" fill="#F58006" />
                      </svg>Implementation of Pay2Download features</li>
                      <li><svg width="7" height="10" viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 4.9L-4.28372e-07 9.8L0 -3.0598e-07L7 4.9Z" fill="#F58006" />
                      </svg>Redesign webpage and user documentation</li>
                    </ul>
                  </div>
                  <div class="date">
                    Q2<br />2022
                    <div class="mazim rs">
                      <img src="images/Union2.png" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="steps-container">
                  <div class="content amets">
                    <ul>
                      <li><svg width="7" height="10" viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 4.9L-4.28372e-07 9.8L0 -3.0598e-07L7 4.9Z" fill="#F58006" />
                      </svg>Secret Sharing</li>
                      <li><svg width="7" height="10" viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 4.9L-4.28372e-07 9.8L0 -3.0598e-07L7 4.9Z" fill="#F58006" />
                      </svg>File indexing ( Search function )</li>
                      <li><svg width="7" height="10" viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 4.9L-4.28372e-07 9.8L0 -3.0598e-07L7 4.9Z" fill="#F58006" />
                      </svg>Crust Files mobile application</li>
                      <li><svg width="7" height="10" viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 4.9L-4.28372e-07 9.8L0 -3.0598e-07L7 4.9Z" fill="#F58006" />
                      </svg>Andriod backups solution</li>
                    </ul>
                  </div>
                  <div class="date">
                    More<br />
                    to
                    come
                    <div class="mazim sits">
                      <img src="images/Union.png" class="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!---- On the way to full Decentralization ----> */}
      {/* <!----How to get started with crust files? ----> */}
      <section class="journey get">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <h6>How to get started with Crust Files?</h6>
            </div>
            <div class="col-12 col-sm-12 col-md-3">
              <div class="hows" data-aos="zoom-in" data-aos-duration="1000">
                <img src="images/Group 185.png" class="img-fluid" />
                <p>Download and install Crust web wallet or any other of many Web3 wallet accepted by Crust Files</p>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-3">
              <div class="hows" data-aos="zoom-in" data-aos-duration="2000">
                <img src="images/Group 186.png" class="img-fluid" />
                <p>Verify crustfiles.ioand login with by connecting your wallet with the Dapp. No registration needed.</p>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-3">
              <div class="hows" data-aos="zoom-in" data-aos-duration="3000">
                <img src="images/Group 187.png" class="img-fluid" />
                <p>Set your unique Nickname and start enjoying values of decentralization for your perosnal files.</p>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-3">
              <div class="hows" data-aos="zoom-in" data-aos-duration="4000">
                <img src="images/Group 188.png" class="img-fluid" />
                <p><strong>Optional:</strong>Deposit some CRU to recieve a lifetime Premium Member-ship with many benefits.</p>
              </div>
            </div>
            <p class="For">For more detailed information please visit <a href="https://crustfiles.io/docs/CrustFiles_Welcome/">Crust Files Uset Documentation</a></p>
          </div>
        </div>
      </section>

      {/* <!----How to get started with crust files? ----> */}
      {/* <!----Frequntly Asked Questions----> */}
      <section class="journey get Asked" id="Faq">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <span class="readables">What is Crust? </span></button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> <span class="readables">In which scenarios can Crust be applied?</span></button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>Crust's decentralized storage layer provides a distributed file system. At the same time, Crust encapsulates some standard interfaces such as Amazon S3-like. Any application scenarios involving data storage, such as cloud services, edge computing, and decentralized applications, are the scenarios that Crust can adapt. Worth mentioning is that in edge computing scenarios, compared to centralized cloud storage, Crust's decentralized storage is closer to the edge, which can achieve relatively low cost and high performance.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><span class="readables">What are the main differences between Crust and Filecoin, a star project in the storage field?</span> </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.</p>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"><span class="readables">How does Crust network quantify storage workloads provided by nodes?</span> </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"><span class="readables">What are the consensus mechanism and economic model design of Crust?</span> </button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 editorsa documentation">
              <h6>
                FREQUENTLY<br />
                asked<br />
                questions
              </h6>
              <p>For more information about Crust Files please visit Crust Files user documentation or contact Crust via one of our community channels.</p>
              <div class="row">
                <div class="col-6 col-md-6">
                  <span>MORE QUESTIONS?</span>
                  <a href="https://crustfiles.io/docs/CrustFiles_Welcome/" class="btn-h more">CRUST FILES DOCS</a>
                </div>
                <div class="col-6 col-md-6">
                  <span>LET'S GO!</span>
                  <a href="#" class="btn-h more">LAUNCH APP</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!----Frequntly Asked Questions----> */}
      {/* <!----footer----> */}
      <footer>
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <div class="footer-logo"><img src="images/f-logo.png" class="img-fluid" alt="logo" /></div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-12 col-sm-12 col-md-3 col-lg-3">
              <div><img src="images/logo2.png" class="img-fluid" alt="logo" /></div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
              <ul>
                <li><a href="https://crust.network/">crust.network</a></li>
                <li><a href="https://crustfiles.io/">crustfiles.io</a></li>
                <li><a href="https://crustfiles.io/docs/CrustFiles_Welcome/">Crust files docs</a></li>
              </ul>
            </div>
            <div class="col-12 col-sm-12 col-md-3 col-lg-3">
              <ul class="Crustss">
                <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                <li><a href="#"><i class="bi bi-telegram"></i></a></li>
                <li><a href="#"><i class="bi bi-discord"></i></a></li>
                <li><a href="#"><i class="bi bi-medium"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <p> Copyright © Crust 2022 All Rights Reserved</p>
      </footer>
      {/* <!----footer----> */}

    </body>
  );
}

export default App;

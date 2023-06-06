import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface TabOneProps {
  image: string
  bigImage: string
  category: string
  title: string
  link: string
}

interface TabTwoProps {
  image: string
  bigImage: string
  category: string
  title: string
}
interface TabThreeProps {
  image: string
  bigImage: string
  category: string
  title: string
}
interface TabFourProps {
  image: string
  bigImage: string
  category: string
  title: string
}

const TabOne: any = [
  {
    image: '/reactjs.png',
    bigImage: '/assets/herobg.png',
    category: 'Web Design',
    title: 'Design is a creative part',
    link: new URL('https://ecom-etlmgjnmy-yamil-pedroso.vercel.app/'),
  },
  {
    image: '/javascript.png',
    bigImage: '/assets/herobg.png',
    category: 'Mobile App',
    title: 'The service provide for designer',
    link: new URL('https://womenclothing.netlify.app/'),
  },
  {
    image: '/typescript.png',
    bigImage: '/assets/herobg.png',
    category: 'Web Design',
    title: 'Mobile App landing Design',
    link: new URL('https://uiux-reactjs-web.netlify.app/'),
  },
]

const TabTwo: TabTwoProps[] = [
  {
    image: '04',
    bigImage: '/assets/herobg.png',
    category: 'Mobile App',
    title: 'Logo Design creativity',
  },
  {
    image: '05',
    bigImage: '/assets/herobg.png',
    category: 'Web Design',
    title: 'T-shirt design is the part of design',
  },
  {
    image: '06',
    bigImage: '/assets/herobg.png',
    category: 'Logo Design',
    title: 'Getting tickets to the big show',
  },
]

const TabThree: TabThreeProps[] = [
  {
    image: '07',
    bigImage: '/assets/herobg.png',
    category: 'Freelancer',
    title: 'Getting tickets to the big show',
  },
  {
    image: '08',
    bigImage: '/assets/herobg.png',
    category: 'Freelancer',
    title: 'Getting tickets to the big show',
  },
  {
    image: '09',
    bigImage: '/assets/herobg.png',
    category: 'Freelancer',
    title: 'Getting tickets to the big show',
  },
]

const TabFour: TabFourProps[] = [
  {
    image: '10',
    bigImage: '/assets/herobg.png',
    category: 'Logo Designer',
    title: 'Getting tickets to the big show',
  },
  {
    image: '11',
    bigImage: '/assets/herobg.png',
    category: 'Logo Designer',
    title: 'Getting tickets to the big show',
  },
  {
    image: '12',
    bigImage: '/assets/herobg.png',
    category: 'Logo Designer',
    title: 'Getting tickets to the big show',
  },
  {
    image: '13',
    bigImage: '/assets/herobg.png',
    category: 'Logo Designer',
    title: 'Getting tickets to the big show',
  },
]

class TabCards extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      tab1: 0,
      tab2: 0,
      tab3: 0,
      tab4: 0,
      isOpen: false,
    }
  }
  render() {
    const { tab1, tab2, tab3, tab4, isOpen }: any = this.state

    return (
      <div className="">
        <Tabs>
          <div className="flex justify-center items-center pb-20">
            <TabList className="flex">
              <Tab className="m-3 cursor-pointer">
                <span>All Projects</span>
              </Tab>
              <Tab className="m-3 cursor-pointer">
                <span>Web Apps</span>
              </Tab>
              <Tab className="m-3 cursor-pointer">
                <span>Mobile Apps</span>
              </Tab>
              <Tab className="m-3 cursor-pointer">
                <span>UI/UX</span>
              </Tab>
            </TabList>
          </div>

          <TabPanel className="flex flex-wrap">
            {TabOne.map((value: any, index: any) => (
              <div className="" key={index}>
                {isOpen && (
                  <Lightbox
                    mainSrc={TabOne[tab1].bigImage}
                    nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                    prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        tab1: (tab1 + 1) % TabOne.length,
                      })
                    }
                  />
                )}
                <div className="relative">
                  <div
                    onClick={() => this.setState({ isOpen: true, tab1: index })}
                    className=""
                  >
                    <a href={value.link} target="_blank" rel="noopener">
                      <motion.div
                        className="w-[20vw] h-[50vh] rounded border-black border-[8px] m-2 relative cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <div className="border-black border-[8px] bg-[#f8f9fc] w-[8vw] h-[14.5vh] rounded-full overflow-hidden absolute top-[-4.7rem] left-[6.1rem] flex items-center justify-center">
                          <img
                            src={value.image}
                            className="w-[5rem] object-cover"
                            alt="Portfolio Images"
                          />
                        </div>
                        <div className={`bg-gray-700 h-[20vh]`}></div>
                      </motion.div>
                    </a>
                    <div className="mx-4">
                      <div className="text-white">
                        <p className="text-[2em]">{value.category}</p>
                        <p>
                          <a className="text-[1.2em]" href="#">
                            {value.title}
                          </a>
                        </p>
                        <a href={value.link} target="_blank" rel="noopener">
                          Discover
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>

          <TabPanel className="flex">
            {TabTwo.map((value, index) => (
              <div className="" key={index}>
                {isOpen && (
                  <Lightbox
                    mainSrc={TabTwo[tab2].bigImage}
                    nextSrc={`/assets/images/portfolio/dp-portfolio-${
                      TabTwo[(tab2 + 1) % TabTwo.length].image
                    }.jpg`}
                    prevSrc={`/assets/images/portfolio/dp-portfolio-${
                      TabTwo[(tab2 + TabTwo.length - 1) % TabTwo.length].image
                    }.jpg`}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        tab2: (tab2 + TabTwo.length - 1) % TabTwo.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        tab1: (tab2 + 1) % TabTwo.length,
                      })
                    }
                  />
                )}
                <div className="relative">
                  <div
                    onClick={() => this.setState({ isOpen: true, tab2: index })}
                    className=""
                  >
                    <div className="w-[20vw] h-[15vh] border-black border-[8px] m-2 p-[2rem]">
                      <div className="">
                        <img src="#" alt="Portfolio Images" />
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        <p>{value.category}</p>
                        <h4>
                          <a href="">{value.title}</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>

          <TabPanel className="flex">
            {TabThree.map((value, index) => (
              <div className="" key={index}>
                {isOpen && (
                  <Lightbox
                    mainSrc={TabThree[tab3].bigImage}
                    nextSrc={`/assets/images/portfolio/dp-portfolio-${
                      TabThree[(tab3 + 1) % TabThree.length].image
                    }.jpg`}
                    prevSrc={`/assets/images/portfolio/dp-portfolio-${
                      TabThree[(tab3 + TabThree.length - 1) % TabThree.length]
                        .image
                    }.jpg`}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        tab3: (tab3 + TabThree.length - 1) % TabThree.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        tab3: (tab3 + 1) % TabThree.length,
                      })
                    }
                  />
                )}
                <div className="relative">
                  <div
                    onClick={() => this.setState({ isOpen: true, tab3: index })}
                    className=""
                  >
                    <div className="w-[20vw] h-[15vh] border-black border-[8px] m-2 p-[2rem]">
                      <div className="">
                        <img src="#" alt="Portfolio Images" />
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        <p>{value.category}</p>
                        <h4>
                          <a href="#portfolio-details">{value.title}</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>
          <TabPanel className="flex flex-wrap">
            {TabFour.map((value, index) => (
              <div className="" key={index}>
                {isOpen && (
                  <Lightbox
                    mainSrc={TabFour[tab4].bigImage}
                    nextSrc={`/assets/images/portfolio/dp-portfolio-${
                      TabFour[(tab4 + 1) % TabFour.length].image
                    }.jpg`}
                    prevSrc={`/assets/images/portfolio/dp-portfolio-${
                      TabFour[(tab4 + TabFour.length - 1) % TabFour.length]
                        .image
                    }.jpg`}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        tab4: (tab4 + TabFour.length - 1) % TabFour.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        tab4: (tab4 + 1) % TabFour.length,
                      })
                    }
                  />
                )}
                <div className="relative">
                  <div
                    onClick={() => this.setState({ isOpen: true, tab4: index })}
                    className=""
                  >
                    <div className="w-[20vw] h-[15vh] border-black border-[8px] m-2 p-[2rem]">
                      <div className="">
                        <img src="#" alt="Portfolio Images" />
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        <p>{value.category}</p>
                        <h4>
                          <a href="#portfolio-details">{value.title}</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default TabCards

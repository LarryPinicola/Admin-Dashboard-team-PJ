import React from 'react'

import { Select } from '@mantine/core';

import { FaAngleDown} from 'react-icons/fa'

import HomeChart from './HomeChart';

import meal1 from '../img/meal1.svg'

import meal2 from '../img/meal2.svg'

import meal3 from '../img/meal3.svg'

import user1 from '../img/user1.svg'

import gym from '../img/gymIcon.svg'

import therapy from '../img/therapyIcon.svg'

import statis from '../img/statis.svg'

import upgrade from '../img/upgrade.svg'

import heatred from '../img/heartRed.svg'

import heatyellow from '../img/heartYellow.svg'

import heartTeal from '../img/heartTeal.svg'

import heatViolet from '../img/heartViolet.svg'

import {AiFillHeart} from 'react-icons/ai'

import { useDisclosure } from "@mantine/hooks";

import { ScrollArea } from "@mantine/core";

import Navbar from './Navbar';

 

const Home = () => {

  const [opened, { toggle }] = useDisclosure(false);

 

  return (
    <div className=' h-full'>
      <Navbar/>
      <div className=" ml-0 sm:ml-[235px] md:ml-[235px] h-full">   
        <section className=' h-[100vh] flex flex-col w-full'>

          <main className='pt-0 md:pt-[28px] pb-[50px] pl-5 pr-[10px] bgColor flex flex-col '>

            <div className=' mb-[24px]'>

              <h1 className=' text-xl font-semibold ms-3 text-[#ff6f61]'>Dashboard</h1>

            </div>

            <div className=' flex flex-col lg:flex-row bgColor'>

              {/* activities & meal */}

              <div className=" w-full md:w-full lg:w-2/3">

                <div className=' flex flex-col md:flex-row px-3 gap-6 mb-6'>

                  {/* activities */}

                  <div className=' w-full h-auto md:w-1/2 '>

                    <div className=' bgWhite rounded-xl h-full'>

                      <div className=' flex  justify-between items-center p-6'>

                        <p className=' font-semibold'>Your activity</p>

                          <div className=' w-24'>

                          <Select

                            defaultValue={"Weekly"}

                            classNames={{input : 'week-input',dropdown: 'home-dropdown'}}

                            rightSection={<FaAngleDown size="1rem" color='#948C9E' />}

                            rightSectionWidth={30}

                            styles= {{dropdown : {top : '138px'}}}

                            data={['Weekly', 'Daily', 'Monthly']}

                          />

                          </div>

                      

                      </div>

                      <div className=' h-[290px]'>

                        <HomeChart/>

                      </div>

                    </div>

                  </div>

                  {/* meals */}

                  <div className=' w-full md:w-1/2 '>

                    <div className=' bgWhite rounded-xl p-7 pb-6'>

                        <div className=' flex  justify-between items-center '>

                          <p className=' font-semibold'>Your meal</p>

                          <div className=' w-24'>

                          <Select

                              defaultValue={"Weekly"}

                              classNames={{input : 'week-input',dropdown: 'home-dropdown'}}

                              rightSection={<FaAngleDown size="1rem" color='#948C9E' />}

                              rightSectionWidth={30}

                              styles= {{dropdown : {top : '138px'}}}

                              data={['Weekly', 'Daily', 'Monthly']}

                           

                            />

                          </div>

                        </div>

                        <div className=' mt-6'>

                          <div className=' flex justify-between items-center px-4 py-3  bgColor rounded-xl'>

                            <div className=' flex'>

                            <img src={meal1} alt="" />

                            <div className=' ms-3'>

                              <p className=' font-semibold text-fs1'>Salmon Salad</p>

                              <span className=' text-muted text-fs1 font-fw--2'>300 g</span>

                            </div>

                            </div>

                            <p className=' text-muted text-fs1 font-fw--2'>175 cal</p>

                          </div>

                          <div className=' flex justify-between items-center px-4 py-3 my-6 bgColor rounded-xl'>

                            <div className=' flex'>

                            <img src={meal2} alt="" />

                            <div className=' ms-3'>

                              <p className=' font-semibold text-fs1'>Salmon Salad</p>

                              <span className=' text-muted text-fs1 font-fw--2'>300 g</span>

                            </div>

                            </div>

                            <p className=' text-muted text-fs1 font-fw--2'>175 cal</p>

                          </div>

                          <div className=' flex justify-between items-center px-4 py-3 m bgColor rounded-xl'>

                            <div className=' flex'>

                            <img src={meal3} alt="" />

                            <div className=' ms-3'>

                              <p className=' font-semibold text-fs1'>Salmon Salad</p>

                              <span className=' text-muted text-fs1 font-fw--2'>300 g</span>

                            </div>

                            </div>

                            <p className=' text-muted text-fs1 font-fw--2'>175 cal</p>

                          </div>

                        </div>

                    </div>

                  </div>

                </div>

                {/* upgrade plan*/}

                <div className='  px-3 mb-6 md:mb-0'>

                    <div className=' bg-white rounded-xl flex flex-col lg:flex-row items-center justify-between'>

                      <div className=' p-4 md:p-7'>

                        <p className=' head3'>Upgrade your plan</p>

                        <p className=' font-normal text-fs1 text-[#212529]'>So how did the classical Latin become so</p>

                        <div className=' mt-7 flex'>

                          <button className=' px-7 me-4 py-3 bgPrimary border-0 hover-primary-btn text-white rounded-full text-sm'>Go Premium</button>

                          <button className=' px-7 py-3 border upgrade-btn border-slate-600 rounded-full text-sm'>Try for free</button>

                        </div>

                      </div>

                      {/* upgrade img */}

                      <div className=' px-4'>

                          <img src={upgrade} alt="" />

                      </div>

                    </div>

                </div>

                {/* Text cards */}

                <div className=' flex flex-col lg:flex-row items-center px-3 mt-6 rounded flex-wrap gap-5'>

                  {/* cards */}

                  <div className=' w-full lg:w-[48.5%] flex gap-5'>

                    <div className=' w-1/2 '>

                      <div className=' bg-white px-5 py-10 rounded-xl'>

                        <div className=' flex items-center'>

                          <img src={heatred} alt="" className=' text-card-svg'/>

                          <div className=' ms-3'>

                            <p className=' text-fs1 font-semibold'>Text</p>

                            <span className=' text-fs1 font-semibold'>Num <span className=' text-fs1 text-muted font-medium'> /ber</span></span>

                          </div>

                        </div>

                        <div className=' h-[5px] bg-[#FFDFE3] rounded overflow-hidden mt-5'>

                          <div className=' h-full bg-[#FF5668] w-2/3'></div>

                        </div>

                      </div>

                    </div>

                    <div className=' w-1/2 '>

                      <div className=' bg-white px-5 py-10 rounded-xl'>

                        <div className=' flex items-center'>

                          <img src={heatyellow} alt="" className=' text-card-svg' />

                          <div className=' ms-3'>

                            <p className=' text-fs1 font-semibold'>Text</p>

                            <span className=' text-fs1 font-semibold'>Num <span className=' text-fs1 text-muted font-medium'> /ber</span></span>

                          </div>

                        </div>

                        <div className=' h-[5px] bg-[#FFF4D0] rounded overflow-hidden mt-5'>

                          <div className=' h-full bg-[#FFC405] w-2/3'></div>

                        </div>

                      </div>

                    </div>

                  </div>

                  <div className=' w-full lg:w-[48.5%] flex gap-5'>

                    <div className=' w-1/2 '>

                      <div className=' bg-white px-5 py-10 rounded-xl'>

                        <div className=' flex items-center'>

                          <img src={heartTeal} alt="" className=' text-card-svg' />

                          <div className=' ms-3'>

                            <p className=' text-fs1 font-semibold'>Text</p>

                            <span className=' text-fs1 font-semibold'>Num <span className=' text-fs1 text-muted font-medium'> /ber</span></span>

                          </div>

                        </div>

                        <div className=' h-[5px] bg-[#DBF7FA] rounded overflow-hidden mt-5'>

                          <div className=' h-full bg-[#41D5E2] w-2/3'></div>

                        </div>

                      </div>

                    </div>

                    <div className=' w-1/2 '>

                      <div className=' bg-white px-5 py-10 rounded-xl'>

                        <div className=' flex items-center'>

                          <img src={heatViolet} alt="" />

                          <div className=' ms-3'>

                            <p className=' text-fs1 font-semibold'>Text</p>

                            <span className=' text-fs1 font-semibold'>Num <span className=' text-fs1 text-muted font-medium'> /ber</span></span>

                          </div>

                        </div>

                        <div className=' h-[5px] bg-[#DDDFF9] rounded overflow-hidden mt-5'>

                          <div className=' h-full bg-[#4D53E0] w-2/3'></div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* user card */}

              <div className=" w-full md:w-full lg:w-1/3 px-3 my-6 lg:mt-0">

                <div className=' bgWhite rounded-xl p-7'>

                    <div className=' flex items-center flex-wrap'>

                      <img src={user1} alt="" className=' w-24 h-24 block me-5 ' />

                      <div>

                        <p className=' font-semibold'>Christina Karey</p>

                        <span className=' text-muted text-fs1'>Brasil</span>

                      </div>

                    </div>

                    <div className=' flex justify-around mt-10'>

                      <div>

                        <p className=' head1 font-semibold'>63 kg</p>

                        <p className=' text-muted text-fs1'>Weight</p>

                      </div>

                      <div>

                        <p className=' head1 font-semibold'>175 cm</p>

                        <p className=' text-muted text-fs1'>Height</p>

                      </div>

                      <div>

                        <p className=' head1 font-semibold'>23 y.</p>

                        <p className=' text-muted text-fs1'>age</p>

                      </div>

                    </div>

                    <div className=' flex justify-between items-center mt-14 mb-10'>

                      <p className=' head1 font-semibold'>Your Goals</p>

                      <div className=' w-24'>

                      <Select

                        defaultValue={"Weekly"}

                        classNames={{input : 'week-input',dropdown: 'home-dropdown'}}

                        rightSection={<FaAngleDown size="1rem" color='#948C9E' />}

                        rightSectionWidth={30}

                        styles= {{dropdown : {top : '138px'}}}

                        data={['Weekly', 'Daily', 'Monthly']}

                      />

                      </div>

                    </div>

                    <div className=' mb-12'>

                      <div className=' flex flex-col'>

                        <div className=' flex justify-between items-center mb-3'>

                          <p className=' text-fs1 font-semibold'>Sleep</p>

                          <span className=' text-fs1 font-semibold'>92 <span className=' font-medium text-muted'>/160</span></span>

                        </div>

                        <div className=' bg-[#E9ECEF] h-[6px] rounded-full overflow-hidden'>

                          <div className=' w-2/4 bg-[#FF5668] h-full'></div>

                        </div>

                      </div>

                      <div className=' flex flex-col my-5'>

                        <div className=' flex justify-between items-center mb-3'>

                          <p className=' text-fs1 font-semibold'>Sport</p>

                          <span className=' text-fs1 font-semibold'>40 <span className=' font-medium text-muted'>/50</span></span>

                        </div>

                        <div className=' bg-[#E9ECEF] h-[6px] rounded-full overflow-hidden'>

                          <div className=' w-3/4 bg-[#FFC405] h-full'></div>

                        </div>

                      </div>

                      <div className=' flex flex-col'>

                        <div className=' flex justify-between items-center mb-3'>

                          <p className=' text-fs1 font-semibold'>Water</p>

                          <span className=' text-fs1 font-semibold'>25 <span className=' font-medium text-muted'>/40</span></span>

                        </div>

                        <div className=' bg-[#E9ECEF] h-[6px] rounded-full overflow-hidden'>

                          <div className=' w-1/4 bg-[#41D5E2] h-full'></div>

                        </div>

                      </div>

                    </div>

                    {/* Appointment */}

                    <div>

                      <p className=' head1 font-semibold mb-4'>Appointments</p>

                      <div className=' p-3 flex justify-evenly bgColor items-center mb-4 rounded-xl'>

                        <img src={gym} alt="" />

                        <div>

                          <p className=' text-fs1  font-semibold'>02.11 , 12:00 - 13:00</p>

                          <p className=' text-fs1 text-muted'>Yoga, Airplace Gym</p>

                        </div>

                        <div>

                          <input type='checkbox' className=' focus:ring-0' defaultChecked/>

                        </div>

                      </div>

                      <div className=' p-3 flex justify-evenly bgColor items-center rounded-xl'>

                        <img src={therapy} alt="" />

                        <div>

                          <p className=' text-fs1  font-semibold'>02.11 , 12:00 - 13:00</p>

                          <p className=' text-fs1 text-muted'>Yoga, Airplace Gym</p>

                        </div>

                        <div>

                          <input type='checkbox' className=' focus:ring-0'/>

                        </div>

                      </div>

                    </div>

                    {/* Download */}

                    <div>

                      <div className=' p-3 py-7 flex justify-center bg-[#ff5668] transition-colors hover:bg-[#ff3046] items-center mt-16 rounded-xl'>

                        <img src={statis} alt="" />

                        <div className=' text-white ms-4'>

                          <p className=' head2'>STATISTIC</p>

                          <p className=' text-fs1 '>Download Your Acitivity</p>

                        </div>

                      </div>

                    </div>

                </div>

              </div>

            </div>

          </main>

        {/* footer */}

          <div className=' text-end bgColor mt-auto p-5'>

            <p className=''>2021 © Flatlogic. Hand-crafted & Made with <AiFillHeart className=' text-[#FF3046] inline-block'/></p>

          </div>

        </section>
      </div>
    </div>
  )

}

 

export default Home
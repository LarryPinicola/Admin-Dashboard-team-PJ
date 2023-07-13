import React from "react";
import {
  Badge,
  Breadcrumbs,
  Menu,
  Paper,
  ScrollArea,
  Stepper,
} from "@mantine/core";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "../../node_modules/react-icons/fa";

import ApexCharts from "react-apexcharts";
import { useState } from "react";
import Navbar from "./Navbar";
import Breadcrumb from "./BreadCrumb";

const Profile = () => {
  const [active, setActive] = useState(1);
  const items = [
    { title: "Template", href: `#` },
    { title: "User", href: "#" },
    { title: "Profile", href: "#" },
  ].map((item, index) => (
    <div
      className=" text-sm font-normal text-gray-500 hover:text-black"
      href={item.href}
      key={index}
    >
      {item.title}
    </div>
  ));

  const series = [
    {
      name: "Products",
      data: [30, 41, 35, 56, 49, 62, 69, 91, 100],
    },
    {
      name: "Services",
      data: [64, 53, 47, 39, 24, 36, 42, 55, 67],
    },
  ];
  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Marc",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    yaxis: {},
    tooltip: {
      x: {
        show: false,
      },
    },
    colors: ["#4D53E0", "#41D5E2"],
    chart: {
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: true,
      horizontalAlign: "center",
    },
  };

  return (
    <div className="h-full">
      <Navbar />
      <div className=" ">
        <div className=" lg:ml-[16.5rem] md:ml-[15rem] px-5 lg:pl-0 lg:pt-7">
          <div className="mb-6">
            <span className=" text-gray-800 font-semibold text-xl tracking-wide">Profile</span>
            {/* <Brea className="my-4"> */}
            <div className="mt-2 mb-4">
            <Breadcrumb/>
            </div>
          </div>

          <div className="w-[100%] justify-between gap-7 lg:flex lg:columns-2 md:columns-1 sm:columns-1">
            <div className=" drop-shadow h-[100%] lg:w-[50%] text-white bg-color p-5 rounded-lg">
              <section className="lg:h-[440px] sm:h-[440px] md:h-[460px] w-[auto]">
                <div className="">
                  <div className=" flex justify-end">
                    <Menu shadow="md" width={100}>
                      <Menu.Target>
                        <a
                          aria-haspopup="true"
                          href="#"
                          className="p-0 nav-link"
                          aria-expanded="false"
                        >
                          <img
                            className=""
                            src="https://demo.flatlogic.com/sofia-react/static/media/moreIcon.f4169ba0.svg"
                            alt="More..."
                          />
                        </a>
                      </Menu.Target>

                      <Menu.Dropdown className=" rounded">
                        <Menu.Item>Edit</Menu.Item>
                        <Menu.Item>Delete</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </div>
                  <div className="flex gap-7 items-center">
                    <div className=" sm:mr-4">
                      <img
                        className=" lg:w-[190px] md:w-[190px] sm:w-[150px]"
                        src="	https://demo.flatlogic.com/sofia-react/static/media/profile.97b5b6a7.png"
                        alt="..."
                      />
                    </div>
                    <div className=" flex flex-col">
                      <div className=" ">
                        <p className=" text-3xl font-semibold mb-2">
                          Mary Sanders
                        </p>

                        <p className=" mb-5">UI/UX Designer</p>
                        <hr className=" mb-5" />
                        <div className="flex flex-row ">
                          <a
                            className=" lg:mr-10 mr-auto text-xl"
                            href="https://www.facebook.com/flatlogic"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i>
                              <FaFacebookF />
                            </i>
                          </a>
                          <a
                            className=" lg:mr-10 mr-auto text-xl"
                            href="https://twitter.com/flatlogic/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i>
                              <FaTwitter />
                            </i>
                          </a>
                          <a
                            className=" lg:mr-10 mr-auto text-xl"
                            href="https://github.com/flatlogic/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i>
                              <FaGithub />
                            </i>
                          </a>
                          <a
                            className=" text-xl"
                            href="https://www.linkedin.com/company/flatlogic/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="">
                              <FaLinkedinIn />
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-10">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    typesetting industry. Lorem Ipsum has been the industry's
                  </div>
                  <div className=" mt-6 flex flex-wrap ">
                    <span className=" mr-4 mb-2">
                      <Badge className=" text-blue-600 p-3">Figma</Badge>
                    </span>
                    <span>
                      <Badge className="mr-4 mb-2 text-red-600 p-3">Marketing</Badge>
                    </span>
                    <span className="">
                      <Badge className="mr-4 mb-2 text-yellow-500 p-3">
                        Digital Marketing
                      </Badge>
                    </span>
                    <span className="">
                      <Badge className="mr-4 text-cyan-500 p-3">
                        Graphic Design
                      </Badge>
                    </span>
                    <span className="">
                      <Badge className="mr-4 text-emerald-500 p-3">
                        Social Media
                      </Badge>
                    </span>
                  </div>
                </div>
              </section>
            </div>

            <div className=" rounded-lg drop-shadow h-[100%] lg:w-[50%] use">
              <section className=" p-8 h-[480px] shadow xl:w-[480px] lg:w-[490px] md:w-[100%] sm:w-[100%]">
                <div className=" mb-4">
                  <h2 className=" text-lg font-semibold">Earning</h2>
                  <a className="">
                    <span className="text-base mr-1 text-indigo-700 hover:text-black tracking-wider">
                      BBC News,
                    </span>
                    <span className="text-base mr-1 text-indigo-700 hover:text-black tracking-wider">
                      Euronews,
                    </span>
                    <span className="text-base mr-1 text-indigo-700 hover:text-black tracking-wider">
                      CNN,
                    </span>
                    <span className="text-base text-indigo-700 hover:text-black tracking-wider">
                      GB News
                    </span>
                  </a>
                </div>

                <ScrollArea h={350} offsetScrollbars>
                  <div className="flex items-start my-6">
                    <div className=" mr-4" id="0">
                      <img
                        className=" rounded-full w-[120px] "
                        src="https://demo.flatlogic.com/sofia-react/static/media/bbcnewsLogo.ce86c07c.svg"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className=" flex">
                        <p className="font-semibold mr-3 tracking-wide text-gray-600">BBC News</p>
                        <p className=" text-[#6b859e] font-normal tracking-wide">15 min ago</p>
                      </div>
                      <div className=" mt-1 leading-5 text-gray-500 text-sm tracking-wider">
                        <div className="">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's typesetting industry. Lorem Ipsum has...
                          <span className=" text-indigo-700"> view all</span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="flex my-6">
                    <div className=" mr-4" id="0">
                      <img
                        className="rounded-full w-[120px]"
                        src="https://demo.flatlogic.com/sofia-react/static/media/euronewsLogo.e04390d9.svg"
                        alt="avatar pic"
                      />
                    </div>
                    <div className="">
                      <div className=" flex">
                        <p className="font-semibold mr-3 tracking-wide text-gray-600">Euronews</p>
                        <p className=" text-[#6b859e] font-normal tracking-wide">1 h ago</p>
                      </div>
                      <div className=" mt-1 leading-5 text-gray-500 text-sm tracking-wider">
                        <div className="">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's typesetting industry. Lorem Ipsum has...
                          <span className=" text-indigo-700"> view all</span>
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex my-6">
                    <div className=" mr-4" id="0">
                      <img
                        className="rounded-full w-[120px]"
                        src="https://demo.flatlogic.com/sofia-react/static/media/cnnLogo.920ed1f4.svg"
                        alt="avatar pic"
                      />
                    </div>
                    <div className="">
                      <div className=" flex">
                        <p className="font-semibold mr-3 tracking-wide text-gray-600">CNN</p>
                        <p className=" text-[#6b859e] font-normal tracking-wide">3 h ago</p>
                      </div>
                      <div className=" mt-1 leading-5 text-gray-500 text-sm tracking-wider">
                        <div className="">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's typesetting industry. Lorem Ipsum has...
                          <span className=" text-indigo-700"> view all</span>
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="flex my-6">
                    <div className=" mr-4" id="0">
                      <img
                        className="rounded-full w-[120px]"
                        src="https://demo.flatlogic.com/sofia-react/static/media/nbcLogo.120e3953.svg"
                        alt="avatar pic"
                      />
                    </div>
                    <div className="">
                      <div className=" flex">
                        <p className="font-semibold mr-3 tracking-wide text-gray-600">NBC</p>
                        <p className=" text-[#6b859e] font-normal tracking-wide">6 h ago</p>
                      </div>
                      <div className=" mt-1 leading-5 text-gray-500 text-sm tracking-wider">
                        <div className="">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's typesetting industry. Lorem Ipsum has...
                          <span className=" text-indigo-700"> view all</span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </section>
            </div>
          </div>

          <div className="w-[100%] lg:flex justify-between items-stretch gap-7 lg:columns-2 md:columns-1 sm:columns-1 mt-5">
            <div className="lg:w-[50%] lg:flex justify-between lg:columns-2 md:columns-1 sm:columns-1">
              <Paper
                shadow="xs"
                p="md"
                className=" md:w-[100%] sm:w-[100%] lg:mr-8 mr-auto"
              >
                <Stepper
                  className=""
                  active={active}
                  onStepClick={setActive}
                  orientation="vertical"
                >
                  <Stepper.Step label="Step 1" description="Verify email" />
                  <Stepper.Step label="Step 2" description="Verify email" />
                  <Stepper.Step label="Step 3" description="Get full access" />
                  <Stepper.Step label="Step 4" description="Get full access" />
                  <Stepper.Step label="Step 5" description="Get full access" />
                  <Stepper.Step label="Step 6" description="Get full access" />
                </Stepper>
              </Paper>
              <div className="">
                <div className="w-full flex flex-col">
                  <div className=" drop-shadow-md py-4 bg-white mb-8">
                    <section className=" ">
                      <div className="">
                        <div className="flex flex-col items-center ">
                          <img
                            className=""
                            src="https://demo.flatlogic.com/sofia-react/static/media/heartRed.616f373a.svg"
                            alt="..."
                          />
                          <div className=" my-3 font-semibold">Paypal</div>
                          <div className=" text-gray-500 text-sm font-semibold">
                            +$2000
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className=" mb-8 drop-shadow-md py-4 bg-white">
                    <section className="">
                      <div className=" ">
                        <div className=" flex flex-col items-center">
                          <img
                            className="img-fluid mb-1"
                            src="https://demo.flatlogic.com/sofia-react/static/media/heartTeal.932b16dd.svg"
                            alt="..."
                          />
                          <div className="my-3 font-semibold">Paypal</div>
                          <div className="text-gray-500 text-sm font-semibold">
                            +$2000
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="w-full h-48 overflow-auto touch-pan-x">
                    <div
                      className="w-[120%] max-w-none h-auto drop-shadow-md py-4 bg-white"
                      
                      
                    >
                      <section className="">
                        <div className="">
                          <div className="flex flex-col items-center">
                            <div className=" text-3xl text-red-400 font-semibold">
                              +$467,80
                            </div>
                            <div className=" text-gray-500 text-base">
                              Your total earning
                            </div>
                            <button className=" rounded-full bg-color px-5 py-2 border-none text-white text-sm font-semibold">
                              Get Money
                            </button>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] flex justify-between flex-col">
              <div className="bg-white drop-shadow">
                <div
                  className=" w-[100%] h-[350px]"
                  style={{ minHeight: "265px" }}
                >
                  {/* <span className=" ml-6 text-black font-semibold">Earning</span> */}
                  <ApexCharts
                    options={options}
                    series={series}
                    type="line"
                    height={300}
                    className=""
                  />
                  {/* <button className=" my-4 px-5 py-1 bg-red-500 rounded-full flex text-white mx-auto">View Analysic</button> */}
                </div>
              </div>

              <div className="">
                <Paper className=" drop-shadow" p="lg">
                  <div className="">
                    <p className=" text-xl font-semibold text-gray-700">
                      My Friends
                    </p>
                    <div className="flex items-end">
                      <div className="w-3/5 flex pt-4 ml-3">
                        <div className="avatar" id="Alisha_Swan">
                          <img
                            className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                            src="https://demo.flatlogic.com/sofia-react/static/media/AlishaSwan.d4871f39.png"
                            alt="avatar pic"
                          />
                        </div>
                        <div className="avatar" id="James_Wood">
                          <img
                            className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                            src="https://demo.flatlogic.com/sofia-react/static/media/JamesWood.e99c32e2.png"
                            alt="avatar pic"
                          />
                        </div>
                        <div className="avatar" id="Luis_Suares">
                          <img
                            className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                            src="https://demo.flatlogic.com/sofia-react/static/media/LuisSuares.e3fb1c91.png"
                            alt="avatar pic"
                          />
                        </div>
                        <div className="avatar" id="Samantha_Bird">
                          <img
                            className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                            src="	https://demo.flatlogic.com/sofia-react/static/media/SamanthaBird.45a73a86.png"
                            alt="avatar pic"
                          />
                        </div>
                        <div className="avatar" id="Tara_Smith">
                          <img
                            className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                            src="https://demo.flatlogic.com/sofia-react/static/media/TaraSmith.122797b5.png"
                            alt="avatar pic"
                          />
                        </div>
                        <div className="avatar" id="Brandy_Martins">
                          <img
                            className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                            src="	https://demo.flatlogic.com/sofia-react/static/media/BrandyMartins.3e3760ad.png"
                            alt="avatar pic"
                          />
                        </div>
                        <div className="avatar" id="Enzo_Macaroni">
                          <img
                            className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                            src="	https://demo.flatlogic.com/sofia-react/static/media/EnzoMacaroni.feacca8e.png"
                            alt="avatar pic"
                          />
                        </div>
                        <div className="avatar" id="Jenny_Lim">
                          <img
                            className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                            src="	https://demo.flatlogic.com/sofia-react/static/media/JennyLim.cae24865.png"
                            alt="avatar pic"
                          />
                        </div>
                      </div>
                      <div className="w-2/5 flex flex-col">
                        <p className=" text-gray-500">283 Friends</p>
                        <button className="-ml-12 mt-5 lg:w-48 md:w-48 sm:w-40 text-xs rounded-full py-3 border border-gray-400 bg-white hover:bg-gray-400 hover:text-white">
                          + Add new friend
                        </button>
                      </div>
                    </div>
                  </div>
                </Paper>
              </div>
            </div>
          </div>
          <div className=" my-5 flex justify-end"><span className="text-[#6b859e]">2021 © Flatlogic. Hand-crafted &amp; Made with<span className="text-xl text-rose-500">♥</span></span></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
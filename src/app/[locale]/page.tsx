"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Image from "next/image"
import Button from "@mui/material/Button"
import { useTranslations } from "next-intl"
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined"
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined"
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined"
import HomeFilledIcon from "@mui/icons-material/HomeFilled"
import PeopleIcon from "@mui/icons-material/People"
import HandshakeIcon from "@mui/icons-material/Handshake"
import MapIcon from "@mui/icons-material/Map"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import EmailIcon from "@mui/icons-material/Email"
import Link from "next/link"

export default function HomePage() {
  const t = useTranslations("HomePage")

  return (
    <div className="p-2 md:p-4 lg:p-4 dark:bg-gray-800 dark:text-white">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full md:ml-[5%] lg:ml-[10%] mt-[80px] relative"
      >
        <SwiperSlide>
          <Image
            src="/image/image 27.png"
            alt="Slide 1"
            width={1400}
            height={800}
            className="rounded-xl md:rounded-2xl w-full md:ml-[2.7%] md:w-[95%] h-[250px] md:h-[400px] lg:h-[640px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/image/unsplash_nbRgZltoOck.png"
            alt="Slide 2"
            width={1400}
            height={800}
            className="rounded-xl md:rounded-2xl w-full md:ml-[2.7%] md:w-[95%] h-[250px] md:h-[400px] lg:h-[640px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/image/image 26.png"
            alt="Slide 3"
            width={1400}
            height={100}
            className="rounded-xl md:rounded-2xl w-full md:ml-[2.7%] md:w-[95%] h-[250px] md:h-[400px] lg:h-[640px]"
          />
        </SwiperSlide>
      </Swiper>

      <div className="text-center relative top-[-180px] md:top-[-300px] lg:top-[-500px] z-1 text-white px-4">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">{t("a7")}</h1>
        <hr className="bg-[#FFA900] w-[20%] md:w-[12%] lg:w-[8%] mx-auto mt-[15px] md:mt-[20px] lg:mt-[30px] h-[4px] md:h-[5px] lg:h-[7px] rounded-2xl border-none" />
        <h2 className="text-sm md:text-xl lg:text-2xl mt-[15px] md:mt-[20px] lg:mt-[30px] text-[#f9fafbd5] px-4">
          {t("a8")}
        </h2>

        <div className="flex flex-col ml-[40px]  md:flex-row gap-[10px] justify-center mt-[85px] md:mt-[35px] lg:mt-[50px]">
          <Button
            sx={{
              backgroundColor: "#FFA900",
              width: { xs: "260px", md: "180px", lg: "190px" },
              height: { xs: "40px", md: "42px", lg: "45px" },
              borderRadius: "100px",
              fontSize: { xs: "12px", md: "14px" },
            }}
            variant="contained"
          >
            {t("a9")}
          </Button>
          <Button
            sx={{
              color: "#FFA900",
              width: { xs: "260px", md: "180px", lg: "190px" },
              height: { xs: "40px", md: "42px", lg: "45px" },
              borderRadius: "100px",
              border: "1px solid #FFA900",
              fontSize: { xs: "12px", md: "14px" },
            }}
            variant="outlined"
          >
            {t("a10")}
          </Button>
        </div>
      </div>

      <h1 className="text-center text-[#111827] dark:text-white font-bold text-2xl md:text-3xl lg:text-[40px] mt-[-140px] md:mt-[-120px] lg:mt-[-200px] px-4">
        {t("a11")}
      </h1>
      <hr className="bg-[#FFA900] w-[20%] md:w-[12%] lg:w-[8%] mx-auto mt-[15px] md:mt-[20px] lg:mt-[30px] h-[4px] md:h-[5px] lg:h-[7px] rounded-2xl border-none" />
      <h1 className="text-center dark:text-white text-[#111827] w-[90%] md:w-[85%] lg:w-[80%] mx-auto mt-[15px] md:mt-[18px] lg:mt-[20px] font-semibold text-base md:text-lg lg:text-[20px] px-4">
        {t("a12")}
      </h1>

      <div className="flex flex-col lg:flex-row justify-around gap-6 md:gap-8 px-4 md:px-8 lg:ml-[4%] mt-[40px] md:mt-[60px] lg:mt-[80px]">
        <div className="w-full lg:w-[48%]">
          <h1 className="font-bold text-[#FFA900] text-lg md:text-xl lg:text-[23px] mt-[15px] md:mt-[18px] lg:mt-[20px] ml-[10px] md:ml-[15px] lg:ml-[20px]">
            {t("a13")}
          </h1>
          <h1 className="border px-3 md:px-4 py-3 md:py-4 w-full lg:w-[95%] rounded-xl md:rounded-2xl border-gray-300 leading-[22px] md:leading-[25px] lg:leading-[27px] mt-[15px] md:mt-[18px] lg:mt-[20px] text-sm md:text-base">
            {t("a14")}
          </h1>
          <h1 className="font-bold text-[#FFA900] text-lg md:text-xl lg:text-[23px] mt-[15px] md:mt-[18px] lg:mt-[20px] ml-[10px] md:ml-[15px] lg:ml-[20px]">
            {t("a15")}
          </h1>

          <div className="border px-3 md:px-4  py-3 md:py-4 w-full lg:w-[95%]  md:leading-12 lg:leading-14 rounded-xl md:rounded-2xl border-gray-300 min-h-[180px] md:min-h-[190px] lg:h-[200px] mt-[15px] md:mt-[18px] lg:mt-[20px]">
            <div className="flex gap-[8px] md:gap-[10px] mt-[20px] items-center">
              <MapsHomeWorkOutlinedIcon sx={{ fontSize: { xs: "20px", md: "22px", lg: "24px" } }} />
              <h1 className="text-[#111827] dark:text-white font-bold text-sm md:text-base">{t("a16")}</h1>
            </div>

            <div className="flex gap-[8px] md:gap-[10px] mt-[20px] items-center">
              <BusinessCenterOutlinedIcon sx={{ fontSize: { xs: "20px", md: "22px", lg: "24px" } }} />
              <h1 className="text-[#111827] dark:text-white font-bold text-sm md:text-base">{t("a17")}</h1>
            </div>

            <div className="flex gap-[8px] md:gap-[10px] mt-[20px] items-center">
              <ContactPageOutlinedIcon sx={{ fontSize: { xs: "20px", md: "22px", lg: "24px" } }} />
              <h1 className="text-[#111827] dark:text-white font-bold text-sm md:text-base">{t("a18")}</h1>
            </div>
          </div>

          <h1 className="w-full lg:w-[90%] dark:text-white mt-[15px] md:mt-[18px] lg:mt-[20px] leading-6 md:leading-7 text-[#111827] font-bold text-sm md:text-base">
            {t("a19")}
          </h1>
        </div>

        <div className="w-full lg:w-[48%]">
          <Image
            src="/image/unsplash_U2BI3GMnSSE.png"
            alt="Slide 3"
            width={1400}
            height={100}
            className="rounded-xl md:rounded-2xl w-full lg:w-[95%] h-[250px] md:h-[320px] lg:h-[400px] transform transition duration-500 hover:scale-105 hover:shadow-xl"
          />

          <div className="flex gap-[15px] md:gap-[20px] lg:gap-[30px] mt-[15px] md:mt-[18px] lg:mt-[20px]">
            <Image
              src="/image/unsplash_pYlBAu3de0w.png"
              alt="Slide 3"
              width={1400}
              height={100}
              className="rounded-xl md:rounded-2xl w-[60%] md:w-[58%] lg:w-[55%] h-[150px] md:h-[200px] lg:h-[240px] transform transition duration-500 hover:scale-105 hover:shadow-lg"
            />
            <Image
              src="/image/unsplash_nC6CyrVBtkU.png"
              alt="Slide 3"
              width={1400}
              height={100}
              className="rounded-xl md:rounded-2xl w-[38%] md:w-[38%] lg:w-[35%] h-[150px] md:h-[200px] lg:h-[240px] transform transition duration-500 hover:scale-105 hover:shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-around gap-6 md:gap-8 px-4 md:px-8 mt-[40px] md:mt-[60px] lg:mt-[80px]">
        <div className="w-full lg:ml-[1%]">
          <div className="w-full lg:w-[93%] flex gap-[15px] md:gap-[20px] min-h-[140px] md:min-h-[155px] lg:h-[165px] shadow-2xl rounded-xl md:rounded-2xl pl-[30px] md:pl-[45px] lg:pl-[60px] pt-[15px] md:pt-[18px] lg:pt-[20px] bg-gray-50">
            <AccessTimeIcon
              className="px-2 py-2 mt-[10px] md:mt-[12px] lg:mt-[15px]"
              sx={{
                fontSize: { xs: "35px", md: "40px", lg: "45px" },
                borderRadius: "10px",
                backgroundColor: "#0000000D",
              }}
            />
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-[35px] font-bold text-[#111827]">{t("a29")}</h1>
              <h1 className="text-[#6B7280] text-sm md:text-base lg:text-[18px] w-[85%] md:w-[75%] lg:w-[70%]">
                {t("a30")}
              </h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-[15px] md:gap-[20px] mt-[20px] md:mt-[25px] lg:mt-[30px]">
            <div className="w-full md:w-[48%] lg:w-[45%] min-h-[250px] md:min-h-[280px] lg:h-[300px] bg-gray-50 pt-[15px] md:pt-[18px] lg:pt-[20px] pl-[10px] shadow-2xl rounded-xl md:rounded-2xl">
              <PeopleIcon
                className="px-2 py-2 mt-[20px] md:mt-[22px] lg:mt-[25px] ml-[20px] md:ml-[25px] lg:ml-[30px]"
                sx={{
                  fontSize: { xs: "45px", md: "50px", lg: "55px" },
                  borderRadius: "10px",
                  backgroundColor: "#0000000D",
                }}
              />
              <h1 className="text-3xl md:text-[35px] lg:text-[40px] text-[#111827] font-bold mt-[12px] md:mt-[13px] lg:mt-[15px] ml-[20px] md:ml-[25px] lg:ml-[30px]">
                300
              </h1>
              <h1 className="text-[#6B7280] text-base md:text-[17px] lg:text-[18px] w-[60%] md:w-[55%] lg:w-[50%] ml-[20px] md:ml-[25px] lg:ml-[30px]">
                {t("a31")}
              </h1>
            </div>

            <div className="w-full md:w-[48%] lg:w-[45%] min-h-[250px] md:min-h-[280px] lg:h-[300px] bg-gray-50 pt-[15px] md:pt-[18px] lg:pt-[20px] pl-[10px] shadow-2xl rounded-xl md:rounded-2xl">
              <LocalShippingIcon
                className="px-2 py-2 mt-[20px] md:mt-[22px] lg:mt-[25px] ml-[20px] md:ml-[25px] lg:ml-[30px]"
                sx={{
                  fontSize: { xs: "45px", md: "50px", lg: "55px" },
                  borderRadius: "10px",
                  backgroundColor: "#0000000D",
                }}
              />
              <h1 className="text-3xl md:text-[35px] lg:text-[40px] text-[#111827] font-bold mt-[12px] md:mt-[13px] lg:mt-[15px] ml-[20px] md:ml-[25px] lg:ml-[30px]">
                500
              </h1>
              <h1 className="text-[#6B7280] text-base md:text-[17px] lg:text-[18px] w-[60%] md:w-[55%] lg:w-[50%] ml-[20px] md:ml-[25px] lg:ml-[30px]">
                {t("a31")}
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[60%] min-h-[450px] md:min-h-[480px] lg:h-[500px] bg-gray-50 rounded-xl md:rounded-2xl shadow-2xl pb-6">
          <h1 className="text-center text-xl md:text-2xl text-[#111827] font-bold pt-[15px] md:pt-[18px] lg:pt-[20px] px-4">
            {t("a33")}
          </h1>

          <div className="flex flex-col md:flex-row gap-[15px] md:gap-[20px] mt-[30px] md:mt-[35px] lg:mt-[40px] px-4 md:px-6 lg:ml-[8%]">
            <div className="w-full md:w-[48%] lg:w-[45%] min-h-[120px] md:min-h-[125px] lg:h-[130px] text-center pt-[15px] md:pt-[18px] lg:pt-[20px] rounded-xl md:rounded-2xl shadow bg-[#f6f6f65f]">
              <LocationOnIcon sx={{ fontSize: { xs: "28px", md: "32px", lg: "35px" } }} />{" "}
              <span className="text-sm md:text-base">{t("a34")}</span>
              <h1 className="text-[#6B7280] mt-[6px] md:mt-[7px] lg:mt-[8px] text-sm md:text-base">+992 88 888 0101</h1>
              <h1 className="text-[#6B7280] text-sm md:text-base">{t("a35")}</h1>
            </div>
            <div className="w-full md:w-[48%] lg:w-[45%] min-h-[120px] md:min-h-[125px] lg:h-[130px] text-center pt-[15px] md:pt-[18px] lg:pt-[20px] rounded-xl md:rounded-2xl shadow bg-[#f6f6f65f]">
              <LocationOnIcon sx={{ fontSize: { xs: "28px", md: "32px", lg: "35px" } }} />{" "}
              <span className="text-sm md:text-base">{t("a36")}</span>
              <h1 className="text-[#6B7280] mt-[6px] md:mt-[7px] lg:mt-[8px] text-sm md:text-base">+992 88 888 0101</h1>
              <h1 className="text-[#6B7280] text-sm md:text-base">{t("a37")}</h1>
            </div>
          </div>

          <h1 className="text-[#111827] text-center font-serif text-base md:text-[18px] lg:text-[19px] mt-[40px] md:mt-[50px] lg:mt-[60px] px-4">
            {t("a38")}
          </h1>

          <div className="flex flex-wrap justify-center gap-[10px] md:gap-[15px] mt-[30px] md:mt-[35px] lg:mt-[40px] px-4">
            <div className="w-[calc(50%-5px)] md:w-[160px] lg:w-[190px] h-[40px] md:h-[42px] lg:h-[45px] text-center pt-[8px] md:pt-[9px] lg:pt-[10px] bg-[#f6f6f65f] shadow rounded-xl md:rounded-2xl text-xs md:text-sm lg:text-base">
              {t("a39")}
            </div>
            <div className="w-[calc(50%-5px)] md:w-[160px] lg:w-[190px] h-[40px] md:h-[42px] lg:h-[45px] text-center pt-[8px] md:pt-[9px] lg:pt-[10px] bg-[#f6f6f65f] shadow rounded-xl md:rounded-2xl text-xs md:text-sm lg:text-base">
              {t("a40")}
            </div>
            <div className="w-[calc(50%-5px)] md:w-[160px] lg:w-[190px] h-[40px] md:h-[42px] lg:h-[45px] text-center pt-[8px] md:pt-[9px] lg:pt-[10px] bg-[#f6f6f65f] shadow rounded-xl md:rounded-2xl text-xs md:text-sm lg:text-base">
              {t("a41")}
            </div>
            <div className="w-[calc(50%-5px)] md:w-[160px] lg:w-[190px] h-[40px] md:h-[42px] lg:h-[45px] text-center pt-[8px] md:pt-[9px] lg:pt-[10px] bg-[#f6f6f65f] shadow rounded-xl md:rounded-2xl text-xs md:text-sm lg:text-base">
              {t("a42")}
            </div>
        
          </div>
        </div>
      </div>

      <h1 className="text-center dark:text-white text-[#111827] font-bold text-2xl md:text-3xl lg:text-[40px] mt-[60px] md:mt-[80px] lg:mt-[100px] px-4">
        {t("a20")}
      </h1>
      <hr className="bg-[#FFA900] w-[20%] md:w-[12%] lg:w-[8%] mx-auto mt-[15px] md:mt-[20px] lg:mt-[30px] h-[4px] md:h-[5px] lg:h-[7px] rounded-2xl border-none" />

      <div className="flex flex-col lg:flex-row justify-around gap-6 md:gap-8 px-4 md:px-8 mt-[30px] md:mt-[35px] lg:mt-[40px]">
        <div className="w-full lg:w-[30%]">
          <div>
            <Image
              src="/image/Headings.png"
              alt="Slide 3"
              width={1400}
              height={100}
              className="w-[80px] md:w-[90px] lg:w-[100px] h-[28px] md:h-[32px] lg:h-[35px]"
            />

            <div className="flex gap-[8px] md:gap-[10px]">
              <div className="flex gap-[6px] md:gap-[8px] lg:gap-[10px]">
                <h1 className="text-[#111827] font-bold dark:text-white text-2xl md:text-[28px] lg:text-[30px]">
                  2170
                </h1>
                <span className="mt-[10px] md:mt-[12px] lg:mt-[15px] text-sm md:text-base">АКБ</span>
              </div>
              <div className="flex gap-[6px] md:gap-[8px] lg:gap-[10px]">
                <h1 className="text-[#111827] font-bold dark:text-white text-2xl md:text-[28px] lg:text-[30px]">
                  2110
                </h1>
                <span className="mt-[10px] md:mt-[12px] lg:mt-[15px] text-sm md:text-base">ОКБ</span>
              </div>
            </div>
          </div>
          <hr className="bg-[#FFA900] w-[15%] mt-[20px] md:mt-[25px] lg:mt-[30px] h-[2px] rounded-2xl border-none" />

          <div className="mt-[20px] md:mt-[25px] lg:mt-[30px]">
            <Image
              src="/image/Headings (1).png"
              alt="Slide 3"
              width={1400}
              height={100}
              className="w-[120px] md:w-[135px] lg:w-[150px] h-[24px] md:h-[27px] lg:h-[30px]"
            />

            <div className="flex gap-[8px] md:gap-[10px]">
              <div className="flex gap-[6px] md:gap-[8px] lg:gap-[10px]">
                <h1 className="text-[#111827] font-bold text-2xl md:text-[28px] lg:text-[30px] dark:text-white">
                  2170
                </h1>
                <span className="mt-[10px] md:mt-[12px] lg:mt-[15px] text-sm md:text-base">АКБ</span>
              </div>
              <div className="flex gap-[6px] md:gap-[8px] lg:gap-[10px]">
                <h1 className="text-[#111827] font-bold text-2xl md:text-[28px] lg:text-[30px] dark:text-white">
                  2110
                </h1>
                <span className="mt-[10px] md:mt-[12px] lg:mt-[15px] text-sm md:text-base">ОКБ</span>
              </div>
            </div>
          </div>
          <hr className="bg-[#FFA900] w-[15%] mt-[20px] md:mt-[25px] lg:mt-[30px] h-[2px] rounded-2xl border-none" />

          <div className="mt-[20px] md:mt-[25px] lg:mt-[30px]">
            <Image
              src="/image/Headings (2).png"
              alt="Slide 3"
              width={1400}
              height={100}
              className="w-[80px] md:w-[90px] lg:w-[100px] h-[24px] md:h-[27px] lg:h-[30px]"
            />

            <div className="flex gap-[8px] md:gap-[10px]">
              <div className="flex gap-[6px] md:gap-[8px] lg:gap-[10px]">
                <h1 className="text-[#111827] font-bold text-2xl md:text-[28px] lg:text-[30px] dark:text-white">220</h1>
                <span className="mt-[10px] md:mt-[12px] lg:mt-[15px] text-sm md:text-base">АКБ</span>
              </div>
              <div className="flex gap-[6px] md:gap-[8px] lg:gap-[10px]">
                <h1 className="text-[#111827] font-bold text-2xl md:text-[28px] lg:text-[30px] dark:text-white">360</h1>
                <span className="mt-[10px] md:mt-[12px] lg:mt-[15px] text-sm md:text-base">ОКБ</span>
              </div>
            </div>
          </div>
          <hr className="bg-[#FFA900] w-[15%] mt-[20px] md:mt-[25px] lg:mt-[30px] h-[2px] rounded-2xl border-none" />
        </div>

        <Image
          src="/image/Group 2.png"
          alt="Slide 3"
          width={1400}
          height={100}
          className="w-full lg:w-[650px] h-[300px] md:h-[400px] lg:h-[500px]"
        />
      </div>

      <h1 className="text-center dark:text-white text-[#111827] font-bold text-2xl md:text-3xl lg:text-[40px] mt-[40px] md:mt-[45px] lg:mt-[50px] px-4">
        {t("a21")}
      </h1>
      <hr className="bg-[#FFA900] w-[20%] md:w-[12%] lg:w-[8%] mx-auto mt-[15px] md:mt-[20px] lg:mt-[30px] h-[4px] md:h-[5px] lg:h-[7px] rounded-2xl border-none" />

      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 lg:gap-8 mt-[40px] md:mt-[60px] lg:mt-[80px] px-4 max-w-7xl mx-auto">
        <div className="w-full md:w-[48%] min-h-[180px] md:min-h-[190px] lg:min-h-[200px] bg-gray-100 dark:text-gray-900 rounded-xl md:rounded-2xl lg:rounded-3xl shadow p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center text-center">
          <HomeFilledIcon sx={{ color: "#FFA900", fontSize: { xs: "32px", md: "38px", lg: "45px" } }} />
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold mt-2 md:mt-2.5 lg:mt-3">15 000 кв.м</h1>
          <h1 className="text-xs md:text-sm lg:text-base mt-1.5 md:mt-2">{t("a22")}</h1>
        </div>

        <div className="w-full md:w-[48%] min-h-[180px] md:min-h-[190px] lg:min-h-[200px] bg-gray-100 dark:text-gray-900 rounded-xl md:rounded-2xl lg:rounded-3xl shadow p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center text-center">
          <HomeFilledIcon sx={{ color: "#FFA900", fontSize: { xs: "32px", md: "38px", lg: "45px" } }} />
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold mt-2 md:mt-2.5 lg:mt-3">15 000 кв.м</h1>
          <h1 className="text-xs md:text-sm lg:text-base mt-1.5 md:mt-2">{t("a22")}</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around gap-4 md:gap-6 px-4 md:px-8 mt-[30px] md:mt-[35px] lg:mt-[40px]">
        <div className="w-full md:w-[32%] lg:w-[28%] flex rounded-xl md:rounded-2xl shadow justify-around items-center min-h-[130px] md:min-h-[140px] lg:h-[150px] bg-gray-100">
          <div>
            <h1 className="text-[#111827] font-bold text-2xl md:text-[28px] lg:text-[30px]">8 000+</h1>
            <h1 className="text-sm md:text-base">{t("a23")}</h1>
          </div>
          <PeopleIcon sx={{ color: "#FFA900", fontSize: { xs: "40px", md: "45px", lg: "50px" } }} />
        </div>

        <div className="w-full md:w-[32%] lg:w-[28%] flex rounded-xl md:rounded-2xl shadow justify-around items-center min-h-[130px] md:min-h-[140px] lg:h-[150px] bg-gray-100">
          <div>
            <h1 className="text-[#111827] font-bold text-2xl md:text-[28px] lg:text-[30px]">5+</h1>
            <h1 className="text-sm md:text-base">{t("a24")}</h1>
          </div>
          <HandshakeIcon sx={{ color: "#FFA900", fontSize: { xs: "40px", md: "45px", lg: "50px" } }} />
        </div>

        <div className="w-full md:w-[32%] lg:w-[28%] flex rounded-xl md:rounded-2xl shadow justify-around items-center min-h-[130px] md:min-h-[140px] lg:h-[150px] bg-gray-100">
          <div>
            <h1 className="text-[#111827] font-bold text-2xl md:text-[28px] lg:text-[30px]">47+</h1>
            <h1 className="text-sm md:text-base">{t("a25")}</h1>
          </div>
          <MapIcon sx={{ color: "#FFA900", fontSize: { xs: "40px", md: "45px", lg: "50px" } }} />
        </div>
      </div>

      <div className="w-[96%] md:w-[98%] rounded-xl md:rounded-2xl ml-[2%] md:ml-[1%] mt-[40px] md:mt-[45px] lg:mt-[50px] bg-[#111827] min-h-[400px] md:min-h-[440px] lg:h-[480px] pb-6">
        <h1 className="text-center text-white font-bold pt-[20px] md:pt-[25px] lg:pt-[30px] text-2xl md:text-[28px] lg:text-[30px] px-4">
          {t("a26")}
        </h1>
        <hr className="bg-[#FFA900] w-[20%] md:w-[12%] lg:w-[8%] mx-auto mt-[20px] md:mt-[25px] lg:mt-[30px] h-[3px] md:h-[3.5px] lg:h-[4px] rounded-2xl border-none" />
        <h1 className="text-center text-[#ffffffac] mt-[15px] md:mt-[18px] lg:mt-[20px] mx-auto w-[85%] md:w-[65%] lg:w-[48%] leading-6 md:leading-7 lg:leading-8 pt-[15px] md:pt-[18px] lg:pt-[20px] text-base md:text-lg lg:text-[20px] px-4">
          {t("a27")}
        </h1>
        <h1 className="text-center font-bold mt-[35px] md:mt-[42px] lg:mt-[50px] text-gray-300 text-sm md:text-base px-4">
          {t("a28")}
        </h1>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mt-[35px] md:mt-[42px] lg:mt-[50px] px-4">
          <Image
            src="/image/Frame 1261154819.png"
            width={100}
            height={100}
            className="w-[140px] md:w-[180px] lg:w-[220px]"
            alt="..."
          />
          <Image
            src="/image/Frame 1261154823.png"
            width={100}
            height={100}
            className="w-[140px] md:w-[180px] lg:w-[220px]"
            alt="..."
          />
          <Image
            src="/image/Frame 1261154822.png"
            width={100}
            height={100}
            className="w-[140px] md:w-[180px] lg:w-[220px]"
            alt="..."
          />
          <Image
            src="/image/Frame 1261154821.png"
            width={100}
            height={100}
            className="w-[140px] md:w-[180px] lg:w-[220px]"
            alt="..."
          />
          <Image
            src="/image/image 16.png"
            width={100}
            height={100}
            className="w-[140px] md:w-[180px] lg:w-[220px]"
            alt="..."
          />
        </div>
      </div>

      <h1 className="text-center dark:text-white text-[#111827] font-bold text-2xl md:text-3xl lg:text-[40px] mt-[60px] md:mt-[75px] lg:mt-[90px] px-4">
        {t("a46")}
      </h1>
      <hr className="bg-[#FFA900] w-[20%] md:w-[12%] lg:w-[8%] mx-auto mt-[15px] md:mt-[20px] lg:mt-[30px] h-[4px] md:h-[5px] lg:h-[7px] rounded-2xl border-none" />

      <div className="flex flex-col md:flex-row justify-around gap-6 md:gap-8 px-4 md:px-8 mt-[40px] md:mt-[45px] lg:mt-[50px]">
        <div className="w-full md:w-[48%] lg:w-[26%] transform transition duration-500 hover:scale-105 hover:shadow-lg min-h-[360px] md:min-h-[375px] lg:h-[390px] shadow-2xl bg-gray-50 rounded-xl md:rounded-2xl">
          <Image
            src="/image/image 19.png"
            alt="Slide 3"
            width={1400}
            height={100}
            className="rounded-t-xl md:rounded-t-2xl w-full h-[180px] md:h-[190px] lg:h-[200px]"
          />
          <h1 className="text-[#111827] font-bold text-lg md:text-xl mt-[8px] md:mt-[9px] lg:mt-[10px] ml-[10px] px-2">
            {t("a47")}
          </h1>
          <h1 className="text-[#4B5563] ml-[10px] mt-[10px] md:mt-[11px] lg:mt-[13px] leading-6 md:leading-7 px-2 text-sm md:text-base">
            {t("a48")}
          </h1>
          <button className="text-[#FFA900] ml-[15px] mt-[20px] md:mt-[25px] lg:mt-[30px] text-sm md:text-base">
            {t("a49")}
          </button>
        </div>

        <div className="w-full md:w-[48%] lg:w-[26%] transform transition duration-500 hover:scale-105 hover:shadow-lg min-h-[360px] md:min-h-[375px] lg:h-[390px] shadow-2xl bg-gray-50 rounded-xl md:rounded-2xl">
          <Image
            src="/image/image (47).png"
            alt="Slide 3"
            width={1400}
            height={100}
            className="rounded-t-xl md:rounded-t-2xl w-full h-[180px] md:h-[190px] lg:h-[200px]"
          />
          <h1 className="text-[#111827] font-bold text-lg md:text-xl mt-[8px] md:mt-[9px] lg:mt-[10px] ml-[10px] px-2">
            {t("a47")}
          </h1>
          <h1 className="text-[#4B5563] ml-[10px] mt-[10px] md:mt-[11px] lg:mt-[13px] leading-6 md:leading-7 px-2 text-sm md:text-base">
            {t("a48")}
          </h1>
          <button className="text-[#FFA900] ml-[15px] mt-[20px] md:mt-[25px] lg:mt-[30px] text-sm md:text-base">
            {t("a49")}
          </button>
        </div>

        <div className="w-full md:hidden lg:block lg:w-[26%] transform transition duration-500 hover:scale-105 hover:shadow-lg min-h-[360px] md:min-h-[375px] lg:h-[390px] shadow-2xl bg-gray-50 rounded-xl md:rounded-2xl">
          <Image
            src="/image/image (48).png"
            alt="Slide 3"
            width={1400}
            height={100}
            className="rounded-t-xl md:rounded-t-2xl w-full h-[180px] md:h-[190px] lg:h-[200px]"
          />
          <h1 className="text-[#111827] font-bold text-lg md:text-xl mt-[8px] md:mt-[9px] lg:mt-[10px] ml-[10px] px-2">
            {t("a47")}
          </h1>
          <h1 className="text-[#4B5563] ml-[10px] mt-[10px] md:mt-[11px] lg:mt-[13px] leading-6 md:leading-7 px-2 text-sm md:text-base">
            {t("a48")}
          </h1>
          <button className="text-[#FFA900] ml-[15px] mt-[20px] md:mt-[25px] lg:mt-[30px] text-sm md:text-base">
            {t("a49")}
          </button>
        </div>
      </div>

      <Link href="/news" passHref>
        <div className="text-center">
          <Button
            sx={{
              backgroundColor: "#FFA900",
              marginTop: { xs: "35px", md: "42px", lg: "50px" },
              width: { xs: "170px", md: "185px", lg: "200px" },
              height: { xs: "40px", md: "42px", lg: "45px" },
              borderRadius: "30px",
              fontSize: { xs: "13px", md: "14px" },
            }}
            variant="contained"
          >
            {t("a50")}
          </Button>
        </div>
      </Link>
      

      <h1 className="text-center dark:text-white text-[#111827] font-bold text-2xl md:text-3xl lg:text-[40px] mt-[60px] md:mt-[75px] lg:mt-[90px] px-4">
        {t("a51")}
      </h1>
      <hr className="bg-[#FFA900] w-[20%] md:w-[12%] lg:w-[8%] mx-auto mt-[15px] md:mt-[20px] lg:mt-[30px] h-[4px] md:h-[5px] lg:h-[7px] rounded-2xl border-none" />

      <div className="flex flex-col md:flex-row justify-around gap-6 md:gap-8 px-4 md:px-8 mt-[40px] md:mt-[45px] lg:mt-[50px]">
        <div className="w-full md:w-[48%] lg:w-[32%] min-h-[210px] md:min-h-[220px] lg:h-[230px] transform transition duration-500 hover:scale-105 hover:shadow-lg rounded-xl md:rounded-2xl border border-gray-200 shadow-2xl">
          <div className="flex flex-col md:flex-row mt-[12px] md:mt-[15px] gap-2 md:gap-0 px-4 md:px-0">
            <div className="bg-[#111827] flex justify-center items-center md:ml-[25px] w-full md:w-[160px] lg:w-[185px] text-center rounded px-0.5 py-0.5 text-white text-sm md:text-base">
              <h1>{t("a52")}</h1>
            </div>
            <div className="md:ml-auto md:mr-[25px] flex items-center gap-1">
              <LocationOnIcon sx={{ fontSize: { xs: "20px", md: "22px", lg: "24px" } }} />{" "}
              <span className="text-sm md:text-base">{t("a34")}</span>
            </div>
          </div>
          <h1 className="text-[#111827] font-bold text-sm md:text-[15px] lg:text-[16px] mt-[18px] md:mt-[20px] lg:mt-[22px] ml-[20px] md:ml-[25px] px-2">
            {t("a53")}
          </h1>
          <h1 className="text-[#4B5563] text-sm md:text-[15px] lg:text-[16px] mt-[14px] md:mt-[16px] lg:mt-[18px] ml-[20px] md:ml-[25px] px-2">
            {t("a54")}
          </h1>
          <button className="text-[#FFA900] ml-[20px] md:ml-[25px] mt-[8px] md:mt-[9px] lg:mt-[10px] text-sm md:text-base">
            {t("a49")}
          </button>
        </div>

        <div className="w-full md:w-[48%] lg:w-[32%] min-h-[210px] md:min-h-[220px] lg:h-[230px] transform transition duration-500 hover:scale-105 hover:shadow-lg rounded-xl md:rounded-2xl border border-gray-200 shadow-2xl">
          <div className="flex flex-col md:flex-row mt-[12px] md:mt-[15px] gap-2 md:gap-0 px-4 md:px-0">
            <div className="bg-[#111827] flex justify-center items-center md:ml-[25px] w-full md:w-[160px] lg:w-[185px] text-center rounded px-0.5 py-0.5 text-white text-sm md:text-base">
              <h1>{t("a52")}</h1>
            </div>
            <div className="md:ml-auto md:mr-[25px] flex items-center gap-1">
              <LocationOnIcon sx={{ fontSize: { xs: "20px", md: "22px", lg: "24px" } }} />{" "}
              <span className="text-sm md:text-base">{t("a36")}</span>
            </div>
          </div>
          <h1 className="text-[#111827] font-bold text-sm md:text-[15px] lg:text-[16px] mt-[18px] md:mt-[20px] lg:mt-[22px] ml-[20px] md:ml-[25px] px-2">
            {t("a53")}
          </h1>
          <h1 className="text-[#4B5563] text-sm md:text-[15px] lg:text-[16px] mt-[14px] md:mt-[16px] lg:mt-[18px] ml-[20px] md:ml-[25px] px-2">
            {t("a54")}
          </h1>
          <button className="text-[#FFA900] ml-[20px] md:ml-[25px] mt-[8px] md:mt-[9px] lg:mt-[10px] text-sm md:text-base">
            {t("a49")}
          </button>
        </div>

        <div className="w-full md:hidden lg:block lg:w-[32%] min-h-[210px] md:min-h-[220px] lg:h-[230px] transform transition duration-500 hover:scale-105 hover:shadow-lg rounded-xl md:rounded-2xl border border-gray-200 shadow-2xl">
          <div className="flex flex-col md:flex-row mt-[12px] md:mt-[15px] gap-2 md:gap-0 px-4 md:px-0">
            <div className="bg-[#111827] flex justify-center items-center md:ml-[25px] w-full md:w-[160px] lg:w-[185px] text-center rounded px-0.5 py-0.5 text-white text-sm md:text-base">
              <h1>{t("a52")}</h1>
            </div>
            <div className="md:ml-auto md:mr-[25px] flex items-center gap-1">
              <LocationOnIcon sx={{ fontSize: { xs: "20px", md: "22px", lg: "24px" } }} />{" "}
              <span className="text-sm md:text-base">{t("a43")}</span>
            </div>
          </div>
          <h1 className="text-[#111827] font-bold text-sm md:text-[15px] lg:text-[16px] mt-[18px] md:mt-[20px] lg:mt-[22px] ml-[20px] md:ml-[25px] px-2">
            {t("a53")}
          </h1>
          <h1 className="text-[#4B5563] text-sm md:text-[15px] lg:text-[16px] mt-[14px] md:mt-[16px] lg:mt-[18px] ml-[20px] md:ml-[25px] px-2">
            {t("a54")}
          </h1>
          <button className="text-[#FFA900] ml-[20px] md:ml-[25px] mt-[8px] md:mt-[9px] lg:mt-[10px] text-sm md:text-base">
            {t("a49")}
          </button>
        </div>
      </div>

      <div className="text-center">
        <Button
          sx={{
            backgroundColor: "#FFA900",
            marginTop: { xs: "50px", md: "60px", lg: "70px" },
            width: { xs: "170px", md: "185px", lg: "200px" },
            height: { xs: "40px", md: "42px", lg: "45px" },
            borderRadius: "30px",
            fontSize: { xs: "13px", md: "14px" },
          }}
          variant="contained"
        >
          {t("a55")}
        </Button>
      </div>




<div className="w-[96%] md:w-[92%] lg:w-[90%] flex flex-col lg:flex-row justify-between mx-auto rounded-2xl mt-10 bg-gray-100 pb-6 lg:pb-0 shadow-lg overflow-hidden
  min-h-[850px] lg:min-h-[530px]">  
  <div className="pt-6 px-4 md:px-6 w-full lg:w-1/2 flex flex-col">
    <h1 className="text-gray-900 font-extrabold text-2xl md:text-3xl lg:text-4xl text-center lg:text-left">
      {t("a56")}
    </h1>

    <input
      type="text"
      placeholder={t("a6")}
      className="mt-4 h-11 md:h-12 lg:h-12 w-full md:w-[500px] lg:w-[450px] px-4 rounded-xl border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300 placeholder-gray-400 text-base"
    />

    <input
      type="text"
      placeholder="Название компании"
      className="mt-4 h-11 md:h-12 lg:h-12 w-full md:w-[500px] lg:w-[450px] px-4 rounded-xl border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300 placeholder-gray-400 text-base"
    />

    <div className="flex flex-col md:flex-row gap-4 mt-4">
      <input
        type="text"
        placeholder="Email"
        className="h-11 md:h-12 lg:h-12 w-full md:w-[245px] lg:w-[220px] px-4 rounded-xl border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300 placeholder-gray-400 text-base"
      />
      <input
        type="text"
        placeholder="Телефон"
        className="h-11 md:h-12 lg:h-12 w-full md:w-[245px] lg:w-[220px] px-4 rounded-xl border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300 placeholder-gray-400 text-base"
      />
    </div>

    <label
      htmlFor="proposal-upload"
      className="flex items-center justify-center mt-6 h-11 md:h-12 lg:h-12 w-full md:w-[500px] lg:w-[450px] bg-white border border-gray-300 rounded-xl shadow-sm px-4 cursor-pointer transition duration-300 hover:border-blue-500 hover:ring-2 hover:ring-blue-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-yellow-500 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4"
        />
      </svg>
      <span className="text-gray-700 text-sm">Загрузить предложение</span>
    </label>
    <input id="proposal-upload" type="file" className="hidden" accept=".pdf,.doc,.docx" />

 
    <Button
      sx={{
        backgroundColor: "#1E293B",
        width: { xs: "100%", md: "500px", lg: "450px" },
        height: { xs: "40px", md: "42px", lg: "45px" },
        borderRadius: "25px",
        textTransform: "none",
        fontSize: { xs: "13px", md: "14px" },
        mt: 4
      }}
      variant="contained"
    >
      {t("a57")}
    </Button>
  </div>


  <div className="w-full lg:w-1/2 px-4 md:px-6 mt-6 lg:mt-0 flex flex-col items-center lg:items-start">
    <Image
      src="/image/Frame 1261154859.png"
      alt="Slide 3"
      width={600}
      height={400}
      className="w-full md:w-[550px] lg:w-[600px] h-[250px] md:h-[350px] lg:h-[400px] rounded-xl shadow-lg object-cover"
    />

    <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center lg:justify-start">
      <div className="w-full md:w-[250px] lg:w-[270px] h-11 md:h-12 flex items-center justify-center bg-gray-200 rounded-xl shadow gap-2 px-4">
        <EmailIcon sx={{ fontSize: { xs: 18, md: 20, lg: 22 } }} />
        <span className="text-sm md:text-base">contact@company.com</span>
      </div>
      <div className="w-full md:w-[250px] lg:w-[270px] h-11 md:h-12 flex items-center justify-center bg-gray-200 rounded-xl shadow gap-2 px-4">
        <EmailIcon sx={{ fontSize: { xs: 18, md: 20, lg: 22 } }} />
        <span className="text-sm md:text-base">contact@company.com</span>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

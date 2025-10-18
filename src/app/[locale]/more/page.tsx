'use client'
import { useTranslations } from "next-intl"
import Button from '@mui/material/Button';
import Link from "next/link";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"

export default function MorePage() {
  const t = useTranslations("HomePage")

  return (
    <div className="dark:bg-gray-800 dark:text-white px-4 sm:px-6 lg:px-12">

   
      <h1 className="text-center font-bold text-xl sm:text-2xl lg:text-[40px] pt-8 sm:pt-12 lg:pt-[110px]">
        {t("a86")}
      </h1>
      <hr className="bg-[#FFA900] w-16 sm:w-20 lg:w-[8%] mx-auto mt-4 sm:mt-6 h-[6px] rounded-2xl border-none" />

      <div className="flex  flex-col lg:flex-row mt-8 lg:mt-16 gap-8">

      
        <div className="w-full dark:text-white lg:w-[75%] space-y-4 lg:space-y-6 text-[#111827]">

          <h1 className="font-bold text-lg sm:text-xl">{t("a64")}</h1>
          <h1 className="leading-7">{t("a87")}</h1>
          <h1 className="leading-7">{t("a88")}</h1>

          <div className="leading-8 mt-3 sm:mt-4 text-[15px] sm:text-[16px]">
            <h1 className="font-medium">{t("a89")}</h1>
            <h1 className="font-medium">{t("a90")}</h1>
            <h1 className="font-medium">{t("a91")}</h1>
            <h1 className="font-medium">{t("a92")}</h1>
            <h1 className="font-medium">{t("a93")}</h1>
            <h1 className="font-medium">{t("a94")}</h1>
            <h1 className="font-medium">{t("a95")}</h1>
          </div>

          <h1 className="font-bold text-lg sm:text-xl mt-6">{t("a96")}</h1>
          <div className="leading-8 mt-3 text-[15px] sm:text-[16px]">
            <h1 className="font-medium">{t("a97")}</h1>
            <h1 className="font-medium">{t("a98")}</h1>
            <h1 className="font-medium">{t("a99")}</h1>
            <h1 className="font-medium">{t("a100")}</h1>
            <h1 className="font-medium">{t("a102")}</h1>
            <h1 className="font-medium">{t("a103")}</h1>
          </div>

          <h1 className="font-bold text-lg sm:text-xl mt-6">{t("a104")}</h1>
          <h1 className="leading-7 mt-3 text-[16px]">{t("a105")}</h1>

          <h1 className="font-bold text-lg sm:text-xl mt-6">{t("a106")}</h1>
          <div className="leading-8 mt-3 text-[15px] sm:text-[16px]">
            {Array.from({ length: 9 }, (_, i) => (
              <h1 key={i} className="font-medium">{t(`a${107 + i}`)}</h1>
            ))}
          </div>

          <h1 className="font-bold text-lg sm:text-xl mt-6">{t("a116")}</h1>
          <div className="leading-8 mt-3 text-[15px] sm:text-[16px] font-medium">
            {Array.from({ length: 8 }, (_, i) => (
              <h1 key={i}>{t(`a${117 + i}`)}</h1>
            ))}
          </div>

          <h1 className="text-[17px] sm:text-[19px] mt-6 font-bold">{t("a125")}</h1>
        </div>

        {/* Правая карточка */}
        <div className="w-full sm:w-[70%] lg:w-[25%] mx-auto">
          <div className="rounded-3xl border border-[#E5E7EB] shadow-lg px-4 py-5 bg-white dark:bg-gray-900">
            <h1 className="text-center text-lg sm:text-xl font-bold">{t("a127")}</h1>
            <h1 className="text-[#4B5563] text-center mt-4 leading-6">{t("a128")}</h1>
            <div className="text-center mt-6">
              <Button
                sx={{
                  backgroundColor: '#FFA900',
                  borderRadius: '15px',
                  width: '170px',
                  height: '43px',
                  textTransform: 'none',
                  fontWeight: 500,
                }}
                variant="contained"
              >
                {t('a129')}
              </Button>
            </div>
          </div>
        </div>

      </div>


      <h1 className="text-center mb-[40px] font-bold text-xl sm:text-2xl lg:text-[40px] pt-12 sm:pt-16 lg:pt-[110px]">
        {t("a126")}
      </h1>
      <hr className="bg-[#FFA900] w-16 sm:w-20 lg:w-[8%] mx-auto mt-4 sm:mt-6 h-[6px] rounded-2xl border-none" />

   
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center lg:justify-around gap-6 mt-8">
        {[1, 2, 3].map((_, idx) => (
          <div
            key={idx}
            className="w-full max-w-md mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-3xl shadow-md p-6 bg-white dark:bg-gray-900"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <div className="bg-gray-900 text-white text-sm lg:text-base px-4 py-1 rounded-2xl font-medium">
                <h1>{t("a52")}</h1>
              </div>
              <div className="flex gap-2 items-center text-gray-600 dark:text-gray-300 text-sm lg:text-base">
                <LocationOnOutlinedIcon />
                <span>{t("a34")}</span>
              </div>
            </div>

            <h2 className="font-bold text-lg lg:text-xl mt-4">{t("a81")}</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed text-sm lg:text-base">
              {t("a82")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <Link href="/more">
                <Button
                  sx={{
                    backgroundColor: "#FFA900",
                    borderRadius: "20px",
                    textTransform: "none",
                    fontWeight: 500,
                    px: 3,
                  }}
                  variant="contained"
                >
                  {t("a83")}
                </Button>
              </Link>
              <Button
                sx={{
                  border: "1px solid #FFA900",
                  borderRadius: "20px",
                  backgroundColor: "white",
                  color: "#FFA900",
                  textTransform: "none",
                  fontWeight: 500,
                  px: 3,
                }}
                variant="contained"
              >
                {t("a84")}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

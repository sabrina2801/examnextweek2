"use client"

import { useTranslations } from "next-intl"
import Checkbox from "@mui/material/Checkbox"
import SearchIcon from "@mui/icons-material/Search"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import Button from "@mui/material/Button"
import Link from "next/link"

export default function CarerPage() {
  const t = useTranslations("HomePage")
  return (
    <div className="mt-16 lg:pt-14 px-4 lg:px-8 dark:bg-gray-800">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
       
        <div className="w-full lg:w-80">
          <h1 className="font-bold ml-2 text-gray-900 text-lg lg:text-xl">{t("a85")}</h1>

          <div className="w-full lg:w-[300px] leading-relaxed mt-6 lg:mt-8 p-4 bg-gray-50 shadow rounded-2xl">
            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a34")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a36")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a40")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a42")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a42")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a43")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a44")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a45")}</span>
            </div>
          </div>

          <hr className="bg-[#FFA900] w-20 lg:w-24 mt-5 ml-5 h-0.5 border-none" />

          <div className="w-full lg:w-[300px] leading-relaxed p-4 bg-gray-50 shadow rounded-2xl mt-4">
            <div className="mt-2">
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a71")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a72")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a73")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a74")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a75")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a76")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a77")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a78")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a79")}</span>
            </div>

            <div>
              <Checkbox
                sx={{ color: "#FFA900", "&.Mui-checked": { color: "#FFA900" }, "& .MuiSvgIcon-root": { fontSize: 25 } }}
              />
              <span className="text-sm lg:text-base">{t("a80")}</span>
            </div>
          </div>
        </div>

    
        <div className="w-full lg:flex-1">
          <div>
            <h1 className="font-bold text-gray-900 text-2xl lg:text-4xl mb-4 lg:mb-6">{t("a6")}</h1>

            <div className="flex gap-3 lg:gap-5 items-center">
              <input
                className="flex-1 h-12 lg:h-14 border-none rounded-3xl bg-gray-100 shadow pl-5"
                placeholder="Введите вакансию"
                type="text"
              />
              <SearchIcon
                className="px-2 py-2"
                sx={{
                  backgroundColor: "#FFA900",
                  color: "white",
                  width: "45px",
                  height: "45px",
                  borderRadius: "100px",
                }}
              />
            </div>

            <div className="w-full transform transition duration-500 hover:scale-105 hover:shadow-lg mt-6 lg:mt-8 rounded-3xl shadow-2xl p-4 lg:p-6 bg-gray-100">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div className="bg-gray-900 flex justify-center items-center w-full sm:w-auto px-4 py-1 rounded-2xl text-white text-sm lg:text-base">
                  <h1>{t("a52")}</h1>
                </div>

                <div className="flex gap-2 items-center">
                  <LocationOnOutlinedIcon className="text-gray-600" />
                  <span className="text-sm lg:text-base">{t("a34")}</span>
                </div>
              </div>

              <h1 className="font-bold text-lg lg:text-xl mt-3 lg:mt-4">{t("a81")}</h1>
              <h1 className="text-gray-600 mt-2 lg:mt-3 leading-relaxed text-sm lg:text-base">{t("a82")}</h1>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 mt-4 lg:mt-5">
             <Link href={'/more'}>
                <Button
                  sx={{ backgroundColor: "#FFA900", borderRadius: "20px", textTransform: "none" }}
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
                  }}
                  variant="contained"
                >
                  {t("a84")}
                </Button>
              </div>
            </div>

            <div className="w-full transform transition duration-500 hover:scale-105 hover:shadow-lg mt-6 lg:mt-12 rounded-3xl shadow-2xl p-4 lg:p-6 bg-gray-100">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div className="bg-gray-900 flex justify-center items-center w-full sm:w-auto px-4 py-1 rounded-2xl text-white text-sm lg:text-base">
                  <h1>{t("a52")}</h1>
                </div>

                <div className="flex gap-2 items-center">
                  <LocationOnOutlinedIcon className="text-gray-600" />
                  <span className="text-sm lg:text-base">{t("a34")}</span>
                </div>
              </div>

              <h1 className="font-bold text-lg lg:text-xl mt-3 lg:mt-4">{t("a81")}</h1>
              <h1 className="text-gray-600 mt-2 lg:mt-3 leading-relaxed text-sm lg:text-base">{t("a82")}</h1>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 mt-4 lg:mt-5">
                <Button
                  sx={{ backgroundColor: "#FFA900", borderRadius: "20px", textTransform: "none" }}
                  variant="contained"
                >
                  {t("a83")}
                </Button>
                <Button
                  sx={{
                    border: "1px solid #FFA900",
                    borderRadius: "20px",
                    backgroundColor: "white",
                    color: "#FFA900",
                    textTransform: "none",
                  }}
                  variant="contained"
                >
                  {t("a84")}
                </Button>
              </div>
            </div>

            <div className="w-full transform transition duration-500 hover:scale-105 hover:shadow-lg mt-6 lg:mt-12 rounded-3xl shadow-2xl p-4 lg:p-6 bg-gray-100">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div className="bg-gray-900 flex justify-center items-center w-full sm:w-auto px-4 py-1 rounded-2xl text-white text-sm lg:text-base">
                  <h1>{t("a52")}</h1>
                </div>

                <div className="flex gap-2 items-center">
                  <LocationOnOutlinedIcon className="text-gray-600" />
                  <span className="text-sm lg:text-base">{t("a34")}</span>
                </div>
              </div>

              <h1 className="font-bold text-lg lg:text-xl mt-3 lg:mt-4">{t("a81")}</h1>
              <h1 className="text-gray-600 mt-2 lg:mt-3 leading-relaxed text-sm lg:text-base">{t("a82")}</h1>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 mt-4 lg:mt-5">
                <Button
                  sx={{ backgroundColor: "#FFA900", borderRadius: "20px", textTransform: "none" }}
                  variant="contained"
                >
                  {t("a83")}
                </Button>
                <Button
                  sx={{
                    border: "1px solid #FFA900",
                    borderRadius: "20px",
                    backgroundColor: "white",
                    color: "#FFA900",
                    textTransform: "none",
                  }}
                  variant="contained"
                >
                  {t("a84")}
                </Button>
              </div>
            </div>

            <div className="w-full transform transition duration-500 hover:scale-105 hover:shadow-lg mt-6 lg:mt-12 rounded-3xl shadow-2xl p-4 lg:p-6 bg-gray-100">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div className="bg-gray-900 flex justify-center items-center w-full sm:w-auto px-4 py-1 rounded-2xl text-white text-sm lg:text-base">
                  <h1>{t("a52")}</h1>
                </div>

                <div className="flex gap-2 items-center">
                  <LocationOnOutlinedIcon className="text-gray-600" />
                  <span className="text-sm lg:text-base">{t("a34")}</span>
                </div>
              </div>

              <h1 className="font-bold text-lg lg:text-xl mt-3 lg:mt-4">{t("a81")}</h1>
              <h1 className="text-gray-600 mt-2 lg:mt-3 leading-relaxed text-sm lg:text-base">{t("a82")}</h1>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 mt-4 lg:mt-5">
                <Button
                  sx={{ backgroundColor: "#FFA900", borderRadius: "20px", textTransform: "none" }}
                  variant="contained"
                >
                  {t("a83")}
                </Button>
                <Button
                  sx={{
                    border: "1px solid #FFA900",
                    borderRadius: "20px",
                    backgroundColor: "white",
                    color: "#FFA900",
                    textTransform: "none",
                  }}
                  variant="contained"
                >
                  {t("a84")}
                </Button>
              </div>
            </div>

            <div className="w-full transform transition duration-500 hover:scale-105 hover:shadow-lg mt-6 lg:mt-12 rounded-3xl shadow-2xl p-4 lg:p-6 bg-gray-100">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div className="bg-gray-900 flex justify-center items-center w-full sm:w-auto px-4 py-1 rounded-2xl text-white text-sm lg:text-base">
                  <h1>{t("a52")}</h1>
                </div>

                <div className="flex gap-2 items-center">
                  <LocationOnOutlinedIcon className="text-gray-600" />
                  <span className="text-sm lg:text-base">{t("a34")}</span>
                </div>
              </div>

              <h1 className="font-bold text-lg lg:text-xl mt-3 lg:mt-4">{t("a81")}</h1>
              <h1 className="text-gray-600 mt-2 lg:mt-3 leading-relaxed text-sm lg:text-base">{t("a82")}</h1>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 mt-4 lg:mt-5">
                <Button
                  sx={{ backgroundColor: "#FFA900", borderRadius: "20px", textTransform: "none" }}
                  variant="contained"
                >
                  {t("a83")}
                </Button>
                <Button
                  sx={{
                    border: "1px solid #FFA900",
                    borderRadius: "20px",
                    backgroundColor: "white",
                    color: "#FFA900",
                    textTransform: "none",
                  }}
                  variant="contained"
                >
                  {t("a84")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

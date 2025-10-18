import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("HomePage");
  return (
    <div className="dark:bg-gray-900 pt-[40px] pb-[20px]">
      {/* Основной контейнер */}
      <div
        className="
          w-full 
          flex flex-col items-center justify-center
          gap-6
          md:flex-row md:justify-between md:px-10
          lg:justify-around lg:gap-0
          h-auto md:h-[180px] lg:h-[200px]
        "
      >
        {/* Логотип */}
        <Image
          alt="logo"
          src="/image/Frame 1261154809.png"
          className="w-[150px] h-[30px] md:w-[170px] md:h-[33px] lg:w-[180px] lg:h-[35px] dark:invert"
          width={180}
          height={35}
        />

        {/* Навигация */}
        <div
          className="
            flex flex-col md:flex-row
            items-center justify-center
            gap-2 md:gap-6 lg:gap-[50px]
            font-bold text-gray-500 text-sm md:text-base
          "
        >
          <h1>{t("a1")}</h1>
          <h1>{t("a2")}</h1>
          <h1>{t("a3")}</h1>
          <h1>{t("a4")}</h1>
          <h1>{t("a5")}</h1>
          <h1>{t("a6")}</h1>
        </div>

        {/* Соцсети */}
        <Image
          alt="socials"
          src="/image/Social Media Container.png"
          className="w-[90px] h-[35px] md:w-[100px] md:h-[40px]"
          width={100}
          height={40}
        />
      </div>

      {/* Разделительная линия */}
      <hr className="h-[2px] mt-6 w-[90%] mx-auto dark:border-gray-700" />

      {/* Копирайт */}
      <h1 className="text-center text-gray-400 mt-[10px] text-xs md:text-sm">
        Copyright © 2024 KAPITAL-T | All Rights Reserved
      </h1>
    </div>
  );
}

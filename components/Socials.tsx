"use client"
import { InView } from '@/components/ui/animations/inView'

const Socials = () => {
  return (
    <InView
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
          x: -20,
          filter: "blur(10px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          filter: "blur(0px)",
        },
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewOptions={{ margin: "0px 0px -350px 0px" }}
    >
      <div className="flex-center gap-6 p-5">
        <div className="flex-col flex-center gap-5 flex-1">
          <div className="flex flex-col gap-5">
            <div className="flex flex-between p-4 rounded-lg w-full bg-white shadow-sm hover:scale-[110%] transition-transform duration-300 ease-linear hover:shadow-2xl">
              <div className="">
                <h2 className="font-gilroyBold text-2xl text-[#2C2C2C]">
                  Visit us
                </h2>
                <p className="font-gilroyRegular text-[#2C2C2C] max-w-[250px]">
                  Chef Irina Restaurant LLC Shop No. 15 - Al Barsha
                  South 3, Dubai, United Arab Emirates.
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="68"
                height="68"
                viewBox="0 0 68 68"
                fill="none"
              >
                <path
                  d="M41.0892 38.646C49.3703 40.1213 55.223 43.6264 55.223 47.6889C55.223 53.143 44.8501 57.5392 32.0488 57.5392"
                  stroke="#1A1B4B"
                  stroke-width="3.92308"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.9853 38.6483C14.6774 40.1506 8.85156 43.6288 8.85156 47.6913C8.85156 51.8979 15.037 55.4749 23.7379 56.8917"
                  stroke="#1A1B4B"
                  stroke-width="3.92308"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32.0381 46.3182V10.4615L49.0012 16.5727L46.2849 25.726L32.0381 25.9952"
                  stroke="#1A1B4B"
                  stroke-width="3.92308"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-5" onClick={() => window.open("https://wa.me/971585519590", "_blank")}>
            <div className="flex flex-between p-4 rounded-lg w-full bg-white shadow-sm hover:scale-[110%] transition-transform duration-300 ease-linear hover:shadow-2xl">
              <div className="">
                <h2 className="font-gilroyBold text-2xl text-[#2C2C2C]">
                  WhatsApp
                </h2>
                <p className="font-gilroyRegular text-[#2C2C2C] max-w-[250px]">
                  Booking Request & Reservations: +971 58 551 9590
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <path
                  d="M14.5739 36.7356C14.1725 36.534 13.732 36.4645 13.2949 36.5679C11.8091 36.9175 9.41175 37.5152 7.66724 37.9539C6.67548 38.2036 5.77291 37.3206 6.00301 36.3253C6.43647 34.4452 7.03758 31.8304 7.32297 30.5228C7.41217 30.1162 7.35687 29.6969 7.18029 29.3205C6.13501 27.082 5.5 24.6045 5.5 22.0019C5.5 11.897 14.7059 3.83806 25.1443 5.79661C31.7031 7.02738 36.9741 12.3001 38.2048 18.8571C40.1634 29.2956 32.1044 38.5015 21.9996 38.5015C19.415 38.5015 16.8321 37.8772 14.5739 36.7356Z"
                  stroke="#159E09"
                  stroke-width="1.60877"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.7666 15.5103C13.2248 18.0646 15.1512 22.1226 18.5403 25.5117C21.9294 28.901 25.9232 30.7631 28.4776 28.2213L28.713 27.9858C29.7369 26.9637 29.5871 25.2638 28.4009 24.4362C28.0174 24.1704 27.6161 23.8886 27.1896 23.5907C26.2675 22.9432 25.0063 23.0431 24.209 23.8367L23.7774 24.265C21.9205 23.159 20.9787 22.0958 19.7247 20.2122L20.1528 19.7807C20.9448 18.9815 21.0447 17.7204 20.399 16.7982C20.0992 16.3719 19.8193 15.9705 19.5518 15.587C18.7259 14.4008 17.0259 14.2528 16.0021 15.2749L15.7666 15.5103Z"
                  stroke="#159E09"
                  stroke-width="1.60877"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-5" onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@chefirinauae.com", "_blank")}>
            <div className="flex flex-between p-4 rounded-lg w-full bg-white shadow-sm hover:scale-[110%] transition-transform duration-300 ease-linear hover:shadow-2xl">
              <div className="">
                <h2 className="font-gilroyBold text-2xl text-[#2C2C2C]">
                  Email us
                </h2>
                <p className="font-gilroyRegular text-[#2C2C2C] max-w-[250px]">
                  General Inquiries: info@chefirinauae.com
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.21968 11.7501C5.69633 11.159 6.56195 11.0661 7.15313 11.5428L19.1102 21.1834C20.8409 22.5559 23.2917 22.5564 25.0229 21.1851L36.8765 11.5464C37.4658 11.0673 38.3318 11.1565 38.8109 11.7457C39.2899 12.3349 39.2008 13.2009 38.6116 13.68L26.7393 23.3338C24.0051 25.5064 20.1303 25.5063 17.3959 23.3338L17.3882 23.3275L5.42705 13.6836C4.83587 13.2069 4.74303 12.3413 5.21968 11.7501Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M30.1238 38.2257H13.8732C12.6349 38.243 11.4057 38.0114 10.2585 37.545C9.11131 37.0788 8.06935 36.3869 7.19434 35.5106C6.1894 34.4709 5.40068 33.2422 4.87389 31.8956C4.34708 30.549 4.09265 29.1113 4.12534 27.6657V16.3412C4.04476 14.999 4.23655 13.6542 4.68918 12.388C5.14181 11.1218 5.8459 9.9602 6.75912 8.97317C7.67234 7.98614 8.77579 7.19405 10.0031 6.64454C11.2304 6.09506 12.5562 5.79952 13.9007 5.77573H30.1C31.4446 5.79952 32.7702 6.09506 33.9977 6.64454C35.2249 7.19405 36.3284 7.98614 37.2416 8.97317C38.1547 9.9602 38.8589 11.1218 39.3114 12.388C39.764 13.6542 39.956 14.999 39.8753 16.3412V27.6657C39.907 29.11 39.6522 30.5465 39.1253 31.8918C38.5986 33.2369 37.8104 34.4645 36.8063 35.5032C35.9315 36.3812 34.8892 37.0746 33.7412 37.5423C32.5933 38.01 31.3632 38.2424 30.1238 38.2257ZM13.897 35.4757H30.1202C30.9985 35.491 31.871 35.3296 32.6857 35.0011C33.5005 34.6727 34.2409 34.1838 34.863 33.5636C35.6112 32.7787 36.1962 31.8534 36.5845 30.8411C36.9728 29.8287 37.1567 28.7496 37.1253 27.6657V16.3412C37.1253 11.8129 34.1718 8.52573 30.1 8.52573H13.9007C9.82884 8.52573 6.87534 11.8129 6.87534 16.3412V27.6657C6.84498 28.7483 7.02925 29.8261 7.41753 30.8372C7.80583 31.8481 8.39044 32.7723 9.13767 33.5562C9.7593 34.1761 10.4991 34.6647 11.3132 34.9932C12.1273 35.3217 12.9991 35.4833 13.8768 35.4684L13.897 35.4757Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </InView>
  )
}

export default Socials

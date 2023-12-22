import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const transition = { duration: 3, yoyo: 300, ease: "easeInOut" };

const TitleAndIconContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const TitleAndIcon = () => {
  return (
    <TitleAndIconContainer to="/">
      <motion.svg
        width="277"
        height="25"
        viewBox="0 0 277 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M14.1133 0.917969C15.2969 0.917969 16.3691 1.09375 17.3301 1.44531C18.291 1.79688 19.1055 2.27734 19.7734 2.88672C20.4531 3.49609 20.9746 4.21094 21.3379 5.03125C21.7012 5.83984 21.8828 6.70117 21.8828 7.61523V18.3027C21.8828 19.2168 21.7012 20.084 21.3379 20.9043C20.9746 21.7129 20.4531 22.4219 19.7734 23.0312C19.1055 23.6406 18.291 24.1211 17.3301 24.4727C16.3691 24.8242 15.2969 25 14.1133 25H8.69922C7.51562 25 6.44336 24.8242 5.48242 24.4727C4.52148 24.1211 3.70117 23.6406 3.02148 23.0312C2.35352 22.4219 1.83789 21.7129 1.47461 20.9043C1.11133 20.084 0.929688 19.2168 0.929688 18.3027V7.61523C0.929688 6.70117 1.11133 5.83984 1.47461 5.03125C1.83789 4.21094 2.35352 3.49609 3.02148 2.88672C3.70117 2.27734 4.52148 1.79688 5.48242 1.44531C6.44336 1.09375 7.51562 0.917969 8.69922 0.917969H14.1133ZM12.9883 2.5V13.9082L12.7422 14.9629L11.582 15.1738H8.96289V17.0371H11.6875L13.4629 16.791L14.834 15.7188V2.5H12.9883ZM34.9258 0.917969C36.1094 0.917969 37.1816 1.09375 38.1426 1.44531C39.1035 1.79688 39.918 2.27734 40.5859 2.88672C41.2656 3.49609 41.7871 4.21094 42.1504 5.03125C42.5137 5.83984 42.6953 6.70117 42.6953 7.61523V18.3027C42.6953 19.2168 42.5137 20.084 42.1504 20.9043C41.7871 21.7129 41.2656 22.4219 40.5859 23.0312C39.918 23.6406 39.1035 24.1211 38.1426 24.4727C37.1816 24.8242 36.1094 25 34.9258 25H29.5117C28.3281 25 27.2559 24.8242 26.2949 24.4727C25.334 24.1211 24.5137 23.6406 23.834 23.0312C23.166 22.4219 22.6504 21.7129 22.2871 20.9043C21.9238 20.084 21.7422 19.2168 21.7422 18.3027V7.61523C21.7422 6.70117 21.9238 5.83984 22.2871 5.03125C22.6504 4.21094 23.166 3.49609 23.834 2.88672C24.5137 2.27734 25.334 1.79688 26.2949 1.44531C27.2559 1.09375 28.3281 0.917969 29.5117 0.917969H34.9258ZM37.2285 5.3125L36.9648 3.83594L35.8574 2.71094L34.082 2.5H30.2676L28.5098 2.71094L27.4023 3.83594L27.1387 5.3125V13.6621L27.4023 15.1387L28.5098 16.2461L30.2676 16.4746H34.6973L36.7539 16.2109L36.3145 14.3125L34.6621 14.5938H30.3906L29.2656 14.418L29.0195 13.3633V9.74219H37.2285V5.3125ZM29.0195 7.89648V5.52344L29.1602 4.52148L30.3906 4.32812H33.9766L35.1719 4.52148L35.3477 5.55859V7.89648H29.0195ZM59.0078 5.3125L58.7617 3.83594L57.6367 2.71094L55.8438 2.5H51.4492L48.2852 2.93945V17.0371H50.1484V4.55664L51.5195 4.32812H55.7383L56.9512 4.52148L57.127 5.55859V17.0371H59.0078V5.3125ZM55.7383 0.917969C56.9219 0.917969 57.9941 1.09375 58.9551 1.44531C59.916 1.79688 60.7305 2.27734 61.3984 2.88672C62.0781 3.49609 62.5996 4.21094 62.9629 5.03125C63.3262 5.83984 63.5078 6.70117 63.5078 7.61523V18.3027C63.5078 19.2168 63.3262 20.084 62.9629 20.9043C62.5996 21.7129 62.0781 22.4219 61.3984 23.0312C60.7305 23.6406 59.916 24.1211 58.9551 24.4727C57.9941 24.8242 56.9219 25 55.7383 25H50.3242C49.1406 25 48.0684 24.8242 47.1074 24.4727C46.1465 24.1211 45.3262 23.6406 44.6465 23.0312C43.9785 22.4219 43.4629 21.7129 43.0996 20.9043C42.7363 20.084 42.5547 19.2168 42.5547 18.3027V7.61523C42.5547 6.70117 42.7363 5.83984 43.0996 5.03125C43.4629 4.21094 43.9785 3.49609 44.6465 2.88672C45.3262 2.27734 46.1465 1.79688 47.1074 1.44531C48.0684 1.09375 49.1406 0.917969 50.3242 0.917969H55.7383ZM79.8203 5.3125L79.5742 3.83594L78.4492 2.71094L76.6562 2.5H72.2617L69.0977 2.93945V17.0371H70.9609V4.55664L72.332 4.32812H76.5508L77.7637 4.52148L77.9395 5.55859V17.0371H79.8203V5.3125ZM76.5508 0.917969C77.7344 0.917969 78.8066 1.09375 79.7676 1.44531C80.7285 1.79688 81.543 2.27734 82.2109 2.88672C82.8906 3.49609 83.4121 4.21094 83.7754 5.03125C84.1387 5.83984 84.3203 6.70117 84.3203 7.61523V18.3027C84.3203 19.2168 84.1387 20.084 83.7754 20.9043C83.4121 21.7129 82.8906 22.4219 82.2109 23.0312C81.543 23.6406 80.7285 24.1211 79.7676 24.4727C78.8066 24.8242 77.7344 25 76.5508 25H71.1367C69.9531 25 68.8809 24.8242 67.9199 24.4727C66.959 24.1211 66.1387 23.6406 65.459 23.0312C64.791 22.4219 64.2754 21.7129 63.9121 20.9043C63.5488 20.084 63.3672 19.2168 63.3672 18.3027V7.61523C63.3672 6.70117 63.5488 5.83984 63.9121 5.03125C64.2754 4.21094 64.791 3.49609 65.459 2.88672C66.1387 2.27734 66.959 1.79688 67.9199 1.44531C68.8809 1.09375 69.9531 0.917969 71.1367 0.917969H76.5508ZM90.543 15.1738V17.0371H100.703V15.1738H96.5723V4.36328H100.703V2.5H90.543V4.36328H94.6914V15.1738H90.543ZM97.3633 0.917969C98.5469 0.917969 99.6191 1.09375 100.58 1.44531C101.541 1.79688 102.355 2.27734 103.023 2.88672C103.703 3.49609 104.225 4.21094 104.588 5.03125C104.951 5.83984 105.133 6.70117 105.133 7.61523V18.3027C105.133 19.2168 104.951 20.084 104.588 20.9043C104.225 21.7129 103.703 22.4219 103.023 23.0312C102.355 23.6406 101.541 24.1211 100.58 24.4727C99.6191 24.8242 98.5469 25 97.3633 25H91.9492C90.7656 25 89.6934 24.8242 88.7324 24.4727C87.7715 24.1211 86.9512 23.6406 86.2715 23.0312C85.6035 22.4219 85.0879 21.7129 84.7246 20.9043C84.3613 20.084 84.1797 19.2168 84.1797 18.3027V7.61523C84.1797 6.70117 84.3613 5.83984 84.7246 5.03125C85.0879 4.21094 85.6035 3.49609 86.2715 2.88672C86.9512 2.27734 87.7715 1.79688 88.7324 1.44531C89.6934 1.09375 90.7656 0.917969 91.9492 0.917969H97.3633ZM119.793 8.54688H113.922V4.36328H120.795V2.5H112.041V17.0371H113.922V10.3926H119.793V8.54688ZM118.176 0.917969C119.359 0.917969 120.432 1.09375 121.393 1.44531C122.354 1.79688 123.168 2.27734 123.836 2.88672C124.516 3.49609 125.037 4.21094 125.4 5.03125C125.764 5.83984 125.945 6.70117 125.945 7.61523V18.3027C125.945 19.2168 125.764 20.084 125.4 20.9043C125.037 21.7129 124.516 22.4219 123.836 23.0312C123.168 23.6406 122.354 24.1211 121.393 24.4727C120.432 24.8242 119.359 25 118.176 25H112.762C111.578 25 110.506 24.8242 109.545 24.4727C108.584 24.1211 107.764 23.6406 107.084 23.0312C106.416 22.4219 105.9 21.7129 105.537 20.9043C105.174 20.084 104.992 19.2168 104.992 18.3027V7.61523C104.992 6.70117 105.174 5.83984 105.537 5.03125C105.9 4.21094 106.416 3.49609 107.084 2.88672C107.764 2.27734 108.584 1.79688 109.545 1.44531C110.506 1.09375 111.578 0.917969 112.762 0.917969H118.176ZM138.988 0.917969C140.172 0.917969 141.244 1.09375 142.205 1.44531C143.166 1.79688 143.98 2.27734 144.648 2.88672C145.328 3.49609 145.85 4.21094 146.213 5.03125C146.576 5.83984 146.758 6.70117 146.758 7.61523V18.3027C146.758 19.2168 146.576 20.084 146.213 20.9043C145.85 21.7129 145.328 22.4219 144.648 23.0312C143.98 23.6406 143.166 24.1211 142.205 24.4727C141.244 24.8242 140.172 25 138.988 25H133.574C132.391 25 131.318 24.8242 130.357 24.4727C129.396 24.1211 128.576 23.6406 127.896 23.0312C127.229 22.4219 126.713 21.7129 126.35 20.9043C125.986 20.084 125.805 19.2168 125.805 18.3027V7.61523C125.805 6.70117 125.986 5.83984 126.35 5.03125C126.713 4.21094 127.229 3.49609 127.896 2.88672C128.576 2.27734 129.396 1.79688 130.357 1.44531C131.318 1.09375 132.391 0.917969 133.574 0.917969H138.988ZM141.291 5.3125L141.027 3.83594L139.92 2.71094L138.145 2.5H134.33L132.572 2.71094L131.465 3.83594L131.201 5.3125V13.6621L131.465 15.1387L132.572 16.2461L134.33 16.4746H138.76L140.816 16.2109L140.377 14.3125L138.725 14.5938H134.453L133.328 14.418L133.082 13.3633V9.74219H141.291V5.3125ZM133.082 7.89648V5.52344L133.223 4.52148L134.453 4.32812H138.039L139.234 4.52148L139.41 5.55859V7.89648H133.082ZM159.801 0.917969C160.984 0.917969 162.057 1.09375 163.018 1.44531C163.979 1.79688 164.793 2.27734 165.461 2.88672C166.141 3.49609 166.662 4.21094 167.025 5.03125C167.389 5.83984 167.57 6.70117 167.57 7.61523V18.3027C167.57 19.2168 167.389 20.084 167.025 20.9043C166.662 21.7129 166.141 22.4219 165.461 23.0312C164.793 23.6406 163.979 24.1211 163.018 24.4727C162.057 24.8242 160.984 25 159.801 25H154.387C153.203 25 152.131 24.8242 151.17 24.4727C150.209 24.1211 149.389 23.6406 148.709 23.0312C148.041 22.4219 147.525 21.7129 147.162 20.9043C146.799 20.084 146.617 19.2168 146.617 18.3027V7.61523C146.617 6.70117 146.799 5.83984 147.162 5.03125C147.525 4.21094 148.041 3.49609 148.709 2.88672C149.389 2.27734 150.209 1.79688 151.17 1.44531C152.131 1.09375 153.203 0.917969 154.387 0.917969H159.801ZM160.697 12.6953V17.0371H162.561V12.502L161.945 10.8848L159.941 10.1641L161.875 9.23242L162.42 7.65039V5.69922L162.209 4.22266L161.049 2.74609L159.291 2.5H152.734V17.0371H154.615V11.1836H159.186L160.434 11.7461L160.697 12.6953ZM159.186 4.36328L160.434 4.9082L160.557 5.92773V7.79102L160.293 8.75781L159.186 9.30273H154.615V4.36328H159.186ZM188.26 15.209H181.633L187.855 4.04688L187.135 2.5H179.611V4.36328H185.553L179.33 15.5254L179.91 17.0371H188.26V15.209ZM185.816 0.917969C187 0.917969 188.072 1.09375 189.033 1.44531C189.994 1.79688 190.809 2.27734 191.477 2.88672C192.156 3.49609 192.678 4.21094 193.041 5.03125C193.404 5.83984 193.586 6.70117 193.586 7.61523V18.3027C193.586 19.2168 193.404 20.084 193.041 20.9043C192.678 21.7129 192.156 22.4219 191.477 23.0312C190.809 23.6406 189.994 24.1211 189.033 24.4727C188.072 24.8242 187 25 185.816 25H180.402C179.219 25 178.146 24.8242 177.186 24.4727C176.225 24.1211 175.404 23.6406 174.725 23.0312C174.057 22.4219 173.541 21.7129 173.178 20.9043C172.814 20.084 172.633 19.2168 172.633 18.3027V7.61523C172.633 6.70117 172.814 5.83984 173.178 5.03125C173.541 4.21094 174.057 3.49609 174.725 2.88672C175.404 2.27734 176.225 1.79688 177.186 1.44531C178.146 1.09375 179.219 0.917969 180.402 0.917969H185.816ZM210.285 2.5H208.457V8.65234H201.145V2.5H199.281V17.0371H201.145V10.498H208.457V17.0371H210.285V2.5ZM206.629 0.917969C207.812 0.917969 208.885 1.09375 209.846 1.44531C210.807 1.79688 211.621 2.27734 212.289 2.88672C212.969 3.49609 213.49 4.21094 213.854 5.03125C214.217 5.83984 214.398 6.70117 214.398 7.61523V18.3027C214.398 19.2168 214.217 20.084 213.854 20.9043C213.49 21.7129 212.969 22.4219 212.289 23.0312C211.621 23.6406 210.807 24.1211 209.846 24.4727C208.885 24.8242 207.812 25 206.629 25H201.215C200.031 25 198.959 24.8242 197.998 24.4727C197.037 24.1211 196.217 23.6406 195.537 23.0312C194.869 22.4219 194.354 21.7129 193.99 20.9043C193.627 20.084 193.445 19.2168 193.445 18.3027V7.61523C193.445 6.70117 193.627 5.83984 193.99 5.03125C194.354 4.21094 194.869 3.49609 195.537 2.88672C196.217 2.27734 197.037 1.79688 197.998 1.44531C198.959 1.09375 200.031 0.917969 201.215 0.917969H206.629ZM229.604 17.0195V13.0117V5.3125V3.83594L228.408 2.71094L226.65 2.5H222.643L220.586 2.74609L221.025 4.66211L222.678 4.32812H226.598L227.652 4.55664L227.898 5.48828V9.58398L226.65 9.37305H222.643L220.885 9.63672L219.76 10.7441L219.514 12.1855V14.2422L219.76 15.7188L220.885 16.8262L222.643 17.0371H226.492L227.863 16.8262L229.604 17.0195ZM227.898 14.998L226.527 15.1738H222.748L221.641 14.998L221.395 13.9434V12.4316L221.535 11.4297L222.748 11.2539H226.562L227.898 11.3945V14.0488V14.998ZM227.441 0.917969C228.625 0.917969 229.697 1.09375 230.658 1.44531C231.619 1.79688 232.434 2.27734 233.102 2.88672C233.781 3.49609 234.303 4.21094 234.666 5.03125C235.029 5.83984 235.211 6.70117 235.211 7.61523V18.3027C235.211 19.2168 235.029 20.084 234.666 20.9043C234.303 21.7129 233.781 22.4219 233.102 23.0312C232.434 23.6406 231.619 24.1211 230.658 24.4727C229.697 24.8242 228.625 25 227.441 25H222.027C220.844 25 219.771 24.8242 218.811 24.4727C217.85 24.1211 217.029 23.6406 216.35 23.0312C215.682 22.4219 215.166 21.7129 214.803 20.9043C214.439 20.084 214.258 19.2168 214.258 18.3027V7.61523C214.258 6.70117 214.439 5.83984 214.803 5.03125C215.166 4.21094 215.682 3.49609 216.35 2.88672C217.029 2.27734 217.85 1.79688 218.811 1.44531C219.771 1.09375 220.844 0.917969 222.027 0.917969H227.441ZM251.523 5.3125L251.277 3.83594L250.152 2.71094L248.359 2.5H243.965L240.801 2.93945V17.0371H242.664V4.55664L244.035 4.32812H248.254L249.467 4.52148L249.643 5.55859V17.0371H251.523V5.3125ZM248.254 0.917969C249.438 0.917969 250.51 1.09375 251.471 1.44531C252.432 1.79688 253.246 2.27734 253.914 2.88672C254.594 3.49609 255.115 4.21094 255.479 5.03125C255.842 5.83984 256.023 6.70117 256.023 7.61523V18.3027C256.023 19.2168 255.842 20.084 255.479 20.9043C255.115 21.7129 254.594 22.4219 253.914 23.0312C253.246 23.6406 252.432 24.1211 251.471 24.4727C250.51 24.8242 249.438 25 248.254 25H242.84C241.656 25 240.584 24.8242 239.623 24.4727C238.662 24.1211 237.842 23.6406 237.162 23.0312C236.494 22.4219 235.979 21.7129 235.615 20.9043C235.252 20.084 235.07 19.2168 235.07 18.3027V7.61523C235.07 6.70117 235.252 5.83984 235.615 5.03125C235.979 4.21094 236.494 3.49609 237.162 2.88672C237.842 2.27734 238.662 1.79688 239.623 1.44531C240.584 1.09375 241.656 0.917969 242.84 0.917969H248.254ZM265.164 4.32812H269.734L271.545 4.62695L271.896 2.74609L269.857 2.5H265.129L263.336 2.78125L262.211 3.90625L261.965 5.38281V14.207L262.211 15.7188L263.371 16.8262L265.129 17.0371H269.523L271.299 16.8262L272.441 15.7188L272.688 14.207V9.58398H267.59V11.4648H270.824V13.9434C270.766 14.1309 270.725 14.3066 270.701 14.4707C270.678 14.6348 270.637 14.8105 270.578 14.998L269.418 15.1738H265.164L264.092 14.998L263.846 13.873V5.55859L264.021 4.5918L265.164 4.32812ZM269.066 0.917969C270.25 0.917969 271.322 1.09375 272.283 1.44531C273.244 1.79688 274.059 2.27734 274.727 2.88672C275.406 3.49609 275.928 4.21094 276.291 5.03125C276.654 5.83984 276.836 6.70117 276.836 7.61523V18.3027C276.836 19.2168 276.654 20.084 276.291 20.9043C275.928 21.7129 275.406 22.4219 274.727 23.0312C274.059 23.6406 273.244 24.1211 272.283 24.4727C271.322 24.8242 270.25 25 269.066 25H263.652C262.469 25 261.396 24.8242 260.436 24.4727C259.475 24.1211 258.654 23.6406 257.975 23.0312C257.307 22.4219 256.791 21.7129 256.428 20.9043C256.064 20.084 255.883 19.2168 255.883 18.3027V7.61523C255.883 6.70117 256.064 5.83984 256.428 5.03125C256.791 4.21094 257.307 3.49609 257.975 2.88672C258.654 2.27734 259.475 1.79688 260.436 1.44531C261.396 1.09375 262.469 0.917969 263.652 0.917969H269.066Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
      </motion.svg>
    </TitleAndIconContainer>
  );
};
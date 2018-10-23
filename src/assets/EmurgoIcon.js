// @flow
/* eslint-disable max-len */

import React from 'react'
import Svg, {Path, G} from 'react-native-svg'
import {COLORS} from '../styles/config'

type Props = {width: number, height: number, color?: string}

const EmurgoIcon = ({width, height, color = COLORS.BLACK}: Props) => (
  <Svg
    viewBox="0 0 1671 626.86401"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...{width, height}}
  >
    <G transform="matrix(1.3333333,0,0,-1.3333333,0,626.864)" id="g10">
      <G fill={color} id="g12">
        <G fill={color} id="g14">
          <G fill={color} transform="translate(426.1685,201.2049)" id="g20">
            <Path
              d="M 0,0 V 19.362 H 47.045 V 41.751 H 0 v 17.85 H 53.398 V 82.745 H 45.764604 -29.649 V -23.145 H 55.365 V 0 Z"
              fill={color}
              id="path221"
            />
            <Path
              d="m 204.457,-23.145 -0.001,105.89 H 179.799 L 143.494,21.632 106.282,82.745 H 81.625 v -105.89 h 27.682 v 54.609 l 27.078,-44.17 h 13.311 l 27.229,45.683 v -56.122 z"
              fill={color}
              id="path223"
            />
            <Path
              d="m 283.554,-25.262 c 15.732,0 27.96,4.285 36.684,12.858 8.721,8.571 13.084,20.723 13.084,36.457 V 82.745 H 303.824 V 24.959 c 0,-16.941 -6.656,-25.413 -19.967,-25.413 -13.414,0 -20.119,8.472 -20.119,25.413 V 82.745 H 233.786 V 24.053 c 0,-15.734 4.361,-27.886 13.085,-36.457 8.722,-8.573 20.951,-12.858 36.683,-12.858"
              fill={color}
              id="path224"
            />
            <Path
              d="m 428.137,-23.145 h 32.071 l -22.843,33.281 c 6.656,3.226 11.773,7.688 15.354,13.387 3.579,5.696 5.37,12.377 5.37,20.042 0,7.966 -1.917,14.901 -5.749,20.801 -3.833,5.899 -9.279,10.437 -16.337,13.614 -7.059,3.176 -15.378,4.765 -24.96,4.765 h -48.406 v -105.89 h 29.952 V 4.992 h 16.337 z m -0.302,66.71 c 0,-4.941 -1.565,-8.75 -4.69,-11.419 -3.127,-2.673 -7.767,-4.009 -13.916,-4.009 h -16.64 v 31.009 h 16.64 c 6.149,0 10.789,-1.36 13.916,-4.084 3.125,-2.722 4.69,-6.556 4.69,-11.497"
              fill={color}
              id="path225"
            />
            <Path
              d="m 554.933,3.025 c -5.043,-2.32 -10.436,-3.479 -16.185,-3.479 -5.85,0 -11.043,1.287 -15.581,3.858 -4.539,2.572 -8.069,6.15 -10.589,10.74 -2.522,4.587 -3.782,9.807 -3.782,15.657 0,9.176 2.773,16.512 8.32,22.01 5.546,5.495 12.858,8.244 21.934,8.244 9.984,0 18.555,-3.934 25.717,-11.799 L 583.826,65.5 c -5.244,6.252 -11.799,11.043 -19.664,14.37 -7.867,3.329 -16.743,4.992 -26.624,4.992 -11.296,0 -21.431,-2.343 -30.406,-7.034 -8.976,-4.688 -15.984,-11.22 -21.026,-19.589 -5.044,-8.372 -7.564,-17.849 -7.564,-28.438 0,-10.589 2.52,-20.07 7.564,-28.439 5.042,-8.372 12,-14.9 20.875,-19.59 8.873,-4.689 18.857,-7.034 29.952,-7.034 7.865,0 15.732,1.16 23.598,3.48 7.866,2.318 14.825,5.646 20.876,9.983 V 32.07 h -26.474 z"
              fill={color}
              id="path226"
            />
            <Path
              d="m 662.351,-25.262 c 11.193,0 21.253,2.368 30.178,7.11 8.925,4.739 15.932,11.294 21.026,19.665 5.092,8.37 7.639,17.799 7.639,28.288 0,10.487 -2.547,19.915 -7.639,28.287 -5.094,8.369 -12.101,14.924 -21.026,19.665 -8.925,4.739 -18.985,7.109 -30.178,7.109 -11.195,0 -21.255,-2.37 -30.179,-7.109 -8.924,-4.741 -15.935,-11.296 -21.026,-19.665 -5.094,-8.372 -7.64,-17.8 -7.64,-28.287 0,-10.489 2.546,-19.918 7.64,-28.288 5.091,-8.371 12.102,-14.926 21.026,-19.665 8.924,-4.742 18.984,-7.11 30.179,-7.11 m 0,24.808 c -5.348,0 -10.187,1.261 -14.522,3.783 -4.338,2.519 -7.767,6.073 -10.287,10.664 -2.521,4.587 -3.782,9.857 -3.782,15.808 0,5.949 1.261,11.218 3.782,15.806 2.52,4.589 5.949,8.144 10.287,10.666 4.335,2.519 9.174,3.782 14.522,3.782 5.343,0 10.185,-1.263 14.522,-3.782 4.334,-2.522 7.764,-6.077 10.286,-10.666 2.519,-4.588 3.781,-9.857 3.781,-15.806 0,-5.951 -1.262,-11.221 -3.781,-15.808 -2.522,-4.591 -5.952,-8.145 -10.286,-10.664 -4.337,-2.522 -9.179,-3.783 -14.522,-3.783"
              fill={color}
              id="path227"
            />
          </G>
        </G>
      </G>
      <G fill={color} id="g24">
        <G fill={color} id="g26">
          <G fill={color} id="g32">
            <G fill={color} id="g34">
              <Path
                id="path42"
                fill={color}
                d="M 284.504,341.367 C 271.3,341.365 260.598,330.66 260.599,317.456 v 0 c 0.002,-13.204 10.708,-23.907 23.912,-23.905 v 0 c 13.204,0.003 23.906,10.708 23.904,23.911 v 0 c -0.002,13.204 -10.704,23.906 -23.907,23.905 v 0 c -10e-4,0 -0.003,0 -0.004,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g44">
        <G fill={color} id="g46">
          <G fill={color} id="g52">
            <G fill={color} id="g54">
              <Path
                id="path62"
                fill={color}
                d="m 323.311,286.208 c -12.101,-0.001 -21.908,-9.813 -21.906,-21.912 v 0 c 0.001,-12.101 9.812,-21.908 21.913,-21.906 v 0 c 12.099,0.002 21.908,9.812 21.906,21.911 v 0 c -0.002,12.101 -9.811,21.908 -21.909,21.907 v 0 c -10e-4,0 -0.003,0 -0.004,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g64">
        <G fill={color} id="g66">
          <G fill={color} id="g72">
            <G fill={color} id="g74">
              <Path
                id="path82"
                fill={color}
                d="m 323.311,215.765 c -10.997,-0.002 -19.91,-8.916 -19.908,-19.913 v 0 c 10e-4,-10.997 8.917,-19.911 19.913,-19.909 v 0 c 10.997,0.002 19.91,8.917 19.908,19.914 v 0 c -10e-4,10.995 -8.914,19.909 -19.908,19.908 v 0 c -0.002,0 -0.004,0 -0.005,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g84">
        <G fill={color} id="g86">
          <G fill={color} id="g92">
            <G fill={color} id="g94">
              <Path
                id="path102"
                fill={color}
                d="m 284.503,160.609 c -9.892,-0.003 -17.911,-8.023 -17.909,-17.917 v 0 c 0,-9.893 8.022,-17.911 17.915,-17.91 v 0 c 9.893,0.002 17.912,8.023 17.91,17.916 v 0 c -0.002,9.892 -8.021,17.911 -17.914,17.911 v 0 c 0,0 -0.002,0 -0.002,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g104">
        <G fill={color} id="g106">
          <G fill={color} id="g112">
            <G fill={color} id="g114">
              <Path
                id="path122"
                fill={color}
                d="m 220.559,137.718 c -8.788,-10e-4 -15.913,-7.127 -15.911,-15.917 v 0 c 0.001,-8.79 7.127,-15.913 15.917,-15.912 v 0 c 8.788,0.001 15.913,7.128 15.912,15.916 v 0 c -0.002,8.789 -7.127,15.913 -15.916,15.913 v 0 c 0,0 -0.001,0 -0.002,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g124">
        <G fill={color} id="g126">
          <G fill={color} id="g132">
            <G fill={color} id="g134">
              <Path
                id="path142"
                fill={color}
                d="m 156.616,156.606 c -7.685,-0.001 -13.915,-6.232 -13.914,-13.917 v 0 c 0.002,-7.686 6.233,-13.916 13.919,-13.914 v 0 c 7.685,0.001 13.915,6.231 13.914,13.917 v 0 c -0.002,7.685 -6.232,13.914 -13.917,13.914 v 0 c -0.001,0 -0.001,0 -0.002,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g144">
        <G fill={color} id="g146">
          <G fill={color} id="g152">
            <G fill={color} id="g154">
              <Path
                id="path162"
                fill={color}
                d="m 117.805,207.764 c -6.582,-0.001 -11.917,-5.338 -11.916,-11.92 v 0 c 0,-6.581 5.338,-11.916 11.919,-11.916 v 0 c 6.582,0.001 11.917,5.338 11.916,11.92 v 0 c -10e-4,6.582 -5.335,11.917 -11.916,11.916 v 0 c -0.001,0 -0.003,0 -0.003,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g164">
        <G fill={color} id="g166">
          <G fill={color} id="g172">
            <G fill={color} id="g174">
              <Path
                id="path182"
                fill={color}
                d="m 117.799,274.21 c -5.479,-0.002 -9.919,-4.442 -9.918,-9.921 v 0 c 0.001,-5.478 4.443,-9.918 9.921,-9.917 v 0 c 5.478,0 9.918,4.442 9.917,9.92 v 0 c 0,5.478 -4.441,9.919 -9.918,9.918 v 0 c 0,0 -0.001,0 -0.002,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g184">
        <G fill={color} id="g186">
          <G fill={color} id="g192">
            <G fill={color} id="g194">
              <Path
                id="path202"
                fill={color}
                d="m 156.601,325.375 c -4.375,-10e-4 -7.921,-3.547 -7.92,-7.922 v 0 c 10e-4,-4.375 3.548,-7.92 7.922,-7.92 v 0 c 4.375,10e-4 7.921,3.548 7.92,7.922 v 0 c -0.001,4.375 -3.547,7.92 -7.92,7.92 v 0 c -0.001,0 -0.002,0 -0.002,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g204">
        <G fill={color} id="g206">
          <G fill={color} id="g212">
            <G fill={color} id="g214">
              <Path
                id="path222"
                fill={color}
                d="M 220.562,364.259 C 206.255,364.257 194.657,352.657 194.66,338.35 v 0 c 0.002,-14.309 11.602,-25.906 25.91,-25.904 v 0 c 14.308,0.003 25.904,11.603 25.902,25.91 v 0 c -0.002,14.307 -11.6,25.903 -25.907,25.903 v 0 c 0,0 -0.002,0 -0.003,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g224">
        <G fill={color} id="g226">
          <G fill={color} id="g232">
            <G fill={color} id="g234">
              <Path
                id="path242"
                fill={color}
                d="m 253.948,285.553 c -7.317,-10e-4 -13.248,-5.934 -13.247,-13.252 v 0 c 0,-7.317 5.933,-13.248 13.251,-13.247 v 0 c 7.317,0.001 13.248,5.934 13.247,13.252 v 0 c -0.001,7.316 -5.932,13.247 -13.25,13.247 v 0 c 0,0 -0.001,0 -0.001,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g244">
        <G fill={color} id="g246">
          <G fill={color} id="g252">
            <G fill={color} id="g254">
              <Path
                id="path262"
                fill={color}
                d="m 275.454,254.985 c -6.705,-0.001 -12.141,-5.438 -12.14,-12.143 v 0 c 10e-4,-6.706 5.438,-12.142 12.144,-12.141 v 0 c 6.705,0.001 12.141,5.438 12.14,12.143 v 0 c -0.001,6.707 -5.437,12.142 -12.142,12.141 v 0 c -0.001,0 -0.002,0 -0.002,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g264">
        <G fill={color} id="g266">
          <G fill={color} id="g272">
            <G fill={color} id="g274">
              <Path
                id="path282"
                fill={color}
                d="m 275.454,215.947 c -6.095,-0.001 -11.034,-4.942 -11.033,-11.036 v 0 c 0.001,-6.094 4.942,-11.033 11.036,-11.032 v 0 c 6.094,0.001 11.034,4.941 11.033,11.035 v 0 c -0.001,6.094 -4.941,11.033 -11.034,11.033 v 0 c -0.001,0 -0.002,0 -0.002,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g284">
        <G fill={color} id="g286">
          <G fill={color} id="g292">
            <G fill={color} id="g294">
              <Path
                id="path302"
                fill={color}
                d="m 253.948,185.38 c -5.482,-0.002 -9.927,-4.446 -9.926,-9.928 v 0 c 0.001,-5.483 4.446,-9.927 9.929,-9.926 v 0 c 5.482,10e-4 9.926,4.446 9.925,9.929 v 0 c -10e-4,5.482 -4.444,9.926 -9.927,9.925 v 0 c 0,0 -0.001,0 -0.001,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g304">
        <G fill={color} id="g306">
          <G fill={color} id="g312">
            <G fill={color} id="g314">
              <Path
                id="path322"
                fill={color}
                d="m 218.512,172.694 c -4.871,0 -8.819,-3.949 -8.818,-8.82 v 0 c 0.001,-4.871 3.95,-8.818 8.821,-8.818 v 0 c 4.869,10e-4 8.818,3.95 8.817,8.82 v 0 c 0,4.87 -3.947,8.818 -8.817,8.818 v 0 c -10e-4,0 -0.002,0 -0.003,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g324">
        <G fill={color} id="g326">
          <G fill={color} id="g332">
            <G fill={color} id="g334">
              <Path
                id="path342"
                fill={color}
                d="m 183.076,183.162 c -4.26,0 -7.712,-3.454 -7.711,-7.713 v 0 c 0,-4.259 3.453,-7.711 7.713,-7.711 v 0 c 4.259,0.001 7.711,3.455 7.71,7.713 v 0 c 0,4.26 -3.452,7.711 -7.71,7.711 v 0 c -0.001,0 -0.001,0 -0.002,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g344">
        <G fill={color} id="g346">
          <G fill={color} id="g352">
            <G fill={color} id="g354">
              <Path
                id="path362"
                fill={color}
                d="m 161.567,211.513 c -3.648,0 -6.604,-2.959 -6.603,-6.605 v 0 c 0,-3.648 2.957,-6.605 6.605,-6.605 v 0 c 3.648,0.001 6.604,2.959 6.603,6.606 v 0 c 0,3.647 -2.956,6.604 -6.603,6.604 v 0 c -10e-4,0 -10e-4,0 -0.002,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g364">
        <G fill={color} id="g366">
          <G fill={color} id="g372">
            <G fill={color} id="g374">
              <Path
                id="path382"
                fill={color}
                d="m 156.067,242.838 c 0.001,-3.037 2.463,-5.496 5.498,-5.496 v 0 c 3.036,0 5.497,2.461 5.497,5.498 v 0 c -0.001,3.036 -2.462,5.496 -5.499,5.496 v 0 c -3.035,-0.001 -5.496,-2.462 -5.496,-5.498"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g384">
        <G fill={color} id="g386">
          <G fill={color} id="g392">
            <G fill={color} id="g394">
              <Path
                id="path402"
                fill={color}
                d="m 178.678,272.299 c 0,-2.423 1.966,-4.388 4.39,-4.388 v 0 c 2.425,0 4.389,1.966 4.389,4.39 v 0 c -0.001,2.424 -1.966,4.39 -4.39,4.39 v 0 c -2.424,0 -4.389,-1.967 -4.389,-4.392"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g404">
        <G fill={color} id="g406">
          <G fill={color} id="g412">
            <G fill={color} id="g414">
              <Path
                id="path422"
                fill={color}
                d="m 218.513,298.239 c -7.929,-10e-4 -14.356,-6.429 -14.354,-14.359 v 0 c 0.001,-7.929 6.429,-14.356 14.358,-14.355 v 0 c 7.929,0.002 14.355,6.43 14.354,14.359 v 0 c -0.001,7.929 -6.428,14.355 -14.357,14.355 v 0 c 0,0 -0.001,0 -0.001,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g424">
        <G fill={color} id="g426">
          <G fill={color} id="g432">
            <G fill={color} id="g434">
              <Path
                id="path442"
                fill={color}
                d="m 233.862,251.098 c -3.299,0 -5.973,-2.675 -5.972,-5.973 v 0 c 0,-3.299 2.675,-5.973 5.974,-5.973 v 0 c 3.299,0.001 5.973,2.675 5.972,5.975 v 0 c 0,3.299 -2.674,5.971 -5.972,5.971 v 0 c 0,0 -0.001,0 -0.002,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g444">
        <G fill={color} id="g446">
          <G fill={color} id="g452">
            <G fill={color} id="g454">
              <Path
                id="path462"
                fill={color}
                d="m 243.558,237.317 c -3.023,0 -5.474,-2.451 -5.474,-5.474 v 0 c 0.001,-3.023 2.452,-5.474 5.475,-5.474 v 0 c 3.024,0.001 5.474,2.452 5.474,5.475 v 0 c 0,3.022 -2.451,5.473 -5.473,5.473 v 0 c -0.001,0 -0.001,0 -0.002,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g464">
        <G fill={color} id="g466">
          <G fill={color} id="g472">
            <G fill={color} id="g474">
              <Path
                id="path482"
                fill={color}
                d="m 238.584,214.742 c 0,-2.747 2.227,-4.974 4.975,-4.974 v 0 c 2.748,0 4.974,2.228 4.974,4.976 v 0 c 0,2.747 -2.227,4.974 -4.975,4.974 v 0 c -2.748,0 -4.975,-2.228 -4.974,-4.976"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g484">
        <G fill={color} id="g486">
          <G fill={color} id="g492">
            <G fill={color} id="g494">
              <Path
                id="path502"
                fill={color}
                d="m 233.862,205.936 c -2.472,0 -4.475,-2.003 -4.475,-4.476 v 0 c 0,-2.471 2.005,-4.475 4.476,-4.473 v 0 c 2.472,0 4.476,2.003 4.475,4.474 v 0 c -0.001,2.472 -2.003,4.475 -4.474,4.475 v 0 c 0,0 -0.001,0 -0.002,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g504">
        <G fill={color} id="g506">
          <G fill={color} id="g512">
            <G fill={color} id="g514">
              <Path
                id="path522"
                fill={color}
                d="m 213.91,196.241 c 0.001,-2.197 1.781,-3.976 3.976,-3.976 v 0 c 2.197,0 3.977,1.78 3.977,3.977 v 0 c 0,2.196 -1.782,3.976 -3.978,3.976 v 0 c -2.195,0 -3.975,-1.781 -3.975,-3.977"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g524">
        <G fill={color} id="g526">
          <G fill={color} id="g532">
            <G fill={color} id="g534">
              <Path
                id="path542"
                fill={color}
                d="m 201.91,204.936 c -1.921,0 -3.477,-1.556 -3.477,-3.476 v 0 c 0.001,-1.921 1.557,-3.477 3.477,-3.477 v 0 c 1.921,0 3.477,1.557 3.477,3.477 v 0 c 0,1.921 -1.556,3.476 -3.476,3.476 v 0 c 0,0 -0.001,0 -0.001,0"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g544">
        <G fill={color} id="g546">
          <G fill={color} id="g552">
            <G fill={color} id="g554">
              <Path
                id="path562"
                fill={color}
                d="m 189.236,214.74 c 0,-1.644 1.334,-2.976 2.978,-2.976 v 0 c 1.644,0 2.977,1.333 2.977,2.977 v 0 c -0.001,1.644 -1.334,2.978 -2.978,2.978 v 0 c -1.644,0 -2.977,-1.335 -2.977,-2.979"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g564">
        <G fill={color} id="g566">
          <G fill={color} id="g572">
            <G fill={color} id="g574">
              <Path
                id="path582"
                fill={color}
                d="m 189.733,231.841 c 0,-1.368 1.11,-2.478 2.479,-2.478 v 0 c 1.369,0 2.478,1.111 2.478,2.479 v 0 c 0,1.369 -1.11,2.478 -2.479,2.478 v 0 c -1.369,0 -2.478,-1.11 -2.478,-2.479"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g584">
        <G fill={color} id="g586">
          <G fill={color} id="g592">
            <G fill={color} id="g594">
              <Path
                id="path602"
                fill={color}
                d="m 199.927,245.124 c 0,-1.093 0.886,-1.978 1.979,-1.978 v 0 c 1.093,0 1.979,0.885 1.979,1.979 v 0 c 0,1.092 -0.886,1.978 -1.979,1.978 v 0 c -1.093,0 -1.979,-0.886 -1.979,-1.979"
              />
            </G>
          </G>
        </G>
      </G>
      <G fill={color} id="g604">
        <G fill={color} id="g606">
          <G fill={color} id="g612">
            <G fill={color} id="g614">
              <Path
                id="path622"
                fill={color}
                d="m 217.886,256.819 c -3.574,-0.002 -6.471,-2.899 -6.471,-6.474 v 0 c 0,-3.575 2.898,-6.472 6.473,-6.472 v 0 c 3.575,0.001 6.472,2.899 6.472,6.474 v 0 c -0.001,3.574 -2.898,6.472 -6.472,6.472 v 0 c 0,0 -0.001,0 -0.002,0"
              />
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
)

export default EmurgoIcon

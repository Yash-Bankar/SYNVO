"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useId,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useReducedMotion } from "framer-motion";

export const CITRON_FACE =
  "M227.00,38.50 Q238,37 258.50,37.50 Q279,38 294.00,41.50 Q309,45 325.00,52.50 Q341,60 341.50,61.00 Q342,62 346.00,64.00 Q350,66 351.00,67.50 Q352,69 353.00,69.00 Q354,69 355.50,71.00 Q357,73 358.00,73.00 Q359,73 362.00,76.50 Q365,80 366.00,80.00 Q367,80 373.00,87.00 Q379,94 369.00,104.50 Q359,115 359.00,116.00 Q359,117 355.00,120.50 Q351,124 351.00,125.00 Q351,126 347.00,129.50 Q343,133 343.00,134.00 Q343,135 339.00,138.50 Q335,142 335.00,143.00 Q335,144 332.00,146.50 Q329,149 329.00,150.00 Q329,151 373.00,150.50 Q417,150 428.50,173.00 Q440,196 440.00,197.50 Q440,199 445.00,208.00 Q450,217 450.00,218.50 Q450,220 453.00,225.00 Q456,230 456.00,231.50 Q456,233 460.00,241.00 Q464,249 465.00,248.50 Q466,248 469.00,242.00 Q472,236 472.00,234.50 Q472,233 502.50,172.00 Q533,111 534.00,110.50 Q535,110 535.00,108.50 Q535,107 537.00,103.00 Q539,99 541.00,96.50 Q543,94 543.50,91.50 Q544,89 545.00,88.50 Q546,88 549.50,80.00 Q553,72 558.50,65.00 Q564,58 565.00,58.00 Q566,58 568.00,55.50 Q570,53 575.50,50.00 Q581,47 589.00,45.00 Q597,43 643.00,43.00 Q689,43 684.00,44.50 Q679,46 675.00,49.00 Q671,52 670.00,52.00 Q669,52 663.50,57.50 Q658,63 658.00,64.00 Q658,65 654.00,70.00 Q650,75 648.50,79.00 Q647,83 646.00,83.50 Q645,84 632.50,109.00 Q620,134 620.00,135.50 Q620,137 611.50,153.00 Q603,169 603.00,170.50 Q603,172 597.50,182.00 Q592,192 592.00,193.50 Q592,195 585.00,208.00 Q578,221 578.00,222.50 Q578,224 573.00,233.00 Q568,242 568.00,243.50 Q568,245 560.50,259.00 Q553,273 553.00,274.50 Q553,276 545.00,291.00 Q537,306 537.00,307.50 Q537,309 529.00,324.00 Q521,339 521.00,340.50 Q521,342 513.00,357.00 Q505,372 505.00,373.50 Q505,375 502.50,380.00 Q500,385 493.50,397.00 Q487,409 486.50,411.50 Q486,414 484.50,415.50 Q483,417 483.00,418.50 Q483,420 481.00,424.00 Q479,428 478.00,428.50 Q477,429 475.00,433.00 Q473,437 466.50,444.00 Q460,451 459.00,451.00 Q458,451 457.00,452.50 Q456,454 452.50,455.50 Q449,457 448.50,458.00 Q448,459 438.00,463.00 Q428,467 419.50,468.50 Q411,470 375.50,470.00 Q340,470 344.00,461.00 Q348,452 350.00,449.50 Q352,447 352.00,445.50 Q352,444 353.00,443.50 Q354,443 358.00,434.00 Q362,425 363.00,424.50 Q364,424 368.00,415.00 Q372,406 373.00,405.50 Q374,405 379.50,393.00 Q385,381 386.00,380.50 Q387,380 396.00,362.00 Q405,344 415.00,350.00 Q425,356 433.50,358.50 Q442,361 457.50,361.50 Q473,362 480.00,360.50 Q487,359 494.00,355.50 Q501,352 505.50,347.50 Q510,343 513.00,335.00 Q516,327 515.50,318.50 Q515,310 511.00,301.00 Q507,292 497.00,282.00 Q487,272 486.00,272.00 Q485,272 480.00,268.00 Q475,264 472.00,263.00 Q469,262 468.50,261.00 Q468,260 452.50,252.50 Q437,245 435.50,245.00 Q434,245 430.00,242.50 Q426,240 424.50,240.00 Q423,240 408.00,232.00 Q393,224 392.50,223.00 Q392,222 386.50,219.00 Q381,216 380.00,214.50 Q379,213 378.00,213.00 Q377,213 376.00,211.50 Q375,210 374.00,210.00 Q373,210 368.50,205.50 Q364,201 363.00,201.00 Q362,201 353.50,192.50 Q345,184 344.00,184.00 Q343,184 336.50,177.00 Q330,170 329.00,170.00 Q328,170 326.00,167.50 Q324,165 323.00,165.00 Q322,165 316.50,160.00 Q311,155 309.00,154.50 Q307,154 302.50,150.50 Q298,147 294.00,145.50 Q290,144 289.50,143.00 Q289,142 285.00,140.50 Q281,139 280.50,138.00 Q280,137 277.50,136.50 Q275,136 273.50,134.50 Q272,133 268.00,131.00 Q264,129 262.50,129.00 Q261,129 255.00,125.50 Q249,122 247.50,122.00 Q246,122 243.00,120.00 Q240,118 238.50,118.00 Q237,118 235.00,116.50 Q233,115 225.00,112.50 Q217,110 216.00,109.00 Q215,108 209.50,107.00 Q204,106 197.00,103.50 Q190,101 177.00,99.00 Q164,97 155.00,97.00 Q146,97 137.50,98.50 Q129,100 123.50,102.50 Q118,105 111.50,111.00 Q105,117 102.50,121.50 Q100,126 102.00,120.00 Q104,114 105.50,112.50 Q107,111 108.00,108.00 Q109,105 111.50,102.50 Q114,100 114.00,99.00 Q114,98 121.00,90.50 Q128,83 129.00,83.00 Q130,83 132.00,80.50 Q134,78 135.00,78.00 Q136,78 137.50,76.00 Q139,74 140.00,74.00 Q141,74 142.00,72.50 Q143,71 144.00,71.00 Q145,71 148.50,68.00 Q152,65 164.50,58.50 Q177,52 178.50,52.00 Q180,52 181.00,51.00 Q182,50 185.00,49.50 Q188,49 192.00,47.00 Q196,45 206.00,42.50 Q216,40 227.00,38.50 Z M100.00,169.50 Q98,162 101.50,169.50 Q105,177 110.00,182.50 Q115,188 116.00,188.00 Q117,188 118.00,189.50 Q119,191 120.00,191.00 Q121,191 121.50,192.00 Q122,193 126.50,195.50 Q131,198 138.50,200.50 Q146,203 152.00,204.00 Q158,205 175.50,205.00 Q193,205 219.00,201.50 Q245,198 263.50,198.00 Q282,198 296.00,201.50 Q310,205 312.50,207.00 Q315,209 317.00,209.50 Q319,210 319.50,211.00 Q320,212 321.00,212.00 Q322,212 323.50,214.00 Q325,216 326.00,216.00 Q327,216 334.00,224.50 Q341,233 344.50,241.50 Q348,250 349.50,260.00 Q351,270 350.50,278.00 Q350,286 348.00,293.50 Q346,301 343.00,307.00 Q340,313 336.50,317.00 Q333,321 333.00,322.00 Q333,323 330.00,325.50 Q327,328 327.00,329.00 Q327,330 321.00,335.00 Q315,340 308.00,345.50 Q301,351 293.50,355.00 Q286,359 290.00,355.00 Q294,351 295.00,351.00 Q296,351 297.00,349.00 Q298,347 300.00,345.50 Q302,344 305.00,338.50 Q308,333 309.00,329.00 Q310,325 309.50,316.00 Q309,307 307.50,304.50 Q306,302 306.00,300.50 Q306,299 305.00,298.50 Q304,298 302.00,294.00 Q300,290 294.00,284.50 Q288,279 276.00,272.50 Q264,266 260.00,265.00 Q256,264 254.00,262.50 Q252,261 250.50,261.00 Q249,261 236.50,255.00 Q224,249 222.50,249.00 Q221,249 213.00,245.00 Q205,241 197.50,238.50 Q190,236 188.00,234.50 Q186,233 183.00,232.50 Q180,232 174.50,229.00 Q169,226 165.00,225.00 Q161,224 146.50,217.00 Q132,210 128.00,206.50 Q124,203 123.00,203.00 Q122,203 115.50,196.00 Q109,189 109.00,188.00 Q109,187 108.00,186.50 Q107,186 104.50,181.50 Q102,177 100.00,169.50 Z M50.00,277.00 Q50,229 52.00,229.00 Q54,229 61.00,232.50 Q68,236 74.50,238.00 Q81,240 83.00,241.50 Q85,243 89.00,244.00 Q93,245 95.00,246.50 Q97,248 100.00,248.50 Q103,249 105.00,250.50 Q107,252 108.50,252.00 Q110,252 119.50,256.50 Q129,261 130.50,261.00 Q132,261 133.00,262.00 Q134,263 144.00,266.50 Q154,270 154.00,320.00 Q154,370 146.50,368.00 Q139,366 138.00,365.00 Q137,364 128.00,361.00 Q119,358 117.00,356.50 Q115,355 113.50,355.00 Q112,355 81.00,340.00 Q50,325 50.00,277.00 Z";

export const INK_FACE =
  "M682.00,45.50 Q689,43 697.50,43.50 Q706,44 712.50,47.00 Q719,50 724.50,55.50 Q730,61 733.00,68.00 Q736,75 736.50,159.00 Q737,243 735.50,247.50 Q734,252 731.00,255.00 Q728,258 728.00,259.00 Q728,260 721.00,263.50 Q714,267 709.50,267.00 Q705,267 700.50,265.50 Q696,264 691.00,260.00 Q686,256 686.00,255.00 Q686,254 683.50,252.00 Q681,250 681.00,249.00 Q681,248 679.50,246.50 Q678,245 674.50,241.00 Q671,237 671.00,236.00 Q671,235 669.00,233.50 Q667,232 667.00,231.00 Q667,230 665.00,228.50 Q663,227 663.00,226.00 Q663,225 661.00,223.50 Q659,222 657.50,219.00 Q656,216 654.00,214.50 Q652,213 652.00,212.00 Q652,211 650.00,209.50 Q648,208 648.00,207.00 Q648,206 646.00,204.50 Q644,203 644.00,202.00 Q644,201 642.00,199.50 Q640,198 640.00,197.00 Q640,196 638.00,194.50 Q636,193 636.00,192.00 Q636,191 634.00,189.50 Q632,188 632.00,187.00 Q632,186 630.00,184.50 Q628,183 628.00,182.00 Q628,181 626.00,179.50 Q624,178 624.00,177.00 Q624,176 620.50,173.00 Q617,170 617.00,169.00 Q617,168 613.50,164.50 Q610,161 609.00,161.00 Q608,161 608.00,160.00 Q608,159 614.00,148.00 Q620,137 620.00,135.50 Q620,134 632.50,109.00 Q645,84 646.00,83.50 Q647,83 648.50,79.00 Q650,75 651.00,74.50 Q652,74 655.00,68.50 Q658,63 666.50,55.50 Q675,48 682.00,45.50 Z M376.50,95.50 Q378,94 380.00,95.00 Q382,96 382.00,97.00 Q382,98 384.00,99.50 Q386,101 386.00,102.00 Q386,103 390.50,108.00 Q395,113 395.00,114.00 Q395,115 400.00,121.50 Q405,128 405.50,130.00 Q406,132 407.00,132.50 Q408,133 412.50,141.50 Q417,150 392.50,150.50 Q368,151 348.50,151.00 Q329,151 329.00,150.00 Q329,149 332.00,146.50 Q335,144 335.00,143.00 Q335,142 339.00,138.50 Q343,135 343.00,134.00 Q343,133 347.00,129.50 Q351,126 351.00,125.00 Q351,124 355.00,120.50 Q359,117 359.00,116.00 Q359,115 363.00,111.50 Q367,108 367.00,107.00 Q367,106 371.00,102.50 Q375,99 375.00,98.00 Q375,97 376.50,95.50 Z M137.50,98.50 Q146,97 159.50,97.50 Q173,98 188.50,101.50 Q204,105 200.50,108.50 Q197,112 195.00,118.00 Q193,124 193.50,129.50 Q194,135 196.50,140.00 Q199,145 202.50,148.50 Q206,152 207.00,152.00 Q208,152 208.50,153.00 Q209,154 211.00,154.50 Q213,155 215.50,157.00 Q218,159 232.00,163.00 Q246,167 264.00,170.50 Q282,174 291.00,177.50 Q300,181 304.00,184.50 Q308,188 309.00,188.00 Q310,188 313.00,191.50 Q316,195 318.00,198.50 Q320,202 321.00,207.00 Q322,212 321.00,212.00 Q320,212 319.50,211.00 Q319,210 317.00,209.50 Q315,209 312.50,207.00 Q310,205 299.50,202.00 Q289,199 267.00,198.50 Q245,198 219.00,201.50 Q193,205 175.50,205.00 Q158,205 147.00,202.50 Q136,200 127.50,195.50 Q119,191 112.00,184.00 Q105,177 101.00,168.50 Q97,160 96.50,151.00 Q96,142 97.00,136.50 Q98,131 101.50,124.00 Q105,117 110.00,112.00 Q115,107 122.00,103.50 Q129,100 137.50,98.50 Z M325.50,170.50 Q322,165 323.00,165.00 Q324,165 326.00,167.50 Q328,170 329.00,170.00 Q330,170 342.00,182.00 Q354,194 355.00,194.00 Q356,194 359.00,197.50 Q362,201 363.00,201.00 Q364,201 366.00,203.50 Q368,206 369.00,206.00 Q370,206 375.50,211.00 Q381,216 382.00,216.00 Q383,216 388.00,220.00 Q393,224 395.00,224.50 Q397,225 397.50,226.00 Q398,227 400.00,227.50 Q402,228 402.50,229.00 Q403,230 413.00,235.00 Q423,240 424.50,240.00 Q426,240 430.00,242.50 Q434,245 435.50,245.00 Q437,245 440.00,247.00 Q443,249 444.50,249.00 Q446,249 460.50,256.50 Q475,264 475.50,265.00 Q476,266 481.50,269.00 Q487,272 488.50,274.00 Q490,276 491.00,276.00 Q492,276 497.50,281.50 Q503,287 503.00,288.00 Q503,289 505.00,290.50 Q507,292 507.50,294.00 Q508,296 510.00,298.50 Q512,301 514.00,308.00 Q516,315 516.00,321.00 Q516,327 515.00,331.00 Q514,335 512.00,339.00 Q510,343 508.00,344.50 Q506,346 506.00,347.00 Q506,348 504.50,348.50 Q503,349 500.50,351.50 Q498,354 488.50,357.50 Q479,361 464.00,361.50 Q449,362 441.50,360.50 Q434,359 424.50,355.00 Q415,351 414.50,350.00 Q414,349 410.50,347.50 Q407,346 405.50,344.00 Q404,342 403.00,342.00 Q402,342 398.00,338.00 Q394,334 394.00,333.00 Q394,332 392.00,330.50 Q390,329 390.00,328.00 Q390,327 387.00,323.50 Q384,320 383.50,318.00 Q383,316 382.00,315.50 Q381,315 375.50,304.00 Q370,293 368.50,288.00 Q367,283 365.50,281.00 Q364,279 360.50,268.50 Q357,258 356.00,257.00 Q355,256 354.50,253.00 Q354,250 353.00,249.00 Q352,248 349.50,239.00 Q347,230 346.00,229.00 Q345,228 344.00,223.00 Q343,218 342.00,217.00 Q341,216 340.50,212.50 Q340,209 339.00,208.00 Q338,207 338.00,205.00 Q338,203 333.50,189.50 Q329,176 325.50,170.50 Z M259.00,269.00 Q261,266 262.50,266.00 Q264,266 276.00,272.50 Q288,279 294.00,284.50 Q300,290 300.00,291.00 Q300,292 303.00,295.50 Q306,299 308.00,305.50 Q310,312 310.00,318.50 Q310,325 307.00,333.00 Q304,341 300.00,346.00 Q296,351 295.00,351.00 Q294,351 292.00,353.50 Q290,356 289.00,356.00 Q288,356 285.50,358.50 Q283,361 270.50,366.00 Q258,371 249.50,373.00 Q241,375 228.50,376.50 Q216,378 202.50,377.50 Q189,377 180.00,376.00 Q171,375 162.50,372.50 Q154,370 154.00,320.50 Q154,271 174.00,277.50 Q194,284 206.50,285.00 Q219,286 226.00,285.00 Q233,284 237.50,282.50 Q242,281 247.50,278.00 Q253,275 254.00,273.50 Q255,272 256.00,272.00 Q257,272 259.00,269.00 Z";

/** Guide calligraphy path that writes the "S" ribbon folds with entrance swoop */
const PATH_S =
  "M -80,-30 C -20,10 20,20 60,30 C 130,25 220,25 285,38 C 345,45 375,68 375,95 C 375,135 280,185 115,175 C 90,210 120,255 210,265 C 290,270 335,290 335,325 C 335,370 250,380 154,370 C 115,360 80,340 50,277";

/** Guide calligraphy path that writes the "Y" loops & peak */
const PATH_Y_LOOP =
  "M 330,150 C 380,118 430,155 460,215 C 480,255 470,325 410,380 C 370,410 400,470 460,460 C 510,430 535,350 560,250 C 600,160 640,75 680,43 C 720,35 745,95 735,180 C 725,250 670,270 635,210";

/** Guide calligraphy path that writes the "Y" long descending stem */
const PATH_Y_STEM = "M 680,45 L 415,470 C 400,490 380,495 360,490";

const S_TOTAL_LENGTH = 1450;
const Y_LOOP_TOTAL_LENGTH = 1290;
const Y_STEM_TOTAL_LENGTH = 570;

export interface HeroSyRibbonHandle {
  replay: () => void;
}

export interface HeroSyRibbonProps {
  preserveAspectRatio?: string;
  className?: string;
  autoPlay?: boolean;
  duration?: number;
  interactive?: boolean;
  onProgress?: (progress: number) => void;
  onComplete?: () => void;
  showReplayButton?: boolean;
}

export const HeroSyRibbon = forwardRef<HeroSyRibbonHandle, HeroSyRibbonProps>(
  (
    {
      preserveAspectRatio = "xMidYMid meet",
      className = "",
      autoPlay = true,
      duration = 2400,
      interactive = false,
      onProgress,
      onComplete,
      showReplayButton = false,
    },
    ref
  ) => {
    const rawId = useId();
    const uid = rawId.replace(/:/g, "_");
    const maskId = `sy-write-mask-${uid}`;
    const filterId = `sy-cloth-wave-${uid}`;
    const sheenGradId = `sy-sheen-grad-${uid}`;
    const sheenMaskId = `sy-sheen-mask-${uid}`;
    const glowGradId = `sy-glow-head-${uid}`;

    const prefersReducedMotion = useReducedMotion();

    const [isComplete, setIsComplete] = useState(false);
    const [sheenProgress, setSheenProgress] = useState(0);
    const [waveScale, setWaveScale] = useState(16);
    const [head, setHead] = useState<{
      x: number;
      y: number;
      angle: number;
      visible: boolean;
      flutter: number;
    }>({
      x: 0,
      y: 0,
      angle: 0,
      visible: false,
      flutter: 0,
    });

    const sPathRef = useRef<SVGPathElement>(null);
    const yLoopPathRef = useRef<SVGPathElement>(null);
    const yStemPathRef = useRef<SVGPathElement>(null);

    const sLengthRef = useRef(S_TOTAL_LENGTH);
    const yLoopLengthRef = useRef(Y_LOOP_TOTAL_LENGTH);
    const yStemLengthRef = useRef(Y_STEM_TOTAL_LENGTH);

    const rafRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);

    // Measure exact path lengths after mount
    useEffect(() => {
      if (sPathRef.current) {
        const l = sPathRef.current.getTotalLength();
        if (l > 100) sLengthRef.current = l;
      }
      if (yLoopPathRef.current) {
        const l = yLoopPathRef.current.getTotalLength();
        if (l > 100) yLoopLengthRef.current = l;
      }
      if (yStemPathRef.current) {
        const l = yStemPathRef.current.getTotalLength();
        if (l > 50) yStemLengthRef.current = l;
      }
    }, []);

    // Frame update function
    const updateFrame = useCallback(
      (now: number) => {
        if (!startTimeRef.current) startTimeRef.current = now;
        const elapsed = now - startTimeRef.current;
        const t = Math.min(1, elapsed / duration);

        if (onProgress) onProgress(t);

        // Wave scale dampens smoothly as ribbon settles into position
        const scaleVal = Math.max(0, 16 * Math.pow(1 - t, 1.5));
        setWaveScale(scaleVal);

        // Sequence breakdown:
        // 0.00 -> 0.44: Drawing 'S'
        // 0.42 -> 0.74: Drawing 'Y' upper loop & fold
        // 0.72 -> 0.90: Drawing 'Y' descending diagonal stem
        // 0.88 -> 1.00: Settling + specular light gleam
        const sProg = Math.min(1, Math.max(0, t / 0.44));
        const yLoopProg = Math.min(1, Math.max(0, (t - 0.42) / 0.32));
        const yStemProg = Math.min(1, Math.max(0, (t - 0.72) / 0.18));

        // Update stroke offsets in the mask
        if (sPathRef.current) {
          const offset = sLengthRef.current * (1 - sProg);
          sPathRef.current.style.strokeDashoffset = `${offset}`;
        }
        if (yLoopPathRef.current) {
          if (t < 0.40) {
            yLoopPathRef.current.style.opacity = "0";
          } else {
            yLoopPathRef.current.style.opacity = "1";
            const offset = yLoopLengthRef.current * (1 - yLoopProg);
            yLoopPathRef.current.style.strokeDashoffset = `${offset}`;
          }
        }
        if (yStemPathRef.current) {
          if (t < 0.70) {
            yStemPathRef.current.style.opacity = "0";
          } else {
            yStemPathRef.current.style.opacity = "1";
            const offset = yStemLengthRef.current * (1 - yStemProg);
            yStemPathRef.current.style.strokeDashoffset = `${offset}`;
          }
        }

        // Calculate leading ribbon head position & flutter wave
        let curHead = { x: 0, y: 0, angle: 0, visible: false, flutter: 0 };
        const flutter = Math.sin(t * 36) * 11;

        if (t < 0.44 && sPathRef.current) {
          const len = Math.max(1, sProg * sLengthRef.current);
          const pt = sPathRef.current.getPointAtLength(len);
          const ptPrev = sPathRef.current.getPointAtLength(Math.max(0, len - 6));
          const angle =
            Math.atan2(pt.y - ptPrev.y, pt.x - ptPrev.x) * (180 / Math.PI);
          curHead = { x: pt.x, y: pt.y, angle, visible: true, flutter };
        } else if (t < 0.74 && yLoopPathRef.current) {
          const len = Math.max(1, yLoopProg * yLoopLengthRef.current);
          const pt = yLoopPathRef.current.getPointAtLength(len);
          const ptPrev = yLoopPathRef.current.getPointAtLength(Math.max(0, len - 6));
          const angle =
            Math.atan2(pt.y - ptPrev.y, pt.x - ptPrev.x) * (180 / Math.PI);
          curHead = { x: pt.x, y: pt.y, angle, visible: true, flutter };
        } else if (t < 0.90 && yStemPathRef.current) {
          const len = Math.max(1, yStemProg * yStemLengthRef.current);
          const pt = yStemPathRef.current.getPointAtLength(len);
          const ptPrev = yStemPathRef.current.getPointAtLength(Math.max(0, len - 6));
          const angle =
            Math.atan2(pt.y - ptPrev.y, pt.x - ptPrev.x) * (180 / Math.PI);
          curHead = { x: pt.x, y: pt.y, angle, visible: true, flutter };
        }
        setHead(curHead);

        // Specular light sheen during settling (0.86 to 1.0)
        if (t >= 0.86) {
          const sheenT = (t - 0.86) / 0.14;
          setSheenProgress(sheenT);
        } else {
          setSheenProgress(0);
        }

        if (t < 1) {
          rafRef.current = requestAnimationFrame(updateFrame);
        } else {
          setIsComplete(true);
          setWaveScale(0);
          setHead((h) => ({ ...h, visible: false }));
          if (onComplete) onComplete();
        }
      },
      [duration, onProgress, onComplete]
    );

    // Play/start animation
    const play = useCallback(() => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (prefersReducedMotion) {
        setIsComplete(true);
        setWaveScale(0);
        if (onComplete) onComplete();
        return;
      }

      setIsComplete(false);
      setSheenProgress(0);
      setWaveScale(16);
      startTimeRef.current = null;

      // Immediately hide strokes
      if (sPathRef.current) {
        sPathRef.current.style.opacity = "1";
        sPathRef.current.style.strokeDashoffset = `${sLengthRef.current}`;
      }
      if (yLoopPathRef.current) {
        yLoopPathRef.current.style.opacity = "0";
        yLoopPathRef.current.style.strokeDashoffset = `${yLoopLengthRef.current}`;
      }
      if (yStemPathRef.current) {
        yStemPathRef.current.style.opacity = "0";
        yStemPathRef.current.style.strokeDashoffset = `${yStemLengthRef.current}`;
      }

      rafRef.current = requestAnimationFrame(updateFrame);
    }, [prefersReducedMotion, updateFrame, onComplete]);

    // Imperative ref handler
    useImperativeHandle(ref, () => ({
      replay: play,
    }));

    useEffect(() => {
      if (autoPlay) {
        const timer = setTimeout(() => {
          play();
        }, 50);
        return () => {
          clearTimeout(timer);
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
      }
    }, [autoPlay, play]);

    // Specular sheen sweep coordinates
    const sheenX = -450 + sheenProgress * 1500;

    return (
      <div
        className={`relative inline-block w-full h-full select-none outline-none focus:outline-none focus-visible:outline-none group ${className}`}
        onClick={interactive ? play : undefined}
        title={interactive ? "Click to replay ribbon flow" : undefined}
        role={interactive ? "button" : "img"}
        tabIndex={interactive ? 0 : undefined}
        onKeyDown={(e) => {
          if (interactive && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            play();
          }
        }}
      >
        <svg
          viewBox="0 0 768 512"
          preserveAspectRatio={preserveAspectRatio}
          className="w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="SYNVO ribbon monogram flowing like silk cloth to form the brand mark"
        >
          <defs>
            {/* Cloth ripple displacement map */}
            <filter
              id={filterId}
              x="-25%"
              y="-25%"
              width="150%"
              height="150%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.016 0.03"
                numOctaves={2}
                seed={5}
                result="noise"
              >
                <animate
                  attributeName="baseFrequency"
                  dur="4s"
                  values="0.016 0.03; 0.022 0.04; 0.016 0.03"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale={waveScale}
                xChannelSelector="R"
                yChannelSelector="G"
                result="displaced"
              />
            </filter>

            {/* Radiant glow particle for the leading ribbon head */}
            <radialGradient id={glowGradId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF9C4" stopOpacity="1" />
              <stop offset="30%" stopColor="#EEE99D" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#EE6747" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EE6747" stopOpacity="0" />
            </radialGradient>

            {/* Specular sheen linear gradient (satin reflection) */}
            <linearGradient
              id={sheenGradId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="42%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.65" />
              <stop offset="58%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Sheen clip mask */}
            <mask id={sheenMaskId}>
              <path d={CITRON_FACE} fill="#FFFFFF" fillRule="evenodd" />
              <path d={INK_FACE} fill="#FFFFFF" fillRule="evenodd" />
            </mask>

            {/* Drawing mask revealing the logo progressively along the calligraphy stroke */}
            <mask id={maskId} maskUnits="userSpaceOnUse">
              <rect x="0" y="0" width="768" height="512" fill="black" />
              {/* Path S */}
              <path
                ref={sPathRef}
                d={PATH_S}
                fill="none"
                stroke="white"
                strokeWidth="175"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={S_TOTAL_LENGTH}
                strokeDashoffset={isComplete ? 0 : S_TOTAL_LENGTH}
                style={{
                  strokeDashoffset: isComplete ? 0 : S_TOTAL_LENGTH,
                  opacity: 1,
                }}
              />
              {/* Path Y Loop */}
              <path
                ref={yLoopPathRef}
                d={PATH_Y_LOOP}
                fill="none"
                stroke="white"
                strokeWidth="175"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={Y_LOOP_TOTAL_LENGTH}
                strokeDashoffset={isComplete ? 0 : Y_LOOP_TOTAL_LENGTH}
                style={{
                  strokeDashoffset: isComplete ? 0 : Y_LOOP_TOTAL_LENGTH,
                  opacity: isComplete ? 1 : 0,
                }}
              />
              {/* Path Y Stem */}
              <path
                ref={yStemPathRef}
                d={PATH_Y_STEM}
                fill="none"
                stroke="white"
                strokeWidth="180"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={Y_STEM_TOTAL_LENGTH}
                strokeDashoffset={isComplete ? 0 : Y_STEM_TOTAL_LENGTH}
                style={{
                  strokeDashoffset: isComplete ? 0 : Y_STEM_TOTAL_LENGTH,
                  opacity: isComplete ? 1 : 0,
                }}
              />
            </mask>
          </defs>

          {/* Core Ribbon Group */}
          <g
            mask={isComplete ? undefined : `url(#${maskId})`}
            filter={waveScale > 0.5 ? `url(#${filterId})` : undefined}
          >
            {/* Subtle under-fold ambient shadow */}
            <path
              d={INK_FACE}
              fill="#181525"
              fillRule="evenodd"
              opacity="0.3"
              transform="translate(4, 6)"
            />
            {/* Citron Face */}
            <path
              d={CITRON_FACE}
              fill="#EEE99D"
              fillRule="evenodd"
              className="transition-colors duration-500"
            />
            {/* Ink Face */}
            <path
              d={INK_FACE}
              fill="#262139"
              fillRule="evenodd"
              className="transition-colors duration-500"
            />
          </g>

          {/* Active Flowing Ribbon Leader (The Satin Cloth Tip Flutter) */}
          {head.visible && (
            <g
              transform={`translate(${head.x}, ${head.y}) rotate(${head.angle})`}
              className="pointer-events-none"
            >
              {/* Trailing silk wave curl */}
              <path
                d={`M -45, -20 Q -20, ${-25 + head.flutter} 0, -10 L 0, 10 Q -25, ${20 - head.flutter} -45, 15 Z`}
                fill="#EEE99D"
                opacity="0.9"
              />
              <path
                d={`M -50, -10 Q -25, ${-15 - head.flutter} 0, -5 L 0, 8 Q -30, ${15 + head.flutter} -50, 5 Z`}
                fill="#262139"
                opacity="0.75"
              />
              {/* Glowing golden silk ember head */}
              <circle cx="0" cy="0" r="38" fill={`url(#${glowGradId})`} />
              <circle cx="0" cy="0" r="14" fill="#FFFDF0" opacity="0.95" />
              {/* Micro trailing silk dust flecks */}
              <circle
                cx="-28"
                cy={head.flutter * 0.8}
                r="4.5"
                fill="#EEE99D"
                opacity="0.8"
              />
              <circle
                cx="-48"
                cy={-head.flutter * 0.6}
                r="3"
                fill="#FFF9C4"
                opacity="0.7"
              />
            </g>
          )}

          {/* Specular Light Sheen Sweep Overlay */}
          {sheenProgress > 0 && sheenProgress < 1 && (
            <g mask={`url(#${sheenMaskId})`} className="pointer-events-none">
              <rect
                x={sheenX}
                y="-100"
                width="340"
                height="700"
                fill={`url(#${sheenGradId})`}
                transform="rotate(25 384 256)"
              />
            </g>
          )}
        </svg>

        {/* Optional Discreet Replay Pill in Hero Section */}
        {showReplayButton && isComplete && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              play();
            }}
            aria-label="Replay ribbon cloth animation"
            className="absolute bottom-2 right-4 md:bottom-4 md:right-8 z-30 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 px-3 py-1.5 rounded-full bg-ink/75 hover:bg-ink text-citron text-xs font-medium tracking-wide flex items-center gap-1.5 shadow-lg backdrop-blur-md border border-citron/20 cursor-pointer pointer-events-auto"
          >
            <svg
              className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
              <path d="M3 21v-5h5" />
            </svg>
            <span>Replay ribbon</span>
          </button>
        )}
      </div>
    );
  }
);

HeroSyRibbon.displayName = "HeroSyRibbon";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { colors, colorUtils } from "@brandwatch/axiom-materials";
import CrLogo from "./logos/CrLogo";
import DataLogo from "./logos/DataLogo";
import MyLogo from "./logos/MyLogo";
import "./AnimatedLogo.css";

/**
 * Animated product logo.
 */
function AnimatedLogo({
  shouldAnimate = true,
  onMouseEnter,
  onMouseLeave,
  logo = "cr",
}) {
  const [animationRunning, setAnimationRunning] = useState(false);
  const [animationState, setAnimationState] = useState("initial");

  useEffect(() => {
    if (!animationRunning) {
      if (shouldAnimate && animationState === "close") {
        setAnimationState("open");
      }

      if (!shouldAnimate) {
        setAnimationState("close");
      }
    }
  }, [animationRunning, shouldAnimate, animationState]);

  const getLogo = () => {
    if (logo === "cr") return <CrLogo />;
    if (logo === "data") return <DataLogo />;
    if (logo === "my") return <MyLogo />;
  };

  return (
    <svg
      className={classnames("ax-animated-logo", {
        "ax-animated-logo--open": animationState === "open",
        "ax-animated-logo--close": animationState === "close",
      })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="mask--outer">
          <path
            d="
                            M18.896 24.81l-4.837 2.787a3.019 3.019 0 01-2.896.064l-.118-.064-9.538-5.496A3.007 3.007 0 01.003 19.62L0 19.496V8.504C0 7.47.531 6.513 1.4 5.963
                            l.107-.064L11.045.403c.13-.075.264-.14.4-.193l.139-.05.136-.043a3.02 3.02 0 012.21.216l.129.07 9.538 5.496A3.007 3.007 0 0125.1 8.38l.002.124v10.992a3.007 3.007 0 01-1.4 2.54
                            l-.12.072-9.524 5.489 4.837-2.788z"
          />
        </clipPath>

        <clipPath id="mask-orange">
          <rect
            transform="rotate(-46.3) translate(-14, 20)"
            x="0"
            y="0"
            width="28"
            height="28"
          />
        </clipPath>

        <clipPath id="mask-yellow">
          <rect
            transform="rotate(25.5) translate(6.9, 14.2)"
            x="0"
            y="0"
            width="21"
            height="28"
          />
        </clipPath>

        <clipPath id="mask-red">
          <rect
            transform="rotate(61) translate(5, -20)"
            x="0"
            y="0"
            width="28"
            height="10"
          />
        </clipPath>

        <clipPath id="mask-blue">
          <rect
            transform="rotate(-46.3) translate(-24, 0)"
            x="0"
            y="0"
            width="60"
            height="20"
          />
        </clipPath>
      </defs>

      <g clipPath="url(#mask--outer)" transform="translate(1.5, 0)">
        {getLogo()}
        <g transform="rotate(-46.3) translate(-14, 20)">
          <rect
            onAnimationStart={() => setAnimationRunning(true)}
            onAnimationEnd={() => setAnimationRunning(false)}
            fill={colorUtils.rgb2hex(colors.productBlastOff)}
            className="tiles tile-orange"
            x="0"
            y="0"
            width="26.2"
            height="12.5"
          />
        </g>
        {/* Tile: yellow */}
        <g clipPath="url(#mask-orange)">
          <g transform="rotate(25.5) translate(6.75, 14.2)">
            <rect
              fill={colorUtils.rgb2hex(colors.productNewHorizon)}
              className="tiles tile-yellow"
              x="0"
              y="0"
              width="21.1"
              height="6"
            />
          </g>
        </g>
        <g clipPath="url(#mask-blue)">
          <g transform="rotate(25.5) translate(6.75, 14.2)">
            <rect
              fill={colorUtils.rgb2hex(colors.productSunMaker)}
              className="tiles tile-yellow"
              x="0"
              y="0"
              width="21.1"
              height="6"
            />
          </g>
        </g>
        {/* Tile: red */}
        <g clipPath="url(#mask-orange)">
          <g transform="rotate(61) translate(5.7, -20)">
            <rect
              fill={colorUtils.rgb2hex(colors.productCrashCourse)}
              className="tiles tile-red"
              x="0"
              y="0"
              width="25.15"
              height="10"
            />
          </g>
        </g>
        <g clipPath="url(#mask-blue)">
          <g transform="rotate(61) translate(5.7, -20)">
            <rect
              fill="rgb(255, 152, 183)"
              className="tiles tile-red"
              x="0"
              y="0"
              width="25.15"
              height="10"
            />
          </g>
        </g>
        {/* Tile: blue */}
        <g transform="rotate(-46.3) translate(-15, 5)">
          <rect
            fill={colorUtils.rgb2hex(colors.hooloovoo)}
            className="tiles tile-blue"
            x="0"
            y="0"
            width="26.8"
            height="15"
          />
        </g>
        <g clipPath="url(#mask-red)">
          <g transform="rotate(-46.3) translate(-15, 5)">
            <rect
              fill="rgb(169, 139, 188)"
              className="tiles tile-blue"
              x="0"
              y="0"
              width="26.8"
              height="15"
            />
          </g>
        </g>
        <g clipPath="url(#mask-yellow)">
          <g transform="rotate(-46.3) translate(-15, 5)">
            <rect
              fill={colorUtils.rgb2hex(colors.productTerraForm)}
              className="tiles tile-blue"
              x="0"
              y="0"
              width="26.8"
              height="15"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

AnimatedLogo.propTypes = {
  /** Whether the animation should run after the initial close animation */
  shouldAnimate: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  logo: PropTypes.oneOf(["my", "cr", "data"]),
};

export default AnimatedLogo;

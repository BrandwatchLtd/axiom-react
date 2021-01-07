import PropTypes from "prop-types";
import React, { Component } from "react";
import classnames from "classnames";
import { icons } from "@brandwatch/axiom-materials";
import Base from "../Base/Base";

import "./Icon.css";

export default class Icon extends Component {
  static propTypes = {
    /** @ignore */
    className: PropTypes.string,
    /** Text color styling */
    color: PropTypes.oneOf([
      "body",
      "day",
      "night",
      "error",
      "success",
      "warning",
      "disabled",
      "subtle",
      "twitter",
      "facebook",
      "instagram",
      "forbidden-planet",
      "tiny-clanger",
      "critical-mass",
      "fantastic-voyage",
      "paradise-lost",
      "serene-sea",
      "event-horizon",
      "electric-dreams",
      "outer-limits",
      "giant-leap",
      "moon-lagoon",
      "space-invader",
      "extraterrestrial",
      "terra-form",
      "primeval-soup",
      "future-shock",
      "sun-maker",
      "new-horizon",
      "blast-off",
      "crash-course",
      "solar-rust",
      "ground-control",
      "space-oddity",
      "rocky-planet",
      "deep-thought",
      "luna-dust",
      "sentiment-negative",
      "sentiment-positive",
      "sentiment-neutral",
      "ui-accent",
    ]),
    /**
     * Inline styling that allows the Icon to placed next to other inline
     * elements or text.
     */
    /** Height of icon (with unit). */
    height: PropTypes.string,
    inline: PropTypes.bool,
    /** Name of the icon that will be displayed */
    name: PropTypes.oneOf([
      "annotate",
      "analytics-alert",
      "arrow-down",
      "arrow-down-left",
      "arrow-down-right",
      "arrow-left",
      "arrow-right",
      "arrow-up",
      "arrow-up-left",
      "arrow-up-right",
      "at",
      "bar-chart",
      "benchmark",
      "box-collapse",
      "box-expand",
      "brandwatch",
      "chevron-down",
      "chevron-left",
      "chevron-right",
      "chevron-up",
      "clock",
      "cloud-upload",
      "copy",
      "cross",
      "customise",
      "data",
      "deck",
      "dot",
      "dot-outline",
      "double-chevron-left",
      "double-chevron-right",
      "download",
      "drag",
      "duplicate",
      "ellipsis",
      "email",
      "exclude",
      "facebook",
      "feedback",
      "filter",
      "filter-line",
      "flip-horizontal",
      "flip-vertical",
      "folder",
      "folder-closed",
      "followers",
      "form-resize",
      "format-bold",
      "format-italic",
      "format-quote",
      "format-title",
      "format-underline",
      "grid",
      "growth",
      "hamburger",
      "heart",
      "home",
      "information",
      "input",
      "information-circle",
      "installation",
      "instagram",
      "integrations",
      "iris",
      "kred",
      "line-graph",
      "link",
      "list",
      "location",
      "lock",
      "log",
      "magnify-glass",
      "minus",
      "monitor",
      "news",
      "blog",
      "moon",
      "globe",
      "review",
      "blog",
      "open",
      "pause",
      "pencil",
      "pinterest",
      "plugin",
      "plus",
      "speech",
      "preview",
      "question-mark",
      "question-mark-circle",
      "reddit",
      "refresh",
      "replace",
      "reply",
      "reports",
      "retweet",
      "ring",
      "settings",
      "share",
      "shuffle",
      "social-panel",
      "star",
      "sun",
      "switch",
      "tag",
      "theme",
      "tick",
      "tools",
      "trash",
      "triangle-down",
      "triangle-left",
      "triangle-right",
      "triangle-up",
      "twitter",
      "twitter-mono",
      "unlock",
      "user",
      "warning",
      "warning-circle",
      "twitter",
      "facebook",
      "instagram",
      "reddit",
      "pinterest",
      "youtube",
      "qq",
      "tumblr",
      "4chan",
      "sina-weibo",
      "lexis-nexis",
      "twitter-mono",
      "facebook-mono",
      "instagram-mono",
      "reddit-mono",
      "pinterest-mono",
      "youtube-mono",
      "qq-mono",
      "tumblr-mono",
      "4chan-mono",
      "sina-weibo-mono",
      "lexis-nexis-mono",
      "source",
      "vk",
      "vk-mono",
    ]).isRequired,
    /** Size of icon (with unit). Not used when height or width is provided */
    size: PropTypes.string,
    /** Spacing applied to the left of the Icon. Must be used with the inline property */
    spaceLeft: PropTypes.oneOf(["x1", "x2"]),
    /** Spacing applied to the right of the Icon. Must be used with the inline property */
    spaceRight: PropTypes.oneOf(["x1", "x2"]),
    /** Style */
    style: PropTypes.object,
    /** Width of icon (with unit). */
    width: PropTypes.string,
  };

  static defaultProps = {
    size: "1rem",
  };

  render() {
    const {
      color,
      className,
      inline,
      name,
      size,
      width,
      height,
      spaceLeft,
      spaceRight,
      style = {},
      ...rest
    } = this.props;
    const sizeStyle =
      height || width ? { width, height } : { width: size, height: size };

    const classes = classnames(className, "ax-icon", `ax-icon--${name}`, {
      "ax-icon--inline": inline,
      [`ax-icon--space-left-${spaceLeft}`]: spaceLeft,
      [`ax-icon--space-right-${spaceRight}`]: spaceRight,
    });

    if (!icons[name]) {
      return null;
    }

    const { body, viewBox } = icons[name];

    return (
      <Base
        textColor={color}
        {...rest}
        Component="svg"
        className={classes}
        dangerouslySetInnerHTML={{ __html: body }}
        style={{
          ...sizeStyle,
          ...style,
        }}
        viewBox={viewBox}
      />
    );
  }
}

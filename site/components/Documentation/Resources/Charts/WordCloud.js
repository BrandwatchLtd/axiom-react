import React, { Component } from "react";
import cloud from "d3-cloud";
import maxBy from "lodash.maxby";
import minBy from "lodash.minby";
import { Word, WordCloud } from "@brandwatch/axiom-charts";
import {
  AlertBar,
  Dropdown,
  DropdownSource,
  DropdownTarget,
  ProgressInfinite,
} from "@brandwatch/axiom-components";
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from "@brandwatch/axiom-documentation-viewer";
import { colors } from "@brandwatch/axiom-materials";
import { stringToColor } from "@brandwatch/axiom-utils";
import DropdownContext from "./DropdownContext";
import {
  wordCloudData,
  wordCloudDataEmoji,
  wordCloudDataText,
} from "./chartData";

const productColors = Object.keys(colors.productColorNames);

const toValues = (words) =>
  words.map((word) => ({
    text: word,
    value: Math.random() * 80 + 10,
  }));

const linearScale = ([min, max], [lower, upper]) => (value) =>
  min === lower || min === max
    ? lower
    : lower + ((upper - lower) / (max - min)) * (value - min);

const getPositions = (words) =>
  new Promise((resolve, reject) => {
    try {
      const width = 1000;
      const height = 600;
      const values = toValues(words);
      const sizeScale = linearScale(
        [
          minBy(values, ({ value }) => value).value,
          maxBy(values, ({ value }) => value).value,
        ],
        [12, 60]
      );

      cloud()
        .size([width, height])
        .words(values)
        .rotate(0)
        .random(() => 0.5)
        .fontSize(({ value }) => sizeScale(value))
        .font("Roboto, Helvetica, Arial, sans-serif")
        .padding(4)
        .on("end", (d3Labels, bounds) => {
          const boundsHeight = bounds ? bounds[1].y - bounds[0].y : 0;
          const boundsWidth = bounds ? bounds[1].x - bounds[0].x : 0;
          const labels = d3Labels.map((label) => ({
            color: stringToColor(label.text, productColors),
            font: label.font,
            fontSize: label.size,
            text: label.text,
            x: label.x + width / 2 - bounds[0].x,
            y: label.y + height / 2 - bounds[0].y,
          }));

          resolve({ labels, boundsHeight, boundsWidth });
        })
        .start();
    } catch (e) {
      reject(e.toString());
    }
  });

export default class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boundsHeight: null,
      boundsWidth: null,
      error: null,
      clickedWord: null,
      hoveredWord: null,
      labels: [],
    };
  }

  componentDidMount() {
    this.initWordCloud(wordCloudData);
  }

  initWordCloud(data = this._lastData) {
    this._lastData = data;
    getPositions(data)
      .then(({ labels, boundsWidth, boundsHeight }) => {
        this.setState({
          boundsHeight,
          boundsWidth,
          labels: labels.sort((a, b) => a.text.localeCompare(b.text)),
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const {
      boundsHeight,
      boundsWidth,
      clickedWord,
      error,
      hoveredWord,
      labels,
    } = this.state;

    const configurations = [
      [
        {
          name: "Filter Emojis",
          onClick: () => this.initWordCloud(wordCloudDataEmoji),
          selected: this._lastData === wordCloudDataEmoji,
        },
        {
          name: "Filter Text",
          onClick: () => this.initWordCloud(wordCloudDataText),
          selected: this._lastData === wordCloudDataText,
        },
      ],
      [
        {
          name: "Remove filters",
          onClick: () => this.initWordCloud(wordCloudData),
        },
      ],
    ];

    return (
      <DocumentationContent>
        <DocumentationShowCase
          configurations={configurations}
          height="20rem"
          onRefresh={() => this.initWordCloud()}
        >
          {error && <AlertBar type="error">{error}</AlertBar>}

          {!boundsHeight || !boundsWidth ? (
            <ProgressInfinite />
          ) : (
            <WordCloud height={boundsHeight} width={boundsWidth}>
              {labels.map(({ color, font, fontSize, text, x, y }) => (
                <Dropdown
                  key={text}
                  onRequestClose={() => this.setState({ clickedWord: null })}
                  showArrow
                >
                  <DropdownTarget>
                    <Word
                      color={color}
                      disabled={
                        (hoveredWord && hoveredWord !== text) ||
                        (clickedWord && clickedWord !== text)
                      }
                      font={font}
                      fontSize={`${fontSize}px`}
                      onClick={() => this.setState({ clickedWord: text })}
                      onMouseEnter={() => this.setState({ hoveredWord: text })}
                      onMouseLeave={
                        hoveredWord === text
                          ? () => this.setState({ hoveredWord: null })
                          : null
                      }
                      text={text}
                      x={x}
                      y={y}
                    />
                  </DropdownTarget>

                  <DropdownSource>
                    <DropdownContext color={color} value={fontSize} />
                  </DropdownSource>
                </Dropdown>
              ))}
            </WordCloud>
          )}
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-charts/src/WordCloud/Word"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-charts/src/WordCloud/WordCloud"),
          ]}
        />
      </DocumentationContent>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";

import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
// Explicitly import the languages you need
import json from "highlight.js/lib/languages/json";

const registeredLanguages = {};

class Highlight extends Component {
  constructor(props) {
    super(props);

    this.state = { loaded: false };
    this.codeNode = React.createRef();
  }

  componentDidMount() {
    const { language } = this.props;

    // Register the language if not already registered
    if (language && !registeredLanguages[language]) {
      try {
        if (language === "json") {
          hljs.registerLanguage("json", json); // Register json explicitly
        } else {
          const newLanguage = require(`highlight.js/lib/languages/${language}`);
          hljs.registerLanguage(language, newLanguage);
        }
        registeredLanguages[language] = true;

        this.setState({ loaded: true }, this.highlight);
      } catch (e) {
        console.error(e);
        throw Error(`Cannot register the language ${language}`);
      }
    } else {
      this.setState({ loaded: true });
    }
  }

  componentDidUpdate() {
    this.highlight();
  }

  highlight = () => {
    this.codeNode &&
    this.codeNode.current &&
    hljs.highlightBlock(this.codeNode.current);
  };

  render() {
    const { language, children } = this.props;
    const { loaded } = this.state;

    if (!loaded) {
      return null;
    }

    return (
        <pre className="rounded">
        <code ref={this.codeNode} className={language}>
          {children}
        </code>
      </pre>
    );
  }
}

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
};

Highlight.defaultProps = {
  language: "json", // default language to "json"
};

export default Highlight;

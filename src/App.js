import React from "react";
import marked from "marked";
import "./App.css";

const initialState = `
This is a paragraph

**This is bolded text**

> Block Quotes!

# Heading
## Heading 2

- list item 1
- list item 2
- list item 3
[visit my linkedin profile](https://www.linkedin.com/in/deepak-webdev)
This is a inline \`<div></div>\`
This is a block of code:
\`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
\`\`\`
![freecodecamp logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;
class App extends React.Component {
  state = {
    text: initialState,
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return (
      <div className="App">
        <h2 className="text-center mt-4">Convert Your Markdown</h2>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h6>Enter your markdown:</h6>
              <textarea
                id="editor"
                className="form-control p-2"
                value={text}
                onChange={this.handleChange}
              />
            </div>

            <div className="col-6">
              <div
                className="preview rounded"
                dangerouslySetInnerHTML={{ __html: markdown }}
                id="preview"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

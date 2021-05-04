import React from "react";
import Badge from "react-bootstrap/Badge";
let marked = require('marked')

const startText = `# Welcome to my React Markdown Previewer!
## subheading
**bold text**
1. First item
2. Second item
3. Third item

[link](htps://michaelpulliam.net)
 ---
![alt text](./public/logo192.png)
>blockquote
 ***
At the command prompt, type \`nano\`.
  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: startText,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    var inputStyle = {
      width: "40vw",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "2rem",
      padding: "10px",
    };
    var outputStyle = {
      width: "40vw",
      height: "auto",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "1rem",
      padding: "10px",
    };

    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <h1>
                {" "}
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>

          <div className="row mt-auto">
            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Markdown Input
                  </Badge>
                </h4>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                  className="input"
                  id="editor"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                >
                  {" "}
                  {console.log(this.state.markdown)}
                </textarea>
              </div>
            </div>

            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
                id="preview"
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

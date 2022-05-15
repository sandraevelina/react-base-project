import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import InfoBox from "./components/InfoBox/InfoBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    let url = await fetch(
      "https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json"
    );
    let response = await url.json();
    this.formatData(response);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.type !== prevState.type) {
      console.warn("The text has been updated!");
    }
  }

  formatData(response) {
    let formatedData = response.map((item) => {
      const { id, title, descr, employment_type, experience } = item;

      return {
        id,
        title,
        description: descr,
        type: employment_type,
        location: item.locations[0].location.text,
        experience,
        url: item.urls.ad,
        company: item.company.name
      };
    });

    this.setState({
      data: formatedData,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="job-container">
          {this.state.data.map((item) => {
            return (
              <InfoBox
                name={item.title}
                key={item.id}
                description={item.description}
                type={item.type}
                location={item.location}
                experience={item.experience}
                url={item.url}
                company={item.company}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;


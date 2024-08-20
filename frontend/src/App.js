import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";
import Cookies from 'js-cookie';
import './App.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ImageCarousel from './components/Carousel'; 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioFiles: [], // Core list of audio files
      modal: false,
      activeItem: {
        title: "",
        file: null,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  getCSRFToken = () => {
    return Cookies.get('csrftoken'); // Retrieves the CSRF token from cookies
  };

  refreshList = () => {
    axios
      .get("/api/audiofiles/", {
        headers: {
          'X-CSRFToken': this.getCSRFToken(), // Add CSRF token to the request
        }
      })
      .then((res) => this.setState({ audioFiles: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    const headers = {
      'X-CSRFToken': this.getCSRFToken(), // Add CSRF token to the request
    };

    const formData = new FormData();
    formData.append("file", item.file);
    formData.append("title", item.title);
    formData.append("description", item.description);

    if (item.id) {
      axios
        .put(`/api/audiofiles/${item.id}/`, formData, { headers })
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("/api/audiofiles/", formData, { headers })
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`/api/audiofiles/${item.id}/`, {
        headers: {
          'X-CSRFToken': this.getCSRFToken(), // Add CSRF token to the request
        }
      })
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { title: "", file: null };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  renderItems = () => {
    return this.state.audioFiles.map((item) => {
      return (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span
            className="todo-title mr-2 col-3"
            title={item.title}
          >
            {item.title}
          </span>
          <audio controls>
            <source src={item.file} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <span>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDelete(item)}
            >
              Delete
            </button>
          </span>
        </li>
      );
    });
  };

  render() {
    return (
<main className="container">
<br></br><br></br>
  <section id="about" className="portfolio-section" style={{ paddingBottom: "15px" }}>
    <div className="row">
      <div className="col-md-6">
        <img src="solomoncolab.png" alt="" />
      </div>
    </div>
    <div className="col-md-6" style={{ paddingTop: "10px" }}>
      Software engineer by trade, lifelong musician, visual artist once in a blue moon. Expression is a virtuous circle, my practice is supported by the instruments I build.
    </div>
    <br></br>
  </section>

  <section id="audio" className="portfolio-section row justify-content-evenly">
    <div className="col-md-6 col-lg-6">
      <h3 className="text-black text-uppercase "> API</h3>
      <div className="row api">
        <div className="col-12">
          <div className="p-3">
            <div className="mb-4">
              <button className="btn btn-primary" onClick={this.createItem}>
                Upload Audio
              </button>
            </div>
            <ul className="list-group list-group-flush border-top-0">
              {this.renderItems()}
            </ul>
          </div>
        </div>
      </div>
      {this.state.modal ? (
        <Modal activeItem={this.state.activeItem} toggle={this.toggle} onSave={this.handleSubmit} />
      ) : null}
    </div>

    <div className="col-md-6">
      <h3><a href="https://github.com/skimrey/Spellbook" style={{ color: "black" }}>Spellbook</a></h3>
      <div className="guiboard-container">
        <p>Spellbook is the best way to type. Traditional stenography relies on phonetic spellings and an arcane layout. The average typist is more familiar with spelling words the way they're spelled.</p>
        <p>So I started conjuring.</p>
        <p>Sitting at around 3300 spellings, this is a dictionary for and extension of an AutoHotKey word chording program. Initially devised to support my work as a transcriptionist, Spellbook is an ongoing stenographic dictionary for the QWERTY keyboard :)</p>
      </div>
    </div>
  </section>

  <section id="guiboard" className="bg-light justify-content-evenly bg-white mt-4">
    <div className="row">
      <div className="col-md-6">
        <div className="guiboard-container">
          <h3 className="guiboard-title">
            <a href="https://guiboard.com" style={{ color: "black" }}>
              Guiboard
            </a>
          </h3>
          <p className="guiboard-text" style={{ paddingBottom: "3%" }}>
            The Guiboard is a MIDI controller/instrument designed to mimic the layout of notes on a fretboard. As a typist and guitarist, I decided the most immediate way to interface with MIDI would be not-a-piano. Pianos complicate chord/scale patterns by changing the shapes between keys. A fretboard or isomorphic keyboard allows for constant visual intervals.
          </p>
          <iframe
            className="col-12 "
            height="280"
            src="https://www.youtube.com/embed/Qh_0uDtIgWY?si=2PHODADT2eqC5IOG"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <div className="col-md-6">
      <ImageCarousel />
      </div>
    </div>
  </section>
  <br></br><br></br>
</main>

    );
  }
}

export default App;

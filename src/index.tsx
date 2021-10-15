import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";

import LightGallery from "lightgallery/react";
import { LightGallerySettings } from "lightgallery/lg-settings";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { photos } from "./photos";

interface AppProps {}
interface AppState {
  settings: LightGallerySettings;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div>
          <p className="center">Aditya Pakalapati</p>
        <LightGallery plugins={[lgThumbnail, lgZoom]} mode="lg-fade">
          {photos.map((i) => {
            return (
              <a
                className="gallery-item"
                data-src={i.src}
                data-sub-html={i.height}
              >
                <img className="img-responsive" src={i.src} />
              </a>
            );
          })}
        </LightGallery>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

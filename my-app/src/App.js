import React, { Component } from 'react';
import './App.css';
import Btn from '@bbc/igm-btn';
import StickyBar from '@bbc/igm-sticky-bar'
import '@bbc/igm-sticky-bar/dist/StickyBar.css';


function onClick() {
  var element = document.getElementsByClassName("css-xp4uvy select__single-value")[0].innerHTML;
  console.log(element);
  return element;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="content">
          <StickyBar id="ViewRoom" className="StickyBar">
            <div className="StickyBarContents">
              <div className="StickyBarContentsTitle">
                View Room
              </div>
            </div>
          </StickyBar>
          <div className="leftSide">
            <div className="MySection">
              <div className="MySectionTitle">
                My Section:
            </div>
              <div className="MySectionButtons">
                <div>
                  <Btn
                    type="link"
                    tab-index="1"
                    className="Button"
                    onClick={onClick}
                  >
                    <span>My Account</span>
                  </Btn>
                </div>
                <div>
                  <Btn
                    type="link"
                    tab-index="1"
                    className="Button"
                    onClick={onClick}
                  >
                    <span>My Bookings</span>
                  </Btn>
                </div>
                <div>
                  <Btn
                    type="link"
                    tab-index="1"
                    className="Button"
                    onClick={onClick}
                  >
                    <span>My Watched Rooms</span>
                  </Btn>
                </div>
              </div>
            </div>

            <div className="Room">
              <div className="RoomsTitle">
                Rooms:
            </div>
              <div className="RoomsButtons">
                <div>
                  <Btn
                    type="link"
                    tab-index="1"
                    className="Button"
                    onClick={onClick}
                  >
                    <span>Book a Room</span>
                  </Btn>
                </div>
                <div>
                  <Btn
                    type="link"
                    tab-index="1"
                    className="Button"
                    onClick={onClick}
                  >
                    <span>Search a Room</span>
                  </Btn>
                </div>
                <div>
                  <Btn
                    type="link"
                    tab-index="1"
                    className="Button"
                    onClick={onClick}
                  >
                    <span>Meeting Rooms</span>
                  </Btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

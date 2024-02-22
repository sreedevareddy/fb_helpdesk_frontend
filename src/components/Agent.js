import React from "react";

import "../Agent.css";

const Agent = () => {
  return (
    <div className="container-xxl">
      <div className="nav">
        <div className="navitem1">
          <i className="bx bx-shape-circle"></i>
          <i className="bx bxs-inbox active"></i>
          <i className="bx bx-group"></i>
          <i className="bx bx-chart"></i>
        </div>
        <div className="navitem2">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
          <div className="online"></div>
        </div>
      </div>
      <div className="chat-room">
        <div className="heading flex">
          <div className="head1">
            <i className="bx bx-menu-alt-left"></i>
            <h1>Conversations</h1>
          </div>
          <div className="head2">
            <i className="bx bx-revision"></i>
          </div>
        </div>

        <div className="chats">
          <div className="chat-box active">
            <div className="chat-info">
              <div>
                <input type="checkbox" />
                <div>
                  <h3>
                    <b>Amit RG</b>
                  </h3>
                  <h3>Facebook DM</h3>
                </div>
              </div>
              <div className="time-since">10m</div>
            </div>
            <div className="chat-message">
              <h3>Awesome Product</h3>
              <p>
                Hey There! I am probably did one of the best dfsdjf akldjasjd
              </p>
            </div>
          </div>
          <div className="chat-box">
            <div className="chat-info">
              <div>
                <input type="checkbox" />
                <div>
                  <h3>
                    <b>Hiten Saxena</b>
                  </h3>
                  <h3>Facebook Post</h3>
                </div>
              </div>
              <div className="time-since">10m</div>
            </div>
            <div className="chat-message">
              <h3>Available in store</h3>
              <p>Hi do you have any Tshirt Available in store</p>
            </div>
          </div>
        </div>
      </div>
      <div className="message-room">
        <div className="heading flex">
          <div className="head1">
            <h1>Amit RG</h1>
          </div>
        </div>
        <div className="message-box">
          <div className="message left">
            <div className="message-wrap">
              <img
                className="img-show"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              />
              <div>Is it in the stock right now?</div>
            </div>
            <div className="message-time last">Amit RG - Mar 05, 2:22 AM</div>
          </div>
          <div className="message right">
            <div className="message-wrap">
              <img
                className=""
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              />
              <div>We've 3 left in stock!</div>
            </div>
            <div className="message-time">Richard panel - Mar 05, 2:22 AM</div>
          </div>
          <div className="message right">
            <div className="message-wrap">
              <img
                className="img-show"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              />
              <div>If you order before 8PM we can shift it today.</div>
            </div>
            <div className="message-time last">Richard panel - Mar 05, 2:22 AM</div>
          </div>
        </div>
        <div className="message-input">
          <input type="text" placeholder="Message Amit RG" />
        </div>
      </div>
      <div className="profile">
        <div className="profile-content">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
          <div className="profile-name">Amit RG</div>
          <div className="status">
            <span></span>Offline
          </div>
          <div className="profile-btns">
            <div className="btn">
              <i className="bx bxs-phone"></i>
              Call
            </div>
            <div className="btn">
              <i className="bx bxs-user-circle"></i>
              Profile
            </div>
          </div>
        </div>
        <div className="profile-info">
          <h3>Customer details</h3>
          <table>
            <tbody>
              <tr>
                <td>Email</td>
                <td>amit@richpanel.com</td>
              </tr>
              <tr>
                <td>First Name</td>
                <td>Amit</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>RG</td>
              </tr>
            </tbody>
          </table>
          <button className="">View more details</button>
        </div>
      </div>
    </div>
  );
};

export default Agent;

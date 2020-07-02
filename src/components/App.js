import React from "react";

export default function App() {
  return (
    <div className="main container">
      <div className="card card-main mt-7 mb-7 overflow-hidden">
        <div className="row no-gutters">
          <div className="col-12 p-4 px-sm-5 pt-sm-5">
            <h1 className="heading-join text-primary font-weight-bold mb-4">
              Join our community
            </h1>
            <h2 className="heading-join-2 text-success font-weight-bold mb-3">
              30-day, hassle-free money back guarantee
            </h2>

            <p className="text-join md-small text-gray">
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-12 col-sm-6 text-white bg-primary p-4 px-sm-5 pt-sm-5">
            <h1 className="heading-5-6 font-weight-bold mb-3">
              Monthly Subscription
            </h1>
            <p className="mb-1">
              <span className="h2 font-weight-bold align-middle">$29</span>
              <span className="text-white-50 ml-2 align-middle">per month</span>
            </p>
            <p className="text-light-gray mb-4 text-0-98">
              Full access for less than $1 a day
            </p>
            <button className="btn btn-success btn-block text-white font-weight-bold">
              Sign Up
            </button>
          </div>
          <div className="col-12 col-sm-6 text-white bg-primary-lighten p-4 px-sm-5 pt-sm-5">
            <h1 className="heading-5-6 font-weight-bold mb-3">Why Us</h1>
            <ul className="list-why-us list-unstyled text-light-gray">
              <li>
                <small>Tutorials by industry experts</small>
              </li>
              <li>
                <small>Peer & expert code review</small>
              </li>
              <li>
                <small>Coding exercises</small>
              </li>
              <li>
                <small>Access to our GitHub repos</small>
              </li>
              <li>
                <small>Community forum</small>
              </li>
              <li>
                <small>Flashcard decks</small>
              </li>
              <li>
                <small>New videos every week</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

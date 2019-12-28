// This is the Link API
import React from 'react';
import 'isomorphic-unfetch';
import withAuthInitial from '../utils/withAuthInitial';
import List from '../src/components/List/List';

function Scroll() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card-deck">
            <div className="col-sm-12">
              <List />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuthInitial(Scroll);

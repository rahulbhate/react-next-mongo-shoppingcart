import React, { useState } from 'react';
import Link from 'next/link';
const SpeakerCard = (props) => {
  return (
    <>
      <div>
        <img
          src={`/static/speakers/Speaker-${props.speaker.id}.jpg`}
          className="card-img-top"
        />
        <div className="card-body">
          <h4 key={props.speaker.id} className="card-title">
            {props.speaker.firstName} {props.speaker.lastName}
          </h4>
          <Link
            href={{
              pathname: '/speaker',
              query: {
                speakerId: props.speaker.id,
              },
            }}
            as={`speaker/${props.speaker.id}`}
          >
            <a className="btn btn-lg btn-block btn-outline-primary">Details</a>
          </Link>
          <p className="card-text">{props.speaker.bioShort}</p>
        </div>
      </div>
    </>
  );
};

export default SpeakerCard;

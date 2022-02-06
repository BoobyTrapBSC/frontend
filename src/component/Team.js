import React from "react";

export default function Team() {
  return (
    <div id="team-cont" className="w-100">
      <div className="row justify-content-between">
          <h2>TEAM</h2>
        <div className="col-lg-3 my-2">
          <div className="card rounded border-0">
            <img src="https://cdn.sanity.io/images/lfyw4jna/production/91812185693b88a5f5b5c70b05bc98a02ae382c3-960x640.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h3>Gaurav Monga</h3>
              <p className="card-text">
                CEO, BoobyTrap
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 my-2">
          <div className="card rounded border-0">
            <img src="https://cdn.sanity.io/images/lfyw4jna/production/6f0ed8549204a20a87151b3acc13eedfa86b4b5d-960x640.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h3>Bravo Sierra</h3>
              <p className="card-text">
                CFO, BoobyTrap
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 my-2">
          <div className="card rounded border-0">
            <img src="https://cdn.sanity.io/images/lfyw4jna/production/475162e7cc2fe873c98a5e05fafdc347207b3331-960x640.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h3>Arrnaya</h3>
              <p className="card-text">
                Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

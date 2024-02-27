import React, { useEffect, useState } from "react";

export const SectionOne = () => {


    return (
      <section class="section one">
      <div class="nav">
          <div class="left-content">
              <img class="smalllogo" src="/logoimage.png" alt="Small Logo" />
          </div>
          <div class="center">
              <h1>LOREM</h1>
              <h1>IPSUM</h1>
              <h1>DOLOR</h1>
              <h1>SIT</h1>
          </div>
          <div class="right-content">
              <h1>AMET</h1>
          </div>
      </div>
      <div class="headline-container">
          <div id="text-behind">LOREMIPS<br />DOLORSITAM</div>
          <div id="text-behind-blur">LOREMIPS<br />DOLORSITAM</div>
          <div id="text-front">LOREMIPS<br />DOLORSITAM</div>
      </div>
  </section>
    )
}
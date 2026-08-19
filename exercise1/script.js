const datasets = {
  sampleA: {
    claimNo: "20042047",
    appId: "712041",
    submitted: "March 19, 2024 19:21",
    date: "March 15, 2024",
    worker: "Madeleine Willson",

    returnWork: "returned",
    returnDate: "March 15, 2024",

    workType: "modifiedReduced",
    otherWork: "",

    progress: "Terrible. Testing Testing",
    expectedReturn: "",
    concerns: "",

    employerContact: "",
    employerDate: "",

    recovery: "fully",
    recoveryComments: "",

    pain: 6,

    treatment: "continuing",
    providerType: "Physiotherapist",

    lastTreatmentDate: "March 10, 2024",
    lastProvider: "Dr. Best",

    nextTreatmentDate: "March 25, 2024",
    nextProvider: "Dr. Best",

    physioFrequency: "Twice a week",

    medication: "taking",
    medicationName: "Naproxen",

    exercises: "doing",
    exerciseList:
      "Stretching, walking and prescribed strengthening exercises.",

    additional: "No info Testing Testing"
  },

  sampleB: {
    claimNo: "30058112",
    appId: "845201",
    submitted: "August 19, 2026 10:30",
    date: "August 18, 2026",
    worker: "Alex Morgan",

    returnWork: "notReturned",
    returnDate: "",

    workType: "fullRegular",
    otherWork: "",

    progress:
      "Improving steadily; I can perform most daily activities.",

    expectedReturn: "September 2, 2026",

    concerns:
      "I am concerned about lifting heavy objects.",

    employerContact: "Jordan Lee",
    employerDate: "August 17, 2026",

    recovery: "notFully",
    recoveryComments:
      "Pain has reduced but mobility is still limited.",

    pain: 3,

    treatment: "notContinuing",
    providerType: "",

    lastTreatmentDate: "August 12, 2026",
    lastProvider: "City Clinic",

    nextTreatmentDate: "",
    nextProvider: "",

    physioFrequency: "",

    medication: "notTaking",
    medicationName: "",

    exercises: "notDoing",
    exerciseList: "",

    additional: "No additional information."
  }
};


/* =========================
   BASIC HELPERS
   ========================= */

function check(selected) {
  return `<span class="fakecheck ${selected ? "checked" : ""}"></span>`;
}

function option(text, selected) {
  return `
    <div class="option">
      ${check(selected)}
      <span>${text}</span>
    </div>
  `;
}

function val(value, cls = "") {
  return `
    <span class="inline-field ${cls}">
      ${value || "&nbsp;"}
    </span>
  `;
}


/* =========================
   HEADER
   ========================= */

function header(d) {
  return `
    <header class="header">

      <div>
        <img
          class="logo"
          src="../assets/wcb-logo.png"
        >
      </div>

      <div class="address">
        333 Broadway<br>
        Winnipeg, MB R3C 4W3<br>
        Phone: (204) 954-4321<br>
        Toll Free: 1-855-954-4321<br>
        wcb.mb.ca
      </div>

      <div class="titlebox">
        <div class="title">
          Worker Progress Report
        </div>

        <span class="claim">
          Claim No. ${d.claimNo}
        </span>

        <span class="claim">
          WP
        </span>
      </div>

    </header>
  `;
}


/* =========================
   FOOTER
   ========================= */

function footer(d, page) {
  return `
    <footer class="footer">
      <span>Worker App ID: ${d.appId}</span>
      <span>Submitted: ${d.submitted}</span>
      <span>Page ${page} of 2</span>
    </footer>
  `;
}


/* =========================
   PAGE 1
   ========================= */

function page1(d) {

  const returnOpts = [

    option(
      "I have not missed<br>time from work",
      d.returnWork === "notMissed"
    ),

    option(
      "I have not returned<br>to work",
      d.returnWork === "notReturned"
    ),

    option(
      `I returned to work on: ${val(
        d.returnDate,
        "date-field"
      )}`,
      d.returnWork === "returned"
    )

  ].join("");


  const workOpts = [

    option(
      "Full duties, regular<br>hours",
      d.workType === "fullRegular"
    ),

    option(
      "Full duties, reduced<br>hours",
      d.workType === "fullReduced"
    ),

    option(
      "Modified duties,<br>regular hours",
      d.workType === "modifiedRegular"
    ),

    option(
      "Modified duties,<br>reduced hours",
      d.workType === "modifiedReduced"
    )

  ].join("");


  return `
    <section class="paper">

      ${header(d)}

      <div class="intro">
        ${d.worker} provided the following updates in relation to their claim:
      </div>


      <!-- RETURN TO WORK -->

      <h2>Return to Work</h2>

      <div class="box">

        <div class="box-title">
          Select one:
        </div>

        <div class="options cols-3">
          ${returnOpts}
        </div>

      </div>


      <!-- WORKING STATUS -->

      <div class="box">

        <div class="box-title">
          I am working:
        </div>

        <div class="options cols-4">
          ${workOpts}
        </div>

        <div
          class="option"
          style="margin-top:8px"
        >
          ${check(!!d.otherWork)}

          <span>
            Other:
            ${val(d.otherWork)}
          </span>

        </div>

      </div>


      <!-- PROGRESS -->

      <div class="box">

        <div class="box-title">
          My return to work is going:
        </div>

        <div class="small-blue">
          ${d.progress || "&nbsp;"}
        </div>

      </div>


      <!-- EXPECTED RETURN -->

      <div
        style="
          margin:2px 0 18px;
          font-size:15px
        "
      >
        I expect to return to work on:
        ${val(d.expectedReturn, "date-field")}
      </div>


      <!-- CONCERNS -->

      <div class="box large-field">

        <div class="box-title">
          I have the following concerns about returning to work:
        </div>

        <div class="small-blue">
          ${d.concerns || "&nbsp;"}
        </div>

      </div>


      <!-- EMPLOYER CONTACT -->

      <div
        style="
          font-size:14px;
          margin:8px 0 20px
        "
      >
        I was most recently in contact with:
        ${val(d.employerContact)}
        on
        ${val(d.employerDate, "date-field")}
      </div>


      <!-- RECOVERY -->

      <h2>Recovery</h2>

      <div class="box">

        <div class="box-title">
          Select one:
        </div>

        <div class="options cols-2">

          ${option(
            "I have not fully recovered from my workplace<br>injury.",
            d.recovery === "notFully"
          )}

          ${option(
            "I have fully recovered from my workplace<br>injury.",
            d.recovery === "fully"
          )}

        </div>

      </div>


      <div class="box large-field">

        <div class="box-title">
          I have provided the following comments about my recovery:
        </div>

        <div class="small-blue">
          ${d.recoveryComments || "&nbsp;"}
        </div>

      </div>


      ${footer(d, 1)}

    </section>
  `;
}


/* =========================
   PAGE 2
   ========================= */

function page2(d) {

  const pain = [1,2,3,4,5,6,7,8,9,10]
    .map(n =>
      option(
        String(n),
        d.pain === n
      )
    )
    .join("");


  return `
    <section class="paper">


      <!-- PAIN -->

      <div
        style="
          font-size:14px;
          margin:0 0 12px;
          display:grid;
          grid-template-columns:1.35fr 1fr;
          gap:12px;
          align-items:start
        "
      >

        <div>
          I rate my current pain/discomfort on a scale of 1-10,
          <br>
          where 1 is no pain and 10 is severe pain out of 10.
        </div>

        <div
          class="options cols-5"
          style="gap:10px 18px"
        >
          ${pain}
        </div>

      </div>


      <!-- MEDICAL TREATMENT -->

      <div class="box">

        <div class="box-title">
          Select one:
        </div>

        <div class="options cols-3">

          ${option(
            "I am not continuing to<br>receive medical treatment for<br>my workplace injury.",
            d.treatment === "notContinuing"
          )}

          ${option(
            "I am continuing to receive<br>medical treatment for my<br>workplace injury from:",
            d.treatment === "continuing"
          )}

          <div>

            ${val(d.providerType)}

            <div
              style="
                font-size:10px;
                text-align:center;
                margin-top:2px
              "
            >
              (Medical Provider Type)
            </div>

          </div>

        </div>

      </div>


      <!-- LAST TREATMENT -->

      <div
        style="
          font-size:14px;
          margin:18px 0
        "
      >

        My last medical treatment was
        ${val(d.lastTreatmentDate, "date-field")}

        <small
          style="
            display:inline-block;
            text-align:center;
            width:120px
          "
        >
          Date
        </small>

        from

        ${val(d.lastProvider)}

        <small
          style="
            display:inline-block;
            text-align:center;
            width:150px
          "
        >
          (Medical Provider Name)
        </small>

      </div>


      <!-- NEXT TREATMENT -->

      <div
        style="
          font-size:14px;
          margin:18px 0
        "
      >

        My next medical treatment is
        ${val(d.nextTreatmentDate, "date-field")}

        <small
          style="
            display:inline-block;
            text-align:center;
            width:120px
          "
        >
          Date
        </small>

        from

        ${val(d.nextProvider)}

        <small
          style="
            display:inline-block;
            text-align:center;
            width:150px
          "
        >
          (Medical Provider Name)
        </small>

      </div>


      <!-- PHYSIO -->

      <div
        style="
          font-size:14px;
          margin:18px 0 22px
        "
      >

        I am attending a Chiropractor or Physiotherapist

        ${val(d.physioFrequency)}

        <small
          style="
            display:inline-block;
            text-align:center;
            width:150px
          "
        >
          (Frequency)
        </small>

      </div>


      <!-- MEDICATION -->

      <div class="box">

        <div class="box-title">
          Select one:
        </div>

        <div class="options cols-2">

          ${option(
            "I am not taking medication<br>for my workplace injury.",
            d.medication === "notTaking"
          )}

          ${option(
            "I am taking medication for my<br>workplace injury:",
            d.medication === "taking"
          )}

        </div>


        <div
          style="
            text-align:right;
            margin-top:6px
          "
        >

          ${val(d.medicationName)}

          <div style="font-size:10px">
            (Name of prescribed medication)
          </div>

        </div>

      </div>


      <!-- HOME EXERCISES -->

      <div class="box">

        <div class="box-title">
          Select one:
        </div>

        <div class="options cols-2">

          ${option(
            "I am not doing home exercises for my workplace<br>injury.",
            d.exercises === "notDoing"
          )}

          ${option(
            "I am doing home exercises for my workplace injury.",
            d.exercises === "doing"
          )}

        </div>

      </div>


      <!-- EXERCISE LIST -->

      <div class="box large-field">

        <div class="box-title">
          List the exercises you are doing:
        </div>

        <div class="small-blue">
          ${d.exerciseList || "&nbsp;"}
        </div>

      </div>


      <!-- OTHER INFORMATION -->

      <h2>Other Information</h2>

      <div class="box">

        <div class="box-title">
          I would like to provide the following additional information about my claim/injury:
        </div>

        <div class="small-blue">
          ${d.additional || "&nbsp;"}
        </div>

      </div>


      <!-- =========================
           CERTIFICATION MOVED HERE
           ========================= -->

      <div
        style="
          font-size:11px;
          line-height:1.18;
          margin:22px 8px 0;
          display:flex;
          gap:8px;
          align-items:flex-start
        "
      >

        ${check(true)}

        <div>
          I certify that the information given on this form is true,
          correct and complete to the best of my knowledge. I agree to
          notify the Workers Compensation Board of Manitoba (WCB)
          immediately once I return to any form of work and/or employment.
          I understand that it is an offence to knowingly make a false
          statement to the WCB. I also understand that it is an offence
          to withhold information from WCB which affects my entitlement
          to compensation (e.g., full or partial recovery from injury,
          ability to return to work, sources of additional income, etc.).
          I understand that refusing to co-operate with, or follow my
          treatment, may result in the WCB reducing or suspending my
          benefits.
        </div>

      </div>


      <div
        style="
          font-size:11px;
          line-height:1.18;
          margin:18px 8px 0;
          display:flex;
          gap:8px;
          align-items:flex-start
        "
      >

        ${check(true)}

        <div>
          I understand that the
          <span
            class="small-blue"
            style="text-decoration:underline"
          >
            Privacy Notice
          </span>
          applies to the personal information collected in this document.
        </div>

      </div>


      ${footer(d, 2)}

    </section>
  `;
}


/* =========================
   RENDER
   ========================= */

function render(d) {

  document.getElementById("report").innerHTML =
    page1(d) +
    page2(d);

}


/* =========================
   DATASET DROPDOWN
   ========================= */

const select =
  document.getElementById("datasetSelect");


Object.keys(datasets).forEach(k => {

  const optionElement =
    document.createElement("option");

  optionElement.value = k;

  optionElement.textContent =
    k === "sampleA"
      ? "Sample A — Original-like data"
      : "Sample B — Alternate data";

  select.appendChild(optionElement);

});


select.addEventListener(
  "change",
  () => render(datasets[select.value])
);


/* =========================
   INITIAL RENDER
   ========================= */

render(datasets.sampleA);
import React from 'react';
import uniqid from 'uniqid';
import Banner1 from '../../assets/Case Study 1- Taco Truckin/Case study banner.png';
import Banner2 from '../../assets/Case Study 2- Nest Quest/Case study banner.png';
import Banner3 from '../../assets/Case Study 3- VitalFlow/Case study banner.png';
import './CaseStudy.css';

export const CaseStudy = (from) => {
  const caseStudy = from.location.state.project;
  var banner;
  if (caseStudy.name === 'Taco Trukin’') {
    banner = Banner1;
  } else if (caseStudy.name === 'Nest Quest') {
    banner = Banner2;
  } else {
    banner = Banner3;
  }

  console.log(caseStudy);
  return (
    <div className="casestudy">
      <div className="banner">
        <img src={banner} alt="Banner" className="banner-image" />
      </div>
      <div className="project-overview">
        <h3 className="overview-heading">Project Overview</h3>
        <h4 className="overview-subheading">PROBLEM STATEMENT</h4>
        <p className="overview-desc">{caseStudy.projectOverview.problemStatement}</p>
        <div className="statement-specs">
          <div className="specs">
            <h5>TIMELINE</h5>
            <p>{caseStudy.projectOverview.timeline}</p>
          </div>
          <div className="specs">
            <h5>ROLE</h5>
            <p>{caseStudy.projectOverview.role}</p>
          </div>
          <div className="specs">
            <h5>TEAM</h5>
            <p>{caseStudy.projectOverview.team}</p>
          </div>
          <div className="specs">
            <h5>PLATFORM</h5>
            <p>{caseStudy.projectOverview.platform}</p>
          </div>
        </div>
      </div>
      <div className="background">
        <h3 className="background-heading">Background</h3>
        <div className="hypothesis">
          <h4>HYPOTHESIS</h4>
          <p className="bg-desc">{caseStudy.background.hypothesis}</p>
        </div>
        <div className="why">
          <h4>WHY?</h4>
          <p className="bg-desc">{caseStudy.background.why}</p>
        </div>
        <div className="business">
          <h4>BUSINESS OPPORTUNITIES</h4>
          <p className="bg-desc">{caseStudy.background.businessOp}</p>
        </div>
      </div>
      <div className="research">
        <h3 className="research-heading">Research</h3>
        <div className="survey-result">
          <h4 className="survey-heading">SURVEY RESULTS</h4>
          <p className="survey-details">{caseStudy.research.surveyRes}</p>
          
            {caseStudy.research.surveyImages && 
              <div>
                <img src={caseStudy.research.surveyImages} alt="Survey" className="survey-image" />
              </div>
            }
        </div>
        <div className="user-interview">
          <h3 className="user-inter-heading">USER INTERVIEWS</h3>
          <p className="interview-desc">{caseStudy.research.userInt.desc}</p>
          <h5 className="interview-heading">{caseStudy.research.userInt.head1}</h5>
          <div className="heading-desc">
            {caseStudy.research.userInt.head1Desc.map((hd1, i) => {
              return (
                <p className="desc-point" key={uniqid()}>• {hd1.point}</p>
              )
            })}
          </div>
          <h5 className="interview-heading">{caseStudy.research.userInt.head2}</h5>
          <div className="heading-desc">
            {caseStudy.research.userInt.head1Desc.map((hd1, i) => {
              return (
                <p className="desc-point" key={uniqid()}>{hd1.point}</p>
              )
            })}
          </div>
        </div>
      </div>
      <div className="insights">
        <h3 className="insights-heading">Insights</h3>
        <h4 className="insights-subheading">MAIN LEARNINGS</h4>
        <div className="learnings-list">
          {caseStudy.insights.map((ins, i) => {
            return (
              <div className="insight" key={uniqid()}>
                <p className="insight-num">Insight {ins.number}</p>
                <h5 className="insight-heading">{ins.heading}</h5>
                <p className="insight-desc">{ins.desc}</p>
              </div>
            )
          })}
        </div>
        <h4 className="insights-quote">{caseStudy.insightsQuote}</h4>
      </div>
      <div className="building-empathy">
        <h3 className="empathy-heading">Building Empathy</h3>
        <div className="empathy-map">
          <h4 className="map-heading">
            EMPATHY MAP
          </h4>
          <img src={caseStudy.buildingEmp.empathyMap} alt="Empathy Map" className="empathy-map-img"/>
        </div>
        <div className="user-persona">
          <h4 className="persona-heading">
            USER PERSONA
          </h4>
          <img src={caseStudy.buildingEmp.userPersona} alt="User Persona Map" className="persona-img"/>
        </div>
        <div className="user-journey">
          <h4 className="journey-heading">
            USER JOURNEY MAP
          </h4>
          <img src={caseStudy.buildingEmp.userJourneyMap} alt="User Journey Map" className="journey-map-img"/>
        </div>
      </div>
      <div className="concept">
        <h3 className="concept-heading">Concept</h3>
        <div className="info-arch">
          <h4 className="info-arch-heading">INFORMATION ARCHITECTURE</h4>
          <p className="info-arch-desc">{caseStudy.concept.infoArch}</p>
          <img src={caseStudy.concept.infoArchImg} alt="" className="info-arch-img" />
        </div>
        <div className="sitemap">
          <h4 className="sitemap-heading">SITEMAP</h4>
          <img src={caseStudy.concept.sitemap} alt="" className="info-arch-img" />
        </div>
        {caseStudy.name === 'Taco Trukin’' &&
          <div className="info-arch">
            <h4 className="wire-heading">PAPER WIREFRAMES</h4>
            <p className="info-arch-desc">
              {caseStudy.concept.paperWireframes}
            </p>
            <div className="paper-wireframes-imgs">
              {caseStudy.concept.paperWireImg.map((img, i) => {
                return (
                  <img src={img} alt="wireframes1" key={uniqid()} className="paper-img" />
                )
              })}
            </div>
          </div>
        }
        <div className="info-arch">
          <h4>LOW FIDELITY WIREFRAMES</h4>
          <p className="info-arch-desc">
            {caseStudy.concept.paperWireframes}
          </p>
          {caseStudy.name === ('Taco Trukin’' || 'VitalFlow') &&
            <div className="lowfide-imgs1">
            {caseStudy.concept.lowFideImg.map((img, i) => {
              return (
                <img src={img} alt="lowFide" key={uniqid()} className="lowfide1-img" />
              )
            })}
            </div>
          }
          {caseStudy.name === 'Nest Quest' &&
            <div className="lowfide-imgs2">
            {caseStudy.concept.lowFideImg.map((img, i) => {
              return (
                <img src={img} alt="lowFide" key={uniqid()} className="lowfide2-img" />
              )
            })}
            </div>
          }
        </div>
        {caseStudy.name === 'Taco Trukin’' &&
          <div className="info-arch">
            <h4>MID-FIDELITY WIREFRAMES AND PROTOTYPE</h4>
            <p className="info-arch-desc">
              {caseStudy.concept.midFidWireframes}
            </p>
            <img src={caseStudy.concept.midFideImg} alt="" className="midFideImg" />
          </div>
        }
      </div>
      <div className="final-design">
        <h3 className="design-heading">Final Design</h3>
        <h4 className="user-interface">USER INTERFACE</h4>
        <div className="ui">
          {caseStudy.finalDesign.map((ui, i) => {
            return (
              <div key={uniqid()}>
                <h5 className="ui-heading">{ui.heading}</h5>
                <p className="ui-desc">{ui.uiDesc}</p>
                <div className="ui-images">
                  {ui.uiImages.map((img, i) => {
                    return (
                      <img src={img} alt="UI" className="ui-img" key={uniqid()}/>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className="style-guide">
          <h4 className="style-heading">STYLE GUIDE</h4>
          <div className="style-box">
            <div className="colors">
              <h4 className="colors-heading">Colours</h4>
              <h5 className="colors-subheading">Primary & Secondary Colours</h5>
              <h5 className="colors-subheading">Neutrals & Other Colours</h5>
            </div>
            <div className="typography">
              <h4 className="typography-heading">Typography</h4>
              <h5 className="typography-font">{caseStudy.typography}</h5>
              <p className="typography-weight">
                <span className="reg">Regular</span>,
                <span className="med"> Medium</span>,
                <span className="semi-bold"> SemiBold</span>,
                <span className="bold"> Bold</span>
              </p>
              <div className="typography-text">
                <p className="reg">AaBbCcDdEeFfGgHh</p>
                <p className="med">AaBbCcDdEeFfGgHh</p>
                <p className="semi-bold">AaBbCcDdEeFfGgHh</p>
                <p className="bold">AaBbCcDdEeFfGgHh</p>
              </div>
            </div>
          </div>
          <h5 className="spacing-grid">Spacing and grid</h5>
          <p className="spacing-desc">{caseStudy.spacing}</p>
        </div>
      </div>
      <div className="summary">
        <h3 className="summary-heading">Summary</h3>
        <h4 className="deliverables">DELIVERABLES</h4>
        <p className="deliverables-desc">{caseStudy.deliverables}</p>
        {caseStudy.learnings.length > 0 && 
        <div className="learnings">
        {caseStudy.name !== 'VitalFlow' && 
          <h3 className="learnings-heading">LEARNINGS</h3>      
        }
          {caseStudy.learnings.map((learning, i) => {
            return (
              <div key={uniqid()}>
                <p className="learning-desc">
                  <span className="learning-desc-heading">{learning.heading}</span>{learning.desc}
                </p>
              </div>
            )
          })}
        </div>
        }
      </div>
      <h3 className="casestudy-end">Thank You</h3>
    </div>
  );
};
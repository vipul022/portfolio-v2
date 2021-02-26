// import React from "react";
// import { Container, Grid, Paper } from "@material-ui/core";
// import { Fade } from "react-reveal";
// import portfolioImage from "../../images/portfolio-v2.png";
// import potteryClubImage from "../../images/sotrpc.png";
// import expressChatImage from "../../images/express-chat.png";
// import farmerSmartImage from "../../images/farmer-smart.png";
// import weatherAppImage from "../../images/weather-app.png";
// import portfolioImageV1 from "../../images/portfolio-v1.png";
// import HeadingSecondary from "../Headings/HeadingSecondary";
// import HeadingTertiary from "../Headings/HeadingTertiary";
// import ProjectImage from "./ProjectImage";
// import ProjectDescription from "./ProjectDescription";

// const Projects = () => {
//   return (
//     <section className="section-projects">
//       <Container>
//         <HeadingSecondary>projects</HeadingSecondary>
//         <div className="u-padding">
//           <Grid container spacing={6} className="u-margin-bottom-big">
//             <Grid item xs={12} md={7} sm={12}>
//               <ProjectImage
//                 ImageSrc={portfolioImage}
//                 ImageAlt="Portfolio version-2 website"
//               />
//             </Grid>
            
//             <Grid item xs={12} md={5} sm={12}>
//               <Fade right distance={"4rem"} delay={1000}>
//                 <Paper elevation={3} className="card-project-info">
//                   <HeadingTertiary>Portfolio Version-2</HeadingTertiary>
//                   <ProjectDescription>
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                     Quia, ipsam praesentium facilis atque, voluptate, eius
//                     repellendus soluta iure corrupti veniam delectus! Soluta,
//                     repellendus soluta iure corrupti veniam delectus! Soluta,
//                     repellendus soluta iure corrupti veniam delectus!
//                     Soluta,repellendus soluta iure corrupti veniam delectus!
//                     Soluta,Soluta,repellendus
//                   </ProjectDescription>

//                   <Grid container={true} justify={"space-evenly"} spacing={2}>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-react-original-wordmark colored"></i>
//                     </Grid>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-sass-original colored"></i>
//                     </Grid>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-materialui-plain colored"></i>
//                     </Grid>
//                   </Grid>
//                 </Paper>
//               </Fade>
//             </Grid>
//           </Grid>

//           <Grid container spacing={6} className="u-margin-bottom-big">
//             <Grid item xs={12} md={7} sm={12}>
//               <ProjectImage
//                 ImageSrc={potteryClubImage}
//                 ImageAlt="South of the Rivers Potters Club website"
//               />
//             </Grid>

//             <Grid item xs={12} md={5} sm={12}>
//               <Fade
//                 right
//                 distance={"4rem"}
//                 delay={1000}
//                 className="card-project-image"
//               >
//                 <Paper elevation={3} className="card-project-info">
//                   <HeadingTertiary>MERN Stack App</HeadingTertiary>
//                   <ProjectDescription>
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                     Quia, Lorem ipsum dolor sit, amet consectetur adipisicing
//                     elit. Quia, Lorem ipsum dolor sit, amet consectetur
//                     adipisicing elit. Quia, Lorem ipsum dolor sit, amet
//                     consectetur adipisicing elit. Quia, Lorem ipsum dolor sit,
//                     amet consectetur adipisicing elit. Quia,consectetur
//                     adipisicing elit. Quia, Lorem ipsum
//                   </ProjectDescription>

//                   <Grid container={true} justify={"space-evenly"} spacing={2}>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-mongodb-plain-wordmark colored"></i>
//                     </Grid>
//                     <Grid item={true} item className="icon">
//                       <i class="devicon-express-original colored"></i>
//                     </Grid>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-react-original-wordmark colored"></i>
//                     </Grid>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-nodejs-plain-wordmark colored"></i>
//                     </Grid>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-amazonwebservices-plain-wordmark colored"></i>
//                     </Grid>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-sass-original colored"></i>
//                     </Grid>
//                   </Grid>
//                 </Paper>
//               </Fade>
//             </Grid>
//           </Grid>

//           <Grid container spacing={6} className="u-margin-bottom-big">
//             <Grid item xs={12} md={7} sm={12}>
//               <ProjectImage
//                 ImageSrc={expressChatImage}
//                 ImageAlt="Express Chat app"
//               />
//             </Grid>
//             <Grid item xs={12} md={5} sm={12}>
//               <Fade
//                 right
//                 distance={"4rem"}
//                 delay={1000}
//                 className="card-project-image"
//               >
//                 <Paper elevation={3} className="card-project-info">
//                   <HeadingTertiary>Express Chat</HeadingTertiary>
//                   <ProjectDescription>
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                     Quia, Lorem ipsum dolor sit, amet consectetur adipisicing
//                     elit. Quia, Lorem ipsum dolor sit, amet consectetur
//                     adipisicing elit. Quia, Lorem ipsum dolor sit, amet
//                     consectetur adipisicing elit. Quia, Lorem ipsum dolor sit,
//                     amet consectetur adipisicing elit. Quia,consectetur
//                     adipisicing elit. Quia, Lorem ipsum
//                   </ProjectDescription>

//                   <Grid container={true} justify={"space-evenly"} spacing={2}>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-javascript-plain colored"></i>
//                     </Grid>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-mongodb-plain-wordmark colored"></i>
//                     </Grid>
//                     <Grid item={true} item className="icon">
//                       <i class="devicon-express-original colored"></i>
//                     </Grid>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-nodejs-plain-wordmark colored"></i>
//                     </Grid>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-html5-plain-wordmark colored"></i>
//                     </Grid>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-css3-plain-wordmark colored"></i>
//                     </Grid>
//                   </Grid>
//                 </Paper>
//               </Fade>
//             </Grid>
//           </Grid>

//           <Grid container spacing={6} className="u-margin-bottom-big">
//             <Grid item item xs={12} md={7} sm={12}>
//               <ProjectImage ImageSrc={weatherAppImage} ImageAlt="Weather app" />
//             </Grid>

//             <Grid item item xs={12} md={5} sm={12}>
//               <Fade
//                 right
//                 distance={"4rem"}
//                 delay={1000}
//                 className="card-project-image"
//               >
//                 <Paper elevation={3} className="card-project-info">
//                   <HeadingTertiary>Weather or Not</HeadingTertiary>
//                   <ProjectDescription>
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                     Quia, Lorem ipsum dolor sit, amet consectetur adipisicing
//                     elit. Quia, Lorem ipsum dolor sit, amet consectetur
//                     adipisicing elit. Quia, Lorem ipsum dolor sit, amet
//                     consectetur adipisicing elit. Quia, Lorem ipsum dolor sit,
//                     amet consectetur adipisicing elit. Quia,consectetur
//                     adipisicing elit. Quia, Lorem ipsum
//                   </ProjectDescription>

//                   <Grid container={true} justify={"space-evenly"} spacing={2}>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-javascript-plain colored"></i>
//                     </Grid>

//                     <Grid item={true} className="icon">
//                       <i class="devicon-html5-plain-wordmark colored"></i>
//                     </Grid>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-css3-plain-wordmark colored"></i>
//                     </Grid>
//                   </Grid>
//                 </Paper>
//               </Fade>
//             </Grid>
//           </Grid>

//           <Grid container spacing={6} className="u-margin-bottom-big">
//             <Grid item item xs={12} md={7} sm={12}>
//               <ProjectImage
//                 ImageSrc={farmerSmartImage}
//                 ImageAlt="FarmerSmart website"
//               />
//             </Grid>
//             <Grid item item xs={12} md={5} sm={12}>
//               <Fade
//                 right
//                 distance={"4rem"}
//                 delay={1000}
//                 className="card-project-image"
//               >
//                 <Paper elevation={3} className="card-project-info">
//                   <HeadingTertiary>FarmerSmart</HeadingTertiary>
//                   <ProjectDescription>
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                     Quia, Lorem ipsum dolor sit, amet consectetur adipisicing
//                     elit. Quia, Lorem ipsum dolor sit, amet consectetur
//                     adipisicing elit. Quia, Lorem ipsum dolor sit, amet
//                     consectetur adipisicing elit. Quia, Lorem ipsum dolor sit,
//                     amet consectetur adipisicing elit. Quia,consectetur
//                     adipisicing elit. Quia, Lorem ipsum
//                   </ProjectDescription>

//                   <Grid container={true} justify={"space-evenly"} spacing={2}>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-rails-plain-wordmark colored"></i>
//                     </Grid>

//                     <Grid item={true} className="icon">
//                       <i class="devicon-postgresql-plain-wordmark colored"></i>
//                     </Grid>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-amazonwebservices-plain-wordmark colored"></i>
//                     </Grid>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-bootstrap-plain-wordmark colored"></i>
//                     </Grid>
//                   </Grid>
//                 </Paper>
//               </Fade>
//             </Grid>
//           </Grid>

//           <Grid container spacing={6} className="u-margin-bottom-big">
//             <Grid item item xs={12} md={7} sm={12}>
//               <ProjectImage
//                 ImageSrc={portfolioImageV1}
//                 ImageAlt="Portfolio version-1 website"
//               />
//             </Grid>

//             <Grid item item xs={12} md={5} sm={12}>
//               <Fade
//                 right
//                 distance={"4rem"}
//                 delay={1000}
//                 className="card-project-image"
//               >
//                 <Paper elevation={3} className="card-project-info">
//                   <HeadingTertiary>Portfolio Version-1</HeadingTertiary>
//                   <ProjectDescription>
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                     Quia, Lorem ipsum dolor sit, amet consectetur adipisicing
//                     elit. Quia, Lorem ipsum dolor sit, amet consectetur
//                     adipisicing elit. Quia, Lorem ipsum dolor sit, amet
//                     consectetur adipisicing elit. Quia, Lorem ipsum dolor sit,
//                     amet consectetur adipisicing elit. Quia,consectetur
//                     adipisicing elit. Quia, Lorem ipsum
//                   </ProjectDescription>

//                   <Grid container={true} justify={"space-evenly"} spacing={2}>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-html5-plain-wordmark colored"></i>
//                     </Grid>
//                     <Grid item={true} className="icon">
//                       <i class="devicon-css3-plain-wordmark colored"></i>
//                     </Grid>
//                   </Grid>
//                 </Paper>
//               </Fade>
//             </Grid>
//           </Grid>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Projects;

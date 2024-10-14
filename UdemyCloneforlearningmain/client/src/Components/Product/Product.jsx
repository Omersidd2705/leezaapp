import React, { useState } from 'react';
import "./Product.css";
import ReportIcon from "@mui/icons-material/Report";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import ClosedCaptionRoundedIcon from "@mui/icons-material/ClosedCaptionRounded";
import ArrowRightSharpIcon from "@mui/icons-material/ArrowRightSharp";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import StarHalfSharpIcon from "@mui/icons-material/StarHalfSharp";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import NoteAddSharpIcon from "@mui/icons-material/NoteAddSharp";
import SystemUpdateAltTwoToneIcon from "@mui/icons-material/SystemUpdateAltTwoTone";
import AllInclusiveTwoToneIcon from "@mui/icons-material/AllInclusiveTwoTone";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import EmojiEventsTwoToneIcon from "@mui/icons-material/EmojiEventsTwoTone";
import { Header } from "../Header/Header";
import ExpandLess from "@mui/icons-material/ExpandLess"; // Import ExpandLess
import ExpandMore from "@mui/icons-material/ExpandMore"; // Import ExpandMore
import ReactPlayer from 'react-player';
export const Product = () => {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle the click event to toggle video
  const handleVideoClick = () => {
    setIsPlaying(!isPlaying); // Toggle video display
  };

  // Function to handle the click event to toggle section
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div>
        <div className="BlackBox">
          <div className="BBText">
            <div className="flex purpal">
              <h5>Diploma</h5>
              <span className="icon">
                <ArrowRightSharpIcon />
              </span>
              <h5> Diplomas </h5>
              <span className="icon">
                <ArrowRightSharpIcon />
              </span>
              <h5>Diplomas</h5>
            </div>

            <h1 className="white headingTop1">
            Diploma in Special Education
            </h1>

            <h3 className="white">
            Comprehensive understanding of various disabilities and strategies to address educational challenges.
            </h3>

            <div>
              <span className="Ybox">Bestseller</span>
              <span className="darkyellow">
                4.3
                <span>
                  <StarPurple500SharpIcon />
                  <StarPurple500SharpIcon />
                  <StarPurple500SharpIcon />
                  <StarPurple500SharpIcon />
                  <StarHalfSharpIcon />
                </span>
              </span>
              <span className="purpal underline">(1000 rating)</span>
              <span className="white">1000 +students</span>
            </div>

            <div className="Bcreated">
              <span className="white">Created by </span>
              <span className="purpal underline">Ibrahim</span>
            </div>

            <div className="white BBbottom">
              <span className="BBicons">
                <ReportIcon />
              </span>
              <span className="BBbottomText">Last updated 9/2024</span>
              <span className="BBicons">
                <PublicTwoToneIcon />
              </span>
              <span className="BBbottomText">English</span>
              <span className="BBicons">
                <ClosedCaptionRoundedIcon />
              </span>
              <span className="BBbottomText">
                English [Auto], Indonesian [Auto],{" "}
              </span>
              <span className="BBbottomText underline">6 more</span>
            </div>
          </div>
        </div>

        <div className="fixBox FixB">
          <div className="innerFixBox">
            <div className="Ftop2lines">
              <div className="flex FTH">
                <h1 className="FT1"> ₹1000 </h1>
                <span className="FT2"> ₹2000 </span>
                <span className="FT3"> 50% off </span>
              </div>
              <div className="red">
                <AccessAlarmsIcon />
                <span className="bold">5 hours</span> left at this price!
              </div>
            </div>

            <button className="gotocartBtn">Go to cart</button>
            <button className="buynowBtn">Buy now</button>

            <p className="center">30-Day Money-Back Guarantee</p>

            <div className="ThisCourse">
              <h4>This course includes:</h4>
              <p>
                <OndemandVideoSharpIcon /> 21 hours on-demand video
              </p>
              <p>
                <NoteAddSharpIcon /> 3 articles
              </p>
              <p>
                <SystemUpdateAltTwoToneIcon /> 4 downloadable resources
              </p>
              <p>
                <AllInclusiveTwoToneIcon /> Full lifetime access
              </p>
              <p>
                <PhoneAndroidTwoToneIcon /> Access on mobile and TV
              </p>
              <p>
                <EmojiEventsTwoToneIcon /> Certificate of completion
              </p>
            </div>

            <div className="flex gap underline pointer">
              <h4>Share</h4>
              <h4>Gift this course</h4>
              <h4>Apply Coupon</h4>
            </div>

            <div className="training">
              <h3>Training 5 or more people?</h3>
              <p>
                Get your team access to 6,000+ top Udemy courses anytime,
                anywhere.
              </p>
              <button className="buynowBtn btn2">Try Udemy Business</button>
            </div>
          </div>
        </div>

        <div className="MiddleMainDiv">
          <div className="MiddleContent">
            <h2>What you'll learn</h2>
            <div className="flex">
              <table>
                <tbody>
                  <tr className="MLcon flex">
                    <td className="MLcon flex">
                      <span>
                        <DoneRoundedIcon />
                      </span>
                      <p>Have an intermediate skill level of Autism.</p>
                    </td>

                    <td className="MLcon flex">
                      <span>
                        <DoneRoundedIcon />
                      </span>
                      <p>Use the Jupyter Notebook Environment.</p>
                    </td>
                  </tr>
                  <tr className="MLcon flex">
                    <td className="MLcon flex">
                      <span>
                        <DoneRoundedIcon />
                      </span>
                      <p>Use of cource infomation.</p>
                    </td>

                    <td className="MLcon flex">
                      <span>
                        <DoneRoundedIcon />
                      </span>
                      <p>
                       Autism
                      </p>
                    </td>
                  </tr>
                  <tr className="MLcon flex">
                    <td className="MLcon flex">
                      <span>
                        <DoneRoundedIcon />
                      </span>
                      <p>
                        better learning and cources
                      </p>
                    </td>

                    <td className="MLcon flex">
                      <span>
                        <DoneRoundedIcon />
                      </span>
                      <p>
                        Create a well studies
                      </p>
                    </td>
                  </tr>
                  <tr className="MLcon flex">
                    <td className="MLcon flex">
                      <span>
                        <DoneRoundedIcon />
                      </span>
                      {/* <p>Have a portfolio of various data analysis projects.</p> */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Start courecontent */}

          <div className="CourseContent">
            <h2>Course content</h2>
            <div className="flex">
              <p>15 sections • 110 lectures • 21h 5m total length</p>
              <h5 className="Expand">Expand all sections</h5>
            </div>

            <div className="CourceMainBox">
              <div className="CourceBoxs">
                <List sx={{ width: "100%" }}>
                  <ListItemButton onClick={handleClick}>
                    <div className="flex">
                      <h4>Section 1: Introduction</h4>
                      {open ? <ExpandLess /> : <ExpandMore />} {/* Use imported components */}
                    </div>
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton className="Cbtn">
                        <div onClick={handleVideoClick} className="flex">
                          <span className="Cplay">
                            <PlayCircleFilledRoundedIcon />
                          </span>
                          <h4>Welcome to the course</h4>
                        </div>
                      </ListItemButton>
                      {isPlaying && (
  <div className="videoContainer">
  <ReactPlayer
    url="https://www.youtube.com/watch?v=iu-LBY7NXD4"
    controls={true} // Optional: Show player controls
    width="100%" // Set the width as needed
    height="100%" // Set the height as needed
  />
                        </div>
                      )}
                      <ListItemButton className="Cbtn">
                        <div onClick={handleVideoClick} className="flex">
                          <span className="Cplay">
                            <PlayCircleFilledRoundedIcon />
                          </span>
                          <h4>class-1</h4>
                        </div>
                      </ListItemButton>
                      {isPlaying && (
                        <div className="videoContainer">
                          {/* <video width="400" controls>
                            <source
                              src="https://drive.google.com/file/d/11C_s8DmG9VhFfwY1wM6fjTVLT7KgdJLU/preview" // replace with your video URL
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video> */}
                           <ReactPlayer
    url="https://www.youtube.com/watch?v=iu-LBY7NXD4"
    controls={true} // Optional: Show player controls
    width="100%" // Set the width as needed
    height="100%" // Set the height as needed
  />
                        </div>
                      )}
                      <ListItemButton className="Cbtn">
                        <div onClick={handleVideoClick} className="flex">
                          <span className="Cplay">
                            <PlayCircleFilledRoundedIcon />
                          </span>
                          <h4>class-2</h4>
                        </div>
                      </ListItemButton>
                      {isPlaying && (
                        <div className="videoContainer">
                          {/* <video width="400" controls>
                            <source
                              src="https://drive.google.com/file/d/11C_s8DmG9VhFfwY1wM6fjTVLT7KgdJLU/preview" // replace with your video URL
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video> */}
                           <ReactPlayer
    url="https://www.youtube.com/watch?v=iu-LBY7NXD4"
    controls={true} // Optional: Show player controls
    width="100%" // Set the width as needed
    height="100%" // Set the height as needed
  />
                        </div>
                      )}
                      <ListItemButton className="Cbtn">
                        <div onClick={handleVideoClick} className="flex">
                          <span className="Cplay">
                            <PlayCircleFilledRoundedIcon />
                          </span>
                          <h4>class-3</h4>
                        </div>
                      </ListItemButton>
                      {isPlaying && (
                        <div className="videoContainer">
                          {/* <video width="400" controls>
                            <source
                              src="https://drive.google.com/file/d/11C_s8DmG9VhFfwY1wM6fjTVLT7KgdJLU/preview" // replace with your video URL
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video> */}
                           <ReactPlayer
    url="https://www.youtube.com/watch?v=iu-LBY7NXD4"
    controls={true} // Optional: Show player controls
    width="100%" // Set the width as needed
    height="100%" // Set the height as needed
  />
                        </div>
                      )}
                      <ListItemButton className="Cbtn">
                        <div onClick={handleVideoClick} className="flex">
                          <span className="Cplay">
                            <PlayCircleFilledRoundedIcon />
                          </span>
                          <h4>class-4</h4>
                        </div>
                      </ListItemButton>
                      {isPlaying && (
                        <div className="videoContainer">
                          {/* <video width="400" controls>
                            <source
                              src="https://drive.google.com/file/d/11C_s8DmG9VhFfwY1wM6fjTVLT7KgdJLU/preview" // replace with your video URL
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video> */}
                           <ReactPlayer
    url="https://www.youtube.com/watch?v=iu-LBY7NXD4"
    controls={true} // Optional: Show player controls
    width="100%" // Set the width as needed
    height="100%" // Set the height as needed
  />
                        </div>
                      )}
                      <ListItemButton className="Cbtn">
                        <div onClick={handleVideoClick} className="flex">
                          <span className="Cplay">
                            <PlayCircleFilledRoundedIcon />
                          </span>
                          <h4>class-5</h4>
                        </div>
                      </ListItemButton>
                      {isPlaying && (
                        <div className="videoContainer">
                          {/* <video width="400" controls>
                            <source
                              src="https://drive.google.com/file/d/11C_s8DmG9VhFfwY1wM6fjTVLT7KgdJLU/preview" // replace with your video URL
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video> */}
                           <ReactPlayer
    url="https://www.youtube.com/watch?v=iu-LBY7NXD4"
    controls={true} // Optional: Show player controls
    width="100%" // Set the width as needed
    height="100%" // Set the height as needed
  />
                        </div>
                      )}
                      <ListItemButton className="Cbtn">
                        <div onClick={handleVideoClick} className="flex">
                          <span className="Cplay">
                            <PlayCircleFilledRoundedIcon />
                          </span>
                          <h4>class-7</h4>
                        </div>
                      </ListItemButton>
                      {isPlaying && (
                        <div className="videoContainer">
                          {/* <video width="400" controls>
                            <source
                              src="https://drive.google.com/file/d/11C_s8DmG9VhFfwY1wM6fjTVLT7KgdJLU/preview" // replace with your video URL
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video> */}
                           <ReactPlayer
    url="https://www.youtube.com/watch?v=iu-LBY7NXD4"
    controls={true} // Optional: Show player controls
    width="100%" // Set the width as needed
    height="100%" // Set the height as needed
  />
                        </div>
                      )}
                    </List>
                  </Collapse>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </>
  );
};

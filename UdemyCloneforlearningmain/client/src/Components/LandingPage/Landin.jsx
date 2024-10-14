import { Header } from "../Header/Header";
import "../Header/header.css";
import banner from "../../assets/middle.jpg";
import { Link } from "react-router-dom";
import { ProdCard, SuggestionCard, TechCard } from "../ProdCard/ProdCard";
import { PopperCard } from "../ProdCard/popperprodcard";
import { styled } from "@mui/material/styles";
import { nanoid } from "nanoid";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import "./Landin.css";
// import { Route } from "react-router-dom";

export const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    padding: "0",
  },
}));
export const Landigpage = () => {
  return (
    <>
      <Banner />
    </>
  );
};

const Banner = () => {
  // const [loading, setLoading] = useState(true);
  const loading = useRef(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // The static data you want to use
    const data = [
      {
        _id: "6247328626c7d77dcaf6335b",
        title: "Diploma in Special Education",
        price: 3200,
        discount: 0,
        category: "Diplomas",
        sub_category: "Diplomas",
        topic: "react",
        author: "victor bastos",
        date: "2022-12-01T00:00:00.000Z",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ZemUZx8L_Ooja7ieK9NPaE5ghS5B04qGBQ&s",
        qty: 12,
        description: "Comprehensive understanding of various disabilities and strategies to address educational challenges.",
        level: "all level",
        details: [
          "Comprehensive understanding ",
          "Comprehensive understanding ",
          "Comprehensive understanding "
        ],
        createdAt: "2022-04-01T17:12:38.179Z",
        updatedAt: "2022-04-02T05:02:51.327Z",
        rating: 4.3
      },
      
      {
        _id: "6247d791150b5c1ba7b54033",
        title: "Diploma in Psychology",
        price: 3200,
        discount: 0,
        category: "Diplomas",
        sub_category: "Diplomas",
        topic: "react",
        author: "victor bastos",
        date: "2022-03-01T00:00:00.000Z",
        image: "data:image/jpeg;base64,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",
        qty: 12,
        description: "This course covers all you need to know about becoming a top skilled web developer even if you never programmed before!",
        level: "all level",
        details: [
          "The Complete Freelancer Guide",
          "e-Book, Certificate of Completion",
          "30 Free Responsive Templates"
        ],
        createdAt: "2022-04-02T04:56:49.252Z",
        updatedAt: "2022-04-02T04:56:49.252Z"
      },
        {
        _id: "6247d791150b5c1ba7b54033",
        title: "Diploma in Inclusive Education",
        price: 3200,
        discount: 0,
        category: "Diplomas",
        sub_category: "Diplomas",
        topic: "react",
        author: "victor bastos",
        date: "2022-03-01T00:00:00.000Z",
        image: "data:image/jpeg;base64,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",
        qty: 12,
        description: "This course covers all you need to know about becoming a top skilled web developer even if you never programmed before!",
        level: "all level",
        details: [
          "The Complete Freelancer Guide",
          "e-Book, Certificate of Completion",
          "30 Free Responsive Templates"
        ],
        createdAt: "2022-04-02T04:56:49.252Z",
        updatedAt: "2022-04-02T04:56:49.252Z"
      },
        {
        _id: "6247d791150b5c1ba7b54034",
        title: "Diploma in Behavioural Therapy",
        price: 3200,
        discount: 0,
        category: "Diplomas",
        sub_category: "Diplomas",
        topic: "react",
        author: "victor bastos",
        date: "2022-03-01T00:00:00.000Z",
        image:"https://www.skill-up.org/wp-content/uploads/2021/05/CBT-Cognitive-Behavioural-Therapy.jpg",
        description: "This course covers all you need to know about becoming a top skilled web developer even if you never programmed before!",
        level: "all level",
        details: [
          "The Complete Freelancer Guide",
          "e-Book, Certificate of Completion",
          "30 Free Responsive Templates"
        ],
        createdAt: "2022-04-02T04:56:49.252Z",
        updatedAt: "2022-04-02T04:56:49.252Z"
      },
        {
        _id: "6247d791150b5c1ba7b54034",
        title: "Autism Spectrum Disorder",
        price: 3200,
        discount: 0,
        category: "short-term",
        sub_category: "short-term",
        topic: "react",
        author: "victor bastos",
        date: "2022-03-01T00:00:00.000Z",
        image:"https://www.skill-up.org/wp-content/uploads/2021/05/CBT-Cognitive-Behavioural-Therapy.jpg",
        description: "This course covers all you need to know about becoming a top skilled web developer even if you never programmed before!",
        level: "all level",
        details: [
          "The Complete Freelancer Guide",
          "e-Book, Certificate of Completion",
          "30 Free Responsive Templates"
        ],
        createdAt: "2022-04-02T04:56:49.252Z",
        updatedAt: "2022-04-02T04:56:49.252Z"
      },
        {
        _id: "6247d791150b5c1ba7b54034",
        title: "ADHD Certification",
        price: 3200,
        discount: 0,
        category: "short-term",
        sub_category: "short-term",
        topic: "react",
        author: "victor bastos",
        date: "2022-03-01T00:00:00.000Z",
        image:"https://www.skill-up.org/wp-content/uploads/2021/05/CBT-Cognitive-Behavioural-Therapy.jpg",
        description: "This course covers all you need to know about becoming a top skilled web developer even if you never programmed before!",
        level: "all level",
        details: [
          "The Complete Freelancer Guide",
          "e-Book, Certificate of Completion",
          "30 Free Responsive Templates"
        ],
        createdAt: "2022-04-02T04:56:49.252Z",
        updatedAt: "2022-04-02T04:56:49.252Z"
      },
        {
        _id: "6247d791150b5c1ba7b54033",
        title: "Empowering Autistic Adults and Children to Reach Their Full Potential",
        price: 3200,
        discount: 0,
        category: "short-term",
        sub_category: "short-term",
        topic: "react",
        author: "victor bastos",
        date: "2022-03-01T00:00:00.000Z",
        image: "https://www.indiaautismcenter.org/wp-content/uploads/baby-doing-his-first-steps-1.jpg",
        qty: 12,
        description: "This course covers all you need to know about becoming a top skilled web developer even if you never programmed before!",
        level: "all level",
        details: [
          "The Complete Freelancer Guide",
          "e-Book, Certificate of Completion",
          "30 Free Responsive Templates"
        ],
        createdAt: "2022-04-02T04:56:49.252Z",
        updatedAt: "2022-04-02T04:56:49.252Z"
      },
        {
        _id: "6247d791150b5c1ba7b54033",
        title: "Empowering Autistic Adults and Children to Reach Their Full Potential",
        price: 3200,
        discount: 0,
        category: "short-term",
        sub_category: "short-term",
        topic: "react",
        author: "victor bastos",
        date: "2022-03-01T00:00:00.000Z",
        image: "https://www.indiaautismcenter.org/wp-content/uploads/baby-doing-his-first-steps-1.jpg",
        qty: 12,
        description: "This course covers all you need to know about becoming a top skilled web developer even if you never programmed before!",
        level: "all level",
        details: [
          "The Complete Freelancer Guide",
          "e-Book, Certificate of Completion",
          "30 Free Responsive Templates"
        ],
        createdAt: "2022-04-02T04:56:49.252Z",
        updatedAt: "2022-04-02T04:56:49.252Z"
      },
        {
        _id: "6247d791150b5c1ba7b54033",
        title: "Learning Disabilities",
        price: 3200,
        discount: 0,
        category: "short-term",
        sub_category: "short-term",
        topic: "react",
        author: "victor bastos",
        date: "2022-03-01T00:00:00.000Z",
        image: "https://www.indiaautismcenter.org/wp-content/uploads/baby-doing-his-first-steps-1.jpg",
        qty: 12,
        description: "This course covers all you need to know about becoming a top skilled web developer even if you never programmed before!",
        level: "all level",
        details: [
          "The Complete Freelancer Guide",
          "e-Book, Certificate of Completion",
          "30 Free Responsive Templates"
        ],
        createdAt: "2022-04-02T04:56:49.252Z",
        updatedAt: "2022-04-02T04:56:49.252Z"
      },
        {
        _id: "6247d791150b5c1ba7b54033",
        title: "Learning Disabilities",
        price: 3200,
        discount: 0,
        category: "short-term",
        sub_category: "short-term",
        topic: "react",
        author: "victor bastos",
        date: "2022-03-01T00:00:00.000Z",
        image: "",
        qty: 12,
        description: "This course covers all you need to know about becoming a top skilled web developer even if you never programmed before!",
        level: "all level",
        details: [
          "The Complete Freelancer Guide",
          "e-Book, Certificate of Completion",
          "30 Free Responsive Templates"
        ],
        createdAt: "2022-04-02T04:56:49.252Z",
        updatedAt: "2022-04-02T04:56:49.252Z"
      },
        {
        _id: "6247d791150b5c1ba7b54033",
        title: "Child Health and Nutrition",
        price: 3200,
        discount: 0,
        category: "short-term",
        sub_category: "short-term",
        topic: "react",
        author: "victor bastos",
        date: "2022-03-01T00:00:00.000Z",
        image: "data:image/jpeg;base64,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",
        qty: 12,
        description: "This course covers all you need to know about becoming a top skilled web developer even if you never programmed before!",
        level: "all level",
        details: [
          "The Complete Freelancer Guide",
          "e-Book, Certificate of Completion",
          "30 Free Responsive Templates"
        ],
        createdAt: "2022-04-02T04:56:49.252Z",
        updatedAt: "2022-04-02T04:56:49.252Z"
      },
        {
        _id: "6247d791150b5c1ba7b54033",
        title: "Teaching Methods for Special Needs",
        price: 3200,
        discount: 0,
        category: "short-term",
        sub_category: "short-term",
        topic: "react",
        author: "victor bastos",
        date: "2022-03-01T00:00:00.000Z",
        image: "data:image/jpeg;base64,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",
        qty: 12,
        description: "This course covers all you need to know about becoming a top skilled web developer even if you never programmed before!",
        level: "all level",
        details: [
          "The Complete Freelancer Guide",
          "e-Book, Certificate of Completion",
          "30 Free Responsive Templates"
        ],
        createdAt: "2022-04-02T04:56:49.252Z",
        updatedAt: "2022-04-02T04:56:49.252Z"
      },
    ];

    // Set the data
    loading.current = false;
    setProducts([...data]);
  }, []);
  return (
    <>
      <section>
        <div className="midbanner">
          <div className="bannercard">
            <div>
              <h1>Dream Leeza </h1>
              <p>
                Where you want to go. 
              </p>
            </div>
          </div>
          <div className="bannerdiv">
            <img src={banner} alt="some" />
          </div>
        </div>
      </section>

      {loading.current ? (
        <>
          <SkeltonLoading />
          <SkeltonLoading />
        </>
      ) : (
        <>
          <section>
            <div className="headline">
              <div className="headline_main-text">
                A broad selection of courses
              </div>
              <div className="headline_sub-text">
                Choose from 183,000 online video courses with new additions
                published every month
              </div>
            </div>
          </section>
          <section>
            <div className="data-comp">
              <div className="data-cont">
                <div className="topic-btn">
                  <button>
                    <span>LEEZA-Short term certificates</span>
                  </button>
                  <button>
                    <span>Diplomas</span>
                  </button>
                  {/* <button>
                    <span>Leeza.Web Development</span>
                  </button>
                  <button> */}
                    {/* <span>Leeza.JavaScrip</span>
                  </button>
                  <button>
                    <span>Leeza.Data Science</span>
                  </button>
                  <button>
                    <span>Leeza.AWS Certification</span>
                  </button>
                  <button>
                    <span>Leeza.AWS Certification</span>
                  </button>
                  <button>
                    <span>Leeza.Drawing</span>
                  </button> */}
                </div>
                <div className="skill-hub">
                  <div className="skill-desc">
                    <h2>Expand your career opportunities with LEEZA</h2>
                    <p>
                      Take one of Leeza range of Python courses and learn how
                      to code using this incredibly useful language. Its simple
                      syntax and readability makes Python perfect for Flask,
                      Django, data science, and machine learning. You’ll learn
                      how to build everything from games to sites to apps.
                      Choose from a range of courses that will appeal to both
                      beginners and advanced developers alike.
                    </p>
                    <Link className="skill-titl-btn" to={"#"}>
                      <span>Explore</span>
                    </Link>
                  </div>
                  <div className="prod-cont">
  {products.map((el) => (
    <Link to={`/product/${el._id}`} key={el._id}>
      <LightTooltip
        arrow
        placement="right"
        title={<PopperCard data={el} />}
      >
        <ProdCard data={el} />
      </LightTooltip>
    </Link>
    
  ))}
</div>
{/* <Route path="/product/:id" component={ProductDetails} /> */}


                </div>
              </div>
            </div>
          </section>
          {/* <section>
            <SuggestionCard
              title={"Popular for advancing Web Developers"}
              data={products}
              category={"It & Software"}
            />
            <SuggestionCard
              title={"Popul in Marketing"}
              data={products}
              category={"Marketing"}
            />
          </section>

          <section>
            <TechCard />
          </section> */}
          <section>
            <div className="featured">
              <div className="feature-cont">
                <h2>Featured topic by category</h2>
                <div>
                  <div>
                    <h3>LEEZA PAGE</h3>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                  </div>
                  <div>
                    <h3>Development</h3>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                  </div>
                  <div>
                    <h3>Development</h3>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                  </div>
                  <div>
                    <h3>Development</h3>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                    <div className="topic">
                      <Link className="trendlink" to={"#"}>
                        Python
                      </Link>
                      <span>34,280,976 students</span>
                    </div>
                  </div>
                </div>
                <a className="com-btn" href="/">
                  <span>Explore more topics</span>
                </a>
              </div>
            </div>
          </section>
          <section>
            <div className="poster1">
              <div className="poster-cont">
                <img
                  className="banner-2"
                  src="https://pbs.twimg.com/ext_tw_video_thumb/1757641265544626176/pu/img/ylErYlGWkEryPUWM.jpg"
                  alt=""
                />
                <div>
                  <PitchCard
                    title={"Become an instructor"}
                    des={
                      "Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love."
                    }
                    btn={"Start teaching today"}
                  />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="partner">
              <Patner />
            </div>
          </section>
          <section>
            <div className="poster1">
              <div className="poster-cont">
                <div>
                  <PitchCard2 />
                </div>
                <img
                  className="banner-2"
                  src="/"
                  alt=""
                />
              </div>
            </div>
          </section>
          <section>
            <div className="poster1">
              <div className="poster-cont">
                <img
                  className="banner-2"
                  src="leeza.png"
                  alt=""
                />
                <div>
                  <PitchCard
                    title={"Transform your life through education"}
                    des={
                      "Learners around the world are launching new careers, advancing in their fields, and enriching their lives."
                    }
                    btn={"Find out how"}
                  />
                </div>
              </div>
            </div>
          </section>
          <section></section>
        </>
      )}
    </>
  );
};
/*
 */
const PitchCard = ({ title, des, btn }) => {
  return (
    <div className="pitch-cont">
      <h1 className="pitchHead">{title}</h1>
      <p className="pitchdec">{des}</p>
      <UdemyBtn btn={btn} />
    </div>
  );
};
const PitchCard2 = () => {
  return (
    <div className="pitch-cont">
      <img
        className="pitchcard2img"
        src="leeza.png"
        alt=""
      />
      <p className="pitchdec">
        Get unlimited access to 6,000+ of Leeza top courses for your team.
        Learn and improve skills across business, tech, design, and more.
      </p>
      <UdemyBtn btn={"Get Udemy Business"} />
    </div>
  );
};

const UdemyBtn = ({ btn }) => {
  return (
    <div>
      <Link to={"#"} className="udemylinkbtn">
        {btn}
      </Link>
    </div>
  );
};

const Patner = () => {
  return (
    <div>
      <h3 className="partner-title">Trusted by companies of all sizes</h3>
      <div className="parner-logo-cont">
        {/* <img
          src="leeza.png"
          alt=""
        />
        <img
          src="leeza.png"
          alt=""
        />
        <img
          src="leeza.png"
          alt=""
        />
        <img
          src="leeza.png"
          alt=""
        />
        <img
          src="leeza.png"
          alt=""
        /> */}
      </div>
    </div>
  );
};

const SkeltonLoading = () => {
  return (
    <>
      <div className="skelton">
        <Skeleton className="line" variant="text" animation="wave" />
        <div className="midskel">
          <Skeleton
            className="rectangel"
            variant="rectangular"
            width={50}
            height={50}
          />
          <div>
            <Part />
          </div>
        </div>
      </div>
    </>
  );
};
const Part = () => {
  return (
    <>
      <Skeleton variant="text" className="wave" animation="wave" />
      <Skeleton variant="text" className="wave" animation="wave" />
      <Skeleton variant="text" className="wave" animation="wave" />
      <Skeleton variant="text" className="wave" animation="wave" />
    </>
  );
};

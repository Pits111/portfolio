import ReadMore from "./ReadMore";
import Typography from "@material-ui/core/Typography";
import { useSpring, animated } from "react-spring";
import './Intro.css'; 
import Avatar from './../img/Avatar.svg';
import Agile from "./Agile";
import './Agile.css'; 
import Banner from './Banner';
import './Banner.css';
import Slider from "./Slider";



const Home = () => {
    const title = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 1000,
    
        config: {
          duration: 1000, // duration for the whole animation form start to end
        },
      });

      const text = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 2000,
    
        config: {
          duration: 1000, // duration for the whole animation form start to end
        },
      });

    return (
        <div className="Intro">
            <animated.div style={title}>
                <h1 classname="maintitle-desktop">Hi, I am Isa</h1>
                <br></br>
                <img 
                className="avatar" 
                src={Avatar} 
                alt="avatar"/>
            </animated.div>
            <br></br>
            <animated.div style={text}>
            <div className="intro-text-isa">
            <ReadMore>
                <Typography className="intro-isa">
                <h4>
                    Welcome to my website! <br/>
                    You found your way here which means, you are looking for something specific. If you are interested in my professional background and specifically the projects I have been working on, feel free to checkout the
                    <span className="letter_color"> portfolio </span> section. If you are a tech-lover and care about valuable innovations as much as I do, 
                    look around in the <span className="letter_color">blog</span> section. In case you want to know more about 
                    <span className="letter_color"> agile frameworks </span> such as Scrum or Canban or inform yourself about Working-Out-Loud circles, 
                    scroll down and dive into the topic
                    of <span className="letter_color">new work</span>.<br/>
                    <br/>

                    Having worked as an IT project manager, product owner, policy advisor and even creative producer, I have gained a bunch of
                    tech and soft-skills throughout the years. Currently, I am evolving my web development skills. So besides displaying
                    my portfolio and thoughts on valuable innovations, this site is my personal ongoing sandbox project to exercise Java Script and React. <br/>
              
                    <br/>
                    In any case, enjoy your journey and do not hesitate to <span className="letter_color"> contact me </span> if you have questions.   
                    <br/>
                  </h4>
                </Typography>
            </ReadMore>
            </div>
            </animated.div>
            <Banner />
            <Slider /> 
              <div className="agile-frame">
                  <h1 id="agile-heading">Working Agile in 4.0</h1>
                  <div className="agile_wrapper_one">
                    <img 
                      className="team-img" 
                      src="https://i.postimg.cc/Kjtc7V3x/TEAM.png"
                      alt="Teamwork"/> 
                    <Agile 
                      title="Working Agile in 4.0" 
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                  </div>
                  <div className="agile_wrapper_two">
                    <img 
                      className="team-img" 
                      src="https://i.postimg.cc/GtVVXhYy/clock.png"
                      alt="Teamwork"/> 
                    <Agile 
                      title="Agile vs Waterfall" 
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                  </div>
                  <div className ="agile_wrapper_three">
                    <img 
                      className="team-img" 
                      src="https://i.postimg.cc/hvDTN98F/shutterstock-1110532412.png"
                      alt="Teamwork"/>
                    <Agile 
                      title="Scrum or Canban" 
                      content="
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        "/>
                  </div>
                  <div className="agile_wrapper_four">
                    <img 
                      className="team-img" 
                      src="https://i.postimg.cc/VkZwt1ZX/shutterstock-1240181551.png"
                      alt="Teamwork"/>
                    <Agile 
                      title="Agile Mindest" 
                      content="
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </br>
                        "/>
                    </div>
              </div>
        </div>
  );
};

export default Home; 
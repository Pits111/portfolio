import { Link } from 'react-router-dom';
import './Skill.css';


const SkillDetails = ({ routeProps }) => {
    console.log(routeProps);
    
    const skillContent = [
        {
            title: "Tech Skills",
            subone: "Between {Java Script} & Debugging ",
            paraone: "I never thought I would become a programmer one day. So it is no coincidence that my GitHup Name is -Pits- which stands for Pie in the sky. Nonetheless, here I am. Pariticpating in a full time bootcamp from the Wild Code School and hammering Java Script (JS), React, Express and SQL every day and night in my head. My facit: I am not a good programmer. I miss curley braces, forget semicolons and accidently switch letters. So half the time I spent with debugging. However, once I fixed all my bugs and the code works, it is the most amazing feeling that I cannot describe in words. That is, until I import a new library and nothing works again.",
            subtwo: "Managing The Workflow",
            paratwo: "In  my last job I worked as an IT project manger and it took me a while to understand, why not every wish I had was possible to realise. Especially not in the given time. Wearing now the shoes of a programmer, I have a better understanding of code and how to manage workflows. Using collaboration and management tools such as GitHub and Jira, writing clear and precise user stories and beeing able to draw mock ups, are all very useful tools to speed up the development process and increase the value of the product.",
            subthree: "Best Practice",
            parathree: "All my coding projects and the one's that I have participated in, can be found on my GitHub account. This also includes this website. My newest project that I am currently working on - whithin the Wild Code School - is a responsive web application for a fintech startup in Spain. The core of the startup which is called WWH, is a Customer Data Platform (CDP) that is built on top of NoSQL database. In a team of four, we work on the frontend and backend. As a scrum team we are self-organizing.  Our job is to create an MVP where bank customers can view their personal banking behavior and payment patterns. This kind of data analytics is possible due to the european Revised Payment Services Directive (PSD2), that allows third parties to access bank infrastructures and thereby create new business models.",
            subfour: "If you want to know more about < WWH > click on the image below",
            imgone: "https://i.postimg.cc/dtntBqs0/Tech-Stack-Hochaufloesung.png",
            imgtwo: "https://i.postimg.cc/hGTSjXFY/wwh.png",
            Link: "https://whenwhyhow.tech/product.html",
            id: 5,
        },
        {
            title: "Soft Skills",
            subone: "Leadership",
            paraone: "There is a difference between a leader and a boss. From my point of view, good leaders are able to learn, listen and inspire. If people are working out of instrinsic motivation in a respectful and honest environment, it will add value to the product beeing developed. This is also the reason, why I am a big fan of agile frameworks such as scrum. Scrum encourages people to live the values of commitment, courage, focus, openness and respect. If these values are embodied within the team, the scrum pillars of transparency, inspection and adaption come to life and build trust for everyone. In the end this results in amazing products for customers, patients and users alike.",
            subtwo: "Teamwork",
            paratwo: "The last project I have been working on - in the Techniker Krankenkasse - , was KIBALOU. What started with a hackathon, grew over time and developed into an agile software development circle. The product we developed was a serious game for children, called KIBALOU. It was my first time working as a project manager and product owner. So on the one hand, I was responsible for tracking the budget, time and finding new business partners. On the other hand, I was working closely with the development team, managing the backlog and in charge of the communication with internal and external stakeholders. Working agile with a cross-functional highly motivated and professional team, was an amazing experience that made me continue my journey in the agile software development. ",
            subfour: "To see more about KIBALOU and the startup behind it, click on the image below",
            imgone: "https://i.postimg.cc/jdgjVSzW/Soft-Skills-Hochaufloesung.png",
            imgtwo: "https://i.postimg.cc/6Ts7M50J/Kibalou.png",
            Link: "https://battyrabbit.com/portfolio/kibalou/",
            id: 6, 
        },
        {
            title: "Strategy",
            subone: "Vision & Mission",
            paraone: "The importance of an organization to develop a vision, is crucial for the company's strategic direction. A clear vision helps employees to know the purpose of its existence and core values on which the company is governed. It is an integral part of a company's strategy that helps to set priorities, allocate resources, and ensure that everyone is working towards the same goals and objectives, thus providing a road-map to the future. A clear vision is like an epic in Scrum. You cannot communicate it often enough.",
            subtwo: "Policy Windows & Story Telling",
            paratwo: "Nowadays, it is important to communicate products and messages through a variety of communication channels. Depending on the target group and subjects of interest, this includes podcasts, videos, short storie, social media campaigns on Twitter or LinkedIn and whitepapers for those, who like to go more into depth. And of course the 1:1 meetings. As no medium can replace a personal meeting. Important is, that you have the right medium at the right time. Especially in terms of policy making. Timing is everything. Once a policy windows open, you should have your message packed up and ready to go! That includes reducing complexity and length. If my positions were too long, I broke them down into digestable pieces. If the position was too complex. I made it authentic and looked up a real story. In any case, I always made sure that what I had to present, was in the interest of my customers and added value to their work. If that was not the case, I did not bother. Nothing is worse than wasting other peoples time. ",
            subfour: "To read the last WHITEPAPER I wrote on future healthcare, click on the image below",
            imgone: "https://i.postimg.cc/rshqLft6/Chess-Hochaufloesung.png",
            imgtwo: "https://i.postimg.cc/hv8J3R3X/TKCover.png",
            Link: "https://www.tk.de/resource/blob/2057560/79350ea011f613307781908115772d6c/position-digitale-gesundheit-data.pdf",
            id: 7, 
            
        },
        {
            title: "Creativity",
            subone: "Ideas With Impact",
            paraone: "I never had a problem coming up with new ideas. Of course not every idea I had made it to the final stage of realisation. But the fact that some of them did, and even got adapted and spread by others, made me very happy. I do not have a special source of inspriation. My network is very diverse and multicutlural. So I get many impulses directly from my peers, colleagues and friends. However, it could also be just an article from the newspaper or a podcast that I discovered, that gives me the missing spark for a new idea or solution.",
            subtwo: "Messages & Emotions",
            paratwo: "One of the projects were I could just let my creativity flow was, when I had the chance to work as a creative producer in 2019. Back then I was focusing on Artificial Intelligence (AI) and what impact this new technology would have for future healthcare. Diving deep into the subject I realised, that many people including our target group, did not know much about AI. Many terms such as machine learning, strong AI, weak AI etc. were floating around. So as a policy advisor I thought, it must be possible to cooperate with stakeholders, communicate a meaningful message and do something dynamic and fun at the same time. I wanted our target group got get excited and educated at the same time. With the OK of my employer, I ended up writing a concept and a story board and carrying out interviews with politicans. It took me weeks to find the right stockfootage, perfect sound, good introdcution text and finally editing the video. In the end the video was a huge success. Our stakeholders were happy, our target group was excited and the message we sent, went straight into peoples heads and hearts. Later the video was spread in the whole company and adjusted to different purposes.",
            subfour: "To see the AI-Video on Youtube click on the image below.",
            imgone: "https://i.postimg.cc/8kdFYGKW/Ligth-Bulb-Hochaufloesung.png",
            imgtwo: "https://i.postimg.cc/DZHdKhg5/TKVideo-Two.png",
            Link: "https://www.youtube.com/watch?v=VIr0YKX5Fbk",
            id: 8, 
        },
    ] 

    const foundMatch = skillContent.find((skillCategory) => skillCategory.title === routeProps.match.params.skilltitle)
        console.log(foundMatch);
    return (
        <div>
         <h1 className="skill-titles">{foundMatch.title}</h1>
        <div className="skill-frame">
        <div className="skill-container">
                <div className="imgone-container">
                    <img src={foundMatch.imgone} alt='XY' />
                </div>
                <div className="skill-content">
                    <div className="skill-subtitle">
                        <h2>{foundMatch.subone}</h2>
                    </div>
                    <div className="skill-textone">
                        <p>{foundMatch.paraone}</p>
                    </div>
                    <div className="skill-subtitle">
                        <h2>{foundMatch.subtwo}</h2>
                    </div>
                    <div className="skill-textwo">
                        <p>{foundMatch.paratwo}</p>
                    </div>
                    <div className="skill-subtitle">
                        <h2>{foundMatch.subthree}</h2>
                    </div>
                    <div className="skill-textthree">
                        <p>{foundMatch.parathree}</p>
                    </div>

                    <div className="skill-subtitle">
                        <h3>{foundMatch.subfour}</h3>
                    </div>
                    <div className="imgtwo-container">
                        <a href={foundMatch.Link}>
                         <img src={foundMatch.imgtwo} alt='XY' />
                        </a>
                    </div>
                   
                    <div className="go-back-btn">
                        <Link to = {`/portfolio`}>
                        <button className="go-back-btn">
                            Go back
                        </button>
                        </Link>
                       
                    </div>
                </div>
        </div>
        </div>
        </div>
    );
};

export default SkillDetails; 
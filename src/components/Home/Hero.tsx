const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl mx-auto gap-7">
        <div className="flex flex-col gap-2 w-full items-center">
          <img
            src="https://bipin-saha.github.io/images/avatar.jpg"
            className="max-w-lg w-full rounded-lg shadow-2xl"
          />
          <p className="lg:text-justify lg:w-full">
            <span className="text-xl font-bold">Rajshahi, Bangladesh</span>{" "}
            <br />
            <span className="text-lg font-semibold text-primary">
              {/* Email: <br /> */}
              <a href="mailto:bsaha@aggies.ncat.edu">
                bsaha@aggies.ncat.edu
              </a>{" "}
              <br />
              <a href="mailto:bipinsaha.bd@gmail.com">bipinsaha.bd@gmail.com</a>
            </span>
          </p>
        </div>
        <div>
          <h1 className="text-5xl font-bold">Bipin Saha</h1>
          <p className="py-6 text-justify">
            Hi, I am Bipin Saha (just call me Bipin) from Rajshahi, Bangladesh.
            I am an incoming PhD student in Electrical and Computer Engineering
            at North Carolina A&T State University (NCAT) starting from Fall
            2025 at ACCESS LAB.
            <br />
            I obtained my B.Sc. in Electrical and Electronic Engineering from
            University of Rajshahi (RU) in September 2022. During my
            undergraduate studies, I worked on a robust appearance-based eye
            gaze classification technique at natural head poses under the
            guidance of Dr. Md. Johirul Islam (RUET) in collaboration with
            Shaikh Khaled Mostaque (EEE, RU). Additionally, I contributed to
            developing a comprehensive dataset to advance vehicle detection in
            challenging and underrepresented regions and evaluated it with
            transfer learning techniques.
            <br />
            Previously, I worked as a Machine Learning Engineer under the
            Industry 4.0 team at Business Automation Limited, specializing in
            Vision Language Models, Computer Vision, Large Language Models, and
            Vision-enabled Robotic Systems. My primary research in robotics
            involves reasoning about events, understanding them, and generating
            actions using multimodal generative AI solutions.
            <br />
            I'm always excited to explore startup ideas and educational content
            creation opportunities. Feel free to reach out via email! Beyond
            research and coding, I have a passion for photography and traveling.
            I also love connecting with new people and exploring new places!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React, { Component } from 'react';
import './App.css';
import ViewSlider from 'react-view-slider';
import Button from './components/Button.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 0
    }
    this.changeView0 = this.changeView0.bind(this);
    this.changeView1 = this.changeView1.bind(this);
    this.changeView2 = this.changeView2.bind(this);
    this.changeView3 = this.changeView3.bind(this);
    this.changeView4 = this.changeView4.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  changeView0() {
    this.setState({view: 0});
  }

  changeView1() {
    this.setState({view: 1});
  }

  changeView2() {
    this.setState({view: 2});
  }

  changeView3() {
    this.setState({view: 3});
  }

  changeView4() {
    this.setState({view: 4});
  }


  renderView({index, key, ref, style, className, active, transitionState}) {
    if (index === 0) {
      return (
        <div key={key} ref={ref} style={style}>
          <div className="slide-1">
            <div className="not-photos">
              <h1>We match freelancers with cause + skills</h1>
              <p>These aren't just your average graphic designers, these are people whose heart and soul aligns with making the world a better place. We match you based on cause and skills, so you can find the passionate professionals you need to keep making a difference.</p>
              <Button text={"Sign Up"}/>
            </div>
            <div className='photoset'>
              <div>
                <div onClick={this.changeView1}>
                  <div><h2 >Design</h2>
                  <i className="fa fa-pencil"></i></div>
                  <img src={"./assets/bgimages/Pencils.png"} alt='pencils'/>
                </div>
                <div onClick={this.changeView2}>
                  <div><h2>Development</h2>
                  <i className="fa fa-gear"></i></div>
                  <img src={"./assets/bgimages/Map_Camera.png"} alt='pencils'/>
                </div>
              </div>
              <div>
                <div onClick={this.changeView3}>
                  <div><h2>Planning</h2>
                  <i className="fa fa-magnet"></i></div>
                  <img src={"./assets/bgimages/plants.png"} alt='pencils'/>
                </div>
                <div onClick={this.changeView4}>
                  <div><h2>Production</h2>
                  <i className="fa fa-video-camera"></i></div>
                  <img src={"./assets/bgimages/Books.png"} alt='pencils'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} else if (index === 1) {
      return (
        <div key={key} ref={ref} style={style} className={className}>
          <div className='slide-2'>
            <div>
              <h1>Photoshop, what a headache</h1>
              <p>We offer designers who understand those complex problems you're solving and can turn them into simple, digestible pieces of communication. Get your mission across quickly, beautifully, and most importantly, impactfully.</p>
              <Button text={"Hire a Creative"}/>
              <section>
                <div className="service-type">
                 <h2 >Design</h2>
                  <i className="fa fa-pencil"></i>
                </div>
                <div>
                  <p>Designer</p>
                  <p>Writer</p>
                  <p>UX Web Designer</p>
                  <p>Animation</p>
                </div>
                <div>
                  <p>Analytics</p>
                  <p>Communications Planning</p>
                  <p>SEO</p>
                  <p>Paid Advertising Planning</p>
                </div>
                <div>
                  <p>PR</p>
                  <p>Social Media Engagement</p>
                  <p>Video Editing</p>
                  <p>Project Manager</p>
                </div>
                <div>
                  <p>Email Template Creation</p>
                  <p>Customer Service</p>
                  <p>Translator</p>
                  <p>Proofreading</p>
                </div>
              </section>
            </div>
            <img src={"./assets/bgimages/Pencils.png"} alt='pencils' />
          </div>
        </div>
      )} else if (index === 2) {
      return (
        <div key={key} ref={ref} style={style} className={className}>
          <div className='slide-2'>
            <div>
              <h1>Drupal, shmupal</h1>
              <p>Open API's are great... when you have an entire development team to implement them. Help your IT director out and hire some short term developers to get that software working for you, not against you.</p>
              <Button text={"Hire a Developer"}/>
              <section>
                <div className="service-type">
                 <h2 >Development</h2>
                  <i className="fa fa-gear"></i>
                </div>
                <div>
                  <p>Website Dev</p>
                  <p>App Dev</p>
                  <p>Banner Animation</p>
                  <p>Prototyping</p>
                </div>
                <div>
                  <p>Interactive Dev</p>
                  <p>Product Dev</p>
                  <p>Email Templates</p>
                  <p>WordPress</p>
                </div>
                <div>
                  <p>Drupal</p>
                  <p>Back-end Dev</p>
                  <p>Front-end Dev</p>
                </div>
              </section>
            </div>
            <img src={"./assets/bgimages/Map_Camera.png"} alt='map camera' />
          </div>
        </div>
      )} else if (index === 3) {
      return (
        <div key={key} ref={ref} style={style} className={className}>
          <div className='slide-2'>
            <div>
              <h1>Who has time for strategy?</h1>
              <p>Freelancers, that's who! Want to get that social campaign going but not sure where to start? Why are there so many platforms all of a sudden? Who cares about hashtags? Deep breaths, our planning experts have you covered.</p>
              <Button text={"Hire a Planner"}/>
              <section>
                <div className="service-type">
                 <h2 >Planning</h2>
                  <i className="fa fa-magnet"></i>
                </div>
                <div>
                  <p>Analytics/Insights</p>
                  <p>Communications</p>
                  <p>Planning</p>
                  <p>Event Planning</p>
                </div>
                <div>
                  <p>Social Strategy</p>
                  <p>Brand Strategy</p>
                  <p>Digital</p>
                  <p>SEO</p>
                </div>
                <div>
                  <p>SEM</p>
                  <p>PR</p>
                  <p>Community Management</p>
                  <p>Paid Media Strategy</p>
                </div>
              </section>
            </div>
            <img src={"./assets/bgimages/plants.png"} alt='plants' />
          </div>
        </div>
      )} else if (index === 4) {
      return (
        <div key={key} ref={ref} style={style} className={className}>
          <div className='slide-2'>
            <div>
              <h1>Content creation shouldn't be a nightmare</h1>
              <p>Have beautiful footage of an event you want to cut together? What about a recent or upcoming program you want to highlight? Look no further, our production specialists will help you put together thumbstopping stories in no time.</p>
              <Button text={"Hire a Producer"}/>
              <section>
                <div className="service-type">
                 <h2 >Production</h2>
                  <i className="fa fa-video-camera"></i>
                </div>
                <div>
                  <p>Sound Editing</p>
                  <p>Video Editing</p>
                  <p>Sound Mixing</p>
                  <p>Translation</p>
                </div>
                <div>
                  <p>Digital Production</p>
                  <p>Project Manager</p>
                  <p>Casting</p>
                  <p>Proofreading</p>
                </div>
                <div>
                  <p>Voiceover</p>
                </div>
              </section>
            </div>
            <img src={"./assets/bgimages/Books.png"} alt='books' />
          </div>
        </div>
      )}
  }



  render() {
    return (
      <div className="App">
        <nav className="top-nav">
          <div className="nav-1">
            <a href='#'>How It Works</a>
            <a href='#'>Browse Projects</a>
          </div>
          <div className='logo-holder'>
            <img src={"./assets/Wethos_LogoAssets/Wethos_JustlogoPurple.png"}/>
          </div>
          <div className="nav-2">
            <a href='#'>I'm A Freelancer</a>
            <a href='#'>Log In/Sign Up</a>
          </div>
        </nav>
        <div className="spacer"></div>
        <div className="content">
          <div className="content-zero-text">
            <h1>Say goodbye to RFP's</h1>
            <p>Starthatching is the first freelance platform built specifically for nonprofits and socially conscous businesses, allowing you to find, source, and hire individual contractors that believe in your mission.</p>
            <Button text={"Get Started"}/>
          </div>
          <img src={"./assets/bgimages/Changetheword.png"} alt="Change the world"/>
        </div>
        <div className="content-2">
          <nav className="slider-nav">
            <div className={this.state.view === 0 ? 'selected' : 'not-selected'} onClick={this.changeView0}>Overview<hr/></div>
            <div className={this.state.view === 1 ? 'selected' : 'not-selected'} onClick={this.changeView1}>Design<hr/></div>
            <div className={this.state.view === 2 ? 'selected' : 'not-selected'} onClick={this.changeView2}>Development<hr/></div>
            <div className={this.state.view === 3 ? 'selected' : 'not-selected'} onClick={this.changeView3}>Planning<hr/></div>
            <div className={this.state.view === 4 ? 'selected' : 'not-selected'} onClick={this.changeView4}>Production<hr/></div>
          </nav>
          <ViewSlider
            renderView={this.renderView}
            numViews={5}
            activeView={this.state.view}
            animateHeight
          />
            <div className="whitebar">
              <div className={this.state.view === 0 ? 'c-selected' : 'c-not-selected'} onClick={this.changeView0}></div>
              <div className={this.state.view === 1 ? 'c-selected' : 'c-not-selected'} onClick={this.changeView1}></div>
              <div className={this.state.view === 2 ? 'c-selected' : 'c-not-selected'} onClick={this.changeView2}></div>
              <div className={this.state.view === 3 ? 'c-selected' : 'c-not-selected'} onClick={this.changeView3}></div>
              <div className={this.state.view === 4 ? 'c-selected' : 'c-not-selected'} onClick={this.changeView4}></div>
            </div>
        </div>

        <div className="content-3">
          <h2>Free to sign up,</h2>
          <h2>free to post projects</h2>
          <p className="main-p">We don't have any upfront or monthly fees, all you have to worry about is paying your freelancer. Speaking of which, how much do you even pay a freelancer anyway? Our unique pricing suggestion engine helps you set fair rates you can afford.</p>
          <Button text={"Browse Projects"} black={true}/>
          <div className='3-steps'>
            <div>
              <h3>1. SIGN UP</h3>
              <p>Create a profile that highlights your organization's mission.</p>
              <h3>2. POST PROJECTS IN MINUTES</h3>
              <p>Create a project posting in less time that it takes for you to draw up that RFP and send it out over email.</p>
              <h3>3. FREELANCERS APPLY TO YOU</h3>
              <p>We match based on your cause and the skills you need. Every time a passionate freelancer applies to your project you’ll receive an email alert.</p>

            </div>
            <div className="laptop">
              <img src={"https://wethos.co/img/signup.png"} alt="image of wethos website"/>
            </div>
          </div>
        </div>

        <div className="content-4">
          <div className="content-4-text">
            <h1>Near or far, we've got you covered</h1>
            <p>Small nonprofit in Michigan? Local no-kill shelter in Kentucky? You can work with some of the best and brightest professionals out of the biggest cities in the country.</p>
            <Button text={"Post a Project"}/>
          </div>
          <div className="freelancers-bios">
            <div className="single-fl">
              <div>
                <p><span>NAME: </span>Name One</p>
                <p><span>SKILL: </span>Skill and experience</p>
                <p><span>CAUSES: </span>First cause, second cause, third cause, fourth cause, fifth cause, sixth cause, sevent cause, eight cause.</p>
                <hr/>
              </div>
              <img src={"https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAArpAAAAJDU0OTllNGI0LThjYmMtNDA4Yi1iMWM2LTE2MjUzZjI4NTBhNQ.jpg"} alt="freelance 1"/>
            </div>
            <div className="single-fl">
              <div>
                <p><span>NAME: </span>Name Two</p>
                <p><span>SKILL: </span>Skill and experience</p>
                <p><span>CAUSES: </span>First cause, second cause, third cause, fourth cause, fifth cause, sixth cause, sevent cause, eight cause.</p>
                <hr/>
              </div>
              <img src={"https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAArpAAAAJDU0OTllNGI0LThjYmMtNDA4Yi1iMWM2LTE2MjUzZjI4NTBhNQ.jpg"} alt="freelance 1"/>
            </div>
            <div className="single-fl">
              <div>
                <p><span>NAME: </span>Name Three</p>
                <p><span>SKILL: </span>Skill and experience</p>
                <p><span>CAUSES: </span>First cause, second cause, third cause, fourth cause, fifth cause, sixth cause, sevent cause, eight cause.</p>
                <hr/>
              </div>
              <img src={"https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAArpAAAAJDU0OTllNGI0LThjYmMtNDA4Yi1iMWM2LTE2MjUzZjI4NTBhNQ.jpg"} alt="freelance 1"/>
            </div>
          </div>
          <img src={"./assets/bgimages/worldchanging.png"} alt="World from above"/>
        </div>
        <div className="content-5">
          <h2>Trusted by nonprofits big and small</h2>
          <p>No matter your size or cause, we'll find you freelancers who fit your budget and mission, because it's OUR mission to get you the help you need to keep changing the world.</p>
          <div>
            <div>
              <img className='diffsize' src={"https://wethos.co/img/rb.png"} alt="rb" />
            </div>
            <div>
              <img src={"https://wethos.co/img/project-orphans.png"} alt="project-orphans" />
              <img className='tallsize' src={"https://wethos.co/img/common-cause.png"} alt="common-cause" />
            </div>
            <div>
              <img src={"https://wethos.co/img/two-blind-brothers.png"} alt="two-blind-brothers" />
              <img className='diffsize' src={"https://wethos.co/img/human-rights-watch.png"} alt="human-rights-watch" />
            </div>
            <div>
              <img className='diffsize' src={"https://wethos.co/img/jed.png"} alt="jed" />
              <img className='tallsize' src={"https://wethos.co/img/nastad.png"} alt="nastad" />
            </div>
            <div>
              <img className='tallsize' src={"https://wethos.co/img/her-agenda.png"} alt="rb" />
            </div>
          </div>
        </div>
        <div className="content-6">
          <h2>Ready to ditch that RFP?</h2>
          <p>Give us a try, you're legally protected, there's no fee for posting a project and not going through with it, and if you receive work you aren't happy with, you're not obligated to pay.</p>
          <form>
           <input placeholder='Organization Name'/>
           <input placeholder='Website URL'/>
           <input placeholder='Email'/>
           <input placeholder='Password'/>
          </form>
          <Button text={"Sign Up"}/>
        </div>
        <div className='footer-container'><footer>
          <div>
            <h6>Please Help</h6>
            <p>FAQ Download</p>
            <p>Briefing Template</p>
            <p>Project Timeline Template</p>
          </div>
          <div>
            <h6>Things Lawyers Love</h6>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h6>Who Are These People</h6>
            <p>Meet The Team</p>
            <p>Blog</p>
          </div>
          <div>
            <h6>Can I Have Yo Number?</h6>
            <p>starthatching@gmail.com</p>
            <p>400 W. 20th, Suite 2S</p>
            <p>New York, NY 10011</p>
            <p>315.345.3957</p>
          </div>
          <div>
            <h6 className='footer-social'>Whatever you do, don't follow us</h6>
            <div>
              <div><i className="fa fa-facebook"></i></div>
              <div><i className="fa fa-linkedin"></i></div>
              <div><i className="fa fa-twitter"></i></div>
              <div><i className="fa fa-instagram"></i></div>
            </div>
            <p></p>
          </div>
        </footer></div>
      </div>
    );
  }
}


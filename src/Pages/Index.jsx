import React from 'react';
import videoFile from '../static/neon120.mp4';
import mini_logo from '../static/mini_logo.png';
import '../static/css/style.css'

function Index() {
  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center" style={{position: "relative" }}>
        <video src={videoFile} autoPlay loop muted style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: "1" }}>
        Seu navegador não suporta a reprodução de vídeo.
        </video>
        <div className="container d-flex justify-content-center align-items-center" style={{ zIndex: "1" }}>
            <div className="card text-center mb-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white"}}>
                <div className="d-flex justify-content-center align-items-center" style={{ height: "150px" }}>
                    <img src={mini_logo} className="card-img-top rounded-circle" alt="..." style={{ width: "150px", height: "150px", objectFit: "cover" }}></img>
                </div>
                <div className="card-body">
                    <h3 className="card-title">Alexandre Araujo</h3>
                    <h5 className="card-text">Full Stack Developer</h5>
                    <nav>
                    <div className="nav nav-tabs d-flex" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-about-me-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">About Me</button>
                        <button className="nav-link" id="nav-social-me-tab" data-bs-toggle="tab" data-bs-target="#nav-social-me" type="button" role="tab" aria-controls="nav-social-me" aria-selected="false">Social Media</button>
                        <button className="nav-link" id="nav-social-me2-tab" data-bs-toggle="tab" data-bs-target="#nav-social-me2" type="button" role="tab" aria-controls="nav-social-me2" aria-selected="false">Projects</button>
                    </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-about-me-tab" tabIndex="0">
                        <p>
                            Hi! I'm Alex, a Full Stack Developer.<br/>
                            My favorite languages are <br></br>
                            Python, JavaScript, and C#.<br/>
                            My main interests are <br></br>
                            programming, gamming, and philosophy.
                        </p>
                        
                    </div>
                    <div className="tab-pane fade" id="nav-social-me" role="tabpanel" aria-labelledby="nav-social-me-tab" tabIndex="0">
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <a href="https://www.linkedin.com/in/alexandre-araujo-7b7a04205/" class="btn mt-1 btn-primary" type="button">LinkedIn</a>
                        <a href="https://github.com/AlexandreAraujo01/" class="btn mt-1 btn btn-dark" type="button">GitHub</a>
                    </div>
                    </div>
                    
                    <div className="tab-pane fade" id="nav-social-me2" role="tabpanel" aria-labelledby="nav-social-me2-tab" tabIndex="0">
                        <h6>Comming Soon...</h6>
                    </div>

                    </div>
                </div>
            </div>

        </div>
  </div>
  );
}

export default Index;

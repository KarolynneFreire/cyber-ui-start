// import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar"
import SideBar from "../../components/SideBar/SideBar";
import Images from "../../assets/images.jsx";
import { Page, MainContainer, UserProfileContent, Profile, UserImage, Photo, Line, About, NameProfile, Span, Icon, Info, Notifications, Bio, Location, MainContent, UserProfileContainer, GroupSquare, Square, Graphics, P } from './Profile.styles.js'
import ResolutionNotAvailable from "../../components/ResolutionNotAvailable/ResolutionNotAvailable.jsx";

const UserProfile = () => {
  return (
    <>
      <Page>
      <SideBar/>
      <NavBar/>
    <ResolutionNotAvailable/>
        <MainContainer>
          <UserProfileContent>
              <Profile>
                <UserImage>
                  <Photo src={Images.Photo} alt="Profile photo" />
                  </UserImage>
                  <About>
                      <Span>
                  <NameProfile>Jamyle</NameProfile>
                        <Icon className='bx bxs-check-circle' style={{color:'#73a66f'}}  ></Icon>
                      </Span>
        
                      <Info>
                        <Location><i className='bx bx-message' style={{color:'#A0A0A0'}} ></i>
                        jamyleteste@gmail.com</Location>
                        <Location><i className='bx bx-current-location' style={{color:'#A0A0A0'}} ></i>
                        Recife - PE</Location> {/* DATA */}
                      </Info>
                      <Bio>
                      <i className='bx bxs-quote-left' style={{color:'#A0A0A0'}}></i>ﾠ
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est similique quisquam veniam vitae repudiandae? Excepturi fugiat voluptatem laudantium sapiente ipsum harum magnam, praesentium dolorem, asperiores quisquam maiores. Eos dolore possimus atque nihil sint enim assumenda ad, quos, nam totam voluptate.
                      ﾠ<i className='bx bxs-quote-right' style={{color:'#A0A0A0'}} ></i>
                      </Bio>
                  </About>
                  <Notifications>
                      <i className='bx bx-bell' style={{color:'#A0A0A0'}} ></i>
                  </Notifications>
              </Profile>
              <Line></Line>
          </UserProfileContent>
        
        </MainContainer>
        <MainContent>
          <UserProfileContainer>
            <GroupSquare>
              <Link to='/rota'>
                  <Square>
                    <Graphics>Example</Graphics>
                    <img src={Images.Photo} alt="Example" width={50} />
                    <P>Lorem ipsum dolor sit amet.</P>
                  </Square>
              </Link>
              <Link to="/rota">
                <Square>
                  <Graphics>Example</Graphics>
                  <img src={Images.Photo} alt="Example" width={50} />
                  <P>Lorem ipsum dolor sit amet.</P>
                </Square>
              </Link>
              <Link to="/rota">
                <Square>
                  <Graphics>Example</Graphics>
                  <img src={Images.Photo} alt="Example" width={50} />
                  <P>Lorem ipsum dolor sit amet.</P>
                </Square>
              </Link>
              <Link to="/rota">
              <Square>
                <Graphics>Example</Graphics>
                <img src={Images.Photo} alt="Example" width={50} />
                <P>Lorem ipsum dolor sit amet.</P>
              </Square>
             </Link>
            </GroupSquare>
            </UserProfileContainer>
            </MainContent>
      </Page>

    </>
  );
};

export default UserProfile;

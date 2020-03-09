import React from 'react';
import styled from 'styled-components';
import { variables } from '../variables';
import { connect } from 'react-redux';
//image
import BGImage from "../img/user.png"

const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Box = styled.div`
    width:90%;
    min-height:80vh;
    box-shadow:${variables.boxShadow};
    @media (max-width:${variables.mediaW_2}) {
        width:95%;
    }
`;

const Info = styled.div`
    width:90%;
    margin:10px auto;
    display:flex;
    justify-content:flex-start;
    align-items:flex-end;
    border-bottom: 2px solid ${variables.hoverClr};
    @media (max-width:${variables.mediaW_2}) {
        width:100%;
        justify-content:center;
    }
`;

const Avatar = styled.div`
    min-width:70px;
    min-height:90px;
    margin-bottom:5px;
    background-image: url(${BGImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Row = styled.div`
    padding:5px 0 5px 20px;
    color:${variables.hoverClr};
    display:flex;
    justify-content:flex-start;
    align-items:flex-end;
`;

const Title = styled.p`
    padding:0 5px ;
    color:${variables.titleClr};
    font-size:${variables.titleFZ};
`;

const Text = styled(Title)`
    font-size:${variables.mainFZ};
`;

const ProfilePage = (
        {
            isAutorization = false,
            profile = null
        }
    ) => {
        return(
            <Wrapper>
                <Box>
                    <Info> 
                        <Avatar/>
                        <div>
                            {profile &&
                                <>
                                    <Row>
                                        <Title>{profile.name}</Title>
                                    </Row> 
                                    <Row>
                                        <Text>{profile.location}</Text>
                                    </Row>
                                    <Row>
                                        {profile.filters.map(item =>(
                                            <Text key={item}>{item}</Text>
                                        ))}
                                        
                                    </Row>
                                </>
                            }
                        </div>
                    </Info>
                    
                </Box>
            </Wrapper>
        )

    }

const STP = state => ({
    isAutorization: state.isAutorization,
    profile: state.profile,
  });
  
  export default connect(
    STP,
    null,
  )(ProfilePage);